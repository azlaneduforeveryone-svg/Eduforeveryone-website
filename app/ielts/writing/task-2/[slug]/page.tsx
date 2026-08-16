import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { task2Pool } from "@/lib/ielts/writingData";
import { TASK2_MODEL_ANSWERS, getTask2ModelAnswerBySlug } from "@/lib/ielts/ielts-task2-model-answers";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return TASK2_MODEL_ANSWERS.map(m => ({ slug: m.slug }));
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const model = getTask2ModelAnswerBySlug(params.slug);
  const prompt = model ? task2Pool.find(p => p.id === model.id) : undefined;
  if (!model || !prompt) return { title: "IELTS Writing Task 2 | EduForEveryone" };
  return {
    title: `IELTS Task 2 ${prompt.taskTypeLabel} Sample — ${model.topic}`,
    description: `IELTS Writing Task 2 (${prompt.taskTypeLabel}): ${model.topic}. Read the question and a sample Band 8 essay, then write your own with instant AI feedback.`,
    alternates: { canonical: `https://eduforeveryone.com/ielts/writing/task-2/${model.slug}` },
    openGraph: {
      title: `IELTS Task 2 ${prompt.taskTypeLabel} Sample — ${model.topic} | EduForEveryone`,
      description: `Free IELTS Writing Task 2 essay practice with a sample Band 8 model answer and AI feedback.`,
      url: `https://eduforeveryone.com/ielts/writing/task-2/${model.slug}`,
      siteName: "EduForEveryone",
      type: "article",
    },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const model = getTask2ModelAnswerBySlug(params.slug);
  const prompt = model ? task2Pool.find(p => p.id === model.id) : undefined;
  if (!model || !prompt) notFound();

  const wordCount = model.modelAnswer.trim().split(/\s+/).length;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "IELTS", path: "/ielts" },
        { name: "Writing", path: "/ielts/writing" },
        { name: model.topic, path: `/ielts/writing/task-2/${model.slug}` },
      ])} />

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
        <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
        <span>›</span>
        <Link href="/ielts/writing" className="hover:text-indigo-600 transition-colors">Writing</Link>
        <span>›</span>
        <span className="text-gray-600 font-medium">Task 2 — {model.topic}</span>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="text-xs bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full font-bold">Task 2 — Essay</span>
        <span className="text-xs bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full font-bold">{prompt.taskTypeLabel}</span>
        <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">40 min · {prompt.minWords}+ words</span>
      </div>

      <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mb-4">
        IELTS Task 2: {model.topic}
      </h1>

      {/* Task prompt */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-2">The Question</p>
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{prompt.prompt}</p>
        {prompt.planningHints?.length > 0 && (
          <div className="mt-4 bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">How to approach it</p>
            <ul className="space-y-1.5">
              {prompt.planningHints.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-violet-500 font-bold flex-shrink-0">•</span>{h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Start Writing CTA — deep-links into the editor with this prompt preloaded */}
      <Link
        href={`/ielts/writing?prompt=${prompt.id}`}
        className="block w-full text-center bg-violet-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors mb-8"
      >
        Start Writing This Essay →
      </Link>

      {/* Model answer */}
      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-1 flex-wrap gap-2">
          <h2 className="font-black text-violet-900">Sample Band 8 Response</h2>
          <span className="text-xs text-violet-600 font-semibold">{wordCount} words</span>
        </div>
        <p className="text-xs text-violet-500 mb-4">
          Written by EduForEveryone — for guidance only. Not an official examiner response.
        </p>
        <div className="bg-white border border-violet-100 rounded-xl p-5 space-y-3">
          {model.modelAnswer.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 text-sm leading-relaxed">{para}</p>
          ))}
        </div>
      </div>

      {/* Other Task 2 prompts */}
      <div className="mt-10">
        <h2 className="text-lg font-black text-gray-900 mb-4">More IELTS Task 2 Practice</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {TASK2_MODEL_ANSWERS.filter(m => m.slug !== model.slug).slice(0, 6).map(m => {
            const p = task2Pool.find(x => x.id === m.id);
            return (
              <Link key={m.slug} href={`/ielts/writing/task-2/${m.slug}`}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-violet-300 hover:shadow-sm transition-all group">
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-violet-600 transition-colors">{m.topic}</p>
                  <p className="text-xs text-gray-400">{p?.taskTypeLabel}</p>
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
