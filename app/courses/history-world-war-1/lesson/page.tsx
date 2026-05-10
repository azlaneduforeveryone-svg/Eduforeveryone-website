import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Causes of World War I | History | EduForEveryone",
  description: "Understand the MAIN causes of WWI — Militarism, Alliances, Imperialism and Nationalism. Free history lesson with timeline and quiz.",
};

export default function HistoryWWIPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/courses" className="hover:text-teal-600">Courses</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Causes of World War I</span>
      </nav>

      <div className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-start gap-5">
          <span className="text-6xl">🌍</span>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">History</span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">📗 Middle School · High School</span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">~20 min</span>
            </div>
            <h1 className="text-2xl font-black mb-2">Causes of World War I</h1>
            <p className="text-red-200 text-sm leading-relaxed mb-4">
              Explore the long-term tensions and short-term triggers that led the world into war in 1914.
              Master the MAIN causes, the alliance system, the assassination and the road to global conflict.
            </p>
            <Link href="/courses/history-world-war-1/lesson"
              className="inline-flex items-center gap-2 bg-white text-red-700 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-all"
              style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.15)" }}>
              📖 Start Lesson
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN causes preview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { letter:"M", word:"Militarism",  color:"bg-red-50 border-red-200 text-red-800" },
          { letter:"A", word:"Alliances",   color:"bg-orange-50 border-orange-200 text-orange-800" },
          { letter:"I", word:"Imperialism", color:"bg-blue-50 border-blue-200 text-blue-800" },
          { letter:"N", word:"Nationalism", color:"bg-green-50 border-green-200 text-green-800" },
        ].map(c => (
          <div key={c.letter} className={`${c.color} border rounded-xl p-4 text-center`}>
            <p className="text-4xl font-black mb-1">{c.letter}</p>
            <p className="font-bold text-sm">{c.word}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
        <h2 className="font-black text-gray-900 mb-4">📋 What You Will Learn</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "The four MAIN long-term causes of WWI",
            "The Triple Entente vs the Triple Alliance",
            "The assassination of Archduke Franz Ferdinand",
            "The Schlieffen Plan and why Britain entered the war",
            "The timeline from June to August 1914",
            "Why the alliance system turned a local conflict global",
          ].map((p, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-red-500 font-bold mt-0.5">✓</span><span>{p}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { emoji:"📖", label:"Full Lesson",  desc:"In-depth explanation with key quotes" },
          { emoji:"📅", label:"Timeline",     desc:"Interactive road to war 1914" },
          { emoji:"🧠", label:"5-Q Quiz",     desc:"Test your WWI knowledge" },
        ].map((c, i) => (
          <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-3xl mb-2">{c.emoji}</p>
            <p className="font-bold text-gray-900 text-sm">{c.label}</p>
            <p className="text-xs text-gray-500 mt-1">{c.desc}</p>
          </div>
        ))}
      </div>

      <Link href="/courses/history-world-war-1/lesson"
        className="flex items-center justify-center gap-2 bg-red-700 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-800 transition-all"
        style={{ boxShadow: "0 4px 0 #7f1d1d" }}>
        📖 Start Lesson Now — Free
      </Link>
    </div>
  );
}
