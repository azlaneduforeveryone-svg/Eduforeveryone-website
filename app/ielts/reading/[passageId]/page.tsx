import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PASSAGES } from "@/lib/ielts/readingData";
import ReadingTest from "./ReadingTest";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return PASSAGES.map(p => ({ passageId: p.id }));
}

export async function generateMetadata(
  { params }: { params: { passageId: string } }
): Promise<Metadata> {
  const passage = PASSAGES.find(p => p.id === params.passageId);
  if (!passage) return { title: "Not Found | EduForEveryone" };
  return {
    title: `${passage.title} — IELTS Reading Practice | EduForEveryone`,
    description: `Practice IELTS Academic Reading with "${passage.title}". ${passage.questions.length} questions — MCQ, True/False/Not Given, and more. Instant scoring with explanations.`,
    alternates: { canonical: `https://eduforeveryone.com/ielts/reading/${params.passageId}` },
    openGraph: {
      title: `${passage.title} — IELTS Reading | EduForEveryone`,
      description: `Free IELTS Academic Reading practice. 10 random questions per session with full explanations and band score estimate.`,
      url: `https://eduforeveryone.com/ielts/reading/${params.passageId}`,
      siteName: "EduForEveryone",
      type: "website",
    },
  };
}

export default function Page({ params }: { params: { passageId: string } }) {
  const passage = PASSAGES.find(p => p.id === params.passageId);
  if (!passage) notFound();
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "IELTS", path: "/ielts" },
        { name: "Reading", path: "/ielts/reading" },
        { name: passage.title, path: `/ielts/reading/${passage.id}` },
      ])} />
      <ReadingTest passage={passage} />
    </>
  );
}
