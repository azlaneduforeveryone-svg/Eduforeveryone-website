import type { Metadata } from "next";
import dynamic from "next/dynamic";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Color Coded Tajweed Quran PDF — 13 Line Mushaf",
  description: "13-line color-coded Tajweed Quran PDF, 851 pages. Every Tajweed rule highlighted in its color. Free, ad-free reading.",
  alternates: { canonical: "https://eduforeveryone.com/quran/pdf/13line" },
  openGraph: {
    title: "Color Coded Tajweed Quran PDF — 13 Line Mushaf | EduForEveryone",
    description: "13-line color-coded Tajweed Quran PDF, 851 pages. Every Tajweed rule highlighted. Free, ad-free.",
    url: "https://eduforeveryone.com/quran/pdf/13line",
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
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "Quran", path: "/quran" },
        { name: "13 Line Tajweed Quran PDF", path: "/quran/pdf/13line" },
      ])} />
      <QuranPDFViewer type="13line" />
    </>
  );
}