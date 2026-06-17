import Link from "next/link";
import type { ReactNode } from "react";

/* EduForEveryone — hero + featured paths. Server component, no client JS,
   zero dependencies, no load-time animation (CSS :hover only). */

type IconName =
  | "book" | "cap" | "moon" | "calc" | "game"
  | "pen" | "headphones" | "mic" | "layers" | "arrow";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const paths: Record<IconName, ReactNode> = {
    book: (
      <>
        <path d="M12 7v14" />
        <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
      </>
    ),
    cap: (
      <>
        <path d="M21.4 10.9a1 1 0 0 0 0-1.8L12.8 5.2a2 2 0 0 0-1.6 0L2.6 9.1a1 1 0 0 0 0 1.8l8.6 3.9a2 2 0 0 0 1.6 0z" />
        <path d="M22 10v6" />
        <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
      </>
    ),
    moon: (
      <>
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        <path d="M19 3v3" />
        <path d="M20.5 4.5h-3" />
      </>
    ),
    calc: (
      <>
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M8 6h8" />
        <path d="M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M8 18h.01M12 18h.01" />
        <path d="M16 14v4" />
      </>
    ),
    game: (
      <>
        <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
        <path d="M17.3 5H6.7a4 4 0 0 0-4 3.6C2.6 9.4 2 14.5 2 16a3 3 0 0 0 5 2l1.4-1.4a2 2 0 0 1 1.4-.6h4.4a2 2 0 0 1 1.4.6L17 18a3 3 0 0 0 5-2c0-1.5-.6-6.6-.7-7.4A4 4 0 0 0 17.3 5z" />
      </>
    ),
    pen: (<><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></>),
    headphones: (
      <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
    ),
    mic: (
      <>
        <rect x="9" y="2" width="6" height="11" rx="3" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <path d="M12 19v3" />
      </>
    ),
    layers: (<><path d="m12 2 9 5-9 5-9-5 9-5z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></>),
    arrow: (<><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></>),
  };
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col">
      <span className="font-display text-2xl font-semibold text-ink">{value}</span>
      <span className="text-xs font-medium uppercase tracking-wider text-ink-muted">{label}</span>
    </div>
  );
}

type LinkItem = { icon: IconName; href: string; label: string };

function PrimaryCard({
  icon, eyebrow, title, href, desc, links, cols = 1,
}: {
  icon: IconName; eyebrow: string; title: string; href: string;
  desc: string; links: LinkItem[]; cols?: 1 | 2;
}) {
  return (
    <div className="flex flex-col rounded-2xl bg-brand-800 p-6 text-brand-50">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-700/60 text-white">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-brand-300">{eyebrow}</p>
      <Link href={href} className="mt-1 font-display text-2xl font-semibold text-white hover:text-brand-100">
        {title}
      </Link>
      <p className="mt-2 text-sm leading-relaxed text-brand-100">{desc}</p>
      <div className={`mt-4 grid ${cols === 2 ? "grid-cols-2" : "grid-cols-1"} gap-1 border-t border-brand-700/60 pt-3`}>
        {links.map((l) => (
          <Link key={l.href + l.label} href={l.href}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-brand-100 transition-colors hover:bg-brand-700/50 hover:text-white">
            <Icon name={l.icon} className="h-4 w-4 text-brand-300" />
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function SecondaryCard({
  icon, href, title, desc,
}: { icon: IconName; href: string; title: string; desc: string }) {
  return (
    <Link href={href}
      className="group flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-brand-300">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-brand-700">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0">
        <span className="flex items-center gap-1 font-medium text-ink">
          {title}
          <Icon name="arrow" className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-brand-600" />
        </span>
        <span className="mt-0.5 block text-sm text-ink-muted">{desc}</span>
      </span>
    </Link>
  );
}

export default function HomeHero() {
  return (
    <div className="bg-white font-body text-ink">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">

        {/* ---- HERO ---- */}
        <section className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            Free forever · No sign-up
          </span>

          <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl">
            Practice IELTS &amp; GMAT, and read the Quran —{" "}
            <span className="text-brand-700">without paying a cent.</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Real exam-style practice for every skill, with instant scoring and AI
            feedback. Plus the Holy Quran in 40+ translations. No paywall, no account.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/ielts"
              className="inline-flex items-center gap-2 rounded-lg bg-brand-700 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800">
              Start IELTS practice
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link href="/quran"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-ink-soft transition-colors hover:border-brand-400 hover:text-brand-700">
              Read the Quran
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-10 gap-y-5 border-t border-slate-100 pt-7">
            <Stat value="95+" label="Reading passages" />
            <Stat value="560" label="Listening questions" />
            <Stat value="40+" label="Quran translations" />
            <Stat value="$0" label="Cost, always" />
          </div>
        </section>

        {/* ---- PRIMARY PATHS (all three unified) ---- */}
        <section className="mt-16">
          <div className="grid gap-5 lg:grid-cols-3">
            <PrimaryCard
              icon="book" eyebrow="Exam prep" title="IELTS" href="/ielts" cols={2}
              desc="All four skills with real exam-style tests and AI writing feedback."
              links={[
                { icon: "book", href: "/ielts/reading", label: "Reading" },
                { icon: "headphones", href: "/ielts/listening", label: "Listening" },
                { icon: "pen", href: "/ielts/writing", label: "Writing" },
                { icon: "mic", href: "/ielts/speaking", label: "Speaking" },
              ]}
            />
            <PrimaryCard
              icon="cap" eyebrow="Exam prep" title="GMAT Focus" href="/gmat"
              desc="Timed Quant, Verbal and Data Insights sections, plus a full mock."
              links={[
                { icon: "layers", href: "/gmat/quant", label: "Quant · Problem Solving" },
                { icon: "book", href: "/gmat/verbal", label: "Verbal · CR & RC" },
                { icon: "calc", href: "/gmat/data-insights", label: "Data Insights · DS · MSR" },
              ]}
            />
            <PrimaryCard
              icon="moon" eyebrow="Islamic studies" title="The Holy Quran" href="/quran"
              desc="40+ translations, color-coded Tajweed and audio recitation. Always ad-free."
              links={[
                { icon: "book", href: "/quran/read", label: "Digital reader · 40+ translations" },
                { icon: "pen", href: "/quran/tajweed", label: "Tajweed · color-coded rules" },
                { icon: "layers", href: "/quran/pdf/15line", label: "15-line & 13-line PDF" },
              ]}
            />
          </div>
        </section>

        {/* ---- SECONDARY STRIP (tools + games) ---- */}
        <section className="mt-12">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-ink-muted">Also free</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <SecondaryCard icon="calc" href="/tools" title="Calculators & tools" desc="Scientific, financial (TVM·NPV·IRR), number-to-words" />
            <SecondaryCard icon="game" href="/games" title="Educational games" desc="Math Puzzle, WordWise, Quiz Battle" />
          </div>
        </section>

      </div>
    </div>
  );
}