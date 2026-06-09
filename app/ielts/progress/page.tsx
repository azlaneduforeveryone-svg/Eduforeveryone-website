"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { getLocalIelts, getIeltsSessions, IeltsResult } from "@/lib/firebaseDB";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Session extends IeltsResult {
  id?: string;
  date: number;
}

const SKILL_META: Record<string, { label: string; icon: string; color: string; bg: string; border: string }> = {
  listening: { label: "Listening", icon: "🎧", color: "text-emerald-700", bg: "bg-emerald-50",  border: "border-emerald-200" },
  reading:   { label: "Reading",   icon: "📖", color: "text-indigo-700",  bg: "bg-indigo-50",   border: "border-indigo-200" },
  writing:   { label: "Writing",   icon: "✍️", color: "text-violet-700",  bg: "bg-violet-50",   border: "border-violet-200" },
  speaking:  { label: "Speaking",  icon: "🗣️", color: "text-amber-700",   bg: "bg-amber-50",    border: "border-amber-200"  },
};

function bandColor(b: number) {
  if (b >= 7) return "text-emerald-600";
  if (b >= 5.5) return "text-amber-600";
  return "text-red-500";
}
function fmtBand(b: number) {
  return Number.isInteger(b) ? String(b) : b.toFixed(1);
}
function fmtDate(ts: number) {
  return new Date(ts).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

// Deduplicate local + Firestore sessions by matching date+skill+band
function mergeSessions(local: Session[], remote: Session[]): Session[] {
  const seen = new Set<string>();
  const all: Session[] = [];
  for (const s of [...remote, ...local]) {
    const key = `${s.skill}-${s.band}-${Math.round(s.date / 60_000)}`;
    if (!seen.has(key)) { seen.add(key); all.push(s); }
  }
  return all.sort((a, b) => b.date - a.date);
}

// Group full-mock records by mockId into one entry
function groupSessions(sessions: Session[]): Array<Session | { isMock: true; mockId: string; date: number; skills: Session[] }> {
  const mockMap = new Map<string, Session[]>();
  const out: Array<Session | { isMock: true; mockId: string; date: number; skills: Session[] }> = [];

  for (const s of sessions) {
    if (s.source === "full-mock" && s.mockId) {
      const arr = mockMap.get(s.mockId) || [];
      arr.push(s);
      mockMap.set(s.mockId, arr);
    } else {
      out.push(s);
    }
  }

  for (const [mockId, skills] of mockMap.entries()) {
    const date = Math.max(...skills.map(s => s.date));
    out.push({ isMock: true, mockId, date, skills });
  }

  return out.sort((a, b) => b.date - a.date);
}

// ── Component ──────────────────────────────────────────────────────────────────
export default function ProgressPage() {
  const { user, loading: authLoading } = useAuth();
  const [sessions, setSessions] = useState<Session[]>([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [expandedMocks, setExpandedMocks] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (authLoading) return;
    const local = getLocalIelts() as Session[];
    if (!user) {
      setSessions(local);
      setDataLoading(false);
      return;
    }
    getIeltsSessions(user.uid)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      .then((remote: any[]) => {
        const remapped: Session[] = remote.map(r => ({
          ...r,
          date: typeof r.date?.toMillis === "function" ? r.date.toMillis() : r.date ?? Date.now(),
        }));
        setSessions(mergeSessions(local, remapped));
      })
      .catch(() => setSessions(local))
      .finally(() => setDataLoading(false));
  }, [user, authLoading]);

  // ── Summary stats ──────────────────────────────────────────────────────────
  const stats = (["listening", "reading", "writing", "speaking"] as const).map(skill => {
    const rows = sessions.filter(s => s.skill === skill);
    const best = rows.length ? Math.max(...rows.map(r => r.band)) : null;
    const latest = rows[0] ?? null;
    return { skill, count: rows.length, best, latest };
  });

  const grouped = groupSessions(sessions);

  const toggleMock = (mockId: string) =>
    setExpandedMocks(prev => {
      const n = new Set(prev);
      n.has(mockId) ? n.delete(mockId) : n.add(mockId);
      return n;
    });

  if (authLoading || dataLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
        <div className="w-8 h-8 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-gray-500 text-sm">Loading your progress…</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">My Progress</span>
      </div>

      <div className="flex items-start gap-4 mb-8">
        <span className="text-4xl">📊</span>
        <div>
          <h1 className="text-3xl font-black text-gray-900 mb-1">My IELTS Progress</h1>
          <p className="text-gray-500 text-sm">
            {sessions.length} attempt{sessions.length !== 1 ? "s" : ""} recorded
            {!user && " (local device only)"}
          </p>
        </div>
      </div>

      {/* Guest note */}
      {!user && (
        <div className="bg-indigo-50 border border-indigo-200 rounded-2xl px-5 py-4 mb-8 flex items-start gap-3">
          <span className="text-2xl">🔒</span>
          <div>
            <p className="font-semibold text-indigo-800 text-sm">Sign in to save progress across devices</p>
            <p className="text-indigo-600 text-xs mt-0.5">Your attempts are saved locally on this device. Sign in to sync across all your devices and never lose your history.</p>
          </div>
        </div>
      )}

      {/* ── Per-skill summary cards ─────────────────────────────────────────── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        {stats.map(({ skill, count, best, latest }) => {
          const m = SKILL_META[skill];
          return (
            <div key={skill} className={`${m.bg} ${m.border} border rounded-2xl p-4 text-center`}>
              <p className="text-2xl mb-1">{m.icon}</p>
              <p className={`font-bold text-sm ${m.color} mb-1`}>{m.label}</p>
              {best !== null ? (
                <>
                  <p className={`text-3xl font-black ${bandColor(best)}`}>{fmtBand(best)}</p>
                  <p className="text-xs text-gray-400 mt-0.5">Best band</p>
                  {latest && <p className="text-xs text-gray-400 mt-0.5">{count} attempt{count !== 1 ? "s" : ""}</p>}
                </>
              ) : (
                <p className="text-gray-400 text-xs mt-2">No attempts yet</p>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Band trend (latest 5 per skill) ────────────────────────────────── */}
      {sessions.length > 0 && (
        <div className="mb-10">
          <h2 className="text-lg font-black text-gray-900 mb-4">Recent Bands by Skill</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {(["listening", "reading", "writing", "speaking"] as const).map(skill => {
              const rows = sessions.filter(s => s.skill === skill).slice(0, 5);
              if (!rows.length) return null;
              const m = SKILL_META[skill];
              return (
                <div key={skill} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span>{m.icon}</span>
                    <p className={`font-bold text-sm ${m.color}`}>{m.label}</p>
                  </div>
                  <div className="space-y-2">
                    {rows.map((r, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <span className="text-gray-500 text-xs">{fmtDate(r.date)}</span>
                        <div className="flex items-center gap-3 flex-1 mx-3">
                          <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full rounded-full transition-all ${r.band >= 7 ? "bg-emerald-500" : r.band >= 5.5 ? "bg-amber-500" : "bg-red-400"}`}
                              style={{ width: `${(r.band / 9) * 100}%` }}
                            />
                          </div>
                        </div>
                        <span className={`font-black text-sm ${bandColor(r.band)}`}>{fmtBand(r.band)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Full history ───────────────────────────────────────────────────── */}
      <div>
        <h2 className="text-lg font-black text-gray-900 mb-4">Full History</h2>

        {grouped.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-2xl p-10 text-center">
            <p className="text-4xl mb-3">📭</p>
            <p className="font-semibold text-gray-700 mb-1">No attempts yet</p>
            <p className="text-gray-400 text-sm mb-5">Complete any IELTS practice test to see your results here.</p>
            <Link href="/ielts/practice"
              className="inline-block bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors">
              Start Practising →
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {grouped.map((item, i) => {
              if ("isMock" in item) {
                // Full mock grouped row
                const overall = item.skills.reduce((sum, s) => sum + s.band, 0) / item.skills.length;
                const isExpanded = expandedMocks.has(item.mockId);
                return (
                  <div key={item.mockId} className="bg-white border border-indigo-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleMock(item.mockId)}
                      className="w-full flex items-center justify-between px-5 py-4 hover:bg-indigo-50 transition-colors text-left">
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full">Full Mock</span>
                        <span className="text-gray-500 text-sm">{fmtDate(item.date)}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-lg font-black ${bandColor(overall)}`}>{fmtBand(Math.round(overall * 2) / 2)}</span>
                        <span className="text-gray-400 text-xs">Overall</span>
                        <span className="text-gray-400 text-sm">{isExpanded ? "▲" : "▼"}</span>
                      </div>
                    </button>
                    {isExpanded && (
                      <div className="px-5 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-indigo-100 pt-4">
                        {item.skills.map(s => {
                          const m = SKILL_META[s.skill];
                          return (
                            <div key={s.skill} className={`${m.bg} ${m.border} border rounded-xl p-3 text-center`}>
                              <p className="text-lg mb-0.5">{m.icon}</p>
                              <p className={`text-xs font-semibold ${m.color} mb-1`}>{m.label}</p>
                              <p className={`text-xl font-black ${bandColor(s.band)}`}>{fmtBand(s.band)}</p>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              }

              // Practice attempt row
              const s = item as Session;
              const m = SKILL_META[s.skill];
              return (
                <div key={i} className={`bg-white border ${m.border} rounded-2xl px-5 py-4 flex items-center justify-between`}>
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xl flex-shrink-0">{m.icon}</span>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${m.bg} ${m.color}`}>{m.label}</span>
                        {s.testId && <span className="text-xs text-gray-400 truncate max-w-[140px]">{s.testId}</span>}
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">{fmtDate(s.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {s.raw != null && s.total != null && (
                      <span className="text-xs text-gray-400">{s.raw}/{s.total}</span>
                    )}
                    <span className={`text-xl font-black ${bandColor(s.band)}`}>{fmtBand(s.band)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link href="/ielts" className="text-indigo-600 text-sm font-semibold hover:underline">
          ← Back to IELTS Hub
        </Link>
      </div>
    </div>
  );
}
