import ShareScore from "@/components/ShareScore";
import type { Metadata } from "next";
import { isQuranWordsLive } from "@/lib/games/quran-words";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Islamic Studies — Quran, Islamic Quiz in 3 Languages",
  description: "Free Islamic Studies: read the Quran with 40+ translations, Islamic Quiz in English, Urdu & Hindi across 7 categories. Ad-free forever.",
  alternates: { canonical: "https://eduforeveryone.com/islamic-studies" },
};

const resources = [
  {
    href: "/quran",
    image: null, emoji: "📖",
    title: "The Holy Quran", titleAr: "القرآن الكريم",
    description: "Read the complete Holy Quran with 40+ translations in English, Urdu, Hindi and many more. Includes audio recitation, bookmarks and dark mode.",
    tags: ["114 Surahs","40+ Translations","Audio Recitation","Dark Mode"],
    badge: "Free", badgeColor: "bg-efe-accent-soft text-efe-accent-ink",
    stats: [{label:"Surahs",value:"114"},{label:"Ayahs",value:"6,236"},{label:"Translations",value:"40+"}],
  },
  {
    href: "/duas",
    image: null, emoji: "🤲",
    title: "Duas & Azkar", titleAr: "الأدعية والأذكار",
    description: "Rabbana Duas, Morning & Evening Azkar with audio recitations, 8 language translations, digital Tasbeeh counter, and memorization helper.",
    tags: ["Rabbana Duas","Audio Recitation","8 Languages","Tasbeeh Counter"],
    badge: "New", badgeColor: "bg-efe-gold-soft text-efe-gold",
    stats: [{label:"Languages",value:"8"},{label:"Reciters",value:"3+"},{label:"Audio",value:"Quranic"}],
  },
  {
    href: "/quiz/islamic-quiz",
    image: "/Islamic_Quiz_Logo.jpeg", emoji: null,
    title: "Islamic Quiz", titleAr: "الاختبار الإسلامي",
    description: "Test your Islamic knowledge across 7 categories in English, Urdu and Hindi. Quran, Hadith, Fiqh, Seerah, History, Pillars of Islam and 99 Names of Allah.",
    tags: ["7 Categories","4 Difficulty Levels","3 Languages"],
    badge: "Popular", badgeColor: "bg-efe-accent-soft text-efe-accent-ink",
    stats: [{label:"Categories",value:"7"},{label:"Languages",value:"3"},{label:"Levels",value:"4"}],
  },
];

const quranWordsResource = {
  href: "/islamic-studies/quran-words",
  image: null, emoji: "📖",
  title: "Quran Word Meanings", titleAr: "معاني كلمات القرآن",
  description: "Learn high-frequency words from the Holy Quran, their English meanings, and original Surah and Ayah references.",
  tags: ["Vocabulary","Surah References","Word Meanings"],
  badge: "New", badgeColor: "bg-efe-gold-soft text-efe-gold",
  stats: [{label:"Words",value:"30+"},{label:"Ad-Free",value:"100%"},{label:"References",value:"Quranic"}],
};

const comingSoon = [
  { emoji:"📜", title:"Hadith",          titleAr:"الحديث الشريف",   desc:"Browse authentic Hadith collections — Bukhari, Muslim, Tirmidhi and more." },
  { emoji:"🌙", title:"Sirat-un-Nabwi",  titleAr:"السيرة النبوية",  desc:"Complete life story of Prophet Muhammad ﷺ in detail." },
  { emoji:"📚", title:"Islamic Books",   titleAr:"الكتب الإسلامية", desc:"Free Islamic books and reading materials for all students." },
];

export default function IslamicStudiesPage() {
  const displayedResources = [
    ...resources,
    ...(isQuranWordsLive() ? [quranWordsResource] : []),
  ];

  return (
    <div className="efe-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context":"https://schema.org","@type":"WebPage",
        name:"Islamic Studies",url:"https://eduforeveryone.com/islamic-studies",
        description:"Free Islamic Studies — Quran, Islamic Quiz and more.",
        isPartOf:{"@type":"WebSite",name:"EduForEveryone",url:"https://eduforeveryone.com"},
      })}} />

      <PageHeader
        eyebrow="☪ Islamic Studies"
        title="Islamic Studies"
        arabicTitle="الدراسات الإسلامية"
        description="Free, high-quality Islamic educational resources for every Muslim. Read the Quran, test your knowledge — in your own language."
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Main Resources */}
        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mb-14">
          {displayedResources.map(r => (
            <Card key={r.href} href={r.href} className="p-6 sm:p-7 justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  {r.image ? (
                    <img src={r.image} alt={r.title} className="w-14 h-14 object-contain rounded-[14px] border border-efe-line" />
                  ) : (
                    <span className="w-14 h-14 rounded-[14px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-3xl group-hover:bg-efe-accent group-hover:text-white transition-colors">
                      {r.emoji}
                    </span>
                  )}
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${r.badgeColor}`}>{r.badge}</span>
                </div>
                <h2 className="text-xl font-bold text-efe-fg group-hover:text-efe-accent transition-colors mb-0.5 tracking-wide">{r.title}</h2>
                <p className="text-efe-muted text-lg mb-3 tracking-wide" style={{ fontFamily:"'Amiri',serif" }}>{r.titleAr}</p>
                <p className="text-efe-muted text-sm leading-relaxed mb-5">{r.description}</p>
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {r.stats.map(s => (
                    <div key={s.label} className="bg-efe-bg rounded-xl p-3 text-center border border-efe-line">
                      <p className="text-lg font-bold text-efe-accent-ink">{s.value}</p>
                      <p className="text-xs text-efe-muted">{s.label}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {r.tags.map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-efe-bg text-efe-muted font-medium rounded-full border border-efe-line">{tag}</span>
                  ))}
                </div>
              </div>
              <p className="text-efe-accent-ink group-hover:text-efe-accent text-sm font-semibold mt-5 group-hover:translate-x-1 transition-transform inline-block">Open →</p>
            </Card>
          ))}
        </div>

        {/* Coming Soon */}
        <div className="mb-10">
          <SectionHeader
            title="Coming Soon"
            badge={<span className="text-xs bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full font-semibold">In Development</span>}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {comingSoon.map(c => (
              <div key={c.title} className="bg-efe-surface/70 border border-dashed border-efe-line rounded-2xl p-5 opacity-80">
                <span className="text-4xl">{c.emoji}</span>
                <h3 className="font-bold text-efe-fg mt-3 mb-0.5">{c.title}</h3>
                <p className="text-efe-muted text-sm mb-2" style={{ fontFamily:"'Amiri',serif" }}>{c.titleAr}</p>
                <p className="text-efe-muted text-xs leading-relaxed">{c.desc}</p>
                <span className="inline-block mt-3 text-xs bg-efe-bg text-efe-muted px-2.5 py-1 rounded-full font-semibold border border-efe-line">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>

        {/* No Ads */}
        <div className="bg-efe-accent-soft border border-efe-line rounded-2xl p-5 text-center">
          <p className="text-efe-accent-ink font-semibold text-sm">
            🕌 All Islamic Studies content is completely <strong>ad-free</strong> and will remain free forever.
          </p>
        </div>
      </div>
    </div>
  );
}
