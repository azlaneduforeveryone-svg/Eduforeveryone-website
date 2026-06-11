import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { academicTask1Pool } from "@/lib/ielts-writing-data";
import { TASK1_MODEL_ANSWERS, getModelAnswerBySlug } from "@/lib/ielts-writing-model-answers";
import Task1Figure from "@/components/ielts/Task1Figure";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return TASK1_MODEL_ANSWERS.map(m => ({ slug: m.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const model = getModelAnswerBySlug(params.slug);
  const prompt = model ? academicTask1Pool.find(p => p.id === model.id) : undefined;
  if (!model || !prompt) return { title: "IELTS Writing Task 1 | EduForEveryone" };
  return {
    title: `IELTS Task 1 ${prompt.chartTypeLabel} Sample Answer — ${model.topic}`,
    description: `IELTS Academic Writing Task 1 (${prompt.chartTypeLabel}): ${model.topic}. Read the task and a sample Band 8 model answer, then write your own with instant AI feedback.`,
    alternates: { canonical: `https://eduforeveryone.com/ielts/writing/task-1/${model.slug}` },
    openGraph: {
      title: `IELTS Task 1 ${prompt.chartTypeLabel} Sample Answer — ${model.topic} | EduForEveryone`,
      description: `Free IELTS Academic Writing Task 1 practice with a sample Band 8 model answer and AI feedback.`,
      url: `https://eduforeveryone.com/ielts/writing/task-1/${model.slug}`,
      siteName: "EduForEveryone",
      type: "article",
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const model = getModelAnswerBySlug(params.slug);
  const prompt = model ? academicTask1Pool.find(p => p.id === model.id) : undefined;
  if (!model || !prompt) notFound();

  const wordCount = model.modelAnswer.trim().split(/\s+/).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "IELTS", path: "/ielts" },
        { name: "Writing", path: "/ielts/writing" },
        { name: model.topic, path: `/ielts/writing/task-1/${model.slug}` },
      ])} />
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
        <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
        <span>›</span>
        <Link href="/ielts/writing" className="hover:text-indigo-600 transition-colors">Writing</Link>
        <span>›</span>
        <span className="text-gray-600 font-medium">Task 1 — {model.topic}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-bold">Academic Task 1</span>
        <span className="text-xs bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full font-bold">{prompt.chartTypeLabel}</span>
        <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">20 min · {prompt.minWords}+ words</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
        IELTS Task 1: {model.topic} ({prompt.chartTypeLabel})
      </h1>

      {/* Task prompt */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">The Task</p>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{prompt.prompt}</p>
        {prompt.figure && (
          <div className="mt-4">
            <Task1Figure figure={prompt.figure} />
          </div>
        )}
      </div>

      {/* Start Writing CTA — deep-links into the editor with this prompt preloaded */}
      <Link
        href={`/ielts/writing?prompt=${prompt.id}`}
        className="block w-full text-center bg-violet-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors mb-8"
      >
        Start Writing This Task →
      </Link>

      {/* Model answer */}
      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
          <h2 className="font-black text-violet-900">Sample Band 8 Response</h2>
          <span className="text-xs text-violet-600 font-semibold">{wordCount} words</span>
        </div>
        <p className="text-xs text-violet-500 mb-4">
          Model answer written by EduForEveryone — for guidance only. Not an official examiner response.
        </p>
        <div className="bg-white border border-violet-100 rounded-xl p-5 space-y-3">
          {model.modelAnswer.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 text-sm leading-relaxed">{para}</p>
          ))}
        </div>
      </div>

      {/* Other Task 1 prompts */}
      <div className="mt-10">
        <h2 className="text-lg font-black text-gray-900 mb-4">More IELTS Task 1 Practice</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {TASK1_MODEL_ANSWERS.filter(m => m.slug !== model.slug).slice(0, 6).map(m => {
            const p = academicTask1Pool.find(x => x.id === m.id);
            return (
              <Link key={m.slug} href={`/ielts/writing/task-1/${m.slug}`}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-violet-300 hover:shadow-sm transition-all group">
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-violet-600 transition-colors">{m.topic}</p>
                  <p className="text-xs text-gray-400">{p?.chartTypeLabel}</p>
                </div>
                <span className="text-gray-300 group-hover:text-violet-400 transition-colors">→</span>
              </Link>
            );
          })}
        </div>
        <div className="mt-6 text-center">
          <Link href="/ielts/writing" className="text-indigo-600 text-sm font-semibold hover:underline">
            ← Back to all Writing practice
          </Link>
        </div>
      </div>
    </div>
  );
}
