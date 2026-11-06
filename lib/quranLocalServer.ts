// lib/quranLocalServer.ts
// Server-only: reads one surah of the self-hosted Tanzil text at build time.
import { readFileSync } from "fs";
import { join } from "path";
import { getSurahMeta } from "@/lib/quranSurahMeta";
import { SURAH_MEANINGS, juzOf, globalAyahNumber } from "@/lib/quranLocal";

export interface LocalAyah { number: number; numberInSurah: number; juz: number; text: string; textIndopak: string }
export interface LocalSurah {
  number: number; name: string; englishName: string; englishNameTranslation: string;
  numberOfAyahs: number; revelationType: string; ayahs: LocalAyah[];
  /** IndoPak Bismillah for the header: the first four words of 1:1, unchanged. */
  bismillahIndopak: string;
}

function readIndopak(surah: number) {
  const file = join(process.cwd(), "data/quran/indopak", `${String(surah).padStart(3, "0")}.json`);
  return JSON.parse(readFileSync(file, "utf8")) as { surah: number; ayahs: { n: number; text: string }[] };
}

export function loadLocalSurah(surah: number): LocalSurah {
  const file = join(process.cwd(), "data/quran/uthmani", `${String(surah).padStart(3, "0")}.json`);
  const data = JSON.parse(readFileSync(file, "utf8")) as { surah: number; ayahs: { n: number; text: string }[] };
  const ip = readIndopak(surah);
  if (ip.ayahs.length !== data.ayahs.length) throw new Error(`IndoPak ayah count differs for surah ${surah}`);
  const meta = getSurahMeta(surah);
  if (!meta || data.surah !== surah) throw new Error(`Quran data missing for surah ${surah}`);
  return {
    number: surah,
    name: meta.arabicName,
    englishName: meta.name,
    englishNameTranslation: SURAH_MEANINGS[surah - 1],
    numberOfAyahs: data.ayahs.length,
    revelationType: meta.revelation,
    ayahs: data.ayahs.map((a, i) => ({
      number: globalAyahNumber(surah, a.n),
      numberInSurah: a.n,
      juz: juzOf(surah, a.n),
      text: a.text,
      textIndopak: ip.ayahs[i].text,
    })),
    bismillahIndopak: readIndopak(1).ayahs[0].text.split(" ").slice(0, 4).join(" "),
  };
}
