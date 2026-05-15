import type { Metadata } from "next";
import WritingPage from "./WritingPage";

export const metadata: Metadata = {
  title: "IELTS Writing Practice — Task 1 & Task 2 with Timer | EduForEveryone",
  description: "Free IELTS Writing practice for Task 1 (graph descriptions) and Task 2 (essays). Timed exercises with live word counter. AI band score feedback available.",
  keywords: ["IELTS writing task 2 practice", "IELTS writing task 1", "IELTS essay practice", "IELTS writing band score", "free IELTS writing"],
  alternates: { canonical: "https://eduforeveryone.com/ielts/writing" },
  openGraph: {
    title: "IELTS Writing Practice | EduForEveryone",
    description: "Free IELTS Writing Task 1 and Task 2 with timed practice and word counter.",
    url: "https://eduforeveryone.com/ielts/writing",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return <WritingPage />;
}
