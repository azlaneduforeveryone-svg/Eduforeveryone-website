import type { Metadata } from "next";
import QuranPDFViewer from "./QuranPDFViewer";

export const metadata: Metadata = {
  title: "Quran PDF Reader — Tajweed Colour Coded | EduForEveryone",
  description: "Read the Holy Quran in PDF format. 15-line standard script and 13-line colour coded Tajweed rules. Jump to any Surah instantly. Free online Quran reader.",
  keywords: ["quran pdf","quran tajweed pdf","colour coded quran","15 line quran","13 line quran","tajweed rules","read quran online"],
  alternates: { canonical: "https://eduforeveryone.com/quran/pdf-reader" },
};

export default function Page() {
  return <QuranPDFViewer />;
}
