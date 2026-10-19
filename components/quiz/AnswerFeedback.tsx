"use client";

import React, { useMemo } from "react";
import type { EncouragementConfig } from "@/lib/games/types";

interface AnswerFeedbackProps {
  isCorrect: boolean;
  selectedOptionText: string;
  correctOptionText: string;
  explanation: string;
  streak: number;
  config?: EncouragementConfig;
}

export default function AnswerFeedback({
  isCorrect,
  explanation,
  streak,
  config,
}: AnswerFeedbackProps) {
  // Select a deterministic or random message from the provided list
  const randomWrongMsg = useMemo(() => {
    if (!config || !config.wrongMessages || config.wrongMessages.length === 0) {
      return "Mistakes are proof that you are learning! Try the next one.";
    }
    const idx = Math.floor(Math.random() * config.wrongMessages.length);
    return config.wrongMessages[idx];
  }, [config]);

  const isQuranStyle = config?.style === "geometric";

  return (
    <div className="mb-6 space-y-3">
      {/* Primary Result Banner */}
      <div
        className={`p-4 rounded-xl border-2 transition-all ${
          isCorrect
            ? "bg-green-50 border-green-300 text-green-900 game-feedback-correct"
            : "bg-amber-50 border-amber-300 text-amber-900 game-feedback-wrong"
        }`}
      >
        <div className="flex items-center justify-between mb-1.5">
          <p className="font-bold text-base flex items-center gap-2">
            <span>{isCorrect ? "✅" : "❌"}</span>
            <span>{isCorrect ? "Correct!" : "Incorrect"}</span>
          </p>

          {/* Streak Milestone Badge */}
          {isCorrect && streak >= 3 && (
            <span
              className={`text-xs font-black px-2.5 py-1 rounded-full border shadow-sm game-streak-badge ${
                isQuranStyle
                  ? "bg-amber-100 text-amber-900 border-amber-300"
                  : "bg-indigo-100 text-indigo-900 border-indigo-300"
              }`}
            >
              {streak >= 5 ? "🔥 5 In a Row!" : "⚡ 3 In a Row!"}
            </span>
          )}
        </div>

        {/* Educational Explanation */}
        <p className="text-sm leading-relaxed text-gray-700 mt-1">
          {explanation}
        </p>
      </div>

      {/* Encouragement Notice for Mistakes (Never covers or delays button) */}
      {!isCorrect && config && (
        <div className="bg-white border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 shadow-sm game-encouragement-card">
          <span className="text-xl flex-shrink-0" aria-hidden="true">
            {isQuranStyle ? "✨" : "💡"}
          </span>
          <div>
            <p className="text-xs font-bold text-gray-800 uppercase tracking-wider mb-0.5">
              Keep Going
            </p>
            <p className="text-xs text-gray-600 leading-normal">
              {randomWrongMsg}
            </p>
          </div>
        </div>
      )}

      {/* Streak 3/5 Announcement Message */}
      {isCorrect && streak === 3 && config?.streak3Message && (
        <div className="bg-indigo-50/80 border border-indigo-200 rounded-xl p-3 text-xs text-indigo-900 flex items-center gap-2 game-streak-announcement">
          <span className="text-base" aria-hidden="true">
            {isQuranStyle ? "🌙" : "🌟"}
          </span>
          <p className="font-medium">{config.streak3Message}</p>
        </div>
      )}

      {isCorrect && streak >= 5 && config?.streak5Message && (
        <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 flex items-center gap-2 game-streak-announcement">
          <span className="text-base" aria-hidden="true">
            {isQuranStyle ? "⭐" : "🎯"}
          </span>
          <p className="font-medium">{config.streak5Message}</p>
        </div>
      )}
    </div>
  );
}
