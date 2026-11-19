import Link from 'next/link';
import { navItem } from '@/lib/siteNav';

// Footer columns follow the same order as the header and the home page
// (lib/siteNav.ts): Islamic Studies, Courses, IELTS and GMAT, then Games
// and Tools, then Company. Column titles link to the section hubs.
const COLUMNS: { title: string; href: string; links: { label: string; href: string }[] }[] = [
  {
    title: navItem('islamic').label,
    href: navItem('islamic').href,
    links: [
      { label: 'Quran Reader', href: '/quran/read' },
      { label: 'Tajweed Quran', href: '/quran/tajweed' },
      { label: 'Mushaf 15-Line', href: '/quran/pdf/15line' },
      { label: 'Duas & Tasbeeh', href: '/duas' },
      { label: 'Islamic Quiz', href: '/quiz/islamic-quiz' },
    ],
  },
  {
    title: navItem('courses').label,
    href: navItem('courses').href,
    links: [
      { label: 'O Level and IGCSE Accounting', href: '/courses/accounting' },
      { label: 'O Level and IGCSE Biology', href: '/courses/biology' },
      { label: 'O Level and IGCSE Maths', href: '/courses/mathematics' },
      { label: 'All courses', href: '/courses' },
    ],
  },
  {
    title: `${navItem('ielts').label} & ${navItem('gmat').label}`,
    href: navItem('ielts').href,
    links: [
      { label: 'IELTS Practice', href: '/ielts' },
      { label: 'IELTS Full Mock Test', href: '/ielts/full-test' },
      { label: 'GMAT Practice', href: '/gmat' },
      { label: 'GMAT Full Mock Test', href: '/gmat/full-test' },
    ],
  },
  {
    title: 'More',
    href: navItem('tools').href,
    links: [
      { label: navItem('games').label, href: navItem('games').href },
      { label: 'Quizzes', href: '/quiz' },
      { label: navItem('tools').label, href: navItem('tools').href },
      { label: 'Bank Reconciliation', href: '/tools/finance-tools/reconciliation/bank' },
    ],
  },
  {
    title: 'Company',
    href: '/about',
    links: [
      { label: 'About & FAQ', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1.5fr_repeat(5,1fr)] gap-x-6 gap-y-8 mb-8">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <img src="/Main_Logo.jpg" alt="" className="h-8 w-8 object-contain" loading="lazy" />
              <span className="text-white font-bold text-lg whitespace-nowrap">EduForEveryone</span>
            </div>
            <p className="text-sm leading-relaxed">
              Free, high-quality education for every student. No fees. No barriers.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-white font-semibold mb-3">
                <Link href={col.href} className="hover:text-teal-400 transition-colors">
                  {col.title}
                </Link>
              </h3>
              <ul className="space-y-2 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="hover:text-teal-400 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-sm space-y-1">
          <p>© {new Date().getFullYear()} EduForEveryone. Free for personal and educational use.</p>
          <p className="text-xs text-gray-500">
            Cambridge, O Level and IGCSE are trade marks of Cambridge University Press &amp; Assessment.
            EduForEveryone is independent and not affiliated with Cambridge.
          </p>
        </div>
      </div>
    </footer>
  );
}
