"use client";
// components/gmat/GmatResults.tsx
// ---------------------------------------------------------------------------
// Results screen for a practice section OR a full mock. Shows the ESTIMATED
// total (205–805, only for a full mock), each section band (60–90), and every
// question's correct answer + detailed explanation via QuestionRenderer's
// review mode. Every score is labelled "estimated — not an official score".
// ---------------------------------------------------------------------------

import Link from "next/link";
import QuestionRenderer from "./QuestionRenderer";
import type { GmatAnswer } from "./QuestionRenderer";
import type { GmatQuestion, GmatSectionScore } from "@/lib/gmat-types";

export interface SectionResultBlock {
  score: GmatSectionScore;
  questions: GmatQuestion[];
  answers: Record<string, GmatAnswer>;
}

interface Props {
  results: SectionResultBlock[];
  estimatedTotal?: number; // present for the full mock
  onRetry?: () => void;
  retryLabel?: string;
  homeHref: string;
  homeLabel: string;
}

const SECTION_TITLE: Record<string, string> = {
  quant: "Quantitative Reasoning",
  verbal: "Verbal Reasoning",
  "data-insights": "Data Insights",
};

export default function GmatResults({
  results, estimatedTotal, onRetry, retryLabel = "Try Again", homeHref, homeLabel,
}: Props) {
  const totalCorrect = results.reduce((n, r) => n + r.score.rawCorrect, 0);
  const totalUnits = results.reduce((n, r) => n + r.score.total, 0);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/gmat" className="hover:text-emerald-600 transition-colors">GMAT</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">Results</span>
      </div>

      {/* Score card */}
      <div className="rounded-2xl p-8 mb-6 text-center bg-emerald-50 border border-emerald-200">
        {estimatedTotal !== undefined ? (
          <>
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Estimated Total Score</p>
            <p className="text-6xl font-black text-emerald-700 mb-1">{estimatedTotal}</p>
            <p className="text-sm text-gray-500">on the 205–805 scale</p>
          </>
        ) : (
          <>
            <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Estimated Section Band</p>
            <p className="text-6xl font-black text-emerald-700 mb-1">{results[0]?.score.estimatedSectionScore}</p>
            <p className="text-sm text-gray-500">section score range 60–90</p>
          </>
        )}
        <p className="text-gray-500 text-sm mt-3">{totalCorrect} / {totalUnits} correct</p>
        <p className="mt-4 inline-block bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold px-4 py-2 rounded-full">
          ⚠️ Estimated — not an official GMAT score. The real exam uses adaptive scoring that cannot be reproduced here.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mt-6">
          {onRetry && (
            <button onClick={onRetry}
              className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">
              🔀 {retryLabel}
            </button>
          )}
          <Link href={homeHref}
            className="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:border-emerald-300 hover:text-emerald-600 transition-colors">
            {homeLabel}
          </Link>
        </div>
      </div>

      {/* Per-section bands */}
      {results.length > 1 && (
        <div className="grid sm:grid-cols-3 gap-3 mb-8">
          {results.map((r) => (
            <div key={r.score.section} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
              <p className="text-xs font-semibold text-gray-500 mb-1">{SECTION_TITLE[r.score.section]}</p>
              <p className="text-3xl font-black text-emerald-700">{r.score.estimatedSectionScore}</p>
              <p className="text-xs text-gray-400 mt-1">{r.score.rawCorrect}/{r.score.total} correct · est. 60–90</p>
            </div>
          ))}
        </div>
      )}

      {/* Review */}
      <h2 className="font-bold text-gray-900 text-lg mb-4">Review — Answers &amp; Explanations</h2>
      <div className="space-y-8">
        {results.map((r) => (
          <div key={r.score.section}>
            {results.length > 1 && (
              <h3 className="text-sm font-black text-emerald-700 uppercase tracking-wide mb-3">{SECTION_TITLE[r.score.section]}</h3>
            )}
            <div className="space-y-5">
              {r.questions.map((q, i) => (
                <div key={q.id} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <p className="text-xs text-gray-400 font-medium mb-3">
                    Question {i + 1} · <span className="text-emerald-600">{q.topic}</span>
                    <span className="ml-2 text-gray-300">{q.difficulty}</span>
                  </p>
                  <QuestionRenderer question={q} answer={r.answers[q.id]} onChange={() => {}} review />
                  {/* Single-unit explanation (RC/MSR show theirs per sub-question inside the renderer) */}
                  {q.type !== "reading-comprehension" && q.type !== "multi-source-reasoning" && (
                    <div className="mt-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3 text-xs text-emerald-900 leading-relaxed">
                      <strong>Explanation:</strong> {q.explanation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
