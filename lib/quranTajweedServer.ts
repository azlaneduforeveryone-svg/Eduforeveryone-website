// lib/quranTajweedServer.ts
// Server-only: reads one surah of the colour-coded Tajweed data at build time.
import { readFileSync } from "fs";
import { join } from "path";
import { loadLocalSurah } from "@/lib/quranLocalServer";
import type { TajweedAyah } from "@/lib/quranTajweed";

export interface TajweedPageAyah {
  /** Global ayah number (1 to 6236), used for audio. */
  number: number;
  numberInSurah: number;
  juz: number;
  /** QPC Hafs text with tajweed colours (Uthmani view). */
  tajweed: TajweedAyah;
  /** Tanzil Uthmani text (IndoPak view, no colours). */
  text: string;
}

export interface TajweedPageSurah {
  number: number; name: string; englishName: string; englishNameTranslation: string;
  numberOfAyahs: number; revelationType: string;
  ayahs: TajweedPageAyah[];
}

export function loadTajweedSurah(surah: number): TajweedPageSurah {
  const local = loadLocalSurah(surah);
  const file = join(process.cwd(), "data/quran/tajweed", `${String(surah).padStart(3, "0")}.json`);
  const data = JSON.parse(readFileSync(file, "utf8")) as { surah: number; ayahs: TajweedAyah[] };
  if (data.surah !== surah || data.ayahs.length !== local.ayahs.length)
    throw new Error(`Tajweed data missing or wrong for surah ${surah}`);
  return {
    number: local.number, name: local.name, englishName: local.englishName,
    englishNameTranslation: local.englishNameTranslation,
    numberOfAyahs: local.numberOfAyahs, revelationType: local.revelationType,
    ayahs: local.ayahs.map((a, i) => ({
      number: a.number, numberInSurah: a.numberInSurah, juz: a.juz,
      tajweed: data.ayahs[i], text: a.text,
    })),
  };
}
