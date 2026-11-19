import type { Metadata } from "next";
import {
  O_LEVEL_BIOLOGY_SECTIONS,
  type BiologySectionMeta,
  type BiologyTopicMeta,
} from "@/lib/courses/biologySyllabus";
import { getBiologyNotes } from "@/lib/courses/oLevelBiologyNotes";
import { biologyMcqsByTopic } from "@/lib/courses/oLevelBiologyMcqs";
import BiologyHubClient from "./BiologyHubClient";

export interface BiologyHubTopic extends BiologyTopicMeta {
  hasNotes: boolean;
  hasQuiz: boolean;
}

export interface BiologyHubSection extends Omit<BiologySectionMeta, "topics"> {
  topics: BiologyHubTopic[];
}

export const metadata: Metadata = {
  title: "Cambridge O Level and IGCSE Biology (5090, 0610): Free Course | EduForEveryone",
  description:
    "One free course for Cambridge O Level Biology 5090 and IGCSE Biology 0610 (Core and Extended), exams 2026 to 2028: 52 topics with notes, mind maps, flashcards and practice questions for your syllabus.",
  alternates: {
    canonical: "https://eduforeveryone.com/courses/biology",
  },
  openGraph: {
    title: "Cambridge O Level and IGCSE Biology (5090, 0610) | EduForEveryone",
    description:
      "Free O Level Biology 5090 and IGCSE Biology 0610 course for exams in 2026, 2027 and 2028.",
    url: "https://eduforeveryone.com/courses/biology",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function BiologyHubPage() {
  const sections: BiologyHubSection[] = O_LEVEL_BIOLOGY_SECTIONS.map((sec) => ({
    ...sec,
    topics: sec.topics.map((t) => ({
      ...t,
      hasNotes: Boolean(getBiologyNotes(t.topic)),
      hasQuiz: biologyMcqsByTopic(t.topic).length > 0,
    })),
  }));

  return <BiologyHubClient sections={sections} />;
}
