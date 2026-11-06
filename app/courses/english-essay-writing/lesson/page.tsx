import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Essay Writing | English | EduForEveryone",
  description: "Master essay structure, thesis statements, PEEL paragraphs and transitions. Free English lesson with practice and quiz.",
};

export default function EssayWritingPage() {
  return (
    <div className="efe-page min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <nav className="flex items-center gap-2 text-sm text-efe-muted mb-6">
          <Link href="/courses" className="hover:text-efe-accent">Courses</Link>
          <span>/</span>
          <span className="text-efe-fg font-medium">Essay Writing</span>
        </nav>

        <div className="efe-banner text-white rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-5">
            <span className="text-6xl">✏️</span>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">English</span>
                <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">📗 Middle School · High School</span>
                <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">~20 min</span>
              </div>
              <h1 className="text-2xl font-black font-display mb-2">Introduction to Essay Writing</h1>
              <p className="text-white/85 text-sm leading-relaxed mb-4">
                Learn how to structure a compelling essay from scratch — introduction, body paragraphs using PEEL,
                and a strong conclusion. Master thesis statements, hooks and transitions.
              </p>
              <Link href="/courses/english-essay-writing/lesson"
                className="efe-btn efe-btn-on-hero">
                📖 Start Lesson
              </Link>
            </div>
          </div>
        </div>

        <div className="efe-card p-6 mb-6">
          <h2 className="font-black text-efe-fg font-display mb-4">📋 What You Will Learn</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "The three-part essay structure: intro, body, conclusion",
              "How to write a strong thesis statement",
              "Crafting an attention-grabbing hook",
              "The PEEL paragraph framework",
              "Using transition words effectively",
              "Common essay writing mistakes to avoid",
            ].map((p, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-efe-fg">
                <span className="text-efe-accent font-bold mt-0.5">✓</span><span>{p}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { emoji:"📖", label:"Full Lesson",    desc:"Structured guide with real examples" },
            { emoji:"✏️", label:"5 Exercises",    desc:"Practice hooks, PEEL and thesis" },
            { emoji:"🧠", label:"5-Q Quiz",       desc:"Test your essay writing knowledge" },
          ].map((c, i) => (
            <div key={i} className="efe-card p-4 text-center">
              <p className="text-3xl mb-2">{c.emoji}</p>
              <p className="font-bold text-efe-fg text-sm">{c.label}</p>
              <p className="text-xs text-efe-muted mt-1">{c.desc}</p>
            </div>
          ))}
        </div>

        <Link href="/courses/english-essay-writing/lesson"
          className="efe-btn efe-btn-primary w-full py-4 text-lg">
          📖 Start Lesson Now — Free
        </Link>
      </div>
    </div>
  );
}
