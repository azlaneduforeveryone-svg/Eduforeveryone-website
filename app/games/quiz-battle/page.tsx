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
      <div className="max-w-sm mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <a href="/games" className="hover:text-gray-600">Games</a><span>/</span>
          <span className="text-gray-700 font-medium">Quiz Battle</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🧠</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Quiz Battle</h1>
            <p className="text-gray-500 text-sm">10 questions · 3 lives · Powerups</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <QuizBattleGame />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            {emoji:"❤️",title:"3 Lives",desc:"Lose a life for each wrong answer or timeout"},
            {emoji:"🎯",title:"50/50",desc:"Remove 2 wrong options to boost your odds"},
            {emoji:"⏭️",title:"Skip",desc:"Skip a hard question without losing a life"},
            {emoji:"🔥",title:"Streak Bonus",desc:"3+ streak = +25 pts, 5+ streak = +50 pts"},
          ].map(item=>(
            <div key={item.title} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <span className="text-2xl">{item.emoji}</span>
              <p className="font-bold text-gray-900 text-sm mt-1">{item.title}</p>
              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}