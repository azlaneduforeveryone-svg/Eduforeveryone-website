import type { Metadata } from "next";
import FullTestClient from "./FullTestClient";

export const metadata: Metadata = {
  title: "Full IELTS Mock Test — Free Complete Academic & General Exam | EduForEveryone",
  description:
    "Take a complete, realistic IELTS mock test covering all 4 sections: Listening, Reading, Writing, and Speaking, with instant scoring and estimated band score.",
  alternates: {
    canonical: "https://eduforeveryone.com/ielts/full-test",
  },
  openGraph: {
    title: "Full IELTS Mock Test — Complete Academic & General Exam | EduForEveryone",
    description:
      "Take a complete, realistic IELTS mock test covering Listening, Reading, Writing, and Speaking with instant scoring.",
    url: "https://eduforeveryone.com/ielts/full-test",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function FullTestPage() {
  return <FullTestClient />;
}
