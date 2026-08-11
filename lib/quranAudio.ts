export interface Reciter {
  id: string;
  name: string;
  nameAr: string;
  language: string;
  folder: string;
}

export const HUMAN_RECITERS: Reciter[] = [
  {
    id: "alafasy",
    name: "Sheikh Mishary Rashid Alafasy",
    nameAr: "الشيخ مشاري راشد العفاسي",
    language: "Arabic",
    folder: "Alafasy_128kbps",
  },
  {
    id: "sudais",
    name: "Sheikh Abdul Rahman Al-Sudais",
    nameAr: "الشيخ عبد الرحمن السديس",
    language: "Arabic",
    folder: "Sudais_192kbps",
  },
  {
    id: "ghamadi",
    name: "Sheikh Saad Al-Ghamdi",
    nameAr: "الشيخ سعد الغامدي",
    language: "Arabic",
    folder: "Ghamadi_40kbps",
  },
  {
    id: "ibrahim_walk",
    name: "Ibrahim Walk (English Translation)",
    nameAr: "إبراهيم ووك (ترجمة إنجليزية)",
    language: "English",
    folder: "Ibrahim_Walk_192kbps",
  },
  {
    id: "shamshad_khan",
    name: "Shamshad Ali Khan (Urdu Translation)",
    nameAr: "شمشاد علي خان (ترجمة اردو)",
    language: "Urdu",
    folder: "MultiLanguage/Urdu/Shamshad_Ali_Khan_128kbps",
  },
];

/**
 * Returns a high quality MP3 stream URL from EveryAyah CDN for human recitations
 */
export function getQuranAudioUrl(surah: number, ayah: number, reciterId: string = "alafasy"): string {
  const reciter = HUMAN_RECITERS.find(r => r.id === reciterId) || HUMAN_RECITERS[0];
  const surahPad = String(surah).padStart(3, "0");
  const ayahPad = String(ayah).padStart(3, "0");

  return `https://everyayah.com/data/${reciter.folder}/${surahPad}${ayahPad}.mp3`;
}
