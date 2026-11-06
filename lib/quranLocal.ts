// lib/quranLocal.ts
// Helpers for the self-hosted Quran Arabic text (data/quran/uthmani/*.json,
// Tanzil Uthmani v1.1). Pure functions only, safe in client and server code.
//
// IMPORTANT: nothing here changes a character of the Quran text. Bismillah
// splitting and the Allah font span only decide HOW the text is displayed.

/** First ayah of each juz (Medina Mushaf). Same table as app/quran/juz. */
export const JUZ_STARTS: ReadonlyArray<readonly [number, number]> = [
  [1, 1], [2, 142], [2, 253], [3, 92], [4, 24], [4, 148], [5, 82], [6, 111], [7, 88], [8, 41],
  [9, 93], [11, 6], [12, 53], [15, 1], [17, 1], [18, 75], [21, 1], [23, 1], [25, 21], [27, 56],
  [29, 46], [33, 31], [36, 28], [39, 32], [41, 47], [46, 1], [51, 31], [58, 1], [67, 1], [78, 1],
];

export const AYAH_COUNTS = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135,
  112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73, 54, 45, 83, 182, 88, 75, 85, 54, 53,
  89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12,
  12, 30, 52, 52, 44, 28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26,
  30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5, 4, 5, 6,
];

/** English meaning of each surah name (index 0 = surah 1). */
export const SURAH_MEANINGS: ReadonlyArray<string> = [
  "The Opener",
  "The Cow",
  "Family of Imran",
  "The Women",
  "The Table Spread",
  "The Cattle",
  "The Heights",
  "The Spoils of War",
  "The Repentance",
  "Jonah",
  "Hud",
  "Joseph",
  "The Thunder",
  "Abraham",
  "The Rocky Tract",
  "The Bee",
  "The Night Journey",
  "The Cave",
  "Mary",
  "Ta-Ha",
  "The Prophets",
  "The Pilgrimage",
  "The Believers",
  "The Light",
  "The Criterion",
  "The Poets",
  "The Ant",
  "The Stories",
  "The Spider",
  "The Romans",
  "Luqman",
  "The Prostration",
  "The Combined Forces",
  "Sheba",
  "Originator",
  "Ya Sin",
  "Those who set the Ranks",
  "The Letter \"Saad\"",
  "The Troops",
  "The Forgiver",
  "Explained in Detail",
  "The Consultation",
  "The Ornaments of Gold",
  "The Smoke",
  "The Crouching",
  "The Wind-Curved Sandhills",
  "Muhammad",
  "The Victory",
  "The Rooms",
  "The Letter \"Qaf\"",
  "The Winnowing Winds",
  "The Mount",
  "The Star",
  "The Moon",
  "The Beneficent",
  "The Inevitable",
  "The Iron",
  "The Pleading Woman",
  "The Exile",
  "She that is to be examined",
  "The Ranks",
  "The Congregation, Friday",
  "The Hypocrites",
  "The Mutual Disillusion",
  "The Divorce",
  "The Prohibition",
  "The Sovereignty",
  "The Pen",
  "The Reality",
  "The Ascending Stairways",
  "Noah",
  "The Jinn",
  "The Enshrouded One",
  "The Cloaked One",
  "The Resurrection",
  "The Man",
  "The Emissaries",
  "The Tidings",
  "Those who drag forth",
  "He Frowned",
  "The Overthrowing",
  "The Cleaving",
  "The Defrauding",
  "The Sundering",
  "The Mansions of the Stars",
  "The Nightcommer",
  "The Most High",
  "The Overwhelming",
  "The Dawn",
  "The City",
  "The Sun",
  "The Night",
  "The Morning Hours",
  "The Relief",
  "The Fig",
  "The Clot",
  "The Power",
  "The Clear Proof",
  "The Earthquake",
  "The Courser",
  "The Calamity",
  "The Rivalry in world increase",
  "The Declining Day",
  "The Traducer",
  "The Elephant",
  "Quraysh",
  "The Small kindnesses",
  "The Abundance",
  "The Disbelievers",
  "The Divine Support",
  "The Palm Fiber",
  "The Sincerity",
  "The Daybreak",
  "Mankind",
];

export function juzOf(surah: number, ayah: number): number {
  let juz = 1;
  for (let i = 0; i < JUZ_STARTS.length; i++) {
    const [s, a] = JUZ_STARTS[i];
    if (surah > s || (surah === s && ayah >= a)) juz = i + 1; else break;
  }
  return juz;
}

/** Ayah number across the whole Quran (1 to 6236), used by the audio CDN. */
export function globalAyahNumber(surah: number, ayah: number): number {
  let n = 0;
  for (let s = 1; s < surah; s++) n += AYAH_COUNTS[s - 1];
  return n + ayah;
}

/** Bismillah exactly as it appears in the Tanzil Uthmani text (1:1). */
export const BISMILLAH = "\u0628\u0650\u0633\u0652\u0645\u0650 \u0671\u0644\u0644\u0651\u064E\u0647\u0650 \u0671\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u064E\u0670\u0646\u0650 \u0671\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650";

/**
 * Tanzil puts the Bismillah at the start of ayah 1 of every surah except
 * 1 and 9. The reader shows it once in the header, so for display we split
 * it off. The text itself is untouched: only an exact match is removed.
 */
// Surahs 95 and 97 start with بِّسْمِ (shadda on the ba) in Tanzil's text.
const BISMILLAH_SHADDA = "\u0628\u0651" + BISMILLAH.slice(1);

export function withoutLeadingBismillah(surah: number, ayah: number, text: string): string {
  if (surah === 1 || surah === 9 || ayah !== 1) return text;
  for (const b of [BISMILLAH, BISMILLAH_SHADDA]) {
    if (text.startsWith(b + " ")) return text.slice(b.length + 1);
  }
  return text;
}

// The name of Allah (ٱللَّه, لِلَّه, بِٱللَّه, ٱللَّهُمَّ ...). Matched per word so the
// whole word can be drawn in Amiri Quran, which shows the small (dagger) alif
// over the lam. Shadda and fatha in either order. Does NOT match ٱللَّهْوِ (62:11)
// or ٱللَّهَبِ (77:31). Tested: 2,690 words in the Tanzil text.
const ALLAH_WORD =
  /\u0644\u0650?\u0644(?:\u0651\u064E|\u064E\u0651)\u0647(?:\u064F\u0645(?:\u0651\u064E|\u064E\u0651)|[\u064E\u064F\u0650])?[\u06D6-\u06DC\u06DE\u06E4]*$/;

export function isAllahWord(word: string): boolean {
  return ALLAH_WORD.test(word);
}
