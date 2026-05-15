import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IELTS Preparation 2025 — Free Academic & General Training Guide | EduForEveryone",
  description: "Master IELTS with our free complete preparation guide. Understand Academic vs General Training, Band Score system (0–9), exam format, marking criteria, and expert strategies for Listening, Reading, Writing and Speaking.",
  keywords: [
    "IELTS preparation", "IELTS band score", "Academic IELTS", "General Training IELTS",
    "IELTS test format", "IELTS 2025", "IELTS writing task 2", "IELTS speaking tips",
    "IELTS reading strategies", "IELTS listening practice", "IELTS UKVI", "free IELTS preparation"
  ],
  alternates: { canonical: "https://eduforeveryone.com/ielts" },
  openGraph: {
    title: "Free IELTS Preparation Guide 2025 | EduForEveryone",
    description: "Everything you need: test types, band scores, exam format, marking criteria, and expert strategies — completely free.",
    url: "https://eduforeveryone.com/ielts",
    siteName: "EduForEveryone",
    type: "website",
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────

const TEST_TYPES = [
  {
    emoji: "📘", title: "Academic IELTS", color: "blue",
    border: "border-blue-200", bg: "bg-blue-50", badge: "bg-blue-100 text-blue-700",
    audience: "University applicants & licensed professionals (Medicine, Nursing, Engineering)",
    focus: "Academic language proficiency for higher education environments",
    href: "/ielts/reading",
  },
  {
    emoji: "💼", title: "General Training", color: "teal",
    border: "border-teal-200", bg: "bg-teal-50", badge: "bg-teal-100 text-teal-700",
    audience: "Migrants, PR applicants (Canada / Australia / UK), work permit seekers",
    focus: "Workplace and social language proficiency for real-world situations",
    href: "/ielts/reading",
  },
  {
    emoji: "🇬🇧", title: "IELTS UKVI", color: "red",
    border: "border-red-200", bg: "bg-red-50", badge: "bg-red-100 text-red-700",
    audience: "UK visa applicants (work, study, settlement — Home Office approved)",
    focus: "Identical content to standard IELTS with additional security protocols",
    href: "/ielts",
  },
  {
    emoji: "🗣️", title: "IELTS Life Skills", color: "purple",
    border: "border-purple-200", bg: "bg-purple-50", badge: "bg-purple-100 text-purple-700",
    audience: "UK family, spouse, or citizenship visa applicants",
    focus: "Speaking & Listening only — simple pass/fail result (A1/A2/B1)",
    href: "/ielts/speaking",
  },
];

const EXAM_FORMAT = [
  {
    icon: "🎧", skill: "Listening", href: "/ielts/listening",
    duration: "30 min + 10 min transfer",
    color: "amber", border: "border-amber-200", bg: "bg-amber-50", badge: "bg-amber-100 text-amber-700",
    structure: "40 questions across 4 audio recordings featuring native speakers in monologue and conversation formats",
  },
  {
    icon: "📖", skill: "Reading", href: "/ielts/reading",
    duration: "60 minutes",
    color: "blue", border: "border-blue-200", bg: "bg-blue-50", badge: "bg-blue-100 text-blue-700",
    structure: "40 questions. Academic: 3 long texts from journals & books. General: Shorter practical texts from notices, manuals, advertisements",
  },
  {
    icon: "✍️", skill: "Writing", href: "/ielts/writing",
    duration: "60 minutes",
    color: "green", border: "border-green-200", bg: "bg-green-50", badge: "bg-green-100 text-green-700",
    structure: "Task 1 (20 min): Describe visual data (Academic) or write a letter (General). Task 2 (40 min): Formal discursive essay — both types",
  },
  {
    icon: "🗣️", skill: "Speaking", href: "/ielts/speaking",
    duration: "11–14 minutes",
    color: "purple", border: "border-purple-200", bg: "bg-purple-50", badge: "bg-purple-100 text-purple-700",
    structure: "Face-to-face interview with a certified examiner: Part 1 (Introduction), Part 2 (Cue Card monologue), Part 3 (Deep discussion)",
  },
];

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
    icon: "🎧", skill: "Listening", color: "amber", bg: "bg-amber-50", border: "border-amber-100",
    tips: [
      "Immerse in diverse accents — British, Australian, American via podcasts and news",
      "Master active note-taking and track synchronic cues during audio",
      "Predict answers before listening using question context",
    ],
  },
  {
    icon: "📖", skill: "Reading", color: "blue", bg: "bg-blue-50", border: "border-blue-100",
    tips: [
      "Skim for core theme (30 sec), then scan for specific keywords and dates",
      "Target 15–18 min per passage — strict time discipline from day one",
      "Read the questions BEFORE the passage to know what to look for",
    ],
  },
  {
    icon: "✍️", skill: "Writing", color: "green", bg: "bg-green-50", border: "border-green-100",
    tips: [
      "Memorise essay structures for argument, discussion, and problem-solution types",
      "Build a contextual vocabulary bank — collocations and topic terminology",
      "Plan before writing: 5 minutes planning saves 15 minutes of confusion",
    ],
  },
  {
    icon: "🗣️", skill: "Speaking", color: "purple", bg: "bg-purple-50", border: "border-purple-100",
    tips: [
      "Speak English out loud daily — record yourself and listen critically",
      "Use signposting language: 'In my opinion…', 'What I mean is…'",
      "Fix hesitation, pacing errors, and mispronounced words from recordings",
    ],
  },
];

const STUDY_PLANS = [
  { duration: "30-Day", label: "Intensive", emoji: "⚡", color: "bg-amber-500", for: "Advanced speakers learning test format, timing, and scoring tricks" },
  { duration: "60-Day", label: "Progress",  emoji: "📈", color: "bg-teal-600",  for: "Intermediate learners seeking systematic improvement in Writing and Reading" },
  { duration: "90-Day", label: "Mastery",   emoji: "🎯", color: "bg-indigo-600",for: "Beginners aiming for Band 7.5+ with a strong foundational programme" },
];

const FREE_TOOLS = [
  { icon: "📝", title: "Full-Length Practice Tests",    desc: "Simulated exam conditions across all 4 skills",       href: "/ielts/reading" },
  { icon: "📚", title: "Academic Vocabulary Banks",     desc: "Categorised by theme — 2,500+ essential words",      href: "/ielts" },
  { icon: "🖋️", title: "Band 8+ Model Essays",         desc: "Analysed Task 1 & Task 2 frameworks with commentary", href: "/ielts/writing" },
  { icon: "🗣️", title: "Latest Speaking Cue Cards",    desc: "Updated weekly with trending exam prompts",           href: "/ielts/speaking" },
  { icon: "🧮", title: "Band Score Calculator",         desc: "Convert raw marks to official band scores instantly",  href: "/ielts" },
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
    <div className="bg-gray-50 min-h-screen">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-widest uppercase">
            🌐 Recognised by 12,000+ Organisations Worldwide
          </span>
          <h1 className="text-3xl sm:text-5xl font-black leading-tight mb-5">
            Master the IELTS:<br className="hidden sm:block" />
            Your Complete Preparation Guide
          </h1>
          <p className="text-teal-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Navigating test types, band scores, and exam formats can be overwhelming.
            Get absolute clarity on the official exam process, marking criteria, and
            proven band-boosting strategies — all in one free place.
          </p>

          {/* Primary CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link href="/ielts/reading"
              className="bg-white text-teal-700 px-8 py-3.5 rounded-xl font-bold text-base hover:bg-teal-50 transition-all"
              style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.2)" }}>
              🚀 Start Free Preparation
            </Link>
            <Link href="/ielts"
              className="bg-teal-800 border border-white/30 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-teal-900 transition-all">
              📥 Download IELTS Guide
            </Link>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <span className="text-teal-200 self-center text-xs">Explore:</span>
            {[["Academic IELTS","/ielts/reading"],["General Training","/ielts/reading"],["IELTS UKVI","/ielts"],["Computer vs Paper","/ielts"]].map(([l,h]) => (
              <Link key={l} href={h}
                className="bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs text-white hover:bg-white/20 transition-all">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">

        {/* ── WHY IELTS ─────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Why IELTS Matters</h2>
          <p className="text-gray-500 mb-8 max-w-2xl">The International English Language Testing System — the world's most trusted high-stakes English test, recognised by over 12,000 organisations globally.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { icon:"🎓", title:"Higher Education",    desc:"Secure admission into top-tier global universities" },
              { icon:"✈️", title:"Global Migration",    desc:"Meet PR and immigration language requirements" },
              { icon:"💼", title:"Career Advancement",  desc:"Work visas, professional registration, corporate hiring" },
              { icon:"🏆", title:"Financial Aid",       desc:"Unlock international scholarships and research grants" },
            ].map(c => (
              <div key={c.title} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
                <p className="text-3xl mb-2">{c.icon}</p>
                <p className="font-bold text-gray-900 text-sm mb-1">{c.title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <p className="text-sm font-bold text-gray-700 mb-3">🌍 Top Destination Countries</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[["🇬🇧","United Kingdom","UKVI & Standard IELTS"],["🇨🇦","Canada","Express Entry & SDS"],["🇦🇺","Australia","Subclass visas & Universities"],["🇳🇿","New Zealand","Skilled Migrant & Academic"]].map(([f,c,n]) => (
                <div key={c} className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
                  <span className="text-2xl">{f}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{c}</p>
                    <p className="text-gray-500 text-xs">{n}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEST TYPES ────────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">IELTS Test Types</h2>
          <p className="text-gray-500 mb-8">Choose the stream that matches your goal.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-5">
            {TEST_TYPES.map(t => (
              <Link key={t.title} href={t.href}
                className={`group bg-white ${t.border} border rounded-2xl p-5 hover:shadow-md transition-all`}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{t.emoji}</span>
                  <div>
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${t.badge}`}>{t.title}</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Audience</p>
                <p className="text-sm text-gray-700 mb-2">{t.audience}</p>
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Focus</p>
                <p className="text-sm text-gray-700">{t.focus}</p>
              </Link>
            ))}
          </div>

          <div className="bg-teal-50 border border-teal-200 rounded-2xl px-5 py-4">
            <p className="text-sm text-teal-800">
              <span className="font-black">💡 Quick Rule:</span> Study or practice a licensed profession → <strong>Academic</strong>.
              Work, migrate, or train → <strong>General Training</strong>.
            </p>
          </div>
        </section>

        {/* ── EXAM FORMAT ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">IELTS Exam Format</h2>
          <p className="text-gray-500 mb-8">Four modules. Four skills. One complete language assessment.</p>

          <div className="grid sm:grid-cols-2 gap-4">
            {EXAM_FORMAT.map(m => (
              <Link key={m.skill} href={m.href}
                className={`group bg-white ${m.border} border rounded-2xl p-5 hover:shadow-md transition-all`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{m.icon}</span>
                    <p className="font-black text-gray-900 text-lg">{m.skill}</p>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${m.badge}`}>{m.duration}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{m.structure}</p>
                <p className={`text-xs font-semibold mt-3 text-${m.color}-600 group-hover:underline`}>
                  Practise {m.skill} →
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── BAND SCORES ──────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">The IELTS Band Score System (0–9)</h2>
          <p className="text-gray-500 mb-8">Scores are reported on a 9-band scale. You receive individual module scores and an overall average.</p>

          <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden mb-6">
            <div className="hidden sm:grid grid-cols-3 bg-gray-50 border-b border-gray-100 px-5 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">
              <span>Band</span><span>Level</span><span>Description</span>
            </div>
            {BAND_SCORES.map((b, i) => (
              <div key={b.band} className={`grid sm:grid-cols-3 gap-2 px-5 py-4 items-center ${i < BAND_SCORES.length - 1 ? "border-b border-gray-50" : ""}`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${b.color} text-white rounded-xl flex items-center justify-center font-black text-base flex-shrink-0`}>
                    {b.band}
                  </div>
                </div>
                <p className="font-bold text-gray-900 text-sm">{b.label}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Benchmarks */}
          <h3 className="text-lg font-black text-gray-900 mb-4">🎯 Global Score Benchmarks</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {BENCHMARKS.map(b => (
              <div key={b.country} className="bg-white border border-gray-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{b.flag}</span>
                  <p className="font-bold text-gray-900 text-sm leading-tight">{b.country}</p>
                </div>
                <p className="text-2xl font-black text-teal-600">{b.score}</p>
                <p className="text-xs text-gray-500 mt-1">{b.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── MARKING CRITERIA ─────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">How You Are Marked</h2>
          <p className="text-gray-500 mb-8">Understanding the official criteria is the fastest route to a higher band score.</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Listening + Reading */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎧📖</span>
                <h3 className="font-black text-gray-900">Listening & Reading</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-3">
                Marked objectively out of <strong>40 raw points</strong>, converted to the 0–9 band scale using official conversion tables.
              </p>
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-3">
                <p className="text-xs text-amber-800">
                  <strong>Note:</strong> General Training Reading requires more correct answers than Academic to achieve the same band score.
                </p>
              </div>
            </div>

            {/* Writing */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">✍️</span>
                <h3 className="font-black text-gray-900">Writing Criteria <span className="text-sm font-normal text-gray-400">(25% each)</span></h3>
              </div>
              <div className="space-y-3">
                {WRITING_CRITERIA.map((c, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">{i+1}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{c.name}</p>
                      <p className="text-xs text-gray-500">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Speaking */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🗣️</span>
                <h3 className="font-black text-gray-900">Speaking Criteria <span className="text-sm font-normal text-gray-400">(25% each)</span></h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {SPEAKING_CRITERIA.map((c, i) => (
                  <div key={i} className="flex gap-3 bg-purple-50 border border-purple-100 rounded-xl p-3">
                    <span className="w-6 h-6 bg-purple-100 text-purple-700 rounded-full flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">{i+1}</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{c.name}</p>
                      <p className="text-xs text-gray-500">{c.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── EXAM TIMELINE ────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Step-by-Step Exam Timeline</h2>
          <p className="text-gray-500 mb-8">From registration to results — your proven pathway.</p>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {[
                { n:1, label:"Choose Test Type",   icon:"🎯" },
                { n:2, label:"Book Online",        icon:"💻" },
                { n:3, label:"Upload Passport/ID", icon:"📄" },
                { n:4, label:"Pay Test Fee",       icon:"💳" },
              ].map(s => (
                <div key={s.n} className="flex flex-col items-center text-center bg-gray-50 border border-gray-100 rounded-xl p-4">
                  <span className="text-2xl mb-2">{s.icon}</span>
                  <span className="w-6 h-6 bg-teal-600 text-white rounded-full text-xs font-black flex items-center justify-center mb-2">{s.n}</span>
                  <p className="text-xs font-semibold text-gray-700">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { n:5, label:"Booking Confirmed", icon:"✅" },
                { n:6, label:"Exam Day",          icon:"🏫" },
                { n:7, label:"Get Results",       icon:"📊" },
              ].map(s => (
                <div key={s.n} className="flex flex-col items-center text-center bg-teal-50 border border-teal-100 rounded-xl p-4">
                  <span className="text-2xl mb-2">{s.icon}</span>
                  <span className="w-6 h-6 bg-teal-600 text-white rounded-full text-xs font-black flex items-center justify-center mb-2">{s.n}</span>
                  <p className="text-xs font-semibold text-teal-800">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                <span className="text-lg">💻</span>
                <div>
                  <p className="text-xs font-bold text-green-800">Computer-Based</p>
                  <p className="text-xs text-green-600">Results in <strong>1–5 days</strong></p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3">
                <span className="text-lg">📄</span>
                <div>
                  <p className="text-xs font-bold text-gray-800">Paper-Based</p>
                  <p className="text-xs text-gray-600">Results in <strong>13 days</strong></p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STRATEGIES ───────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Expert Preparation Strategies</h2>
          <p className="text-gray-500 mb-8">Proven tips for every module — from Band 5 to Band 8+.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {STRATEGIES.map(s => (
              <div key={s.skill} className={`${s.bg} ${s.border} border rounded-2xl p-5`}>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-black text-gray-900">{s.skill}</h3>
                </div>
                <ul className="space-y-2.5">
                  {s.tips.map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-teal-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        {/* ── FREE TOOLS ───────────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mb-2">Free Study Companions</h2>
          <p className="text-gray-500 mb-8">Everything you need to score higher — completely free, no signup required.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FREE_TOOLS.map(t => (
              <Link key={t.title} href={t.href}
                className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-teal-300 hover:shadow-md transition-all">
                <span className="text-3xl mb-3 block">{t.icon}</span>
                <p className="font-bold text-gray-900 text-sm mb-1 group-hover:text-teal-600 transition-colors">{t.title}</p>
                <p className="text-xs text-gray-500">{t.desc}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── OFFICIAL SOURCES ─────────────────────────────────────────── */}
        <section className="bg-white border border-gray-200 rounded-2xl p-6">
          <h2 className="text-xl font-black text-gray-900 mb-2">Official IELTS Sources</h2>
          <p className="text-gray-500 text-sm mb-5">Always verify through authorised portals for bookings, guidelines, and materials.</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {OFFICIAL_SOURCES.map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-teal-300 hover:bg-teal-50 transition-all group">
                <p className="text-sm font-semibold text-gray-800 group-hover:text-teal-700">{s.name}</p>
                <span className="text-gray-400 group-hover:text-teal-600 text-sm">↗</span>
              </a>
            ))}
          </div>
        </section>

        {/* ── FAQ ──────────────────────────────────────────────────────── */}
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

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section className="bg-gradient-to-br from-teal-700 to-emerald-600 rounded-2xl p-8 sm:p-12 text-center text-white">
          <p className="text-4xl mb-4">🎯</p>
          <h2 className="text-2xl sm:text-3xl font-black mb-3">Ready to Secure Your Target Band Score?</h2>
          <p className="text-teal-100 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed">
            Don't guess your way through the test. Use our expert tools today to build
            confidence and guarantee results — completely free.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/ielts/reading"
              className="bg-white text-teal-700 px-7 py-3.5 rounded-xl font-bold hover:bg-teal-50 transition-all"
              style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.2)" }}>
              📝 Take Free Diagnostic Test
            </Link>
            <Link href="/ielts/writing"
              className="bg-teal-800 border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-teal-900 transition-all">
              ✍️ Practice Writing Now
            </Link>
            <Link href="/ielts"
              className="bg-teal-800 border border-white/30 text-white px-7 py-3.5 rounded-xl font-bold hover:bg-teal-900 transition-all">
              📅 Get 60-Day Study Plan
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
