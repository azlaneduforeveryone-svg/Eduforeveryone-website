"use client";
import { useState, useEffect, useRef } from "react";
import { SpeakingTest } from "@/lib/ielts-types";

interface Props {
  test: SpeakingTest;
  onComplete: (band: number) => void;
}

type SpeakingPhase =
  | "intro"
  | "part1"
  | "part2_prep"
  | "part2_talk"
  | "part3"
  | "assess";

const BAND_OPTIONS = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

const SPEAKING_CRITERIA = [
  {
    key: "fc",
    label: "Fluency & Coherence",
    desc: "Did you speak at a natural pace with minimal hesitation and clear logical flow?",
  },
  {
    key: "lr",
    label: "Lexical Resource",
    desc: "Did you use a wide range of vocabulary precisely and naturally?",
  },
  {
    key: "gr",
    label: "Grammatical Range & Accuracy",
    desc: "Did you use varied grammatical structures with only minor errors?",
  },
  {
    key: "pr",
    label: "Pronunciation",
    desc: "Was your pronunciation clear and natural, easy for a listener to understand?",
  },
];

function formatTime(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

export default function SpeakingSection({ test, onComplete }: Props) {
  const [phase, setPhase] = useState<SpeakingPhase>("intro");
  const [timeLeft, setTimeLeft] = useState(0);
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer(seconds: number, onEnd: () => void) {
    clearInterval(timerRef.current!);
    setTimeLeft(seconds);
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          onEnd();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  }

  useEffect(() => () => clearInterval(timerRef.current!), []);

  function startPart1() {
    setPhase("part1");
    startTimer(5 * 60, () => setPhase("part2_prep"));
  }

  function startPart2Prep() {
    setPhase("part2_prep");
    startTimer(60, () => setPhase("part2_talk"));
  }

  function startPart2Talk() {
    setPhase("part2_talk");
    startTimer(2 * 60, () => setPhase("part3"));
  }

  function startPart3() {
    setPhase("part3");
    startTimer(5 * 60, () => setPhase("assess"));
  }

  function submitAssessment() {
    if (Object.keys(ratings).length < 4) return;
    const avg = Object.values(ratings).reduce((a, b) => a + b, 0) / 4;
    onComplete(Math.round(avg * 2) / 2);
  }

  // ── Intro screen ───────────────────────────────────────────
  if (phase === "intro") {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Speaking Test</h2>
          <p className="text-sm text-gray-500 mt-1">
            Approximately 11–14 minutes total. Three parts.
          </p>
        </div>

        <div className="space-y-3">
          {[
            { part: "Part 1", title: "Introduction & Interview", time: "4–5 minutes", desc: "Answer questions about yourself and familiar topics." },
            { part: "Part 2", title: "Individual Long Turn", time: "1 min prep + 2 min talk", desc: "Speak about a topic from a cue card." },
            { part: "Part 3", title: "Two-Way Discussion", time: "4–5 minutes", desc: "Discuss abstract ideas related to your Part 2 topic." },
          ].map((p) => (
            <div key={p.part} className="bg-gray-50 rounded-xl p-4 flex gap-4">
              <div className="w-16 text-center">
                <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded-full">{p.part}</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">{p.title} <span className="text-gray-400 font-normal">({p.time})</span></p>
                <p className="text-xs text-gray-500 mt-0.5">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
          <strong>Note:</strong> Speak your answers aloud. You will self-assess at the end of all three parts.
        </div>

        <button
          onClick={startPart1}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Begin Part 1 →
        </button>
      </div>
    );
  }

  // ── Part 1 ─────────────────────────────────────────────────
  if (phase === "part1") {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-5">
        <SpeakingHeader
          part="Part 1"
          title={`Introduction: ${test.part1Topic}`}
          timeLeft={timeLeft}
          onSkip={() => { clearInterval(timerRef.current!); startPart2Prep(); }}
          skipLabel="Proceed to Part 2"
        />
        <p className="text-xs text-gray-400">Answer each question aloud, 30–45 seconds each.</p>
        <div className="space-y-3">
          {test.part1Questions.map((q, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-4 text-sm text-gray-800">
              <span className="text-blue-500 font-bold mr-2">{i + 1}.</span>{q}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Part 2 prep ─────────────────────────────────────────────
  if (phase === "part2_prep") {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-5">
        <SpeakingHeader
          part="Part 2 — Preparation"
          title="Read the cue card. Make notes."
          timeLeft={timeLeft}
          onSkip={startPart2Talk}
          skipLabel="Start speaking now"
        />
        <div className="bg-white border-2 border-blue-300 rounded-2xl p-6 space-y-4 shadow-sm">
          <p className="font-semibold text-gray-800">{test.part2.topic}</p>
          <p className="text-xs text-gray-500 uppercase tracking-wider font-medium">You should say:</p>
          <ul className="space-y-2">
            {test.part2.points.map((pt, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-700">
                <span className="text-blue-500">•</span> {pt}
              </li>
            ))}
          </ul>
          <div className="border-t pt-3">
            <p className="text-sm text-gray-700 italic">{test.part2.followUp}</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-3">
          <p className="text-xs text-gray-500">Use this space for notes (mental or on paper):</p>
        </div>
      </div>
    );
  }

  // ── Part 2 talk ─────────────────────────────────────────────
  if (phase === "part2_talk") {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-5">
        <SpeakingHeader
          part="Part 2 — Speaking"
          title="Speak for 1–2 minutes on the cue card topic"
          timeLeft={timeLeft}
          onSkip={() => { clearInterval(timerRef.current!); startPart3(); }}
          skipLabel="Proceed to Part 3"
        />
        <div className="bg-white border-2 border-blue-300 rounded-2xl p-6 space-y-3 opacity-80">
          <p className="font-semibold text-gray-800 text-sm">{test.part2.topic}</p>
          <ul className="space-y-1">
            {test.part2.points.map((pt, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-600"><span>•</span>{pt}</li>
            ))}
          </ul>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
          <p className="text-amber-700 font-medium text-sm">🎙 Speak now</p>
          <p className="text-amber-600 text-xs mt-1">Timer will stop automatically at 2 minutes.</p>
        </div>
      </div>
    );
  }

  // ── Part 3 ─────────────────────────────────────────────────
  if (phase === "part3") {
    return (
      <div className="max-w-2xl mx-auto p-6 space-y-5">
        <SpeakingHeader
          part="Part 3"
          title="Two-Way Discussion"
          timeLeft={timeLeft}
          onSkip={() => { clearInterval(timerRef.current!); setPhase("assess"); }}
          skipLabel="Finish Speaking"
        />
        <p className="text-xs text-gray-400">Answer each question in depth — aim for 30–60 seconds each.</p>
        <div className="space-y-3">
          {test.part3Questions.map((q, i) => (
            <div key={i} className="bg-purple-50 rounded-xl p-4 text-sm text-gray-800">
              <span className="text-purple-500 font-bold mr-2">{i + 1}.</span>{q}
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── Self-assessment ─────────────────────────────────────────
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Speaking Self-Assessment</h2>
        <p className="text-sm text-gray-500 mt-1">Rate your overall performance across all three parts.</p>
      </div>

      <div className="border rounded-xl p-5 space-y-5">
        {SPEAKING_CRITERIA.map((c) => (
          <div key={c.key} className="space-y-2">
            <div>
              <p className="text-sm font-medium text-gray-700">{c.label}</p>
              <p className="text-xs text-gray-400">{c.desc}</p>
            </div>
            <div className="flex gap-2 flex-wrap">
              {BAND_OPTIONS.map((b) => (
                <button
                  key={b}
                  onClick={() => setRatings((prev) => ({ ...prev, [c.key]: b }))}
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

      <button
        onClick={submitAssessment}
        disabled={Object.keys(ratings).length < 4}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Submit Speaking Score
      </button>
    </div>
  );
}

// ── Shared header ─────────────────────────────────────────────

function SpeakingHeader({
  part,
  title,
  timeLeft,
  onSkip,
  skipLabel,
}: {
  part: string;
  title: string;
  timeLeft: number;
  onSkip: () => void;
  skipLabel: string;
}) {
  const urgent = timeLeft < 60;
  return (
    <div className="flex items-center justify-between bg-white border rounded-xl px-5 py-3">
      <div>
        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">{part}</span>
        <p className="font-semibold text-gray-800 text-sm mt-0.5">{title}</p>
      </div>
      <div className="flex items-center gap-3">
        <span className={`font-mono text-lg font-bold ${urgent ? "text-red-600 animate-pulse" : "text-gray-700"}`}>
          ⏱ {formatTime(timeLeft)}
        </span>
        <button
          onClick={onSkip}
          className="px-3 py-1.5 text-xs bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition"
        >
          {skipLabel} →
        </button>
      </div>
    </div>
  );
}
