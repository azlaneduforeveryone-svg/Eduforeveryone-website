/**
 * Build and verify the self-hosted Quran Arabic text.
 *
 * Source: Tanzil Quran Text (Uthmani, Version 1.1), downloaded from
 * https://tanzil.net/download with pause marks, sajdah signs and
 * rub-el-hizb signs ON, and "tatweel below superscript alefs" OFF.
 *
 * Tanzil terms: verbatim copies only, CHANGING THE TEXT IS NOT ALLOWED.
 * This script only splits the file per surah. It never edits a character,
 * and `verify` proves that on every build.
 *
 *   npx tsx scripts/quran-data.ts build    regenerate data/quran/uthmani/*.json
 *   npx tsx scripts/quran-data.ts verify   fail if anything differs from source
 */
import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";

const ROOT = join(__dirname, "..");
const SOURCE = join(ROOT, "data/quran/source/tanzil-quran-uthmani-v1.1.txt");
const OUT_DIR = join(ROOT, "data/quran/uthmani");

// SHA-256 of the file exactly as downloaded from tanzil.net (6 Nov 2026).
const SOURCE_SHA256 = "b9027e22eb7e69d326f1eb7467fed8b7bc1eccbe1a894887ed2b3feb4ef5fc90";

// Ayah count per surah (Hafs, 6,236 total).
const AYAH_COUNTS = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53,
  89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12,
  12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26,
  30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6,
];

export interface QuranSurahFile {
  surah: number;
  edition: "tanzil-uthmani-1.1";
  attribution: string;
  ayahs: { n: number; text: string }[];
}

function fail(msg: string): never {
  console.error(`quran-data: FAIL: ${msg}`);
  process.exit(1);
}

function readSource() {
  const raw = readFileSync(SOURCE);
  const hash = createHash("sha256").update(raw).digest("hex");
  if (hash !== SOURCE_SHA256) fail(`source file hash changed (${hash}). The Tanzil text must not be edited.`);

  const text = raw.toString("utf8");
  const copyright = text.split("\n").filter(l => l.startsWith("#")).join("\n");
  if (!copyright.includes("Tanzil Quran Text (Uthmani, Version 1.1)")) fail("copyright block missing");

  const bySurah = new Map<number, { n: number; text: string }[]>();
  for (const line of text.split("\n")) {
    const m = /^(\d+)\|(\d+)\|(.*)$/.exec(line.replace(/\r$/, ""));
    if (!m) continue;
    const s = Number(m[1]);
    if (!bySurah.has(s)) bySurah.set(s, []);
    bySurah.get(s)!.push({ n: Number(m[2]), text: m[3] });
  }

  let total = 0;
  for (let s = 1; s <= 114; s++) {
    const ayahs = bySurah.get(s) ?? [];
    if (ayahs.length !== AYAH_COUNTS[s - 1]) fail(`surah ${s}: ${ayahs.length} ayahs, expected ${AYAH_COUNTS[s - 1]}`);
    ayahs.forEach((a, i) => { if (a.n !== i + 1) fail(`surah ${s}: ayah numbering broken at ${a.n}`); });
    total += ayahs.length;
  }
  if (bySurah.size !== 114 || total !== 6236) fail(`expected 114 surahs / 6236 ayahs, got ${bySurah.size} / ${total}`);
  return { bySurah, copyright };
}

function render(surah: number, ayahs: { n: number; text: string }[], copyright: string): string {
  const file: QuranSurahFile = {
    surah,
    edition: "tanzil-uthmani-1.1",
    attribution: copyright,
    ayahs,
  };
  return JSON.stringify(file, null, 1) + "\n";
}

const pad = (s: number) => String(s).padStart(3, "0");
const mode = process.argv[2];
const { bySurah, copyright } = readSource();

if (mode === "build") {
  mkdirSync(OUT_DIR, { recursive: true });
  for (let s = 1; s <= 114; s++) writeFileSync(join(OUT_DIR, `${pad(s)}.json`), render(s, bySurah.get(s)!, copyright));
  console.log("quran-data: wrote 114 surah files (6,236 ayahs)");
} else if (mode === "verify") {
  const files = readdirSync(OUT_DIR).filter(f => f.endsWith(".json"));
  if (files.length !== 114) fail(`expected 114 JSON files in data/quran/uthmani, found ${files.length}`);
  for (let s = 1; s <= 114; s++) {
    const onDisk = readFileSync(join(OUT_DIR, `${pad(s)}.json`), "utf8");
    if (onDisk !== render(s, bySurah.get(s)!, copyright)) fail(`data/quran/uthmani/${pad(s)}.json differs from the Tanzil source`);
  }
  console.log("quran-data: OK, 114 files match Tanzil Uthmani v1.1 exactly");
} else {
  fail('usage: tsx scripts/quran-data.ts build|verify');
}
