/**
 * Build and verify the Quran search files (public/quran/search/*.json).
 *
 *   ar.json  QPC Hafs text of every ayah (the Reader's text), unchanged.
 *   en.json  English word by word per ayah (Tarteel AI, QUL 564), helper words removed.
 *   ur.json  Urdu word by word per ayah (QUL 93).
 *
 * Ayahs are listed in Quran order (index 0 = 1:1, index 6235 = 114:6).
 * The browser downloads a file only when that kind of search is used.
 *
 *   npx tsx scripts/quran-search-data.ts build
 *   npx tsx scripts/quran-search-data.ts verify
 */
import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..");
const READER_SRC = join(ROOT, "data/quran/source/qul-qpc-hafs.json");
const EN_SRC = join(ROOT, "data/quran/source/qul-wbw-en-colored.json");
const UR_SRC = join(ROOT, "data/quran/source/qul-wbw-ur.json");
const OUT = join(ROOT, "public/quran/search");

const READER_SHA256 = "93864197a949dac54f324875f41348875455bb138b7abdfde43daefe87230403";
const EN_SHA256 = "33a66d94fc955e8e33880ef4a0e122c9528315776af76fb203024cd867d027c5";
const UR_SHA256 = "005f2ad0cdcb0bb18ed1e368c4d622162569e62ca78d17e0434a95f0848f4ace";

const sha = (p: string) => createHash("sha256").update(readFileSync(p)).digest("hex");
function fail(msg: string): never { console.error(`quran-search: FAIL: ${msg}`); process.exit(1); }

function englishWord(html: string): string {
  return [...html.matchAll(/<span class='([a-z]+)'>([^<]*)<\/span>/g)]
    .filter(m => m[1] !== "punc").map(m => m[2]).join(" ")
    .replace(/\s+([,.;:!?)\]])/g, "$1").replace(/([([])\s+/g, "$1").trim();
}

function build(): Map<string, string> {
  if (sha(READER_SRC) !== READER_SHA256) fail("Reader QPC Hafs source changed.");
  if (sha(EN_SRC) !== EN_SHA256) fail("QUL English word-by-word source changed.");
  if (sha(UR_SRC) !== UR_SHA256) fail("QUL Urdu word-by-word source changed.");
  type RV = { surah: number; ayah: number; text: string };
  const reader = Object.values(JSON.parse(readFileSync(READER_SRC, "utf8")) as Record<string, RV>)
    .sort((a, b) => a.surah - b.surah || a.ayah - b.ayah);
  if (reader.length !== 6236) fail(`Reader source has ${reader.length} ayahs`);
  const en = JSON.parse(readFileSync(EN_SRC, "utf8")) as Record<string, string>;
  const ur = JSON.parse(readFileSync(UR_SRC, "utf8")) as Record<string, string>;

  const counts: number[] = [];
  const ar: string[] = [], enA: string[][] = [], urA: string[][] = [];
  for (const v of reader) {
    counts[v.surah - 1] = (counts[v.surah - 1] ?? 0) + 1;
    ar.push(v.text);
    const e: string[] = [], u: string[] = [];
    for (let w = 1; `${v.surah}:${v.ayah}:${w}` in en; w++) {
      const key = `${v.surah}:${v.ayah}:${w}`;
      e.push(englishWord(en[key]));
      u.push((ur[key] ?? "").replace(/\s+/g, " ").trim());
    }
    if (!e.length) fail(`${v.surah}:${v.ayah}: no word-by-word English`);
    enA.push(e); urA.push(u);
  }
  const note = "Quran order; ayahCounts[i] = ayahs in surah i+1.";
  return new Map([
    ["ar.json", JSON.stringify({ note, source: "KFGQPC QPC Hafs (unchanged)", ayahCounts: counts, ayahs: ar }) + "\n"],
    ["en.json", JSON.stringify({ note, source: "English word by word: Tarteel AI, Quranic Universal Library (resource 564)", ayahCounts: counts, ayahs: enA }) + "\n"],
    ["ur.json", JSON.stringify({ note, source: "Urdu word by word: Quranic Universal Library (resource 93)", ayahCounts: counts, ayahs: urA }) + "\n"],
  ]);
}

const mode = process.argv[2];
const files = build();
if (mode === "build") {
  mkdirSync(OUT, { recursive: true });
  for (const [name, body] of files) writeFileSync(join(OUT, name), body);
  console.log("quran-search: wrote ar.json, en.json, ur.json");
} else if (mode === "verify") {
  for (const [name, body] of files) {
    let cur = "";
    try { cur = readFileSync(join(OUT, name), "utf8"); } catch { fail(`public/quran/search/${name} is missing`); }
    if (cur !== body) fail(`public/quran/search/${name} differs from the build`);
  }
  console.log("quran-search: OK, search files match the QPC Hafs and QUL sources");
} else fail("usage: tsx scripts/quran-search-data.ts build|verify");
