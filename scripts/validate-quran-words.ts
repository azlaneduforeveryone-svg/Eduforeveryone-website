import fs from "fs";
import path from "path";
import { QURAN_WORDS } from "../lib/games/quran-words";

/**
 * Strips Arabic diacritics (harakat/tashkeel), dagger alifs, Quranic stop marks, and normalizes letters.
 */
export function normalizeArabic(text: string): string {
  if (!text) return "";
  return text
    // Remove Quranic annotation signs and stop marks (\u06D6 - \u06ED)
    .replace(/[\u06D6-\u06ED]/g, "")
    // Remove standard tashkeel (\u064B - \u065F)
    .replace(/[\u064B-\u065F]/g, "")
    // Remove Quranic honorifics / small signs (\u0610 - \u061A)
    .replace(/[\u0610-\u061A]/g, "")
    // Replace dagger alif (\u0670) with standard alif (\u0627)
    .replace(/\u0670/g, "ا")
    // Tatweel / Kashida
    .replace(/\u0640/g, "")
    // Normalize Alef forms (Alef wasla ٱ, Alef hamza above أ, Alef hamza below إ, Alef madda آ) -> Bare Alef ا
    .replace(/[ٱأإآ]/g, "ا")
    // Normalize multiple consecutive alifs
    .replace(/ا+/g, "ا")
    // Normalize alif maqsura ى -> ي
    .replace(/ى/g, "ي")
    // Normalize waw with dagger alif in Uthmani like الصلوة -> الصلاة
    .replace(/وا/g, "ا")
    .trim();
}

/**
 * Checks if the word appears in the ayah.
 */
export function wordAppearsInAyah(word: string, ayahText: string): boolean {
  const normWord = normalizeArabic(word);
  const normAyah = normalizeArabic(ayahText);

  // Direct substring check
  if (normAyah.includes(normWord)) return true;

  // Check with or without "ال" prefix
  if (normWord.startsWith("ال")) {
    const withoutAl = normWord.slice(2);
    if (withoutAl.length >= 2 && normAyah.includes(withoutAl)) return true;
  } else {
    const withAl = "ال" + normWord;
    if (normAyah.includes(withAl)) return true;
  }

  // Token level check
  const tokens = normAyah.split(/\s+/);
  for (const token of tokens) {
    if (token === normWord || token.includes(normWord)) return true;
  }

  return false;
}

interface ValidationResult {
  id: string;
  word: string;
  transliteration: string;
  meaning: string;
  options: string[];
  surahNumber: number;
  surahName: string;
  ayahNumber: number;
  reference: string;
  reviewed: boolean;
  check: "PASS" | "FAIL";
}

function escapeCsv(val: string): string {
  if (val.includes(",") || val.includes('"') || val.includes("\n") || val.includes("\r")) {
    return `"${val.replace(/"/g, '""')}"`;
  }
  return val;
}

async function fetchVerse(surah: number, ayah: number): Promise<string> {
  const urls = [
    `https://api.qurancdn.com/api/qdc/verses/by_key/${surah}:${ayah}?fields=text_uthmani`,
    `https://api.quran.com/api/v4/verses/by_key/${surah}:${ayah}?fields=text_uthmani`,
  ];

  for (const url of urls) {
    try {
      const res = await fetch(url, { headers: { Accept: "application/json" } });
      if (res.ok) {
        const data = await res.json();
        const text = data?.verse?.text_uthmani;
        if (text) return text;
      }
    } catch {
      // try next
    }
  }
  throw new Error(`Failed to fetch verse ${surah}:${ayah}`);
}

async function main() {
  console.log(`Validating ${QURAN_WORDS.length} Quran words against Quran.com API v4...\n`);
  const results: ValidationResult[] = [];

  for (const item of QURAN_WORDS) {
    try {
      const ayahText = await fetchVerse(item.surahNumber, item.ayahNumber);
      const passed = wordAppearsInAyah(item.arabic, ayahText);
      results.push({
        id: item.id,
        word: item.arabic,
        transliteration: item.transliteration,
        meaning: item.options[item.correct],
        options: item.options,
        surahNumber: item.surahNumber,
        surahName: item.surahName,
        ayahNumber: item.ayahNumber,
        reference: `${item.surahNumber}:${item.ayahNumber} (${item.surahName})`,
        reviewed: item.reviewed,
        check: passed ? "PASS" : "FAIL",
      });
      await new Promise((r) => setTimeout(r, 60));
    } catch (err) {
      console.error(`Error fetching ${item.id}:`, err);
      results.push({
        id: item.id,
        word: item.arabic,
        transliteration: item.transliteration,
        meaning: item.options[item.correct],
        options: item.options,
        surahNumber: item.surahNumber,
        surahName: item.surahName,
        ayahNumber: item.ayahNumber,
        reference: `${item.surahNumber}:${item.ayahNumber} (${item.surahName})`,
        reviewed: item.reviewed,
        check: "FAIL",
      });
    }
  }

  // Print required formatted table
  console.log("----------------------------------------------------------------------------------");
  console.log(
    "id".padEnd(8) +
    "word".padEnd(16) +
    "transliteration".padEnd(18) +
    "reference".padEnd(28) +
    "check"
  );
  console.log("----------------------------------------------------------------------------------");
  for (const r of results) {
    console.log(
      r.id.padEnd(8) +
      r.word.padEnd(16) +
      r.transliteration.padEnd(18) +
      r.reference.padEnd(28) +
      r.check
    );
  }
  console.log("----------------------------------------------------------------------------------");
  const passCount = results.filter((r) => r.check === "PASS").length;
  console.log(`Summary: ${passCount}/${results.length} PASSED\n`);

  // Update reports/quran-words-review.csv with the 'check' column and 'options' column
  const csvPath = path.resolve(__dirname, "../reports/quran-words-review.csv");
  const csvHeader = "id,word,transliteration,meaning,options,surah_number,surah_name,ayah_number,reviewed,check";
  const csvRows = results.map((r) => {
    const escapedMeaning = escapeCsv(r.meaning);
    const escapedOptions = escapeCsv(r.options.join(" | "));
    return `${r.id},${r.word},${r.transliteration},${escapedMeaning},${escapedOptions},${r.surahNumber},${r.surahName},${r.ayahNumber},${r.reviewed},${r.check}`;
  });
  const csvContent = [csvHeader, ...csvRows, ""].join("\n");
  fs.writeFileSync(csvPath, csvContent, "utf8");
  console.log(`Updated ${csvPath} with check results.`);
}

main().catch(console.error);
