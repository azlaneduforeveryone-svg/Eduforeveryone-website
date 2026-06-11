import type { Metadata } from "next";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "15 Line Quran PDF — Uthmani Script (Read Online & Free)",
  description: "Traditional 15-line Uthmani script Quran PDF, 612 pages — the standard mushaf used in Pakistan and South Asia. Read free online.",
  alternates: { canonical: "https://eduforeveryone.com/quran/pdf/15line" },
  openGraph: {
    title: "15 Line Quran PDF — Uthmani Script | EduForEveryone",
    description: "Traditional 15-line Uthmani script Quran PDF, 612 pages. Read free online.",
    url: "https://eduforeveryone.com/quran/pdf/15line",
    siteName: "EduForEveryone",
    type: "website",
  },
};

const QuranPDFViewer = dynamic(
  () => import("../QuranPDFViewer"),
  { ssr: false, loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-12 h-12 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
    </div>
  )}
);

export default function Page() {
  return <QuranPDFViewer type="15line" />;
}