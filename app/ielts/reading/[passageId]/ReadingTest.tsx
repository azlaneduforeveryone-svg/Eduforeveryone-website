"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import type { Passage, Question } from "@/lib/ieltsReadingData";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ShuffledOpt { label: string; text: string; isCorrect: boolean; }

interface ShuffledQ {
  id: number;
  type: Question["type"];
  q: string;
  shuffledOpts?: ShuffledOpt[];
  buttonOrder?: string[];        // tfng / ynng button display order
  answer: string;
  acceptedAnswers?: string[];
  explanation: string;
  sentenceTemplate?: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const LABELS = ["A", "B", "C", "D"] as const;
const SESSION_SIZE = 10;
const TIMER_SECONDS = 20 * 60; // 20 minutes

const BAND_MAP: Record<number, string> = {
  10: "9.0", 9: "8.5", 8: "8.0", 7: "7.5", 6: "7.0",
  5: "6.5", 4: "6.0", 3: "5.5", 2: "5.0", 1: "4.5", 0: "4.0",
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fisherYates<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function seenKey(passageId: string) { return `ielts_seen_${passageId}`; }

function loadSeen(passageId: string): number[] {
  try {
    const raw = localStorage.getItem(seenKey(passageId));
    return raw ? (JSON.parse(raw) as number[]) : [];
  } catch { return []; }
}

function saveSeen(passageId: string, ids: number[]) {
  try { localStorage.setItem(seenKey(passageId), JSON.stringify(ids)); } catch { /* noop */ }
}

function pickSession(passage: Passage, alreadySeen: number[]): { ids: number[]; resetHappened: boolean } {
  const allIds = passage.questions.map(q => q.id);
  let unseen = allIds.filter(id => !alreadySeen.includes(id));
  let resetHappened = false;
  if (unseen.length < SESSION_SIZE) {
    // Not enough unseen — reset the bank
    unseen = allIds;
    resetHappened = true;
  }
  const picked = fisherYates(unseen).slice(0, SESSION_SIZE);
  return { ids: picked, resetHappened };
}

function buildShuffled(questions: Question[]): ShuffledQ[] {
  return questions.map(q => {
    if (q.type === "mcq" && q.opts) {
      const parsed = q.opts.map(o => ({ text: o.slice(3), isCorrect: o[0] === q.answer }));
      const shuffled = fisherYates(parsed);
      const shuffledOpts: ShuffledOpt[] = shuffled.map((item, i) => ({
        label: LABELS[i],
        text: item.text,
        isCorrect: item.isCorrect,
      }));
      return { id: q.id, type: q.type, q: q.q, shuffledOpts, answer: shuffledOpts.find(o => o.isCorrect)!.label, explanation: q.explanation };
    }
    if (q.type === "tfng") {
      return { id: q.id, type: q.type, q: q.q, buttonOrder: fisherYates(["TRUE", "FALSE", "NOT GIVEN"]), answer: q.answer, explanation: q.explanation };
    }
    if (q.type === "ynng") {
      return { id: q.id, type: q.type, q: q.q, buttonOrder: fisherYates(["YES", "NO", "NOT GIVEN"]), answer: q.answer, explanation: q.explanation };
    }
    // sentence_completion / short_answer
    return { id: q.id, type: q.type, q: q.q, answer: q.answer, acceptedAnswers: q.acceptedAnswers, explanation: q.explanation, sentenceTemplate: q.sentenceTemplate };
  });
}

function gradeText(input: string, sq: ShuffledQ): boolean {
  const norm = input.toLowerCase().trim();
  if (!norm) return false;
  const accepted = sq.acceptedAnswers ?? [sq.answer];
  return accepted.some(a => norm === a.toLowerCase().trim() || norm === a.toLowerCase().replace(/^the /, "").trim());
}

function gradeQuestion(sq: ShuffledQ, userAnswer: string): boolean {
  if (sq.type === "mcq" || sq.type === "tfng" || sq.type === "ynng") {
    return userAnswer.toUpperCase().trim() === sq.answer.toUpperCase().trim();
  }
  return gradeText(userAnswer, sq);
}

function fmt(seconds: number) {
  const m = Math.floor(seconds / 60).toString().padStart(2, "0");
  const s = (seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// ─── Component ────────────────────────────────────────────────────────────────

interface Props { passage: Passage; }

export default function ReadingTest({ passage }: Props) {
  const [phase, setPhase] = useState<"loading" | "test" | "result">("loading");
  const [sessionQs, setSessionQs] = useState<ShuffledQ[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [timeLeft, setTimeLeft] = useState(TIMER_SECONDS);
  const [score, setScore] = useState(0);
  const [passageOpen, setPassageOpen] = useState(false); // mobile accordion
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const seenRef = useRef<number[]>([]);

  const startSession = useCallback(() => {
    const seen = loadSeen(passage.id);
    const { ids, resetHappened } = pickSession(passage, seen);
    if (resetHappened) saveSeen(passage.id, []);
    seenRef.current = seen;

    const qs = passage.questions.filter(q => ids.includes(q.id));
    const ordered = ids.map(id => qs.find(q => q.id === id)!).filter(Boolean);
    const shuffled = buildShuffled(ordered);

    setSessionQs(shuffled);
    setAnswers({});
    setCurrentIdx(0);
    setTimeLeft(TIMER_SECONDS);
    setScore(0);
    setPhase("test");
  }, [passage]);

  // Init
  useEffect(() => { startSession(); }, [startSession]);

  // Timer
  useEffect(() => {
    if (phase !== "test") return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { handleSubmit(true); return 0; }
        return t - 1;
      });
    }, 1000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const handleSubmit = useCallback((auto = false) => {
    if (timerRef.current) clearInterval(timerRef.current);

    setSessionQs(prev => {
      const s = prev.reduce((acc, sq) => acc + (gradeQuestion(sq, answers[sq.id] ?? "") ? 1 : 0), 0);
      setScore(s);

      // Save seen IDs
      const newSeen = [...new Set([...seenRef.current, ...prev.map(q => q.id)])];
      saveSeen(passage.id, newSeen);

      return prev;
    });

    if (!auto) setPhase("result");
    else setPhase("result");
  }, [answers, passage.id]);

  const answeredCount = Object.keys(answers).length;
  const currentQ = sessionQs[currentIdx];
  const band = BAND_MAP[score] ?? "4.0";

  // ── Loading ────────────────────────────────────────────────────────────────
  if (phase === "loading") {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-gray-400 text-sm">Loading questions…</div>
      </div>
    );
  }

  // ── Result ─────────────────────────────────────────────────────────────────
  if (phase === "result") {
    const pct = Math.round((score / sessionQs.length) * 100);
    const passed = score >= Math.ceil(sessionQs.length * 0.6);
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
          <span>›</span>
          <Link href="/ielts/reading" className="hover:text-indigo-600 transition-colors">Reading</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium truncate">{passage.title}</span>
        </div>

        {/* Score card */}
        <div className={`rounded-2xl p-8 mb-8 text-center border ${passed ? "bg-green-50 border-green-200" : "bg-amber-50 border-amber-200"}`}>
          <p className="text-6xl font-black mb-2" style={{ color: passed ? "#16a34a" : "#d97706" }}>
            {score} / {sessionQs.length}
          </p>
          <p className="text-2xl font-bold text-gray-700 mb-1">Estimated Band: {band}</p>
          <p className="text-gray-500 text-sm mb-6">{pct}% correct · 10-question practice session</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={startSession} className="bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors">
              🔀 Next 10 Questions
            </button>
            <Link href="/ielts/reading" className="border border-gray-200 text-gray-600 px-6 py-2.5 rounded-xl font-bold text-sm hover:border-indigo-300 hover:text-indigo-600 transition-colors">
              ← All Passages
            </Link>
          </div>
        </div>

        {/* Passage */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Reading Passage — {passage.title}</h2>
          {passage.text.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 leading-[1.85] mb-4 last:mb-0 text-[0.95rem]">{para}</p>
          ))}
        </div>

        {/* Answers review */}
        <h2 className="font-bold text-gray-900 text-lg mb-4">Review — Your Answers</h2>
        <div className="space-y-4">
          {sessionQs.map((q, idx) => {
            const userAns = answers[q.id] ?? "";
            const correct = gradeQuestion(q, userAns);
            return (
              <div key={q.id} className={`bg-white border rounded-2xl p-5 ${correct ? "border-green-300 bg-green-50/30" : "border-red-300 bg-red-50/20"}`}>
                <p className="font-semibold text-gray-900 mb-2 text-sm leading-snug">
                  <span className="text-indigo-500 font-bold mr-2">{idx + 1}.</span>
                  {q.type === "tfng" && <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full mr-2 font-semibold align-middle">T/F/NG</span>}
                  {q.type === "ynng" && <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded-full mr-2 font-semibold align-middle">Y/N/NG</span>}
                  {q.type === "sentence_completion" && <span className="text-xs bg-teal-100 text-teal-600 px-2 py-0.5 rounded-full mr-2 font-semibold align-middle">Sentence Completion</span>}
                  {q.type === "short_answer" && <span className="text-xs bg-amber-100 text-amber-600 px-2 py-0.5 rounded-full mr-2 font-semibold align-middle">Short Answer</span>}
                  {q.type === "sentence_completion" ? q.sentenceTemplate : q.q}
                </p>
                <div className={`mt-2 p-3 rounded-xl text-xs leading-relaxed ${correct ? "bg-green-100 text-green-800" : "bg-red-50 text-red-800 border border-red-200"}`}>
                  {correct ? (
                    <span><strong>✓ Correct</strong>{userAns ? ` — ${userAns}` : ""}</span>
                  ) : (
                    <span>
                      <strong>✗ Your answer:</strong> {userAns || "(no answer)"} ·{" "}
                      <strong>Correct:</strong>{" "}
                      {q.type === "mcq" && q.shuffledOpts
                        ? `${q.answer}. ${q.shuffledOpts.find(o => o.isCorrect)?.text}`
                        : q.answer}
                    </span>
                  )}
                  {" — "}{q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // ── Test phase ─────────────────────────────────────────────────────────────
  const urgent = timeLeft <= 120;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2 text-sm text-gray-500 min-w-0">
            <Link href="/ielts/reading" className="hover:text-indigo-600 transition-colors shrink-0">Reading</Link>
            <span>›</span>
            <span className="font-medium text-gray-700 truncate max-w-[160px] sm:max-w-xs">{passage.title}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-gray-400">{answeredCount}/{sessionQs.length} answered</span>
            <span className={`font-mono font-bold text-sm px-3 py-1 rounded-lg ${urgent ? "bg-red-100 text-red-700 animate-pulse" : "bg-indigo-50 text-indigo-700"}`}>
              ⏱ {fmt(timeLeft)}
            </span>
            <button
              onClick={() => handleSubmit(false)}
              disabled={answeredCount === 0}
              className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg font-bold text-xs hover:bg-indigo-700 transition-colors disabled:opacity-40"
            >
              Submit
            </button>
          </div>
        </div>

        {/* Progress bar */}
        <div className="h-1 bg-gray-100">
          <div className="h-full bg-indigo-500 transition-all" style={{ width: `${(answeredCount / sessionQs.length) * 100}%` }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col lg:flex-row gap-6">

        {/* ── Left: Passage ─────────────────────────────────────────────────── */}
        <div className="lg:w-[55%]">
          {/* Mobile toggle */}
          <button
            onClick={() => setPassageOpen(v => !v)}
            className="lg:hidden w-full flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-semibold text-gray-700 mb-3"
          >
            <span>📄 {passageOpen ? "Hide" : "Show"} Reading Passage</span>
            <span>{passageOpen ? "▲" : "▼"}</span>
          </button>

          <div className={`bg-white border border-gray-200 rounded-2xl p-6 shadow-sm ${passageOpen ? "block" : "hidden lg:block"} lg:sticky lg:top-[72px] lg:max-h-[calc(100vh-100px)] lg:overflow-y-auto`}>
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-medium">{passage.tag}</span>
              <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{passage.level}</span>
              <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">~{passage.wordCount} words</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900 mb-5">{passage.title}</h1>
            {passage.text.split("\n\n").map((para, i) => (
              <p key={i} className="text-gray-700 leading-[1.9] mb-4 last:mb-0 text-[0.94rem]">{para}</p>
            ))}
          </div>
        </div>

        {/* ── Right: Question panel ──────────────────────────────────────────── */}
        <div className="lg:w-[45%] flex flex-col gap-4">

          {/* Navigation dots */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs text-gray-400 mb-2 font-medium">QUESTION NAVIGATION</p>
            <div className="flex flex-wrap gap-2">
              {sessionQs.map((q, i) => {
                const answered = answers[q.id] !== undefined;
                const isCurrent = i === currentIdx;
                return (
                  <button
                    key={q.id}
                    onClick={() => setCurrentIdx(i)}
                    className={`w-9 h-9 rounded-lg text-xs font-bold transition-all border ${
                      isCurrent
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : answered
                        ? "bg-indigo-100 text-indigo-700 border-indigo-200"
                        : "bg-gray-50 text-gray-400 border-gray-200 hover:border-indigo-300"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Current question */}
          {currentQ && (
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-gray-400 font-medium">
                  Question {currentIdx + 1} of {sessionQs.length}
                </span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                  currentQ.type === "mcq" ? "bg-indigo-100 text-indigo-600"
                  : currentQ.type === "tfng" ? "bg-amber-100 text-amber-700"
                  : currentQ.type === "ynng" ? "bg-purple-100 text-purple-700"
                  : currentQ.type === "sentence_completion" ? "bg-teal-100 text-teal-700"
                  : "bg-orange-100 text-orange-700"
                }`}>
                  {currentQ.type === "mcq" ? "Multiple Choice"
                    : currentQ.type === "tfng" ? "True / False / Not Given"
                    : currentQ.type === "ynng" ? "Yes / No / Not Given"
                    : currentQ.type === "sentence_completion" ? "Sentence Completion"
                    : "Short Answer"}
                </span>
              </div>

              <p className="font-semibold text-gray-900 leading-snug mb-4 text-sm">
                {currentQ.type === "sentence_completion" && currentQ.sentenceTemplate
                  ? currentQ.sentenceTemplate
                  : currentQ.q}
              </p>

              {/* MCQ */}
              {currentQ.type === "mcq" && currentQ.shuffledOpts && (
                <div className="space-y-2">
                  {currentQ.shuffledOpts.map(opt => {
                    const chosen = answers[currentQ.id] === opt.label;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => setAnswers(a => ({ ...a, [currentQ.id]: opt.label }))}
                        className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all ${
                          chosen
                            ? "bg-indigo-100 border-indigo-400 text-indigo-800 font-semibold"
                            : "border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
                        }`}
                      >
                        <span className="font-bold mr-2">{opt.label}.</span>{opt.text}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* TFNG / YNNG */}
              {(currentQ.type === "tfng" || currentQ.type === "ynng") && (
                <div className="flex flex-wrap gap-2">
                  {(currentQ.buttonOrder ?? (currentQ.type === "tfng" ? ["TRUE","FALSE","NOT GIVEN"] : ["YES","NO","NOT GIVEN"])).map(opt => {
                    const chosen = answers[currentQ.id] === opt;
                    return (
                      <button
                        key={opt}
                        onClick={() => setAnswers(a => ({ ...a, [currentQ.id]: opt }))}
                        className={`px-5 py-2 rounded-xl border text-sm font-semibold transition-all ${
                          chosen
                            ? "bg-indigo-100 border-indigo-400 text-indigo-800"
                            : "border-gray-200 text-gray-600 hover:border-indigo-300 hover:bg-indigo-50/50"
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Sentence completion / Short answer */}
              {(currentQ.type === "sentence_completion" || currentQ.type === "short_answer") && (
                <div>
                  {currentQ.type === "short_answer" && (
                    <p className="text-xs text-gray-400 mb-2">Write your answer using words from the passage (one word or a short phrase).</p>
                  )}
                  <input
                    type="text"
                    value={answers[currentQ.id] ?? ""}
                    onChange={e => setAnswers(a => ({ ...a, [currentQ.id]: e.target.value }))}
                    placeholder="Type your answer…"
                    className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                  />
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <button
                  onClick={() => setCurrentIdx(i => Math.max(0, i - 1))}
                  disabled={currentIdx === 0}
                  className="text-sm text-gray-500 font-medium hover:text-indigo-600 transition-colors disabled:opacity-30"
                >
                  ← Previous
                </button>
                {currentIdx < sessionQs.length - 1 ? (
                  <button
                    onClick={() => setCurrentIdx(i => i + 1)}
                    className="bg-indigo-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors"
                  >
                    Next →
                  </button>
                ) : (
                  <button
                    onClick={() => handleSubmit(false)}
                    className="bg-green-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-green-700 transition-colors"
                  >
                    Submit All →
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Tip box */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 text-xs text-indigo-700">
            <strong>💡 Tip:</strong> Your progress is saved automatically. Completed questions cycle to a new set on your next visit so you see fresh questions every session.
          </div>
        </div>
      </div>
    </div>
  );
}
