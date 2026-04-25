import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Educational Games for Students | EduForEveryone",
  description: "Free educational games — Math Puzzle, WordWise word puzzle, and Quiz Battle. Learn while having fun. No sign-up required.",
  keywords: ["educational games","math puzzle game","word puzzle game","quiz game","free games for students","learning games"],
  alternates: { canonical: "https://eduforeveryone.com/games" },
};

const games = [
  { href:"/games/math-puzzle", emoji:"🧮", title:"Math Puzzle", description:"Solve arithmetic, algebra and sequences against the clock. 4 difficulty levels.", tags:["Math","Arithmetic","Algebra"], badge:"Popular" },
  { href:"/games/word-puzzle", emoji:"🔤", title:"WordWise", description:"Guess the hidden education word in 6 tries. Math, Science and English words!", tags:["English","Vocabulary","Wordle"], badge:"New" },
  { href:"/games/quiz-battle", emoji:"🧠", title:"Quiz Battle", description:"10 questions, 3 lives, powerups and streak bonuses across 4 subjects.", tags:["All Subjects","Trivia","Quiz"], badge:"New" },
];

export default function GamesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-1">🎮 Games</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Educational Games</h1>
        <p className="text-gray-500">Learn while having fun. Free games that make studying addictive. No sign-up. No cost.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map(game => (
          <Link key={game.href} href={game.href}
            className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-teal-200 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-4">
              <span className="text-5xl">{game.emoji}</span>
              {game.badge && <span className="text-xs font-bold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full border border-teal-100">{game.badge}</span>}
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{game.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{game.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {game.tags.map(tag=><span key={tag} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-md border border-gray-100">{tag}</span>)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}