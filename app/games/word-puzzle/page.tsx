import type { Metadata } from "next";
import WordWiseGame from "./WordWiseGame";

export const metadata: Metadata = {
  title: "WordWise — Free Word Puzzle Game for Students | EduForEveryone",
  description: "Free educational word puzzle game. Guess hidden words from Math, Science and English. 1682 words, 4 difficulty levels, hints always shown. Fun for all students!",
  keywords: ["word puzzle game","educational word game","wordle for students","math word game","science word game","free word puzzle","vocabulary game"],
  alternates: { canonical: "https://eduforeveryone.com/games/word-puzzle" },
  openGraph: {
    title: "WordWise — Free Word Puzzle Game | EduForEveryone",
    description: "Guess hidden education words in 6 tries. Math, Science and English categories!",
    url: "https://eduforeveryone.com/games/word-puzzle",
    siteName: "EduForEveryone", type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebApplication",
        name:"WordWise Word Puzzle",url:"https://eduforeveryone.com/games/word-puzzle",
        description:"Free educational word puzzle game for students with 1682 words.",
        applicationCategory:"EducationalApplication",operatingSystem:"Any",
        offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},
        provider:{"@type":"Organization",name:"EduForEveryone",url:"https://eduforeveryone.com"},
      })}} />

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <a href="/games" className="hover:text-gray-600 transition-colors">Games</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">WordWise</span>
        </nav>

        {/* Desktop layout: game on left, info on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── LEFT: Game ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">🔤</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">WordWise</h1>
                <p className="text-gray-500 text-sm">Guess the hidden education word in 6 tries</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <WordWiseGame />
            </div>
          </div>

          {/* ── RIGHT: Info panel ── */}
          <div className="space-y-5">

            {/* How to Play */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">🎮 How to Play</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">
                Guess the hidden education word in <strong>up to 6 tries</strong>.
                The hint is always shown to help you think!
              </p>
              <div className="space-y-3">
                {[
                  { cls:"bg-teal-600",    label:"🟩 Correct",  desc:"Right letter, right position" },
                  { cls:"bg-amber-500",   label:"🟨 Present",  desc:"Right letter, wrong position" },
                  { cls:"bg-gray-600",    label:"⬛ Absent",   desc:"Letter not in the word" },
                  { cls:"bg-indigo-200",  label:"🔵 Revealed", desc:"Free letter given as clue" },
                ].map(x => (
                  <div key={x.label} className="flex items-center gap-3">
                    <div className={`${x.cls} w-8 h-8 rounded-lg flex-shrink-0`} />
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{x.label}</p>
                      <p className="text-gray-500 text-xs">{x.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty Levels */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">🔥 Difficulty Levels</h2>
              <div className="space-y-3">
                {[
                  { emoji:"🌱", level:"Beginner", color:"bg-green-100 text-green-700",  desc:"3 free letters revealed", streak:"Streak 0+" },
                  { emoji:"🟢", level:"Easy",     color:"bg-teal-100 text-teal-700",    desc:"2 free letters revealed", streak:"Streak 4+" },
                  { emoji:"🟡", level:"Medium",   color:"bg-amber-100 text-amber-700",  desc:"1 free letter revealed",  streak:"Streak 8+" },
                  { emoji:"💀", level:"Expert",   color:"bg-red-100 text-red-700",      desc:"No letters revealed",     streak:"Streak 14+" },
                ].map(d => (
                  <div key={d.level} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span>{d.emoji}</span>
                      <div>
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${d.color}`}>{d.level}</span>
                        <p className="text-xs text-gray-500 mt-0.5">{d.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium">{d.streak}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4 italic">
                💡 Hint is always visible — use it to think, not just guess!
              </p>
            </div>

            {/* Word Stats */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">📚 Word Bank</h2>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[["🧮","Math","466"],["🔬","Science","643"],["📝","English","573"]].map(([e,l,n]) => (
                  <div key={l} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
                    <span className="text-xl">{e}</span>
                    <p className="font-bold text-gray-900 text-sm mt-1">{n}</p>
                    <p className="text-gray-500 text-xs">{l}</p>
                  </div>
                ))}
              </div>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 text-center">
                <p className="text-2xl font-bold text-teal-600">1,682</p>
                <p className="text-xs text-teal-600 font-semibold">Total Words (3–15 letters)</p>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
              <h2 className="font-bold text-indigo-900 text-base mb-3">💡 Tips</h2>
              <ul className="space-y-2 text-sm text-indigo-800">
                <li>⌨️ Type directly on desktop keyboard</li>
                <li>📱 Tap the board to open mobile keyboard</li>
                <li>🔵 Blue letters are free reveals — use them!</li>
                <li>🔥 Build your streak to unlock Expert mode</li>
                <li>📖 Learn word meaning after each game</li>
                <li>🔄 Switch categories anytime</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}