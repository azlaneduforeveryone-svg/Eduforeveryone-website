// lib/quranLocalServer.ts
// Server-only: reads one surah of the self-hosted Tanzil text at build time.
import { readFileSync } from "fs";
import { join } from "path";
import { getSurahMeta } from "@/lib/quranSurahMeta";
import { SURAH_MEANINGS, juzOf, globalAyahNumber } from "@/lib/quranLocal";

export interface LocalAyah {
  number: number; numberInSurah: number; juz: number;
  /** Tanzil Uthmani text (kept for reference). */
  text: string;
  /** KFGQPC QPC Hafs text, shown in the reader. Ends with its ayah number. */
  textQpc: string;
  /** QUL Indo-Pak Nastaleeq text (Indo-Pak view). Ends with its ayah-end circle and number. */
  textIndopak: string;
}
export interface LocalSurah {
  number: number; name: string; englishName: string; englishNameTranslation: string;
  numberOfAyahs: number; revelationType: string; ayahs: LocalAyah[];
  /** QPC Bismillah for the header: 1:1 without its ayah number, unchanged. */
  bismillahQpc: string;
  /** Indo-Pak Bismillah for the header: 1:1 without its ayah-end circle, unchanged. */
  bismillahIndopak: string;
}

export interface IndopakAyahFile { n: number; text: string; runs: ([string] | [string, number])[] }
export function readIndopak(surah: number) {
  const file = join(process.cwd(), "data/quran/indopak", `${String(surah).padStart(3, "0")}.json`);
  return JSON.parse(readFileSync(file, "utf8")) as { surah: number; ayahs: IndopakAyahFile[] };
}

function readQpc(surah: number) {
  const file = join(process.cwd(), "data/quran/qpc", `${String(surah).padStart(3, "0")}.json`);
  return JSON.parse(readFileSync(file, "utf8")) as { surah: number; ayahs: { n: number; text: string }[] };
}

export function loadLocalSurah(surah: number): LocalSurah {
  const file = join(process.cwd(), "data/quran/uthmani", `${String(surah).padStart(3, "0")}.json`);
  const data = JSON.parse(readFileSync(file, "utf8")) as { surah: number; ayahs: { n: number; text: string }[] };
  const qpc = readQpc(surah);
  if (qpc.ayahs.length !== data.ayahs.length) throw new Error(`QPC ayah count differs for surah ${surah}`);
  const indopak = readIndopak(surah);
  if (indopak.ayahs.length !== data.ayahs.length) throw new Error(`Indo-Pak ayah count differs for surah ${surah}`);
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
      textQpc: qpc.ayahs[i].text,
      textIndopak: indopak.ayahs[i].text,
    })),
    bismillahQpc: readQpc(1).ayahs[0].text.split("\u00A0")[0],
    // 1:1 is "بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِیْمِ ۟" + ayah-end circle: keep the words only.
    bismillahIndopak: readIndopak(1).ayahs[0].text.split(" ").slice(0, 4).join(" "),
  };
}
