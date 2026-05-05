// lib/firebaseDB.ts
import {
  doc, setDoc, getDoc, updateDoc, collection,
  query, orderBy, limit, getDocs, increment,
  serverTimestamp, where, writeBatch,
} from "firebase/firestore";
import { db } from "./firebase";

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

// ── Create / Update User Profile ─────────────────────────────────────────────
export async function createOrUpdateUser(user: {
  uid: string; displayName: string | null;
  email: string | null; photoURL: string | null;
}) {
  const ref = doc(db, "users", user.uid);
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    // New user — create profile
    const profile: UserProfile = {
      uid:                user.uid,
      displayName:        user.displayName || "Anonymous",
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
      displayName: user.displayName || snap.data()?.displayName,
      photoURL:    user.photoURL    || snap.data()?.photoURL,
      lastSeen:    serverTimestamp(),
    });
  }
}

// ── Save Quiz Score ───────────────────────────────────────────────────────────
export async function saveQuizScore(params: {
  uid: string;
  displayName: string;
  photoURL: string;
  gameName: string;
  category: string;
  difficulty: string;
  score: number;
  correct: number;
  total: number;
  streak: number;
}) {
  const { uid, displayName, photoURL, gameName, category,
          difficulty, score, correct, total, streak } = params;

  const batch = writeBatch(db);

  // 1. Save session to quizSessions collection
  const sessionRef = doc(collection(db, "quizSessions"));
  batch.set(sessionRef, {
    uid, displayName, photoURL, gameName,
    category, difficulty, score, correct, total,
    playedAt: serverTimestamp(),
  });

  // 2. Update user profile stats
  const userRef = doc(db, "users", uid);
  const catKey  = `categoryScores.${category}`;

  batch.update(userRef, {
    totalScore:     increment(score),
    totalGames:     increment(1),
    totalCorrect:   increment(correct),
    totalQuestions: increment(total),
    lastSeen:       serverTimestamp(),
    displayName,
    photoURL,
  });

  await batch.commit();

  // 3. Update category stats (need current data for bestScore)
  const userSnap = await getDoc(doc(db, "users", uid));
  const userData = userSnap.data() as UserProfile;
  const catStat  = userData?.categoryScores?.[category] || { games:0, correct:0, total:0, totalScore:0, bestScore:0 };

  await updateDoc(doc(db, "users", uid), {
    [`categoryScores.${category}`]: {
      games:      (catStat.games || 0) + 1,
      correct:    (catStat.correct || 0) + correct,
      total:      (catStat.total || 0) + total,
      totalScore: (catStat.totalScore || 0) + score,
      bestScore:  Math.max(catStat.bestScore || 0, score),
    },
    currentStreak: streak,
    bestStreak:    Math.max(userData?.bestStreak || 0, streak),
  });

  // 4. Update global leaderboard entry
  await setDoc(doc(db, "leaderboard", uid), {
    uid, displayName, photoURL,
    totalScore:   (userData?.totalScore || 0) + score,
    totalGames:   (userData?.totalGames || 0) + 1,
    bestScore:    Math.max(userData?.totalScore || 0, score),
    updatedAt:    serverTimestamp(),
  }, { merge: true });

  // 5. Update category leaderboard
  await setDoc(doc(db, `leaderboard_${category}`, uid), {
    uid, displayName, photoURL,
    totalScore: (catStat.totalScore || 0) + score,
    bestScore:  Math.max(catStat.bestScore || 0, score),
    games:      (catStat.games || 0) + 1,
    updatedAt:  serverTimestamp(),
  }, { merge: true });
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
    orderBy("playedAt", "desc"),
    limit(count)
  );
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}