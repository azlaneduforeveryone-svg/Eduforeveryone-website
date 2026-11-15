// Previous topic / All topics / Next topic bar for course topic pages.
// Shown at the top and the bottom of every topic page. Big tap targets
// (at least 52px tall) because most students use phones.

import Link from "next/link";

export interface TopicNavLink {
  href: string;
  /** Short code, e.g. "1.2" */
  code: string;
  title: string;
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2.2">
      {dir === "left" ? <path d="M12.5 4.5 7 10l5.5 5.5" /> : <path d="M7.5 4.5 13 10l-5.5 5.5" />}
    </svg>
  );
}

const base =
  "flex items-center gap-2 min-h-[52px] rounded-xl border px-3 py-2 text-efe-fg transition-colors hover:border-efe-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-efe-accent";
const cell = `${base} border-efe-line bg-white hover:bg-efe-accent-soft`;
const nextCell = `${base} border-efe-accent bg-efe-accent-soft hover:brightness-95`;

export default function TopicNav({
  position,
  hubHref,
  prev,
  next,
}: {
  position: "top" | "bottom";
  hubHref: string;
  prev: TopicNavLink | null;
  next: TopicNavLink | null;
}) {
  return (
    <nav aria-label={position === "top" ? "Topic navigation (top)" : "Topic navigation (bottom)"} className="grid grid-cols-3 gap-2 sm:gap-3">
      {prev ? (
        <Link href={prev.href} className={cell} aria-label={`Previous topic: ${prev.code} ${prev.title}`}>
          <Chevron dir="left" />
          <span className="min-w-0">
            <span className="block text-sm sm:text-base font-bold">Previous</span>
            <span className="block text-xs sm:text-sm text-efe-muted truncate">
              {prev.code}<span className="hidden sm:inline"> {prev.title}</span>
            </span>
          </span>
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}

      <Link href={hubHref} className={`${cell} justify-center text-center`}>
        <svg aria-hidden="true" viewBox="0 0 20 20" className="hidden sm:block w-5 h-5 shrink-0" fill="currentColor">
          <rect x="3" y="4" width="3" height="3" rx="1" /><rect x="8" y="4.75" width="9" height="1.5" rx=".75" />
          <rect x="3" y="8.5" width="3" height="3" rx="1" /><rect x="8" y="9.25" width="9" height="1.5" rx=".75" />
          <rect x="3" y="13" width="3" height="3" rx="1" /><rect x="8" y="13.75" width="9" height="1.5" rx=".75" />
        </svg>
        <span className="text-sm sm:text-base font-bold whitespace-nowrap">All topics</span>
      </Link>

      {next ? (
        <Link
          href={next.href}
          className={`${nextCell} justify-end text-right`}
          aria-label={`Next topic: ${next.code} ${next.title}`}
        >
          <span className="min-w-0">
            <span className="block text-sm sm:text-base font-bold text-efe-accent-ink">Next</span>
            <span className="block text-xs sm:text-sm text-efe-muted truncate">
              {next.code}<span className="hidden sm:inline"> {next.title}</span>
            </span>
          </span>
          <Chevron dir="right" />
        </Link>
      ) : (
        <span aria-hidden="true" />
      )}
    </nav>
  );
}
