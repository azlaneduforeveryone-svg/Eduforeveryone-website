"use client";
// components/gmat/PerformancePanel.tsx
// ---------------------------------------------------------------------------
// Shows the user's standing over time. Works with ZERO login (localStorage
// "gmat_history"); when logged in, ALSO merges Firestore history. Login is
// never a gate. All scores labelled "estimated — not an official GMAT score".
// ---------------------------------------------------------------------------

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getLocalGmat, getGmatSessions } from "@/lib/firebaseDB";
import type { GmatSessionResult } from "@/lib/gmat/types";

const SECTION_TITLE: Record<string, string> = {
  quant: "Quant",
  verbal: "Verbal",
  "data-insights": "Data Insights",
};

export default function PerformancePanel() {
  const { user } = useAuth();
  const [sessions, setSessions] = useState<GmatSessionResult[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function load() {
      const local = getLocalGmat();
      let merged = local;
      if (user?.uid) {
        try {
          const remote = await getGmatSessions(user.uid);
          // Merge + de-dupe by completedAt timestamp.
          const seen = new Set(local.map((s) => s.completedAt));
          merged = [...local, ...remote.filter((r) => !seen.has(r.completedAt))]
            .sort((a, b) => b.completedAt - a.completedAt);
        } catch { /* fall back to local */ }
      }
      if (!cancelled) { setSessions(merged); setLoaded(true); }
    }
    load();
    return () => { cancelled = true; };
  }, [user?.uid]);

  if (!loaded) {
    return <div className="text-sm text-gray-400 py-6 text-center">Loading your history…</div>;
  }

  if (sessions.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
        <p className="text-3xl mb-2">📊</p>
        <p className="font-bold text-gray-800 mb-1">No attempts yet</p>
        <p className="text-sm text-gray-500">Complete a practice section or the full mock to start tracking your estimated scores.</p>
      </div>
    );
  }

  const fullMocks = sessions.filter((s) => s.sections.length > 1);
  const latest = sessions[0];
  const best = sessions.reduce((m, s) => Math.max(m, s.estimatedTotal), 0);

  return (
    <div className="space-y-4">
      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <Stat label="Last estimate" value={latest.estimatedTotal} />
        <Stat label="Best estimate" value={best} />
        <Stat label="Attempts" value={sessions.length} />
        <Stat label="Full mocks" value={fullMocks.length} />
      </div>

      <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2">
        ⚠️ All scores are estimated — not an official GMAT score.
        {!user?.uid && " Sign in to back up your history across devices (optional)."}
      </p>

      {/* Trend (recent attempts) */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5">
        <p className="text-sm font-bold text-gray-800 mb-3">Recent attempts</p>
        <div className="space-y-2">
          {sessions.slice(0, 8).map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-xs text-gray-400 w-24 shrink-0">
                {new Date(s.completedAt).toLocaleDateString()}
              </span>
              <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                <div className="h-full bg-emerald-500 rounded-full"
                  style={{ width: `${Math.max(5, ((s.estimatedTotal - 205) / 600) * 100)}%` }} />
              </div>
              <span className="text-sm font-bold text-emerald-700 w-12 text-right">{s.estimatedTotal}</span>
              <span className="text-[10px] text-gray-400 w-20 text-right hidden sm:block">
                {s.sections.length > 1 ? "Full mock" : SECTION_TITLE[s.sections[0]?.section] ?? "Practice"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Per-section averages (full mocks only) */}
      {fullMocks.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <p className="text-sm font-bold text-gray-800 mb-3">Section averages (full mocks)</p>
          <div className="grid grid-cols-3 gap-3">
            {(["quant", "verbal", "data-insights"] as const).map((sec) => {
              const vals = fullMocks
                .map((m) => m.sections.find((x) => x.section === sec)?.estimatedSectionScore)
                .filter((v): v is number => v !== undefined);
              const avg = vals.length ? Math.round(vals.reduce((a, b) => a + b, 0) / vals.length) : "—";
              return (
                <div key={sec} className="text-center bg-gray-50 border border-gray-100 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">{SECTION_TITLE[sec]}</p>
                  <p className="text-2xl font-black text-emerald-700">{avg}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 text-center">
      <p className="text-2xl font-black text-emerald-700">{value}</p>
      <p className="text-xs text-gray-500 mt-0.5">{label}</p>
    </div>
  );
}
