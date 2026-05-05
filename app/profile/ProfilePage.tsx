"use client";
// app/profile/ProfilePage.tsx
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getUserProfile, getUserSessions, UserProfile } from "@/lib/firebaseDB";
import AuthModal from "@/components/AuthModal";
import Link from "next/link";

const CAT_LABELS: Record<string, string> = {
  quran:"Quran", hadith:"Hadith", fiqh:"Fiqh", seerah:"Seerah",
  history:"History", pillars:"Pillars", names:"99 Names",
};
const CAT_EMOJIS: Record<string, string> = {
  quran:"📖", hadith:"📜", fiqh:"⚖️", seerah:"🕌",
  history:"📚", pillars:"🕋", names:"☪️",
};

function StatCard({ label, value, emoji, color }: { label:string; value:string|number; emoji:string; color:string }) {
  return (
    <div className={`${color} rounded-2xl p-4 text-center`}>
      <p className="text-2xl mb-1">{emoji}</p>
      <p className="text-2xl font-black text-gray-900">{value}</p>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
    </div>
  );
}

export default function ProfilePage() {
  const { user, logout, loading } = useAuth();
  const [profile,  setProfile]  = useState<UserProfile | null>(null);
  const [sessions, setSessions] = useState<unknown[]>([]);
  const [showAuth, setShowAuth] = useState(false);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!user) return;
    setFetching(true);
    Promise.all([
      getUserProfile(user.uid),
      getUserSessions(user.uid, 10),
    ]).then(([p, s]) => {
      setProfile(p); setSessions(s); setFetching(false);
    }).catch(() => setFetching(false));
  }, [user]);

  if (loading || fetching) return (
    <div className="flex items-center justify-center min-h-64">
      <div className="w-10 h-10 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!user) return (
    <div className="max-w-lg mx-auto px-4 py-20 text-center">
      <p className="text-5xl mb-4">👤</p>
      <h1 className="text-2xl font-black text-gray-900 mb-2">Track Your Progress</h1>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Sign in to see your quiz scores, performance stats, category breakdown and more.
      </p>
      <button onClick={() => setShowAuth(true)}
        className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all"
        style={{ boxShadow: "0 4px 0 #0F6E56" }}>
        Sign In / Create Account
      </button>
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );

  const accuracy = profile && profile.totalQuestions > 0
    ? Math.round((profile.totalCorrect / profile.totalQuestions) * 100)
    : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Profile header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center gap-4">
          {user.photoURL ? (
            <img src={user.photoURL} alt="" className="w-16 h-16 rounded-full border-2 border-white/30" />
          ) : (
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-2xl font-black">
              {(user.displayName || user.email || "U")[0].toUpperCase()}
            </div>
          )}
          <div className="flex-1">
            <h1 className="text-xl font-black">{user.displayName || "Anonymous"}</h1>
            <p className="text-teal-200 text-sm">{user.email}</p>
            <p className="text-teal-300 text-xs mt-0.5">
              🔥 Best Streak: {profile?.bestStreak || 0} &nbsp;·&nbsp; 🎮 {profile?.totalGames || 0} games played
            </p>
          </div>
          <button onClick={logout}
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all">
            Sign Out
          </button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        <StatCard label="Total Score"    value={(profile?.totalScore || 0).toLocaleString()} emoji="🏆" color="bg-amber-50 border border-amber-100" />
        <StatCard label="Games Played"   value={profile?.totalGames || 0}     emoji="🎮" color="bg-teal-50 border border-teal-100" />
        <StatCard label="Accuracy"       value={`${accuracy}%`}               emoji="🎯" color="bg-blue-50 border border-blue-100" />
        <StatCard label="Best Streak"    value={profile?.bestStreak || 0}      emoji="🔥" color="bg-orange-50 border border-orange-100" />
      </div>

      {/* Category breakdown */}
      {profile && Object.keys(profile.categoryScores || {}).length > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
          <h2 className="font-black text-gray-900 mb-4">📊 Category Performance</h2>
          <div className="space-y-3">
            {Object.entries(profile.categoryScores).map(([cat, stat]) => {
              const acc = stat.total > 0 ? Math.round((stat.correct / stat.total) * 100) : 0;
              return (
                <div key={cat} className="flex items-center gap-3">
                  <span className="text-lg w-7 flex-shrink-0">{CAT_EMOJIS[cat] || "📚"}</span>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-semibold text-gray-900">{CAT_LABELS[cat] || cat}</span>
                      <span className="text-xs text-gray-500">{stat.games} games · {acc}% accuracy</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-500 rounded-full" style={{ width: `${acc}%` }} />
                    </div>
                  </div>
                  <span className="text-sm font-bold text-teal-600 w-16 text-right">{stat.totalScore} pts</span>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Math topics */}
      {profile && (profile.mathTopicsCompleted?.length || 0) > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
          <h2 className="font-black text-gray-900 mb-3">📐 Math Topics Completed</h2>
          <p className="text-sm text-gray-500 mb-3">
            {profile.mathTopicsCompleted.length} topics completed
          </p>
          <div className="flex flex-wrap gap-2">
            {profile.mathTopicsCompleted.map(t => (
              <Link key={t} href={`/courses/mathematics/${t}`}
                className="text-xs bg-teal-50 text-teal-700 border border-teal-100 px-3 py-1 rounded-full font-semibold hover:bg-teal-100 capitalize">
                ✓ {t.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Recent sessions */}
      {sessions.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-6">
          <h2 className="font-black text-gray-900 mb-4">🕐 Recent Games</h2>
          <div className="space-y-2">
            {sessions.map((s: any, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="text-lg">{CAT_EMOJIS[s.category] || "🎮"}</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{s.gameName}</p>
                    <p className="text-xs text-gray-500 capitalize">{s.category} · {s.difficulty}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-teal-600">{s.score} pts</p>
                  <p className="text-xs text-gray-400">{s.correct}/{s.total} correct</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Links */}
      <div className="grid grid-cols-2 gap-3">
        <Link href="/leaderboard" className="bg-amber-50 border border-amber-100 rounded-2xl p-4 text-center hover:shadow-md transition-all">
          <p className="text-2xl mb-1">🏆</p>
          <p className="font-bold text-gray-900 text-sm">Leaderboard</p>
          <p className="text-xs text-gray-500">See global rankings</p>
        </Link>
        <Link href="/quiz/islamic-quiz" className="bg-teal-50 border border-teal-100 rounded-2xl p-4 text-center hover:shadow-md transition-all">
          <p className="text-2xl mb-1">☪️</p>
          <p className="font-bold text-gray-900 text-sm">Play Quiz</p>
          <p className="text-xs text-gray-500">Improve your score</p>
        </Link>
      </div>
    </div>
  );
}