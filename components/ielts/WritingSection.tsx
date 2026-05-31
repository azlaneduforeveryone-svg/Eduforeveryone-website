"use client";
import { useState, useEffect, useRef } from "react";
import { WritingTest, AcademicWritingTest, GTWritingTest, IELTSFormat } from "@/lib/ielts-types";

interface Props {
  test: WritingTest;
  format: IELTSFormat;
  onComplete: (band: number) => void;
}

const WRITING_SECONDS = 60 * 60;
const BAND_OPTIONS = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

function formatTime(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

function wordCount(text: string) {
  return text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
}

export default function WritingSection({ test, format, onComplete }: Props) {
  const [task1Text, setTask1Text] = useState("");
  const [task2Text, setTask2Text] = useState("");
  const [timeLeft, setTimeLeft] = useState(WRITING_SECONDS);
  const [phase, setPhase] = useState<"writing" | "assess">("writing");
  const [t1Ratings, setT1Ratings] = useState<Record<string, number>>({});
  const [t2Ratings, setT2Ratings] = useState<Record<string, number>>({});
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) { clearInterval(timerRef.current!); setPhase("assess"); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, []);

  function submitWriting() {
    clearInterval(timerRef.current!);
    setPhase("assess");
  }

  function submitAssessment() {
    const t1Vals = Object.values(t1Ratings);
    const t2Vals = Object.values(t2Ratings);
    if (t1Vals.length < 4 || t2Vals.length < 4) return;
    const t1Avg = t1Vals.reduce((a, b) => a + b, 0) / 4;
    const t2Avg = t2Vals.reduce((a, b) => a + b, 0) / 4;
    const raw = (t1Avg + t2Avg * 2) / 3;
    const band = Math.round(raw * 2) / 2;
    const w1 = wordCount(task1Text);
    const w2 = wordCount(task2Text);
    const penalty = (w1 < 150 ? 0.5 : 0) + (w2 < 250 ? 0.5 : 0);
    onComplete(Math.max(band - penalty, 3.5));
  }

  const t1wc = wordCount(task1Text);
  const t2wc = wordCount(task2Text);
  const urgent = timeLeft < 600;

  const academicTest = test as AcademicWritingTest;
  const gtTest = test as GTWritingTest;

  // ── Self-assessment phase ──────────────────────────────────
  if (phase === "assess") {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Self-Assessment</h2>
          <p className="text-sm text-gray-500 mt-1">Rate your own writing honestly. Task 2 carries double marks.</p>
        </div>

        <AssessBlock
          title="Task 1 Self-Assessment"
          isTask1
          format={format}
          ratings={t1Ratings}
          setRatings={setT1Ratings}
        />
        <AssessBlock
          title="Task 2 Self-Assessment"
          isTask1={false}
          format={format}
          ratings={t2Ratings}
          setRatings={setT2Ratings}
        />

        <div className="space-y-1">
          {t1wc < 150 && (
            <p className="text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
              ⚠ Task 1: {t1wc} words (minimum 150) — 0.5 band penalty applied
            </p>
          )}
          {t2wc < 250 && (
            <p className="text-sm text-amber-700 bg-amber-50 rounded-lg px-3 py-2">
              ⚠ Task 2: {t2wc} words (minimum 250) — 0.5 band penalty applied
            </p>
          )}
        </div>

        <button
          onClick={submitAssessment}
          disabled={Object.keys(t1Ratings).length < 4 || Object.keys(t2Ratings).length < 4}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        >
          Submit Writing Score
        </button>
      </div>
    );
  }

  // ── Writing phase ──────────────────────────────────────────
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between bg-white border rounded-xl px-5 py-3">
        <div>
          <h2 className="font-bold text-gray-800">
            {format === "academic" ? "Academic Writing" : "General Training Writing"}
          </h2>
          <p className="text-xs text-gray-400">60 min — Task 1 (20 min suggested) + Task 2 (40 min suggested)</p>
        </div>
        <div className="flex items-center gap-4">
          <span className={`font-mono text-lg font-bold ${urgent ? "text-red-600 animate-pulse" : "text-gray-700"}`}>
            ⏱ {formatTime(timeLeft)}
          </span>
          <button
            onClick={submitWriting}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Finish Writing
          </button>
        </div>
      </div>

      {/* Task 1 */}
      <div className="border rounded-xl p-5 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Task 1</span>
            <p className="text-sm text-gray-800 mt-2 leading-relaxed">
              {format === "academic" ? academicTest.task1.prompt : gtTest.task1.prompt}
            </p>
            {format === "academic" && (
              <div className="mt-3 bg-gray-50 rounded-lg p-3 text-xs text-gray-600 leading-relaxed border-l-4 border-blue-300">
                <strong>Chart description:</strong> {academicTest.task1.chartDescription}
              </div>
            )}
            {format === "general" && (
              <ul className="mt-3 space-y-1">
                {gtTest.task1.bulletPoints.map((bp, i) => (
                  <li key={i} className="text-sm text-gray-700 flex gap-2">
                    <span className="text-blue-500">•</span>{bp}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className={`text-xs font-mono px-2 py-1 rounded-full shrink-0 ${t1wc >= 150 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
            {t1wc} words
          </div>
        </div>
        <textarea
          value={task1Text}
          onChange={(e) => setTask1Text(e.target.value)}
          placeholder="Write your Task 1 response here..."
          className="w-full h-48 border border-gray-300 rounded-lg p-3 text-sm resize-y focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>

      {/* Task 2 */}
      <div className="border rounded-xl p-5 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">Task 2 — Double marks</span>
            <p className="text-sm text-gray-800 mt-2 leading-relaxed">{test.task2.prompt}</p>
            {test.task2.planningHints && (
              <details className="mt-2">
                <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">💡 Planning hints</summary>
                <ul className="mt-2 space-y-1 pl-2">
                  {test.task2.planningHints.map((h, i) => (
                    <li key={i} className="text-xs text-gray-600 flex gap-2"><span>•</span>{h}</li>
                  ))}
                </ul>
              </details>
            )}
          </div>
          <div className={`text-xs font-mono px-2 py-1 rounded-full shrink-0 ${t2wc >= 250 ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>
            {t2wc} words
          </div>
        </div>
        <textarea
          value={task2Text}
          onChange={(e) => setTask2Text(e.target.value)}
          placeholder="Write your Task 2 response here..."
          className="w-full h-64 border border-gray-300 rounded-lg p-3 text-sm resize-y focus:ring-2 focus:ring-blue-400 outline-none"
        />
      </div>
    </div>
  );
}

// ── Self-assessment block ─────────────────────────────────────

interface AssessBlockProps {
  title: string;
  isTask1: boolean;
  format: IELTSFormat;
  ratings: Record<string, number>;
  setRatings: (r: Record<string, number>) => void;
}

function AssessBlock({ title, isTask1, format, ratings, setRatings }: AssessBlockProps) {
  const criteria = [
    {
      key: "ta",
      label: isTask1
        ? format === "academic" ? "Task Achievement" : "Task Achievement (Letter)"
        : "Task Response",
      desc: isTask1
        ? "Did you cover all required points clearly?"
        : "Did you clearly present and support your position?",
    },
    {
      key: "cc",
      label: "Coherence & Cohesion",
      desc: "Is your writing logically organised with clear paragraphs and linking words?",
    },
    {
      key: "lr",
      label: "Lexical Resource",
      desc: "Did you use a variety of vocabulary accurately?",
    },
    {
      key: "gr",
      label: "Grammar Range & Accuracy",
      desc: "Did you use a range of grammatical structures correctly?",
    },
  ];

  return (
    <div className="border rounded-xl p-5 space-y-5">
      <h3 className="font-semibold text-gray-800">{title}</h3>
      {criteria.map((c) => (
        <div key={c.key} className="space-y-2">
          <div>
            <p className="text-sm font-medium text-gray-700">{c.label}</p>
            <p className="text-xs text-gray-400">{c.desc}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            {BAND_OPTIONS.map((b) => (
              <button
                key={b}
                onClick={() => setRatings({ ...ratings, [c.key]: b })}
                className={`px-3 py-1 text-xs rounded-full border font-medium transition ${
                  ratings[c.key] === b
                    ? "bg-blue-600 text-white border-blue-600"
                    : "border-gray-300 text-gray-600 hover:border-blue-400"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
