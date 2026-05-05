"use client";
// app/leaderboard/LeaderboardPage.tsx
import { useEffect, useState } from "react";
import { getGlobalLeaderboard, getCategoryLeaderboard } from "@/lib/firebaseDB";
import { useAuth } from "@/contexts/AuthContext";
import AuthModal from "@/components/AuthModal";

const CATEGORIES = [
  { id:"global",  label:"🌍 Global",   col:"leaderboard" },
  { id:"quran",   label:"📖 Quran",    col:"leaderboard_quran" },
  { id:"hadith",  label:"📜 Hadith",   col:"leaderboard_hadith" },
  { id:"fiqh",    label:"⚖️ Fiqh",     col:"leaderboard_fiqh" },
  { id:"seerah",  label:"🕌 Seerah",   col:"leaderboard_seerah" },
  { id:"history", label:"📚 History",  col:"leaderboard_history" },
  { id:"pillars", label:"🕋 Pillars",  col:"leaderboard_pillars" },
  { id:"names",   label:"☪️ 99 Names", col:"leaderboard_names" },
];

const MEDALS = ["🥇","🥈","🥉"];

interface LeaderEntry {
  id: string;
  uid: string;
  displayName: string;
  photoURL?: string;
  totalScore: number;
  totalGames?: number;
  bestScore?: number;
  games?: number;
}

export default function LeaderboardPage() {
  const { user } = useAuth();
  const [active,   setActive]   = useState("global");
  const [entries,  setEntries]  = useState<LeaderEntry[]>([]);
  const [loading,  setLoading]  = useState(true);
  const [showAuth, setShowAuth] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fn = active === "global"
      ? getGlobalLeaderboard(20)
      : getCategoryLeaderboard(active, 20);
    fn.then(data => { setEntries(data as LeaderEntry[]); setLoading(false); })
      .catch(() => setLoading(false));
  }, [active]);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <p className="text-5xl mb-3">🏆</p>
        <h1 className="text-3xl font-black text-gray-900 mb-2">Leaderboard</h1>
        <p className="text-gray-500">Top learners on EduForEveryone</p>
        {!user && (
          <button onClick={() => setShowAuth(true)}
            className="mt-4 bg-teal-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-teal-700 transition-all"
            style={{ boxShadow: "0 3px 0 #0F6E56" }}>
            Sign In to Compete 🚀
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {CATEGORIES.map(c => (
          <button key={c.id} onClick={() => setActive(c.id)}
            className={`px-3 py-2 rounded-xl text-xs font-bold border whitespace-nowrap flex-shrink-0 transition-all
              ${active === c.id ? "bg-teal-600 text-white border-teal-700" : "bg-white text-gray-500 border-gray-200 hover:border-teal-300"}`}>
            {c.label}
          </button>
        ))}
      </div>

      {/* Leaderboard list */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : entries.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">📭</p>
            <p className="text-gray-500 font-semibold">No scores yet</p>
            <p className="text-gray-400 text-sm mt-1">Be the first to play and claim the top spot!</p>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {/* Top 3 podium */}
            {entries.slice(0, 3).length === 3 && (
              <div className="flex items-end justify-center gap-4 p-6 bg-gradient-to-b from-amber-50 to-white">
                {/* 2nd place */}
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl mx-auto mb-2 overflow-hidden">
                    {entries[1]?.photoURL
                      ? <img src={entries[1].photoURL} alt="" className="w-full h-full object-cover" />
                      : <span className="font-black text-gray-600">{(entries[1]?.displayName||"?")[0]}</span>}
                  </div>
                  <p className="text-2xl">🥈</p>
                  <p className="text-xs font-bold text-gray-700 truncate max-w-20 mx-auto">{entries[1]?.displayName}</p>
                  <p className="text-sm font-black text-gray-900">{entries[1]?.totalScore?.toLocaleString()}</p>
                </div>
                {/* 1st place */}
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-2 border-2 border-amber-300 overflow-hidden">
                    {entries[0]?.photoURL
                      ? <img src={entries[0].photoURL} alt="" className="w-full h-full object-cover" />
                      : <span className="font-black text-amber-700">{(entries[0]?.displayName||"?")[0]}</span>}
                  </div>
                  <p className="text-3xl">🥇</p>
                  <p className="text-sm font-bold text-gray-900 truncate max-w-20 mx-auto">{entries[0]?.displayName}</p>
                  <p className="text-base font-black text-amber-600">{entries[0]?.totalScore?.toLocaleString()}</p>
                </div>
                {/* 3rd place */}
                <div className="text-center flex-1">
                  <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-xl mx-auto mb-2 overflow-hidden">
                    {entries[2]?.photoURL
                      ? <img src={entries[2].photoURL} alt="" className="w-full h-full object-cover" />
                      : <span className="font-black text-orange-600">{(entries[2]?.displayName||"?")[0]}</span>}
                  </div>
                  <p className="text-2xl">🥉</p>
                  <p className="text-xs font-bold text-gray-700 truncate max-w-20 mx-auto">{entries[2]?.displayName}</p>
                  <p className="text-sm font-black text-gray-900">{entries[2]?.totalScore?.toLocaleString()}</p>
                </div>
              </div>
            )}

            {/* Full list */}
            {entries.map((e, i) => {
              const isCurrentUser = user?.uid === e.uid;
              return (
                <div key={e.id || e.uid}
                  className={`flex items-center gap-4 px-5 py-3.5 ${isCurrentUser ? "bg-teal-50" : i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                  {/* Rank */}
                  <div className="w-8 text-center flex-shrink-0">
                    {i < 3
                      ? <span className="text-lg">{MEDALS[i]}</span>
                      : <span className="text-sm font-black text-gray-400">#{i+1}</span>}
                  </div>
                  {/* Avatar */}
                  <div className="w-9 h-9 rounded-full overflow-hidden flex-shrink-0 bg-gray-100 flex items-center justify-center">
                    {e.photoURL
                      ? <img src={e.photoURL} alt="" className="w-full h-full object-cover" />
                      : <span className="text-sm font-black text-gray-600">{(e.displayName||"?")[0]}</span>}
                  </div>
                  {/* Name */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-bold truncate ${isCurrentUser ? "text-teal-700" : "text-gray-900"}`}>
                      {e.displayName} {isCurrentUser && <span className="text-xs">(You)</span>}
                    </p>
                    <p className="text-xs text-gray-400">
                      {e.totalGames || e.games || 0} games played
                    </p>
                  </div>
                  {/* Score */}
                  <div className="text-right flex-shrink-0">
                    <p className={`text-base font-black ${i === 0 ? "text-amber-600" : isCurrentUser ? "text-teal-600" : "text-gray-900"}`}>
                      {e.totalScore?.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-400">points</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}