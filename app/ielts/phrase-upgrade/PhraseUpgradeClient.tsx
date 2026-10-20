"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import QuizEngine from "@/components/quiz/QuizEngine";
import {
  PHRASE_UPGRADE_ITEMS,
  PHRASE_UPGRADE_ENCOURAGEMENT,
} from "@/lib/games/phrase-upgrade";
import type { PhraseUpgradeItem, PhraseUpgradeCategory } from "@/lib/games/types";

type FilterOption = "all" | PhraseUpgradeCategory;

export default function PhraseUpgradeClient() {
  const [selectedCategory, setSelectedCategory] = useState<FilterOption>("all");

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === "all") {
      return PHRASE_UPGRADE_ITEMS;
    }
    return PHRASE_UPGRADE_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const categoryFilters: { id: FilterOption; label: string; count: number }[] = [
    { id: "all", label: "All Questions", count: PHRASE_UPGRADE_ITEMS.length },
    {
      id: "writing-task-1",
      label: "Writing Task 1",
      count: PHRASE_UPGRADE_ITEMS.filter((i) => i.category === "writing-task-1").length,
    },
    {
      id: "writing-task-2",
      label: "Writing Task 2",
      count: PHRASE_UPGRADE_ITEMS.filter((i) => i.category === "writing-task-2").length,
    },
    {
      id: "speaking",
      label: "Speaking",
      count: PHRASE_UPGRADE_ITEMS.filter((i) => i.category === "speaking").length,
    },
  ];

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
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl" aria-hidden="true">
            🎯
          </span>
          <span className="text-xs font-bold bg-teal-100 text-teal-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
            IELTS Cohesion & Fluency
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Phrase Upgrade
        </h1>
        <p className="text-base text-gray-500 mt-2 leading-relaxed">
          Replace memorised clichés and weak phrases with natural, examiner-preferred collocations for Writing Task 1, Task 2, and Speaking.
        </p>
      </div>

      {/* Category Filter Selector */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5 mb-6 shadow-sm">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-500">
            Select Practice Section
          </label>
          <span className="text-xs text-gray-400">
            {filteredQuestions.length} questions available
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {categoryFilters.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all text-center flex flex-col items-center justify-center gap-0.5 border-2 ${
                  isActive
                    ? "bg-teal-600 text-white border-teal-600 shadow-sm"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:border-teal-300 hover:bg-teal-50/40"
                }`}
                aria-pressed={isActive}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-medium ${
                    isActive ? "text-teal-100" : "text-gray-400"
                  }`}
                >
                  ({cat.count} items)
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Reused Quiz Engine */}
      <QuizEngine<PhraseUpgradeItem>
        key={selectedCategory}
        questions={filteredQuestions}
        sampleCount={10}
        shuffleOptions={true}
        showScoreCounter={true}
        enableKeyboard={true}
        storageKey={`ielts_phrase_upgrade_${selectedCategory}_best_score`}
        gameName="Phrase Upgrade"
        gameEmoji="🎯"
        gameUrl="/ielts/phrase-upgrade"
        encouragementConfig={PHRASE_UPGRADE_ENCOURAGEMENT}
        renderQuestionDetail={(item) => {
          const categoryLabels: Record<string, string> = {
            "writing-task-1": "Writing Task 1",
            "writing-task-2": "Writing Task 2",
            speaking: "Speaking",
          };

          return (
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-2.5 py-1 rounded-md font-bold">
                {categoryLabels[item.category] || item.category}
              </span>
              {item.targetPhrase && (
                <span className="bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-md font-medium">
                  Weak / Cliché: <strong className="underline decoration-amber-400">{item.targetPhrase}</strong>
                </span>
              )}
            </div>
          );
        }}
      />

      {/* Examiner Tip Card */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4 text-xs text-gray-500 leading-relaxed text-center">
        💡 <strong>Examiner Note:</strong> Memorised idioms like <em>&quot;in this day and age&quot;</em>, <em>&quot;every coin has two sides&quot;</em>, or <em>&quot;in a nutshell&quot;</em> show a lack of lexical flexibility. Examiners reward natural discourse markers and context-specific collocations.
      </div>
    </div>
  );
}
