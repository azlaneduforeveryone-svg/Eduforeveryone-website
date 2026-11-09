// lib/firebaseDB.ts
import {
  doc, setDoc, getDoc, updateDoc, collection,
  query, orderBy, limit, getDocs,
  serverTimestamp, where, writeBatch, addDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import type { GmatSessionResult } from "./gmat/types";

// ── Leaderboard Constants & Types ─────────────────────────────────────────────
export type LeaderboardGameId =
  | "islamic-quiz"
  | "math-puzzle"
  | "word-puzzle"
  | "quiz-battle"
  | "quran-words"
  | "subject-quiz";

export type LeaderboardTabId = "global" | LeaderboardGameId;

export const ALL_LEADERBOARD_GAME_IDS: LeaderboardGameId[] = [
  "islamic-quiz",
  "math-puzzle",
  "word-puzzle",
  "quiz-battle",
  "quran-words",
  "subject-quiz",
];

export const ALL_LEADERBOARD_TAB_IDS: LeaderboardTabId[] = [
  "global",
  ...ALL_LEADERBOARD_GAME_IDS,
];

export const PER_GAME_DAILY_CAP = 500;
export const GLOBAL_DAILY_CAP = 3000;
export const MAX_SINGLE_ROUND_POINTS = 270;
export const LEADERBOARD_UPDATE_WARNING =
  "Your score was saved to your profile, but the leaderboard could not be updated.";

// ── Server Time Offset Management ────────────────────────────────────────────
// Stores (serverTimeMs - deviceTimeMs) so dailyDate is computed from server time
// rather than trusting a potentially skewed client device clock.
let serverTimeOffsetMs: number | null = null;

export function getServerTimeOffsetMs(): number | null {
  return serverTimeOffsetMs;
}

export function resetServerTimeOffset(): void {
  serverTimeOffsetMs = null;
}

function updateOffsetFromSnapshot(snapData: Record<string, unknown> | undefined): boolean {
  const lastSeen = snapData?.lastSeen as { toMillis?: () => number } | undefined;
  if (lastSeen && typeof lastSeen.toMillis === "function") {
    serverTimeOffsetMs = lastSeen.toMillis() - Date.now();
    return true;
  }
  return false;
}

/**
 * Writes serverTimestamp() to users/{uid}.lastSeen and reads it back to compute
 * and store the offset between Firestore server time and the device clock.
 */
export async function syncServerTimeOffset(uid: string): Promise<number> {
  const userRef = doc(db, "users", uid);
  await setDoc(userRef, { uid, lastSeen: serverTimestamp() }, { merge: true });
  const snap = await getDoc(userRef);
  if (!updateOffsetFromSnapshot(snap.data() as Record<string, unknown> | undefined)) {
    serverTimeOffsetMs = 0;
  }
  return serverTimeOffsetMs ?? 0;
}

function isPermissionDeniedError(err: unknown): boolean {
  if (!err || typeof err !== "object") return false;
  const code = String((err as { code?: unknown }).code || "");
  const msg = String((err as { message?: unknown }).message || "");
  return (
    code === "permission-denied" ||
    code.endsWith("/permission-denied") ||
    msg.includes("PERMISSION_DENIED") ||
    msg.includes("permission-denied")
  );
}

/**
 * Displays a small non-blocking notice in the browser when personal stats were
 * saved but the leaderboard batch could not be updated.
 */
export function showNonBlockingLeaderboardNotice(
  message: string = LEADERBOARD_UPDATE_WARNING
): void {
  if (typeof document === "undefined" || !document.body) return;
  try {
    const existing = document.getElementById("efe-leaderboard-warning-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.id = "efe-leaderboard-warning-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    toast.textContent = message;
    Object.assign(toast.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      maxWidth: "360px",
      backgroundColor: "#fffbeb",
      color: "#92400e",
      border: "1px solid #fcd34d",
      borderRadius: "12px",
      padding: "12px 16px",
      fontSize: "13px",
      fontWeight: "600",
      lineHeight: "1.4",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.12)",
      zIndex: "9999",
    });
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 6000);
  } catch {
    // Ignore DOM errors in non-browser environments
  }
}

export interface LeaderboardEntry {
  uid: string;
  displayName: string;
  photoURL: string;
  totalPoints: number;
  bestRound: number;
  games: number;
  dailyPoints: number;
  dailyDate: string;
  updatedAt: unknown;
}

// ── Types ─────────────────────────────────────────────────────────────────────
export interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  createdAt: unknown;
  totalScore: number;
  totalGames: number;
  totalCorrect: number;
  totalQuestions: number;
  currentStreak: number;
  bestStreak: number;
  categoryScores: Record<string, CategoryStat>;
  mathTopicsCompleted: string[];
  lastSeen: unknown;
  country?: string;
  hideFromLeaderboards?: boolean;
}

export interface CategoryStat {
  games: number;
  correct: number;
  total: number;
  totalScore: number;
  bestScore: number;
}

export interface QuizSession {
  uid: string;
  displayName: string;
  photoURL?: string;
  gameName: string;
  category: string;
  difficulty: string;
  score: number;
  correct: number;
  total: number;
  playedAt: unknown;
}

export function resolveFallbackName(displayName?: string | null, email?: string | null): string {
  const trimmed = displayName?.trim();
  if (trimmed) return trimmed;
  const emailPrefix = email?.split("@")[0]?.trim();
  if (emailPrefix) return emailPrefix;
  return "Student";
}

/**
 * Extracts first name only by default for public leaderboard display.
 * Falls back to email prefix before '@' or "Student".
 */
export function resolveFirstName(displayName?: string | null, email?: string | null): string {
  const trimmed = displayName?.trim();
  if (trimmed) {
    const first = trimmed.split(/\s+/)[0];
    if (first) return first.slice(0, 30);
  }
  const emailPrefix = email?.split("@")[0]?.trim();
  if (emailPrefix) return emailPrefix.slice(0, 30);
  return "Student";
}

export function getTodayUtcString(date?: Date): string {
  if (date) {
    return date.toISOString().slice(0, 10);
  }
  const adjustedMs = Date.now() + (serverTimeOffsetMs ?? 0);
  return new Date(adjustedMs).toISOString().slice(0, 10);
}

/**
 * Unified scoring scale across all games and quizzes:
 * - Question-based games: 10 pts × difficulty multiplier (1.0x=10, 1.5x=15, 2.0x=20, 2.5x=25)
 *   per correct answer, plus +20 pts for a 100% perfect round (max 270 pts).
 * - WordWise (`word-puzzle`): 30..60 base points by difficulty + 5 pts per unused guess when won.
 */
export function calculateRoundPoints(params: {
  gameId: LeaderboardGameId;
  correct: number;
  total: number;
  difficulty?: string;
  guessesUsed?: number;
}): number {
  const { gameId, correct, total, difficulty = "medium", guessesUsed = 6 } = params;
  if (correct <= 0) return 0;

  if (gameId === "word-puzzle") {
    const diffKey = difficulty.toLowerCase();
    const baseByDiff: Record<string, number> = {
      beginner: 30,
      easy: 38,
      medium: 45,
      expert: 60,
    };
    const base = baseByDiff[diffKey] ?? 38;
    const unusedBonus = Math.max(0, 6 - guessesUsed) * 5;
    return Math.min(MAX_SINGLE_ROUND_POINTS, Math.max(0, base + unusedBonus));
  }

  if (total <= 0) return 0;

  let ptsPerCorrect = 15;
  if (gameId === "math-puzzle" || gameId === "subject-quiz") {
    const diffKey = difficulty.toLowerCase();
    const map: Record<string, number> = {
      easy: 10,
      medium: 15,
      hard: 20,
      expert: 25,
    };
    ptsPerCorrect = map[diffKey] ?? 15;
  } else {
    // islamic-quiz, quiz-battle, quran-words use 1.5x (15 pts/correct)
    ptsPerCorrect = 15;
  }

  const perfectBonus = correct === total ? 20 : 0;
  const totalPts = correct * ptsPerCorrect + perfectBonus;
  return Math.min(MAX_SINGLE_ROUND_POINTS, Math.max(0, Math.round(totalPts)));
}

// ── Create / Update User Profile ─────────────────────────────────────────────
export async function createOrUpdateUser(user: {
  uid: string; displayName: string | null;
  email: string | null; photoURL: string | null;
}) {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);
  const fallbackName = resolveFallbackName(user.displayName, user.email);

  if (!snap.exists()) {
    // New user — create profile
    const profile: UserProfile = {
      uid:                 user.uid,
      displayName:         fallbackName,
      email:               user.email || "",
      photoURL:            user.photoURL || "",
      createdAt:           serverTimestamp(),
      lastSeen:            serverTimestamp(),
      totalScore:          0,
      totalGames:          0,
      totalCorrect:        0,
      totalQuestions:      0,
      currentStreak:       0,
      bestStreak:          0,
      categoryScores:      {},
      mathTopicsCompleted: [],
      hideFromLeaderboards: false,
    };
    await setDoc(ref, profile);
  } else {
    // Existing user — update last seen + name/photo
    await updateDoc(ref, {
      displayName: user.displayName?.trim() || snap.data()?.displayName || fallbackName,
      photoURL:    user.photoURL    || snap.data()?.photoURL || "",
      lastSeen:    serverTimestamp(),
    });
  }

  // Read back the serverTimestamp() on users/{uid}.lastSeen to store the
  // offset between Firestore server time and the device clock.
  try {
    const freshSnap = await getDoc(ref);
    updateOffsetFromSnapshot(freshSnap.data() as Record<string, unknown> | undefined);
  } catch {
    // Non-fatal; saveGameScore will sync before the first leaderboard write if needed
  }
}

export interface SaveGameScoreResult {
  roundPoints: number;
  awardedPoints: number;
  hidden: boolean;
  leaderboardUpdated: boolean;
  retriedAfterPermissionDenied?: boolean;
  leaderboardWarning?: string;
}

// ── Unified Save Game & Leaderboard Score ────────────────────────────────────
export async function saveGameScore(params: {
  uid: string;
  displayName: string | null;
  email?: string | null;
  photoURL?: string | null;
  gameId: LeaderboardGameId;
  gameName: string;
  category: string;
  difficulty: string;
  rawScore?: number;
  correct: number;
  total: number;
  streak?: number;
  guessesUsed?: number;
  roundPoints?: number;
}): Promise<SaveGameScoreResult> {
  const {
    uid,
    gameId,
    gameName,
    category,
    difficulty,
    correct,
    total,
    streak = 0,
    guessesUsed,
  } = params;
  const photoURL = params.photoURL || "";
  const fullDisplayName = resolveFallbackName(params.displayName, params.email);
  const firstName = resolveFirstName(params.displayName, params.email);

  const computedPoints =
    typeof params.roundPoints === "number"
      ? params.roundPoints
      : calculateRoundPoints({
          gameId,
          correct,
          total,
          difficulty,
          guessesUsed,
        });
  const roundPoints = Math.min(
    MAX_SINGLE_ROUND_POINTS,
    Math.max(0, Math.round(computedPoints))
  );
  const sessionScore =
    typeof params.rawScore === "number" ? params.rawScore : roundPoints;

  const userRef = doc(db, "users", uid);
  const gameEntryRef = doc(db, "leaderboards", gameId, "entries", uid);
  const globalEntryRef = doc(db, "leaderboards", "global", "entries", uid);

  const userSnap = await getDoc(userRef);
  const userData = userSnap.exists() ? (userSnap.data() as UserProfile) : null;
  const catStat = userData?.categoryScores?.[category] || {
    games: 0,
    correct: 0,
    total: 0,
    totalScore: 0,
    bestScore: 0,
  };

  // ── Batch (a): Personal data (users/{uid} stats + quizSessions record) ────
  // Saved first in its own writeBatch so personal stats are never lost even if
  // the public leaderboard batch (b) fails.
  const sessionBatch = writeBatch(db);
  const sessionRef = doc(collection(db, "quizSessions"));
  sessionBatch.set(sessionRef, {
    uid,
    displayName: fullDisplayName,
    photoURL,
    gameName,
    category,
    difficulty,
    score: sessionScore,
    correct,
    total,
    playedAt: serverTimestamp(),
  });

  const nextCatStat: CategoryStat = {
    games: (catStat.games || 0) + 1,
    correct: (catStat.correct || 0) + correct,
    total: (catStat.total || 0) + total,
    totalScore: (catStat.totalScore || 0) + roundPoints,
    bestScore: Math.max(catStat.bestScore || 0, roundPoints),
  };

  if (!userSnap.exists()) {
    sessionBatch.set(userRef, {
      uid,
      displayName: fullDisplayName,
      email: params.email || "",
      photoURL,
      createdAt: serverTimestamp(),
      lastSeen: serverTimestamp(),
      totalScore: roundPoints,
      totalGames: 1,
      totalCorrect: correct,
      totalQuestions: total,
      currentStreak: streak,
      bestStreak: streak,
      categoryScores: { [category]: nextCatStat },
      mathTopicsCompleted: [],
      hideFromLeaderboards: false,
    });
  } else {
    sessionBatch.update(userRef, {
      totalScore: (userData?.totalScore || 0) + roundPoints,
      totalGames: (userData?.totalGames || 0) + 1,
      totalCorrect: (userData?.totalCorrect || 0) + correct,
      totalQuestions: (userData?.totalQuestions || 0) + total,
      currentStreak: streak,
      bestStreak: Math.max(userData?.bestStreak || 0, streak),
      [`categoryScores.${category}`]: nextCatStat,
      lastSeen: serverTimestamp(),
      displayName: fullDisplayName,
      photoURL,
    });
  }

  await sessionBatch.commit();

  // If user has opted out of public leaderboards, do NOT write leaderboard entries
  if (userData?.hideFromLeaderboards) {
    return { roundPoints, awardedPoints: 0, hidden: true, leaderboardUpdated: false };
  }

  // ── Batch (b): Leaderboard data (per-game entry + global entry) ───────────
  const attemptLeaderboardWrite = async (): Promise<number> => {
    // Before the first leaderboard write, ensure we have synced server time offset
    if (serverTimeOffsetMs === null) {
      const freshUserSnap = await getDoc(userRef);
      if (
        !updateOffsetFromSnapshot(
          freshUserSnap.data() as Record<string, unknown> | undefined
        )
      ) {
        await syncServerTimeOffset(uid);
      }
    }

    const today = getTodayUtcString();
    const [gameSnap, globalSnap] = await Promise.all([
      getDoc(gameEntryRef),
      getDoc(globalEntryRef),
    ]);

    const prevGame = gameSnap.exists() ? (gameSnap.data() as LeaderboardEntry) : null;
    const prevGlobal = globalSnap.exists() ? (globalSnap.data() as LeaderboardEntry) : null;

    const prevGameDaily =
      prevGame && prevGame.dailyDate === today ? prevGame.dailyPoints : 0;
    const prevGlobalDaily =
      prevGlobal && prevGlobal.dailyDate === today ? prevGlobal.dailyPoints : 0;

    const gameRemaining = Math.max(0, PER_GAME_DAILY_CAP - prevGameDaily);
    const globalRemaining = Math.max(0, GLOBAL_DAILY_CAP - prevGlobalDaily);
    const awardedPoints = Math.min(roundPoints, gameRemaining, globalRemaining);

    const nextGameEntry: LeaderboardEntry = {
      uid,
      displayName: firstName,
      photoURL,
      totalPoints: (prevGame?.totalPoints || 0) + awardedPoints,
      bestRound: Math.max(prevGame?.bestRound || 0, roundPoints),
      games: (prevGame?.games || 0) + 1,
      dailyPoints: prevGameDaily + awardedPoints,
      dailyDate: today,
      updatedAt: serverTimestamp(),
    };

    const nextGlobalEntry: LeaderboardEntry = {
      uid,
      displayName: firstName,
      photoURL,
      totalPoints: (prevGlobal?.totalPoints || 0) + awardedPoints,
      bestRound: Math.max(prevGlobal?.bestRound || 0, roundPoints),
      games: (prevGlobal?.games || 0) + 1,
      dailyPoints: prevGlobalDaily + awardedPoints,
      dailyDate: today,
      updatedAt: serverTimestamp(),
    };

    const lbBatch = writeBatch(db);
    lbBatch.set(gameEntryRef, nextGameEntry);
    lbBatch.set(globalEntryRef, nextGlobalEntry);
    await lbBatch.commit();

    return awardedPoints;
  };

  try {
    const awardedPoints = await attemptLeaderboardWrite();
    return {
      roundPoints,
      awardedPoints,
      hidden: false,
      leaderboardUpdated: true,
    };
  } catch (firstErr) {
    if (isPermissionDeniedError(firstErr)) {
      // Retry once after re-syncing server time and recalculating dailyDate
      // (covers rounds finishing right across midnight UTC).
      try {
        await syncServerTimeOffset(uid);
        const awardedPoints = await attemptLeaderboardWrite();
        return {
          roundPoints,
          awardedPoints,
          hidden: false,
          leaderboardUpdated: true,
          retriedAfterPermissionDenied: true,
        };
      } catch (retryErr) {
        console.error("Failed to update leaderboard after retry:", retryErr);
        showNonBlockingLeaderboardNotice(LEADERBOARD_UPDATE_WARNING);
        return {
          roundPoints,
          awardedPoints: 0,
          hidden: false,
          leaderboardUpdated: false,
          leaderboardWarning: LEADERBOARD_UPDATE_WARNING,
        };
      }
    }

    console.error("Failed to update leaderboard:", firstErr);
    showNonBlockingLeaderboardNotice(LEADERBOARD_UPDATE_WARNING);
    return {
      roundPoints,
      awardedPoints: 0,
      hidden: false,
      leaderboardUpdated: false,
      leaderboardWarning: LEADERBOARD_UPDATE_WARNING,
    };
  }
}

// ── Save Quiz Score (Islamic Quiz wrapper) ───────────────────────────────────
export async function saveQuizScore(params: {
  uid: string;
  displayName: string | null;
  email?: string | null;
  photoURL: string;
  gameName: string;
  category: string;
  difficulty: string;
  score: number;
  correct: number;
  total: number;
  streak: number;
}) {
  return saveGameScore({
    uid: params.uid,
    displayName: params.displayName,
    email: params.email,
    photoURL: params.photoURL,
    gameId: "islamic-quiz",
    gameName: params.gameName,
    category: params.category,
    difficulty: params.difficulty,
    rawScore: params.score,
    correct: params.correct,
    total: params.total,
    streak: params.streak,
  });
}

// ── Hide / Show User on Public Leaderboards ──────────────────────────────────
export async function setHideFromLeaderboards(uid: string, hide: boolean) {
  const batch = writeBatch(db);
  const userRef = doc(db, "users", uid);
  batch.set(
    userRef,
    {
      uid,
      hideFromLeaderboards: hide,
      lastSeen: serverTimestamp(),
    },
    { merge: true }
  );

  if (hide) {
    for (const tabId of ALL_LEADERBOARD_TAB_IDS) {
      batch.delete(doc(db, "leaderboards", tabId, "entries", uid));
    }
  }

  await batch.commit();
}

// ── Save Math Topic Completion ────────────────────────────────────────────────
export async function saveMathTopicScore(uid: string, topicId: string, score: number, total: number) {
  const userRef  = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  const userData = userSnap.data() as UserProfile;
  const completed = userData?.mathTopicsCompleted || [];

  await updateDoc(userRef, {
    mathTopicsCompleted: completed.includes(topicId) ? completed : [...completed, topicId],
    [`mathScores.${topicId}`]: { score, total, completedAt: serverTimestamp() },
    lastSeen: serverTimestamp(),
  });
}

// ── Get User Profile ──────────────────────────────────────────────────────────
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? snap.data() as UserProfile : null;
}

// ── Get Leaderboard (Global or Per-Game) ─────────────────────────────────────
export async function getLeaderboard(
  tabId: LeaderboardTabId,
  top = 20
): Promise<(LeaderboardEntry & { id: string })[]> {
  const q = query(
    collection(db, "leaderboards", tabId, "entries"),
    orderBy("totalPoints", "desc"),
    limit(top)
  );
  const snap = await getDocs(q);
  return snap.docs.map((d) => ({
    id: d.id,
    ...(d.data() as LeaderboardEntry),
  }));
}

export async function getGlobalLeaderboard(top = 20) {
  return getLeaderboard("global", top);
}

export async function getCategoryLeaderboard(category: string, top = 20) {
  const q = query(
    collection(db, `leaderboard_${category}`),
    orderBy("totalScore", "desc"),
    limit(top)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ── Get User Recent Sessions ──────────────────────────────────────────────────
export async function getUserSessions(uid: string, count = 10) {
  const q = query(
    collection(db, "quizSessions"),
    where("uid", "==", uid),
    orderBy("playedAt", "desc"),
    limit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ── IELTS Results ─────────────────────────────────────────────────────────────
export interface IeltsResult {
  uid?: string;
  displayName?: string | null;
  email?: string | null;
  skill: "listening" | "reading" | "writing" | "speaking";
  band: number;
  raw?: number;
  total?: number;
  testId?: string;
  source: "practice" | "simulation" | "full-mock";
  mockId?: string;
}

const IELTS_LOCAL_KEY = "ielts_sessions";

function saveLocalIelts(r: IeltsResult) {
  if (typeof window === "undefined") return;
  try {
    const arr = JSON.parse(localStorage.getItem(IELTS_LOCAL_KEY) || "[]");
    arr.unshift({ ...r, date: Date.now() });
    localStorage.setItem(IELTS_LOCAL_KEY, JSON.stringify(arr.slice(0, 200)));
  } catch { /* ignore */ }
}

export function getLocalIelts(): IeltsResult[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(IELTS_LOCAL_KEY) || "[]"); } catch { return []; }
}

export async function saveIeltsResult(r: IeltsResult) {
  saveLocalIelts(r);
  if (!r.uid) return;
  try {
    await addDoc(collection(db, "ieltsSessions"), {
      uid: r.uid,
      displayName: resolveFallbackName(r.displayName, r.email),
      skill: r.skill,
      band: r.band,
      raw: r.raw ?? null,
      total: r.total ?? null,
      testId: r.testId ?? null,
      source: r.source,
      mockId: r.mockId ?? null,
      date: serverTimestamp(),
    });
  } catch (e) { console.error("saveIeltsResult failed", e); }
}

export async function getIeltsSessions(uid: string, count = 100) {
  const q = query(
    collection(db, "ieltsSessions"),
    where("uid", "==", uid),
    orderBy("date", "desc"),
    limit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ── GMAT Results ──────────────────────────────────────────────────────────────
// Mirrors the IELTS pattern: always write localStorage; ALSO write Firestore
// (gmatResults/{uid}/sessions/{autoId}) when logged in. Login is never a gate.
// Scores are ESTIMATES only — never an official GMAT score.
const GMAT_LOCAL_KEY = "gmat_history";

export function getLocalGmat(): GmatSessionResult[] {
  if (typeof window === "undefined") return [];
  try { return JSON.parse(localStorage.getItem(GMAT_LOCAL_KEY) || "[]"); } catch { return []; }
}

function saveLocalGmat(r: GmatSessionResult) {
  if (typeof window === "undefined") return;
  try {
    const arr = getLocalGmat();
    arr.unshift(r);
    localStorage.setItem(GMAT_LOCAL_KEY, JSON.stringify(arr.slice(0, 200)));
  } catch { /* ignore */ }
}

export async function saveGmatResult(r: GmatSessionResult, uid?: string) {
  saveLocalGmat(r);
  if (!uid) return;
  try {
    await addDoc(collection(db, "gmatResults", uid, "sessions"), {
      formId: r.formId,
      sections: r.sections,
      estimatedTotal: r.estimatedTotal,
      completedAt: serverTimestamp(),
    });
  } catch (e) { console.error("saveGmatResult failed", e); }
}

export async function getGmatSessions(uid: string, count = 100): Promise<GmatSessionResult[]> {
  try {
    const q = query(
      collection(db, "gmatResults", uid, "sessions"),
      orderBy("completedAt", "desc"),
      limit(count)
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => {
      const data = d.data() as Record<string, unknown>;
      const ts = data.completedAt as { toMillis?: () => number } | undefined;
      return {
        formId: data.formId as string,
        sections: data.sections as GmatSessionResult["sections"],
        estimatedTotal: data.estimatedTotal as number,
        completedAt: ts?.toMillis ? ts.toMillis() : Date.now(),
      };
    });
  } catch (e) { console.error("getGmatSessions failed", e); return []; }
}
