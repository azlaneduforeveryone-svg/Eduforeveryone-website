import type { Metadata } from "next";
import MathTopicPage from "./MathTopicPage";
import { getTopicById, MATH_TOPICS } from "@/lib/mathTopics";

// Allow Firebase-uploaded topic IDs beyond the static list
export const dynamicParams = true;

interface Props { params: { topicId: string } }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const topic = getTopicById(params.topicId);
  if (!topic) return { title: "Mathematics Topic | EduForEveryone" };
  return {
    title: `${topic.title} — ${topic.level} Math | EduForEveryone`,
    description: `${topic.description} Includes explanation, worked examples, practice exercises and a quiz.`,
    alternates: { canonical: `https://eduforeveryone.com/courses/mathematics/${topic.id}` },
    openGraph: {
      title: `${topic.title} | EduForEveryone`,
      description: topic.description,
      url: `https://eduforeveryone.com/courses/mathematics/${topic.id}`,
      siteName: "EduForEveryone", type: "website",
    },
  };
}

export function generateStaticParams() {
  return MATH_TOPICS.map(t => ({ topicId: t.id }));
}

export default function Page({ params }: Props) {
  return <MathTopicPage topicId={params.topicId} />;
}
