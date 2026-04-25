import type { Metadata } from "next";
import WordWiseGame from "./WordWiseGame";

export const metadata: Metadata = {
  title: "WordWise — Free Word Puzzle Game for Students | EduForEveryone",
  description: "Free educational word puzzle game. Guess hidden words from Math, Science and English. Wordle-style gameplay with hints, streaks and scoring. Fun for all students!",
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
        description:"Free educational word puzzle game for students.",
        applicationCategory:"EducationalApplication",operatingSystem:"Any",
        offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},
        provider:{"@type":"Organization",name:"EduForEveryone",url:"https://eduforeveryone.com"},
      })}} />
      <div className="max-w-sm mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <a href="/games" className="hover:text-gray-600">Games</a><span>/</span>
          <span className="text-gray-700 font-medium">WordWise</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🔤</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">WordWise</h1>
            <p className="text-gray-500 text-sm">Guess the hidden education word in 6 tries</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <WordWiseGame />
        </div>
        <div className="mt-6 bg-gray-50 rounded-2xl p-4 border border-gray-100 space-y-2">
          <h2 className="font-bold text-gray-900 text-sm mb-3">How to Play</h2>
          {[
            ["🟩","Green = correct letter in correct position"],
            ["🟨","Yellow = correct letter in wrong position"],
            ["⬛","Gray = letter not in the word"],
            ["💡","Use Hint if you're stuck (costs 5 pts)"],
          ].map(([e,t])=>(
            <div key={t} className="flex items-center gap-3 text-sm">
              <span className="text-lg">{e}</span><span className="text-gray-600">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}