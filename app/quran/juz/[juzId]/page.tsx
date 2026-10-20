import type { Metadata } from "next";
import JuzPage from "./JuzPage";

interface Props { params: { juzId: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = parseInt(params.juzId);
  const isValid = !isNaN(id) && id >= 1 && id <= 30;
  if (!isValid) {
    return {
      title: "Juz Not Found | Holy Quran | EduForEveryone",
    };
  }
  return {
    title: `Juz ${id} — Read Para ${id} Online with Translation | EduForEveryone`,
    description: `Read Holy Quran Juz ${id} (Para ${id}) online with Arabic text, translations in English and Urdu, and audio recitations. Completely free and ad-free.`,
    alternates: {
      canonical: `https://eduforeveryone.com/quran/juz/${id}`,
    },
    openGraph: {
      title: `Juz ${id} (Para ${id}) — Holy Quran | EduForEveryone`,
      description: `Read Holy Quran Juz ${id} online with Arabic text, translations, and audio recitation.`,
      url: `https://eduforeveryone.com/quran/juz/${id}`,
      siteName: "EduForEveryone",
      type: "website",
    },
  };
}

export default function Page({ params }: Props) {
  const id = parseInt(params.juzId);
  if (isNaN(id) || id < 1 || id > 30) return (
    <div className="text-center py-20">
      <p className="text-xl font-bold text-gray-900 mb-2">Invalid Juz number</p>
      <a href="/quran" className="text-teal-600 hover:underline">← Back to Quran</a>
    </div>
  );
  return <JuzPage juzId={id} />;
}

export function generateStaticParams() {
  return Array.from({ length: 30 }, (_, i) => ({ juzId: String(i + 1) }));
}
