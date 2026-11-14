// lib/firebaseDB.ts
import {
  doc, setDoc, getDoc, updateDoc, collection,
  query, orderBy, limit, getDocs, increment,
  serverTimestamp, where, writeBatch, addDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import type { GmatSessionResult } from "./gmat/types";

export const MAX_GAME_SCORE = 2000;       // keep in sync with firestore.rules
const LEADERBOARD_MIN_INTERVAL_MS = 8000; // keep in sync with firestore.rules

// ── Types ─────────────────────────────────────────────────────────────────────
export interface RecentGame {
  gameName: string; category: string; difficulty: string;
  score: number; correct: number; total: number;
  playedAt: number;   // Date.now() in milliseconds
}

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
  recentGames?: RecentGame[];
  lastSeen: unknown;
  country?: string;
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

function resolveFallbackName(displayName?: string | null, email?: string | null): string {
  const trimmed = displayName?.trim();
  if (trimmed) return trimmed;
  const emailPrefix = email?.split("@")[0]?.trim();
  if (emailPrefix) return emailPrefix;
  return "Student";
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
      uid:                user.uid,
      displayName:        fallbackName,
      email:              user.email || "",
      photoURL:           user.photoURL || "",
      createdAt:          serverTimestamp(),
      lastSeen:           serverTimestamp(),
      totalScore:         0,
      totalGames:         0,
      totalCorrect:       0,
      totalQuestions:     0,
      currentStreak:      0,
      bestStreak:         0,
      categoryScores:     {},
      mathTopicsCompleted:[],
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
}

// ── Save Quiz Score ───────────────────────────────────────────────────────────
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
  skipCategoryLeaderboard?: boolean;
  emailVerified?: boolean;
}) {
  const { uid, photoURL, gameName, category,
          difficulty, score, correct, total, streak, skipCategoryLeaderboard, emailVerified } = params;
  const displayName = resolveFallbackName(params.displayName, params.email);

  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  let before: UserProfile;

  if (!userSnap.exists()) {
    before = {
      uid,
      displayName,
      email: params.email || "",
      photoURL,
      createdAt: serverTimestamp(),
      lastSeen: serverTimestamp(),
      totalScore: 0,
      totalGames: 0,
      totalCorrect: 0,
      totalQuestions: 0,
      currentStreak: 0,
      bestStreak: 0,
      categoryScores: {},
      mathTopicsCompleted: [],
    };
    await setDoc(userRef, before);
  } else {
    before = userSnap.data() as UserProfile;
  }

  const isWithinCooldown = (data?: Record<string, any>): boolean => {
    const updatedMs =
      data?.updatedAt?.toMillis?.() ??
      (data?.updatedAt?.seconds ? data.updatedAt.seconds * 1000 : 0);
    return updatedMs > 0 && Date.now() - updatedMs < LEADERBOARD_MIN_INTERVAL_MS;
  };

  const canWriteLeaderboard = emailVerified !== false;
  const lbSnap = canWriteLeaderboard ? await getDoc(doc(db, "leaderboard", uid)) : null;
  const lbData = lbSnap?.exists() ? lbSnap.data() : undefined;

  const catLbSnap =
    canWriteLeaderboard && !skipCategoryLeaderboard
      ? await getDoc(doc(db, `leaderboard_${category}`, uid))
      : null;
  const catLbData = catLbSnap?.exists() ? catLbSnap.data() : undefined;

  const catStat = before.categoryScores?.[category] || { games:0, correct:0, total:0, totalScore:0, bestScore:0 };
  const thisGame: RecentGame = {
    gameName,
    category,
    difficulty,
    score,
    correct,
    total,
    playedAt: Date.now(),
  };
  const newRecent = [thisGame, ...(before.recentGames || [])].slice(0, 10);

  const batch = writeBatch(db);

  // 1. Save session to quizSessions collection
  const sessionRef = doc(collection(db, "quizSessions"));
  batch.set(sessionRef, {
    uid, displayName, photoURL, gameName,
    category, difficulty, score, correct, total,
    playedAt: serverTimestamp(),
  });

  // 2. Update user profile stats, category stats, streak, and recentGames
  batch.update(userRef, {
    totalScore:     increment(score),
    totalGames:     increment(1),
    totalCorrect:   increment(correct),
    totalQuestions: increment(total),
    lastSeen:       serverTimestamp(),
    displayName,
    photoURL,
    [`categoryScores.${category}`]: {
      games:      (catStat.games || 0) + 1,
      correct:    (catStat.correct || 0) + correct,
      total:      (catStat.total || 0) + total,
      totalScore: (catStat.totalScore || 0) + score,
      bestScore:  Math.max(catStat.bestScore || 0, score),
    },
    currentStreak: streak,
    bestStreak:    Math.max(before.bestStreak || 0, streak),
    recentGames:   newRecent,
  });

  const lbScore = Math.min(Math.max(0, Math.round(score)), MAX_GAME_SCORE);

  // 3. Update global leaderboard entry (skip if unverified or within cooldown)
  if (canWriteLeaderboard && !isWithinCooldown(lbData)) {
    const prevTotal = Number(lbData?.totalScore || 0);
    const prevGames = Number(lbData?.totalGames || 0);
    const prevBest  = Number(lbData?.bestScore || 0);
    const bestScore = prevBest > MAX_GAME_SCORE ? prevBest : Math.max(prevBest, lbScore);

    batch.set(doc(db, "leaderboard", uid), {
      uid, displayName, photoURL,
      totalScore: prevTotal + lbScore,
      totalGames: prevGames + 1,
      bestScore,
      updatedAt:  serverTimestamp(),
    }, { merge: true });
  }

  // 4. Update category leaderboard (skip if unverified, skipped, or within cooldown)
  if (canWriteLeaderboard && !skipCategoryLeaderboard && !isWithinCooldown(catLbData)) {
    const prevCatTotal = Number(catLbData?.totalScore || 0);
    const prevCatGames = Number(catLbData?.games || 0);
    const prevCatBest  = Number(catLbData?.bestScore || 0);
    const catBestScore = prevCatBest > MAX_GAME_SCORE ? prevCatBest : Math.max(prevCatBest, lbScore);

    batch.set(doc(db, `leaderboard_${category}`, uid), {
      uid, displayName, photoURL,
      totalScore: prevCatTotal + lbScore,
      bestScore:  catBestScore,
      games:      prevCatGames + 1,
      updatedAt:  serverTimestamp(),
    }, { merge: true });
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

// ── Get Global Leaderboard ────────────────────────────────────────────────────
export async function getGlobalLeaderboard(top = 20) {
  const q = query(collection(db, "leaderboard"), orderBy("totalScore", "desc"), limit(top));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

// ── Get Category Leaderboard ──────────────────────────────────────────────────
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
    limit(50)
  );
  const snap = await getDocs(q);
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() } as Record<string, any> & { id: string }))
    .sort((a, b) => {
      const ta = a.playedAt?.toMillis?.() ?? (a.playedAt?.seconds ? a.playedAt.seconds * 1000 : 0);
      const tb = b.playedAt?.toMillis?.() ?? (b.playedAt?.seconds ? b.playedAt.seconds * 1000 : 0);
      return tb - ta;
    })
    .slice(0, count);
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
    where("uid", "==", uid)
  );
  const snap = await getDocs(q);
  return snap.docs
    .map(d => ({ id: d.id, ...d.data() } as Record<string, any> & { id: string }))
    .sort((a, b) => {
      const ta = a.date?.toMillis?.() ?? (a.date?.seconds ? a.date.seconds * 1000 : new Date(a.date || 0).getTime() || 0);
      const tb = b.date?.toMillis?.() ?? (b.date?.seconds ? b.date.seconds * 1000 : new Date(b.date || 0).getTime() || 0);
      return tb - ta;
    })
    .slice(0, count);
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