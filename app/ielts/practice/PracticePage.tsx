"use client";
import Link from "next/link";

const SKILLS = [
  {
    icon: "🎧", title: "Listening", href: "/ielts/listening",
    border: "border-amber-200", bg: "bg-amber-50", badge: "bg-amber-100 text-amber-700",
    btn: "bg-amber-500 hover:bg-amber-600", shadow: "0 4px 0 #B45309",
    time: "30 min", questions: "40 questions", sections: "4 sections",
    desc: "Hear recordings of monologues and conversations by native English speakers, then answer questions.",
    types: ["Form completion", "Multiple choice", "Note completion", "Map labelling"],
    tip: "You hear each recording once only — so focus and take notes!",
  },
  {
    icon: "📖", title: "Reading", href: "/ielts/reading",
    border: "border-indigo-200", bg: "bg-indigo-50", badge: "bg-indigo-100 text-indigo-700",
    btn: "bg-indigo-600 hover:bg-indigo-700", shadow: "0 4px 0 #3730A3",
    time: "60 min", questions: "40 questions", sections: "3 passages",
    desc: "Read three long texts from academic journals, books, and newspapers, then answer a variety of questions.",
    types: ["True / False / Not Given", "Multiple choice", "Sentence completion", "Matching headings"],
    tip: "Skim first, then scan for answers — never read word by word.",
  },
  {
    icon: "✍️", title: "Writing", href: "/ielts/writing",
    border: "border-green-200", bg: "bg-green-50", badge: "bg-green-100 text-green-700",
    btn: "bg-green-600 hover:bg-green-700", shadow: "0 4px 0 #166534",
    time: "60 min", questions: "2 tasks", sections: "Task 1 + Task 2",
    desc: "Describe a graph or chart (Task 1), then write a formal essay arguing a position (Task 2).",
    types: ["Describe visual data", "Discuss both views", "Problem & solution", "Agree / Disagree"],
    tip: "Task 2 carries double the marks — spend 40 minutes on it.",
  },
  {
    icon: "🗣️", title: "Speaking", href: "/ielts/speaking",
    border: "border-purple-200", bg: "bg-purple-50", badge: "bg-purple-100 text-purple-700",
    btn: "bg-purple-600 hover:bg-purple-700", shadow: "0 4px 0 #6B21A8",
    time: "11–14 min", questions: "3 parts", sections: "Interview format",
    desc: "A face-to-face interview with a certified examiner covering personal topics, a cue card speech, and a discussion.",
    types: ["Part 1: Introduction", "Part 2: Cue card monologue", "Part 3: In-depth discussion"],
    tip: "Extend every answer with reasons and examples — never give one-word replies.",
  },
];

export default function PracticePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">

      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block bg-teal-100 text-teal-700 text-xs font-bold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
          Free IELTS Preparation
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-3">
          Choose Your Practice Area
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed mb-6">
          Select any skill to start practising. All tests are completely free — no signup required.
          Or take a full diagnostic test to estimate your band score across all 4 skills.
        </p>
        <Link href="/ielts/diagnostic"
          className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-teal-700 transition-all"
          style={{ boxShadow: "0 4px 0 #0F6E56" }}>
          🎯 Take Full Diagnostic Test
        </Link>
      </div>

      {/* 4 Skill cards */}
      <div className="grid sm:grid-cols-2 gap-5">
        {SKILLS.map(skill => (
          <div key={skill.title}
            className={`bg-white ${skill.border} border rounded-2xl p-6 hover:shadow-lg transition-all`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{skill.icon}</span>
                <div>
                  <h2 className="text-xl font-black text-gray-900">{skill.title}</h2>
                  <div className="flex gap-2 mt-1">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${skill.badge}`}>{skill.time}</span>
                    <span className="text-xs text-gray-400">{skill.questions}</span>
                  </div>
                </div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${skill.badge}`}>{skill.sections}</span>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">{skill.desc}</p>
            <div className={`${skill.bg} rounded-xl p-3 mb-4`}>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Question Types</p>
              <div className="flex flex-wrap gap-1.5">
                {skill.types.map(t => (
                  <span key={t} className="text-xs bg-white border border-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div className="flex items-start gap-2 mb-5">
              <span className="flex-shrink-0">💡</span>
              <p className="text-xs text-gray-500 italic">{skill.tip}</p>
            </div>
            <Link href={skill.href}
              className={`block w-full text-center ${skill.btn} text-white py-3 rounded-xl font-bold text-sm transition-all`}
              style={{ boxShadow: skill.shadow }}>
              Start {skill.title} Practice →
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link href="/ielts" className="text-teal-600 text-sm font-semibold hover:underline">← Back to IELTS Hub</Link>
      </div>
    </div>
  );
}
