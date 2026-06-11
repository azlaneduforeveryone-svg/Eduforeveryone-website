import type { Metadata } from "next";
import Link from "next/link";
import MarqueeBanner from "@/components/MarqueeBanner";

export const metadata: Metadata = {
  title: "Free IELTS Practice & Quran Online — EduForEveryone",
  description: "Free IELTS practice tests for all 4 skills, Quran with 40+ translations, math tools and quizzes. No fees, no sign-up, ever.",
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
  { q:"Is the IELTS practice really free?", a:"Yes. All Reading, Writing, Listening and Speaking practice is free with no sign-up. AI writing feedback is also free." },
  { q:"Can I read the Quran with Urdu translation?", a:"Yes — the Quran reader includes 40+ translations including English, Urdu and Hindi, with audio recitation and a color-coded Tajweed mode." },
  { q:"Is EduForEveryone really free?", a:"Yes — 100% free forever. No subscriptions, no hidden fees, no sign-up required. Every course, note, quiz, calculator and game on this website is completely free." },
  { q:"Who is EduForEveryone for?", a:"Everyone — from elementary school students to working professionals. Our content is designed to be accessible at every level of learning." },
  { q:"What subjects are available?", a:"We currently cover Mathematics, Science, English and History. We are constantly adding more subjects and content." },
  { q:"What games are available?", a:"We have three free games — Math Puzzle (arithmetic and algebra challenges), WordWise (guess hidden education words), and Quiz Battle (answer questions across all subjects with lives and powerups). All completely free!" },
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

      {/* ── Hero (IELTS-led) ── */}
      <section className="bg-gradient-to-b from-teal-600 to-teal-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-sm font-medium mb-6">
            🎓 Free Education for Everyone
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Free IELTS Practice Tests — All 4 Skills, No Sign-up
          </h1>
          <p className="text-teal-100 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Reading, Writing, Listening and Speaking practice with instant scoring and AI feedback. Plus the Holy Quran with 40+ translations, free math tools and quizzes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/ielts" className="bg-white text-teal-700 px-6 py-3 rounded-xl font-bold hover:bg-teal-50 transition-colors">
              Start IELTS Practice
            </Link>
            <Link href="/quran" className="bg-teal-500 border border-white/20 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-400 transition-colors">
              Read the Quran
            </Link>
          </div>
        </div>
      </section>

      {/* ── Marquee Banner ── */}
      <MarqueeBanner />

      {/* ── IELTS Section ── */}
      <section className="py-14 px-4 bg-indigo-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-indigo-600 font-semibold text-sm uppercase tracking-wider mb-1">Exam Prep</p>
              <h2 className="text-2xl font-bold text-gray-900">IELTS Preparation</h2>
              <p className="text-gray-500 text-sm mt-1">Free practice for all 4 skills — no signup needed</p>
            </div>
            <Link href="/ielts" className="text-indigo-600 text-sm font-semibold hover:underline whitespace-nowrap">View all →</Link>
          </div>
          <Link href="/ielts" className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-gradient-to-r from-indigo-700 to-indigo-800 text-white rounded-2xl p-6 mb-5 hover:from-indigo-800 hover:to-indigo-900 transition-all">
            <div className="text-5xl flex-shrink-0">📚</div>
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="text-xs bg-white/20 border border-white/20 px-2.5 py-1 rounded-full font-medium">Free Forever</span>
                <span className="text-xs bg-white/20 border border-white/20 px-2.5 py-1 rounded-full font-medium">No Signup</span>
                <span className="text-xs bg-white/20 border border-white/20 px-2.5 py-1 rounded-full font-medium">AI Writing Feedback</span>
              </div>
              <h3 className="text-xl font-black mb-1">Complete IELTS Preparation Platform</h3>
              <p className="text-indigo-200 text-sm">Reading, Listening, Writing and Speaking — all 4 skills with real exam-style practice</p>
            </div>
            <div className="flex-shrink-0">
              <span className="bg-white text-indigo-700 px-5 py-2.5 rounded-xl font-bold text-sm group-hover:bg-indigo-50 transition-colors whitespace-nowrap">
                Start Free Practice →
              </span>
            </div>
          </Link>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { href:"/ielts/reading",   emoji:"📖", label:"Reading",   sub:"Passages & MCQ" },
              { href:"/ielts/listening", emoji:"🎧", label:"Listening", sub:"4-Section Tests" },
              { href:"/ielts/writing",   emoji:"✍️", label:"Writing",   sub:"Task 1 & Task 2" },
              { href:"/ielts/speaking",  emoji:"🗣️", label:"Speaking",  sub:"Part 1, 2 & 3" },
            ].map(s => (
              <Link key={s.href} href={s.href} className="bg-white border border-indigo-100 rounded-2xl p-4 hover:border-indigo-300 hover:shadow-md transition-all group text-center">
                <span className="text-3xl block mb-2">{s.emoji}</span>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-indigo-600 transition-colors">{s.label}</h4>
                <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Islamic Studies / Quran Section ── */}
      <section className="py-14 px-4 bg-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-amber-600 font-semibold text-sm uppercase tracking-wider mb-1">Islamic Studies</p>
              <h2 className="text-2xl font-bold text-gray-900">Read the Holy Quran</h2>
              <p className="text-gray-500 text-sm mt-1">40+ translations, color-coded Tajweed and audio — free and ad-free</p>
            </div>
            <Link href="/islamic-studies" className="text-amber-600 text-sm font-semibold hover:underline whitespace-nowrap">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <Link href="/quran" className="group flex items-center gap-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-6 hover:from-teal-700 hover:to-teal-800 transition-all">
              <span className="text-5xl flex-shrink-0">📖</span>
              <div className="flex-1">
                <h3 className="text-lg font-black mb-1">The Holy Quran</h3>
                <p className="text-teal-100 text-sm">40+ translations · audio recitation · Tajweed · 15-line PDF</p>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link href="/quiz/islamic-quiz" className="group flex items-center gap-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-2xl p-6 hover:from-amber-600 hover:to-amber-700 transition-all">
              <span className="text-5xl flex-shrink-0">☪️</span>
              <div className="flex-1">
                <h3 className="text-lg font-black mb-1">Islamic Quiz</h3>
                <p className="text-amber-50 text-sm">English, Urdu &amp; Hindi · 7 categories · 4 difficulty levels</p>
              </div>
              <span className="text-2xl group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { href:"/quran/read",        emoji:"📖", label:"Digital Reader", sub:"40+ Translations" },
              { href:"/quran/tajweed",     emoji:"🎨", label:"Tajweed Quran",  sub:"Color-Coded Rules" },
              { href:"/quran/pdf/15line",  emoji:"📄", label:"15-Line PDF",    sub:"Uthmani Script" },
              { href:"/quran/pdf/13line",  emoji:"🖍️", label:"13-Line PDF",    sub:"Color Tajweed" },
            ].map(s => (
              <Link key={s.href} href={s.href} className="bg-white border border-amber-100 rounded-2xl p-4 hover:border-amber-300 hover:shadow-md transition-all group text-center">
                <span className="text-3xl block mb-2">{s.emoji}</span>
                <h4 className="font-bold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">{s.label}</h4>
                <p className="text-gray-400 text-xs mt-1">{s.sub}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="bg-white border-y border-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[["95+","IELTS Reading Passages"],["60","IELTS Writing Prompts"],["40+","Quran Translations"],["100%","Free — No Sign-up"]].map(([v,l]) => (
            <div key={l}>
              <p className="text-3xl font-bold text-teal-600">{v}</p>
              <p className="text-gray-500 text-sm mt-1">{l}</p>
            </div>
          ))}
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

      {/* ── Games Section ── */}
      <section className="py-14 px-4 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-1">🎮 Play & Learn</p>
              <h2 className="text-2xl font-bold text-white">Free Educational Games</h2>
              <p className="text-gray-400 text-sm mt-1">Make studying addictive — play, score, and learn!</p>
            </div>
            <Link href="/games" className="text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors whitespace-nowrap">
              View all →
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              {
                href:"/games/math-puzzle",
                emoji:"🧮",
                title:"Math Puzzle",
                desc:"Solve arithmetic, algebra and sequences against the clock. 4 difficulty levels — Easy to Expert!",
                tags:["Addition","Algebra","Sequences"],
                color:"border-teal-500/30 hover:border-teal-400",
                badge:"Popular",
                badgeColor:"bg-teal-900 text-teal-300",
                btnColor:"bg-teal-600 hover:bg-teal-500",
              },
              {
                href:"/games/word-puzzle",
                emoji:"🔤",
                title:"WordWise",
                desc:"Guess hidden education words in 6 tries. Math, Science & English words. Difficulty rises with your streak!",
                tags:["Vocabulary","Spelling","Wordle"],
                color:"border-indigo-500/30 hover:border-indigo-400",
                badge:"1682 Words",
                badgeColor:"bg-indigo-900 text-indigo-300",
                btnColor:"bg-indigo-600 hover:bg-indigo-500",
              },
              {
                href:"/games/quiz-battle",
                emoji:"🧠",
                title:"Quiz Battle",
                desc:"Answer 10 questions across all subjects. 3 lives, powerups and streak bonuses make it exciting!",
                tags:["All Subjects","Trivia","Powerups"],
                color:"border-amber-500/30 hover:border-amber-400",
                badge:"New",
                badgeColor:"bg-amber-900 text-amber-300",
                btnColor:"bg-amber-600 hover:bg-amber-500",
              },
            ].map(game => (
              <div key={game.href} className={`bg-gray-800 border ${game.color} rounded-2xl p-6 flex flex-col transition-all group`}>
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{game.emoji}</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${game.badgeColor}`}>{game.badge}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{game.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">{game.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {game.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-0.5 bg-gray-700 text-gray-400 rounded-md">{tag}</span>
                  ))}
                </div>
                <Link href={game.href}
                  className={`${game.btnColor} text-white text-center py-2.5 rounded-xl font-bold text-sm transition-colors`}>
                  Play Now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses + Notes + Quizzes (condensed) ── */}
      <section className="py-14 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">Also Free</p>
            <h2 className="text-3xl font-bold text-gray-900">Courses, Notes & Quizzes</h2>
            <p className="text-gray-500 text-sm mt-2">Mathematics, Science, English and History — with study notes and quizzes</p>
          </div>

          {/* Subjects */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {subjects.map(s => (
              <Link key={s.name} href={s.href} className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-teal-300 hover:shadow-md transition-all group text-center">
                <span className="text-4xl">{s.emoji}</span>
                <h3 className="font-bold text-gray-900 mt-3 mb-1 group-hover:text-teal-600 transition-colors">{s.name}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>

          {/* Featured Courses */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900">Featured Courses</h3>
            <Link href="/courses" className="text-teal-600 text-sm font-semibold hover:underline">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { href:"/courses/mathematics/algebra-basics", emoji:"🧮", level:"Beginner", subject:"Mathematics", title:"Algebra Basics", desc:"Master variables, equations and functions.", lessons:3 },
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

          {/* Notes + Quizzes */}
          <div className="grid sm:grid-cols-2 gap-8">
            <div>
              <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-bold text-gray-900">📝 Study Notes</h3>
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
                <h3 className="text-xl font-bold text-gray-900">🧠 Quizzes</h3>
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
        <p className="text-teal-100 mb-8 max-w-xl mx-auto">Everything is free. No sign-up. No credit card. Start learning in one click.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/ielts" className="bg-white text-teal-700 px-8 py-3 rounded-xl font-bold hover:bg-teal-50 transition-colors">Start IELTS Practice</Link>
          <Link href="/quran" className="bg-teal-500 border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-400 transition-colors">Read the Quran</Link>
          <Link href="/tools" className="bg-teal-500 border border-white/20 text-white px-8 py-3 rounded-xl font-bold hover:bg-teal-400 transition-colors">Explore Free Tools</Link>
        </div>
      </section>
    </>
  );
}
