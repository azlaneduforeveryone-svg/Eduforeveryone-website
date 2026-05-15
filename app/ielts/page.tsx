import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free IELTS Preparation — Reading, Listening, Writing & Speaking | EduForEveryone",
  description: "Free IELTS preparation for all 4 skills — Reading, Listening, Writing and Speaking. Practice tests, timed exercises and AI writing feedback. No signup required.",
  keywords: ["free IELTS preparation", "IELTS practice test free", "IELTS writing task 2", "IELTS reading practice", "IELTS band score", "IELTS online free", "IELTS academic", "IELTS general training"],
  alternates: { canonical: "https://eduforeveryone.com/ielts" },
  openGraph: {
    title: "Free IELTS Preparation | EduForEveryone",
    description: "Practice all 4 IELTS skills for free. No signup needed.",
    url: "https://eduforeveryone.com/ielts",
    siteName: "EduForEveryone",
    type: "website",
  },
};

const SKILLS = [
  {
    href: "/ielts/reading",
    emoji: "📖",
    title: "Reading",
    desc: "Academic and General Training passages with MCQ, True/False/Not Given, matching headings and gap fill questions. Instant scoring after submission.",
    badge: "Academic + GT",
    border: "border-blue-200 hover:border-blue-400",
    badgeCls: "bg-blue-50 text-blue-700",
    btn: "bg-blue-600 hover:bg-blue-700",
    tagCls: "bg-blue-50 text-blue-600",
    tips: ["Multiple Choice", "True / False / NG", "Gap Fill", "Matching"],
  },
  {
    href: "/ielts/listening",
    emoji: "🎧",
    title: "Listening",
    desc: "Four-section structured tests covering everyday conversations, monologues and academic lectures with all official question types.",
    badge: "4 Sections",
    border: "border-emerald-200 hover:border-emerald-400",
    badgeCls: "bg-emerald-50 text-emerald-700",
    btn: "bg-emerald-600 hover:bg-emerald-700",
    tagCls: "bg-emerald-50 text-emerald-600",
    tips: ["Form Fill", "Multiple Choice", "Note Completion", "Matching"],
  },
  {
    href: "/ielts/writing",
    emoji: "✍️",
    title: "Writing",
    desc: "Timed Task 1 academic graph descriptions and Task 2 essays with live word counter, timer and AI-powered band score feedback.",
    badge: "AI Feedback",
    border: "border-violet-200 hover:border-violet-400",
    badgeCls: "bg-violet-50 text-violet-700",
    btn: "bg-violet-600 hover:bg-violet-700",
    tagCls: "bg-violet-50 text-violet-600",
    tips: ["Task 1 Academic", "Task 2 Essay", "Word Counter", "Band Score"],
  },
  {
    href: "/ielts/speaking",
    emoji: "🗣️",
    title: "Speaking",
    desc: "Part 1 personal questions, Part 2 cue card with countdown timer, and Part 3 academic discussion questions with model answers.",
    badge: "3 Parts",
    border: "border-amber-200 hover:border-amber-400",
    badgeCls: "bg-amber-50 text-amber-700",
    btn: "bg-amber-600 hover:bg-amber-700",
    tagCls: "bg-amber-50 text-amber-600",
    tips: ["Part 1: Intro", "Part 2: Cue Card", "Part 3: Discussion"],
  },
];

const BANDS = [
  { band: "9", label: "Expert",    cls: "bg-green-50 border-green-200 text-green-700" },
  { band: "8", label: "Very Good", cls: "bg-teal-50 border-teal-200 text-teal-700" },
  { band: "7", label: "Good",      cls: "bg-blue-50 border-blue-200 text-blue-700" },
  { band: "6", label: "Competent", cls: "bg-indigo-50 border-indigo-200 text-indigo-700" },
  { band: "5", label: "Modest",    cls: "bg-gray-50 border-gray-200 text-gray-600" },
];

export default function IELTSPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-indigo-700 to-indigo-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            🎓 Free IELTS Preparation
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Prepare for IELTS.<br />Completely Free.
          </h1>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Practice all 4 skills — Reading, Listening, Writing and Speaking. Real exam-style tests, instant scoring and AI writing feedback. No sign-up required.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/ielts/writing" className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">
              Start Free Practice
            </Link>
            <Link href="/ielts/reading" className="bg-indigo-600 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors">
              Reading Test 📖
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100 py-7 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[["4","Skills Covered"],["100%","Free Forever"],["Band 9","Target Score"],["0","Sign-ups Needed"]].map(([v,l]) => (
            <div key={l}>
              <p className="text-2xl font-bold text-indigo-600">{v}</p>
              <p className="text-gray-500 text-sm mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Skills */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">All 4 IELTS Skills</p>
            <h2 className="text-3xl font-bold text-gray-900">Choose Your Practice Area</h2>
            <p className="text-gray-500 text-sm mt-2">Every section mirrors the real IELTS exam format</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {SKILLS.map(s => (
              <div key={s.href} className={`bg-white border ${s.border} rounded-2xl p-6 transition-all`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{s.emoji}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.badgeCls}`}>{s.badge}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {s.tips.map(tip => (
                    <span key={tip} className={`text-xs px-2.5 py-1 rounded-lg font-medium ${s.tagCls}`}>{tip}</span>
                  ))}
                </div>
                <Link href={s.href} className={`${s.btn} text-white text-center block py-2.5 rounded-xl font-bold text-sm transition-colors`}>
                  Start {s.title} Practice →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Band Score Guide */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-2">Band Scores</p>
            <h2 className="text-2xl font-bold text-gray-900">Understand Your Target Score</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
            {BANDS.map(b => (
              <div key={b.band} className={`border rounded-xl p-4 text-center ${b.cls}`}>
                <p className="text-3xl font-black">{b.band}</p>
                <p className="text-xs font-semibold mt-1">{b.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm">Most universities require Band 6.5 or above for admission</p>
        </div>
      </section>

      {/* Why here */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900">Why Practice on EduForEveryone?</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { emoji:"💸", title:"100% Free", desc:"No subscription, no hidden fees, no credit card. Every test and feature is completely free forever." },
              { emoji:"⚡", title:"No Signup Needed", desc:"Jump straight into practice without creating an account. Optional login to save your scores and history." },
              { emoji:"🤖", title:"AI Writing Feedback", desc:"Get detailed band score estimates and improvement tips powered by AI for Writing Task 1 and Task 2." },
            ].map(f => (
              <div key={f.title} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
                <span className="text-4xl mb-3 block">{f.emoji}</span>
                <h3 className="font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 px-4 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Start Your IELTS Journey</h2>
        <p className="text-indigo-200 mb-8 max-w-xl mx-auto">Free practice for all 4 skills. No account needed. Start right now.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/ielts/reading"   className="bg-white text-indigo-700 px-6 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors">📖 Reading</Link>
          <Link href="/ielts/listening" className="bg-indigo-600 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors">🎧 Listening</Link>
          <Link href="/ielts/writing"   className="bg-indigo-600 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors">✍️ Writing</Link>
          <Link href="/ielts/speaking"  className="bg-indigo-600 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-indigo-500 transition-colors">🗣️ Speaking</Link>
        </div>
      </section>
    </>
  );
}
