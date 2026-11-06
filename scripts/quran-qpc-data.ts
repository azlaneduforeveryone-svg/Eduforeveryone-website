/**
 * Build and verify the self-hosted Uthmani (Madinah Mushaf) Quran text and font.
 *
 * Text: "QPC Hafs script - Ayah by Ayah" from the Quranic Universal Library
 * (qul.tarteel.ai/resources/quran-script/86), King Fahd Glorious Quran
 * Printing Complex. Each ayah ends with its number (after a no-break space),
 * which the font draws inside the ayah-end ornament.
 * Font: "KFGQPC HAFS Uthmanic Script" v2.2 (UthmanicHafs_V22). KFGQPC licence:
 * free to Use, Copy, Distribute; must not be Sold, Modified or Altered.
 *
 * This script only splits the text per surah. It never changes a character,
 * and `verify` proves that on every build.
 *
 *   npx tsx scripts/quran-qpc-data.ts build
 *   npx tsx scripts/quran-qpc-data.ts verify
 */
import { createHash } from "crypto";
import { readFileSync, writeFileSync, mkdirSync, readdirSync } from "fs";
import { join } from "path";
import { AYAH_COUNTS } from "../lib/quranLocal";

const ROOT = join(__dirname, "..");
const SOURCE = join(ROOT, "data/quran/source/qul-qpc-hafs.json");
const FONT = join(ROOT, "data/quran/fonts/kfgqpc-hafs-uthmanic-script-v2.2.woff2");
const OUT_DIR = join(ROOT, "data/quran/qpc");

// SHA-256 of the files exactly as downloaded (6 Nov 2026).
const SOURCE_SHA256 = "93864197a949dac54f324875f41348875455bb138b7abdfde43daefe87230403";
const FONT_SHA256 = "d7ae6b285ca600cffb83751cdda44947b7be47414a598689e1f152a01ba0292a";

const ATTRIBUTION =
  "Quran text (QPC Hafs, Madinah Mushaf) and font \"KFGQPC HAFS Uthmanic Script\" v2.2 by the " +
  "King Fahd Glorious Quran Printing Complex, obtained from the Quranic Universal Library " +
  "(qul.tarteel.ai/resources/quran-script/86). Font licence: free to use, copy and distribute; " +
  "it must not be sold, modified or altered.";

const sha = (p: string) => createHash("sha256").update(readFileSync(p)).digest("hex");
function fail(msg: string): never { console.error(`quran-qpc: FAIL: ${msg}`); process.exit(1); }

function readSource() {
  if (sha(FONT) !== FONT_SHA256) fail("font file changed. It must not be modified.");
  const hash = sha(SOURCE);
  if (hash !== SOURCE_SHA256) fail(`source file hash changed (${hash}). The QPC text must not be edited.`);

  type Verse = { id: number; verse_key: string; surah: number; ayah: number; text: string };
  const verses = Object.values(JSON.parse(readFileSync(SOURCE, "utf8")) as Record<string, Verse>)
    .sort((a, b) => a.id - b.id);

  const bySurah = new Map<number, { n: number; text: string }[]>();
  for (const v of verses) {
    if (!bySurah.has(v.surah)) bySurah.set(v.surah, []);
    bySurah.get(v.surah)!.push({ n: v.ayah, text: v.text });
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

function render(surah: number, ayahs: { n: number; text: string }[]): string {
  return JSON.stringify({ surah, edition: "qul-qpc-hafs", attribution: ATTRIBUTION, ayahs }, null, 1) + "\n";
}

const pad = (s: number) => String(s).padStart(3, "0");
const mode = process.argv[2];
const bySurah = readSource();

if (mode === "build") {
  mkdirSync(OUT_DIR, { recursive: true });
  for (let s = 1; s <= 114; s++) writeFileSync(join(OUT_DIR, `${pad(s)}.json`), render(s, bySurah.get(s)!));
  console.log("quran-qpc: wrote 114 surah files (6,236 ayahs)");
} else if (mode === "verify") {
  const files = readdirSync(OUT_DIR).filter(f => f.endsWith(".json"));
  if (files.length !== 114) fail(`expected 114 JSON files in data/quran/qpc, found ${files.length}`);
  for (let s = 1; s <= 114; s++) {
    if (readFileSync(join(OUT_DIR, `${pad(s)}.json`), "utf8") !== render(s, bySurah.get(s)!))
      fail(`data/quran/qpc/${pad(s)}.json differs from the source`);
  }
  console.log("quran-qpc: OK, 114 files and font match the KFGQPC QPC Hafs source exactly");
} else {
  fail("usage: tsx scripts/quran-qpc-data.ts build|verify");
}
