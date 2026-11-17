import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { mathsMcqsByTopic } from "@/lib/courses/mathsMcqs";
import { ALL_MATHS_TOPICS, getMathsTopicBySlug } from "@/lib/courses/mathsSyllabus";
import { getMathsNotes } from "@/lib/courses/mathsNotes";
import { getMathsRevision } from "@/lib/courses/mathsRevision";
import { splitOLevelNotes } from "@/lib/courses/notesSplit";
import TopicPageClient from "./TopicPageClient";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_MATHS_TOPICS.map((t) => ({ topic: t.slug }));
}

function syllabusLabel(meta: NonNullable<ReturnType<typeof getMathsTopicBySlug>>): string {
  const parts = [];
  if (meta.oLevel) parts.push(`O Level 4024 topic ${meta.oLevel}`);
  parts.push(`IGCSE 0580 topic ${meta.topic}${meta.igcse === "extended" ? " (Extended)" : ""}`);
  return parts.join(", ");
}

export async function generateMetadata({ params }: { params: { topic: string } }): Promise<Metadata> {
  const meta = getMathsTopicBySlug(decodeURIComponent(params.topic));
  if (!meta) return { title: "Topic Not Found | EduForEveryone" };
  const title = `${meta.topicTitle}: O Level and IGCSE Maths | EduForEveryone`;
  const url = `https://eduforeveryone.com/courses/mathematics/${meta.slug}`;
  return {
    title,
    // Keep "coming soon" pages out of search results until the notes are written.
    robots: { index: Boolean(getMathsNotes(meta.topic)), follow: true },
    description: `${meta.topicTitle} for Cambridge ${syllabusLabel(meta)}. Plain English notes, real-life examples solved step by step, flashcards and practice questions.`,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: `Free lesson and practice on ${meta.topicTitle} for ${syllabusLabel(meta)}.`,
      url,
      siteName: "EduForEveryone",
      type: "article",
    },
  };
}

export default function MathsTopicPage({ params }: { params: { topic: string } }) {
  const topicMeta = getMathsTopicBySlug(decodeURIComponent(params.topic));
  if (!topicMeta) notFound();

  const { intro: notesIntro, body: notesBody } = splitOLevelNotes(getMathsNotes(topicMeta.topic));

  return (
    <TopicPageClient
      topicMeta={{ ...topicMeta, notes: notesBody }}
      topicQuestions={mathsMcqsByTopic(topicMeta.topic)}
      revision={getMathsRevision(topicMeta.topic)}
      notesIntro={notesIntro ?? null}
    />
  );
}
