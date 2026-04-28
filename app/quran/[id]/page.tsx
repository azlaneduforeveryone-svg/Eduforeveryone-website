import type { Metadata } from "next";
import QuranReader from "./QuranReader";

interface Props { params: { id: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.id);
  return {
    title: `Surah ${id} — Read with Translations & Audio | EduForEveryone`,
    description: `Read Surah ${id} of the Holy Quran with 40+ translations in English, Urdu, Hindi and more. Audio recitation included. Free online.`,
    alternates: { canonical: `https://eduforeveryone.com/quran/${id}` },
    openGraph: {
      title: `Surah ${id} — Holy Quran | EduForEveryone`,
      description: `Read with 40+ translations and audio recitation.`,
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