import type { Metadata } from "next";
import ListeningPage from "./ListeningPage";

export const metadata: Metadata = {
  title: "IELTS Listening Practice — Free Tests | EduForEveryone",
  description: "Free IELTS Listening practice with all 4 sections. Form fill, multiple choice, note completion and matching questions. Develop your listening skills for the real exam.",
  keywords: ["IELTS listening practice", "IELTS listening test free", "IELTS listening sections", "IELTS listening questions"],
  alternates: { canonical: "https://eduforeveryone.com/ielts/listening" },
  openGraph: {
    title: "IELTS Listening Practice | EduForEveryone",
    description: "Free IELTS listening practice with all 4 sections and question types.",
    url: "https://eduforeveryone.com/ielts/listening",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return <ListeningPage />;
}
