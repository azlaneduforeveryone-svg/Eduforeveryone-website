/**
 * Typo-tolerant site search, used by the home search box and /search.
 *
 * Matches, best first:
 *   exact word  >  word starts with what you typed ("dep" finds Depreciation)
 *   >  one or two letters wrong, missing or swapped ("depriciation", "mitocondria")
 *   >  typed text found inside a longer word.
 * Every word you type must match something, so "cell structure" stays narrow.
 */

export interface SearchEntry {
  /** Title shown in the suggestion list. */
  t: string;
  /** Link. */
  h: string;
  /** Category label, e.g. "Course", "O Level Biology", "Surah". */
  c: string;
  /** Emoji shown next to the title. */
  e: string;
  /** Short description (optional). */
  d?: string;
  /** Extra search words, space separated (tags, key terms). Not shown. */
  k?: string;
}

export interface SearchHit extends SearchEntry {
  score: number;
}

const STOP_WORDS = new Set(["a", "an", "and", "the", "of", "in", "on", "to", "for", "is", "with"]);

export function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['’`]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function words(s: string | undefined): string[] {
  return s ? normalize(s).split(" ").filter(Boolean) : [];
}

/** Optimal string alignment distance (counts a swap of two letters as one), capped at max+1. */
export function editDistance(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const prev2 = new Array<number>(b.length + 1).fill(0);
  let prev = Array.from({ length: b.length + 1 }, (_, j) => j);
  for (let i = 1; i <= a.length; i++) {
    const cur = new Array<number>(b.length + 1);
    cur[0] = i;
    let rowMin = cur[0];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      let v = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        v = Math.min(v, prev2[j - 2] + 1);
      }
      cur[j] = v;
      if (v < rowMin) rowMin = v;
    }
    if (rowMin > max) return max + 1;
    for (let j = 0; j <= b.length; j++) prev2[j] = prev[j];
    prev = cur;
  }
  return prev[b.length];
}

/** How many mistakes we forgive for a typed word of this length. */
function allowedTypos(len: number): number {
  if (len <= 2) return 0;
  if (len === 3) return 1; // whole short words only, e.g. "mok" for "mock"
  if (len <= 6) return 1;
  return 2;
}

/** 0 = no match, 1 = exact. */
export function wordScore(q: string, w: string): number {
  if (w === q) return 1;
  if (w.startsWith(q)) return q.length === 1 ? 0.5 : 0.9;
  const max = allowedTypos(q.length);
  // Short typed words only forgive a typo against words at least as long
  // ("mok" finds "mock" but "sin" does not find "in").
  if (max > 0 && (q.length > 3 || w.length >= q.length)) {
    const whole = editDistance(q, w, max);
    if (whole <= max) return 0.8 - 0.1 * whole;
    // Typo in what has been typed so far: compare with the start of the word.
    if (w.length > q.length && q.length >= 4) {
      let best = max + 1;
      for (const len of [q.length - 1, q.length, q.length + 1]) {
        if (len < 3 || len > w.length) continue;
        best = Math.min(best, editDistance(q, w.slice(0, len), max));
      }
      if (best <= max) return 0.7 - 0.1 * best;
    }
  }
  if (q.length >= 4 && w.includes(q)) return 0.5;
  return 0;
}

interface Prepared {
  entry: SearchEntry;
  title: string;
  titleWords: string[];
  otherWords: string[];
}

const prepCache = new WeakMap<SearchEntry[], Prepared[]>();

function prepare(index: SearchEntry[]): Prepared[] {
  let p = prepCache.get(index);
  if (!p) {
    p = index.map((entry) => ({
      entry,
      title: normalize(entry.t),
      titleWords: words(entry.t),
      otherWords: Array.from(new Set([...words(entry.k), ...words(entry.c), ...words(entry.d)])),
    }));
    prepCache.set(index, p);
  }
  return p;
}

function best(q: string, list: string[]): number {
  let top = 0;
  for (const w of list) {
    const s = wordScore(q, w);
    if (s > top) top = s;
    if (top === 1) break;
  }
  return top;
}

export function fuzzySearch(index: SearchEntry[], query: string, limit = 8): SearchHit[] {
  const phrase = normalize(query);
  if (!phrase) return [];
  let tokens = phrase.split(" ").filter((t) => !STOP_WORDS.has(t));
  if (tokens.length === 0) tokens = phrase.split(" ");

  const hits: SearchHit[] = [];
  for (const p of prepare(index)) {
    let score = 0;
    let ok = true;
    for (const q of tokens) {
      const inTitle = best(q, p.titleWords) * 3;
      const inOther = best(q, p.otherWords) * 1.5;
      const s = Math.max(inTitle, inOther);
      if (s === 0) {
        ok = false;
        break;
      }
      score += s;
    }
    if (!ok) continue;
    if (p.title.startsWith(phrase)) score += 2;
    else if (p.title.includes(phrase)) score += 1;
    score -= p.titleWords.length * 0.02; // shorter titles first on ties
    hits.push({ ...p.entry, score });
  }
  hits.sort((a, b) => b.score - a.score);
  // Drop weak matches when there are much better ones (keeps typo noise out).
  const cut = hits.length ? hits[0].score * 0.5 : 0;
  return hits.filter((h) => h.score >= cut).slice(0, limit);
}
