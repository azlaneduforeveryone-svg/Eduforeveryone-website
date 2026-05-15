"use client";
import Link from "next/link";
import { PASSAGES } from "@/lib/ieltsReadingData";

const TYPE_LABELS: Record<string, string> = {
  mcq: "MCQ",
  tfng: "T/F/NG",
  ynng: "Y/N/NG",
  sentence_completion: "Sentence",
  short_answer: "Short Ans",
};

export default function ReadingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">Reading</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">📖</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">IELTS Reading Practice</h1>
            <p className="text-gray-500 mt-1">
              Academic passages with 10 random questions per session. Questions rotate so you see fresh ones every attempt.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Multiple Choice", "True / False / Not Given", "Yes / No / Not Given", "Sentence Completion", "Short Answer", "🔀 No-Repeat Rotation"].map(t => (
            <span key={t} className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-8">
        <h2 className="font-bold text-indigo-800 mb-2">📌 Reading Strategy Tips</h2>
        <ul className="text-sm text-indigo-700 space-y-1.5">
          <li>• <strong>Skim first:</strong> read the passage quickly to grasp the overall structure and main ideas</li>
          <li>• <strong>Read questions before detail reading:</strong> know what you are looking for before you look</li>
          <li>• <strong>True / False / Not Given:</strong> "Not Given" means the information is absent — do not infer</li>
          <li>• <strong>Yes / No / Not Given:</strong> tests whether information agrees with the writer's claims/opinions</li>
          <li>• <strong>Sentence Completion:</strong> use exact words from the passage; check word limits</li>
          <li>• <strong>Timer:</strong> you have 20 minutes per session — pace yourself at about 2 minutes per question</li>
        </ul>
      </div>

      {/* Passage grid */}
      <h2 className="text-xl font-bold text-gray-900 mb-5">
        Choose a Passage
        <span className="ml-2 text-sm font-normal text-gray-400">({PASSAGES.length} available)</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PASSAGES.map(p => {
          const types = [...new Set(p.questions.map(q => q.type))];
          return (
            <div
              key={p.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col"
            >
              <div className="flex items-start justify-between mb-3 gap-2">
                <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-medium flex-shrink-0">{p.tag}</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full flex-shrink-0">{p.level}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">{p.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-3 flex-1 line-clamp-2">
                {p.text.slice(0, 120)}…
              </p>
              <div className="flex flex-wrap gap-1 mb-4">
                {types.map(t => (
                  <span key={t} className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    {TYPE_LABELS[t] ?? t}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-400">{p.questions.length}Q bank · 10/session</span>
                <Link
                  href={`/ielts/reading/${p.id}`}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-xs hover:bg-indigo-700 transition-colors flex-shrink-0"
                >
                  Start →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 text-center">
        <p className="text-gray-400 text-sm">General Training passages coming soon</p>
        <Link href="/ielts" className="inline-block mt-4 text-indigo-600 text-sm font-semibold hover:underline">
          ← Back to IELTS Hub
        </Link>
      </div>
    </div>
  );
}
