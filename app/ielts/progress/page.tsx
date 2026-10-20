import type { Metadata } from "next";
import ProgressClient from "./ProgressClient";

export const metadata: Metadata = {
  title: "IELTS Progress & Score Analytics — Track Band Improvement | EduForEveryone",
  description:
    "Track your IELTS practice scores, full mock test results, and band improvements across Listening, Reading, Writing, and Speaking with detailed performance analytics.",
  alternates: {
    canonical: "https://eduforeveryone.com/ielts/progress",
  },
  openGraph: {
    title: "IELTS Progress & Score Analytics — Track Band Improvement | EduForEveryone",
    description:
      "Track your IELTS practice scores, full mock test results, and band improvements across Listening, Reading, Writing, and Speaking.",
    url: "https://eduforeveryone.com/ielts/progress",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function IeltsProgressPage() {
  return <ProgressClient />;
}
