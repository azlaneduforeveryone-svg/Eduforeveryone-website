/**
 * Build and verify the Indo-Pak Quran text, with tajweed colours for the Tajweed page.
 *
 * Text: "Indopak Nastaleeq script - Ayah by Ayah", Quranic Universal Library
 * (qul.tarteel.ai/resources/quran-script/89). Not one character is changed.
 * Font: "AlQuran IndoPak by QuranWBW" (QUL font 242), the font this text was made for.
 * It draws the ayah-end circles and numbers (private-use codes in the text).
 *
 * Tajweed colours: the rules from "QPC Hafs Script - With Tajweed" (QUL 58) are copied
 * onto the matching Indo-Pak letters. The two scripts spell words differently
 * (اِنَّ / إِنَّ, ی / ي, a full ا / a small alif, ٗ ٖ / ۥ ۦ), so letters are matched across
 * the whole ayah after unifying those spellings. Waqf signs and ayah-end marks are never coloured.
 *
 *   npx tsx scripts/quran-indopak-data.ts build
 *   npx tsx scripts/quran-indopak-data.ts verify
 */
import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { TAJWEED_RULE_IDS } from "../lib/quranTajweed";

const ROOT = join(__dirname, "..");
const INDOPAK_SRC = join(ROOT, "data/quran/source/qul-indopak-nastaleeq.json");
const INDOPAK_FONT = join(ROOT, "data/quran/fonts/alquran-indopak-quranwbw.woff2");
const TAJWEED_SRC = join(ROOT, "data/quran/source/qul-qpc-hafs-tajweed-wbw.json");
const OUT = join(ROOT, "data/quran/indopak");

// SHA-256 of the files exactly as downloaded from QUL (6 Nov 2026).
const INDOPAK_SHA256 = "4b803f399a82b8cc7267b05b3584c6f2052679811b8b87cab5605cf76e956eb3";
const FONT_SHA256 = "01f10434c0f0e30303647603e0018fb9fe08b81e3e7716804e00dfc37d2b5a7c";
const TAJWEED_SHA256 = "cd0b16e25cd69dbfddad11c5d2fb509c1f252bb6ccb249cf74f224a6d10908b7";

const ATTRIBUTION =
  "Indo-Pak text: \"Indopak Nastaleeq script\", Quranic Universal Library (qul.tarteel.ai/resources/quran-script/89), unchanged. " +
  "Font: AlQuran IndoPak by QuranWBW. Tajweed rule positions copied from QUL \"QPC Hafs Script - With Tajweed\" (resource 58).";

const sha = (p: string) => createHash("sha256").update(readFileSync(p)).digest("hex");
function fail(msg: string): never { console.error(`quran-indopak: FAIL: ${msg}`); process.exit(1); }
const pad = (s: number) => String(s).padStart(3, "0");

// ── QUL tajweed markup ───────────────────────────────────────────────────────
type Ch = { c: string; rule: string | null };
function parseTajweed(markup: string): Ch[] {
  const out: Ch[] = []; const stack: string[] = [];
  const re = /<rule\b[^>]*?class=["']?([a-z_]+)["']?[^>]*>|<\/rule>|&(?:gt|lt|amp);|[\s\S]/gu;
  for (const m of markup.matchAll(re)) {
    const s = m[0];
    if (m[1]) stack.push(m[1]);
    else if (s === "</rule>") stack.pop();
    else if (s.startsWith("&") && s.length > 1) continue;
    else out.push({ c: s, rule: stack.length ? stack[stack.length - 1] : null });
  }
  return out;
}

// ── Letter matching ──────────────────────────────────────────────────────────
// Hamza seats, alif forms and regional letter shapes are unified so both spellings compare.
const LETTER: Record<string, string> = {
  "ٱ": "ا", "أ": "ا", "إ": "ا", "آ": "ا", "ٰ": "ا",
  "ٖ": "ي", "ٗ": "و", // Indo-Pak khari zer / ulta pesh = QUL small ya / small waw
  "ی": "ي", "ى": "ي", "ے": "ي", "ئ": "ي", "ٮ": "ي", "ۦ": "ي",
  "ؤ": "و", "ۥ": "و", "ہ": "ه", "ۃ": "ة", "ک": "ك",
};
const DROP = new Set(["ء", "ٔ", "ٕ", "ـ", "ٴ"]);
function letterOf(c: string): string | null {
  if (DROP.has(c)) return null;
  const l = LETTER[c] ?? c;
  const cp = l.codePointAt(0)!;
  return cp >= 0x621 && cp <= 0x64a ? l : null;
}
/** Waqf signs and the like: never coloured. */
function isWaqfSign(c: string): boolean {
  const cp = c.codePointAt(0)!;
  return (cp >= 0x6d6 && cp <= 0x6dc) || cp === 0x6de || cp === 0x6e9 || (cp >= 0xf500 && cp <= 0xf5ff) || cp === 0xf61e || cp === 0xf61f;
}

type Unit = { l: string; idx: number[] };
/** One unit per letter, with the marks that follow it. Marks after a space belong to no letter. */
function units(chars: string[]): Unit[] {
  const us: Unit[] = []; let attach = false;
  chars.forEach((c, i) => {
    const l = letterOf(c);
    if (l) { us.push({ l, idx: [i] }); attach = true; }
    else if (c === " " || c === " ") attach = false;
    else if (attach && us.length) us[us.length - 1].idx.push(i);
  });
  return us;
}

/** Longest common subsequence of letters, then pair letters the two scripts write in another order. */
function matchLetters(a: string[], b: string[]): [number, number][] {
  const n = a.length, m = b.length;
  const L: Int32Array[] = Array.from({ length: n + 1 }, () => new Int32Array(m + 1));
  for (let i = n - 1; i >= 0; i--)
    for (let j = m - 1; j >= 0; j--)
      L[i][j] = a[i] === b[j] ? L[i + 1][j + 1] + 1 : Math.max(L[i + 1][j], L[i][j + 1]);
  let pairs: [number, number][] = [];
  for (let i = 0, j = 0; i < n && j < m;) {
    if (a[i] === b[j]) { pairs.push([i, j]); i++; j++; }
    else if (L[i + 1][j] >= L[i][j + 1]) i++;
    else j++;
  }
  // Same gap between two matches: pair leftover letters that are equal.
  const full: [number, number][] = [[-1, -1], ...pairs, [n, m]];
  const extra: [number, number][] = [];
  for (let k = 0; k + 1 < full.length; k++) {
    const used = new Set<number>();
    for (let x = full[k][0] + 1; x < full[k + 1][0]; x++)
      for (let y = full[k][1] + 1; y < full[k + 1][1]; y++)
        if (!used.has(y) && a[x] === b[y]) { extra.push([x, y]); used.add(y); break; }
  }
  pairs = [...pairs, ...extra].sort((p, q) => p[1] - q[1]);
  // Still unmatched: look up to 2 letters either side of where the letter would sit.
  const ma = new Set(pairs.map(p => p[0])), mb = new Set(pairs.map(p => p[1]));
  const pos = new Map<number, number>(pairs.map(p => [p[1], p[0]] as [number, number]));
  for (let y = 0; y < m; y++) {
    if (mb.has(y)) continue;
    let prev = -1;
    pos.forEach((x, t) => { if (t < y && x > prev) prev = x; });
    for (let x = Math.max(0, prev - 1); x < Math.min(n, prev + 4); x++)
      if (!ma.has(x) && a[x] === b[y]) { pairs.push([x, y]); ma.add(x); mb.add(y); pos.set(y, x); break; }
  }
  return pairs;
}

type Run = [string] | [string, number];

function colourAyah(text: string, qul: Ch[]): Run[] {
  const ichars = [...text];
  const iu = units(ichars), qu = units(qul.map(q => q.c));
  const rules: (string | null)[] = new Array(ichars.length).fill(null);
  for (const [ii, qi] of matchLetters(iu.map(u => u.l), qu.map(u => u.l))) {
    const qrules = qu[qi].idx.map(x => qul[x].rule);
    const r = qrules.find(x => x) ?? null;
    if (!r) continue;
    for (const x of iu[ii].idx) if (!isWaqfSign(ichars[x])) rules[x] = r;
  }
  const runs: Run[] = [];
  ichars.forEach((c, i) => {
    const r = rules[i] === null ? null : (TAJWEED_RULE_IDS as readonly string[]).indexOf(rules[i]!);
    if (r === -1) fail(`unknown rule ${rules[i]}`);
    const last = runs[runs.length - 1];
    if (last && (last[1] ?? null) === r) last[0] += c;
    else runs.push(r === null ? [c] : [c, r]);
  });
  return runs;
}

// ── Build ────────────────────────────────────────────────────────────────────
function buildAll() {
  if (sha(INDOPAK_SRC) !== INDOPAK_SHA256) fail("Indo-Pak source changed. It must not be edited.");
  if (sha(INDOPAK_FONT) !== FONT_SHA256) fail("Indo-Pak font changed. It must not be edited.");
  if (sha(TAJWEED_SRC) !== TAJWEED_SHA256) fail("QUL tajweed source changed. It must not be edited.");

  type IV = { surah: number; ayah: number; text: string };
  const ip = new Map<string, string>();
  for (const v of Object.values(JSON.parse(readFileSync(INDOPAK_SRC, "utf8")) as Record<string, IV>))
    ip.set(`${v.surah}:${v.ayah}`, v.text);
  if (ip.size !== 6236) fail(`Indo-Pak source has ${ip.size} ayahs`);

  type TV = { surah: string; ayah: string; word: string; text: string };
  const words = new Map<string, Map<number, string>>();
  for (const v of Object.values(JSON.parse(readFileSync(TAJWEED_SRC, "utf8")) as Record<string, TV>)) {
    const key = `${+v.surah}:${+v.ayah}`;
    if (!words.has(key)) words.set(key, new Map());
    words.get(key)!.set(+v.word, v.text);
  }

  const files = new Map<number, string>();
  let letters = 0, coloured = 0;
  for (let s = 1; s <= 114; s++) {
    const ayahs: { n: number; text: string; runs: Run[] }[] = [];
    for (let a = 1; ip.has(`${s}:${a}`); a++) {
      const key = `${s}:${a}`;
      const qmap = words.get(key) ?? fail(`${key}: missing from QUL tajweed file`);
      const qul: Ch[] = [];
      [...qmap.keys()].sort((x, y) => x - y).forEach(n => {
        if (qul.length) qul.push({ c: " ", rule: null });
        qul.push(...parseTajweed(qmap.get(n)!));
      });
      const text = ip.get(key)!;
      const runs = colourAyah(text, qul);
      if (runs.map(r => r[0]).join("") !== text) fail(`${key}: coloured text differs from the source`);
      for (const r of runs) { letters += [...r[0]].length; if (r.length > 1) coloured += [...r[0]].length; }
      ayahs.push({ n: a, text, runs });
    }
    files.set(s, JSON.stringify({ surah: s, attribution: ATTRIBUTION, ayahs }) + "\n");
  }
  return { files, letters, coloured };
}

const mode = process.argv[2];
const { files, letters, coloured } = buildAll();
if (mode === "build") {
  mkdirSync(OUT, { recursive: true });
  for (const [s, f] of files) writeFileSync(join(OUT, `${pad(s)}.json`), f);
  console.log(`quran-indopak: wrote 114 files (${coloured} of ${letters} characters coloured)`);
} else if (mode === "verify") {
  const found = readdirSync(OUT).filter(f => f.endsWith(".json"));
  if (found.length !== 114) fail(`expected 114 files, found ${found.length}`);
  for (let s = 1; s <= 114; s++)
    if (readFileSync(join(OUT, `${pad(s)}.json`), "utf8") !== files.get(s))
      fail(`data/quran/indopak/${pad(s)}.json differs from the build`);
  console.log("quran-indopak: OK, 114 files and font match the QUL Indo-Pak Nastaleeq source exactly");
} else {
  fail("usage: tsx scripts/quran-indopak-data.ts build|verify");
}
