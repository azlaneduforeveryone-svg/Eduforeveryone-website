import type { Metadata } from "next";
import Link from "next/link";
import EfeColorReaderClient from "@/components/quran/EfeColorReaderClient";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Color-Coded Quran Reader with Waqf & Tajweed Rules | EduForEveryone",
  description: "Explore an interactive color-coded Quran reading tool with trilingual explanations (English, Urdu, Hindi) for Tajweed rules and Waqf stop signs.",
  alternates: {
    canonical: "https://eduforeveryone.com/quran/color-reader",
  },
  openGraph: {
    title: "Color-Coded Quran Reader with Waqf & Tajweed Rules | EduForEveryone",
    description: "Explore an interactive color-coded Quran reading tool with trilingual explanations (English, Urdu, Hindi) for Tajweed rules and Waqf stop signs.",
    url: "https://eduforeveryone.com/quran/color-reader",
    siteName: "EduForEveryone",
    images: [{ url: "/Main_Logo.jpg", width: 800, height: 800, alt: "EduForEveryone" }],
    type: "website",
  },
};

export default function EfeColorReaderPage() {
  return (
    <main className="min-h-screen bg-slate-50 py-10 px-4">
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "Quran", path: "/quran" },
          { name: "Color Reader", path: "/quran/color-reader" },
        ])}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Color-Coded Quran Reader with Waqf & Tajweed",
          description: "Interactive trilingual Tajweed and Waqf stop signs reader.",
          url: "https://eduforeveryone.com/quran/color-reader",
        }}
      />
      <div className="max-w-4xl mx-auto mb-6">
        <nav className="text-sm text-slate-500 mb-4" aria-label="Breadcrumb">
          <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
          <Link href="/quran" className="hover:underline">Quran</Link> &gt;{" "}
          <span className="text-slate-800 font-medium">Color Reader</span>
        </nav>
      </div>
      <EfeColorReaderClient />
    </main>
  );
}
