import type { HomeIconName } from "@/components/home/HomeIcons";
import { MAIN_NAV, navItem, type MainNavItem } from "@/lib/siteNav";

export interface HomeTile {
  name: string;
  href: string;
  icon: HomeIconName;
  isNew?: boolean;
}

export interface HomeSection {
  /** Must match an id in lib/siteNav.ts MAIN_NAV. */
  id: MainNavItem["id"];
  title: string;
  /** Chip text: always the same as the header label (from MAIN_NAV). */
  chip: string;
  chipIcon: HomeIconName;
  description: string;
  /** "View all" link: always the same as the header link (from MAIN_NAV). */
  hub: string;
  countLabel?: string;
  arabic?: string;
  badge?: string;
  tiles: HomeTile[];
}

type HomeSectionInput = Omit<HomeSection, "chip" | "hub">;

const SECTIONS: HomeSectionInput[] = [
  {
    id: "islamic",
    title: "Islamic Studies",
    chipIcon: "book-open",
    description: "Read the Quran with 40+ translations, learn Tajweed, and keep your daily duas close.",
    arabic: "اقْرَأْ",
    badge: "Always ad-free",
    tiles: [
      { name: "Quran Reader", href: "/quran/read", icon: "book-open" },
      { name: "Tajweed Quran", href: "/quran/tajweed", icon: "palette" },
      { name: "Mushaf 15-Line", href: "/quran/pdf/15line", icon: "book-marked" },
      { name: "Mushaf 13-Line", href: "/quran/pdf/13line", icon: "book" },
      { name: "Duas & Tasbeeh", href: "/duas", icon: "hand-heart" },
      { name: "Islamic Quiz", href: "/quiz/islamic-quiz", icon: "circle-help" },
      { name: "Quran Word Meanings", href: "/islamic-studies/quran-words", icon: "languages", isNew: true },
    ],
  },
  {
    id: "courses",
    title: "Courses",
    chipIcon: "graduation-cap",
    description: "Cambridge O Level courses with notes, mind maps, flashcards and exam-style practice questions.",
    countLabel: "courses",
    tiles: [
      { name: "O Level and IGCSE Accounting", href: "/courses/accounting", icon: "calculator", isNew: true },
      { name: "O Level Biology (5090)", href: "/courses/biology", icon: "network", isNew: true },
      { name: "O Level and IGCSE Maths", href: "/courses/mathematics", icon: "sigma", isNew: true },
    ],
  },
  {
    id: "ielts",
    title: "IELTS Preparation",
    chipIcon: "languages",
    description: "Practise all four skills, sit a full timed mock, and get instant AI feedback on Writing and Speaking.",
    tiles: [
      { name: "Listening", href: "/ielts/listening", icon: "headphones" },
      { name: "Reading", href: "/ielts/reading", icon: "book-text" },
      { name: "Writing", href: "/ielts/writing", icon: "pen-line" },
      { name: "Speaking", href: "/ielts/speaking", icon: "mic" },
      { name: "Full Mock Test", href: "/ielts/full-test", icon: "timer" },
      { name: "Word Upgrade", href: "/ielts/word-upgrade", icon: "sparkles", isNew: true },
      { name: "Phrase Upgrade", href: "/ielts/phrase-upgrade", icon: "message-square-quote", isNew: true },
      { name: "My Progress", href: "/ielts/progress", icon: "trending-up" },
      { name: "IELTS Guide", href: "/ielts/guide", icon: "compass" },
    ],
  },
  {
    id: "gmat",
    title: "GMAT Focus Edition",
    chipIcon: "sigma",
    description: "Section practice from a 500+ question bank and a full 64-question timed simulation.",
    tiles: [
      { name: "Quant", href: "/gmat/quant", icon: "sigma" },
      { name: "Verbal", href: "/gmat/verbal", icon: "quote" },
      { name: "Data Insights", href: "/gmat/data-insights", icon: "chart-line" },
      { name: "Full Mock Test", href: "/gmat/full-test", icon: "timer" },
    ],
  },
  {
    id: "games",
    title: "Learning Games",
    chipIcon: "gamepad-2",
    description: "Short games that sharpen vocabulary, mental maths and general knowledge.",
    tiles: [
      { name: "Word Puzzle", href: "/games/word-puzzle", icon: "puzzle" },
      { name: "Math Puzzle", href: "/games/math-puzzle", icon: "divide" },
      { name: "Quiz Battle", href: "/games/quiz-battle", icon: "swords" },
    ],
  },
  {
    id: "tools",
    title: "Finance & Accounting Tools",
    chipIcon: "calculator",
    description: "Reconcile statements in minutes and run the calculators accountants and CFA candidates use.",
    tiles: [
      { name: "Bank Reconciliation", href: "/tools/finance-tools/reconciliation/bank", icon: "landmark" },
      { name: "Supplier Reconciliation", href: "/tools/finance-tools/reconciliation/supplier", icon: "handshake" },
      { name: "Customer Reconciliation", href: "/tools/finance-tools/reconciliation/customer", icon: "users" },
      { name: "Intercompany Reconciliation", href: "/tools/finance-tools/reconciliation/intercompany", icon: "network" },
      { name: "CFA Calculator", href: "/tools/cfa-calculator", icon: "banknote" },
      { name: "Number to Words", href: "/tools/number-to-words", icon: "hash" },
      { name: "Scientific Calculator", href: "/tools/scientific-calculator", icon: "sigma" },
      { name: "Simple Calculator", href: "/tools/simple-calculator", icon: "calculator" },
    ],
  },
];

for (const s of SECTIONS) {
  if (!MAIN_NAV.some((n) => n.id === s.id)) {
    throw new Error(`homeSections: section "${s.id}" is not in MAIN_NAV (lib/siteNav.ts)`);
  }
}

/** Home sections in header order, with chip and hub taken from MAIN_NAV. */
export const HOME_SECTIONS: HomeSection[] = MAIN_NAV.map((nav) => {
  const section = SECTIONS.find((s) => s.id === nav.id);
  if (!section) throw new Error(`homeSections: no home section for nav item "${nav.id}"`);
  return { ...section, chip: navItem(nav.id).label, hub: nav.href };
});
