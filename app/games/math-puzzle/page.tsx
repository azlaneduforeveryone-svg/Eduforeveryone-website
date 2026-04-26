import type { Metadata } from "next";
import MathPuzzleGame from "./MathPuzzleGame";

export const metadata: Metadata = {
  title: "Math Puzzle Game Free Online | EduForEveryone",
  description: "Free math puzzle game for students. Solve addition, subtraction, multiplication, division, algebra and sequence challenges. Beat the clock and build your streak!",
  keywords: ["math puzzle game","math game for students","free math game","arithmetic puzzle","algebra game","math challenge online","educational math game"],
  alternates: { canonical: "https://eduforeveryone.com/games/math-puzzle" },
  openGraph: {
    title: "Math Puzzle Game — Free Online | EduForEveryone",
    description: "Test your math skills! 4 difficulty levels, 10 question rounds, beat the clock.",
    url: "https://eduforeveryone.com/games/math-puzzle",
    siteName: "EduForEveryone", type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebApplication",
        name:"Math Puzzle Game",url:"https://eduforeveryone.com/games/math-puzzle",
        description:"Free math puzzle game with arithmetic, algebra and sequence challenges.",
        applicationCategory:"EducationalApplication",operatingSystem:"Any",
        offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},
        provider:{"@type":"Organization",name:"EduForEveryone",url:"https://eduforeveryone.com"},
      })}} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <a href="/games" className="hover:text-gray-600 transition-colors">Games</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Math Puzzle</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Game ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">🧮</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Math Puzzle</h1>
                <p className="text-gray-500 text-sm">Beat the clock · Build your streak</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <MathPuzzleGame />
            </div>
          </div>

          {/* ── Info Panel ── */}
          <div className="space-y-5">

            {/* How to Play */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">🎮 How to Play</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Solve <strong>10 math questions</strong> against the clock. Answer correctly and quickly to earn bonus points and build your streak!
              </p>
              <div className="space-y-2.5">
                {[
                  ["⏱️","Beat the timer","Each difficulty has a countdown. Answer fast for time bonus points!"],
                  ["🔥","Build streaks","Consecutive correct answers multiply your score"],
                  ["⚡","Speed bonus","The faster you answer, the more points you earn"],
                  ["📊","10 questions","Each round is 10 questions. Try to get them all!"],
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

            {/* Difficulty Levels */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">🎯 Difficulty Levels</h2>
              <div className="space-y-3">
                {[
                  { emoji:"🟢", title:"Easy",   time:"20s", desc:"Addition & subtraction",           pts:"10 pts/question" },
                  { emoji:"🟡", title:"Medium", time:"15s", desc:"All operations + division",         pts:"20 pts/question" },
                  { emoji:"🔴", title:"Hard",   time:"12s", desc:"Missing numbers & equations",       pts:"30 pts/question" },
                  { emoji:"💀", title:"Expert", time:"8s",  desc:"Sequences, powers & algebra",       pts:"50 pts/question" },
                ].map(d => (
                  <div key={d.title} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-2xl">{d.emoji}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <p className="font-bold text-gray-900 text-sm">{d.title}</p>
                        <span className="text-xs text-gray-400 font-mono">{d.time}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{d.desc}</p>
                      <p className="text-teal-600 text-xs font-semibold mt-0.5">{d.pts}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scoring */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
              <h2 className="font-bold text-teal-900 text-base mb-3">⭐ Scoring System</h2>
              <ul className="space-y-2 text-sm text-teal-800">
                <li>✅ <strong>Base points</strong> — based on difficulty level</li>
                <li>⚡ <strong>Time bonus</strong> — faster answers = more points</li>
                <li>🔥 <strong>Streak bonus</strong> — consecutive correct answers</li>
                <li>📈 <strong>Best score</strong> — tracked across all rounds</li>
              </ul>
            </div>

            {/* Question Types */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-3">📝 Question Types</h2>
              <div className="flex flex-wrap gap-2">
                {["Addition","Subtraction","Multiplication","Division","Missing Number","Algebra","Sequences","Powers"].map(t => (
                  <span key={t} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-600 rounded-full font-medium">{t}</span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
