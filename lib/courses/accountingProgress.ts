// Progress storage for O Level Accounting 7707
// - Signed-out users: localStorage under `efe-progress-o7707-1.2`
// - Signed-in users: Firestore at `users/{uid}/courseProgress/{topicId}` (where topicId = "o7707-1.2")
// - First sign-in merge: merges localStorage into Firestore once per uid (`efe-progress-merged-{uid}`).

import {
  doc,
  getDoc,
  setDoc,
  collection,
  getDocs,
  writeBatch,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { ALL_O_LEVEL_TOPICS } from "./accountingSyllabus";

export interface TopicProgress {
  videoWatched: boolean;
  notesRead: boolean;
  quizPassed: boolean;
  bestScore: number;
  attempts: number;
  lastQuizIds: string[];
  updatedAt: number;
}

export type TopicStatus = "not-started" | "in-progress" | "studied" | "mastered";

export const DEFAULT_TOPIC_PROGRESS: TopicProgress = {
  videoWatched: false,
  notesRead: false,
  quizPassed: false,
  bestScore: 0,
  attempts: 0,
  lastQuizIds: [],
  updatedAt: 0,
};

const LOCAL_KEY_PREFIX = "efe-progress-";
const MERGE_FLAG_PREFIX = "efe-progress-merged-";
const AUTH_SKIP_KEY = "efe-accounting-auth-skip-until";
const FIRST_NOTES_PROMPT_SHOWN_KEY = "efe-accounting-first-notes-prompted";

export function getLocalKey(topicId: string): string {
  // topicId is already "o7707-1.2" -> "efe-progress-o7707-1.2"
  return `${LOCAL_KEY_PREFIX}${topicId}`;
}

function normalizeTimestamp(val: unknown): number {
  if (typeof val === "number" && !Number.isNaN(val)) return val;
  if (val && typeof val === "object" && "toMillis" in val && typeof (val as { toMillis: () => number }).toMillis === "function") {
    return (val as { toMillis: () => number }).toMillis();
  }
  if (typeof val === "string") {
    const parsed = Date.parse(val);
    if (!Number.isNaN(parsed)) return parsed;
  }
  return 0;
}

export function normalizeProgress(raw: Partial<Record<string, unknown>> | null | undefined): TopicProgress {
  if (!raw) return { ...DEFAULT_TOPIC_PROGRESS };
  return {
    videoWatched: Boolean(raw.videoWatched),
    notesRead: Boolean(raw.notesRead),
    quizPassed: Boolean(raw.quizPassed),
    bestScore: typeof raw.bestScore === "number" ? raw.bestScore : 0,
    attempts: typeof raw.attempts === "number" ? raw.attempts : 0,
    lastQuizIds: Array.isArray(raw.lastQuizIds) ? raw.lastQuizIds.map(String) : [],
    updatedAt: normalizeTimestamp(raw.updatedAt),
  };
}

// ── Status Calculation ────────────────────────────────────────────────────────
// Topics with no video skip the videoWatched check for Studied.
// Mastered = quizPassed is true.
// Studied = video + notes done (or notes done if topic has no video).
// In progress = any activity (videoWatched, notesRead, or attempts > 0) not yet studied/mastered.
export function computeTopicStatus(
  progress: TopicProgress | undefined,
  hasVideo: boolean
): TopicStatus {
  if (!progress) return "not-started";
  if (progress.quizPassed) return "mastered";
  const videoOk = hasVideo ? progress.videoWatched : true;
  if (videoOk && progress.notesRead) return "studied";
  if (progress.videoWatched || progress.notesRead || progress.attempts > 0) {
    return "in-progress";
  }
  return "not-started";
}

// ── LocalStorage Read / Write (Signed-out users) ──────────────────────────────
export function getLocalTopicProgress(topicId: string): TopicProgress {
  if (typeof window === "undefined") return { ...DEFAULT_TOPIC_PROGRESS };
  try {
    const raw = localStorage.getItem(getLocalKey(topicId));
    if (!raw) return { ...DEFAULT_TOPIC_PROGRESS };
    return normalizeProgress(JSON.parse(raw));
  } catch {
    return { ...DEFAULT_TOPIC_PROGRESS };
  }
}

export function getAllLocalProgress(): Record<string, TopicProgress> {
  const map: Record<string, TopicProgress> = {};
  if (typeof window === "undefined") return map;
  for (const t of ALL_O_LEVEL_TOPICS) {
    map[t.topicId] = getLocalTopicProgress(t.topicId);
  }
  return map;
}

export function saveLocalTopicProgress(topicId: string, progress: TopicProgress): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getLocalKey(topicId), JSON.stringify(progress));
  } catch {
    // ignore storage quota errors
  }
}

function hasProgressActivity(p: TopicProgress): boolean {
  return (
    p.videoWatched ||
    p.notesRead ||
    p.quizPassed ||
    p.bestScore > 0 ||
    p.attempts > 0 ||
    p.lastQuizIds.length > 0
  );
}

// ── Merge Logic ───────────────────────────────────────────────────────────────
// Booleans use OR, bestScore uses max, attempts uses max,
// lastQuizIds comes from whichever record has the later updatedAt.
export function mergeProgressRecords(a: TopicProgress, b: TopicProgress): TopicProgress {
  const laterIsA = a.updatedAt >= b.updatedAt;
  const latestIds = laterIsA
    ? a.lastQuizIds.length > 0
      ? a.lastQuizIds
      : b.lastQuizIds
    : b.lastQuizIds.length > 0
      ? b.lastQuizIds
      : a.lastQuizIds;

  return {
    videoWatched: a.videoWatched || b.videoWatched,
    notesRead: a.notesRead || b.notesRead,
    quizPassed: a.quizPassed || b.quizPassed,
    bestScore: Math.max(a.bestScore, b.bestScore),
    attempts: Math.max(a.attempts, b.attempts),
    lastQuizIds: latestIds,
    updatedAt: Math.max(a.updatedAt, b.updatedAt, Date.now()),
  };
}

// ── Firestore Read / Write / Merge (Signed-in users) ──────────────────────────
export async function mergeLocalToFirestoreOnce(uid: string): Promise<void> {
  if (typeof window === "undefined" || !uid) return;
  const mergeFlagKey = `${MERGE_FLAG_PREFIX}${uid}`;
  try {
    if (localStorage.getItem(mergeFlagKey) === "true") {
      return;
    }

    // Collect any non-empty local progress across the 28 topics
    const localEntries: Array<{ topicId: string; progress: TopicProgress }> = [];
    for (const t of ALL_O_LEVEL_TOPICS) {
      const localP = getLocalTopicProgress(t.topicId);
      if (hasProgressActivity(localP)) {
        localEntries.push({ topicId: t.topicId, progress: localP });
      }
    }

    if (localEntries.length > 0) {
      // Read existing Firestore docs in users/{uid}/courseProgress
      const colRef = collection(db, "users", uid, "courseProgress");
      const snap = await getDocs(colRef);
      const remoteMap: Record<string, TopicProgress> = {};
      snap.forEach((d) => {
        remoteMap[d.id] = normalizeProgress(d.data());
      });

      const batch = writeBatch(db);
      for (const { topicId, progress: localP } of localEntries) {
        const remoteP = remoteMap[topicId] || { ...DEFAULT_TOPIC_PROGRESS };
        const merged = mergeProgressRecords(localP, remoteP);
        const docRef = doc(db, "users", uid, "courseProgress", topicId);
        batch.set(docRef, merged);
      }
      await batch.commit();
    }

    localStorage.setItem(mergeFlagKey, "true");
  } catch (err) {
    console.error("Failed to merge local accounting progress to Firestore:", err);
  }
}

export async function getFirestoreTopicProgress(
  uid: string,
  topicId: string
): Promise<TopicProgress> {
  await mergeLocalToFirestoreOnce(uid);
  try {
    const ref = doc(db, "users", uid, "courseProgress", topicId);
    const snap = await getDoc(ref);
    if (!snap.exists()) return { ...DEFAULT_TOPIC_PROGRESS };
    return normalizeProgress(snap.data());
  } catch (err) {
    console.error("Failed to read topic progress from Firestore:", err);
    return { ...DEFAULT_TOPIC_PROGRESS };
  }
}

export async function getAllFirestoreProgress(
  uid: string
): Promise<Record<string, TopicProgress>> {
  await mergeLocalToFirestoreOnce(uid);
  const map: Record<string, TopicProgress> = {};
  for (const t of ALL_O_LEVEL_TOPICS) {
    map[t.topicId] = { ...DEFAULT_TOPIC_PROGRESS };
  }
  try {
    const colRef = collection(db, "users", uid, "courseProgress");
    const snap = await getDocs(colRef);
    snap.forEach((d) => {
      map[d.id] = normalizeProgress(d.data());
    });
  } catch (err) {
    console.error("Failed to read all courseProgress from Firestore:", err);
  }
  return map;
}

export async function saveFirestoreTopicProgress(
  uid: string,
  topicId: string,
  progress: TopicProgress
): Promise<void> {
  try {
    const ref = doc(db, "users", uid, "courseProgress", topicId);
    await setDoc(ref, progress);
  } catch (err) {
    console.error("Failed to save topic progress to Firestore:", err);
  }
}

// ── Sign-up Prompt Skip Helpers (7 days) ──────────────────────────────────────
const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;

export function shouldShowSaveProgressPrompt(): boolean {
  if (typeof window === "undefined") return false;
  try {
    // Check if user skipped within last 7 days
    const skipUntilRaw = localStorage.getItem(AUTH_SKIP_KEY);
    if (skipUntilRaw) {
      const skipUntil = Number(skipUntilRaw);
      if (!Number.isNaN(skipUntil) && Date.now() < skipUntil) {
        return false;
      }
    }
    // Check if already prompted during this first-read flow (before skip expired)
    const promptedRaw = localStorage.getItem(FIRST_NOTES_PROMPT_SHOWN_KEY);
    if (promptedRaw === "true" && skipUntilRaw) {
      const skipUntil = Number(skipUntilRaw);
      if (!Number.isNaN(skipUntil) && Date.now() < skipUntil) {
        return false;
      }
    }
    // Only show when they haven't already dismissed it in the current 7-day window
    if (promptedRaw === "true" && !skipUntilRaw) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export function markSaveProgressPromptShown(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(FIRST_NOTES_PROMPT_SHOWN_KEY, "true");
  } catch {
    // ignore
  }
}

export function skipSaveProgressPromptFor7Days(): void {
  if (typeof window === "undefined") return;
  try {
    const until = Date.now() + SEVEN_DAYS_MS;
    localStorage.setItem(AUTH_SKIP_KEY, String(until));
    localStorage.setItem(FIRST_NOTES_PROMPT_SHOWN_KEY, "true");
  } catch {
    // ignore
  }
}
