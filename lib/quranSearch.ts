// lib/quranSearch.ts
// Text matching for the Quran search page. Pure functions, safe in client and server code.

export type SearchLang = "ar" | "en" | "ur";

/** Arabic: ignore harakat, small letters, waqf signs and tatweel; unify ya, ta marbuta,
 *  hamza seats and Urdu/Persian letter shapes, so a search typed without harakat still matches.
 *  Alif and the standalone hamza are ignored too: the Quran often writes a small alif
 *  (العٰلمين, الحيوٰة) or ء (ءامنوا) where people type a full alif (العالمين, الحياة, امنوا). */
export function normArabic(s: string): string {
  return s
    .replace(/\u0648\u0670/g, "\u0627")                         // صلوٰة, حيوٰة: the waw is read as alif
    .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED\u0640\u200C\u200D]/g, "")
    .replace(/[\u0671\u0622\u0623\u0625\u0672\u0673]/g, "\u0627")
    .replace(/[\u0649\u06CC\u06D2\u0626]/g, "\u064A")
    .replace(/\u0624/g, "\u0648")
    .replace(/[\u0629\u06C3\u06C1\u06BE]/g, "\u0647")
    .replace(/\u06A9/g, "\u0643")
    .replace(/[^\u0621-\u064A\s]/g, "")
    .replace(/[\u0627\u0621]/g, "")                                 // alif and standalone hamza (ءامنوا = امنوا)
    .replace(/\s+/g, " ")
    .trim();
}

/** Urdu: ignore diacritics and unify letter shapes that people type differently. */
export function normUrdu(s: string): string {
  return s
    .replace(/[\u064B-\u065F\u0670\u0640\u200C\u200D]/g, "")
    .replace(/[\u064A\u0649\u0626]/g, "\u06CC")
    .replace(/\u0643/g, "\u06A9")
    .replace(/\u0647/g, "\u06C1")
    .replace(/[\u0622\u0623\u0625]/g, "\u0627")
    .replace(/[^\u0600-\u06FF\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/** English: lower case, no brackets or punctuation. */
export function normEnglish(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9'\s-]/g, " ").replace(/\s+/g, " ").trim();
}

export function normFor(lang: SearchLang, s: string): string {
  return lang === "ar" ? normArabic(s) : lang === "ur" ? normUrdu(s) : normEnglish(s);
}

/** Arabic-script query: Arabic search by default (the user can switch to Urdu). */
export function guessLang(q: string): SearchLang {
  return /[\u0600-\u06FF]/.test(q) ? "ar" : "en";
}

export interface WordIndex {
  /** Normalised words joined by single spaces. */
  text: string;
  /** Start offset of each word in `text`. */
  starts: number[];
  /** The same words with no spaces, and their start offsets (for Arabic and Urdu). */
  compact: string;
  compactStarts: number[];
}

export function buildWordIndex(lang: SearchLang, words: string[]): WordIndex {
  let text = "", compact = ""; const starts: number[] = [], compactStarts: number[] = [];
  for (const w of words) {
    const n = normFor(lang, w);
    if (text) text += " ";
    starts.push(text.length);
    text += n;
    compactStarts.push(compact.length);
    compact += n.replace(/ /g, "");
  }
  return { text, starts, compact, compactStarts };
}

/** Indexes of the words that the query covers, or null if it does not match.
 *  `whole` = only match whole words (English). Otherwise spaces are ignored and any part of
 *  a word matches: the Quran joins some words people type apart (يٰٓأَيُّهَا = يا أيها). */
export function matchWords(idx: WordIndex, query: string, whole: boolean): number[] | null {
  if (!query) return null;
  const text = whole ? idx.text : idx.compact;
  const starts = whole ? idx.starts : idx.compactStarts;
  const q = whole ? query : query.replace(/ /g, "");
  if (!q) return null;
  let from = 0;
  while (from <= text.length) {
    const at = text.indexOf(q, from);
    if (at < 0) return null;
    const end = at + q.length;
    const okStart = !whole || at === 0 || text[at - 1] === " ";
    const okEnd = !whole || end === text.length || text[end] === " ";
    if (okStart && okEnd) {
      const hit: number[] = [];
      starts.forEach((s, i) => {
        const e = i + 1 < starts.length ? starts[i + 1] - (whole ? 1 : 0) : text.length;
        if (s < end && e > at) hit.push(i);
      });
      return hit;
    }
    from = at + 1;
  }
  return null;
}
