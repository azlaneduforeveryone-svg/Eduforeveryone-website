import type { Metadata } from "next";
import Link from "next/link";
import JsonLd, { faqLd, breadcrumbLd } from "@/components/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Free IELTS Preparation — Academic & General Training",
  description: "Free IELTS prep: test format, band scores 0–9, marking criteria and practice for Listening, Reading, Writing & Speaking. No sign-up.",
  alternates: { canonical: "https://eduforeveryone.com/ielts" },
  openGraph: {
    title: "Free IELTS Preparation Guide | EduForEveryone",
    description: "Everything you need: test types, band scores, exam format, marking criteria, and expert strategies — completely free.",
    url: "https://eduforeveryone.com/ielts",
    siteName: "EduForEveryone",
    type: "website",
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const EXAM_FORMAT = [
  {
    icon: "🎧", skill: "Listening", href: "/ielts/listening",
    duration: "30 min + 10 min transfer",
    skillClass: "efe-skill-listening",
    structure: "40 questions across 4 audio recordings featuring native speakers in monologue and conversation formats",
  },
  {
    icon: "📖", skill: "Reading", href: "/ielts/reading",
    duration: "60 minutes",
    skillClass: "efe-skill-reading",
    structure: "40 questions. Academic: 3 long texts from journals & books. General: Shorter practical texts from notices, manuals, advertisements",
  },
  {
    icon: "✍️", skill: "Writing", href: "/ielts/writing",
    duration: "60 minutes",
    skillClass: "efe-skill-writing",
    structure: "Task 1 (20 min): Describe visual data (Academic) or write a letter (General). Task 2 (40 min): Formal discursive essay — both types",
  },
  {
    icon: "🗣️", skill: "Speaking", href: "/ielts/speaking",
    duration: "11–14 minutes",
    skillClass: "efe-skill-speaking",
    structure: "Face-to-face interview with a certified examiner: Part 1 (Introduction), Part 2 (Cue Card monologue), Part 3 (Deep discussion)",
  },
];

// Semantic band colours preserved per Plan Change #3
const BAND_SCORES = [
  { band: 9, label: "Expert User",      color: "bg-emerald-500", desc: "Full operational command — completely fluent, accurate, and appropriate in all contexts" },
  { band: 8, label: "Very Good User",   color: "bg-green-500",   desc: "Strong command of complex language with only occasional unsystematic inaccuracies" },
  { band: 7, label: "Good User",        color: "bg-lime-500",    desc: "Handles complex language well; understands detailed reasoning despite occasional mistakes" },
  { band: 6, label: "Competent User",   color: "bg-yellow-500",  desc: "Generally effective command; understands complex language in familiar situations" },
  { band: 5, label: "Modest User",      color: "bg-orange-400",  desc: "Partial command; copes with overall meaning but makes many errors in unfamiliar situations" },
  { band: 4, label: "Limited User",     color: "bg-orange-500",  desc: "Basic competence limited to familiar situations; frequent breakdowns in communication" },
  { band: 3, label: "Extremely Limited",color: "bg-red-400",     desc: "Only general meaning conveyed; frequent breakdowns in very familiar situations" },
];

const BENCHMARKS = [
  { flag: "🇨🇦", country: "Canada (Express Entry / SDS)", score: "6.5+", note: "Min 6.0 per module" },
  { flag: "🇬🇧", country: "UK Universities", score: "6.0–7.5", note: "UG 6.0, PG top-tier 7.5" },
  { flag: "🇦🇺", country: "Australia Migration", score: "6.0–7.0", note: "Varies by visa subclass" },
  { flag: "🏥", country: "Healthcare & Nursing", score: "7.0+", note: "7.0 min in all modules" },
];

const WRITING_CRITERIA = [
  { name: "Task Achievement / Response",     desc: "Did you answer every part of the prompt fully and meet the word count?" },
  { name: "Coherence and Cohesion",          desc: "Is your writing logical, well-paragraphed, and smoothly linked?" },
  { name: "Lexical Resource",                desc: "Do you use a wide, precise range of vocabulary without repetition?" },
  { name: "Grammatical Range and Accuracy",  desc: "Do you mix simple and complex sentences accurately and fluently?" },
];

const SPEAKING_CRITERIA = [
  { name: "Fluency and Coherence",           desc: "Speak smoothly without long pauses, self-correction, or hesitation" },
  { name: "Pronunciation",                   desc: "Natural intonation, rhythm, and word stress that is effortless to understand" },
  { name: "Lexical Resource",                desc: "Pick the right words, idioms, and collocations to express abstract thoughts" },
  { name: "Grammatical Range and Accuracy",  desc: "Correct sentences using a variety of tenses and structures" },
];

const STRATEGIES = [
  {
    icon: "🎧", skill: "Listening", skillClass: "efe-skill-listening",
    tips: [
      "Immerse in diverse accents — British, Australian, American via podcasts and news",
      "Master active note-taking and track synchronic cues during audio",
      "Predict answers before listening using question context",
    ],
  },
  {
    icon: "📖", skill: "Reading", skillClass: "efe-skill-reading",
    tips: [
      "Skim for core theme (30 sec), then scan for specific keywords and dates",
      "Target 15–18 min per passage — strict time discipline from day one",
      "Read the questions BEFORE the passage to know what to look for",
    ],
  },
  {
    icon: "✍️", skill: "Writing", skillClass: "efe-skill-writing",
    tips: [
      "Memorise essay structures for argument, discussion, and problem-solution types",
      "Build a contextual vocabulary bank — collocations and topic terminology",
      "Plan before writing: 5 minutes planning saves 15 minutes of confusion",
    ],
  },
  {
    icon: "🗣️", skill: "Speaking", skillClass: "efe-skill-speaking",
    tips: [
      "Speak English out loud daily — record yourself and listen critically",
      "Use signposting language: 'In my opinion…', 'What I mean is…'",
      "Fix hesitation, pacing errors, and mispronounced words from recordings",
    ],
  },
];

const STUDY_PLANS = [
  { duration: "30-Day", label: "Intensive", emoji: "⚡", for: "Advanced speakers learning test format, timing, and scoring tricks" },
  { duration: "60-Day", label: "Progress",  emoji: "📈", for: "Intermediate learners seeking systematic improvement in Writing and Reading" },
  { duration: "90-Day", label: "Mastery",   emoji: "🎯", for: "Beginners aiming for Band 7.5+ with a strong foundational programme" },
];

const FREE_TOOLS = [
  { icon: "⚡", title: "Word Upgrade (Vocabulary)",    desc: "Train Lexical Resource by upgrading basic words to Band 7+ alternatives", href: "/ielts/word-upgrade" },
  { icon: "🎯", title: "Phrase Upgrade (Cohesion & Fluency)", desc: "Replace overused clichés with natural, examiner-approved phrases", href: "/ielts/phrase-upgrade" },
  { icon: "🖋️", title: "Band 8+ Model Essays",         desc: "Analysed Task 1 & Task 2 frameworks with commentary", href: "/ielts/writing" },
  { icon: "🗣️", title: "Latest Speaking Cue Cards",    desc: "Updated weekly with trending exam prompts",           href: "/ielts/speaking" },
  { icon: "🎧", title: "Listening Practice Audio",      desc: "Native speaker recordings across 4 sections",        href: "/ielts/listening" },
];

const FAQS = [
  {
    q: "Which IELTS type do I need for Canada?",
    a: "For immigration/Permanent Residency via Express Entry — take General Training. For a university study permit via SDS — take Academic IELTS.",
  },
  {
    q: "How long is an IELTS Test Report Form (TRF) valid?",
    a: "Your official IELTS certificate is valid for exactly two (2) years from the date of your examination.",
  },
  {
    q: "What if I miss my required band score?",
    a: "You can retake the full exam, or use IELTS One Skill Retake (OSR) to resit only one module — if accepted by your institution and available in your region.",
  },
  {
    q: "Computer-Based vs Paper-Based — which is better?",
    a: "Same questions, same difficulty, same price. Key difference: Computer results in 1–5 days vs Paper in 13 days. Choose based on your comfort with typing.",
  },
  {
    q: "Is there a limit on how many times I can attempt IELTS?",
    a: "Absolutely none. You can take IELTS as many times as needed — there are no restrictions on test frequency.",
  },
];

const OFFICIAL_SOURCES = [
  { name: "IELTS Official International Hub", url: "https://www.ielts.org" },
  { name: "British Council IELTS",            url: "https://www.britishcouncil.org/exam/ielts" },
  { name: "IDP IELTS Global",                 url: "https://www.idp.com/ielts" },
  { name: "Cambridge English (Test Developers)", url: "https://www.cambridgeenglish.org/exams-and-tests/ielts" },
];

// ── Component ────────────────────────────────────────────────────────────────

export default function IELTSPage() {
  return (
    <div className="efe-page">
      <JsonLd data={faqLd(FAQS)} />
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "IELTS Preparation", path: "/ielts" },
      ])} />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <PageHeader
        eyebrow="🌐 Recognised by 12,000+ Organisations Worldwide"
        title={
          <>
            Master the IELTS:<br className="hidden sm:block" />
            Your Complete Preparation Guide
          </>
        }
        description="Navigating test types, band scores, and exam formats can be overwhelming. Get absolute clarity on the official exam process, marking criteria, and proven band-boosting strategies — all in one free place."
        meta={
          <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
              <Button href="/ielts/practice" variant="onHero">
                🚀 Start Free Preparation
              </Button>
              <Button href="/ielts/full-test" variant="ghostHero">
                📋 Take Full Mock Test
              </Button>
              <Button href="/ielts/progress" variant="ghostHero">
                📊 My Progress
              </Button>
              <Button href="/ielts/guide" variant="ghostHero">
                📥 Download Guide
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-white/80 text-xs">Explore:</span>
              {([["Academic IELTS","/ielts/reading"],["General Training","/ielts/reading"],["IELTS UKVI",""],["Computer vs Paper",""]] as [string,string][]).map(([l,h]) => (
                h ? (
                  <Link key={l} href={h}
                    className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs text-white hover:bg-white/20 transition-all">
                    {l}
                  </Link>
                ) : (
                  <span key={l}
                    className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs text-white">
                    {l}
                  </span>
                )
              ))}
            </div>
          </div>
        }
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
        {/* ── WHY IELTS ─────────────────────────────────────────────────── */}
        <section>
          <SectionHeader
            eyebrow="Global Recognition"
            title="Why IELTS Matters"
            description="The International English Language Testing System — the world's most trusted high-stakes English test, recognised by over 12,000 organisations globally."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {[
              { icon:"🎓", title:"Higher Education",    desc:"Secure admission into top-tier global universities" },
              { icon:"✈️", title:"Global Migration",    desc:"Meet PR and immigration language requirements" },
              { icon:"💼", title:"Career Advancement",  desc:"Work visas, professional registration, corporate hiring" },
              { icon:"🏆", title:"Financial Aid",       desc:"Unlock international scholarships and research grants" },
            ].map(c => (
              <Card key={c.title} className="p-5 text-center">
                <span className="w-12 h-12 rounded-[14px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl mx-auto mb-3">
                  {c.icon}
                </span>
                <p className="font-bold text-efe-fg text-sm mb-1">{c.title}</p>
                <p className="text-efe-muted text-xs leading-relaxed">{c.desc}</p>
              </Card>
            ))}
          </div>

          <Card className="p-6">
            <p className="text-sm font-bold text-efe-fg mb-3">🌍 Top Destination Countries</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[["🇬🇧","United Kingdom","UKVI & Standard IELTS"],["🇨🇦","Canada","Express Entry & SDS"],["🇦🇺","Australia","Subclass visas & Universities"],["🇳🇿","New Zealand","Skilled Migrant & Academic"]].map(([f,c,n]) => (
                <div key={c} className="flex items-center gap-3 bg-efe-bg border border-efe-line rounded-xl p-3">
                  <span className="text-2xl">{f}</span>
                  <div>
                    <p className="font-bold text-efe-fg text-sm">{c}</p>
                    <p className="text-efe-muted text-xs">{n}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* ── TEST YOURSELF ─────────────────────────────────────────────── */}
        <section>
          <SectionHeader
            eyebrow="Full Simulation"
            title="Take a Full IELTS Mock Test"
            description="Academic or General Training — real exam conditions, instant band estimates."
          />

          <div className="efe-banner p-7 relative">
            <div className="absolute top-4 right-4">
              <span className="bg-amber-400 text-amber-950 text-xs font-black px-2.5 py-1 rounded-full">NEW</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">📋</span>
                  <div>
                    <span className="text-xs font-bold bg-white/15 border border-white/25 px-3 py-1 rounded-full">🕒 ~2h 45min</span>
                    <h3 className="text-2xl font-bold text-white font-display mt-2">Full Mock Test</h3>
                    <p className="text-white/80 text-sm">Academic or General Training — your choice at the start</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-2 mb-5">
                  {[
                    "🎧 40 listening questions — 4 sections, one play only",
                    "📖 40 reading questions — 3 passages or GT sections",
                    "✍️ Writing Task 1 + Task 2 — timed, word counted",
                    "🗣️ Speaking Parts 1, 2 & 3 — self-assessed",
                    "⏱ 10-minute answer transfer period after listening",
                    "📊 Instant band scores for all 4 skills + overall",
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-white/90">
                      <span className="text-amber-300 font-bold shrink-0">✓</span>{f}
                    </div>
                  ))}
                </div>

                {/* Warning note (semantic amber preserved per Plan Change #3) */}
                <div className="bg-amber-400/20 border border-amber-400/40 rounded-xl px-4 py-3 mb-5">
                  <p className="text-amber-200 text-sm font-semibold">
                    ⚠️ Important: This test must be completed in one sitting.
                  </p>
                  <p className="text-amber-100 text-xs mt-1">
                    Refreshing or closing the page will reset all your progress. Find a quiet space and allow the full 2 hours 45 minutes before starting.
                  </p>
                </div>
              </div>

              <div className="sm:w-52 flex flex-col gap-3 shrink-0">
                <Button href="/ielts/full-test" variant="onHero" className="w-full">
                  Start Full Test →
                </Button>
                <div className="text-center space-y-1">
                  <p className="text-white/80 text-xs">5 random question pools</p>
                  <p className="text-white/80 text-xs">No signup required</p>
                  <p className="text-white/80 text-xs">Completely free</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── EXAM FORMAT (Skill accent on icons & chips only per Plan Change #4) ── */}
        <section>
          <SectionHeader
            eyebrow="4 Modules"
            title="IELTS Exam Format"
            description="Four modules. Four skills. One complete language assessment."
          />

          <div className="grid sm:grid-cols-2 gap-4">
            {EXAM_FORMAT.map(m => (
              <Card key={m.skill} href={m.href} className="p-6 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className={`w-11 h-11 rounded-[12px] border inline-flex items-center justify-center text-2xl ${m.skillClass}`}>
                        {m.icon}
                      </span>
                      <p className="font-bold text-efe-fg text-lg group-hover:text-efe-accent transition-colors">{m.skill}</p>
                    </div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${m.skillClass}`}>{m.duration}</span>
                  </div>
                  <p className="text-sm text-efe-muted leading-relaxed">{m.structure}</p>
                </div>
                <p className="text-xs font-semibold mt-4 text-efe-accent-ink group-hover:text-efe-accent group-hover:underline">
                  Practise {m.skill} →
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── BAND SCORES (Semantic band colours preserved per Plan Change #3) ── */}
        <section>
          <SectionHeader
            eyebrow="Scoring"
            title="The IELTS Band Score System (0–9)"
            description="Scores are reported on a 9-band scale. You receive individual module scores and an overall average."
          />

          <Card className="overflow-hidden mb-8">
            <div className="hidden sm:grid grid-cols-3 bg-efe-bg border-b border-efe-line px-5 py-3 text-xs font-bold text-efe-muted uppercase tracking-wider">
              <span>Band</span><span>Level</span><span>Description</span>
            </div>
            {BAND_SCORES.map((b, i) => (
              <div key={b.band} className={`grid sm:grid-cols-3 gap-2 px-5 py-4 items-center ${i < BAND_SCORES.length - 1 ? "border-b border-efe-line/60" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${b.color} text-white rounded-xl flex items-center justify-center font-black text-base flex-shrink-0`}>
                    {b.band}
                  </div>
                </div>
                <p className="font-bold text-efe-fg text-sm">{b.label}</p>
                <p className="text-efe-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </Card>

          <h3 className="text-lg font-bold text-efe-fg mb-4">🎯 Global Score Benchmarks</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BENCHMARKS.map(b => (
              <Card key={b.country} className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{b.flag}</span>
                  <p className="font-bold text-efe-fg text-sm leading-tight">{b.country}</p>
                </div>
                <p className="text-2xl font-black text-efe-accent-ink">{b.score}</p>
                <p className="text-xs text-efe-muted mt-1">{b.note}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── MARKING CRITERIA ─────────────────────────────────────────── */}
        <section>
          <SectionHeader
            eyebrow="Assessment"
            title="How You Are Marked"
            description="Understanding the official criteria is the fastest route to a higher band score."
          />

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Listening + Reading */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎧📖</span>
                <h3 className="font-bold text-efe-fg">Listening & Reading</h3>
              </div>
              <p className="text-sm text-efe-muted leading-relaxed mb-3">
                Marked objectively out of <strong className="text-efe-fg">40 raw points</strong>, converted to the 0–9 band scale using official conversion tables.
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <p className="text-xs text-amber-800">
                  <strong>Note:</strong> General Training Reading requires more correct answers than Academic to achieve the same band score.
                </p>
              </div>
            </Card>

            {/* Writing */}
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-lg border inline-flex items-center justify-center text-lg efe-skill-writing">✍️</span>
                <h3 className="font-bold text-efe-fg">Writing Criteria <span className="text-sm font-normal text-efe-muted">(25% each)</span></h3>
              </div>
              <div className="space-y-3">
                {WRITING_CRITERIA.map((c, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-6 h-6 bg-efe-accent-soft text-efe-accent-ink rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">{i+1}</span>
                    <div>
                      <p className="text-sm font-bold text-efe-fg">{c.name}</p>
                      <p className="text-xs text-efe-muted">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Speaking */}
            <Card className="p-6 sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-9 h-9 rounded-lg border inline-flex items-center justify-center text-lg efe-skill-speaking">🗣️</span>
                <h3 className="font-bold text-efe-fg">Speaking Criteria <span className="text-sm font-normal text-efe-muted">(25% each)</span></h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {SPEAKING_CRITERIA.map((c, i) => (
                  <div key={i} className="flex gap-3 bg-efe-bg border border-efe-line rounded-xl p-3">
                    <span className="w-6 h-6 bg-efe-accent-soft text-efe-accent-ink rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">{i+1}</span>
                    <div>
                      <p className="text-sm font-bold text-efe-fg">{c.name}</p>
                      <p className="text-xs text-efe-muted">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* ── EXAM TIMELINE ────────────────────────────────────────────── */}
        <section>
          <SectionHeader
            eyebrow="Process"
            title="Step-by-Step Exam Timeline"
            description="From registration to results — your proven pathway."
          />

          <Card className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { n:1, label:"Choose Test Type",   icon:"🎯" },
                { n:2, label:"Book Online",        icon:"💻" },
                { n:3, label:"Upload Passport/ID", icon:"📄" },
                { n:4, label:"Pay Test Fee",       icon:"💳" },
              ].map(s => (
                <div key={s.n} className="flex flex-col items-center text-center bg-efe-bg border border-efe-line rounded-xl p-4">
                  <span className="text-2xl mb-2">{s.icon}</span>
                  <span className="w-6 h-6 bg-efe-accent text-white rounded-full text-xs font-black flex items-center justify-center mb-2">{s.n}</span>
                  <p className="text-xs font-semibold text-efe-fg">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { n:5, label:"Booking Confirmed", icon:"✅" },
                { n:6, label:"Exam Day",          icon:"🏫" },
                { n:7, label:"Get Results",       icon:"📊" },
              ].map(s => (
                <div key={s.n} className="flex flex-col items-center text-center bg-efe-accent-soft border border-efe-line rounded-xl p-4">
                  <span className="text-2xl mb-2">{s.icon}</span>
                  <span className="w-6 h-6 bg-efe-accent text-white rounded-full text-xs font-black flex items-center justify-center mb-2">{s.n}</span>
                  <p className="text-xs font-semibold text-efe-accent-ink">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-efe-accent-soft border border-efe-line rounded-xl px-4 py-3">
                <span className="text-lg">💻</span>
                <div>
                  <p className="text-xs font-bold text-efe-accent-ink">Computer-Based</p>
                  <p className="text-xs text-efe-muted">Results in <strong>1–5 days</strong></p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-efe-bg border border-efe-line rounded-xl px-4 py-3">
                <span className="text-lg">📄</span>
                <div>
                  <p className="text-xs font-bold text-efe-fg">Paper-Based</p>
                  <p className="text-xs text-efe-muted">Results in <strong>13 days</strong></p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* ── STRATEGIES ───────────────────────────────────────────────── */}
        <section>
          <SectionHeader
            eyebrow="Tips & Roadmap"
            title="Expert Preparation Strategies"
            description="Proven tips for every module — from Band 5 to Band 8+."
          />

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {STRATEGIES.map(s => (
              <Card key={s.skill} className="p-5">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className={`w-10 h-10 rounded-xl border inline-flex items-center justify-center text-xl ${s.skillClass}`}>
                    {s.icon}
                  </span>
                  <h3 className="font-bold text-efe-fg">{s.skill}</h3>
                </div>
                <ul className="space-y-2.5">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-efe-muted">
                      <span className="text-efe-accent font-bold mt-0.5 flex-shrink-0">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <h3 className="text-lg font-bold text-efe-fg mb-4">📅 Choose Your Study Roadmap</h3>
          <div className="grid sm:grid-cols-3 gap-4">
            {STUDY_PLANS.map(p => (
              <Card key={p.duration} className="p-5 text-center">
                <span className="text-3xl">{p.emoji}</span>
                <div className="inline-block bg-efe-accent-soft text-efe-accent-ink border border-efe-line font-bold px-4 py-1.5 rounded-full text-sm mt-3 mb-2">
                  {p.duration} {p.label}
                </div>
                <p className="text-xs text-efe-muted leading-relaxed">{p.for}</p>
                <Link href="/ielts"
                  className="mt-3 inline-block text-xs font-bold text-efe-accent-ink hover:text-efe-accent hover:underline">
                  Start this plan →
                </Link>
              </Card>
            ))}
          </div>
        </section>

        {/* ── FREE TOOLS ───────────────────────────────────────────────── */}
        <section>
          <SectionHeader
            eyebrow="Resources"
            title="Free Study Companions"
            description="Everything you need to score higher — completely free, no signup required."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FREE_TOOLS.map(t => (
              <Card key={t.title} href={t.href} className="p-5">
                <span className="w-11 h-11 rounded-[12px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl mb-3 group-hover:bg-efe-accent group-hover:text-white transition-colors">
                  {t.icon}
                </span>
                <p className="font-bold text-efe-fg text-sm mb-1 group-hover:text-efe-accent transition-colors">{t.title}</p>
                <p className="text-xs text-efe-muted">{t.desc}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── OFFICIAL SOURCES ─────────────────────────────────────────── */}
        <Card className="p-6">
          <h2 className="text-xl font-bold text-efe-fg font-display mb-2">Official IELTS Sources</h2>
          <p className="text-efe-muted text-sm mb-5">Always verify through authorised portals for bookings, guidelines, and materials.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {OFFICIAL_SOURCES.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between bg-efe-bg border border-efe-line rounded-xl px-4 py-3 hover:border-efe-accent hover:bg-efe-accent-soft/50 transition-all group">
                <p className="text-sm font-semibold text-efe-fg group-hover:text-efe-accent-ink">{s.name}</p>
                <span className="text-efe-muted group-hover:text-efe-accent-ink text-sm">↗</span>
              </a>
            ))}
          </div>
        </Card>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
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

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="efe-banner p-8 sm:p-12 text-center">
          <p className="text-4xl mb-4">🎯</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">Ready to Secure Your Target Band Score?</h2>
          <p className="text-white/85 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Don&apos;t guess your way through the test. Practice with real exam-style
            questions and track your progress — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button href="/ielts/practice" variant="onHero">
              📚 Start Skill Practice
            </Button>
            <Button href="/ielts/writing" variant="ghostHero">
              ✍️ Practice Writing Now
            </Button>
            <Button href="/ielts/guide" variant="ghostHero">
              📥 Download Study Guide
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
