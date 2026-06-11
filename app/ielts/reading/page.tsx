import type { Metadata } from "next";
import ReadingHub from "./ReadingHub";
import { PASSAGES } from "@/lib/ielts-reading-academic-data";

export const metadata: Metadata = {
  title: "IELTS Reading Practice — Free Tests with Instant Scoring",
  description: "Free IELTS Reading passages (Academic & General Training) with T/F/NG, MCQ and sentence completion. Instant scoring and explanations.",
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