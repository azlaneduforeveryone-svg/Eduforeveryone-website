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
  let s = [...t].filter(c => (c >= "ء" && c <= "ي") || c === "ٱ").join("")
    .replace(/[ٱأإآ]/g, "ا").replace(/ى/g, "ي");
  for (const p of ["وال", "فال", "بال", "لل", "ال"])
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
      explanationUr: `یہ لفظ قرآن میں ${w.count} بار آیا ہے۔ پہلی بار سورۃ ${meta?.arabicName ?? s} (${s}:${a}) میں۔ معنی: قرآنک یونیورسل لائبریری کا لفظی ترجمہ۔`,
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
