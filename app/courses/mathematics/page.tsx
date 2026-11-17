import type { Metadata } from "next";
import {
  MATHS_SECTIONS,
  type MathsSectionMeta,
  type MathsTopicMeta,
} from "@/lib/courses/mathsSyllabus";
import { getMathsNotes } from "@/lib/courses/mathsNotes";
import { mathsMcqsByTopic } from "@/lib/courses/mathsMcqs";
import MathsHubClient from "./MathsHubClient";

export interface MathsHubTopic extends MathsTopicMeta {
  hasNotes: boolean;
  hasQuiz: boolean;
}

export interface MathsHubSection extends Omit<MathsSectionMeta, "topics"> {
  topics: MathsHubTopic[];
}

export const metadata: Metadata = {
  title: "Cambridge O Level and IGCSE Mathematics (4024, 0580): Free Course | EduForEveryone",
  description:
    "Free course for Cambridge O Level Mathematics 4024 and IGCSE Mathematics 0580, Core and Extended. Plain English notes, real-life examples solved step by step, flashcards and exam-style practice.",
  alternates: { canonical: "https://eduforeveryone.com/courses/mathematics" },
  openGraph: {
    title: "Cambridge O Level and IGCSE Mathematics | EduForEveryone",
    description:
      "One free course for O Level Mathematics 4024 and IGCSE Mathematics 0580, with real-life examples solved step by step.",
    url: "https://eduforeveryone.com/courses/mathematics",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function MathsHubPage() {
  const sections: MathsHubSection[] = MATHS_SECTIONS.map((sec) => ({
    ...sec,
    topics: sec.topics.map((t) => ({
      ...t,
      hasNotes: Boolean(getMathsNotes(t.topic)),
      hasQuiz: mathsMcqsByTopic(t.topic).length > 0,
    })),
  }));

  return <MathsHubClient sections={sections} />;
}
