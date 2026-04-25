import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Educational Games for Students | EduForEveryone",
  description: "Free educational games for students. Math puzzles, word games, quizzes and more. Learn while having fun — no sign-up required.",
  keywords: ["educational games", "math games for students", "free learning games", "math puzzle game", "educational puzzle games"],
  alternates: { canonical: "https://eduforeveryone.com/games" },
  openGraph: {
    title: "Free Educational Games | EduForEveryone",
    description: "Math puzzles, word games and more. Free for all students.",
    url: "https://eduforeveryone.com/games",
    siteName: "EduForEveryone",
    type: "website",
  },
};

const games = [
  {
    href: "/games/math-puzzle",
    emoji: "🧮",
    title: "Math Puzzle",
    description: "Solve arithmetic, algebra and sequence challenges against the clock. 4 difficulty levels.",
    tags: ["Mathematics", "Arithmetic", "Algebra"],
    badge: "New",
  },
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
              {game.badge && (
                <span className="text-xs font-bold bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full border border-teal-100">{game.badge}</span>
              )}
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{game.title}</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{game.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {game.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-0.5 bg-gray-50 text-gray-500 rounded-md border border-gray-100">{tag}</span>
              ))}
            </div>
          </Link>
        ))}
        {/* Coming Soon */}
        {[{ emoji:"🔤", title:"Word Puzzle", desc:"Guess the hidden word — Wordle style for students" },
          { emoji:"🧠", title:"Daily Quiz", desc:"5 questions every day across all subjects" }].map(g => (
          <div key={g.title} className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-6 opacity-60">
            <span className="text-5xl">{g.emoji}</span>
            <h2 className="text-lg font-bold text-gray-700 mt-4 mb-2">{g.title}</h2>
            <p className="text-gray-400 text-sm mb-3">{g.desc}</p>
            <span className="text-xs bg-gray-100 text-gray-500 px-3 py-1 rounded-full font-semibold">Coming Soon</span>
          </div>
        ))}
      </div>
    </div>
  );
}