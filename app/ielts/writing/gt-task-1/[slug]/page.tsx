import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { gtTask1Pool } from "@/lib/ielts/writingData";
import { GT_TASK1_MODEL_ANSWERS, getGtModelAnswerBySlug } from "@/lib/ielts/ielts-gt-task1-model-answers";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export function generateStaticParams() {
  return GT_TASK1_MODEL_ANSWERS.map(m => ({ slug: m.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const model = getGtModelAnswerBySlug(params.slug);
  const prompt = model ? gtTask1Pool.find(p => p.id === model.id) : undefined;
  if (!model || !prompt) return { title: "IELTS GT Writing Task 1 | EduForEveryone" };
  return {
    title: `IELTS GT Task 1 ${prompt.letterTypeLabel} Sample — ${model.topic}`,
    description: `IELTS General Training Writing Task 1 (${prompt.letterTypeLabel}): ${model.topic}. Read the task and a sample Band 8 letter, then write your own with instant AI feedback.`,
    alternates: { canonical: `https://eduforeveryone.com/ielts/writing/gt-task-1/${model.slug}` },
    openGraph: {
      title: `IELTS GT Task 1 ${prompt.letterTypeLabel} Sample — ${model.topic} | EduForEveryone`,
      description: `Free IELTS General Training Task 1 letter practice with a sample Band 8 model answer and AI feedback.`,
      url: `https://eduforeveryone.com/ielts/writing/gt-task-1/${model.slug}`,
      siteName: "EduForEveryone",
      type: "article",
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const model = getGtModelAnswerBySlug(params.slug);
  const prompt = model ? gtTask1Pool.find(p => p.id === model.id) : undefined;
  if (!model || !prompt) notFound();

  const wordCount = model.modelAnswer.trim().split(/\s+/).length;

  return (
    <div className="efe-page">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "IELTS", path: "/ielts" },
        { name: "Writing", path: "/ielts/writing" },
        { name: model.topic, path: `/ielts/writing/gt-task-1/${model.slug}` },
      ])} />

      <section className="efe-page-header">
        <div className="efe-page-header-pattern" aria-hidden="true" />
        <div className="efe-page-header-inner">
          {/* Breadcrumbs */}
          <nav className="efe-page-header-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/ielts">IELTS</Link>
            <span aria-hidden="true">›</span>
            <Link href="/ielts/writing">Writing</Link>
            <span aria-hidden="true">›</span>
            <span className="font-medium text-white">GT Task 1 — {model.topic}</span>
          </nav>

          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs px-2.5 py-1 rounded-full font-bold border efe-skill-writing">General Training Task 1</span>
            <span className="text-xs bg-white/15 text-white border border-white/25 px-2.5 py-1 rounded-full font-bold">{prompt.letterTypeLabel}</span>
            <span className="text-xs bg-white/10 text-white/85 border border-white/20 px-2.5 py-1 rounded-full">20 min · {prompt.minWords}+ words</span>
          </div>

          <h1>
            IELTS GT Task 1: {model.topic} ({prompt.letterTypeLabel})
          </h1>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
        {/* Task prompt */}
        <Card className="p-6 mb-5">
          <p className="text-xs font-bold text-efe-muted uppercase tracking-wide mb-2">The Task</p>
          <p className="text-efe-fg text-sm leading-relaxed whitespace-pre-line">{prompt.prompt}</p>
          {prompt.bulletPoints?.length > 0 && (
            <div className="mt-4 bg-efe-bg border border-efe-line rounded-xl p-4">
              <p className="text-xs font-bold text-efe-muted uppercase tracking-wide mb-2">You should cover</p>
              <ul className="space-y-1.5">
                {prompt.bulletPoints.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-efe-fg">
                    <span className="text-efe-accent font-bold flex-shrink-0">•</span>{b}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Card>

        {/* Start Writing CTA — deep-links into the editor with this prompt preloaded */}
        <Button
          href={`/ielts/writing?prompt=${prompt.id}`}
          variant="primary"
          size="lg"
          className="w-full mb-8"
        >
          Start Writing This Letter →
        </Button>

        {/* Model answer */}
        <div className="bg-efe-accent-soft border border-efe-line rounded-2xl p-6">
          <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
            <h2 className="font-bold text-efe-fg font-display">Sample Band 8 Response</h2>
            <span className="text-xs text-efe-accent-ink font-semibold">{wordCount} words</span>
          </div>
          <p className="text-xs text-efe-muted mb-4">
            Written by EduForEveryone — for guidance only. Not an official examiner response.
          </p>
          <div className="bg-efe-surface border border-efe-line rounded-xl p-5 space-y-3">
            {model.modelAnswer.split("\n\n").map((para, i) => (
              <p key={i} className="text-efe-fg text-sm leading-relaxed whitespace-pre-line">{para}</p>
            ))}
          </div>
        </div>

        {/* Other GT Task 1 prompts */}
        <div className="mt-10">
          <h2 className="text-lg font-bold text-efe-fg font-display mb-4">More GT Task 1 Practice</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {GT_TASK1_MODEL_ANSWERS.filter(m => m.slug !== model.slug).slice(0, 6).map(m => {
              const p = gtTask1Pool.find(x => x.id === m.id);
              return (
                <Card
                  key={m.slug}
                  href={`/ielts/writing/gt-task-1/${m.slug}`}
                  className="flex-row items-center justify-between p-4"
                >
                  <div>
                    <p className="font-semibold text-efe-fg text-sm group-hover:text-efe-accent transition-colors">{m.topic}</p>
                    <p className="text-xs text-efe-muted">{p?.letterTypeLabel}</p>
                  </div>
                  <span className="text-efe-muted group-hover:text-efe-accent transition-colors">→</span>
                </Card>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <Link href="/ielts/writing" className="text-efe-accent-ink text-sm font-semibold hover:underline">
              ← Back to all Writing practice
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
