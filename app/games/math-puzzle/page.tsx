import type { Metadata } from "next";
import MathPuzzleGame from "./MathPuzzleGame";
import CalcNav from "@/components/CalcNav";

export const metadata: Metadata = {
  title: "Math Puzzle Game Free Online | EduForEveryone",
  description: "Free math puzzle game for students. Solve addition, subtraction, multiplication, division, algebra and sequence challenges. Beat the clock and build your streak!",
  keywords: ["math puzzle game", "math game for students", "free math game", "arithmetic puzzle", "algebra game", "math challenge online", "educational math game"],
  alternates: { canonical: "https://eduforeveryone.com/games/math-puzzle" },
  openGraph: {
    title: "Math Puzzle Game — Free Online | EduForEveryone",
    description: "Test your math skills! 4 difficulty levels, 10 question rounds, beat the clock.",
    url: "https://eduforeveryone.com/games/math-puzzle",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebApplication",
        name: "Math Puzzle Game",
        url: "https://eduforeveryone.com/games/math-puzzle",
        description: "Free math puzzle game with arithmetic, algebra and sequence challenges.",
        applicationCategory: "EducationalApplication",
        operatingSystem: "Any",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        provider: { "@type": "Organization", name: "EduForEveryone", url: "https://eduforeveryone.com" },
      })}} />
      <div className="max-w-sm mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <a href="/games" className="hover:text-gray-600">Games</a><span>/</span>
          <span className="text-gray-700 font-medium">Math Puzzle</span>
        </nav>
        <div className="flex items-center gap-3 mb-6">
          <span className="text-4xl">🧮</span>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Math Puzzle</h1>
            <p className="text-gray-500 text-sm">Beat the clock · Build your streak</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <MathPuzzleGame />
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3">
          {[
            { emoji:"🟢", title:"Easy", desc:"Addition & subtraction. 20 seconds per question." },
            { emoji:"🟡", title:"Medium", desc:"All operations including division. 15 seconds." },
            { emoji:"🔴", title:"Hard", desc:"Missing numbers & equations. 12 seconds." },
            { emoji:"💀", title:"Expert", desc:"Sequences, powers, algebra. Only 8 seconds!" },
          ].map(item => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-3 border border-gray-100">
              <span className="text-xl">{item.emoji}</span>
              <p className="font-bold text-gray-900 text-sm mt-1">{item.title}</p>
              <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}