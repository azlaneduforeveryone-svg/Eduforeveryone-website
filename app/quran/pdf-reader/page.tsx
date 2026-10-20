import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Quran PDF Reader — 15 & 16 Line Digital Mus'haf | EduForEveryone",
  description:
    "Read the Holy Quran in authentic 15-line and 16-line South Asian (Indo-Pak) and Madani Mus'haf scripts online with high clarity, page turning, and bookmarks. Free & ad-free.",
  alternates: {
    canonical: "https://eduforeveryone.com/quran/pdf-reader",
  },
  openGraph: {
    title: "Quran PDF Reader — 15 & 16 Line Digital Mus'haf | EduForEveryone",
    description:
      "Read the Holy Quran in authentic 15-line and 16-line South Asian and Madani script formats online.",
    url: "https://eduforeveryone.com/quran/pdf-reader",
    siteName: "EduForEveryone",
    type: "website",
  },
};

const QuranPDFViewer = dynamic(
  () => import("./QuranPDFViewer"),
  { ssr: false, loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )}
);

export default function Page() {
  return <QuranPDFViewer type="15line" />;
}