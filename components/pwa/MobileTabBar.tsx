'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Bottom tab bar, mobile only.
 *
 * Ported from the "EduForEveryone App" design concept (Today / Practice /
 * Quran / You). Every tab points at a route that already exists — this is a
 * navigation layer, not a new set of pages, so it adds no indexable surface
 * and nothing here duplicates existing content.
 *
 * Hidden at `lg` and up, which is the same breakpoint where Navbar swaps its
 * hamburger for the full desktop nav.
 */

type Tab = {
  href: string;
  label: string;
  /** Extra path prefixes that should light this tab up. */
  match: string[];
  icon: (active: boolean) => React.ReactNode;
};

const stroke = (active: boolean) => (active ? 2.2 : 1.7);

const TABS: Tab[] = [
  {
    href: '/',
    label: 'Today',
    match: [],
    icon: (a) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke(a)} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10.5 12 3l9 7.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.5 9.5V20h13V9.5" />
      </svg>
    ),
  },
  {
    href: '/ielts/practice',
    label: 'Practice',
    match: ['/ielts', '/gmat', '/quiz', '/games', '/courses', '/notes'],
    icon: (a) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke(a)} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A1.5 1.5 0 0 1 5.5 4H10a2 2 0 0 1 2 2v13a1.6 1.6 0 0 0-1.6-1.6H4Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 5.5A1.5 1.5 0 0 0 18.5 4H14a2 2 0 0 0-2 2v13a1.6 1.6 0 0 1 1.6-1.6H20Z" />
      </svg>
    ),
  },
  {
    href: '/quran',
    label: 'Quran',
    match: ['/quran', '/islamic-studies'],
    icon: (a) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke(a)} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 4.5h9.5A2.5 2.5 0 0 1 17 7v12.5H7.5A2.5 2.5 0 0 1 5 17Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 9.5h5M8.5 13h3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 7h2v12.5h-2" />
      </svg>
    ),
  },
  {
    href: '/profile',
    label: 'You',
    match: ['/profile', '/leaderboard', '/search'],
    icon: (a) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke(a)} aria-hidden="true">
        <circle cx="12" cy="8.5" r="3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20a7.5 7.5 0 0 1 15 0" />
      </svg>
    ),
  },
];

function isActive(pathname: string, tab: Tab): boolean {
  // Home only matches exactly, otherwise it would win on every route.
  if (tab.href === '/') return pathname === '/';
  return tab.match.some((p) => pathname === p || pathname.startsWith(`${p}/`));
}

export default function MobileTabBar() {
  const pathname = usePathname() || '/';

  // Immersive routes: a fixed bar over a timed test or a PDF reader steals
  // vertical space and invites a mis-tap that abandons the attempt.
  const hidden =
    pathname.startsWith('/quran/pdf') ||
    pathname.startsWith('/ielts/full-test') ||
    pathname.startsWith('/gmat/full-test') ||
    pathname.startsWith('/admin');

  if (hidden) return null;

  return (
    <nav
      aria-label="Primary"
      className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur border-t border-gray-100 pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="flex items-stretch px-2">
        {TABS.map((tab) => {
          const active = isActive(pathname, tab);
          return (
            <li key={tab.href} className="flex-1">
              <Link
                href={tab.href}
                aria-current={active ? 'page' : undefined}
                className={`flex flex-col items-center justify-center gap-1.5 h-14 rounded-xl transition-colors ${
                  active ? 'text-brand-700' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`block h-1 w-5 rounded-full transition-colors ${
                    active ? 'bg-brand-700' : 'bg-transparent'
                  }`}
                />
                <span className="w-5 h-5">{tab.icon(active)}</span>
                <span className="text-[11px] font-bold leading-none">{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
