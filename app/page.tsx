import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd, { faqLd } from "@/components/JsonLd";
import HomeHero from "@/components/HomeHero";

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
  twitter: { card: "summary_large_image", title: "EduForEveryone — Free IELTS, GMAT & Quran Study", description: "Free IELTS and GMAT Focus practice, Quran with 40+ translations, calculators, quizzes and games." },
};

/* ------------------------------------------------------------------ icons */
/* NOTE: duplicated from HomeHero.tsx. Extract to components/Icon.tsx later. */

type IconName = "arrow" | "calc" | "chart" | "type" | "flask" | "quiz";

function Icon({ name, className = "h-5 w-5" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>),
    calc: (
      <>
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M8 6h8" />
        <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
        <path d="M16 14v4" />
      </>
    ),
    chart: (<><path d="M3 3v18h18" /><path d="M8 17v-5" /><path d="M13 17V8" /><path d="M18 17v-9" /></>),
    type: (<><path d="M4 7V4h16v3" /><path d="M9 20h6" /><path d="M12 4v16" /></>),
    flask: (
      <>
        <path d="M9 3h6" />
        <path d="M10 3v6L4.6 17.6A2 2 0 0 0 6.3 21h11.4a2 2 0 0 0 1.7-3.4L14 9V3" />
        <path d="M7.5 14h9" />
      </>
    ),
    quiz: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.6 9.5a2.5 2.5 0 0 1 4.7 1c0 1.7-2.3 2-2.3 3.5" />
        <path d="M12 17h.01" />
      </>
    ),
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function SectionHead({
  eyebrow, title, desc, href, hrefLabel = "View all", dark = false,
}: {
  eyebrow: string; title: string; desc?: string; href?: string; hrefLabel?: string; dark?: boolean;
}) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className={`text-xs font-semibold uppercase tracking-wider ${dark ? "text-brand-300" : "text-brand-700"}`}>{eyebrow}</p>
        <h2 className={`mt-1 font-display text-2xl font-semibold ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
        {desc && <p className={`mt-1 text-sm ${dark ? "text-slate-400" : "text-ink-muted"}`}>{desc}</p>}
      </div>
      {href && (
        <Link href={href} className={`shrink-0 text-sm font-medium ${dark ? "text-brand-300 hover:text-brand-200" : "text-brand-700 hover:text-brand-800"}`}>
          {hrefLabel} →
        </Link>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------- data */

const tools = [
  { icon: "calc",  name: "Simple Calculator",     href: "/tools/simple-calculator",     tag: "Free" },
  { icon: "flask", name: "Scientific Calculator", href: "/tools/scientific-calculator", tag: "Intermediate" },
  { icon: "chart", name: "Financial Calculator",  href: "/tools/cfa-calculator",        tag: "TVM·NPV·IRR" },
  { icon: "type",  name: "Number to Words",       href: "/tools/number-to-words",       tag: "8 Languages" },
] as const;

const games = [
  { href: "/games/math-puzzle", icon: "calc", title: "Math Puzzle", desc: "Solve arithmetic, algebra and sequences against the clock across four difficulty levels.", tags: ["Addition", "Algebra", "Sequences"], badge: "Popular" },
  { href: "/games/word-puzzle", icon: "type", title: "WordWise",    desc: "Guess hidden education words in six tries — difficulty rises with your streak.",            tags: ["Vocabulary", "Spelling", "Wordle"], badge: "1682 words" },
  { href: "/games/quiz-battle", icon: "quiz", title: "Quiz Battle", desc: "Ten questions across every subject, with three lives, powerups and streak bonuses.",         tags: ["All subjects", "Trivia", "Powerups"], badge: "New" },
] as const;

const faqs = [
  { q: "Is the IELTS practice really free?", a: "Yes. All Reading, Writing, Listening and Speaking practice is free with no sign-up. AI writing feedback is also free." },
  { q: "Can I read the Quran with Urdu translation?", a: "Yes — the Quran reader includes 40+ translations including English, Urdu and Hindi, with audio recitation and a color-coded Tajweed mode." },
  { q: "Is the GMAT practice really free?", a: "Yes. Every GMAT Focus Edition section — Quantitative Reasoning, Verbal Reasoning and Data Insights — plus the full timed mock test is free with no sign-up. Scores shown are estimates, not official GMAT scores." },
  { q: "Is EduForEveryone really free?", a: "Yes — 100% free forever. No subscriptions, no hidden fees, no sign-up required. Every practice test, quiz, calculator and game on this website is completely free." },
  { q: "Who is EduForEveryone for?", a: "Everyone — from students preparing for IELTS or the GMAT to anyone reading the Quran or brushing up with our quizzes and tools. Our content is designed to be accessible at every level of learning." },
  { q: "What can I study here?", a: "Our main areas are IELTS preparation, GMAT Focus Edition practice, and a full Quran reader with translations and Tajweed. We also offer free calculators, quizzes and learning games." },
  { q: "What games are available?", a: "We have three free games — Math Puzzle (arithmetic and algebra challenges), WordWise (guess hidden education words), and Quiz Battle (answer questions across all subjects with lives and powerups). All completely free!" },
  { q: "Can I use the calculators for free?", a: "Yes! Our scientific calculator, financial calculator (TVM, NPV, IRR, Bond Pricing), simple calculator and number to words converter are all completely free to use." },
  { q: "Do I need to create an account?", a: "No account needed. Just visit the website and start learning immediately." },
  { q: "Will more content be added?", a: "Yes! We are constantly adding new practice tests, quizzes, tools and games. More languages and subjects are coming soon." },
];

/* -------------------------------------------------------------------- page */

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "EduForEveryone",
        url: "https://eduforeveryone.com",
        description: "Free education platform offering IELTS and GMAT Focus practice tests, a full Quran reader with translations and Tajweed, plus calculators, quizzes and games for students worldwide.",
        logo: "https://eduforeveryone.com/Main_Logo.jpg",
        sameAs: ["https://github.com/azlaneduforeveryone-svg/Eduforeveryone-website"],
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      })}} />

      <JsonLd data={faqLd(faqs)} />

      {/* Hero + IELTS / GMAT / Quran featured paths + quick links */}
      <HomeHero />

      {/* ── Tools ── */}
      <section className="bg-slate-50 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <SectionHead eyebrow="Free tools" title="Calculators & tools" href="/tools" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {tools.map((t) => (
              <Link key={t.href} href={t.href}
                className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-5 text-center transition-colors hover:border-brand-300">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-3 text-sm font-semibold leading-tight text-ink group-hover:text-brand-700">{t.name}</h3>
                <span className="mt-1.5 rounded-full bg-slate-100 px-2 py-0.5 text-xs text-ink-muted">{t.tag}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Games (single dark section for rhythm) ── */}
      <section className="bg-slate-900 px-4 py-14">
        <div className="mx-auto max-w-5xl">
          <SectionHead dark eyebrow="Play & learn" title="Free educational games"
            desc="Learning that plays like a game." href="/games" />
          <div className="grid gap-5 sm:grid-cols-3">
            {games.map((g) => (
              <div key={g.href} className="flex flex-col rounded-2xl border border-white/10 bg-slate-800 p-6">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
                    <Icon name={g.icon} className="h-5 w-5" />
                  </span>
                  <span className="rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-medium text-brand-300">{g.badge}</span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">{g.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{g.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {g.tags.map((tag) => (
                    <span key={tag} className="rounded-md bg-slate-700 px-2 py-0.5 text-xs text-slate-300">{tag}</span>
                  ))}
                </div>
                <Link href={g.href}
                  className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-500">
                  Play now <Icon name="arrow" className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-slate-50 px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">FAQ</p>
            <h2 className="mt-1 font-display text-3xl font-semibold text-ink">Frequently asked questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5">
                <h3 className="font-semibold text-ink">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-brand-700 px-4 py-16 text-center text-white">
        <h2 className="font-display text-3xl font-semibold">Start learning today</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-100">
          Everything is free. No sign-up. No credit card. Start learning in one click.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/ielts" className="rounded-xl bg-white px-8 py-3 font-semibold text-brand-700 transition-colors hover:bg-brand-50">Start IELTS practice</Link>
          <Link href="/quran" className="rounded-xl border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10">Read the Quran</Link>
          <Link href="/tools" className="rounded-xl border border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10">Explore free tools</Link>
        </div>
      </section>
    </>
  );
}