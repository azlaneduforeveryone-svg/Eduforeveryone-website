import type { Metadata } from "next";
import SpeakingPage from "./SpeakingPage";

export const metadata: Metadata = {
  title: "IELTS Speaking Practice — Part 1, 2 & 3 Cue Cards",
  description: "Free IELTS Speaking practice: Part 1 questions, Part 2 cue cards and Part 3 discussions with model answers.",
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
