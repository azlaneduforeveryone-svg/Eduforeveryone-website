// lib/quranTajweed.ts
// Shared types for the colour-coded Tajweed data (data/quran/tajweed/*.json)
// and the English word-by-word data (public/quran/wbw-en/*.json).
// Built and verified by scripts/quran-tajweed-data.ts. Safe in client and server code.

// ORDER MATTERS: the data files store each rule as its index in this list.
// Rule names are the ones used by the Quranic Universal Library (QUL).
export const TAJWEED_RULE_IDS = [
  "ham_wasl", "laam_shamsiyah", "slnt", "madda_normal", "madda_permissible", "madda_necessary",
  "madda_obligatory_mottasel", "madda_obligatory_monfasel", "qalaqah", "ikhafa", "ikhafa_shafawi",
  "idgham_ghunnah", "idgham_wo_ghunnah", "idgham_shafawi", "idgham_mutajanisayn",
  "idgham_mutaqaribayn", "iqlab", "ghunnah",
] as const;
export type TajweedRuleId = (typeof TAJWEED_RULE_IDS)[number];

/** A piece of one word: [text] or [text, index into TAJWEED_RULE_IDS]. */
export type TajweedRun = [string] | [string, number];

export interface TajweedWord {
  /** The word's letters, exactly as in the Reader QPC Hafs text, split into coloured runs. */
  r: TajweedRun[];
  /** QUL word numbers this word covers (for the English word by word). Empty for ۞ and the ayah number. */
  q: number[];
}

export interface TajweedAyah {
  n: number;
  words: TajweedWord[];
  /** The space or no-break space after each word, so the text joins back exactly. */
  sep: string[];
}

/** English for one QUL word: [grammar class, text] pieces. Class: n, v, p, pn, paren, punc. */
export type WbwWord = [string, string][] | null;

export interface WbwSurah {
  surah: number;
  attribution: string;
  /** Ayah number to list of English words, index = QUL word number - 1. */
  ayahs: Record<string, WbwWord[]>;
}
