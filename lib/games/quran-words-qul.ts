// lib/games/quran-words-qul.ts
// Server-only: the 300 most frequent Quran words with English and Urdu meanings,
// built from QUL word-by-word data by scripts/quran-words-data.ts (verified on every build).
import { readFileSync } from "fs";
import { join } from "path";
import { getSurahMeta } from "@/lib/quranSurahMeta";
import type { QuranWordItem } from "./types";

interface QulWord {
  id: string; arabic: string; count: number; ref: string; kind: string;
  en: string; ur: string; enOptions: string[]; urOptions: string[];
}

/** Letters only, without ال or a one-letter prefix, to spot the same word in both lists. */
function core(t: string): string {
  let s = [...t].filter(c => (c >= "\u0621" && c <= "\u064A") || c === "\u0671").join("")
    .replace(/[\u0671\u0623\u0625\u0622]/g, "\u0627").replace(/\u0649/g, "\u064A");
  for (const p of ["\u0648\u0627\u0644", "\u0641\u0627\u0644", "\u0628\u0627\u0644", "\u0644\u0644", "\u0627\u0644"])
    if (s.startsWith(p) && s.length - p.length >= 2) { s = s.slice(p.length); break; }
  return s;
}

export function loadQulQuranWords(): QuranWordItem[] {
  const file = join(process.cwd(), "data/quran/words/qul-words.json");
  const { words } = JSON.parse(readFileSync(file, "utf8")) as { words: QulWord[] };
  return words.map(w => {
    const [s, a] = w.ref.split(":").map(Number);
    const meta = getSurahMeta(s);
    const name = meta?.name ?? `Surah ${s}`;
    return {
      id: w.id,
      arabic: w.arabic,
      question: w.arabic,
      options: w.enOptions,
      correct: 0,
      explanation: `This word appears ${w.count} times in the Quran. It first appears in Surah ${name} (${s}:${a}). Meaning from the Quranic Universal Library word-by-word translation.`,
      optionsUr: w.urOptions,
      explanationUr: `\u06CC\u06C1 \u0644\u0641\u0638 \u0642\u0631\u0622\u0646 \u0645\u06CC\u06BA ${w.count} \u0628\u0627\u0631 \u0622\u06CC\u0627 \u06C1\u06D2\u06D4 \u067E\u06C1\u0644\u06CC \u0628\u0627\u0631 \u0633\u0648\u0631\u06C3 ${meta?.arabicName ?? s} (${s}:${a}) \u0645\u06CC\u06BA\u06D4 \u0645\u0639\u0646\u06CC: \u0642\u0631\u0622\u0646\u06A9 \u06CC\u0648\u0646\u06CC\u0648\u0631\u0633\u0644 \u0644\u0627\u0626\u0628\u0631\u06CC\u0631\u06CC \u06A9\u0627 \u0644\u0641\u0638\u06CC \u062A\u0631\u062C\u0645\u06C1\u06D4`,
      surahNumber: s,
      surahName: name,
      ayahNumber: a,
      reviewed: true,
      source: "qul" as const,
    };
  });
}

/** Hand-written words first, then QUL words that are not already in the hand-written list. */
export function mergeQuranWords(hand: QuranWordItem[], qul: QuranWordItem[]): QuranWordItem[] {
  const handCores = new Set(hand.map(h => core(h.arabic)));
  return [...hand.map(h => ({ ...h, source: "hand" as const })), ...qul.filter(q => !handCores.has(core(q.arabic)))];
}
