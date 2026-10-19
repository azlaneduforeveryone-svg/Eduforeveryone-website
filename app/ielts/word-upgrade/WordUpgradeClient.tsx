"use client";

import React from "react";
import Link from "next/link";
import QuizEngine from "@/components/quiz/QuizEngine";
import {
  WORD_UPGRADE_ITEMS,
  WORD_UPGRADE_ENCOURAGEMENT,
} from "@/lib/games/word-upgrade";
import type { WordUpgradeItem } from "@/lib/games/types";

export default function WordUpgradeClient() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      {/* Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/ielts"
          className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1 transition-colors"
        >
          ← Back to IELTS Hub
        </Link>
      </div>

      {/* Header Banner */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl" aria-hidden="true">
            ⚡
          </span>
          <span className="text-xs font-bold bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full uppercase tracking-wider">
            IELTS Vocabulary Training
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Word Upgrade
        </h1>
        <p className="text-base text-gray-500 mt-2 leading-relaxed">
          Upgrade basic words to natural Band 7+ academic replacements. Each round gives you 10 random sentences to sharpen your Lexical Resource.
        </p>
      </div>

      {/* Reused Quiz Engine */}
      <QuizEngine<WordUpgradeItem>
        questions={WORD_UPGRADE_ITEMS}
        sampleCount={10}
        shuffleOptions={true}
        showScoreCounter={true}
        enableKeyboard={true}
        storageKey="ielts_word_upgrade_best_score"
        gameName="Word Upgrade"
        gameEmoji="⚡"
        gameUrl="/ielts/word-upgrade"
        encouragementConfig={WORD_UPGRADE_ENCOURAGEMENT}
        renderQuestionDetail={(item) => (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-md font-medium capitalize">
              Topic: {item.domain}
            </span>
            <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-md font-medium">
              Basic word: <strong className="underline decoration-amber-400">{item.targetWord}</strong>
            </span>
          </div>
        )}
      />

      {/* Study Tip Footer Note */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500 leading-relaxed text-center">
        💡 <strong>Examiner Tip:</strong> In IELTS Writing and Speaking, using precise collocations (e.g. <em>&quot;curtail emissions&quot;</em> instead of <em>&quot;cut down emissions&quot;</em>) demonstrates Band 7+ Lexical Resource.
      </div>
    </div>
  );
}
