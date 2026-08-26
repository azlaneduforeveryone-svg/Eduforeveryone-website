"use client";
// app/gmat/full-test/GmatFullMock.tsx
// ---------------------------------------------------------------------------
// Full GMAT Focus mock: three sections (Quant 21 / Verbal 23 / Data Insights
// 20 at real length, capped by current bank size), each its own 45-minute
// timer. The test-taker chooses the section order at the start (real-exam
// behaviour), with an optional break between sections — the clock does NOT
// carry into a break (each section is independently timed). Ends with the
// estimated total + three section bands + full review. No question literals.
// ---------------------------------------------------------------------------

import { useState, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import SectionRunner from "@/components/gmat/SectionRunner";
import type { SectionRunResult } from "@/components/gmat/SectionRunner";
import GmatResults from "@/components/gmat/GmatResults";
import { GMAT_FORM, getBank } from "@/lib/gmat/data";
import { buildFullMock, estimateTotal } from "@/lib/gmat/engine";
import { saveGmatResult } from "@/lib/firebaseDB";
import type { GmatQuestion, GmatSection } from "@/lib/gmat/types";

type Phase = "start" | "section" | "break" | "result";

const SECTION_META: Record<GmatSection, { name: string; emoji: string; desc: string }> = {
  quant: { name: "Quantitative Reasoning", emoji: "🔢", desc: "Problem Solving · 45 min" },
  verbal: { name: "Verbal Reasoning", emoji: "📖", desc: "Critical Reasoning & Reading Comp · 45 min" },
  "data-insights": { name: "Data Insights", emoji: "📊", desc: "DS · MSR · Table · Graphics · Two-Part · 45 min" },
};

const PRESET_ORDERS: { label: string; order: GmatSection[] }[] = [
  { label: "Quant → Verbal → Data Insights", order: ["quant", "verbal", "data-insights"] },
  { label: "Data Insights → Verbal → Quant", order: ["data-insights", "verbal", "quant"] },
  { label: "Verbal → Data Insights → Quant", order: ["verbal", "data-insights", "quant"] },
];

export default function GmatFullMock() {
  const { user } = useAuth();
  const [phase, setPhase] = useState<Phase>("start");
  const [order, setOrder] = useState<GmatSection[]>(PRESET_ORDERS[0].order);
  const [mock, setMock] = useState<Record<GmatSection, GmatQuestion[]> | null>(null);
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<SectionRunResult[]>([]);
  const [estimatedTotal, setEstimatedTotal] = useState<number>(0);

  const begin = useCallback(() => {
    setMock(buildFullMock(GMAT_FORM.sections));
    setResults([]);
    setStep(0);
    setPhase("section");
  }, []);

  const handleFinish = useCallback((r: SectionRunResult) => {
    setResults((prev) => {
      const all = [...prev, r];
      if (all.length >= order.length) {
        // Order results canonically (quant, verbal, data-insights) for display.
        const ordered = (["quant", "verbal", "data-insights"] as GmatSection[])
          .map((s) => all.find((x) => x.score.section === s))
          .filter((x): x is SectionRunResult => !!x);
        const total = estimateTotal(ordered.map((x) => x.score.estimatedSectionScore));
        setEstimatedTotal(total);
        saveGmatResult(
          {
            formId: GMAT_FORM.id,
            sections: ordered.map((x) => x.score),
            estimatedTotal: total,
            completedAt: Date.now(),
          },
          user?.uid
        );
        setPhase("result");
      } else {
        setPhase("break");
      }
      return all;
    });
  }, [order.length, user?.uid]);

  // ── Start screen ───────────────────────────────────────────────────────────
  if (phase === "start") {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/gmat" className="hover:text-emerald-600 transition-colors">GMAT</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">Full Mock Test</span>
        </div>

        <div className="bg-gradient-to-br from-emerald-700 to-teal-700 text-white rounded-2xl p-7 mb-6">
          <h1 className="text-2xl font-black mb-2">📋 GMAT Focus — Full Mock</h1>
          <p className="text-emerald-100 text-sm leading-relaxed">
            Three sections, each with its own 45-minute timer. Choose your section order below —
            just like the real exam. You may take an optional break between sections; the clock does
            not run during a break.
          </p>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4 mb-6">
          <p className="text-sm font-semibold text-amber-800">⚠️ Complete in one sitting</p>
          <p className="text-xs text-amber-700 mt-1">
            Refreshing or closing the page resets progress. Scores are <strong>estimated — not an official GMAT score</strong>.
          </p>
        </div>

        <h2 className="font-bold text-gray-900 mb-3">Choose your section order</h2>
        <div className="space-y-2 mb-6">
          {PRESET_ORDERS.map((p) => {
            const active = JSON.stringify(p.order) === JSON.stringify(order);
            return (
              <button key={p.label} onClick={() => setOrder(p.order)}
                className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                  active ? "bg-emerald-100 border-emerald-400 text-emerald-800" : "bg-white border-gray-200 text-gray-700 hover:border-emerald-300"
                }`}>
                {active ? "✓ " : ""}{p.label}
              </button>
            );
          })}
        </div>

        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {order.map((s, i) => (
            <div key={s} className="bg-white border border-gray-200 rounded-2xl p-4">
              <p className="text-xs text-gray-400 font-bold mb-1">SECTION {i + 1}</p>
              <p className="text-2xl mb-1">{SECTION_META[s].emoji}</p>
              <p className="font-bold text-gray-900 text-sm">{SECTION_META[s].name}</p>
              <p className="text-xs text-gray-500 mt-1">{SECTION_META[s].desc}</p>
              <p className="text-[11px] text-gray-400 mt-1">{getBank(s).items.length} questions in this attempt</p>
            </div>
          ))}
        </div>

        <button onClick={begin}
          className="w-full bg-emerald-600 text-white py-4 rounded-xl font-black hover:bg-emerald-700 transition-colors"
          style={{ boxShadow: "0 4px 0 #047857" }}>
          Start Full Mock →
        </button>
      </div>
    );
  }

  // ── Break screen ───────────────────────────────────────────────────────────
  if (phase === "break") {
    const justDone = order[step];
    const next = order[step + 1];
    return (
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16 text-center">
        <p className="text-5xl mb-4">✅</p>
        <h1 className="text-2xl font-black text-gray-900 mb-2">{SECTION_META[justDone].name} complete</h1>
        <p className="text-gray-500 text-sm mb-1">
          Section {step + 1} of {order.length} done. Take an optional break — your timer is paused.
        </p>
        <p className="text-gray-400 text-xs mb-8">The break clock does not count against your next section's 45 minutes.</p>

        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
          <p className="text-xs text-gray-400 font-bold mb-1">UP NEXT</p>
          <p className="text-3xl mb-1">{SECTION_META[next].emoji}</p>
          <p className="font-bold text-gray-900">{SECTION_META[next].name}</p>
          <p className="text-xs text-gray-500 mt-1">{SECTION_META[next].desc}</p>
        </div>

        <button onClick={() => { setStep((s) => s + 1); setPhase("section"); }}
          className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-black hover:bg-emerald-700 transition-colors"
          style={{ boxShadow: "0 4px 0 #047857" }}>
          Start {SECTION_META[next].name} →
        </button>
      </div>
    );
  }

  // ── Result screen ──────────────────────────────────────────────────────────
  if (phase === "result") {
    const ordered = (["quant", "verbal", "data-insights"] as GmatSection[])
      .map((s) => results.find((x) => x.score.section === s))
      .filter((x): x is SectionRunResult => !!x);
    return (
      <GmatResults
        results={ordered}
        estimatedTotal={estimatedTotal}
        homeHref="/gmat"
        homeLabel="← GMAT Hub"
      />
    );
  }

  // ── Active section ─────────────────────────────────────────────────────────
  const sec = order[step];
  const bank = getBank(sec);
  return (
    <SectionRunner
      key={sec}
      section={sec}
      sectionName={`${bank.name} — Section ${step + 1} of ${order.length}`}
      questions={mock![sec]}
      minutes={bank.minutes}
      editsAllowed={GMAT_FORM.editsPerSection}
      onFinish={handleFinish}
    />
  );
}
