import type { Metadata } from "next";
import QuranLandingPage from "./QuranLandingPage";

export const metadata: Metadata = {
  title: "Read Quran Online — 40+ Translations, Tajweed & PDF",
  description: "Read the Holy Quran online free: 40+ translations (English, Urdu, Hindi), color-coded Tajweed, audio recitation, 15-line PDF. Ad-free.",
  alternates: { canonical: "https://eduforeveryone.com/quran" },
  openGraph: {
    title: "Read Quran Online — 40+ Translations, Tajweed & PDF | EduForEveryone",
    description: "Read the Holy Quran free with 40+ translations, color-coded Tajweed, audio recitation and PDF. Ad-free.",
    url: "https://eduforeveryone.com/quran",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return <QuranLandingPage />;
}