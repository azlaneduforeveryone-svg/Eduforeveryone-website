"use client";

import React from "react";

export type QuranScript = "uthmani" | "indopak" | "maghribi";

export interface ScriptOption {
  id: QuranScript;
  name: string;
  subtitle: string;
  region: string;
  fontClass: string;
  description: string;
  previewText: string;
  badge: string;
  editionId: string;
}

export const QURAN_SCRIPTS: ScriptOption[] = [
  {
    id: "uthmani",
    name: "Uthmani / Madani",
    subtitle: "Arab & Global Naskh Style",
    region: "Madinah & Middle East",
    fontClass: "font-quran-uthmani",
    description: "Written in a clean, horizontal Naskh baseline. Standard King Fahd Medina orthography.",
    previewText: "بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ",
    badge: "Global Standard",
    editionId: "quran-uthmani",
  },
  {
    id: "indopak",
    name: "Indo-Pak (Pak-Hint)",
    subtitle: "South Asian Naskh Script",
    region: "Pakistan, India, Bangladesh",
    fontClass: "font-quran-indopak",
    description: "Crisp South Asian Indo-Pak Naskh script with traditional 15-line memorization (Hifz) formatting.",
    previewText: "بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ",
    badge: "15-Line Hifz Standard",
    editionId: "quran-indopak",
  },
  {
    id: "maghribi",
    name: "Maghribi",
    subtitle: "North & West African Style",
    region: "Morocco, Algeria, West Africa",
    fontClass: "font-quran-maghribi",
    description: "Deeply rounded loops and sweeping strokes, historically paired with Warsh narration.",
    previewText: "بِسۡمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    badge: "Traditional African",
    editionId: "quran-uthmani",
  },
];

interface QuranScriptSelectorProps {
  currentScript: QuranScript;
  onSelectScript: (script: QuranScript) => void;
  hifzMode?: boolean;
  onToggleHifzMode?: (enabled: boolean) => void;
  darkMode?: boolean;
  compact?: boolean;
}

export default function QuranScriptSelector({
  currentScript,
  onSelectScript,
  hifzMode = false,
  onToggleHifzMode,
  darkMode = false,
  compact = false,
}: QuranScriptSelectorProps) {
  const cardBg = darkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200";
  const textPrimary = darkMode ? "text-gray-100" : "text-gray-900";
  const textSubtle = darkMode ? "text-gray-400" : "text-gray-500";
  const borderCls = darkMode ? "border-gray-800" : "border-gray-200";

  if (compact) {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <span className={`text-xs font-semibold ${textSubtle}`}>Script:</span>
        <div className="inline-flex rounded-xl p-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          {QURAN_SCRIPTS.map((s) => {
            const isSelected = currentScript === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onSelectScript(s.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? "bg-teal-600 text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-300 hover:text-teal-600"
                }`}
                title={s.description}
              >
                <span>{s.name.split(" ")[0]}</span>
                {isSelected && <span className="text-[10px] opacity-80">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Hifz 15-Line Compact Toggle for Indo-Pak */}
        {currentScript === "indopak" && onToggleHifzMode && (
          <button
            onClick={() => onToggleHifzMode(!hifzMode)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              hifzMode
                ? "bg-emerald-600 text-white border-emerald-700 shadow-sm"
                : `${darkMode ? "bg-gray-800 border-gray-700 text-emerald-400" : "bg-emerald-50 border-emerald-200 text-emerald-700"} hover:bg-emerald-100`
            }`}
          >
            <span>📖 15-Line Hifz Mode</span>
            {hifzMode && <span className="bg-white/20 text-white text-[10px] px-1.5 py-0.5 rounded-full font-mono">ON</span>}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={`${cardBg} border rounded-2xl p-5 shadow-sm transition-all`}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <div>
          <h3 className={`text-lg font-bold ${textPrimary} flex items-center gap-2`}>
            <span>🕌</span> Select Quran Script Style
          </h3>
          <p className={`text-xs ${textSubtle}`}>
            Choose your preferred Arabic calligraphy style and diacritics orthography.
          </p>
        </div>

        {/* Hifz 15-Line Mode Toggle */}
        {currentScript === "indopak" && onToggleHifzMode && (
          <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 px-3 py-1.5 rounded-xl">
            <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
              📖 15-Line Memorization (Hifz) View
            </span>
            <button
              onClick={() => onToggleHifzMode(!hifzMode)}
              className={`relative inline-flex h-5 w-9 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                hifzMode ? "bg-emerald-600" : "bg-gray-300 dark:bg-gray-700"
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  hifzMode ? "translate-x-4" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {QURAN_SCRIPTS.map((s) => {
          const isSelected = currentScript === s.id;
          return (
            <div
              key={s.id}
              onClick={() => onSelectScript(s.id)}
              className={`group cursor-pointer rounded-2xl p-4 border-2 transition-all relative flex flex-col justify-between ${
                isSelected
                  ? "border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 shadow-md"
                  : `${borderCls} hover:border-teal-300 hover:bg-gray-50/80 dark:hover:bg-gray-800/50`
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
                    {s.region}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-teal-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }`}
                  >
                    {s.badge}
                  </span>
                </div>

                <h4 className={`text-base font-bold ${textPrimary} mb-0.5`}>{s.name}</h4>
                <p className={`text-xs ${textSubtle} mb-3`}>{s.subtitle}</p>

                {/* Script Sample Preview */}
                <div className="bg-white dark:bg-gray-950 border border-gray-100 dark:border-gray-800 rounded-xl p-3 mb-3 text-center">
                  <p
                    className={`${s.fontClass} text-xl md:text-2xl text-teal-800 dark:text-teal-200`}
                    dir="rtl"
                  >
                    {s.previewText}
                  </p>
                </div>

                <p className={`text-xs ${textSubtle} leading-relaxed`}>{s.description}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <span className={`text-xs font-semibold ${isSelected ? "text-teal-600 dark:text-teal-400" : "text-gray-600 dark:text-gray-400"}`}>
                  {isSelected ? "Active Script ✓" : "Click to select"}
                </span>
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isSelected
                      ? "border-teal-600 bg-teal-600 text-white text-xs"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  {isSelected && "✓"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
