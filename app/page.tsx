import type { Metadata } from "next";
import Link from "next/link";
import "./home.css";
import { HOME_SECTIONS } from "@/lib/homeSections";
import { HomeIcon } from "@/components/home/HomeIcons";
import HomeSwitcher from "@/components/home/HomeSwitcher";
import HomeSearch from "@/components/home/HomeSearch";
import HeroLogo from "@/components/home/HeroLogo";
import { SURAH_META } from "@/lib/quranSurahMeta";
import { PASSAGES } from "@/lib/ielts/readingData";
import { DUAS_DATABASE } from "@/lib/duasData";
import { QUANT_BANK } from "@/lib/gmat/quant";
import { VERBAL_BANK } from "@/lib/gmat/verbal";
import { DATA_INSIGHTS_BANK } from "@/lib/gmat/data-insights";

export const metadata: Metadata = {
  title: "Free IELTS & GMAT Practice, Quran Online — EduForEveryone",
  description: "Free IELTS practice for all 4 skills, GMAT Focus Edition practice and full mocks, Quran with 40+ translations, tools and quizzes. No fees, no sign-up, ever.",
  alternates: { canonical: "https://eduforeveryone.com" },
  openGraph: {
    title: "EduForEveryone — Free IELTS, GMAT & Quran Study",
    description: "IELTS and GMAT Focus practice, the Quran with 40+ translations, plus free tools, quizzes and games. 100% free. No barriers.",
    url: "https://eduforeveryone.com",
    siteName: "EduForEveryone",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduForEveryone — Free IELTS, GMAT & Quran Study",
    description: "Free IELTS and GMAT Focus practice, Quran with 40+ translations, calculators, quizzes and games.",
  },
};

export default function HomePage() {
  const surahCount = SURAH_META.length;
  const passageCount = PASSAGES.length;
  const duaCount = DUAS_DATABASE.length;
  const rawGmatCount = QUANT_BANK.items.length + VERBAL_BANK.items.length + DATA_INSIGHTS_BANK.items.length;
  const gmatDisplay = `${Math.floor(rawGmatCount / 100) * 100}+`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "EduForEveryone",
            url: "https://eduforeveryone.com",
            description: "Free education platform offering IELTS and GMAT Focus practice tests, a full Quran reader with translations and Tajweed, plus calculators, quizzes and games for students worldwide.",
            logo: "https://eduforeveryone.com/Main_Logo.jpg",
            sameAs: ["https://github.com/azlaneduforeveryone-svg/Eduforeveryone-website"],
            offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="home-hero home-gutter">
        <div className="home-hero-pattern" aria-hidden="true" />
        <div className="home-wrap home-hero-split">
          <div className="home-hero-inner">
            <div className="home-hero-eyebrow home-rise home-d1">EduForEveryone</div>
            <h1 className="home-rise home-d2">Learn something useful today.</h1>
            <p className="home-rise home-d3">IELTS, Islamic Studies, GMAT and finance tools in one place.</p>
            <HomeSearch />
            <div className="home-hero-stats home-rise home-d5">
              <span><b>{surahCount}</b> surahs</span>
              <span><b>{passageCount}</b> reading passages</span>
              <span><b>{duaCount}</b> authentic duas</span>
              <span><b>{gmatDisplay}</b> GMAT questions</span>
            </div>
          </div>
          <div className="home-rise home-d3">
            <HeroLogo />
          </div>
        </div>
      </section>

      {/* ── Sticky Switcher Chips ── */}
      <HomeSwitcher sections={HOME_SECTIONS} />

      {/* ── Main Sections ── */}
      <main className="home-main home-gutter">
        <div className="home-wrap">
          {HOME_SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="home-section" aria-labelledby={`${s.id}-title`}>
              <div className="home-section-grid">
                <div className="home-section-head home-reveal">
                  <div className="home-section-eyebrow">
                    {s.arabic && (
                      <span className="home-arabic-mark" lang="ar" dir="rtl">
                        {s.arabic}
                      </span>
                    )}
                    <span>{s.tiles.length} tools</span>
                  </div>
                  <h2 id={`${s.id}-title`}>{s.title}</h2>
                  <p>{s.description}</p>
                  {s.badge && <span className="home-badge-free">{s.badge}</span>}
                  <Link className="home-view-all" href={s.hub}>
                    View all <HomeIcon name="arrow-right" size={16} aria-hidden={true} />
                  </Link>
                </div>
                <div className="home-tiles">
                  {s.tiles.map((t) => (
                    <Link key={t.href} className="home-tile home-reveal" href={t.href}>
                      {t.isNew && <span className="home-tile-new">New</span>}
                      <span className="home-tile-icon">
                        <HomeIcon name={t.icon} size={22} strokeWidth={1.9} aria-hidden={true} />
                      </span>
                      <span className="home-tile-name">{t.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
    </>
  );
}