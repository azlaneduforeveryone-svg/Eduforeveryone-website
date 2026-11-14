"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { useAuth } from "@/contexts/AuthContext";
import type { AccountingMcq } from "@/lib/courses/oLevelAccountingMcqs";
import {
  type AccountingTopicMeta,
  drawQuizFromPool,
} from "@/lib/courses/accountingSyllabus";
import {
  type TopicProgress,
  DEFAULT_TOPIC_PROGRESS,
  computeTopicStatus,
  getLocalTopicProgress,
  saveLocalTopicProgress,
  getFirestoreTopicProgress,
  saveFirestoreTopicProgress,
  shouldShowSaveProgressPrompt,
  markSaveProgressPromptShown,
} from "@/lib/courses/accountingProgress";
import YouTubeWatchedPlayer from "@/components/courses/YouTubeWatchedPlayer";
import SaveProgressPrompt from "@/components/courses/SaveProgressPrompt";
import NotesContent from "@/components/courses/NotesContent";
import Flashcards from "@/components/courses/Flashcards";
import MindMap from "@/components/courses/MindMap";
import AiTutor from "@/components/courses/AiTutor";
import type { TopicRevision } from "@/lib/courses/oLevelAccountingRevisionTypes";

interface TopicPageClientProps {
  topicMeta: AccountingTopicMeta;
  topicQuestions: AccountingMcq[];
  prevTopic: AccountingTopicMeta | null;
  nextTopic: AccountingTopicMeta | null;
  revision?: TopicRevision | null;
  notesIntro?: string | null;
}

export default function TopicPageClient({
  topicMeta,
  topicQuestions,
  prevTopic,
  nextTopic,
  revision = null,
  notesIntro = null,
}: TopicPageClientProps) {
  const { user, loading: authLoading } = useAuth();
  const [progress, setProgress] = useState<TopicProgress>(DEFAULT_TOPIC_PROGRESS);
  const [progressLoaded, setProgressLoaded] = useState(false);

  // Quiz state
  const [quizSet, setQuizSet] = useState<AccountingMcq[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, number>>({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  // Sign-up prompt modal state
  const [showAuthPrompt, setShowAuthPrompt] = useState(false);
  const [authFromTutor, setAuthFromTutor] = useState(false);

  const hasVideo = Boolean(topicMeta.videoId);
  const hasNotes = Boolean(topicMeta.notes?.trim());

  // 1. Load progress from Firestore (signed-in) or localStorage (signed-out)
  useEffect(() => {
    if (authLoading) return;
    let active = true;

    async function load() {
      let loaded: TopicProgress;
      if (user?.uid) {
        loaded = await getFirestoreTopicProgress(user.uid, topicMeta.topicId);
      } else {
        loaded = getLocalTopicProgress(topicMeta.topicId);
      }
      if (!active) return;
      setProgress(loaded);
      setProgressLoaded(true);

      // Draw initial 5 questions using stored lastQuizIds
      const initialQuiz = drawQuizFromPool(topicQuestions, 5, loaded.lastQuizIds);
      setQuizSet(initialQuiz);
      setSelectedOptions({});
      setChecked(false);
      setScore(null);
    }

    load();
    return () => {
      active = false;
    };
  }, [user?.uid, authLoading, topicMeta.topicId, topicQuestions]);

  // 2. Persist progress helper (while signed in, writes to Firestore only; while signed out, writes to localStorage)
  const persistProgress = useCallback(
    async (nextProgress: TopicProgress) => {
      setProgress(nextProgress);
      if (user?.uid) {
        await saveFirestoreTopicProgress(user.uid, topicMeta.topicId, nextProgress);
      } else {
        saveLocalTopicProgress(topicMeta.topicId, nextProgress);
      }
    },
    [user?.uid, topicMeta.topicId]
  );

  // Step 1: Mark video watched (when 90% watched via YouTube IFrame API)
  const handleVideoWatched = useCallback(() => {
    setProgress((prev) => {
      if (prev.videoWatched) return prev;
      const updated: TopicProgress = {
        ...prev,
        videoWatched: true,
        updatedAt: Date.now(),
      };
      if (user?.uid) {
        saveFirestoreTopicProgress(user.uid, topicMeta.topicId, updated);
      } else {
        saveLocalTopicProgress(topicMeta.topicId, updated);
      }
      return updated;
    });
  }, [user?.uid, topicMeta.topicId]);

  // Step 2: Mark notes read / Undo
  const handleMarkNotesRead = async () => {
    const wasReadBefore = progress.notesRead;
    const updated: TopicProgress = {
      ...progress,
      notesRead: true,
      updatedAt: Date.now(),
    };
    await persistProgress(updated);

    // After a signed-out student first marks notes as read, show sign-up prompt (unless skipped within 7 days)
    if (!user && !wasReadBefore && shouldShowSaveProgressPrompt()) {
      markSaveProgressPromptShown();
      setShowAuthPrompt(true);
    }
  };

  const handleUndoNotesRead = async () => {
    const updated: TopicProgress = {
      ...progress,
      notesRead: false,
      updatedAt: Date.now(),
    };
    await persistProgress(updated);
  };

  // Step 3: Select quiz option
  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (checked) return;
    setSelectedOptions((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };

  const allFiveAnswered =
    quizSet.length === 5 &&
    quizSet.every((q) => typeof selectedOptions[q.id] === "number");

  // Step 3: Check answers
  const handleCheckAnswers = async () => {
    if (!allFiveAnswered || checked) return;

    let correctCount = 0;
    for (const q of quizSet) {
      if (selectedOptions[q.id] === q.answer) {
        correctCount++;
      }
    }

    setChecked(true);
    setScore(correctCount);

    const passedNow = correctCount === 5;
    const currentIds = quizSet.map((q) => q.id);
    const wasFirstQuizAttempt = progress.attempts === 0;

    const updated: TopicProgress = {
      ...progress,
      quizPassed: progress.quizPassed || passedNow,
      bestScore: Math.max(progress.bestScore, correctCount),
      attempts: progress.attempts + 1,
      lastQuizIds: currentIds,
      updatedAt: Date.now(),
    };
    await persistProgress(updated);

    // When topic has no notes, trigger sign-up prompt after the student's first completed quiz attempt
    if (!hasNotes && !user && wasFirstQuizAttempt && shouldShowSaveProgressPrompt()) {
      markSaveProgressPromptShown();
      setShowAuthPrompt(true);
    }
  };

  // Step 3: Try a new set of 5
  const handleTryNewSet = () => {
    const previousIds = quizSet.map((q) => q.id);
    const nextQuestions = drawQuizFromPool(topicQuestions, 5, previousIds);
    setQuizSet(nextQuestions);
    setSelectedOptions({});
    setChecked(false);
    setScore(null);
  };

  // Overall status calculation
  const overallStatus = computeTopicStatus(progress, hasVideo, hasNotes);
  const statusDisplayLabel =
    overallStatus === "mastered"
      ? "Mastered"
      : overallStatus === "studied"
      ? "Studied (quiz to go)"
      : overallStatus === "in-progress"
      ? "In progress"
      : "Not started";

  const statusBadgeClass =
    overallStatus === "mastered"
      ? "bg-efe-accent text-white"
      : overallStatus === "studied"
      ? "bg-efe-accent-soft text-efe-accent-ink border border-efe-accent"
      : overallStatus === "in-progress"
      ? "bg-efe-gold-soft text-efe-gold border border-amber-300"
      : "bg-efe-bg text-efe-muted border border-efe-line";

  return (
    <div className="efe-page min-h-screen flex flex-col">
      <PageHeader
        eyebrow={`O Level Accounting 7707 · Section ${topicMeta.section} · Topic ${topicMeta.topic}`}
        title={`${topicMeta.topic} ${topicMeta.topicTitle}`}
        description="Practice questions are available for every topic now. Notes and videos are being added."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Accounting", href: "/courses/accounting" },
          { label: `Topic ${topicMeta.topic}` },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 flex-1 w-full space-y-8">
        {/* Progress Panel */}
        <section
          aria-label="Topic progress summary"
          className="efe-card p-5 sm:p-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-efe-line">
            <div>
              <h2 className="text-base font-bold font-display text-efe-fg">
                Your Progress on Topic {topicMeta.topic}
              </h2>
              <p className="text-xs text-efe-muted mt-0.5">
                {progress.attempts > 0
                  ? `Best quiz score: ${progress.bestScore}/5 · Attempts: ${progress.attempts}`
                  : "Score 5 out of 5 on the practice quiz below to master this topic."}
              </p>
            </div>
            <div className="flex items-center gap-2 self-start sm:self-center">
              <span className="text-xs text-efe-muted font-medium">Status:</span>
              <span
                data-testid="topic-overall-status"
                className={`text-xs font-bold px-3 py-1 rounded-full ${statusBadgeClass}`}
              >
                {statusDisplayLabel}
              </span>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 ${
              hasVideo && hasNotes
                ? "sm:grid-cols-3"
                : hasVideo || hasNotes
                ? "sm:grid-cols-2"
                : "sm:grid-cols-1"
            } gap-3`}
          >
            {/* Check 1: Watch (shown when topic has a video) */}
            {hasVideo && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-efe-bg border border-efe-line">
                <StepCheckCircle done={progress.videoWatched} />
                <div>
                  <div className="text-xs font-bold text-efe-fg">Watch Video</div>
                  <div className="text-xs text-efe-muted">
                    {progress.videoWatched ? "Watched (90%+)" : "Not watched yet"}
                  </div>
                </div>
              </div>
            )}

            {/* Check 2: Read (shown when topic has notes) */}
            {hasNotes && (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-efe-bg border border-efe-line">
                <StepCheckCircle done={progress.notesRead} />
                <div>
                  <div className="text-xs font-bold text-efe-fg">Read Notes</div>
                  <div className="text-xs text-efe-muted">
                    {progress.notesRead ? "Completed" : "Not read yet"}
                  </div>
                </div>
              </div>
            )}

            {/* Check 3: Quiz */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-efe-bg border border-efe-line">
              <StepCheckCircle done={progress.quizPassed} />
              <div>
                <div className="text-xs font-bold text-efe-fg">Check Yourself</div>
                <div className="text-xs text-efe-muted">
                  {progress.quizPassed
                    ? "Passed (5/5)"
                    : progress.attempts > 0
                    ? `Best: ${progress.bestScore}/5 (need 5/5)`
                    : "Score 5/5 to pass"}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STEP 0: START HERE (What you need to know + Key words) */}
        {notesIntro && (
          <section
            aria-labelledby="step-intro-heading"
            className="efe-card p-6 sm:p-8"
          >
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-efe-accent-ink">
                Start here
              </span>
              <h2
                id="step-intro-heading"
                className="text-xl font-bold font-display text-efe-fg mt-0.5"
              >
                What you will learn in {topicMeta.topic}
              </h2>
              <p className="text-sm text-efe-muted mt-1">
                Read these goals and key words first, then watch the lesson.
              </p>
            </div>
            <div className="max-w-none bg-efe-bg p-5 rounded-xl border border-efe-line">
              <NotesContent notes={notesIntro} />
            </div>
          </section>
        )}

        {/* STEP 1: WATCH (only rendered when topic has a video) */}
        {hasVideo && topicMeta.videoId && (
          <section
            aria-labelledby="step-watch-heading"
            className="efe-card p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-efe-accent-ink">
                  Watch
                </span>
                <h2
                  id="step-watch-heading"
                  className="text-xl font-bold font-display text-efe-fg mt-0.5"
                >
                  Video Lesson
                </h2>
              </div>
              {progress.videoWatched && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-efe-accent-soft text-efe-accent-ink">
                  ✓ Video watched
                </span>
              )}
            </div>

            <YouTubeWatchedPlayer
              videoId={topicMeta.videoId}
              alreadyWatched={progress.videoWatched}
              onWatched90Percent={handleVideoWatched}
            />
          </section>
        )}

        {/* STEP 2: READ (only rendered when topic has notes) */}
        {hasNotes && topicMeta.notes && (
          <section
            aria-labelledby="step-read-heading"
            className="efe-card p-6 sm:p-8"
          >
            <div className="flex items-center justify-between gap-2 mb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-efe-accent-ink">
                  Read
                </span>
                <h2
                  id="step-read-heading"
                  className="text-xl font-bold font-display text-efe-fg mt-0.5"
                >
                  Revision Notes: {topicMeta.topicTitle}
                </h2>
              </div>
              {progress.notesRead && (
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-efe-accent-soft text-efe-accent-ink">
                  ✓ Notes read
                </span>
              )}
            </div>

            <div className="max-w-none bg-efe-bg p-5 rounded-xl border border-efe-line mb-6">
              <NotesContent notes={topicMeta.notes} />
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {!progress.notesRead ? (
                <button
                  type="button"
                  onClick={handleMarkNotesRead}
                  className="efe-btn efe-btn-primary"
                >
                  I have read and understood these notes
                </button>
              ) : (
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-efe-accent-soft text-efe-accent-ink text-sm font-bold border border-efe-accent/30">
                    ✓ You have read and understood these notes
                  </span>
                  <button
                    type="button"
                    onClick={handleUndoNotesRead}
                    className="efe-btn efe-btn-secondary efe-btn-sm"
                  >
                    Undo
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* STEP 3: MIND MAP */}
        {revision?.mindMap && (
          <section
            aria-labelledby="step-map-heading"
            className="efe-card p-6 sm:p-8"
          >
            <div className="mb-5">
              <span className="text-xs font-bold uppercase tracking-wider text-efe-accent-ink">
                Mind map
              </span>
              <h2
                id="step-map-heading"
                className="text-xl font-bold font-display text-efe-fg mt-0.5"
              >
                The whole topic on one page
              </h2>
            </div>
            <MindMap data={revision.mindMap} />
          </section>
        )}

        {/* STEP 4: FLASHCARDS (only rendered when topic has cards) */}
        {revision?.flashcards && revision.flashcards.length > 0 && (
          <section
            aria-labelledby="step-cards-heading"
            className="efe-card p-6 sm:p-8"
          >
            <div className="mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-efe-accent-ink">
                Recall
              </span>
              <h2
                id="step-cards-heading"
                className="text-xl font-bold font-display text-efe-fg mt-0.5"
              >
                Flashcards ({revision.flashcards.length} cards)
              </h2>
              <p className="text-sm text-efe-muted mt-1">
                Say the answer in your head first, then flip. Mark the ones you missed and go through them again.
              </p>
            </div>
            <Flashcards cards={revision.flashcards} />
          </section>
        )}

        {/* STEP 5: CHECK YOURSELF (MCQ) */}
        <section
          aria-labelledby="step-quiz-heading"
          className="efe-card p-6 sm:p-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 pb-4 border-b border-efe-line">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-efe-accent-ink">
                Check yourself
              </span>
              <h2
                id="step-quiz-heading"
                className="text-xl font-bold font-display text-efe-fg mt-0.5"
              >
                Topic {topicMeta.topic} Practice Quiz (5 Questions)
              </h2>
              <p className="text-sm text-efe-muted mt-1">
                Answer all 5 multiple-choice questions. Score 5 out of 5 to mark this topic as
                mastered.
              </p>
            </div>
            {progress.quizPassed && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-efe-accent text-white self-start sm:self-center whitespace-nowrap">
                ★ Quiz Passed (5/5)
              </span>
            )}
          </div>

          {!progressLoaded || quizSet.length === 0 ? (
            <div className="py-12 text-center text-sm text-efe-muted">
              Loading quiz questions…
            </div>
          ) : (
            <div className="space-y-8">
              {quizSet.map((q, qIdx) => {
                const picked = selectedOptions[q.id];
                const isAnswered = typeof picked === "number";

                return (
                  <fieldset
                    key={q.id}
                    className="border border-efe-line rounded-2xl p-5 bg-efe-surface space-y-4"
                  >
                    <legend className="sr-only">
                      Question {qIdx + 1}: {q.question}
                    </legend>

                    <div className="flex items-start justify-between gap-3">
                      <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-efe-bg border border-efe-line text-efe-muted">
                        Question {qIdx + 1} of 5
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-efe-muted">
                        {q.difficulty}
                      </span>
                    </div>

                    <p className="text-base font-semibold text-efe-fg leading-relaxed">
                      {q.question}
                    </p>

                    {/* Optional Table */}
                    {q.table && (
                      <div className="overflow-x-auto my-3 rounded-xl border border-efe-line">
                        <table className="w-full text-sm text-left border-collapse">
                          <thead className="bg-efe-bg border-b border-efe-line text-efe-fg">
                            <tr>
                              {q.table.headers.map((h, hIdx) => (
                                <th
                                  key={hIdx}
                                  scope="col"
                                  className="px-4 py-2.5 font-bold"
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-efe-line bg-white">
                            {q.table.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td
                                    key={cIdx}
                                    className="px-4 py-2 text-efe-fg whitespace-nowrap"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                    {/* Options */}
                    <div className="space-y-2.5" role="radiogroup" aria-label={`Question ${qIdx + 1} options`}>
                      {q.options.map((optText, optIdx) => {
                        const letter = ["A", "B", "C", "D"][optIdx];
                        const isSelected = picked === optIdx;
                        const isCorrectOption = q.answer === optIdx;

                        let optionClasses =
                          "border-efe-line bg-white text-efe-fg hover:border-efe-accent";
                        if (!checked && isSelected) {
                          optionClasses =
                            "border-efe-accent bg-efe-accent-soft/60 text-efe-fg ring-2 ring-efe-accent/30";
                        } else if (checked) {
                          if (isCorrectOption) {
                            optionClasses =
                              "border-emerald-600 bg-emerald-50 text-emerald-950 font-semibold";
                          } else if (isSelected && !isCorrectOption) {
                            optionClasses =
                              "border-red-500 bg-red-50 text-red-950";
                          } else {
                            optionClasses =
                              "border-efe-line bg-white/60 text-efe-muted opacity-75";
                          }
                        }

                        const inputId = `${q.id}-opt-${optIdx}`;

                        return (
                          <label
                            key={optIdx}
                            htmlFor={inputId}
                            className={`flex items-start gap-3 p-3.5 rounded-xl border-2 transition-all ${
                              checked ? "cursor-default" : "cursor-pointer"
                            } ${optionClasses}`}
                          >
                            <input
                              id={inputId}
                              type="radio"
                              name={`quiz-${q.id}`}
                              checked={isSelected}
                              disabled={checked}
                              onChange={() => handleSelectOption(q.id, optIdx)}
                              className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 flex-shrink-0"
                            />
                            <span className="font-bold text-sm min-w-[1.25rem]">
                              {letter}.
                            </span>
                            <span className="text-sm leading-relaxed flex-1">
                              {optText}
                            </span>
                            {checked && isCorrectOption && (
                              <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md flex-shrink-0">
                                ✓ Correct
                              </span>
                            )}
                            {checked && isSelected && !isCorrectOption && (
                              <span className="text-xs font-bold text-red-700 bg-red-100 px-2 py-0.5 rounded-md flex-shrink-0">
                                ✗ Your choice
                              </span>
                            )}
                          </label>
                        );
                      })}
                    </div>

                    {/* Option feedback for the option the student picked */}
                    {checked && isAnswered && (
                      <div
                        data-testid={`feedback-${q.id}`}
                        className={`mt-3 p-4 rounded-xl border text-sm leading-relaxed ${
                          picked === q.answer
                            ? "bg-emerald-50/90 border-emerald-200 text-emerald-900"
                            : "bg-red-50/90 border-red-200 text-red-900"
                        }`}
                      >
                        <p className="font-bold mb-1">
                          {picked === q.answer ? "✓ Correct!" : "✗ Not quite:"}
                        </p>
                        <p>{q.optionFeedback[picked]}</p>
                      </div>
                    )}
                  </fieldset>
                );
              })}

              {/* Quiz Actions & Result Banner */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {!checked ? (
                  <>
                    <p className="text-sm text-efe-muted">
                      {Object.keys(selectedOptions).length} of 5 questions answered
                    </p>
                    <button
                      type="button"
                      disabled={!allFiveAnswered}
                      onClick={handleCheckAnswers}
                      className="efe-btn efe-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Check answers
                    </button>
                  </>
                ) : (
                  <div className="w-full p-5 rounded-2xl border border-efe-line bg-efe-bg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-lg font-bold font-display text-efe-fg">
                        {score === 5
                          ? "🎉 5 out of 5 — Topic Quiz Passed!"
                          : `You scored ${score} out of 5`}
                      </p>
                      <p className="text-sm text-efe-muted mt-0.5">
                        {score === 5
                          ? "Great work! This topic is now marked as mastered."
                          : "You need 5 out of 5 to master this topic. Review the feedback above and try a fresh set of questions."}
                      </p>
                    </div>
                    {score !== 5 ? (
                      <button
                        type="button"
                        onClick={handleTryNewSet}
                        className="efe-btn efe-btn-primary whitespace-nowrap"
                      >
                        Try a new set of 5
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={handleTryNewSet}
                        className="efe-btn efe-btn-secondary efe-btn-sm whitespace-nowrap"
                      >
                        Practice another set of 5
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </section>

        {/* STEP 6: ASK THE AI TUTOR */}
        <section
          aria-labelledby="step-ask-heading"
          className="efe-card p-6 sm:p-8"
        >
          <div className="mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-efe-accent-ink">
              Ask
            </span>
            <h2
              id="step-ask-heading"
              className="text-xl font-bold font-display text-efe-fg mt-0.5"
            >
              Still stuck? Ask the AI tutor
            </h2>
            <p className="text-sm text-efe-muted mt-1">
              Ask about anything in topic {topicMeta.topic}. Answers are based on these notes.
            </p>
          </div>
          <AiTutor
            topic={topicMeta.topic}
            topicTitle={topicMeta.topicTitle}
            onNeedSignIn={() => {
              setAuthFromTutor(true);
              setShowAuthPrompt(true);
            }}
          />
        </section>

        {/* Bottom Navigation: Course Hub / Previous / Next Topic */}
        <nav
          aria-label="Topic navigation"
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4"
        >
          <div className="flex items-center gap-3">
            <Link
              href="/courses/accounting"
              className="efe-btn efe-btn-secondary"
            >
              ← All Accounting Topics
            </Link>
            {prevTopic && (
              <Link
                href={`/courses/accounting/o-level/${prevTopic.slug}`}
                className="efe-btn efe-btn-secondary"
              >
                ← {prevTopic.topic}
              </Link>
            )}
          </div>

          {nextTopic && (
            <Link
              href={`/courses/accounting/o-level/${nextTopic.slug}`}
              className="efe-btn efe-btn-primary"
            >
              Next topic: {nextTopic.topic} {nextTopic.topicTitle} →
            </Link>
          )}
        </nav>
      </main>

      {/* Footer Disclaimer */}
      <aside className="border-t border-efe-line bg-white/70 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-xs text-efe-muted leading-relaxed text-center">
            EduForEveryone is independent and is not affiliated with or endorsed by Cambridge University Press &amp; Assessment.
          </p>
        </div>
      </aside>

      {/* Sign-up Prompt Modal (with Skip for now) */}
      {showAuthPrompt && (
        <SaveProgressPrompt
          onClose={() => {
            setShowAuthPrompt(false);
            setAuthFromTutor(false);
          }}
          {...(authFromTutor
            ? {
                heading: "Sign in to ask the AI tutor",
                message: "The tutor is free. Signing in lets us keep it running fairly for every student.",
                rememberSkip: false,
              }
            : {})}
        />
      )}
    </div>
  );
}

function StepCheckCircle({
  done,
  skipped,
}: {
  done: boolean;
  skipped?: boolean;
}) {
  if (done) {
    return (
      <span
        aria-hidden="true"
        className="w-6 h-6 rounded-full bg-efe-accent text-white flex items-center justify-center flex-shrink-0"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }
  if (skipped) {
    return (
      <span
        aria-hidden="true"
        className="w-6 h-6 rounded-full border-2 border-efe-line bg-white text-efe-muted flex items-center justify-center text-xs font-bold flex-shrink-0"
      >
        –
      </span>
    );
  }
  return (
    <span
      aria-hidden="true"
      className="w-6 h-6 rounded-full border-2 border-efe-line bg-white flex-shrink-0"
    />
  );
}

