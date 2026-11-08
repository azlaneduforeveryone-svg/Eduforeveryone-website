/**
 * Build and verify the Quran Word Meanings word list (English and Urdu) from QUL data.
 *
 * Arabic: QPC Hafs words, from "QPC Hafs Script - With Tajweed" (QUL 58), tags removed.
 * English: "Colored English wbw translation" by Tarteel AI (QUL 564).
 * Urdu: "Urdu wbw translation" (QUL 93).
 *
 * The 300 most frequent word forms are picked. A word form is the word as written,
 * ignoring only its final vowel (رَبُّ رَبَّ رَبِّ count as one). For each form the most
 * common English and Urdu meanings across all its appearances become the answer
 * (two meanings when the second is also common, e.g. مِن "from, of").
 * Wrong answers come from other words of the same kind (noun, verb, particle) and
 * never share a meaning with the right answer, in English or in Urdu.
 *
 *   npx tsx scripts/quran-words-data.ts build
 *   npx tsx scripts/quran-words-data.ts verify
 */
import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";

const ROOT = join(__dirname, "..");
const AR_SRC = join(ROOT, "data/quran/source/qul-qpc-hafs-tajweed-wbw.json");
const EN_SRC = join(ROOT, "data/quran/source/qul-wbw-en-colored.json");
const UR_SRC = join(ROOT, "data/quran/source/qul-wbw-ur.json");
const OUT = join(ROOT, "data/quran/words/qul-words.json");

const AR_SHA256 = "cd0b16e25cd69dbfddad11c5d2fb509c1f252bb6ccb249cf74f224a6d10908b7";
const EN_SHA256 = "33a66d94fc955e8e33880ef4a0e122c9528315776af76fb203024cd867d027c5";
const UR_SHA256 = "005f2ad0cdcb0bb18ed1e368c4d622162569e62ca78d17e0434a95f0848f4ace";

const WORD_COUNT = 300;
const MIN_APPEARANCES = 20;

const sha = (p: string) => createHash("sha256").update(readFileSync(p)).digest("hex");
function fail(msg: string): never { console.error(`quran-words: FAIL: ${msg}`); process.exit(1); }

// ── Text helpers ─────────────────────────────────────────────────────────────
const stripTags = (t: string) => t.replace(/<[^>]+>|&(?:gt|lt|amp);/g, "");
const FINAL = new Set(["\u064B", "\u064C", "\u064D", "\u064E", "\u064F", "\u0650", "\u06E1", "\u0652", "\u0657", "\u0656", "\u065E"]);
/** The Arabic word as written, without waqf signs, as it would appear on its own. */
function cleanArabic(t: string): string {
  return stripTags(t).replace(/[\u06D6-\u06DC\u06DE\u06E9\u200C]/g, "").trim();
}
/** Grouping key: the word without its final vowel, and without a shadda on its first letter
 *  that only comes from the word before it (مِّن is مِن). */
function formKey(t: string): string {
  let k = cleanArabic(t).replace(/\u0640/g, "");
  while (k && FINAL.has(k[k.length - 1])) k = k.slice(0, -1);
  if (k.length > 1 && k[1] === "\u0651") k = k[0] + k.slice(2);
  return k;
}
/** "believe [d]" in the source means "believe(d)": join short bracketed endings to the word. */
const joinEndings = (html: string) =>
  html.replace(/<\/span>\s*<span class='punc'>\[<\/span><span class='[a-z]+'>(d|s|es|ed|ies|ing|er|ly)<\/span><span class='punc'>\]<\/span>/g, "$1</span>");

function englishOf(html: string): { text: string; cls: string | null } {
  const pieces = [...joinEndings(html).matchAll(/<span class='([a-z]+)'>([^<]*)<\/span>/g)].map(m => [m[1], m[2]]);
  const text = pieces.filter(([c]) => c !== "paren" && c !== "punc").map(([, t]) => t).join(" ")
    .replace(/[[\]]/g, "").replace(/\s+/g, " ").trim();
  const counts = new Map<string, number>();
  for (const [c] of pieces) if (["n", "v", "p", "pn"].includes(c)) counts.set(c, (counts.get(c) ?? 0) + 1);
  const cls = [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] ?? null;
  return { text, cls };
}
const URDU_CASE = /\s(\u06A9\u0648|\u06A9\u06D2|\u06A9\u06CC|\u06A9\u0627)$/;
function urduOf(s: string, cls: string | null): string {
  let t = s.replace(/\s*\/\s*/g, " / ").replace(/\s+/g, " ").replace(/[ \u06D4]+$/, "").trim();
  // A trailing کو / کے / کی / کا on a noun only reflects the ayah's grammar ("رات کو" is "رات").
  if ((cls === "n" || cls === "pn") && t.includes(" ")) t = t.replace(URDU_CASE, "");
  return t;
}
function ranked(values: string[], fold: (s: string) => string): [string, number][] {
  const m = new Map<string, number>();
  for (const v of values) m.set(fold(v), (m.get(fold(v)) ?? 0) + 1);
  return [...m.entries()].sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : 1));
}
/** Keep the usual spelling; lower-case it unless it is never written in lower case (a name). */
function displayEnglish(values: string[], folded: string): string {
  if (values.some(v => v === folded)) return folded;
  return ranked(values.filter(v => v.toLowerCase() === folded), s => s)[0][0];
}
/** Same meaning, or the same Urdu word in another spelling (لیے / لئے). */
function similar(a: string, b: string): boolean {
  const n = (s: string) => s.replace(/[\u0626\u06CC\u064A]/g, ""); // ignore ی / ئ spelling differences
  a = n(a); b = n(b);
  return a.includes(b) || b.includes(a);
}
/** Deterministic random numbers, so the build always gives the same wrong answers. */
function rng(seed: number) {
  return () => { seed = (seed * 1664525 + 1013904223) >>> 0; return seed / 2 ** 32; };
}
const refOrder = (r: string) => r.split(":").map(Number).reduce((acc, n) => acc * 1000 + n, 0);

export interface QulWord {
  id: string;
  arabic: string;
  /** How many times this word form appears in the Quran. */
  count: number;
  /** First appearance, surah:ayah:word. */
  ref: string;
  kind: string;
  en: string;
  ur: string;
  /** Answer options; the first is correct (the game shuffles them). */
  enOptions: string[];
  urOptions: string[];
}

function build(): string {
  if (sha(AR_SRC) !== AR_SHA256) fail("QUL tajweed source changed.");
  if (sha(EN_SRC) !== EN_SHA256) fail("QUL English word-by-word source changed.");
  if (sha(UR_SRC) !== UR_SHA256) fail("QUL Urdu word-by-word source changed.");
  type TV = { text: string };
  const ar = JSON.parse(readFileSync(AR_SRC, "utf8")) as Record<string, TV>;
  const en = JSON.parse(readFileSync(EN_SRC, "utf8")) as Record<string, string>;
  const ur = JSON.parse(readFileSync(UR_SRC, "utf8")) as Record<string, string>;

  type Occ = { ref: string; full: string; en: string; cls: string | null; urRaw: string };
  const groups = new Map<string, Occ[]>();
  for (const [ref, v] of Object.entries(ar)) {
    if (!(ref in en) || !(ref in ur)) continue;
    const e = englishOf(en[ref]);
    if (!e.text || !ur[ref].trim()) continue;
    const k = formKey(v.text);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push({ ref, full: cleanArabic(v.text), en: e.text, cls: e.cls, urRaw: ur[ref] });
  }

  const byFreq = [...groups.entries()]
    .filter(([, o]) => o.length >= MIN_APPEARANCES)
    .sort((a, b) => b[1].length - a[1].length || (a[0] < b[0] ? -1 : 1));
  const chosenKeys = new Set<string>();
  const seenEn = new Set<string>();
  const words: Omit<QulWord, "enOptions" | "urOptions">[] = [];
  for (const [key, occ] of byFreq) {
    if (words.length === WORD_COUNT) break;
    // Skip وَ / فَ + a word already chosen (وَلَا when لَا is in): more distinct words.
    if (/^[\u0648\u0641][\u064E]/.test(key) && chosenKeys.has(key.slice(2))) continue;
    const n = occ.length;
    const ens = occ.map(o => o.en);
    const er = ranked(ens, s => s.toLowerCase());
    if (er[0][1] / n < 0.2) continue; // meanings too scattered to make a fair question
    const enAns = [displayEnglish(ens, er[0][0])];
    if (er[1] && er[1][1] / n >= 0.25 && !similar(er[0][0], er[1][0])) enAns.push(displayEnglish(ens, er[1][0]));
    const enAnswer = enAns.join(", ");
    if (seenEn.has(enAnswer.toLowerCase())) continue;
    const kind = ranked(occ.map(o => o.cls ?? "n"), s => s)[0][0];
    const urs = occ.map(o => urduOf(o.urRaw, kind));
    const urr = ranked(urs, s => s);
    const urAns = [urr[0][0]];
    if (urr[1] && urr[1][1] / n >= 0.25 && !similar(urr[0][0], urr[1][0])) urAns.push(urr[1][0]);
    const first = [...occ].sort((a, b) => refOrder(a.ref) - refOrder(b.ref))[0];
    const arabic = ranked(occ.map(o => o.full), s => s)[0][0];
    chosenKeys.add(key); seenEn.add(enAnswer.toLowerCase());
    words.push({ id: "", arabic, count: n, ref: first.ref, kind, en: enAnswer, ur: urAns.join("\u060C ") });
  }
  if (words.length !== WORD_COUNT) fail(`only ${words.length} words qualified`);

  // Wrong answers: same kind of word, no shared meaning in either language.
  const tokens = (s: string) => new Set(s.toLowerCase().split(/[\s,\u060C/]+/).filter(t => t && !["the", "a", "an", "of", "to"].includes(t)));
  const overlaps = (a: string, b: string) => { const A = tokens(a); return [...tokens(b)].some(t => A.has(t)); };
  const out: QulWord[] = words.map((w, i) => {
    const rand = rng(i + 1);
    const pool = words.filter(o => o !== w);
    const same = pool.filter(o => o.kind === w.kind);
    const picks: typeof words = [];
    for (const list of [same, pool]) {
      const shuffled = [...list].sort(() => rand() - 0.5);
      for (const o of shuffled) {
        if (picks.length === 3) break;
        const clash = [w, ...picks].some(p => overlaps(p.en, o.en) || overlaps(p.ur, o.ur) || p.ur === o.ur);
        if (!clash && !picks.includes(o)) picks.push(o);
      }
    }
    if (picks.length !== 3) fail(`no wrong answers for ${w.arabic}`);
    return { ...w, id: `qul-${String(i + 1).padStart(3, "0")}`, enOptions: [w.en, ...picks.map(p => p.en)], urOptions: [w.ur, ...picks.map(p => p.ur)] };
  });
  return JSON.stringify({
    source: "Quranic Universal Library (qul.tarteel.ai): QPC Hafs words (58), English word by word by Tarteel AI (564), Urdu word by word (93).",
    words: out,
  }, null, 1) + "\n";
}

const mode = process.argv[2];
const built = build();
if (mode === "build") {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, built);
  console.log(`quran-words: wrote ${WORD_COUNT} words`);
} else if (mode === "verify") {
  let cur = "";
  try { cur = readFileSync(OUT, "utf8"); } catch { fail("data/quran/words/qul-words.json is missing"); }
  if (cur !== built) fail("data/quran/words/qul-words.json differs from the build");
  console.log(`quran-words: OK, ${WORD_COUNT} words match the QUL sources`);
} else fail("usage: tsx scripts/quran-words-data.ts build|verify");
