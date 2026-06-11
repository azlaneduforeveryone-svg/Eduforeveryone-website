import type { Metadata } from "next";
import QuranPage from "./QuranPage";

export const metadata: Metadata = {
  title: "Quran with English & Urdu Translation — All 114 Surahs",
  description: "Complete Quran with 40+ translations, audio recitation, bookmarks and dark mode. All 114 surahs, 6,236 ayahs. Free and ad-free.",
  alternates: { canonical: "https://eduforeveryone.com/quran/read" },
  openGraph: {
    title: "Quran with English & Urdu Translation — All 114 Surahs | EduForEveryone",
    description: "Complete Quran with 40+ translations, audio recitation, bookmarks and dark mode. Free and ad-free.",
    url: "https://eduforeveryone.com/quran/read",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() { return <QuranPage />; }