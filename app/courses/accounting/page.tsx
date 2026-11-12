import type { Metadata } from "next";
import { oLevelAccountingMcqs } from "@/lib/courses/oLevelAccountingMcqs";
import { O_LEVEL_ACCOUNTING_SECTIONS, type AccountingSectionMeta } from "@/lib/courses/accountingSyllabus";
import { getOLevelNotes } from "@/lib/courses/oLevelAccountingNotes";
import AccountingHubClient from "./AccountingHubClient";

export const metadata: Metadata = {
  title: "Cambridge O Level Accounting (7707) — Free Course | EduForEveryone",
  description:
    "Master all 28 topics of the Cambridge O Level Accounting 7707 syllabus with step-by-step video lessons, concise notes, and 336 practice multiple-choice questions.",
  alternates: {
    canonical: "https://eduforeveryone.com/courses/accounting",
  },
  openGraph: {
    title: "Cambridge O Level Accounting (7707) | EduForEveryone",
    description:
      "Free O Level Accounting 7707 course covering all 7 syllabus sections and 28 topics with interactive quizzes and progress tracking.",
    url: "https://eduforeveryone.com/courses/accounting",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function AccountingHubPage() {
  // Derive topicTitle directly from oLevelAccountingMcqs on the server
  // so the client component receives only lightweight section/topic metadata.
  const titleMap = new Map<string, string>();
  for (const q of oLevelAccountingMcqs) {
    if (!titleMap.has(q.topic)) {
      titleMap.set(q.topic, q.topicTitle);
    }
  }

  const sections: AccountingSectionMeta[] = O_LEVEL_ACCOUNTING_SECTIONS.map((sec) => ({
    ...sec,
    topics: sec.topics.map((t) => ({
      ...t,
      topicTitle: titleMap.get(t.topic) || t.topicTitle,
      // The hub only checks whether notes exist (for progress status),
      // so send a short marker instead of the full notes text.
      notes: (getOLevelNotes(t.topic) || t.notes) ? "available" : undefined,
    })),
  }));

  return <AccountingHubClient sections={sections} />;
}

