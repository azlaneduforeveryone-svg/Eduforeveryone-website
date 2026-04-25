import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EduForEveryone — Free Education, Courses, Tools & Games for Students",
  description: "Free high-quality education for every student. Courses, study notes, quizzes, math calculators, scientific calculator, financial calculator, math puzzle games — 100% free, no sign-up needed.",
  keywords: ["free education", "free online courses", "free study notes", "free math calculator", "scientific calculator online", "financial calculator", "math puzzle game", "free quiz for students", "free education website", "learn online free"],
  alternates: { canonical: "https://eduforeveryone.com" },
  openGraph: {
    title: "EduForEveryone — Free Education for All Students",
    description: "Courses, notes, quizzes, calculators and games. 100% free. No barriers.",
    url: "https://eduforeveryone.com",
    siteName: "EduForEveryone",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "EduForEveryone — Free Education for All", description: "Free courses, notes, quizzes, calculators and math games for students." },
};

const subjects = [
  { emoji:"🧮", name:"Mathematics", desc:"Algebra, geometry, calculus and more", href:"/courses" },
  { emoji:"🔬", name:"Science", desc:"Biology, chemistry, physics", href:"/courses" },
  { emoji:"📝", name:"English", desc:"Writing, grammar, literature", href:"/courses" },
  { emoji:"🌍", name:"History", desc:"World events, civilizations", href:"/courses" },
];

const tools = [
  { emoji:"🔢", name:"Simple Calculator", href:"/tools/simple-calculator", tag:"Free" },
  { emoji:"🔬", name:"Scientific Calculator", href:"/tools/scientific-calculator", tag:"Intermediate" },
  { emoji:"📊", name:"Financial Calculator", href:"/tools/cfa-calculator", tag:"TVM·NPV·IRR" },
  { emoji:"🔡", name:"Number to Words", href:"/tools/number-to-words", tag:"8 Languages" },
];

const faqs = [
  { q:"Is EduForEveryone really free?", a:"Yes — 100% free forever. No subscriptions, no hidden fees, no sign-up required. Every course, note, quiz, calculator and game on this website is completely free." },
  { q:"Who is EduForEveryone for?", a:"Everyone — from elementary school students to working professionals. Our content is designed to be accessible at every level of learning." },
  { q:"What subjects are available?", a:"We currently cover Mathematics, Science, English and History. We are constantly adding more subjects and content." },
  { q:"Can I use the calculators for free?", a:"Yes! Our scientific calculator, financial calculator (TVM, NPV, IRR, Bond Pricing), simple calculator and number to words converter are all completely free to use." },
  { q:"Do I need to create an account?", a:"No account needed. Just visit the website and start learning immediately." },
  { q:"Will more content be added?", a:"Yes! We are constantly adding new courses, notes, quizzes, tools and games. More languages and subjects are coming soon." },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "EduForEveryone",
        url: "https://eduforeveryone.com",
        description: "Free education platform offering courses, notes, quizzes, calculators and games for students worldwide.",
        logo: "https://eduforeveryone.com/Main_Logo.jpg",
        sameAs: ["https://github.com/azlaneduforeveryone-svg/Eduforeveryone-website"],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      })}} />

      {/* ── Hero ── */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            🎓 Free Education for Everyone
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Learn Anything.<br />Completely Free.
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Free courses, study notes, quizzes, calculators and math games for every student — from elementary to university and beyond. No fees. No barriers. Forever.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/courses" className="bg-white text-teal-700 px-6 py-3 rounded-xl font-bold hover:bg-teal-50 transition-colors">
              Browse Courses
            </Link>
            <Link href="/games/math-puzzle" className="bg-teal-500 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-400 transition-colors">
              Play Math Puzzle 🎮
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-b border-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[["100%","Free Forever"],["4+","Subjects"],["10+","Free Tools"],["∞","Students Supported"]].map(([v,l]) => (
            <div key={l}>
              <p className="text-3xl font-bold text-teal-600">{v}</p>
              <p className="text-gray-500 text-sm mt-1">{l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Subjects ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">What We Teach</p>
            <h2 className="text-3xl font-bold text-gray-900">Learn Across 4 Subjects</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {subjects.map(s => (
              <Link key={s.name} href={s.href} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-teal-300 hover:shadow-md transition-all group text-center">
                <span className="text-4xl">{s.emoji}</span>
                <h3 className="font-bold text-gray-900 mt-3 mb-1 group-hover:text-teal-600 transition-colors">{s.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Courses ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-1">Learn</p>
              <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
            </div>
            <Link href="/courses" className="text-teal-600 text-sm font-semibold hover:underline">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { href:"/courses/math-algebra-basics", emoji:"🧮", level:"Beginner", subject:"Mathematics", title:"Algebra Basics", desc:"Master variables, equations and functions.", lessons:3 },
              { href:"/courses/science-biology-cells", emoji:"🔬", level:"Intermediate", subject:"Science", title:"Cell Biology", desc:"Explore cell structure, function and division.", lessons:3 },
              { href:"/courses/history-world-war-2", emoji:"🌍", level:"Intermediate", subject:"History", title:"World War II", desc:"Causes, key events and lasting impact.", lessons:3 },
            ].map(c => (
              <Link key={c.href} href={c.href} className="group border border-gray-200 rounded-2xl p-5 hover:border-teal-200 hover:shadow-md transition-all">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl">{c.emoji}</span>
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full font-medium">{c.level}</span>
                </div>
                <p className="text-xs text-teal-600 font-semibold mb-1">{c.subject}</p>
                <h3 className="font-bold text-gray-900 mb-1 group-hover:text-teal-600 transition-colors">{c.title}</h3>
                <p className="text-gray-500 text-xs mb-3">{c.desc}</p>
                <p className="text-xs text-gray-400">{c.lessons} lessons</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Game Banner ── */}
      <section className="py-10 px-4 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-white">
          <div>
            <p className="font-semibold text-teal-200 text-sm mb-1">🎮 New Game</p>
            <h2 className="text-2xl font-bold mb-1">Math Puzzle Challenge</h2>
            <p className="text-teal-100 text-sm">10 questions · 4 levels · Beat the clock · Build your streak</p>
          </div>
          <Link href="/games/math-puzzle" className="bg-white text-teal-700 px-6 py-3 rounded-xl font-bold whitespace-nowrap hover:bg-teal-50 transition-colors">
            Play Now →
          </Link>
        </div>
      </section>

      {/* ── Tools ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-1">Free Tools</p>
              <h2 className="text-2xl font-bold text-gray-900">Calculators & Tools</h2>
            </div>
            <Link href="/tools" className="text-teal-600 text-sm font-semibold hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {tools.map(t => (
              <Link key={t.href} href={t.href} className="group bg-white border border-gray-200 rounded-2xl p-4 hover:border-teal-300 hover:shadow-md transition-all text-center">
                <span className="text-3xl">{t.emoji}</span>
                <h3 className="font-bold text-gray-900 text-sm mt-3 mb-1 group-hover:text-teal-600 transition-colors leading-tight">{t.name}</h3>
                <span className="text-xs bg-teal-50 text-teal-700 px-2 py-0.5 rounded-full">{t.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Notes + Quiz ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 gap-8">
          <div>
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-gray-900">📝 Study Notes</h2>
              <Link href="/notes" className="text-teal-600 text-sm font-semibold hover:underline">View all →</Link>
            </div>
            <div className="space-y-3">
              {[
                { href:"/notes/algebra-cheatsheet", title:"Algebra Cheat Sheet", sub:"Mathematics", time:"5 min" },
                { href:"/notes/cell-biology-notes", title:"Cell Biology Key Concepts", sub:"Science", time:"8 min" },
                { href:"/notes/essay-writing-guide", title:"Essay Writing Guide", sub:"English", time:"6 min" },
              ].map(n => (
                <Link key={n.href} href={n.href} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-teal-200 transition-all group">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-teal-600 transition-colors">{n.title}</p>
                    <p className="text-xs text-gray-400">{n.sub} · {n.time} read</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-400 transition-colors">→</span>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-bold text-gray-900">🧠 Quizzes</h2>
              <Link href="/quiz" className="text-teal-600 text-sm font-semibold hover:underline">View all →</Link>
            </div>
            <div className="space-y-3">
              {[
                { href:"/quiz/algebra-quiz", title:"Algebra Basics Quiz", sub:"Mathematics", q:5 },
                { href:"/quiz/cell-biology-quiz", title:"Cell Biology Quiz", sub:"Science", q:5 },
                { href:"/quiz/wwii-quiz", title:"World War II Quiz", sub:"History", q:5 },
              ].map(q => (
                <Link key={q.href} href={q.href} className="flex justify-between items-center p-4 border border-gray-100 rounded-xl hover:border-teal-200 transition-all group">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm group-hover:text-teal-600 transition-colors">{q.title}</p>
                    <p className="text-xs text-gray-400">{q.sub} · {q.q} questions</p>
                  </div>
                  <span className="text-gray-300 group-hover:text-teal-400 transition-colors">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">FAQ</p>
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white border border-gray-100 rounded-2xl p-5">
                <h3 className="font-bold text-gray-900 mb-2">{f.q}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-4 bg-teal-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-3">Start Learning Today</h2>
        <p className="text-teal-100 mb-8 max-w-xl mx-auto">Join thousands of students who learn for free every day. No sign-up. No credit card. Just knowledge.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/courses" className="bg-white text-teal-700 px-8 py-3 rounded-xl font-bold hover:bg-teal-50 transition-colors">Browse Courses</Link>
          <Link href="/tools" className="bg-teal-500 border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-400 transition-colors">Try Our Tools</Link>
          <Link href="/games" className="bg-teal-500 border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-400 transition-colors">Play Games 🎮</Link>
        </div>
      </section>
    </>
  );
}