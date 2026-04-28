import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Islamic Studies — Quran, Islamic Quiz | EduForEveryone",
  description: "Free Islamic Studies resources. Read the Holy Quran with 40+ translations, take Islamic Quiz in English, Urdu and Hindi.",
  keywords: ["islamic studies","quran online","islamic quiz","read quran","quran with translation","islamic education free"],
  alternates: { canonical: "https://eduforeveryone.com/islamic-studies" },
};

const resources = [
  {
    href: "/quran",
    image: null, emoji: "📖",
    title: "The Holy Quran", titleAr: "القرآن الكريم",
    description: "Read the complete Holy Quran with 40+ translations in English, Urdu, Hindi and many more. Includes audio recitation, bookmarks and dark mode.",
    tags: ["114 Surahs","40+ Translations","Audio Recitation","Dark Mode"],
    badge: "Free", badgeColor: "bg-teal-100 text-teal-700", color: "hover:border-teal-300",
    stats: [{label:"Surahs",value:"114"},{label:"Ayahs",value:"6,236"},{label:"Translations",value:"40+"}],
  },
  {
    href: "/quiz/islamic-quiz",
    image: "/Islamic_Quiz_Logo.jpeg", emoji: null,
    title: "Islamic Quiz", titleAr: "الاختبار الإسلامي",
    description: "Test your Islamic knowledge across 7 categories in English, Urdu and Hindi. Quran, Hadith, Fiqh, Seerah, History, Pillars of Islam and 99 Names of Allah.",
    tags: ["7 Categories","4 Difficulty Levels","3 Languages"],
    badge: "New", badgeColor: "bg-green-100 text-green-700", color: "hover:border-green-300",
    stats: [{label:"Categories",value:"7"},{label:"Languages",value:"3"},{label:"Levels",value:"4"}],
  },
];

const comingSoon = [
  { emoji:"📜", title:"Hadith",          titleAr:"الحديث الشريف",   desc:"Browse authentic Hadith collections — Bukhari, Muslim, Tirmidhi and more." },
  { emoji:"🌙", title:"Sirat-un-Nabwi",  titleAr:"السيرة النبوية",  desc:"Complete life story of Prophet Muhammad ﷺ in detail." },
  { emoji:"🤲", title:"Duas & Azkar",    titleAr:"الأدعية والأذكار", desc:"Daily duas, morning & evening azkar with translation and audio." },
  { emoji:"📚", title:"Islamic Books",   titleAr:"الكتب الإسلامية", desc:"Free Islamic books and reading materials for all students." },
];

export default function IslamicStudiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"Islamic Studies",url:"https://eduforeveryone.com/islamic-studies",
        description:"Free Islamic Studies — Quran, Islamic Quiz and more.",
        isPartOf:{"@type":"WebSite",name:"EduForEveryone",url:"https://eduforeveryone.com"},
      })}} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">☪ Islamic Studies</p>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Islamic Studies</h1>
          <p className="text-3xl text-gray-500 mb-4" style={{ fontFamily:"'Amiri',serif" }}>الدراسات الإسلامية</p>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Free, high-quality Islamic educational resources for every Muslim.
            Read the Quran, test your knowledge — in your own language.
          </p>
        </div>

        {/* Main Resources */}
        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {resources.map(r => (
            <Link key={r.href} href={r.href}
              className={`group bg-white border border-gray-200 ${r.color} rounded-2xl p-6 hover:shadow-lg transition-all`}>
              <div className="flex items-start justify-between mb-4">
                {r.image
                  ? <img src={r.image} alt={r.title} className="w-16 h-16 object-contain rounded-xl" />
                  : <span className="text-5xl">{r.emoji}</span>}
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${r.badgeColor}`}>{r.badge}</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-0.5">{r.title}</h2>
              <p className="text-gray-400 text-lg mb-3" style={{ fontFamily:"'Amiri',serif" }}>{r.titleAr}</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{r.description}</p>
              <div className="grid grid-cols-3 gap-2 mb-4">
                {r.stats.map(s => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
                    <p className="text-lg font-bold text-teal-600">{s.value}</p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {r.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">{tag}</span>
                ))}
              </div>
              <p className="text-teal-600 text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform inline-block">Open →</p>
            </Link>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-xl font-bold text-gray-900">Coming Soon</h2>
            <span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-semibold">In Development</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {comingSoon.map(c => (
              <div key={c.title} className="bg-gray-50 border border-dashed border-gray-200 rounded-2xl p-5 opacity-70">
                <span className="text-4xl">{c.emoji}</span>
                <h3 className="font-bold text-gray-700 mt-3 mb-0.5">{c.title}</h3>
                <p className="text-gray-400 text-sm mb-2" style={{ fontFamily:"'Amiri',serif" }}>{c.titleAr}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{c.desc}</p>
                <span className="inline-block mt-3 text-xs bg-gray-200 text-gray-500 px-2.5 py-1 rounded-full font-semibold">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* No Ads */}
        <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 text-center">
          <p className="text-teal-700 font-semibold text-sm">
            🕌 All Islamic Studies content is completely <strong>ad-free</strong> and will remain free forever.
          </p>
        </div>
      </div>
    </>
  );
}