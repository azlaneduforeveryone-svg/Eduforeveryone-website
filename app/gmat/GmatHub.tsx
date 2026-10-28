"use client";
// app/gmat/GmatHub.tsx
// Client hub: section cards + full-mock CTA + performance panel.
// No question literals — content is descriptive.

import PerformancePanel from "@/components/gmat/PerformancePanel";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const SECTIONS = [
  {
    href: "/gmat/quant", emoji: "🔢", name: "Quantitative Reasoning",
    meta: "10-question practice set · full section is 21 Q / 45 min", types: "Problem Solving",
    desc: "Arithmetic, algebra, word problems and number properties — no calculator, no geometry-only items.",
  },
  {
    href: "/gmat/verbal", emoji: "📖", name: "Verbal Reasoning",
    meta: "10-question practice set · full section is 23 Q / 45 min", types: "Critical Reasoning · Reading Comprehension",
    desc: "Evaluate arguments and read dense passages. No Sentence Correction in the Focus Edition.",
  },
  {
    href: "/gmat/data-insights", emoji: "📊", name: "Data Insights",
    meta: "10-question practice set · full section is 20 Q / 45 min", types: "DS · MSR · Table · Graphics · Two-Part",
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
    <div className="efe-page">
      <PageHeader
        eyebrow="🎓 GMAT Focus Edition · Free Practice"
        title="Master the GMAT Focus Edition"
        description="Three sections, 64 questions, real-exam tools — bookmark, edit answers, choose your section order. Practice each section or sit a full timed mock, with detailed explanations on every question. Completely free, no sign-up."
        meta={
          <div className="space-y-3">
            <div className="flex flex-wrap gap-3">
              <Button href="/gmat/full-test" variant="onHero">
                📋 Take Full Mock Test
              </Button>
              <Button href="/gmat/quant" variant="ghostHero">
                🚀 Start with Quant
              </Button>
            </div>
            <p className="text-white/80 text-xs">
              ⚠️ All scores here are estimated — not an official GMAT score.
            </p>
          </div>
        }
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* Sections */}
        <section>
          <SectionHeader
            eyebrow="3 Focus Modules"
            title="Practice by Section"
            description="10 fresh questions in 22 minutes each session — the real-exam time-per-question ratio — with no-repeat rotation so you rarely see the same set twice. Sit the full mock below for true section lengths."
          />
          <div className="grid sm:grid-cols-3 gap-5">
            {SECTIONS.map((s) => (
              <Card key={s.href} href={s.href} className="p-6 justify-between">
                <div>
                  <span className="w-12 h-12 rounded-[14px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl mb-4 group-hover:bg-efe-accent group-hover:text-white transition-colors">
                    {s.emoji}
                  </span>
                  <p className="font-bold text-efe-fg text-lg leading-tight group-hover:text-efe-accent transition-colors">{s.name}</p>
                  <span className="block text-xs font-bold text-efe-accent-ink mt-1">{s.meta}</span>
                  <span className="block text-[11px] text-efe-muted mt-0.5">{s.types}</span>
                  <p className="text-sm text-efe-muted leading-relaxed mt-3">{s.desc}</p>
                </div>
                <span className="text-xs font-bold text-efe-accent-ink mt-4 group-hover:text-efe-accent group-hover:underline">
                  Practise {s.name.split(" ")[0]} →
                </span>
              </Card>
            ))}
          </div>
        </section>

        {/* Full mock CTA */}
        <section>
          <div className="efe-banner p-7 relative">
            <div className="absolute top-4 right-4">
              <span className="bg-amber-400 text-amber-950 text-xs font-black px-2.5 py-1 rounded-full">FULL TEST</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">📋</span>
                  <div>
                    <span className="text-xs font-bold bg-white/15 border border-white/25 px-3 py-1 rounded-full">🕒 ~2h 15min</span>
                    <h3 className="text-2xl font-bold text-white font-display mt-2">Full Mock Test</h3>
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
                    <div key={f} className="flex items-center gap-2 text-sm text-white/90">
                      <span className="text-amber-300 font-bold shrink-0">✓</span>{f}
                    </div>
                  ))}
                </div>
              </div>
              <div className="sm:w-52 flex flex-col gap-3 shrink-0">
                <Button href="/gmat/full-test" variant="onHero" className="w-full">
                  Start Full Test →
                </Button>
                <div className="text-center space-y-1">
                  <p className="text-white/80 text-xs">Fresh question pool each attempt</p>
                  <p className="text-white/80 text-xs">No signup required · Free</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exam structure */}
        <section>
          <SectionHeader
            eyebrow="Format"
            title="Exam Structure"
            description="64 questions · 2 hours 15 minutes · total score 205–805."
          />
          <Card className="overflow-hidden">
            <div className="hidden sm:grid grid-cols-4 bg-efe-bg border-b border-efe-line px-5 py-3 text-xs font-bold text-efe-muted uppercase tracking-wider">
              <span>Section</span><span>Questions</span><span>Time</span><span>Question types</span>
            </div>
            {[
              ["Quantitative Reasoning", "21", "45 min", "Problem Solving"],
              ["Verbal Reasoning", "23", "45 min", "Critical Reasoning, Reading Comprehension"],
              ["Data Insights", "20", "45 min", "DS, MSR, Table, Graphics, Two-Part"],
            ].map((r, i) => (
              <div key={r[0]} className={`grid sm:grid-cols-4 gap-1 px-5 py-4 text-sm ${i < 2 ? "border-b border-efe-line/60" : ""}`}>
                <span className="font-bold text-efe-fg">{r[0]}</span>
                <span className="text-efe-muted">{r[1]}</span>
                <span className="text-efe-muted">{r[2]}</span>
                <span className="text-efe-muted">{r[3]}</span>
              </div>
            ))}
          </Card>
        </section>

        {/* Score scale (Semantic band colours preserved per Plan Change #3) */}
        <section>
          <SectionHeader
            eyebrow="Scoring"
            title="The 205–805 Score Scale"
            description="Indicative ranges only. The real score is adaptive; our practice gives a weighted estimate."
          />
          <div className="space-y-2">
            {SCALE.map((s) => (
              <Card key={s.band} className="flex items-center gap-4 px-4 py-3">
                <span className={`${s.color} text-white font-black text-sm px-3 py-1.5 rounded-lg w-32 text-center shrink-0`}>{s.band}</span>
                <span className="text-sm font-semibold text-efe-fg">{s.label}</span>
              </Card>
            ))}
          </div>
        </section>

        {/* Performance */}
        <section>
          <SectionHeader
            eyebrow="Progress"
            title="📊 Your Performance"
            description="Tracked on this device automatically — sign in to back it up. Estimated scores only."
          />
          <PerformancePanel />
        </section>

        {/* FAQ */}
        <section>
          <SectionHeader
            eyebrow="FAQ"
            title="Frequently Asked Questions"
          />
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <Card key={i} className="p-5">
                <p className="font-bold text-efe-fg mb-2">❓ {f.q}</p>
                <p className="text-sm text-efe-muted leading-relaxed">{f.a}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
