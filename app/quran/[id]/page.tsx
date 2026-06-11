import type { Metadata } from "next";
import QuranReader from "./QuranReader";
import { getSurahMeta } from "@/lib/quranSurahMeta";

interface Props { params: { id: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id);
  const s = getSurahMeta(id);
  if (!s) {
    return {
      title: "Read Surah Online — Quran with Translation | EduForEveryone",
      description: "Read the Holy Quran online with 40+ translations including Urdu and English, plus audio recitation. Free and ad-free.",
      alternates: { canonical: `https://eduforeveryone.com/quran/${id}` },
    };
  }
  return {
    title: `Surah ${s.name} — Urdu & English Translation`,
    description: `Read Surah ${s.name} (Surah ${s.number}, ${s.ayahs} ayahs) online with 40+ translations including Urdu and English. Audio recitation, free and ad-free.`,
    alternates: { canonical: `https://eduforeveryone.com/quran/${id}` },
    openGraph: {
      title: `Surah ${s.name} (${s.arabicName}) — Holy Quran | EduForEveryone`,
      description: `Read Surah ${s.name} with 40+ translations including Urdu and English, plus audio recitation. Free and ad-free.`,
      url: `https://eduforeveryone.com/quran/${id}`,
      siteName: "EduForEveryone", type: "website",
    },
  };
}

export default function Page({ params }: Props) {
  const id = parseInt(params.id);
  if (isNaN(id) || id < 1 || id > 114) return <div className="text-center py-20">Invalid Surah number</div>;
  return <QuranReader surahId={id} />;
}

export function generateStaticParams() {
  return Array.from({ length: 114 }, (_, i) => ({ id: String(i + 1) }));
}