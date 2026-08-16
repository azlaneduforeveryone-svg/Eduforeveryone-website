"use client";
import { useState, useEffect, useRef } from "react";
import {
  AcademicReadingTest,
  GTReadingTest,
  ReadingQuestion,
  IELTSFormat,
  rawToBand,
} from "@/lib/ielts/ielts-types";

interface Props {
  test: AcademicReadingTest | GTReadingTest;
  format: IELTSFormat;
  onComplete: (band: number) => void;
}

const READING_SECONDS = 60 * 60; // 60 minutes

function formatTime(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

function scoreAnswers(allQuestions: ReadingQuestion[], answers: Record<number, string>): number {
  let correct = 0;
  allQuestions.forEach((q) => {
    const ua = (answers[q.id] ?? "").trim().toLowerCase();
    const ca = q.answer.trim().toLowerCase();
    if (ua === ca) correct++;
  });
  return correct;
}

export default function ReadingSection({ test, format, onComplete }: Props) {
  const [activeTab, setActiveTab] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(READING_SECONDS);
  const [submitted, setSubmitted] = useState(false);
  const [results, setResults] = useState<{ id: number; correct: boolean; answer: string; correct_answer: string; explanation: string }[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, []);

  function setAnswer(qId: number, value: string) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  function handleSubmit() {
    clearInterval(timerRef.current!);

    const allQs: ReadingQuestion[] = [];
    if (format === "academic") {
      const t = test as AcademicReadingTest;
      t.passages.forEach((p) => allQs.push(...p.questions));
    } else {
      const t = test as GTReadingTest;
      t.sections.forEach((s) => allQs.push(...s.questions));
    }

    const res = allQs.map((q) => {
      const ua = (answers[q.id] ?? "").trim().toLowerCase();
      const ca = q.answer.trim().toLowerCase();
      return { id: q.id, correct: ua === ca, answer: answers[q.id] ?? "—", correct_answer: q.answer, explanation: q.explanation };
    });
    setResults(res);
    setSubmitted(true);

    const correct = res.filter((r) => r.correct).length;
    onComplete(rawToBand(correct));
  }

  // ── Academic reading layout ───────────────────────────────
  if (format === "academic") {
    const t = test as AcademicReadingTest;

    if (submitted) return <ReadingResults results={results} />;

    return (
      <div className="max-w-5xl mx-auto p-4 space-y-4">
        <ReadingHeader timeLeft={timeLeft} label={t.label} onSubmit={handleSubmit} />

        {/* Passage tabs */}
        <div className="flex gap-1 border-b">
          {t.passages.map((p, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                activeTab === i ? "bg-white border border-b-white text-blue-700" : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Passage {i + 1}
            </button>
          ))}
        </div>

        {/* Passage content */}
        {t.passages.map((passage, pi) => (
          <div key={pi} className={activeTab === pi ? "block" : "hidden"}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Text */}
              <div className="bg-gray-50 rounded-xl p-5 text-sm leading-relaxed text-gray-800 max-h-[60vh] overflow-y-auto">
                <h3 className="font-bold text-base mb-3">{passage.title}</h3>
                {passage.text.split("\n\n").map((para, idx) => (
                  <p key={idx} className="mb-3">{para.trim()}</p>
                ))}
              </div>

              {/* Questions */}
              <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {passage.instructions && (
                  <p className="text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg px-3 py-2">
                    {passage.instructions}
                  </p>
                )}
                <QuestionList questions={passage.questions} answers={answers} setAnswer={setAnswer} />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ── GT reading layout ─────────────────────────────────────
  const t = test as GTReadingTest;

  if (submitted) return <ReadingResults results={results} />;

  return (
    <div className="max-w-5xl mx-auto p-4 space-y-4">
      <ReadingHeader timeLeft={timeLeft} label={t.label} onSubmit={handleSubmit} />

      {/* Section tabs */}
      <div className="flex gap-1 border-b">
        {t.sections.map((sec, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-4 py-2 text-sm font-medium rounded-t-lg transition ${
              activeTab === i ? "bg-white border border-b-white text-blue-700" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            {sec.label}
          </button>
        ))}
      </div>

      {t.sections.map((sec, si) => (
        <div key={si} className={activeTab === si ? "block" : "hidden"}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Texts */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              <p className="text-xs text-gray-500 bg-gray-50 rounded px-3 py-2">{sec.context}</p>
              {sec.texts.map((txt, ti) => (
                <div key={ti} className="bg-gray-50 rounded-xl p-4 text-sm">
                  <h4 className="font-bold text-gray-800 mb-2">{txt.heading}</h4>
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">{txt.text}</div>
                </div>
              ))}
            </div>

            {/* Questions */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
              <p className="text-xs font-semibold text-blue-700 bg-blue-50 rounded-lg px-3 py-2">
                {sec.instructions}
              </p>
              <QuestionList questions={sec.questions} answers={answers} setAnswer={setAnswer} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Shared sub-components ─────────────────────────────────────

function ReadingHeader({ timeLeft, label, onSubmit }: { timeLeft: number; label: string; onSubmit: () => void }) {
  const urgent = timeLeft < 600;
  return (
    <div className="flex items-center justify-between bg-white border rounded-xl px-5 py-3">
      <div>
        <h2 className="font-bold text-gray-800">{label}</h2>
        <p className="text-xs text-gray-400">60 minutes • answer all questions</p>
      </div>
      <div className="flex items-center gap-4">
        <span className={`font-mono text-lg font-bold ${urgent ? "text-red-600 animate-pulse" : "text-gray-700"}`}>
          ⏱ {formatTime(timeLeft)}
        </span>
        <button
          onClick={onSubmit}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

function QuestionList({
  questions,
  answers,
  setAnswer,
}: {
  questions: ReadingQuestion[];
  answers: Record<number, string>;
  setAnswer: (id: number, val: string) => void;
}) {
  return (
    <div className="space-y-5">
      {questions.map((q) => (
        <div key={q.id} className="space-y-2">
          <label className="flex gap-3 text-sm text-gray-800">
            <span className="font-bold text-blue-600 w-6 shrink-0">{q.id}.</span>
            <span>{q.q}</span>
          </label>

          {q.type === "mcq" && q.opts ? (
            <div className="pl-9 space-y-1">
              {q.opts.map((opt) => (
                <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="radio"
                    name={`rq-${q.id}`}
                    value={opt[0]}
                    checked={answers[q.id] === opt[0]}
                    onChange={() => setAnswer(q.id, opt[0])}
                    className="accent-blue-600"
                  />
                  {opt}
                </label>
              ))}
            </div>
          ) : q.type === "tfng" || q.type === "ynng" ? (
            <div className="pl-9 flex gap-2 flex-wrap">
              {(q.type === "tfng" ? ["TRUE", "FALSE", "NOT GIVEN"] : ["YES", "NO", "NOT GIVEN"]).map((opt) => (
                <button
                  key={opt}
                  onClick={() => setAnswer(q.id, opt)}
                  className={`px-3 py-1 text-xs rounded-full border font-medium transition ${
                    answers[q.id] === opt
                      ? "bg-blue-600 text-white border-blue-600"
                      : "border-gray-300 text-gray-600 hover:border-blue-400"
                  }`}
                >
                  {opt}
                </button>
              ))}
            </div>
          ) : (
            <div className="pl-9">
              <input
                type="text"
                value={answers[q.id] ?? ""}
                onChange={(e) => setAnswer(q.id, e.target.value)}
                placeholder="Your answer"
                className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ReadingResults({ results }: { results: { id: number; correct: boolean; answer: string; correct_answer: string; explanation: string }[] }) {
  const correct = results.filter((r) => r.correct).length;
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
        <p className="text-green-700 font-bold text-lg">Reading Complete</p>
        <p className="text-green-600 text-sm">{correct} / {results.length} correct</p>
      </div>
      <div className="space-y-3">
        {results.map((r) => (
          <div key={r.id} className={`rounded-lg p-3 text-sm ${r.correct ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}>
            <div className="flex gap-2 items-start">
              <span>{r.correct ? "✅" : "❌"}</span>
              <div className="flex-1">
                <p className="font-medium text-gray-700">Q{r.id} — Your answer: <span className="font-bold">{r.answer}</span></p>
                {!r.correct && <p className="text-gray-600">Correct: <span className="font-bold text-green-700">{r.correct_answer}</span></p>}
                <p className="text-gray-500 mt-1 text-xs">{r.explanation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
