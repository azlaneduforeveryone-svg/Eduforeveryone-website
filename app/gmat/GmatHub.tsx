"use client";
// app/gmat/GmatHub.tsx
// Client hub: section cards + full-mock CTA + performance panel. Emerald accent
// (distinct from IELTS indigo). No question literals — content is descriptive.

import Link from "next/link";
import PerformancePanel from "@/components/gmat/PerformancePanel";

const SECTIONS = [
  {
    href: "/gmat/quant", emoji: "🔢", name: "Quantitative Reasoning",
    meta: "21 questions · 45 min", types: "Problem Solving",
    desc: "Arithmetic, algebra, word problems and number properties — no calculator, no geometry-only items.",
  },
  {
    href: "/gmat/verbal", emoji: "📖", name: "Verbal Reasoning",
    meta: "23 questions · 45 min", types: "Critical Reasoning · Reading Comprehension",
    desc: "Evaluate arguments and read dense passages. No Sentence Correction in the Focus Edition.",
  },
  {
    href: "/gmat/data-insights", emoji: "📊", name: "Data Insights",
    meta: "20 questions · 45 min", types: "DS · MSR · Table · Graphics · Two-Part",
    desc: "Interpret data across tables, charts and multiple sources — the signature Focus Edition section.",
  },
];

const SCALE = [
  { band: "655–805", label: "Top decile", color: "bg-emerald-600" },
  { band: "565–645", label: "Strong", color: "bg-green-500" },
  { band: "475–555", label: "Mid-range", color: "bg-lime-500" },
  { band: "385–465", label: "Developing", color: "bg-amber-500" },
  { band: "205–375", label: "Foundational", color: "bg-orange-500" },
];

const FAQS = [
  { q: "What is the GMAT Focus Edition?", a: "The current GMAT: three 45-minute sections (Quantitative Reasoning, Verbal Reasoning, Data Insights), 64 questions, about 2 hours 15 minutes. It replaced the older format and dropped the essay, Sentence Correction and standalone Geometry." },
  { q: "How is it scored?", a: "The official total runs from 205 to 805 in 10-point steps, with each section scored 60–90. Scoring is adaptive (item-response theory). Our practice gives a difficulty-weighted ESTIMATE only — it is not an official GMAT score." },
  { q: "Can I go back and change answers?", a: "Yes. Unlike some adaptive tests, GMAT Focus lets you bookmark questions and edit up to 3 answers per section. This practice mirrors that — you'll see an 'edits left' counter." },
  { q: "Do I need an account?", a: "No. Every practice section and the full mock run with no sign-up. Your history is saved locally on your device; signing in additionally backs it up across devices." },
];

export default function GmatHub() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            🎓 GMAT Focus Edition · Free Practice
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-5">
            Master the GMAT Focus Edition
          </h1>
          <p className="text-emerald-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Three sections, 64 questions, real-exam tools — bookmark, edit answers, choose your
            section order. Practice each section or sit a full timed mock, with detailed
            explanations on every question. Completely free, no sign-up.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/gmat/full-test"
              className="bg-white text-emerald-700 px-8 py-3.5 rounded-xl font-bold text-base hover:bg-emerald-50 transition-all"
              style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.2)" }}>
              📋 Take Full Mock Test
            </Link>
            <Link href="/gmat/quant"
              className="bg-emerald-900/50 border border-white/25 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-emerald-900 transition-all">
              🚀 Start with Quant
            </Link>
          </div>
          <p className="text-emerald-200 text-xs mt-5">
            ⚠️ All scores here are estimated — not an official GMAT score.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* Sections */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Practice by Section</h2>
          <p className="text-gray-500 mb-8">10 fresh questions each session, with no-repeat rotation so you rarely see the same set twice.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {SECTIONS.map((s) => (
              <Link key={s.href} href={s.href}
                className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-emerald-300 hover:shadow-md transition-all flex flex-col">
                <span className="text-3xl mb-2">{s.emoji}</span>
                <p className="font-black text-gray-900 text-lg leading-tight">{s.name}</p>
                <span className="text-xs font-bold text-emerald-600 mt-1">{s.meta}</span>
                <span className="text-[11px] text-gray-400 mt-0.5">{s.types}</span>
                <p className="text-sm text-gray-600 leading-relaxed mt-3 flex-1">{s.desc}</p>
                <span className="text-xs font-bold text-emerald-600 mt-3 group-hover:underline">Practise {s.name.split(" ")[0]} →</span>
              </Link>
            ))}
          </div>
        </section>

        {/* Full mock CTA */}
        <section>
          <div className="bg-gradient-to-br from-emerald-700 to-teal-700 text-white rounded-2xl p-7 relative">
            <div className="absolute -top-2 -right-2">
              <span className="bg-amber-400 text-amber-900 text-xs font-black px-2.5 py-1 rounded-full">FULL TEST</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">📋</span>
                  <div>
                    <span className="text-xs font-bold bg-white/20 border border-white/25 px-3 py-1 rounded-full">🕒 ~2h 15min</span>
                    <h3 className="text-2xl font-black mt-2">Full Mock Test</h3>
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-2 mb-2">
                  {[
                    "🔢 Quant — 45-minute section",
                    "📖 Verbal — 45-minute section",
                    "📊 Data Insights — 45-minute section",
                    "🔀 Choose your own section order",
                    "🔖 Bookmark + edit up to 3 per section",
                    "📊 Estimated total + per-section bands",
                  ].map((f) => (
                    <div key={f} className="flex items-center gap-2 text-sm text-emerald-100">
                      <span className="text-emerald-300 font-bold shrink-0">✓</span>{f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:w-52 flex flex-col gap-3 shrink-0">
                <Link href="/gmat/full-test"
                  className="w-full bg-white text-emerald-700 py-3.5 rounded-xl font-black text-sm text-center hover:bg-emerald-50 transition-all block"
                  style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.2)" }}>
                  Start Full Test →
                </Link>
                <div className="text-center space-y-1">
                  <p className="text-emerald-200 text-xs">Fresh question pool each attempt</p>
                  <p className="text-emerald-200 text-xs">No signup required · Free</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exam structure */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Exam Structure</h2>
          <p className="text-gray-500 mb-8">64 questions · 2 hours 15 minutes · total score 205–805.</p>
          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <div className="hidden sm:grid grid-cols-4 bg-gray-50 border-b border-gray-100 px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span>Section</span><span>Questions</span><span>Time</span><span>Question types</span>
            </div>
            {[
              ["Quantitative Reasoning", "21", "45 min", "Problem Solving"],
              ["Verbal Reasoning", "23", "45 min", "Critical Reasoning, Reading Comprehension"],
              ["Data Insights", "20", "45 min", "DS, MSR, Table, Graphics, Two-Part"],
            ].map((r, i) => (
              <div key={r[0]} className={`grid sm:grid-cols-4 gap-1 px-5 py-4 text-sm ${i < 2 ? "border-b border-gray-50" : ""}`}>
                <span className="font-bold text-gray-900">{r[0]}</span>
                <span className="text-gray-600">{r[1]}</span>
                <span className="text-gray-600">{r[2]}</span>
                <span className="text-gray-600">{r[3]}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Score scale */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">The 205–805 Score Scale</h2>
          <p className="text-gray-500 mb-8">Indicative ranges only. The real score is adaptive; our practice gives a weighted estimate.</p>
          <div className="space-y-2">
            {SCALE.map((s) => (
              <div key={s.band} className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-4 py-3">
                <span className={`${s.color} text-white font-black text-sm px-3 py-1.5 rounded-lg w-32 text-center shrink-0`}>{s.band}</span>
                <span className="text-sm font-semibold text-gray-700">{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Performance */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">📊 Your Performance</h2>
          <p className="text-gray-500 mb-8">Tracked on this device automatically — sign in to back it up. Estimated scores only.</p>
          <PerformancePanel />
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
                <p className="font-bold text-gray-900 mb-2">❓ {f.q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
