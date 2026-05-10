// app/courses/mathematics/fractions-basics/page.tsx
// Replace the existing content with this

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction to Fractions | Mathematics | EduForEveryone",
  description: "Learn fractions from scratch — numerators, denominators, proper, improper and mixed numbers. Free lesson with practice and quiz.",
};

export default function FractionsBasicsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/courses" className="hover:text-teal-600">Courses</Link>
        <span>/</span>
        <Link href="/courses/mathematics" className="hover:text-teal-600">Mathematics</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Introduction to Fractions</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-start gap-5">
          <span className="text-6xl">🧮</span>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">Mathematics</span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">🌱 Elementary</span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">~15 min</span>
            </div>
            <h1 className="text-2xl font-black mb-2">Introduction to Fractions</h1>
            <p className="text-teal-200 text-sm leading-relaxed mb-4">
              Understand what fractions are, how to read them, and the difference between proper, improper and mixed fractions.
              Includes worked examples, practice questions and a 5-question quiz.
            </p>
            <Link href="/courses/mathematics/fractions-basics/lesson"
              className="inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-xl font-bold hover:bg-teal-50 transition-all"
              style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.15)" }}>
              📖 Start Lesson
            </Link>
          </div>
        </div>
      </div>

      {/* What you will learn */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
        <h2 className="font-black text-gray-900 mb-4">📋 What You Will Learn</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "What a fraction is and how to read one",
            "The difference between numerator and denominator",
            "Proper fractions, improper fractions and mixed numbers",
            "How to identify equivalent fractions",
            "Real-life examples of fractions",
            "Convert between mixed numbers and improper fractions",
          ].map((p, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-teal-500 font-bold mt-0.5">✓</span>
              <span>{p}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Lesson includes */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { emoji:"📖", label:"Full Lesson",    desc:"Detailed explanation with examples" },
          { emoji:"✏️", label:"5 Exercises",    desc:"Practice with hints and answers" },
          { emoji:"🧠", label:"5-Q Quiz",       desc:"Test yourself with feedback" },
        ].map((c, i) => (
          <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-3xl mb-2">{c.emoji}</p>
            <p className="font-bold text-gray-900 text-sm">{c.label}</p>
            <p className="text-xs text-gray-500 mt-1">{c.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Link href="/courses/mathematics/fractions-basics/lesson"
        className="flex items-center justify-center gap-2 bg-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all"
        style={{ boxShadow: "0 4px 0 #0F6E56" }}>
        📖 Start Lesson Now — Free
      </Link>
    </div>
  );
}
