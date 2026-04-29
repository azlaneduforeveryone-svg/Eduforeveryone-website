import ShareScore from "@/components/ShareScore";
import type { Metadata } from "next";
import IslamicQuizGame from "./IslamicQuizGame";

export const metadata: Metadata = {
  title: "Islamic Quiz in English, Urdu & Hindi | EduForEveryone",
  description: "Free Islamic quiz in English, Urdu and Hindi. 7 categories: Quran, Hadith, Fiqh, Seerah, Islamic History, Pillars of Islam and 99 Names of Allah. 4 difficulty levels.",
  keywords: ["islamic quiz","islamic quiz in urdu","islamic quiz in hindi","quran quiz","hadith quiz","pillars of islam quiz","99 names quiz","islamic general knowledge","islamic mcqs"],
  alternates: { canonical: "https://eduforeveryone.com/games/islamic-quiz" },
  openGraph: {
    title: "Islamic Quiz — English, Urdu & Hindi | EduForEveryone",
    description: "Test your Islamic knowledge in 3 languages. Quran, Hadith, Seerah and more!",
    url: "https://eduforeveryone.com/games/islamic-quiz",
    siteName: "EduForEveryone", type: "website",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebApplication",
        name:"Islamic Quiz",url:"https://eduforeveryone.com/games/islamic-quiz",
        description:"Free Islamic quiz in English, Urdu and Hindi with 7 categories.",
        applicationCategory:"EducationalApplication",operatingSystem:"Any",
        offers:{"@type":"Offer",price:"0",priceCurrency:"USD"},
        provider:{"@type":"Organization",name:"EduForEveryone",url:"https://eduforeveryone.com"},
        inLanguage:["en","ur","hi"],
      })}} />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <a href="/quiz" className="hover:text-gray-600 transition-colors">Quiz</a>
          <span>/</span>
          <span className="text-gray-700 font-medium">Islamic Quiz</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Game ── */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-4xl">☪️</span>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Islamic Quiz</h1>
                <p className="text-gray-500 text-sm">English · اردو · हिन्दी — 7 categories · 4 levels</p>
              </div>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <IslamicQuizGame />
            </div>
          </div>

          {/* ── Info Panel ── */}
          <div className="space-y-5">

            {/* Categories */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">📚 Categories</h2>
              <div className="space-y-2.5">
                {[
                  { emoji:"📖", cat:"Quran & Tafseer",    desc:"Surahs, Ayahs, structure of Quran" },
                  { emoji:"📜", cat:"Hadith",             desc:"Authentic narrations of the Prophet" },
                  { emoji:"⚖️", cat:"Fiqh",              desc:"Islamic jurisprudence and rulings" },
                  { emoji:"🌙", cat:"Seerah",             desc:"Life of Prophet Muhammad (SAW)" },
                  { emoji:"🏛️", cat:"Islamic History",   desc:"Caliphates, battles, empires" },
                  { emoji:"🕌", cat:"Pillars of Islam",   desc:"Shahada, Salah, Sawm, Zakat, Hajj" },
                  { emoji:"✨", cat:"99 Names of Allah",  desc:"Al-Asma ul-Husna — meanings" },
                ].map(item => (
                  <div key={item.cat} className="flex gap-3">
                    <span className="text-lg">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.cat}</p>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Difficulty */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-4">🎯 Difficulty Levels</h2>
              <div className="space-y-3">
                {[
                  { emoji:"🟢", d:"Easy",   time:"25s", pts:"10 pts", desc:"Basic Islamic knowledge" },
                  { emoji:"🟡", d:"Medium", time:"18s", pts:"20 pts", desc:"Intermediate level" },
                  { emoji:"🔴", d:"Hard",   time:"12s", pts:"30 pts", desc:"Advanced knowledge" },
                  { emoji:"💀", d:"Expert", time:"8s",  pts:"50 pts", desc:"Scholar level" },
                ].map(d => (
                  <div key={d.d} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="text-xl">{d.emoji}</span>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-bold text-gray-900 text-sm">{d.d}</p>
                        <span className="text-xs text-gray-400 font-mono">{d.time}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{d.desc}</p>
                      <p className="text-teal-600 text-xs font-semibold">{d.pts}/question</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
              <h2 className="font-bold text-teal-900 text-base mb-3">🌐 3 Languages</h2>
              <div className="space-y-2">
                {[
                  ["🇬🇧","English","Full questions and answers in English"],
                  ["🇵🇰","اردو (Urdu)","مکمل سوالات اردو میں"],
                  ["🇮🇳","हिन्दी (Hindi)","पूरे सवाल हिंदी में"],
                ].map(([f,l,d]) => (
                  <div key={l} className="flex gap-2 items-start">
                    <span>{f}</span>
                    <div>
                      <p className="font-bold text-teal-800 text-sm">{l}</p>
                      <p className="text-teal-600 text-xs">{d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scoring */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h2 className="font-bold text-gray-900 text-base mb-3">⭐ Scoring</h2>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>✅ <strong>Base points</strong> — based on difficulty</li>
                <li>⚡ <strong>Speed bonus</strong> — faster = more points</li>
                <li>🔥 <strong>Streak bonus</strong> — consecutive correct answers</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}