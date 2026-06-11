import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About EduForEveryone — Free Education, No Barriers",
  description: "Why EduForEveryone exists: free IELTS practice, the Quran with 40+ translations, and free courses, tools and quizzes — built so no student is held back by cost.",
  alternates: { canonical: "https://eduforeveryone.com/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

      {/* Hero */}
      <div className="text-center mb-14">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Story</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Free Education, <span className="text-teal-600">No Barriers</span>
        </h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
          We believe quality education is a right, not a privilege. EduForEveryone was
          built so that no student is ever held back by the price of knowledge.
        </p>
      </div>

      {/* Mission / Why it's free */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🎯</span>
          <h2 className="text-2xl font-bold text-gray-900">Why It&apos;s Free</h2>
        </div>
        <p className="text-gray-600 text-base leading-relaxed">
          Everything on EduForEveryone is <strong>completely free</strong>, with no sign-up
          required to practise. There are no subscriptions and no paywalls. The site is
          supported by non-intrusive advertising so that students — especially those in
          developing countries learning on a mobile phone — can access high-quality
          preparation without ever paying a fee.
        </p>
      </div>

      {/* Who built this — PLACEHOLDER (Azlan to provide) */}
      {/* TODO: Azlan to provide a 2–3 sentence bio. Suggested angle: finance professional
          (ACCA) based in Saudi Arabia who built EduForEveryone as a free education project
          for students in Pakistan and South Asia. Do NOT fabricate — leave until provided. */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">👤</span>
          <h2 className="text-2xl font-bold text-gray-900">Who Built This</h2>
        </div>
        <div className="bg-amber-50 border border-dashed border-amber-300 rounded-2xl p-6">
          <p className="text-amber-800 text-sm font-semibold mb-1">⚠️ Placeholder — pending Azlan&apos;s bio before deploy</p>
          <p className="text-amber-700 text-sm leading-relaxed">
            A short 2–3 sentence founder bio will appear here (background, location, and why
            this project was started). This block is intentionally left as a clearly-marked
            placeholder and must be filled in before the page is published.
          </p>
        </div>
      </div>

      {/* What's on the site */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">What&apos;s on EduForEveryone</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { emoji: "📚", title: "IELTS Preparation", description: "Free practice for all four skills — Reading, Writing, Listening and Speaking — with instant scoring and AI writing feedback.", href: "/ielts" },
            { emoji: "📖", title: "The Holy Quran", description: "Read the Quran with 40+ translations, audio recitation, colour-coded Tajweed and downloadable PDFs — ad-free.", href: "/quran" },
            { emoji: "🧮", title: "Courses & Tools", description: "A 20-topic Mathematics curriculum plus Science, English and History, with free calculators and study notes.", href: "/courses" },
            { emoji: "🎮", title: "Quizzes & Games", description: "Trilingual Islamic Quiz, subject quizzes, and learning games like Math Puzzle, WordWise and Quiz Battle.", href: "/games" },
          ].map((item) => (
            <Link key={item.title} href={item.href}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-teal-300 hover:shadow-md transition-all group">
              <span className="text-4xl">{item.emoji}</span>
              <h3 className="text-lg font-bold text-gray-900 mt-3 mb-2 group-hover:text-teal-600 transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Verifiable stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
        {[
          { emoji: "🎧", value: "4", label: "IELTS Skills Covered" },
          { emoji: "📖", value: "114", label: "Quran Surahs" },
          { emoji: "🧮", value: "20", label: "Maths Topics" },
          { emoji: "🆓", value: "100%", label: "Free — No Sign-up" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm">
            <span className="text-3xl">{stat.emoji}</span>
            <p className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</p>
            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* What's coming */}
      <div className="bg-gray-900 text-white rounded-2xl p-8 mb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🚀</span>
          <h2 className="text-2xl font-bold">What&apos;s Coming Next</h2>
        </div>
        <p className="text-gray-300 text-base leading-relaxed mb-6">
          We are just getting started. The goal is to keep expanding free, high-quality
          preparation for every learner, in more languages, at every stage of life.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { emoji: "🌐", text: "More languages to reach every corner of the world" },
            { emoji: "✍️", text: "More IELTS practice tests and writing prompt pages" },
            { emoji: "📱", text: "A mobile app so learning happens anywhere, anytime" },
          ].map((item) => (
            <div key={item.text} className="bg-gray-800 rounded-xl p-4">
              <span className="text-2xl">{item.emoji}</span>
              <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Contact — PLACEHOLDER (Azlan to provide) */}
      {/* TODO: Azlan to provide a contact email address to replace the placeholder below. */}
      <div className="text-center bg-teal-50 border border-teal-100 rounded-2xl p-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Get in Touch</h2>
        <p className="text-gray-500 mb-3">
          Questions, corrections or suggestions? We&apos;d love to hear from you.
        </p>
        <p className="text-amber-700 text-sm font-semibold mb-6">
          ⚠️ Placeholder — contact email pending Azlan before deploy.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/ielts" className="bg-teal-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-700 transition-colors">
            Start IELTS Practice
          </Link>
          <Link href="/contact" className="bg-white text-teal-600 border border-teal-200 px-6 py-3 rounded-xl font-semibold hover:bg-teal-50 transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

    </div>
  );
}
