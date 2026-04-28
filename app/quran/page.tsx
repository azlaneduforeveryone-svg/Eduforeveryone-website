import type { Metadata } from "next";
import QuranPage from "./QuranPage";

export const metadata: Metadata = {
  title: "Read Quran Online — All 114 Surahs with Translation | EduForEveryone",
  description: "Read the Holy Quran online with 40+ translations in English, Urdu, Hindi and more. Audio recitation, Surah index, Juz navigation. Free for all.",
  keywords: ["read quran online","quran with urdu translation","quran with hindi translation","quran with english translation","surah list","quran audio recitation","holy quran online free"],
  alternates: { canonical: "https://eduforeveryone.com/quran" },
  openGraph: {
    title: "Read Quran Online — All 114 Surahs | EduForEveryone",
    description: "Read Holy Quran with 40+ translations and audio recitation. Free for all.",
    url: "https://eduforeveryone.com/quran",
    siteName: "EduForEveryone", type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Holy Quran — All 114 Surahs",
        url: "https://eduforeveryone.com/quran",
        description: "Read the Holy Quran online with 40+ translations and audio recitation.",
        inLanguage: ["ar","en","ur","hi"],
        isPartOf: { "@type": "WebSite", name: "EduForEveryone", url: "https://eduforeveryone.com" },
      })}} />
      <QuranPage />
    </>
  );
}