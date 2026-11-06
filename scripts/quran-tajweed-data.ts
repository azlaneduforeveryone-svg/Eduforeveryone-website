/**
 * Build and verify the colour-coded Tajweed data and the English word-by-word data.
 *
 * Arabic text: the KFGQPC QPC Hafs text the Quran Reader already uses
 * (data/quran/source/qul-qpc-hafs.json). Not one character of it is changed.
 *
 * Tajweed colours: "QPC Hafs Script - With Tajweed" (word by word) from the
 * Quranic Universal Library (qul.tarteel.ai/resources/quran-script/58). That
 * file is written in an older Unicode encoding, so it does NOT display
 * correctly in the KFGQPC Hafs v2.2 font. This script only copies its rule
 * markers onto the matching letters of the Reader text, word by word.
 *
 * English word by word: "Colored English wbw translation" by Tarteel AI, QUL
 * (qul.tarteel.ai/resources/translation/564). Keyed by the same word numbers
 * as the tajweed file.
 *
 *   npx tsx scripts/quran-tajweed-data.ts build
 *   npx tsx scripts/quran-tajweed-data.ts verify
 *
 * `verify` runs on every build and proves that, with the colour markers
 * removed, every ayah is exactly the Reader text.
 */
import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { TAJWEED_RULE_IDS } from "../lib/quranTajweed";

const ROOT = join(__dirname, "..");
const READER_SRC = join(ROOT, "data/quran/source/qul-qpc-hafs.json");
const TAJWEED_SRC = join(ROOT, "data/quran/source/qul-qpc-hafs-tajweed-wbw.json");
const WBW_SRC = join(ROOT, "data/quran/source/qul-wbw-en-colored.json");
const TAJWEED_OUT = join(ROOT, "data/quran/tajweed");
const WBW_OUT = join(ROOT, "public/quran/wbw-en");

// SHA-256 of the files exactly as downloaded from QUL (6 Nov 2026).
const READER_SHA256 = "93864197a949dac54f324875f41348875455bb138b7abdfde43daefe87230403";
const TAJWEED_SHA256 = "cd0b16e25cd69dbfddad11c5d2fb509c1f252bb6ccb249cf74f224a6d10908b7";
const WBW_SHA256 = "33a66d94fc955e8e33880ef4a0e122c9528315776af76fb203024cd867d027c5";

const WBW_CLASSES = new Set(["n", "v", "p", "pn", "paren", "punc"]);

const TAJWEED_ATTRIBUTION =
  "Arabic text: KFGQPC QPC Hafs (King Fahd Glorious Quran Printing Complex), unchanged. " +
  "Tajweed rule positions: \"QPC Hafs Script - With Tajweed\", Quranic Universal Library " +
  "(qul.tarteel.ai/resources/quran-script/58), copied onto the matching letters.";
const WBW_ATTRIBUTION =
  "English word by word: \"Colored English wbw translation\" by Tarteel AI, Quranic Universal " +
  "Library (qul.tarteel.ai/resources/translation/564).";

const sha = (p: string) => createHash("sha256").update(readFileSync(p)).digest("hex");
function fail(msg: string): never { console.error(`quran-tajweed: FAIL: ${msg}`); process.exit(1); }
const pad = (s: number) => String(s).padStart(3, "0");

// ── Tajweed markup ───────────────────────────────────────────────────────────
type Ch = { c: string; rule: string | null };

/** `<rule class=x>`, `<rule class='x'>`, nested rules, and one stray `&gt;` (32:3:3). */
function parseTajweed(markup: string, where: string): Ch[] {
  const out: Ch[] = [];
  const stack: string[] = [];
  const re = /<rule\b[^>]*?class=["']?([a-z_]+)["']?[^>]*>|<\/rule>|&(?:gt|lt|amp);|[\s\S]/gu;
  for (const m of markup.matchAll(re)) {
    const s = m[0];
    if (m[1]) {
      if (!(TAJWEED_RULE_IDS as readonly string[]).includes(m[1])) fail(`${where}: unknown rule "${m[1]}"`);
      stack.push(m[1]);
    } else if (s === "</rule>") {
      if (!stack.pop()) fail(`${where}: unbalanced </rule>`);
    } else if (s.startsWith("&") && s.length > 1) {
      continue; // HTML entity left in the source, not Quran text
    } else {
      out.push({ c: s, rule: stack.length ? stack[stack.length - 1] : null });
    }
  }
  if (stack.length) fail(`${where}: unclosed <rule>`);
  return out;
}

/** Base letters only, so the two encodings can be matched word to word. */
function skeleton(s: string): string {
  const t = s.replace(/ٔ/g, "ء").replace(/[ىٮ]/g, "ي").replace(/ٱ/g, "ا");
  let out = "";
  for (const ch of t) {
    const c = ch.codePointAt(0)!;
    if (c !== 0x640 && ((c >= 0x621 && c <= 0x64a) || (c >= 0x660 && c <= 0x669))) out += ch;
  }
  return out;
}

type Op = { tag: "equal" | "replace" | "insert" | "delete"; a1: number; a2: number; b1: number; b2: number };

/** Longest-common-subsequence alignment, grouped like Python's difflib opcodes. */
function opcodes(a: string[], b: string[]): Op[] {
  const n = a.length, m = b.length;
  const L: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  const ops: Op[] = [];
  let i = 0, j = 0, gi = 0, gj = 0;
  const flushGap = () => {
    if (gi < i || gj < j) {
      const tag = gi < i && gj < j ? "replace" : gi < i ? "delete" : "insert";
      ops.push({ tag, a1: gi, a2: i, b1: gj, b2: j });
    }
  };
  while (i < n || j < m) {
    if (i < n && j < m && a[i] === b[j]) {
      flushGap();
      const last = ops[ops.length - 1];
      if (last && last.tag === "equal" && last.a2 === i && last.b2 === j) { last.a2++; last.b2++; }
      else ops.push({ tag: "equal", a1: i, a2: i + 1, b1: j, b2: j + 1 });
      i++; j++; gi = i; gj = j;
    } else if (j >= m || (i < n && L[i + 1][j] >= L[i][j + 1])) i++;
    else j++;
  }
  flushGap();
  return ops;
}

function lcsLen(a: string, b: string): number {
  const A = [...a], B = [...b];
  let prev = new Array(B.length + 1).fill(0);
  for (let i = 1; i <= A.length; i++) {
    const cur = new Array(B.length + 1).fill(0);
    for (let j = 1; j <= B.length; j++) cur[j] = A[i - 1] === B[j - 1] ? prev[j - 1] + 1 : Math.max(prev[j], cur[j - 1]);
    prev = cur;
  }
  return prev[B.length];
}
const similarity = (x: string, y: string) => {
  const a = skeleton(x), b = skeleton(y);
  return a.length + b.length === 0 ? 1 : (2 * lcsLen(a, b)) / (a.length + b.length);
};

/** Give each letter of a Reader word the rule of the matching letter in the QUL word. */
function projectWord(readerWord: string, qul: Ch[]): (string | null)[] {
  const p = qul.map(x => x.c), r = [...readerWord];
  const rc: (string | null)[] = new Array(r.length).fill(null);
  for (const o of opcodes(p, r)) {
    if (o.tag === "equal") {
      for (let k = 0; k < o.a2 - o.a1; k++) rc[o.b1 + k] = qul[o.a1 + k].rule;
    } else if (o.tag === "replace" || o.tag === "insert") {
      for (let y = o.b1; y < o.b2; y++) {
        // A mark the two files write in a different order: follow the same character nearby.
        let hit = -1;
        for (let x = Math.max(0, o.a1 - 3); x < Math.min(p.length, o.a2 + 3); x++)
          if (p[x] === r[y] && qul[x].rule) { hit = x; break; }
        if (hit >= 0) rc[y] = qul[hit].rule;
        else if (o.tag === "replace") rc[y] = qul[o.a1 + Math.min(y - o.b1, o.a2 - o.a1 - 1)].rule;
        else {
          const prev = o.a1 > 0 ? qul[o.a1 - 1].rule : null;
          const next = o.a1 < qul.length ? qul[o.a1].rule : null;
          rc[y] = prev === next ? prev : null;
        }
      }
    }
  }
  return rc;
}

/** [text] or [text, index into TAJWEED_RULE_IDS]. */
type Run = [string] | [string, number];
type Word = { r: Run[]; q: number[] };
type TajweedAyah = { n: number; words: Word[]; sep: string[] };

function toRuns(chars: string[], rules: (string | null)[]): Run[] {
  const runs: Run[] = [];
  chars.forEach((c, i) => {
    const rule = rules[i] === null ? null : (TAJWEED_RULE_IDS as readonly string[]).indexOf(rules[i]!);
    const last = runs[runs.length - 1];
    if (last && (last[1] ?? null) === rule) last[0] += c;
    else runs.push(rule === null ? [c] : [c, rule]);
  });
  return runs;
}

// ── Load sources ─────────────────────────────────────────────────────────────
function loadSources() {
  if (sha(READER_SRC) !== READER_SHA256) fail("Reader QPC Hafs source changed.");
  if (sha(TAJWEED_SRC) !== TAJWEED_SHA256) fail("QUL tajweed source changed. It must not be edited.");
  if (sha(WBW_SRC) !== WBW_SHA256) fail("QUL word-by-word source changed. It must not be edited.");

  type RV = { surah: number; ayah: number; text: string };
  const reader = new Map<string, string>();
  for (const v of Object.values(JSON.parse(readFileSync(READER_SRC, "utf8")) as Record<string, RV>))
    reader.set(`${v.surah}:${v.ayah}`, v.text);
  if (reader.size !== 6236) fail(`Reader source has ${reader.size} ayahs`);

  type TV = { surah: string; ayah: string; word: string; text: string };
  const tajweed = new Map<string, Map<number, string>>();
  for (const v of Object.values(JSON.parse(readFileSync(TAJWEED_SRC, "utf8")) as Record<string, TV>)) {
    const key = `${+v.surah}:${+v.ayah}`;
    if (!tajweed.has(key)) tajweed.set(key, new Map());
    tajweed.get(key)!.set(+v.word, v.text);
  }

  const wbw = JSON.parse(readFileSync(WBW_SRC, "utf8")) as Record<string, string>;
  if (Object.keys(wbw).length !== 77429) fail(`word-by-word source has ${Object.keys(wbw).length} words, expected 77,429`);
  return { reader, tajweed, wbw };
}

// ── Build in memory ──────────────────────────────────────────────────────────
function buildAll() {
  const { reader, tajweed, wbw } = loadSources();
  const stats = { hizbMarks: 0, mergedWords: 0, missingEnd: 0, spellingDiffs: 0 };
  const tajweedFiles = new Map<number, string>();
  const wbwFiles = new Map<number, string>();

  for (let s = 1; s <= 114; s++) {
    const ayahs: TajweedAyah[] = [];
    const wbwAyahs: Record<string, ([string, string][] | null)[]> = {};
    for (let a = 1; reader.has(`${s}:${a}`); a++) {
      const key = `${s}:${a}`;
      const text = reader.get(key)!;
      const parts = text.split(/( | )/);
      const tokens = parts.filter((_, i) => i % 2 === 0);
      const sep = parts.filter((_, i) => i % 2 === 1);
      const qmap = tajweed.get(key) ?? fail(`${key}: missing from QUL tajweed file`);
      const qul = [...qmap.keys()].sort((x, y) => x - y)
        .map(n => ({ n, chars: parseTajweed(qmap.get(n)!, `${key}:${n}`).filter(ch => ch.c !== "۞") }));

      let qi = 0;
      const words: Word[] = tokens.map((tok, ti) => {
        const isEnd = ti === tokens.length - 1;
        if (tok === "۞") { stats.hizbMarks++; return { r: [[tok]], q: [] }; }
        if (isEnd && qi === qul.length) { stats.missingEnd++; return { r: [[tok]], q: [] }; }
        if (qi >= qul.length) fail(`${key}: Reader has more words than the QUL file`);

        let chars = [...qul[qi].chars]; const q = [qul[qi].n]; qi++;
        const txt = (c: Ch[]) => c.map(x => x.c).join("");
        const wordsLeft = tokens.length - 1 - ti; // Reader tokens still to match after this one
        while (qi < qul.length && qul.length - qi > wordsLeft - 1 && wordsLeft >= 0 &&
               similarity(txt([...chars, ...qul[qi].chars]), tok) > similarity(txt(chars), tok)) {
          chars = [...chars, ...qul[qi].chars]; q.push(qul[qi].n); qi++; stats.mergedWords++;
        }
        const sim = similarity(txt(chars), tok);
        if (sim < 1) {
          // The only accepted difference: the Reader writes ى where QUL writes a tatweel.
          const a = skeleton(txt(chars)), b = skeleton(tok);
          if (b.replace(/ي/g, "") !== a.replace(/ي/g, "") || b.length - a.length !== 1)
            fail(`${key} word ${ti + 1}: "${tok}" does not match QUL "${txt(chars)}"`);
          stats.spellingDiffs++;
        }
        const rules = projectWord(tok, chars);
        return { r: toRuns([...tok], rules), q: isEnd ? [] : q };
      });
      if (qi !== qul.length) fail(`${key}: ${qul.length - qi} QUL words left unmatched`);
      ayahs.push({ n: a, words, sep });

      // English word by word, indexed by QUL word number (the ayah-end number has none).
      const list: ([string, string][] | null)[] = [];
      for (const { n } of qul) {
        const html = wbw[`${key}:${n}`];
        if (html === undefined) { list.push(null); continue; }
        const spans = [...html.matchAll(/<span class='([a-z]+)'>([^<]*)<\/span>/g)];
        const rest = html.replace(/<span class='[a-z]+'>[^<]*<\/span>/g, "").trim();
        if (rest) fail(`${key}:${n}: unexpected English markup`);
        list.push(spans.map(m => {
          if (!WBW_CLASSES.has(m[1])) fail(`${key}:${n}: unknown English class "${m[1]}"`);
          return [m[1], m[2]] as [string, string];
        }));
      }
      wbwAyahs[String(a)] = list;
    }
    tajweedFiles.set(s, JSON.stringify({ surah: s, attribution: TAJWEED_ATTRIBUTION, ayahs }) + "\n");
    wbwFiles.set(s, JSON.stringify({ surah: s, attribution: WBW_ATTRIBUTION, ayahs: wbwAyahs }) + "\n");
  }
  return { reader, tajweedFiles, wbwFiles, stats };
}

/** Independent check: colour markers removed, every ayah is exactly the Reader text. */
function checkText(reader: Map<string, string>, tajweedFiles: Map<number, string>) {
  let n = 0;
  for (const [s, file] of tajweedFiles) {
    const data = JSON.parse(file) as { ayahs: TajweedAyah[] };
    for (const ay of data.ayahs) {
      let text = "";
      ay.words.forEach((w, i) => {
        for (const run of w.r) {
          if (run.length > 1 && !(run[1]! >= 0 && run[1]! < TAJWEED_RULE_IDS.length)) fail(`${s}:${ay.n}: bad rule ${run[1]}`);
          text += run[0];
        }
        if (i < ay.sep.length) text += ay.sep[i];
      });
      if (text !== reader.get(`${s}:${ay.n}`)) fail(`${s}:${ay.n}: text differs from the Reader QPC Hafs text`);
      n++;
    }
  }
  if (n !== 6236) fail(`expected 6236 ayahs, got ${n}`);
}

const mode = process.argv[2];
const { reader, tajweedFiles, wbwFiles, stats } = buildAll();
checkText(reader, tajweedFiles);

if (mode === "build") {
  mkdirSync(TAJWEED_OUT, { recursive: true });
  mkdirSync(WBW_OUT, { recursive: true });
  for (const [s, f] of tajweedFiles) writeFileSync(join(TAJWEED_OUT, `${pad(s)}.json`), f);
  for (const [s, f] of wbwFiles) writeFileSync(join(WBW_OUT, `${s}.json`), f);
  console.log(`quran-tajweed: wrote 114 tajweed + 114 word-by-word files`, stats);
} else if (mode === "verify") {
  const tFiles = readdirSync(TAJWEED_OUT).filter(f => f.endsWith(".json"));
  const wFiles = readdirSync(WBW_OUT).filter(f => f.endsWith(".json"));
  if (tFiles.length !== 114 || wFiles.length !== 114) fail(`expected 114 + 114 files, found ${tFiles.length} + ${wFiles.length}`);
  for (let s = 1; s <= 114; s++) {
    if (readFileSync(join(TAJWEED_OUT, `${pad(s)}.json`), "utf8") !== tajweedFiles.get(s))
      fail(`data/quran/tajweed/${pad(s)}.json differs from the build`);
    if (readFileSync(join(WBW_OUT, `${s}.json`), "utf8") !== wbwFiles.get(s))
      fail(`public/quran/wbw-en/${s}.json differs from the build`);
  }
  console.log("quran-tajweed: OK, 6,236 ayahs are exactly the Reader QPC Hafs text; colours and English match the QUL sources");
} else {
  fail("usage: tsx scripts/quran-tajweed-data.ts build|verify");
}
