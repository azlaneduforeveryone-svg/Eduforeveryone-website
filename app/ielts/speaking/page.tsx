import type { Metadata } from "next";
import SpeakingPage from "./SpeakingPage";

export const metadata: Metadata = {
  title: "IELTS Speaking Practice — Part 1, 2 & 3 Questions | EduForEveryone",
  description: "Free IELTS Speaking practice for all 3 parts. Part 1 personal questions, Part 2 cue card with timer, and Part 3 academic discussion questions with model answers.",
  keywords: ["IELTS speaking practice", "IELTS speaking part 2 cue card", "IELTS speaking questions", "IELTS speaking band score", "free IELTS speaking"],
  alternates: { canonical: "https://eduforeveryone.com/ielts/speaking" },
  openGraph: {
    title: "IELTS Speaking Practice | EduForEveryone",
    description: "Free IELTS speaking practice with Part 1, 2 and 3 questions and model answers.",
    url: "https://eduforeveryone.com/ielts/speaking",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return <SpeakingPage />;
}
