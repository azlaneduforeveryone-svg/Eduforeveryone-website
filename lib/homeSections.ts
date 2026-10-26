import type { HomeIconName } from "@/components/home/HomeIcons";

export interface HomeTile {
  name: string;
  href: string;
  icon: HomeIconName;
  isNew?: boolean;
}

export interface HomeSection {
  id: string;
  title: string;
  chip: string;
  chipIcon: HomeIconName;
  description: string;
  hub: string;
  arabic?: string;
  badge?: string;
  tiles: HomeTile[];
}

export const HOME_SECTIONS: HomeSection[] = [
  {
    id: "islamic",
    title: "Islamic Studies",
    chip: "Islamic Studies",
    chipIcon: "book-open",
    description: "Read the Quran with 40+ translations, learn Tajweed, and keep your daily duas close.",
    hub: "/islamic-studies",
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
    id: "ielts",
    title: "IELTS Preparation",
    chip: "IELTS",
    chipIcon: "graduation-cap",
    description: "Practise all four skills, sit a full timed mock, and get instant AI feedback on Writing and Speaking.",
    hub: "/ielts",
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
    chip: "GMAT",
    chipIcon: "sigma",
    description: "Section practice from a 500+ question bank and a full 64-question timed simulation.",
    hub: "/gmat",
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
    chip: "Games",
    chipIcon: "gamepad-2",
    description: "Short games that sharpen vocabulary, mental maths and general knowledge.",
    hub: "/games",
    tiles: [
      { name: "Word Puzzle", href: "/games/word-puzzle", icon: "puzzle" },
      { name: "Math Puzzle", href: "/games/math-puzzle", icon: "divide" },
      { name: "Quiz Battle", href: "/games/quiz-battle", icon: "swords" },
    ],
  },
  {
    id: "finance",
    title: "Finance & Accounting Tools",
    chip: "Finance Tools",
    chipIcon: "calculator",
    description: "Reconcile statements in minutes and run the calculators accountants and CFA candidates use.",
    hub: "/tools",
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
