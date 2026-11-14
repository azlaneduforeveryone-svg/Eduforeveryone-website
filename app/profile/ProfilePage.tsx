"use client";
// app/profile/ProfilePage.tsx
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import {
  getUserProfile,
  getUserSessions,
  getIeltsSessions,
  getGmatSessions,
  UserProfile,
} from "@/lib/firebaseDB";
import {
  getAllFirestoreProgress,
  computeTopicStatus,
  TopicProgress,
} from "@/lib/courses/accountingProgress";
import { ALL_O_LEVEL_TOPICS } from "@/lib/courses/accountingSyllabus";
import AuthModal from "@/components/AuthModal";
import Link from "next/link";

const CAT_LABELS: Record<string, string> = {
  quran:"Quran", hadith:"Hadith", fiqh:"Fiqh", seerah:"Seerah",
  history:"History", pillars:"Pillars", names:"99 Names",
  "math-puzzle":"Math Puzzle", "quiz-battle":"Quiz Battle", "word-puzzle":"Word Puzzle",
};
const CAT_EMOJIS: Record<string, string> = {
  quran:"📖", hadith:"📜", fiqh:"⚖️", seerah:"🕌",
  history:"📚", pillars:"🕋", names:"☪️",
  "math-puzzle":"🧮", "quiz-battle":"🧠", "word-puzzle":"🔤",
};

function getGameHref(category?: string, gameName?: string): string {
  if (category === "math-puzzle" || gameName === "Math Puzzle") return "/games/math-puzzle";
  if (category === "quiz-battle" || gameName === "Quiz Battle") return "/games/quiz-battle";
  if (category === "word-puzzle" || gameName === "Word Puzzle") return "/games/word-puzzle";
  return "/quiz/islamic-quiz";
}

function formatDate(val: any): string {
  if (!val) return "";
  try {
    const d = typeof val?.toDate === "function"
      ? val.toDate()
      : val?.seconds
        ? new Date(val.seconds * 1000)
        : new Date(val);
    if (isNaN(d.getTime())) return "";
    return d.toLocaleDateString();
  } catch {
    return "";
  }
}

function StatCard({ label, value, emoji, color, href }: { label:string; value:string|number; emoji:string; color:string; href:string }) {
  const inner = (
    <div className={`${color} rounded-2xl p-4 text-center transition-all hover:shadow-md hover:brightness-95 cursor-pointer`}>
      <p className="text-2xl mb-1">{emoji}</p>
      <p className="text-2xl font-black text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
    </div>
  );
  if (href.startsWith("#")) {
    return <a href={href} className="block">{inner}</a>;
  }
  return <Link href={href} className="block">{inner}</Link>;
}

export default function ProfilePage() {
  const { user, logout, loading } = useAuth();
  const [profile,  setProfile]  = useState<UserProfile | null>(null);
  const [sessions, setSessions] = useState<any[]>([]);
  const [ieltsSessions, setIeltsSessions] = useState<any[]>([]);
  const [gmatSessions, setGmatSessions] = useState<any[]>([]);
  const [accountingProgress, setAccountingProgress] = useState<Record<string, TopicProgress>>({});
  const [showAuth, setShowAuth] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!user) return;
    setFetching(true);
    Promise.allSettled([
      getUserProfile(user.uid),
      getUserSessions(user.uid, 10),
      getIeltsSessions(user.uid, 20),
      getGmatSessions(user.uid, 20),
      getAllFirestoreProgress(user.uid),
    ]).then(([profRes, sessRes, ieltsRes, gmatRes, accRes]) => {
      if (profRes.status === "fulfilled") setProfile(profRes.value);
      else console.error("Failed to load user profile:", profRes.reason);

      if (sessRes.status === "fulfilled") setSessions(sessRes.value);
      else console.error("Failed to load recent sessions:", sessRes.reason);

      if (ieltsRes.status === "fulfilled") setIeltsSessions(ieltsRes.value);
      else console.error("Failed to load IELTS sessions:", ieltsRes.reason);

      if (gmatRes.status === "fulfilled") setGmatSessions(gmatRes.value);
      else console.error("Failed to load GMAT sessions:", gmatRes.reason);

      if (accRes.status === "fulfilled") setAccountingProgress(accRes.value);
      else console.error("Failed to load accounting progress:", accRes.reason);

      setFetching(false);
    });
  }, [user]);

  if (loading || fetching) return (
    <div className="efe-page flex items-center justify-center min-h-64">
      <div className="w-10 h-10 border-4 border-efe-accent border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!user) return (
    <div className="efe-page min-h-screen">
      <div className="max-w-lg mx-auto px-4 py-20 text-center">
        <p className="text-5xl mb-4">👤</p>
        <h1 className="text-2xl font-black text-efe-fg font-display mb-2">Track Your Progress</h1>
        <p className="text-efe-muted mb-8 leading-relaxed">
          Sign in to see your quiz scores, performance stats, category breakdown and more.
        </p>
        <button onClick={() => setShowAuth(true)}
          className="efe-btn efe-btn-primary px-8 py-3">
          Sign In / Create Account
        </button>
        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      </div>
    </div>
  );

  const accuracy = profile && profile.totalQuestions > 0
    ? Math.round((profile.totalCorrect / profile.totalQuestions) * 100)
    : 0;

  return (
    <div className="efe-page min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Profile header */}
        <div className="efe-banner rounded-2xl p-6 text-white mb-6">
          <div className="flex items-center gap-4">
            {user.photoURL ? (
              <img src={user.photoURL} alt="" className="w-16 h-16 rounded-full border-2 border-white/30" />
            ) : (
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-black">
                {(user.displayName || user.email || "U")[0].toUpperCase()}
              </div>
            )}
            <div className="flex-1">
              <h1 className="text-xl font-black font-display">{user.displayName || "Anonymous"}</h1>
              <p className="text-white/85 text-sm">{user.email}</p>
              <p className="text-white/75 text-xs mt-0.5">
                🔥 Best Streak: {profile?.bestStreak || 0} &nbsp;·&nbsp; 🎮 {profile?.totalGames || 0} games played
              </p>
            </div>
            <button onClick={logout}
              className="efe-btn efe-btn-ghost-hero efe-btn-sm">
              Sign Out
            </button>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
          <StatCard href="/leaderboard"          label="Total Score"    value={(profile?.totalScore || 0).toLocaleString()} emoji="🏆" color="bg-amber-50 border border-amber-100" />
          <StatCard href="#recent-activity"      label="Games Played"   value={profile?.totalGames || 0}     emoji="🎮" color="bg-teal-50 border border-teal-100" />
          <StatCard href="#category-performance" label="Accuracy"       value={`${accuracy}%`}               emoji="🎯" color="bg-blue-50 border border-blue-100" />
          <StatCard href="/leaderboard"          label="Best Streak"    value={profile?.bestStreak || 0}      emoji="🔥" color="bg-orange-50 border border-orange-100" />
        </div>

        {/* Category breakdown */}
        <div id="category-performance" className="efe-card p-5 mb-6">
          <h2 className="font-black text-efe-fg font-display mb-4">📊 Category Performance</h2>
          {profile && Object.keys(profile.categoryScores || {}).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(profile.categoryScores).map(([cat, stat]) => {
                const acc = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
                return (
                  <div key={cat} className="flex items-center gap-3">
                    <span className="text-lg w-7 flex-shrink-0">{CAT_EMOJIS[cat] || "📚"}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-semibold text-efe-fg">{CAT_LABELS[cat] || cat}</span>
                        <span className="text-xs text-efe-muted">{stat.games} games · {acc}% accuracy</span>
                      </div>
                      <div className="h-2 bg-efe-bg rounded-full overflow-hidden">
                        <div className="h-full bg-efe-accent rounded-full" style={{ width: `${acc}%` }} />
                      </div>
                    </div>
                    <span className="text-sm font-bold text-efe-accent w-16 text-right">{stat.totalScore} pts</span>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-efe-muted">
              No games played yet. <Link href="/games" className="text-efe-accent font-semibold hover:underline">Start playing →</Link>
            </p>
          )}
        </div>

        {/* Math topics */}
        {profile && (profile.mathTopicsCompleted?.length || 0) > 0 && (
          <div className="efe-card p-5 mb-6">
            <h2 className="font-black text-efe-fg font-display mb-3">📐 Math Topics Completed</h2>
            <p className="text-sm text-efe-muted mb-3">
              {profile.mathTopicsCompleted.length} topics completed
            </p>
            <div className="flex flex-wrap gap-2">
              {profile.mathTopicsCompleted.map(t => (
                <Link key={t} href={`/courses/mathematics/${t}`}
                  className="text-xs bg-efe-accent-soft text-efe-accent-ink border border-efe-line px-3 py-1 rounded-full font-semibold hover:border-efe-accent capitalize">
                  ✓ {t.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Accounting Course Progress */}
        {(() => {
          const completedTopics = ALL_O_LEVEL_TOPICS.filter(t => {
            const st = computeTopicStatus(accountingProgress[t.slug], Boolean(t.videoId), Boolean(t.notes));
            return st === "mastered" || st === "studied";
          });
          return (
            <div className="efe-card p-5 mb-6">
              <h2 className="font-black text-efe-fg font-display mb-3">📒 O-Level Accounting Progress</h2>
              {completedTopics.length > 0 ? (
                <>
                  <p className="text-sm text-efe-muted mb-3">
                    {completedTopics.length} of {ALL_O_LEVEL_TOPICS.length} topics completed
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {completedTopics.map(t => (
                      <Link key={t.slug} href={`/courses/accounting/o-level/${t.slug}`}
                        className="text-xs bg-efe-accent-soft text-efe-accent-ink border border-efe-line px-3 py-1 rounded-full font-semibold hover:border-efe-accent">
                        ✓ {t.topicTitle}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm text-efe-muted">
                  No accounting topics completed yet. <Link href="/courses/accounting/o-level" className="text-efe-accent font-semibold hover:underline">Start O-Level Accounting →</Link>
                </p>
              )}
            </div>
          );
        })()}

        {/* Recent sessions */}
        <div id="recent-activity" className="efe-card p-5 mb-6">
          <h2 className="font-black text-efe-fg font-display mb-4">🕐 Recent Games</h2>
          {sessions.length > 0 ? (
            <div className="space-y-2">
              {sessions.map((s: any, i) => {
                const playedDate = formatDate(s.playedAt);
                return (
                  <Link key={s.id || i} href={getGameHref(s.category, s.gameName)}
                    className="flex items-center justify-between py-2 border-b border-efe-line last:border-0 hover:bg-efe-bg/60 rounded-lg px-2 -mx-2 transition-colors">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{CAT_EMOJIS[s.category] || "🎮"}</span>
                      <div>
                        <p className="text-sm font-semibold text-efe-fg">{s.gameName}</p>
                        <p className="text-xs text-efe-muted capitalize">
                          {CAT_LABELS[s.category] || s.category} · {s.difficulty}{playedDate ? ` · ${playedDate}` : ""}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-efe-accent">{s.score} pts</p>
                      <p className="text-xs text-efe-muted">{s.correct}/{s.total} correct</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-efe-muted">
              No recent games recorded. <Link href="/quiz/islamic-quiz" className="text-efe-accent font-semibold hover:underline">Play a quiz →</Link>
            </p>
          )}
        </div>

        {/* IELTS History */}
        <div className="efe-card p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-efe-fg font-display">📝 IELTS Practice History</h2>
            <Link href="/ielts" className="text-xs font-semibold text-efe-accent hover:underline">Practice IELTS →</Link>
          </div>
          {ieltsSessions.length > 0 ? (
            <div className="space-y-2">
              {ieltsSessions.map((s: any, i) => {
                const sessionDate = formatDate(s.date);
                return (
                  <Link key={s.id || i} href="/ielts"
                    className="flex items-center justify-between py-2 border-b border-efe-line last:border-0 hover:bg-efe-bg/60 rounded-lg px-2 -mx-2 transition-colors">
                    <div>
                      <p className="text-sm font-semibold text-efe-fg capitalize">{s.skill || "IELTS"} Practice</p>
                      <p className="text-xs text-efe-muted">
                        {s.source || "Practice"}{sessionDate ? ` · ${sessionDate}` : ""}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-efe-accent">Band {s.band ?? "—"}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-efe-muted">
              No IELTS sessions yet. <Link href="/ielts" className="text-efe-accent font-semibold hover:underline">Start IELTS practice →</Link>
            </p>
          )}
        </div>

        {/* GMAT History */}
        <div className="efe-card p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-black text-efe-fg font-display">🎓 GMAT Focus History</h2>
            <Link href="/gmat" className="text-xs font-semibold text-efe-accent hover:underline">Practice GMAT →</Link>
          </div>
          {gmatSessions.length > 0 ? (
            <div className="space-y-2">
              {gmatSessions.map((s: any, i) => {
                const sessionDate = formatDate(s.date);
                return (
                  <Link key={s.id || i} href="/gmat"
                    className="flex items-center justify-between py-2 border-b border-efe-line last:border-0 hover:bg-efe-bg/60 rounded-lg px-2 -mx-2 transition-colors">
                    <div>
                      <p className="text-sm font-semibold text-efe-fg">GMAT Focus Mock</p>
                      <p className="text-xs text-efe-muted">{sessionDate || "Completed session"}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold text-efe-accent">Score {s.estimatedTotal ?? s.totalScore ?? s.score ?? "—"}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-efe-muted">
              No GMAT sessions yet. <Link href="/gmat" className="text-efe-accent font-semibold hover:underline">Start GMAT practice →</Link>
            </p>
          )}
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/leaderboard" className="efe-card p-4 text-center hover:border-efe-accent hover:shadow-md transition-all">
            <p className="text-2xl mb-1">🏆</p>
            <p className="font-bold text-efe-fg text-sm">Leaderboard</p>
            <p className="text-xs text-efe-muted">See global rankings</p>
          </Link>
          <Link href="/quiz/islamic-quiz" className="efe-card p-4 text-center hover:border-efe-accent hover:shadow-md transition-all">
            <p className="text-2xl mb-1">☪️</p>
            <p className="font-bold text-efe-fg text-sm">Play Quiz</p>
            <p className="text-xs text-efe-muted">Improve your score</p>
          </Link>
        </div>
      </div>
    </div>
  );
}