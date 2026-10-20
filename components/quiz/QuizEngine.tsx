"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import type { QuizQuestion } from "@/types";
import type { EncouragementConfig } from "@/lib/games/types";
import { useBestScore } from "@/lib/games/useBestScore";
import AnswerFeedback from "./AnswerFeedback";
import ShareScore from "@/components/ShareScore";

export interface QuizEngineProps<T extends QuizQuestion = QuizQuestion> {
  questions: T[];
  /** Number of random questions to draw per session (e.g. 10) */
  sampleCount?: number;
  /** Whether to randomize option order per question each session */
  shuffleOptions?: boolean;
  /** Show live score counter alongside progress */
  showScoreCounter?: boolean;
  /** Enable keyboard shortcuts: 1-4 to select, Enter for Next (disabled on end screen) */
  enableKeyboard?: boolean;
  /** Storage key for persisting personal best score in localStorage */
  storageKey?: string;
  /** Game name for ShareScore card and GA4 tracking */
  gameName?: string;
  /** Game emoji for ShareScore card */
  gameEmoji?: string;
  /** Game URL for ShareScore link (e.g. /ielts/word-upgrade) */
  gameUrl?: string;
  /** Apply Arabic font styles, RTL direction, and larger line-height to question text */
  isArabicQuestion?: boolean;
  /** Custom extra element to render below the question title */
  renderQuestionDetail?: (q: T) => React.ReactNode;
  /** Encouragement and celebration message configuration */
  encouragementConfig?: EncouragementConfig;
}

interface PreparedQuestion<T extends QuizQuestion> {
  original: T;
  questionText: string;
  options: string[];
  correct: number;
  explanation: string;
}

/**
 * Fisher-Yates array shuffle.
 */
function shuffleArray<K>(array: K[]): K[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function QuizEngine<T extends QuizQuestion = QuizQuestion>({
  questions,
  sampleCount,
  shuffleOptions = false,
  showScoreCounter = false,
  enableKeyboard = false,
  storageKey,
  gameName,
  gameEmoji = "🎯",
  gameUrl,
  isArabicQuestion = false,
  renderQuestionDetail,
  encouragementConfig,
}: QuizEngineProps<T>) {
  // Best score hook (safe localStorage with try/catch)
  const { bestScore, updateBestScore } = useBestScore(storageKey);

  // Round preparation: sample questions & optionally shuffle options
  const prepareRound = useCallback((): PreparedQuestion<T>[] => {
    if (!questions || questions.length === 0) return [];

    let pool = [...questions];
    if (sampleCount && sampleCount > 0 && pool.length > sampleCount) {
      pool = shuffleArray(pool).slice(0, sampleCount);
    }

    return pool.map((q) => {
      if (!shuffleOptions) {
        return {
          original: q,
          questionText: q.question,
          options: q.options,
          correct: q.correct,
          explanation: q.explanation,
        };
      }

      // Permute options and update the correct index accordingly
      const originalOptions = q.options;
      const originalCorrect = q.correct;
      const indices = originalOptions.map((_, i) => i);
      const permutedIndices = shuffleArray(indices);

      const newOptions = permutedIndices.map((origIdx) => originalOptions[origIdx]);
      const newCorrect = permutedIndices.indexOf(originalCorrect);

      return {
        original: q,
        questionText: q.question,
        options: newOptions,
        correct: newCorrect,
        explanation: q.explanation,
      };
    });
  }, [questions, sampleCount, shuffleOptions]);

  // Round state
  const [activeQuestions, setActiveQuestions] = useState<PreparedQuestion<T>[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [finished, setFinished] = useState(false);
  const [streak, setStreak] = useState(0);

  // Initialize round on mount or when questions change
  useEffect(() => {
    const round = prepareRound();
    setActiveQuestions(round);
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(round.length).fill(null));
    setFinished(false);
    setStreak(0);

    // Track GA4 game_start
    if (
      gameName &&
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function" &&
      process.env.NODE_ENV === "production"
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "game_start", {
        game_name: gameName,
      });
    }
  }, [prepareRound, gameName]);

  const totalCount = activeQuestions.length;
  const currentItem = activeQuestions[current];
  const isAnswered = selected !== null;

  // Answer selection handler
  const handleSelect = useCallback(
    (i: number) => {
      if (isAnswered || !currentItem) return;
      setSelected(i);
      const updated = [...answers];
      updated[current] = i;
      setAnswers(updated);

      if (i === currentItem.correct) {
        setStreak((prev) => prev + 1);
      } else {
        setStreak(0);
      }
    },
    [isAnswered, currentItem, answers, current]
  );

  // Advance to next question or complete game
  const handleNext = useCallback(() => {
    if (current < totalCount - 1) {
      setCurrent((c) => c + 1);
      setSelected(answers[current + 1]);
    } else {
      setFinished(true);

      // Calculate final score
      const finalScore = answers.reduce<number>((acc, ans, idx) => {
        return ans === activeQuestions[idx]?.correct ? acc + 1 : acc;
      }, 0);

      // Update best score
      if (storageKey) {
        updateBestScore(finalScore);
      }

      // Track GA4 game_finish
      if (
        gameName &&
        typeof window !== "undefined" &&
        typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function" &&
        process.env.NODE_ENV === "production"
      ) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "game_finish", {
          game_name: gameName,
          score: finalScore,
          total: totalCount,
        });
      }
    }
  }, [current, totalCount, answers, activeQuestions, storageKey, updateBestScore, gameName]);

  // Restart round (re-samples and re-shuffles)
  const handleRestart = useCallback(() => {
    const round = prepareRound();
    setActiveQuestions(round);
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(round.length).fill(null));
    setFinished(false);
    setStreak(0);

    if (
      gameName &&
      typeof window !== "undefined" &&
      typeof (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag === "function" &&
      process.env.NODE_ENV === "production"
    ) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag("event", "game_start", {
        game_name: gameName,
      });
    }
  }, [prepareRound, gameName]);

  // Keyboard navigation listener (active only when enableKeyboard is true)
  useEffect(() => {
    if (!enableKeyboard) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Do NOT handle keyboard shortcuts on the end screen (Play Again must be clicked/tapped)
      if (finished) return;

      // Number keys 1-4 for option selection
      if (!isAnswered && ["1", "2", "3", "4"].includes(e.key)) {
        const idx = parseInt(e.key, 10) - 1;
        if (currentItem && idx < currentItem.options.length) {
          e.preventDefault();
          handleSelect(idx);
        }
      }

      // Enter key for Next question when answered
      if (isAnswered && e.key === "Enter") {
        e.preventDefault();
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enableKeyboard, finished, isAnswered, currentItem, handleSelect, handleNext]);

  // Handle empty or loading state
  if (totalCount === 0 || !currentItem) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center text-gray-500">
        Loading questions...
      </div>
    );
  }

  // Calculate live and final score
  const score = answers.reduce<number>((acc, ans, idx) => {
    return ans === activeQuestions[idx]?.correct ? acc + 1 : acc;
  }, 0);

  // ───────────────────────────────────────────────────────────────────────────
  // FINISHED / END SCREEN
  // ───────────────────────────────────────────────────────────────────────────
  if (finished) {
    const percent = Math.round((score / totalCount) * 100);
    const wrongQuestions = activeQuestions
      .map((q, idx) => ({ q, userAns: answers[idx] }))
      .filter(({ q, userAns }) => userAns !== q.correct);

    // Score encouragement message
    let scoreMessage = "Great effort! Practise regularly to sharpen your knowledge.";
    if (encouragementConfig) {
      if (percent >= 80) {
        scoreMessage = encouragementConfig.highScoreMessage;
      } else if (percent >= 50) {
        scoreMessage = encouragementConfig.mediumScoreMessage;
      } else {
        scoreMessage = encouragementConfig.lowScoreMessage;
      }
    }

    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 text-center game-end-screen">
        {/* Trophy icon / Celebration */}
        <div className="text-6xl mb-3" aria-hidden="true">
          {score === totalCount ? "🏆" : score >= totalCount / 2 ? "🎉" : "📚"}
        </div>

        <h2 className="text-3xl font-black text-gray-900 mb-1">Round Complete!</h2>
        <p className="text-xl text-gray-600 mb-2">
          You scored <span className="font-extrabold text-teal-600">{score}/{totalCount}</span>
        </p>

        {/* Best Score Pill */}
        {storageKey && (
          <div className="inline-flex items-center gap-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold px-3 py-1 rounded-full mb-4">
            <span>⭐ Personal Best:</span>
            <span>{Math.max(bestScore, score)}/{totalCount}</span>
          </div>
        )}

        {/* Dynamic Encouragement Feedback */}
        <p className="text-sm text-gray-500 max-w-md mx-auto mb-8 leading-relaxed">
          {scoreMessage}
        </p>

        {/* Review Mistakes Section */}
        {wrongQuestions.length > 0 && (
          <div className="text-left mb-8">
            <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
              <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider">
                Review Questions to Practice ({wrongQuestions.length})
              </h3>
              <span className="text-xs text-gray-400">Correct answers highlighted</span>
            </div>

            <div className="space-y-3">
              {wrongQuestions.map(({ q, userAns }) => (
                <div
                  key={q.original.id}
                  className="p-4 rounded-xl border border-red-200 bg-red-50/50 text-sm"
                >
                  <p className="font-bold text-gray-900 mb-2">{q.questionText}</p>
                  <div className="space-y-1 text-xs">
                    {userAns !== null && (
                      <p className="text-red-700 flex items-center gap-1.5 font-medium">
                        <span>❌ Your answer:</span>
                        <span>{q.options[userAns]}</span>
                      </p>
                    )}
                    <p className="text-green-800 flex items-center gap-1.5 font-bold">
                      <span>✓ Correct replacement:</span>
                      <span>{q.options[q.correct]}</span>
                    </p>
                  </div>
                  {q.explanation && (
                    <p className="text-xs text-gray-600 mt-2 pt-2 border-t border-red-100">
                      💡 {q.explanation}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Actions: Play Again (strictly click/tap only) */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <button
            onClick={handleRestart}
            className="w-full sm:w-auto bg-teal-600 text-white font-bold px-8 py-3.5 rounded-xl hover:bg-teal-700 active:scale-95 transition-all shadow-sm"
          >
            🔄 Play Again
          </button>
        </div>

        {/* ShareScore Integration */}
        {gameName && gameUrl && (
          <div className="max-w-md mx-auto mt-6 text-left">
            <ShareScore
              score={score}
              gameName={gameName}
              gameEmoji={gameEmoji}
              detail={`${score}/${totalCount} correct`}
              gameUrl={gameUrl}
            />
          </div>
        )}
      </div>
    );
  }

  // ───────────────────────────────────────────────────────────────────────────
  // ACTIVE QUESTION SCREEN
  // ───────────────────────────────────────────────────────────────────────────
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Progress Bar */}
      <div className="h-1.5 bg-gray-100">
        <div
          className="h-full bg-teal-500 transition-all duration-300"
          style={{ width: `${((current + 1) / totalCount) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Top Header: Progress & Optional Score */}
        <div className="flex justify-between items-center text-xs font-semibold text-gray-400 mb-6">
          <span>
            Question {current + 1} of {totalCount}
            {showScoreCounter && (
              <span className="text-teal-700 ml-2 font-bold">
                • Score: {score}
              </span>
            )}
          </span>

          {enableKeyboard && (
            <span className="hidden sm:inline-block text-[11px] text-gray-400">
              Keys <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 font-mono">1-4</kbd> to choose,{" "}
              <kbd className="px-1.5 py-0.5 bg-gray-100 rounded text-gray-600 font-mono">Enter</kbd> for Next
            </span>
          )}
        </div>

        {/* Question Heading */}
        <h2
          className={
            isArabicQuestion
              ? "text-3xl font-arabic text-gray-900 mb-4"
              : "text-xl font-bold text-gray-900 mb-6"
          }
          dir={isArabicQuestion ? "rtl" : "ltr"}
          style={
            isArabicQuestion
              ? {
                  direction: "rtl",
                  fontFamily: "var(--font-arabic), 'Amiri', serif",
                  lineHeight: "2.2",
                }
              : undefined
          }
        >
          {currentItem.questionText}
        </h2>

        {/* Custom Question Detail Component (if provided) */}
        {renderQuestionDetail && (
          <div className="mb-6">{renderQuestionDetail(currentItem.original)}</div>
        )}

        {/* 4 Option Buttons */}
        <div className="space-y-3 mb-6" role="radiogroup">
          {currentItem.options.map((opt, i) => {
            let style =
              "bg-gray-50 border-gray-200 text-gray-700 hover:border-teal-300 hover:bg-teal-50/50";
            if (isAnswered) {
              if (i === currentItem.correct) {
                style = "bg-green-50 border-green-400 text-green-800";
              } else if (i === selected) {
                style = "bg-red-50 border-red-400 text-red-800";
              } else {
                style = "bg-gray-50 border-gray-200 text-gray-400 opacity-60";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={isAnswered}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium flex items-center justify-between ${style}`}
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono font-bold text-sm text-gray-400 w-5">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span className="text-base">{opt}</span>
                </div>

                {isAnswered && (
                  <span className="text-base ml-2 flex-shrink-0 font-bold">
                    {i === currentItem.correct
                      ? "✓"
                      : i === selected
                      ? "✗"
                      : ""}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Separate Answer Feedback Component (Encouragement & Streaks) */}
        {isAnswered && (
          <AnswerFeedback
            isCorrect={selected === currentItem.correct}
            selectedOptionText={selected !== null ? currentItem.options[selected] : ""}
            correctOptionText={currentItem.options[currentItem.correct]}
            explanation={currentItem.explanation}
            streak={streak}
            config={encouragementConfig}
            gameName={gameName}
            itemId={currentItem.original.id}
            questionText={currentItem.questionText}
          />
        )}

        {/* Next Question / See Results Button */}
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className="w-full bg-teal-600 text-white font-bold py-3.5 rounded-xl hover:bg-teal-700 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-sm"
        >
          {current < totalCount - 1 ? "Next Question →" : "See Results →"}
        </button>
      </div>
    </div>
  );
}
