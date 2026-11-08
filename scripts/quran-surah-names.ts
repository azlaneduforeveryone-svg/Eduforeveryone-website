/**
 * Verify the surah-name font and its code table (lib/surahNames.ts).
 *
 * The table was made from this exact font file: code n draws "سورة <surah n>", checked by
 * drawing all 114 names. If the font file changes, the table must be checked again.
 *
 *   npx tsx scripts/quran-surah-names.ts verify
 */
import { createHash } from "crypto";
import { readFileSync } from "fs";
import { join } from "path";
import { SURAH_NAME_CODES } from "../lib/surahNames";

const FONT = join(__dirname, "..", "data/quran/fonts/qcf-surah-names-v1.woff2");
// SHA-256 of "QCF_FullSurah_HD_COLOR-v1" (King Fahd Complex) as uploaded on 8 Nov 2026.
const FONT_SHA256 = "1a0050c40067db93ac3446494baf728fd02973e851ad16f6ef4b3142c5561250";

function fail(msg: string): never { console.error(`quran-surah-names: FAIL: ${msg}`); process.exit(1); }
if (process.argv[2] !== "verify") fail("usage: tsx scripts/quran-surah-names.ts verify");
if (createHash("sha256").update(readFileSync(FONT)).digest("hex") !== FONT_SHA256)
  fail("surah-name font changed: re-check lib/surahNames.ts against the new font");
if (SURAH_NAME_CODES.length !== 114 || new Set(SURAH_NAME_CODES).size !== 114)
  fail("lib/surahNames.ts must list 114 different codes");
console.log("quran-surah-names: OK, font and 114 surah-name codes match");
