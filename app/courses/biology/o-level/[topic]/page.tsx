import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { biologyMcqsByTopic } from "@/lib/courses/oLevelBiologyMcqs";
import {
  ALL_O_LEVEL_BIOLOGY_TOPICS,
  getBiologyTopicBySlug,
  getBiologyTopicByCode,
  getAdjacentBiologyTopics,
} from "@/lib/courses/biologySyllabus";
import { getBiologyNotes } from "@/lib/courses/oLevelBiologyNotes";
import { getBiologyRevision } from "@/lib/courses/oLevelBiologyRevision";
import { splitOLevelNotes } from "@/lib/courses/notesSplit";
import TopicPageClient from "./TopicPageClient";

export function generateStaticParams() {
  return ALL_O_LEVEL_BIOLOGY_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Promise<Metadata> {
  const raw = decodeURIComponent(params.topic);
  const meta = getBiologyTopicBySlug(raw) || getBiologyTopicByCode(raw);
  if (!meta) {
    return {
      title: "Topic Not Found | EduForEveryone",
    };
  }

  return {
    title: `${meta.topic} ${meta.topicTitle} | O Level and IGCSE Biology | EduForEveryone`,
    description: `Study Cambridge O Level Biology 5090 and IGCSE Biology 0610 Topic ${meta.topic}: ${meta.topicTitle} for exams in 2026, 2027 and 2028. Read syllabus notes, explore interactive models, and test yourself with practice questions.`,
    alternates: {
      canonical: `https://eduforeveryone.com/courses/biology/o-level/${meta.slug}`,
    },
    openGraph: {
      title: `${meta.topic} ${meta.topicTitle} | O Level and IGCSE Biology | EduForEveryone`,
      description: `Free O Level 5090 and IGCSE 0610 Biology lesson, notes and practice quiz for Topic ${meta.topic}: ${meta.topicTitle}.`,
      url: `https://eduforeveryone.com/courses/biology/o-level/${meta.slug}`,
      siteName: "EduForEveryone",
      type: "article",
    },
  };
}

export default function OLevelBiologyTopicPage({
  params,
}: {
  params: { topic: string };
}) {
  const raw = decodeURIComponent(params.topic);

  // If someone visits /courses/biology/o-level/1.1, redirect to /courses/biology/o-level/1-1
  if (raw.includes(".")) {
    const byCode = getBiologyTopicByCode(raw);
    if (byCode) {
      permanentRedirect(`/courses/biology/o-level/${byCode.slug}`);
    }
    notFound();
  }

  const topicMeta = getBiologyTopicBySlug(raw);
  if (!topicMeta) {
    notFound();
  }

  const topicQuestions = biologyMcqsByTopic(topicMeta.topic);
  const rawNotes = getBiologyNotes(topicMeta.topic);
  const { intro: notesIntro, body: notesBody } = splitOLevelNotes(rawNotes);
  const resolvedMeta = {
    ...topicMeta,
    notes: notesBody,
  };
  const { prev, next } = getAdjacentBiologyTopics(topicMeta.slug);

  return (
    <TopicPageClient
      topicMeta={resolvedMeta}
      topicQuestions={topicQuestions}
      prevTopic={prev}
      nextTopic={next}
      revision={getBiologyRevision(topicMeta.topic)}
      notesIntro={notesIntro ?? null}
    />
  );
}
