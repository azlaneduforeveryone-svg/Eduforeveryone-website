import MathTopicPage from "./MathTopicPage";
import { MATH_TOPICS } from "@/lib/mathTopics";

interface Props {
  params: { topicId: string };
}

export async function generateMetadata({ params }: Props) {
  const { getTopicById } = await import("@/lib/mathTopics");
  const topic = getTopicById(params.topicId);
  if (!topic) return { title: "Topic Not Found | EduForEveryone" };
  return {
    title: `${topic.title} — ${topic.level} Math | EduForEveryone`,
    description: `${topic.description} Includes clear explanation, ${topic.examples.length} worked examples, ${topic.exercises.length} practice exercises and a quiz.`,
    keywords: topic.tags,
  };
}

export function generateStaticParams() {
  return MATH_TOPICS.map((t) => ({ topicId: t.id }));
}

export default function Page({ params }: Props) {
  return <MathTopicPage topicId={params.topicId} />;
}