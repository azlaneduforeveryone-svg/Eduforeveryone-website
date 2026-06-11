import type { Metadata } from "next";
import WritingPage from "./WritingPage";

export const metadata: Metadata = {
  title: "IELTS Writing Practice — Task 1 & Task 2 with AI Feedback",
  description: "60 free IELTS Writing prompts: Task 1 charts, maps, processes and Task 2 essays. Timed practice with word counter and AI band feedback.",
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
