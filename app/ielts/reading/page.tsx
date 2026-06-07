import type { Metadata } from "next";
import ReadingHub from "./ReadingHub";
import { PASSAGES } from "@/lib/ielts-reading-academic-data";

export const metadata: Metadata = {
  title: "IELTS Reading Practice — Free Tests with Instant Scoring | EduForEveryone",
  description: "Free IELTS Reading practice passages with MCQ, True/False/Not Given and gap fill questions. Academic and General Training. Instant scoring with answer explanations.",
  keywords: ["IELTS reading practice", "IELTS reading test free", "IELTS true false not given", "IELTS academic reading", "IELTS reading questions"],
  alternates: { canonical: "https://eduforeveryone.com/ielts/reading" },
  openGraph: {
    title: "IELTS Reading Practice | EduForEveryone",
    description: "Free IELTS reading tests with instant scoring. Academic and General Training passages.",
    url: "https://eduforeveryone.com/ielts/reading",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return <ReadingHub localPassages={PASSAGES} />;
}