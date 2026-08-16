import type { Metadata } from "next";
import Link from "next/link";
import ReadingHub from "./ReadingHub";
import { PASSAGES } from "@/lib/ielts/readingData";
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
    </>
  );
}