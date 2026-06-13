"use client";
// components/gmat/SectionRunner.tsx
// ---------------------------------------------------------------------------
// The shared exam runner used by BOTH practice sections and the full mock.
// Real-exam behaviours (GMAT Focus):
//   • per-section countdown, auto-submit on expiry (or untimed practice toggle)
//   • bookmark any question
//   • edit up to N answers per section (changing an ANSWERED question costs one
//     edit; locked when 0 remain — unanswered questions stay free to answer)
//   • question palette: answered / unanswered / bookmarked / current
// No question literals here — everything renders through QuestionRenderer and
// grades through gradeFull. Score comes from the engine (estimate only).
// ---------------------------------------------------------------------------

import { useState, useEffect, useRef, useCallback } from "react";
import QuestionRenderer, { gradeFull, isAnswered, unitCount } from "./QuestionRenderer";
import type { GmatAnswer } from "./QuestionRenderer";
import DataInsightsCalculator from "./DataInsightsCalculator";   // ← added import for Data Insights Calculator
import { scoreSection } from "@/lib/gmat-engine";
import type { GmatQuestion, GmatSection, GmatSectionScore } from "@/lib/gmat-types";

export interface SectionRunResult {
  score: GmatSectionScore;
  questions: GmatQuestion[];
  answers: Record<string, GmatAnswer>;
}

interface Props {
  section: GmatSection;
  sectionName: string;
  questions: GmatQuestion[]; // already prepared (shuffled) by the engine
  minutes: number;
  editsAllowed: number;
  onFinish: (r: SectionRunResult) => void;
  allowUntimed?: boolean; // practice may offer an untimed toggle
}

function fmt(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

const TYPE_LABEL: Record<GmatQuestion["type"], string> = {
  "problem-solving": "Problem Solving",
  "critical-reasoning": "Critical Reasoning",
  "reading-comprehension": "Reading Comprehension",
  "data-sufficiency": "Data Sufficiency",
  "multi-source-reasoning": "Multi-Source Reasoning",
  "table-analysis": "Table Analysis",
  "graphics-interpretation": "Graphics Interpretation",
  "two-part-analysis": "Two-Part Analysis",
};

export default function SectionRunner({
  section, sectionName, questions, minutes, editsAllowed, onFinish, allowUntimed,
}: Props) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, GmatAnswer>>({});
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());
  const [editsLeft, setEditsLeft] = useState(editsAllowed);
  const [untimed, setUntimed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(minutes * 60);
  const [editBlocked, setEditBlocked] = useState(false);
  const [showCalc, setShowCalc] = useState(false);              // ← add
  const calcAllowed = section === "data-insights";              // ← add  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishedRef = useRef(false);

  const submit = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    if (timerRef.current) clearInterval(timerRef.current);
    const results = questions.flatMap((q) => gradeFull(q, answers[q.id]));
    const score = scoreSection(section, results);
    onFinish({ score, questions, answers });
  }, [answers, questions, section, onFinish]);

  // Timer
  useEffect(() => {
    if (untimed) { if (timerRef.current) clearInterval(timerRef.current); return; }
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { submit(); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [untimed, submit]);

  const q = questions[idx];

  const handleChange = (newAnswer: GmatAnswer) => {
    const prev = answers[q.id];
    const wasAnswered = isAnswered(q, prev);
    const changed = JSON.stringify(prev) !== JSON.stringify(newAnswer);
    if (wasAnswered && changed) {
      if (editsLeft <= 0) {
        setEditBlocked(true);
        setTimeout(() => setEditBlocked(false), 2200);
        return; // locked — no more edits
      }
      setEditsLeft((e) => e - 1);
    }
    setAnswers((a) => ({ ...a, [q.id]: newAnswer }));
  };

  const toggleBookmark = () => {
    setBookmarks((b) => {
      const next = new Set(b);
      if (next.has(q.id)) next.delete(q.id); else next.add(q.id);
      return next;
    });
  };

  const answeredCount = questions
  .filter((qq) => isAnswered(qq, answers[qq.id]))
  .reduce((sum, qq) => sum + unitCount(qq), 0);
  const totalQuestions = questions.reduce((sum, qq) => sum + unitCount(qq), 0);
  const urgent = !untimed && timeLeft <= 120;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="font-bold text-gray-800 text-sm">{sectionName}</span>
            {calcAllowed && (
              <button onClick={() => setShowCalc((v) => !v)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all ${
                  showCalc ? "bg-emerald-100 text-emerald-700 border-emerald-300"
                           : "text-gray-500 border-gray-200 hover:border-emerald-300"
                }`}>
                🧮 Calculator
              </button>
            )}
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs text-gray-400">{answeredCount}/{totalQuestions} answered</span>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">
              ✏️ Edits left: {editsLeft}
            </span>
            {allowUntimed && (
              <button onClick={() => setUntimed((v) => !v)}
                className="text-xs font-semibold text-gray-500 border border-gray-200 px-2.5 py-1 rounded-lg hover:border-emerald-300">
                {untimed ? "⏱ Enable timer" : "⏸ Untimed"}
              </button>
            )}
            {!untimed && (
              <span className={`font-mono font-bold text-sm px-3 py-1 rounded-lg ${urgent ? "bg-red-100 text-red-700 animate-pulse" : "bg-emerald-50 text-emerald-700"}`}>
                ⏱ {fmt(timeLeft)}
              </span>
            )}
            <button onClick={submit}
              className="bg-emerald-600 text-white px-4 py-1.5 rounded-lg font-bold text-xs hover:bg-emerald-700 transition-colors">
              Submit Section
            </button>
          </div>
        </div>
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-emerald-500 transition-all" style={{ width: `${(answeredCount / totalQuestions) * 100}%` }} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-4">
        {/* Palette */}
        <div className="bg-white border border-gray-200 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-gray-400 font-medium">QUESTION NAVIGATION</p>
            <div className="flex items-center gap-3 text-[10px] text-gray-400">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-100 border border-emerald-300 inline-block" /> answered</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-amber-100 border border-amber-300 inline-block" /> bookmarked</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {questions.map((qq, i) => {
              const answered = isAnswered(qq, answers[qq.id]);
              const marked = bookmarks.has(qq.id);
              const isCurrent = i === idx;
              let cls = "bg-gray-50 text-gray-400 border-gray-200 hover:border-emerald-300";
              if (isCurrent) cls = "bg-emerald-600 text-white border-emerald-600";
              else if (marked) cls = "bg-amber-100 text-amber-700 border-amber-300";
              else if (answered) cls = "bg-emerald-100 text-emerald-700 border-emerald-200";
              return (
                <button key={qq.id} onClick={() => setIdx(i)}
                  className={`w-9 h-9 rounded-lg text-xs font-bold border transition-all relative ${cls}`}>
                  {i + 1}
                  {marked && <span className="absolute -top-1 -right-1 text-[8px]">🔖</span>}
                </button>
              );
            })}
          </div>
        </div>

        {editBlocked && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl px-4 py-2.5">
            ⚠️ No edits remaining — you can only edit up to {editsAllowed} answered questions per section.
          </div>
        )}

        {/* Current question */}
        {q && (
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs text-gray-400 font-medium">
                Question {idx + 1} of {totalQuestions}
                <span className="ml-2 text-gray-300">·</span>
                <span className="ml-2 text-emerald-600 font-semibold">{TYPE_LABEL[q.type]}</span>
              </span>
              <button onClick={toggleBookmark}
                className={`text-xs font-semibold px-3 py-1 rounded-lg border transition-all ${
                  bookmarks.has(q.id) ? "bg-amber-100 text-amber-700 border-amber-300" : "text-gray-500 border-gray-200 hover:border-amber-300"
                }`}>
                {bookmarks.has(q.id) ? "🔖 Bookmarked" : "🔖 Bookmark"}
              </button>
            </div>

            <QuestionRenderer question={q} answer={answers[q.id]} onChange={handleChange} />

            <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
              <button onClick={() => setIdx((i) => Math.max(0, i - 1))} disabled={idx === 0}
                className="text-sm text-gray-500 font-medium hover:text-emerald-600 transition-colors disabled:opacity-30">
                ← Previous
              </button>
              {idx < questions.length - 1 ? (
                <button onClick={() => setIdx((i) => i + 1)}
                  className="bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">
                  Next →
                </button>
              ) : (
                <button onClick={submit}
                  className="bg-green-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors">
                  Finish Section →
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {calcAllowed && showCalc && (
        <div className="fixed top-20 right-6 z-40 drop-shadow-2xl">
          <DataInsightsCalculator onClose={() => setShowCalc(false)} />
        </div>
      )}
    </div>
  );
}
