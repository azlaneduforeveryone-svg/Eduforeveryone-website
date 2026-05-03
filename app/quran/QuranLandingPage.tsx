import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Read Holy Quran Online — 4 Ways to Read | EduForEveryone",
  description: "Read the Holy Quran in 4 ways: Digital reader with 40+ translations, Colour coded Tajweed, 15-Line PDF and 13-Line Colour Tajweed PDF.",
  keywords: ["read quran online","quran tajweed","quran pdf","15 line quran","colour coded quran"],
  alternates: { canonical: "https://eduforeveryone.com/quran" },
};

const options = [
  {
    href: "/quran/read",
    emoji: "📖",
    title: "Read Quran",
    titleAr: "قراءة القرآن",
    description: "Complete Quran with 40+ translations in English, Urdu, Hindi and more. Includes audio recitation, bookmarks and dark mode.",
    tags: ["40+ Translations", "Audio Recitation", "All 114 Surahs", "Dark Mode"],
    color: "from-teal-600 to-teal-700",
    badge: "Most Popular",
    badgeColor: "bg-teal-100 text-teal-700",
    stats: [
      { label: "Surahs",       value: "114"  },
      { label: "Translations", value: "40+"  },
      { label: "Ayahs",        value: "6236" },
    ],
  },
  {
    href: "/quran/tajweed",
    emoji: "🎨",
    title: "Tajweed Quran",
    titleAr: "القرآن بالتجويد",
    description: "Colour coded Tajweed rules. Each rule highlighted in its correct colour. Click any word to learn the Tajweed rule applied.",
    tags: ["Colour Coded", "8 Tajweed Rules", "Word by Word", "Interactive"],
    color: "from-amber-500 to-orange-600",
    badge: "New",
    badgeColor: "bg-amber-100 text-amber-700",
    stats: [
      { label: "Rules",    value: "8+"  },
      { label: "Colours",  value: "8"   },
      { label: "Surahs",   value: "114" },
    ],
  },
  {
    href: "/quran/pdf/15line",
    emoji: "📄",
    title: "15 Line Quran",
    titleAr: "مصحف 15 سطر",
    description: "Traditional 15-line Uthmani script PDF. The most widely used Quran script in Pakistan and South Asia.",
    tags: ["15 Lines/Page", "Uthmani Script", "612 Pages", "PDF"],
    color: "from-slate-600 to-slate-700",
    badge: "PDF",
    badgeColor: "bg-slate-100 text-slate-700",
    stats: [
      { label: "Pages",  value: "612" },
      { label: "Lines",  value: "15"  },
      { label: "Format", value: "PDF" },
    ],
  },
  {
    href: "/quran/pdf/13line",
    emoji: "🌈",
    title: "Colour Tajweed PDF",
    titleAr: "مصحف التجويد الملون",
    description: "Beautiful 13-line colour coded Tajweed PDF. Each Tajweed rule shown in its colour for easy learning while reading.",
    tags: ["Colour Coded", "13 Lines/Page", "Tajweed Rules", "PDF"],
    color: "from-purple-600 to-purple-700",
    badge: "Tajweed",
    badgeColor: "bg-purple-100 text-purple-700",
    stats: [
      { label: "Pages",   value: "851" },
      { label: "Lines",   value: "13"  },
      { label: "Colours", value: "8"   },
    ],
  },
];

export default function QuranLandingPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-teal-600 font-semibold text-sm uppercase tracking-wider mb-2">☪ Islamic Studies</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-2">The Holy Quran</h1>
        <p className="text-3xl text-gray-500 mb-4" style={{ fontFamily: "'Amiri', serif" }}>القرآن الكريم</p>
        <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Choose how you want to read the Holy Quran. Four different reading experiences — all free, all ad-free.
        </p>
      </div>

      {/* 4 Options Grid */}
      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        {options.map(opt => (
          <Link key={opt.href} href={opt.href}
            className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
            {/* Gradient header */}
            <div className={`bg-gradient-to-r ${opt.color} text-white p-6`}>
              <div className="flex items-start justify-between mb-3">
                <span className="text-5xl">{opt.emoji}</span>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${opt.badgeColor}`}>
                  {opt.badge}
                </span>
              </div>
              <h2 className="text-2xl font-black mb-0.5">{opt.title}</h2>
              <p className="text-white/70 text-lg" style={{ fontFamily: "'Amiri', serif" }}>
                {opt.titleAr}
              </p>
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{opt.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                {opt.stats.map(s => (
                  <div key={s.label} className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
                    <p className="text-lg font-bold text-gray-900">{s.value}</p>
                    <p className="text-xs text-gray-500">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {opt.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-gray-100 text-gray-500 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-teal-600 text-sm font-bold group-hover:translate-x-1 transition-transform inline-block">
                Open →
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* No Ads notice */}
      <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5 text-center">
        <p className="text-teal-700 font-semibold text-sm">
          🕌 All Quran content is completely <strong>ad-free</strong> and will remain free forever. اللهم تقبل منا.
        </p>
      </div>
    </div>
  );
}
