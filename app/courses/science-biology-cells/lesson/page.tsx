// ═══════════════════════════════════════════════════════════════════════════
// FILE 1: app/courses/science-biology-cells/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Introduction to Cells | Science | EduForEveryone",
  description: "Learn about cell structure, organelles, and the difference between plant and animal cells. Free biology lesson with quiz.",
};

export default function CellsBiologyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/courses" className="hover:text-teal-600">Courses</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Introduction to Cells</span>
      </nav>

      <div className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl p-8 mb-8">
        <div className="flex items-start gap-5">
          <span className="text-6xl">🔬</span>
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">Science · Biology</span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">📗 Middle School</span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">~20 min</span>
            </div>
            <h1 className="text-2xl font-black mb-2">Introduction to Cells</h1>
            <p className="text-green-200 text-sm leading-relaxed mb-4">
              Discover the building blocks of life. Learn about cell structure, key organelles, and how plant and animal
              cells differ. Includes an interactive organelles explorer and quiz.
            </p>
            <Link href="/courses/science-biology-cells/lesson"
              className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-xl font-bold hover:bg-green-50 transition-all"
              style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.15)" }}>
              📖 Start Lesson
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
        <h2 className="font-black text-gray-900 mb-4">📋 What You Will Learn</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            "The history of cell discovery (Robert Hooke, 1665)",
            "Cell theory — the fundamental principle of biology",
            "Key organelles: nucleus, mitochondria, cell membrane",
            "Differences between plant and animal cells",
            "How photosynthesis occurs in plant cells",
            "The role of each organelle in keeping cells alive",
          ].map((p, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 font-bold mt-0.5">✓</span><span>{p}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-8">
        {[
          { emoji:"📖", label:"Full Lesson",         desc:"Detailed explanation with diagrams" },
          { emoji:"🔬", label:"Organelles Explorer", desc:"Click each organelle to learn more" },
          { emoji:"🧠", label:"5-Q Quiz",            desc:"Test yourself with explanations" },
        ].map((c, i) => (
          <div key={i} className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-center">
            <p className="text-3xl mb-2">{c.emoji}</p>
            <p className="font-bold text-gray-900 text-sm">{c.label}</p>
            <p className="text-xs text-gray-500 mt-1">{c.desc}</p>
          </div>
        ))}
      </div>

      <Link href="/courses/science-biology-cells/lesson"
        className="flex items-center justify-center gap-2 bg-green-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-green-700 transition-all"
        style={{ boxShadow: "0 4px 0 #14532d" }}>
        📖 Start Lesson Now — Free
      </Link>
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// FILE 2: app/courses/english-essay-writing/page.tsx
// ═══════════════════════════════════════════════════════════════════════════
// (Create a separate file for this one)

// import type { Metadata } from "next";
// import Link from "next/link";
//
// export const metadata: Metadata = {
//   title: "Essay Writing | English | EduForEveryone",
//   description: "Master essay structure, thesis statements and paragraph writing. Free English lesson with PEEL framework and quiz.",
// };
//
// export default function EssayWritingPage() {
//   return (
//     <div className="max-w-4xl mx-auto px-4 py-10">
//       <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
//         <Link href="/courses" className="hover:text-teal-600">Courses</Link>
//         <span>/</span>
//         <span className="text-gray-700 font-medium">Essay Writing</span>
//       </nav>
//       <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl p-8 mb-8">
//         ... same pattern, colour purple, link to /courses/english-essay-writing/lesson
//       </div>
//     </div>
//   );
// }
