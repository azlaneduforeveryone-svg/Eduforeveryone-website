"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { getLocalIelts, getIeltsSessions, IeltsResult } from "@/lib/firebaseDB";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Session extends IeltsResult {
  id?: string;
  date: number;
}

const SKILL_META: Record<string, { label: string; icon: string; skillClass: string }> = {
  listening: { label: "Listening", icon: "🎧", skillClass: "efe-skill-listening" },
  reading:   { label: "Reading",   icon: "📖", skillClass: "efe-skill-reading" },
  writing:   { label: "Writing",   icon: "✍️", skillClass: "efe-skill-writing" },
  speaking:  { label: "Speaking",  icon: "🗣️", skillClass: "efe-skill-speaking" },
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
export default function ProgressClient() {
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
      <div className="efe-page">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 text-center">
          <div className="w-8 h-8 border-4 border-efe-line border-t-efe-accent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-efe-muted text-sm">Loading your progress…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="efe-page">
      <PageHeader
        breadcrumbs={[
          { label: "IELTS", href: "/ielts" },
          { label: "My Progress" },
        ]}
        title="📊 My IELTS Progress"
        description={`${sessions.length} attempt${sessions.length !== 1 ? "s" : ""} recorded${!user ? " (local device only)" : ""}`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Guest note */}
        {!user && (
          <div className="bg-efe-accent-soft border border-efe-line rounded-2xl px-5 py-4 mb-8 flex items-start gap-3">
            <span className="text-2xl">🔒</span>
            <div>
              <p className="font-semibold text-efe-accent-ink text-sm">Sign in to save progress across devices</p>
              <p className="text-efe-muted text-xs mt-0.5">Your attempts are saved locally on this device. Sign in to sync across all your devices and never lose your history.</p>
            </div>
          </div>
        )}

        {/* ── Per-skill summary cards ─────────────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {stats.map(({ skill, count, best, latest }) => {
            const m = SKILL_META[skill];
            return (
              <Card key={skill} className="p-4 text-center items-center">
                <span className={`w-11 h-11 rounded-[12px] border inline-flex items-center justify-center text-2xl mb-2 ${m.skillClass}`}>
                  {m.icon}
                </span>
                <p className="font-bold text-sm text-efe-fg mb-1">{m.label}</p>
                {best !== null ? (
                  <>
                    <p className={`text-3xl font-black ${bandColor(best)}`}>{fmtBand(best)}</p>
                    <p className="text-xs text-efe-muted mt-0.5">Best band</p>
                    {latest && <p className="text-xs text-efe-muted mt-0.5">{count} attempt{count !== 1 ? "s" : ""}</p>}
                  </>
                ) : (
                  <p className="text-efe-muted text-xs mt-2">No attempts yet</p>
                )}
              </Card>
            );
          })}
        </div>

        {/* ── Band trend (latest 5 per skill) ────────────────────────────────── */}
        {sessions.length > 0 && (
          <div className="mb-10">
            <h2 className="text-lg font-bold text-efe-fg font-display mb-4">Recent Bands by Skill</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {(["listening", "reading", "writing", "speaking"] as const).map(skill => {
                const rows = sessions.filter(s => s.skill === skill).slice(0, 5);
                if (!rows.length) return null;
                const m = SKILL_META[skill];
                return (
                  <Card key={skill} className="p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-8 h-8 rounded-lg border inline-flex items-center justify-center text-base ${m.skillClass}`}>{m.icon}</span>
                      <p className="font-bold text-sm text-efe-fg">{m.label}</p>
                    </div>
                    <div className="space-y-2">
                      {rows.map((r, i) => (
                        <div key={i} className="flex items-center justify-between text-sm">
                          <span className="text-efe-muted text-xs">{fmtDate(r.date)}</span>
                          <div className="flex items-center gap-3 flex-1 mx-3">
                            <div className="flex-1 h-1.5 bg-efe-bg rounded-full overflow-hidden">
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
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* ── Full history ───────────────────────────────────────────────────── */}
        <div>
          <h2 className="text-lg font-bold text-efe-fg font-display mb-4">Full History</h2>

          {grouped.length === 0 ? (
            <Card className="p-10 text-center items-center">
              <p className="text-4xl mb-3">📭</p>
              <p className="font-semibold text-efe-fg mb-1">No attempts yet</p>
              <p className="text-efe-muted text-sm mb-5">Complete any IELTS practice test to see your results here.</p>
              <Button href="/ielts/practice" variant="primary">
                Start Practising →
              </Button>
            </Card>
          ) : (
            <div className="space-y-3">
              {grouped.map((item, i) => {
                if ("isMock" in item) {
                  // Full mock grouped row
                  const overall = item.skills.reduce((sum, s) => sum + s.band, 0) / item.skills.length;
                  const isExpanded = expandedMocks.has(item.mockId);
                  return (
                    <div key={item.mockId} className="bg-efe-surface border border-efe-line rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleMock(item.mockId)}
                        className="w-full flex items-center justify-between px-5 py-4 hover:bg-efe-accent-soft/50 transition-colors text-left">
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-bold bg-efe-accent-soft text-efe-accent-ink px-2.5 py-1 rounded-full">Full Mock</span>
                          <span className="text-efe-muted text-sm">{fmtDate(item.date)}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className={`text-lg font-black ${bandColor(overall)}`}>{fmtBand(Math.round(overall * 2) / 2)}</span>
                          <span className="text-efe-muted text-xs">Overall</span>
                          <span className="text-efe-muted text-sm">{isExpanded ? "▲" : "▼"}</span>
                        </div>
                      </button>
                      {isExpanded && (
                        <div className="px-5 pb-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-efe-line pt-4">
                          {item.skills.map(s => {
                            const m = SKILL_META[s.skill];
                            return (
                              <div key={s.skill} className="bg-efe-bg border border-efe-line rounded-xl p-3 text-center">
                                <p className="text-lg mb-0.5">{m.icon}</p>
                                <p className="text-xs font-semibold text-efe-fg mb-1">{m.label}</p>
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
                  <div key={i} className="bg-efe-surface border border-efe-line rounded-2xl px-5 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className={`w-9 h-9 rounded-lg border inline-flex items-center justify-center text-lg flex-shrink-0 ${m.skillClass}`}>{m.icon}</span>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full border ${m.skillClass}`}>{m.label}</span>
                          {s.testId && <span className="text-xs text-efe-muted truncate max-w-[140px]">{s.testId}</span>}
                        </div>
                        <p className="text-xs text-efe-muted mt-0.5">{fmtDate(s.date)}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {s.raw != null && s.total != null && (
                        <span className="text-xs text-efe-muted">{s.raw}/{s.total}</span>
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
          <Link href="/ielts" className="text-efe-accent-ink text-sm font-semibold hover:underline">
            ← Back to IELTS Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
