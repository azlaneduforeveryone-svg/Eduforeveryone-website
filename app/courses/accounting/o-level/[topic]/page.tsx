import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { mcqsByTopic } from "@/lib/courses/oLevelAccountingMcqs";
import {
  ALL_O_LEVEL_TOPICS,
  getTopicBySlug,
  getTopicByCode,
  getAdjacentTopics,
} from "@/lib/courses/accountingSyllabus";
import { getOLevelNotes } from "@/lib/courses/oLevelAccountingNotes";
import { getOLevelRevision } from "@/lib/courses/oLevelAccountingRevision";
import { splitOLevelNotes } from "@/lib/courses/notesSplit";
import TopicPageClient from "./TopicPageClient";

export function generateStaticParams() {
  return ALL_O_LEVEL_TOPICS.map((t) => ({ topic: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { topic: string };
}): Promise<Metadata> {
  const raw = decodeURIComponent(params.topic);
  const meta = getTopicBySlug(raw) || getTopicByCode(raw);
  if (!meta) {
    return {
      title: "Topic Not Found | EduForEveryone",
    };
  }
  const questions = mcqsByTopic(meta.topic);
  const topicTitle = questions[0]?.topicTitle || meta.topicTitle;

  return {
    title: `${meta.topic} ${topicTitle} — O Level Accounting 7707 | EduForEveryone`,
    description: `Study Cambridge O Level Accounting (7707) Topic ${meta.topic}: ${topicTitle}. Watch the lesson, read concise syllabus notes, and test yourself with practice MCQs.`,
    alternates: {
      canonical: `https://eduforeveryone.com/courses/accounting/o-level/${meta.slug}`,
    },
    openGraph: {
      title: `${meta.topic} ${topicTitle} — O Level Accounting 7707 | EduForEveryone`,
      description: `Free O Level Accounting 7707 lesson, notes and practice quiz for Topic ${meta.topic}: ${topicTitle}.`,
      url: `https://eduforeveryone.com/courses/accounting/o-level/${meta.slug}`,
      siteName: "EduForEveryone",
      type: "article",
    },
  };
}

export default function OLevelAccountingTopicPage({
  params,
}: {
  params: { topic: string };
}) {
  const raw = decodeURIComponent(params.topic);

  // If someone visits /courses/accounting/o-level/1.2, redirect to /courses/accounting/o-level/1-2
  if (raw.includes(".")) {
    const byCode = getTopicByCode(raw);
    if (byCode) {
      permanentRedirect(`/courses/accounting/o-level/${byCode.slug}`);
    }
    notFound();
  }

  const topicMeta = getTopicBySlug(raw);
  if (!topicMeta) {
    notFound();
  }

  // Filter to only this topic's 12 questions on the server
  const topicQuestions = mcqsByTopic(topicMeta.topic);
  // Only this topic's notes are sent to the client. The "What you need to know"
  // and "Key words" blocks are split off so they can be shown before the video.
  const { intro: notesIntro, body: notesBody } = splitOLevelNotes(
    getOLevelNotes(topicMeta.topic) ?? topicMeta.notes
  );
  const resolvedMeta = {
    ...topicMeta,
    topicTitle: topicQuestions[0]?.topicTitle || topicMeta.topicTitle,
    notes: notesBody,
  };
  const { prev, next } = getAdjacentTopics(topicMeta.slug);

  return (
    <TopicPageClient
      topicMeta={resolvedMeta}
      topicQuestions={topicQuestions}
      prevTopic={prev}
      nextTopic={next}
      revision={getOLevelRevision(topicMeta.topic)}
      notesIntro={notesIntro ?? null}
    />
  );
}

