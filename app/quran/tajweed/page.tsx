import type { Metadata } from "next";
import TajweedListingPage from "./TajweedListingPage";

export const metadata: Metadata = {
  title: "Color Coded Tajweed Quran Online — Interactive Rules",
  description: "Read the Quran with color-coded Tajweed rules. Click any word to learn the rule applied. 8 rules, all 114 surahs, free.",
  alternates: { canonical: "https://eduforeveryone.com/quran/tajweed" },
  openGraph: {
    title: "Color Coded Tajweed Quran Online — Interactive Rules | EduForEveryone",
    description: "Read the Quran with color-coded Tajweed rules. Click any word to learn the rule. All 114 surahs, free.",
    url: "https://eduforeveryone.com/quran/tajweed",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() { return <TajweedListingPage />; }