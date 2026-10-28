import type { Metadata } from "next";
import { isQuranWordsLive } from "@/lib/games/quran-words";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Free Educational Games for Students | EduForEveryone",
  description: "Free educational games — Math Puzzle, WordWise, Quiz Battle, Word Upgrade, and Phrase Upgrade. Learn while having fun. No sign-up required.",
  alternates: { canonical: "https://eduforeveryone.com/games" },
};

const baseGames = [
  { href:"/games/math-puzzle", emoji:"🧮", title:"Math Puzzle", description:"Solve arithmetic, algebra and sequences against the clock. 4 difficulty levels.", tags:["Math","Arithmetic","Algebra"], badge:"Popular" },
  { href:"/games/word-puzzle", emoji:"🔤", title:"WordWise", description:"Guess the hidden education word in 6 tries. Math, Science and English words!", tags:["English","Vocabulary","Wordle"], badge:"New" },
  { href:"/games/quiz-battle", emoji:"🧠", title:"Quiz Battle", description:"10 questions, 3 lives, powerups and streak bonuses across 4 subjects.", tags:["All Subjects","Trivia","Quiz"], badge:"New" },
  { href:"/ielts/word-upgrade", emoji:"⚡", title:"Word Upgrade", description:"Upgrade basic vocabulary to natural Band 7+ IELTS Lexical Resource words across 120 academic contexts.", tags:["IELTS","Vocabulary","English"], badge:"New" },
  { href:"/ielts/phrase-upgrade", emoji:"🎯", title:"Phrase Upgrade", description:"Avoid memorised clichés and master natural IELTS phrases for Writing Task 1, Task 2, and Speaking.", tags:["IELTS","Fluency","Cohesion"], badge:"New" },
];

const quranWordsGameCard = {
  href: "/islamic-studies/quran-words",
  emoji: "📖",
  title: "Quran Word Meanings",
  description: "Learn high-frequency words from the Holy Quran with authentic Surah and Ayah references.",
  tags: ["Quran","Arabic","Islamic Studies"],
  badge: "New",
};

export default function GamesPage() {
  const displayedGames = [
    ...baseGames,
    ...(isQuranWordsLive() ? [quranWordsGameCard] : []),
  ];

  return (
    <div className="efe-page">
      <PageHeader
        eyebrow="🎮 Games"
        title="Educational Games"
        description="Learn while having fun. Free games that make studying addictive. No sign-up. No cost."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGames.map(game => (
            <Card key={game.href} href={game.href} className="p-6 justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="w-12 h-12 rounded-[14px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl group-hover:bg-efe-accent group-hover:text-white transition-colors">
                    {game.emoji}
                  </span>
                  {game.badge && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      game.badge === "New" ? "bg-efe-gold-soft text-efe-gold" : "bg-efe-accent-soft text-efe-accent-ink"
                    }`}>
                      {game.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-efe-fg mb-2 group-hover:text-efe-accent transition-colors">{game.title}</h2>
                <p className="text-efe-muted text-sm leading-relaxed mb-4">{game.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {game.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-efe-bg text-efe-muted rounded-md border border-efe-line">{tag}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
