"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import type { QuizQuestion } from "@/types";
import type { EncouragementConfig } from "@/lib/games/types";
import { useBestScore } from "@/lib/games/useBestScore";
import AnswerFeedback from "./AnswerFeedback";
import ShareScore from "@/components/ShareScore";
import { track } from "@/lib/analytics";
import { useAuth } from "@/contexts/AuthContext";
import { saveGameScore, type LeaderboardGameId } from "@/lib/firebaseDB";

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
  /** Optional leaderboard gameId; when set, completed rounds save to Firestore leaderboards */
  leaderboardGameId?: LeaderboardGameId;
  /** Optional category label for session/profile stats */
  leaderboardCategory?: string;
  /** Optional difficulty level for leaderboard points calculation */
  leaderboardDifficulty?: "easy" | "medium" | "hard" | "expert";
  /** Apply Arabic font styles, RTL direction, and larger line-height to question text */
  isArabicQuestion?: boolean;
  /** Custom extra element to render below the question title */
  renderQuestionDetail?: (q: T) => React.ReactNode;
  /** Encouragement and celebration message configuration */
  encouragementConfig?: EncouragementConfig;
  /** Font for an Arabic question (default: the site's Arabic font) */
  questionFontFamily?: string;
  /** Text direction of the answer options, e.g. "rtl" for Urdu (default "ltr") */
  optionsDir?: "ltr" | "rtl";
  /** Font for the answer options (default: the page font) */
  optionFontFamily?: string;
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

function getGameId(name?: string): "word_meanings" | "phrase_upgrade" | "word_upgrade" | null {
  if (!name) return null;
  if (name.includes("Phrase Upgrade")) return "phrase_upgrade";
  if (name.includes("Word Upgrade")) return "word_upgrade";
  if (name.includes("Quran Word")) return "word_meanings";
  return null;
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
  leaderboardGameId,
  leaderboardCategory,
  leaderboardDifficulty = "medium",
  isArabicQuestion = false,
  renderQuestionDetail,
  encouragementConfig,
  questionFontFamily,
  optionsDir = "ltr",
  optionFontFamily,
}: QuizEngineProps<T>) {
  // Best score hook (safe localStorage with try/catch)
  const { bestScore, updateBestScore } = useBestScore(storageKey);
  const { user } = useAuth();
  const hasStartedRef = useRef(false);
  const savedRoundRef = useRef(false);

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
    savedRoundRef.current = false;
  }, [prepareRound]);

  const totalCount = activeQuestions.length;
  const currentItem = activeQuestions[current];
  const isAnswered = selected !== null;

  // Answer selection handler
  const handleSelect = useCallback(
    (i: number) => {
      if (isAnswered || !currentItem) return;

      if (!hasStartedRef.current) {
        hasStartedRef.current = true;
        const gameId = getGameId(gameName);
        if (gameId) {
          track("game_start", { game: gameId });
        }
      }

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
    [isAnswered, currentItem, answers, current, gameName]
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

      // Save to Firestore leaderboard when configured and signed in
      if (leaderboardGameId && user && !savedRoundRef.current) {
        savedRoundRef.current = true;
        saveGameScore({
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
          gameId: leaderboardGameId,
          gameName: gameName || leaderboardGameId,
          category: leaderboardCategory || leaderboardGameId,
          difficulty: leaderboardDifficulty,
          correct: finalScore,
          total: totalCount,
          streak,
        }).catch((e) => console.error("saveGameScore failed", e));
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
  }, [
    current,
    totalCount,
    answers,
    activeQuestions,
    storageKey,
    updateBestScore,
    leaderboardGameId,
    leaderboardCategory,
    leaderboardDifficulty,
    user,
    gameName,
    streak,
  ]);

  // Restart round (re-samples and re-shuffles)
  const handleRestart = useCallback(() => {
    const round = prepareRound();
    setActiveQuestions(round);
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(round.length).fill(null));
    setFinished(false);
    setStreak(0);
    hasStartedRef.current = true;
    savedRoundRef.current = false;

    const gameId = getGameId(gameName);
    if (gameId) {
      track("game_start", { game: gameId });
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
      <div className="efe-card shadow-sm p-8 text-center text-efe-muted">
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
      <div className="efe-card shadow-sm p-6 sm:p-8 text-center game-end-screen">
        {/* Trophy icon / Celebration */}
        <div className="text-6xl mb-3" aria-hidden="true">
          {score === totalCount ? "🏆" : score >= totalCount / 2 ? "🎉" : "📚"}
        </div>

        <h2 className="text-3xl font-black text-efe-fg font-display mb-1">Round Complete!</h2>
        <p className="text-xl text-efe-muted mb-2">
          You scored <span className="font-extrabold text-efe-accent">{score}/{totalCount}</span>
        </p>

        {/* Best Score Pill */}
        {storageKey && (
          <div className="inline-flex items-center gap-1.5 bg-efe-accent-soft border border-efe-line text-efe-accent-ink text-xs font-bold px-3 py-1 rounded-full mb-4">
            <span>⭐ Personal Best:</span>
            <span>{Math.max(bestScore, score)}/{totalCount}</span>
          </div>
        )}

        {/* Dynamic Encouragement Feedback */}
        <p className="text-sm text-efe-muted max-w-md mx-auto mb-8 leading-relaxed">
          {scoreMessage}
        </p>

        {/* Review Mistakes Section */}
        {wrongQuestions.length > 0 && (
          <div className="text-left mb-8">
            <div className="flex items-center justify-between mb-3 border-b border-efe-line pb-2">
              <h3 className="text-sm font-bold text-efe-fg uppercase tracking-wider">
                Review Questions to Practice ({wrongQuestions.length})
              </h3>
              <span className="text-xs text-efe-muted">Correct answers highlighted</span>
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
                        <span dir="auto">{q.options[userAns]}</span>
                      </p>
                    )}
                    <p className="text-green-800 flex items-center gap-1.5 font-bold">
                      <span>✓ Correct replacement:</span>
                      <span dir="auto">{q.options[q.correct]}</span>
                    </p>
                  </div>
                  {q.explanation && (
                    <p dir="auto" className="text-xs text-gray-600 mt-2 pt-2 border-t border-red-100">
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
            className="w-full sm:w-auto efe-btn efe-btn-primary px-8 py-3.5"
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
    <div className="efe-card shadow-sm overflow-hidden">
      {/* Progress Bar */}
      <div className="h-1.5 bg-efe-bg">
        <div
          className="h-full bg-efe-accent transition-all duration-300"
          style={{ width: `${((current + 1) / totalCount) * 100}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        {/* Top Header: Progress & Optional Score */}
        <div className="flex justify-between items-center text-xs font-semibold text-efe-muted mb-6">
          <span>
            Question {current + 1} of {totalCount}
            {showScoreCounter && (
              <span className="text-efe-accent-ink ml-2 font-bold">
                • Score: {score}
              </span>
            )}
          </span>

          {enableKeyboard && (
            <span className="hidden sm:inline-block text-[11px] text-efe-muted">
              Keys <kbd className="px-1.5 py-0.5 bg-efe-bg border border-efe-line rounded text-efe-fg font-mono">1-4</kbd> to choose,{" "}
              <kbd className="px-1.5 py-0.5 bg-efe-bg border border-efe-line rounded text-efe-fg font-mono">Enter</kbd> for Next
            </span>
          )}
        </div>

        {/* Question Heading */}
        <h2
          className={
            isArabicQuestion
              ? "text-3xl font-arabic text-efe-fg mb-4"
              : "text-xl font-bold text-efe-fg mb-6"
          }
          dir={isArabicQuestion ? "rtl" : "ltr"}
          style={
            isArabicQuestion
              ? {
                  direction: "rtl",
                  fontFamily: questionFontFamily ?? "var(--font-arabic), 'Amiri', serif",
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
              "bg-efe-bg border-efe-line text-efe-fg hover:border-efe-accent hover:bg-efe-accent-soft/50";
            if (isAnswered) {
              if (i === currentItem.correct) {
                style = "bg-green-50 border-green-400 text-green-800";
              } else if (i === selected) {
                style = "bg-red-50 border-red-400 text-red-800";
              } else {
                style = "bg-efe-bg border-efe-line text-efe-muted opacity-60";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                disabled={isAnswered}
                dir={optionsDir}
                className={`w-full ${optionsDir === "rtl" ? "text-right" : "text-left"} p-4 rounded-xl border-2 transition-all font-medium flex items-center justify-between ${style}`}
              >
                <div className="flex items-center gap-3">
                  <span dir="ltr" className="font-mono font-bold text-sm text-efe-muted w-5">
                    {String.fromCharCode(65 + i)}.
                  </span>
                  <span className="text-base" style={optionFontFamily ? { fontFamily: optionFontFamily, lineHeight: 1.9 } : undefined}>{opt}</span>
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
          className="w-full efe-btn efe-btn-primary py-3.5 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {current < totalCount - 1 ? "Next Question →" : "See Results →"}
        </button>
      </div>
    </div>
  );
}
