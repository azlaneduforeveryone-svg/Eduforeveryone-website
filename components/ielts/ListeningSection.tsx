"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { ListeningTest, ListeningSection as LSType, rawToBand } from "@/lib/ielts-types";

interface Props {
  test: ListeningTest;
  onComplete: (band: number) => void;
}

export default function ListeningSection({ test, onComplete }: Props) {
  const [sectionIdx, setSectionIdx] = useState(0);
  const [hasPlayed, setHasPlayed] = useState<boolean[]>([false, false, false, false]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [phase, setPhase] = useState<"pre" | "playing" | "answering" | "done">("pre");
  const [submitted, setSubmitted] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const section: LSType = test.sections[sectionIdx];

  const stopSpeech = useCallback(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsPlaying(false);
  }, []);

  useEffect(() => {
    return () => stopSpeech();
  }, [stopSpeech]);

  function playSection() {
    if (hasPlayed[sectionIdx]) return;
    const updated = [...hasPlayed];
    updated[sectionIdx] = true;
    setHasPlayed(updated);
    setPhase("playing");

    if (typeof window !== "undefined" && window.speechSynthesis) {
      const utter = new SpeechSynthesisUtterance(section.script.trim());
      utter.rate = 0.9;
      utter.lang = "en-GB";
      utter.onend = () => {
        setIsPlaying(false);
        setPhase("answering");
      };
      utteranceRef.current = utter;
      setIsPlaying(true);
      window.speechSynthesis.speak(utter);
    } else {
      // Fallback: no TTS — show script as text
      setPhase("answering");
    }
  }

  function setAnswer(qId: number, value: string) {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  }

  function nextSection() {
    stopSpeech();
    if (sectionIdx < 3) {
      setSectionIdx((i) => i + 1);
      setPhase("pre");
    } else {
      setSubmitted(true);
    }
  }

  function handleSubmit() {
    stopSpeech();
    // Score all questions
    let correct = 0;
    test.sections.forEach((sec) => {
      sec.questions.forEach((q) => {
        const userAns = (answers[q.id] ?? "").trim().toLowerCase();
        const correct_ans = q.answer.trim().toLowerCase();
        if (q.type === "mcq") {
          if (userAns === correct_ans) correct++;
        } else {
          if (userAns === correct_ans) correct++;
        }
      });
    });
    onComplete(rawToBand(correct));
  }

  // Review all answers before final submit
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <h2 className="text-2xl font-bold text-gray-800">Review Your Answers</h2>
        {test.sections.map((sec) => (
          <div key={sec.sectionNumber} className="space-y-3">
            <h3 className="font-semibold text-gray-700 border-b pb-1">{sec.title}</h3>
            {sec.questions.map((q) => (
              <div key={q.id} className="text-sm flex gap-4">
                <span className="text-gray-500 w-6">Q{q.id}</span>
                <span className="flex-1 text-gray-700">{q.q}</span>
                <span className="font-medium text-gray-900 w-24 text-right">
                  {answers[q.id] ?? "—"}
                </span>
              </div>
            ))}
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Listening
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      {/* Progress */}
      <div className="flex items-center gap-2">
        {test.sections.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i < sectionIdx
                ? "bg-green-500"
                : i === sectionIdx
                ? "bg-blue-500"
                : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      <div>
        <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
        <p className="text-sm text-gray-500 mt-1">{section.context}</p>
      </div>

      {/* Play button */}
      {phase === "pre" && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-center space-y-3">
          <p className="text-sm text-blue-800 font-medium">
            ⚠ The audio plays once only. Prepare before clicking Play.
          </p>
          <p className="text-xs text-blue-600">{section.instructions}</p>
          <button
            onClick={playSection}
            className="mt-2 px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            ▶ Play Section {section.sectionNumber}
          </button>
        </div>
      )}

      {phase === "playing" && (
        <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 text-center space-y-2">
          <div className="flex items-center justify-center gap-2 text-amber-700 font-semibold">
            <span className="animate-pulse">🔊</span> Audio playing — listen carefully
          </div>
          <p className="text-xs text-amber-600">Questions will appear when the audio ends.</p>
        </div>
      )}

      {/* Questions */}
      {phase === "answering" && (
        <div className="space-y-5">
          <p className="text-sm font-medium text-gray-600 border-b pb-2">{section.instructions}</p>
          {section.questions.map((q) => (
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
                        name={`q-${q.id}`}
                        value={opt[0]}
                        checked={answers[q.id] === opt[0]}
                        onChange={() => setAnswer(q.id, opt[0])}
                        className="accent-blue-600"
                      />
                      {opt}
                    </label>
                  ))}
                </div>
              ) : (
                <div className="pl-9">
                  <input
                    type="text"
                    value={answers[q.id] ?? ""}
                    onChange={(e) => setAnswer(q.id, e.target.value)}
                    placeholder="Your answer"
                    className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                  />
                </div>
              )}
            </div>
          ))}

          <button
            onClick={nextSection}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition mt-4"
          >
            {sectionIdx < 3 ? `Next: Section ${sectionIdx + 2} →` : "Finish Listening →"}
          </button>
        </div>
      )}
    </div>
  );
}
