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
  title: "Cambridge O Level Biology (5090): Free Course | EduForEveryone",
  description:
    "Master all 52 topics across 19 sections of the Cambridge O Level Biology 5090 syllabus for exams in 2026, 2027 and 2028 with concise notes, interactive models, mind maps, flashcards, and practice questions.",
  alternates: {
    canonical: "https://eduforeveryone.com/courses/biology",
  },
  openGraph: {
    title: "Cambridge O Level Biology (5090) | EduForEveryone",
    description:
      "Free O Level Biology 5090 course covering all 19 syllabus sections and 52 topics for exams in 2026, 2027 and 2028.",
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
