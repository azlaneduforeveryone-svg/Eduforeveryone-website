import type { Metadata } from "next";
import QuizBattleGame from "./QuizBattleGame";

export const metadata: Metadata = {
  title: "Quiz Battle — Free Educational Quiz Game | EduForEveryone",
  description: "Free quiz battle game for students. Answer Math, Science, History and English questions against the clock. 3 lives, powerups, streak bonuses and more!",
  keywords: ["quiz game for students","educational quiz","free quiz game","math quiz","science quiz","history quiz","english quiz game","quiz battle"],
  alternates: { canonical: "https://eduforeveryone.com/games/quiz-battle" },
  openGraph: {
    title: "Quiz Battle — Free Educational Quiz | EduForEveryone",
    description: "10 questions, 3 lives, powerups and streak bonuses. Free for all students!",
    url: "https://eduforeveryone.com/games/quiz-battle",
    siteName: "EduForEveryone", type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebApplication",
        name:"Quiz Battle",url:"https://eduforeveryone.com/games/quiz-battle",
        description:"Free educational quiz battle game for students.",
        applicationCategory:"EducationalApplication",operatingSystem:"Any",
        offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},
        provider:{"@type":"Organization",name:"EduForEveryone",url:"https://eduforeveryone.com"},
      })}} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <a href="/games" className="hover:text-gray-600 transition-colors">Games</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Quiz Battle</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Game ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">🧠</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Quiz Battle</h1>
                <p className="text-gray-500 text-sm">10 questions · 3 lives · Powerups · Streaks</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <QuizBattleGame />
            </div>
          </div>

          {/* ── Info Panel ── */}
          <div className="space-y-5">

            {/* How to Play */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">🎮 How to Play</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Answer <strong>10 questions</strong> across subjects. You have <strong>3 lives</strong> — wrong answers or timeouts cost a life. Use powerups wisely!
              </p>
              <div className="space-y-2.5">
                {[
                  ["❤️","3 Lives","Lose a life for wrong answers or when time runs out"],
                  ["⏱️","Beat the timer","Easy=25s, Medium=18s, Hard=12s per question"],
                  ["🔥","Streak bonus","+25 pts at 3 streak, +50 pts at 5 streak"],
                  ["⚡","Speed bonus","Answer faster to earn more points per question"],
                ].map(([e,t,d]) => (
                  <div key={t} className="flex gap-3">
                    <span className="text-lg flex-shrink-0">{e}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{t}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Powerups */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">⚡ Powerups</h2>
              <div className="space-y-3">
                {[
                  { emoji:"🎯", title:"50/50",    desc:"Removes 2 wrong answers — one per game" },
                  { emoji:"⏭️", title:"Skip",     desc:"Skip a hard question without losing a life" },
                  { emoji:"⏰", title:"+10 Seconds", desc:"Add 10 seconds to the current question" },
                ].map(p => (
                  <div key={p.title} className="flex gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-2xl">{p.emoji}</span>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{p.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
                <p className="text-xs text-gray-400 italic">Each powerup can only be used once per game!</p>
              </div>
            </div>

            {/* Subjects */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">📚 Subjects Covered</h2>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emoji:"🧮", sub:"Mathematics", count:"12 questions" },
                  { emoji:"🔬", sub:"Science",     count:"10 questions" },
                  { emoji:"🌍", sub:"History",     count:"10 questions" },
                  { emoji:"📝", sub:"English",     count:"10 questions" },
                ].map(s => (
                  <div key={s.sub} className="bg-gray-50 rounded-xl p-3 border border-gray-100 text-center">
                    <span className="text-2xl">{s.emoji}</span>
                    <p className="font-bold text-gray-900 text-xs mt-1">{s.sub}</p>
                    <p className="text-gray-400 text-xs">{s.count}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
              <h2 className="font-bold text-indigo-900 text-base mb-3">🎯 Question Difficulty</h2>
              <div className="space-y-2">
                {[
                  ["🟢","Easy",   "10 pts — basic concepts"],
                  ["🟡","Medium", "20 pts — intermediate level"],
                  ["🔴","Hard",   "30 pts — advanced knowledge"],
                ].map(([e,l,d]) => (
                  <div key={l} className="flex items-center gap-2 text-sm text-indigo-800">
                    <span>{e}</span>
                    <strong>{l}</strong>
                    <span className="text-indigo-600 text-xs">— {d}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}