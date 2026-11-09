"use client";
// app/leaderboard/LeaderboardPage.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  getLeaderboard,
  resolveFirstName,
  type LeaderboardEntry,
  type LeaderboardTabId,
} from "@/lib/firebaseDB";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";

const TABS: { id: LeaderboardTabId; label: string; playHref: string }[] = [
  { id: "global",       label: "🌍 Global",          playHref: "/games" },
  { id: "islamic-quiz", label: "☪️ Islamic Quiz",    playHref: "/quiz/islamic-quiz" },
  { id: "math-puzzle",  label: "🧮 Math Puzzle",     playHref: "/games/math-puzzle" },
  { id: "word-puzzle",  label: "🔤 WordWise",        playHref: "/games/word-puzzle" },
  { id: "quiz-battle",  label: "🧠 Quiz Battle",     playHref: "/games/quiz-battle" },
  { id: "quran-words",  label: "📖 Quran Words",     playHref: "/islamic-studies/quran-words" },
  { id: "subject-quiz", label: "📚 Subject Quizzes", playHref: "/quiz" },
];

const MEDALS = ["🥇", "🥈", "🥉"];

type LeaderRow = LeaderboardEntry & { id: string };

export default function LeaderboardPage() {
  const { user } = useAuth();
  const [active, setActive] = useState<LeaderboardTabId>("global");
  const [entries, setEntries] = useState<LeaderRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    getLeaderboard(active, 20)
      .then((data) => {
        if (!cancelled) {
          setEntries(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setEntries([]);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [active]);

  const activeTab = TABS.find((t) => t.id === active) ?? TABS[0];

  return (
    <div className="efe-page min-h-screen">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-5xl mb-3">🏆</p>
          <h1 className="text-3xl font-black text-efe-fg font-display mb-2">
            Leaderboard
          </h1>
          <p className="text-efe-muted">
            Top learners across all EduForEveryone games and quizzes
          </p>
          {!user ? (
            <button
              onClick={() => setShowAuth(true)}
              className="mt-4 efe-btn efe-btn-primary"
            >
              Sign In to Compete 🚀
            </button>
          ) : (
            <p className="text-xs text-efe-muted mt-2">
              Showing first names only · Manage visibility in your{" "}
              <Link href="/profile" className="text-efe-accent font-semibold hover:underline">
                Profile settings
              </Link>
            </p>
          )}
        </div>

        {/* Game tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6" role="tablist" aria-label="Leaderboard games">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setActive(t.id)}
              className={`efe-chip whitespace-nowrap flex-shrink-0 ${
                active === t.id ? "efe-chip-active" : ""
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Leaderboard list */}
        <div className="efe-card overflow-hidden shadow-sm">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 border-4 border-efe-accent border-t-transparent rounded-full animate-spin" />
            </div>
          ) : entries.length === 0 ? (
            <div className="text-center py-16 px-4">
              <p className="text-4xl mb-3">📭</p>
              <p className="text-efe-fg font-semibold">No scores yet</p>
              <p className="text-efe-muted text-sm mt-1 mb-5">
                Be the first to play and claim the top spot!
              </p>
              <Link href={activeTab.playHref} className="efe-btn efe-btn-primary text-sm px-6 py-2.5">
                Play Now →
              </Link>
            </div>
          ) : (
            <div className="divide-y divide-efe-line">
              {/* Top 3 podium */}
              {entries.slice(0, 3).length === 3 && (
                <div className="flex items-end justify-center gap-4 p-6 bg-gradient-to-b from-amber-50 to-white">
                  {/* 2nd place */}
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-efe-bg rounded-full flex items-center justify-center text-xl mx-auto mb-2 overflow-hidden">
                      {entries[1]?.photoURL ? (
                        <img
                          src={entries[1].photoURL}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-black text-efe-muted">
                          {resolveFirstName(entries[1]?.displayName)[0]}
                        </span>
                      )}
                    </div>
                    <p className="text-2xl">🥈</p>
                    <p className="text-xs font-bold text-efe-fg truncate max-w-20 mx-auto">
                      {resolveFirstName(entries[1]?.displayName)}
                    </p>
                    <p className="text-sm font-black text-efe-fg">
                      {entries[1]?.totalPoints?.toLocaleString()}
                    </p>
                  </div>
                  {/* 1st place */}
                  <div className="text-center flex-1">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-2 border-2 border-amber-300 overflow-hidden">
                      {entries[0]?.photoURL ? (
                        <img
                          src={entries[0].photoURL}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-black text-amber-700">
                          {resolveFirstName(entries[0]?.displayName)[0]}
                        </span>
                      )}
                    </div>
                    <p className="text-3xl">🥇</p>
                    <p className="text-sm font-bold text-efe-fg truncate max-w-20 mx-auto">
                      {resolveFirstName(entries[0]?.displayName)}
                    </p>
                    <p className="text-base font-black text-amber-600">
                      {entries[0]?.totalPoints?.toLocaleString()}
                    </p>
                  </div>
                  {/* 3rd place */}
                  <div className="text-center flex-1">
                    <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-xl mx-auto mb-2 overflow-hidden">
                      {entries[2]?.photoURL ? (
                        <img
                          src={entries[2].photoURL}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="font-black text-orange-600">
                          {resolveFirstName(entries[2]?.displayName)[0]}
                        </span>
                      )}
                    </div>
                    <p className="text-2xl">🥉</p>
                    <p className="text-xs font-bold text-efe-fg truncate max-w-20 mx-auto">
                      {resolveFirstName(entries[2]?.displayName)}
                    </p>
                    <p className="text-sm font-black text-efe-fg">
                      {entries[2]?.totalPoints?.toLocaleString()}
                    </p>
                  </div>
                </div>
              )}

              {/* Full list */}
              {entries.map((e, i) => {
                const isCurrentUser = user?.uid === e.uid;
                const firstName = resolveFirstName(e.displayName);
                return (
                  <div
                    key={e.id || e.uid}
                    className={`flex items-center gap-4 px-5 py-3.5 ${
                      isCurrentUser
                        ? "bg-efe-accent-soft"
                        : i % 2 === 0
                        ? "bg-efe-surface"
                        : "bg-efe-bg/50"
                    }`}
                  >
                    {/* Rank */}
                    <div className="w-8 text-center flex-shrink-0">
                      {i < 3 ? (
                        <span className="text-lg">{MEDALS[i]}</span>
                      ) : (
                        <span className="text-sm font-black text-efe-muted">
                          #{i + 1}
                        </span>
                      )}
                    </div>
                    {/* Avatar */}
                    <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-efe-bg flex items-center justify-center">
                      {e.photoURL ? (
                        <img
                          src={e.photoURL}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-sm font-black text-efe-muted">
                          {(firstName || "?")[0]}
                        </span>
                      )}
                    </div>
                    {/* Name */}
                    <div className="flex-1 min-w-0">
                      <p
                        className={`text-sm font-bold truncate ${
                          isCurrentUser ? "text-efe-accent-ink" : "text-efe-fg"
                        }`}
                      >
                        {firstName}{" "}
                        {isCurrentUser && <span className="text-xs">(You)</span>}
                      </p>
                      <p className="text-xs text-efe-muted">
                        {e.games || 0} {e.games === 1 ? "game" : "games"} played
                        {typeof e.bestRound === "number"
                          ? ` · Best round: ${e.bestRound} pts`
                          : ""}
                      </p>
                    </div>
                    {/* Score */}
                    <div className="text-right flex-shrink-0">
                      <p
                        className={`text-base font-black ${
                          i === 0
                            ? "text-amber-600"
                            : isCurrentUser
                            ? "text-efe-accent"
                            : "text-efe-fg"
                        }`}
                      >
                        {(e.totalPoints || 0).toLocaleString()}
                      </p>
                      <p className="text-xs text-efe-muted">points</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
      </div>
    </div>
  );
}
