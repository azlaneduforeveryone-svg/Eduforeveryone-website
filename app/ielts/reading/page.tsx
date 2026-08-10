import type { Metadata } from "next";
import Link from "next/link";
import ReadingHub from "./ReadingHub";
import { PASSAGES } from "@/lib/ielts-reading-academic-data";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "IELTS Reading Practice — Free Tests with Instant Scoring",
  description: "Free IELTS Reading passages (Academic & General Training) with T/F/NG, MCQ and sentence completion. Instant scoring and explanations.",
  alternates: { canonical: "https://eduforeveryone.com/ielts/reading" },
  openGraph: {
    title: "IELTS Reading Practice | EduForEveryone",
    description: "Free IELTS reading tests with instant scoring. Academic and General Training passages.",
    url: "https://eduforeveryone.com/ielts/reading",
    siteName: "EduForEveryone",
    images: [{ url: "/Main_Logo.jpg", width: 800, height: 800, alt: "EduForEveryone" }],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "IELTS", path: "/ielts" },
        { name: "Reading", path: "/ielts/reading" },
      ])} />
      <ReadingHub localPassages={PASSAGES} />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <h2 className="text-lg font-bold text-gray-900 mb-4">
          All Reading Passages
          <span className="ml-2 text-sm font-normal text-gray-400">({PASSAGES.length})</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {PASSAGES.map(p => (
            <Link
              key={p.id}
              href={`/ielts/reading/${p.id}`}
              className="block bg-white border border-gray-200 rounded-xl p-4 hover:border-indigo-300 transition-colors"
            >
              <span className="text-xs bg-indigo-50 text-indigo-600 px-2 py-0.5 rounded-full font-medium">{p.tag}</span>
              <h3 className="text-sm font-semibold text-gray-900 mt-2 leading-snug">{p.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{p.level} · {p.wordCount} words</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}