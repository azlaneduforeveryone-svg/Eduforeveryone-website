import type { Metadata } from "next";
import TajweedQuranReader from "./TajweedQuranReader";
import { SURAH_META } from "@/lib/quranSurahMeta";

export function generateStaticParams() {
  return SURAH_META.map(s => ({ id: String(s.number) }));
}

export function generateMetadata({ params }: { params: { id: string } }): Metadata {
  const surah = SURAH_META.find(s => s.number === parseInt(params.id));
  const title = surah
    ? `Surah ${surah.name} (${surah.arabicName}) Tajweed — Color Coded Quran`
    : `Tajweed Quran Surah ${params.id}`;
  const description = surah
    ? `Read Surah ${surah.name} (${surah.arabicName}) with color-coded Tajweed rules. ${surah.ayahs} ayahs, ${surah.revelation}. Click any colored word for rules.`
    : `Read Tajweed Quran Surah ${params.id} with color coded rules.`;

  return {
    title,
    description,
    alternates: { canonical: `https://eduforeveryone.com/quran/tajweed/${params.id}` },
    openGraph: {
      title: `${title} | EduForEveryone`,
      description,
      url: `https://eduforeveryone.com/quran/tajweed/${params.id}`,
      siteName: "EduForEveryone",
      images: [{ url: "/Main_Logo.jpg", width: 800, height: 800, alt: "EduForEveryone" }],
      type: "website",
    },
  };
}

export default function Page({ params }: { params: { id: string } }) {
  return <TajweedQuranReader surahId={parseInt(params.id)} />;
}