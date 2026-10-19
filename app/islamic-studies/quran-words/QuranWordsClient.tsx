"use client";

import React from "react";
import Link from "next/link";
import QuizEngine from "@/components/quiz/QuizEngine";
import {
  MINIMUM_REVIEWED_COUNT,
  QURAN_WORDS_ENCOURAGEMENT,
} from "@/lib/games/quran-words";
import type { QuranWordItem } from "@/lib/games/types";

interface QuranWordsClientProps {
  isLive: boolean;
  isDev: boolean;
  words: QuranWordItem[];
  totalWordCount: number;
}

export default function QuranWordsClient({
  isLive,
  isDev,
  words,
  totalWordCount,
}: QuranWordsClientProps) {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
      {/* Navigation Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/islamic-studies"
          className="text-xs font-semibold text-teal-600 hover:text-teal-700 flex items-center gap-1 transition-colors"
        >
          ← Back to Islamic Studies
        </Link>
      </div>

      {/* Header Banner */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl" aria-hidden="true">
            📖
          </span>
          <span className="text-xs font-bold bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Quranic Vocabulary
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
          Quran Word Meanings
        </h1>
        <p
          className="text-xl text-gray-500 mt-1 font-arabic"
          dir="rtl"
          style={{ fontFamily: "var(--font-arabic), 'Amiri', serif" }}
        >
          معاني كلمات القرآن الكريم
        </p>
        <p className="text-base text-gray-600 mt-2 leading-relaxed">
          Discover the meanings of high-frequency words in the Holy Quran along with their original Surah and Ayah references.
        </p>
      </div>

      {/* Review Gate: Shown when fewer than MINIMUM_REVIEWED_COUNT (10) items are reviewed */}
      {!isLive ? (
        <div className="space-y-8">
          <div className="bg-white border border-dashed border-amber-300 rounded-2xl p-8 sm:p-10 text-center shadow-sm">
            <div className="w-16 h-16 mx-auto bg-amber-50 border border-amber-200 rounded-2xl flex items-center justify-center text-3xl mb-4">
              📜
            </div>
            <span className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              In Editorial Review
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Vocabulary Bank Under Review
            </h2>
            <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed mb-6">
              To ensure the highest standard of accuracy, our initial cohort of{" "}
              <strong>{totalWordCount} common Quranic vocabulary items</strong> is
              undergoing verification of Arabic harakat, English meanings, and ayah references.
            </p>

            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 max-w-md mx-auto mb-6 text-left text-xs space-y-1.5 text-amber-900">
              <p className="flex justify-between font-semibold">
                <span>Required Reviewed Items to Go Live:</span>
                <span>{MINIMUM_REVIEWED_COUNT} words</span>
              </p>
              <p className="flex justify-between text-amber-700">
                <span>Currently Reviewed:</span>
                <span>0 of {totalWordCount}</span>
              </p>
              <p className="text-[11px] text-amber-600 pt-1 border-t border-amber-200">
                ℹ️ The interactive game will activate on this page automatically as soon as verified items reach the threshold.
              </p>
            </div>

            <Link
              href="/islamic-studies"
              className="inline-block bg-teal-600 text-white font-bold text-sm px-6 py-3 rounded-xl hover:bg-teal-700 transition-colors shadow-sm"
            >
              Explore Other Islamic Studies Resources →
            </Link>
          </div>

          {/* Development Preview: Rendered ONLY when NODE_ENV is development */}
          {isDev && words.length > 0 && (
            <div className="border-t border-dashed border-amber-200 pt-8">
              <div className="bg-amber-50 border border-amber-300 rounded-xl p-3.5 text-xs text-amber-900 mb-6 flex items-center gap-2">
                <span className="text-base">🛠️</span>
                <span>
                  <strong>Development Preview Mode:</strong> Interactive preview of unreviewed items (visible only when NODE_ENV=development).
                </span>
              </div>
              <QuizEngine<QuranWordItem>
                questions={words}
                sampleCount={10}
                shuffleOptions={true}
                showScoreCounter={true}
                enableKeyboard={true}
                storageKey="quran_words_dev_preview_score"
                gameName="Quran Word Meanings (Preview)"
                gameEmoji="📖"
                gameUrl="/islamic-studies/quran-words"
                isArabicQuestion={true}
                encouragementConfig={QURAN_WORDS_ENCOURAGEMENT}
                renderQuestionDetail={(item) => (
                  <div className="flex flex-wrap items-center justify-between gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs">
                    <span className="text-gray-700 font-medium">
                      Transliteration: <strong className="font-semibold text-gray-900">{item.transliteration}</strong>
                    </span>
                    <span className="text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                      Surah {item.surahName} ({item.surahNumber}:{item.ayahNumber})
                    </span>
                  </div>
                )}
              />
            </div>
          )}
        </div>
      ) : (
        /* Live Game Engine: Activated in production and development when 10+ items are reviewed */
        <QuizEngine<QuranWordItem>
          questions={words}
          sampleCount={10}
          shuffleOptions={true}
          showScoreCounter={true}
          enableKeyboard={true}
          storageKey="quran_words_best_score"
          gameName="Quran Word Meanings"
          gameEmoji="📖"
          gameUrl="/islamic-studies/quran-words"
          isArabicQuestion={true}
          encouragementConfig={QURAN_WORDS_ENCOURAGEMENT}
          renderQuestionDetail={(item) => (
            <div className="flex flex-wrap items-center justify-between gap-2 bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs">
              <span className="text-gray-700 font-medium">
                Transliteration: <strong className="font-semibold text-gray-900">{item.transliteration}</strong>
              </span>
              <span className="text-teal-700 font-semibold bg-teal-50 px-2 py-0.5 rounded border border-teal-100">
                Surah {item.surahName} ({item.surahNumber}:{item.ayahNumber})
              </span>
            </div>
          )}
        />
      )}

      {/* Ad-Free Commitment Notice */}
      <div className="mt-10 bg-teal-50 border border-teal-100 rounded-2xl p-5 text-center">
        <p className="text-teal-800 font-semibold text-sm">
          🕌 All Islamic Studies content is completely <strong>ad-free</strong> and will remain free forever.
        </p>
      </div>
    </div>
  );
}

