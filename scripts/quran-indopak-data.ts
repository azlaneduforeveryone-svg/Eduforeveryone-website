/**
 * Build and verify the self-hosted IndoPak Quran text and its font.
 *
 * Text: IndoPak Nastaleeq (Hanafi), word by word, from the Quranic Universal
 * Library (qul.tarteel.ai/resources/quran-script/59), made by QuranWBW.com
 * (Ayman Siddiqui, R. Siddiqua). Their terms: do not sell, do not modify or
 * tamper, always give credit. Font: "AlQuran IndoPak by QuranWBW" v2.100,
 * the only font this text renders correctly with.
 *
 * This script only groups the words into ayahs (joined by one space, the same
 * way QUL builds its ayah-by-ayah text) and splits them per surah. It never
 * changes a character, and `verify` proves that on every build.
 *
 *   npx tsx scripts/quran-indopak-data.ts build
 *   npx tsx scripts/quran-indopak-data.ts verify
 */
import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { AYAH_COUNTS } from "../lib/quranLocal";

const ROOT = join(__dirname, "..");
const SOURCE = join(ROOT, "data/quran/source/qul-indopak-nastaleeq-hanafi.json");
const FONT = join(ROOT, "data/quran/fonts/alquran-indopak-by-quranwbw-v2.100.woff2");
const OUT_DIR = join(ROOT, "data/quran/indopak");

// SHA-256 of the files exactly as downloaded (6 Nov 2026).
const SOURCE_SHA256 = "897ac06f3f508915b6e30fd6c16b1bdf8dc540f59482227f6b503cf0f981c5af";
const FONT_SHA256 = "01f10434c0f0e30303647603e0018fb9fe08b81e3e7716804e00dfc37d2b5a7c";

const ATTRIBUTION =
  "IndoPak Nastaleeq Quran text (Hanafi) and the font \"AlQuran IndoPak by QuranWBW\" (v2.100) " +
  "by QuranWBW.com (Ayman Siddiqui, R. Siddiqua), obtained from the Quranic Universal Library " +
  "(qul.tarteel.ai/resources/quran-script/59). Made for Sadaqa-e-Jaria. Do not sell, modify or " +
  "tamper with this text, and always give credit.";

const sha = (p: string) => createHash("sha256").update(readFileSync(p)).digest("hex");
function fail(msg: string): never { console.error(`quran-indopak: FAIL: ${msg}`); process.exit(1); }

function readSource() {
  if (sha(FONT) !== FONT_SHA256) fail("font file changed. It must not be modified.");
  const hash = sha(SOURCE);
  if (hash !== SOURCE_SHA256) fail(`source file hash changed (${hash}). The IndoPak text must not be edited.`);

  type Word = { id: number; surah: string; ayah: string; word: string; location: string; text: string };
  const words = Object.values(JSON.parse(readFileSync(SOURCE, "utf8")) as Record<string, Word>)
    .sort((a, b) => a.id - b.id);

  const bySurah = new Map<number, { n: number; words: string[] }[]>();
  for (const w of words) {
    const s = Number(w.surah), a = Number(w.ayah);
    if (!bySurah.has(s)) bySurah.set(s, []);
    const list = bySurah.get(s)!;
    if (list.length === 0 || list[list.length - 1].n !== a) list.push({ n: a, words: [] });
    const ayah = list[list.length - 1];
    if (Number(w.word) !== ayah.words.length + 1) fail(`${w.location}: word numbering broken`);
    ayah.words.push(w.text);
  }

  let total = 0;
  for (let s = 1; s <= 114; s++) {
    const ayahs = bySurah.get(s) ?? [];
    if (ayahs.length !== AYAH_COUNTS[s - 1]) fail(`surah ${s}: ${ayahs.length} ayahs, expected ${AYAH_COUNTS[s - 1]}`);
    ayahs.forEach((a, i) => { if (a.n !== i + 1) fail(`surah ${s}: ayah numbering broken at ${a.n}`); });
    total += ayahs.length;
  }
  if (total !== 6236) fail(`expected 6236 ayahs, got ${total}`);
  return bySurah;
}

function render(surah: number, ayahs: { n: number; words: string[] }[]): string {
  return JSON.stringify({
    surah,
    edition: "qul-indopak-nastaleeq-hanafi",
    attribution: ATTRIBUTION,
    ayahs: ayahs.map(a => ({ n: a.n, text: a.words.join(" ") })),
  }, null, 1) + "\n";
}

const pad = (s: number) => String(s).padStart(3, "0");
const mode = process.argv[2];
const bySurah = readSource();

if (mode === "build") {
  mkdirSync(OUT_DIR, { recursive: true });
  for (let s = 1; s <= 114; s++) writeFileSync(join(OUT_DIR, `${pad(s)}.json`), render(s, bySurah.get(s)!));
  console.log("quran-indopak: wrote 114 surah files (6,236 ayahs)");
} else if (mode === "verify") {
  const files = readdirSync(OUT_DIR).filter(f => f.endsWith(".json"));
  if (files.length !== 114) fail(`expected 114 JSON files in data/quran/indopak, found ${files.length}`);
  for (let s = 1; s <= 114; s++) {
    if (readFileSync(join(OUT_DIR, `${pad(s)}.json`), "utf8") !== render(s, bySurah.get(s)!))
      fail(`data/quran/indopak/${pad(s)}.json differs from the source`);
  }
  console.log("quran-indopak: OK, 114 files and font match the QuranWBW IndoPak source exactly");
} else {
  fail("usage: tsx scripts/quran-indopak-data.ts build|verify");
}
