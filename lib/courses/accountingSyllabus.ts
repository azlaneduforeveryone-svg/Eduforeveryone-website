// O Level Accounting 7707 syllabus metadata & client-safe quiz draw helpers.
// Note: Does NOT import the 336-question array so client components stay lightweight.

import type { AccountingMcq } from "./oLevelAccountingMcqs";

export interface AccountingTopicMeta {
  topic: string;      // e.g. "1.2"
  slug: string;       // URL-safe slug: "1-2"
  topicId: string;    // Storage & Firestore doc id: "o7707-1.2"
  section: number;    // 1..7
  topicTitle: string; // Exact title from oLevelAccountingMcqs.ts
  videoId?: string;   // Optional YouTube video ID when available
  notes?: string;     // Optional topic notes when available
}

export interface AccountingSectionMeta {
  number: number;
  title: string;
  description: string;
  topics: AccountingTopicMeta[];
}

export const O_LEVEL_ACCOUNTING_SECTIONS: AccountingSectionMeta[] = [
  {
    number: 1,
    title: "The fundamentals of accounting",
    description: "Book-keeping versus accounting, profit or loss, and the accounting equation.",
    topics: [
      { topic: "1.1", slug: "1-1", topicId: "o7707-1.1", section: 1, topicTitle: "The purpose of accounting" },
      { topic: "1.2", slug: "1-2", topicId: "o7707-1.2", section: 1, topicTitle: "The accounting equation" },
    ],
  },
  {
    number: 2,
    title: "Sources and recording of data",
    description: "Double-entry ledger accounts, source business documents, and books of prime entry.",
    topics: [
      { topic: "2.1", slug: "2-1", topicId: "o7707-2.1", section: 2, topicTitle: "The double entry system of book-keeping" },
      { topic: "2.2", slug: "2-2", topicId: "o7707-2.2", section: 2, topicTitle: "Business documents" },
      { topic: "2.3", slug: "2-3", topicId: "o7707-2.3", section: 2, topicTitle: "Books of prime entry" },
    ],
  },
  {
    number: 3,
    title: "Verification of accounting records",
    description: "Checking ledger accuracy with the trial balance, correcting errors, bank reconciliation, and control accounts.",
    topics: [
      { topic: "3.1", slug: "3-1", topicId: "o7707-3.1", section: 3, topicTitle: "The trial balance" },
      { topic: "3.2", slug: "3-2", topicId: "o7707-3.2", section: 3, topicTitle: "Correction of errors" },
      { topic: "3.3", slug: "3-3", topicId: "o7707-3.3", section: 3, topicTitle: "Bank reconciliation" },
      { topic: "3.4", slug: "3-4", topicId: "o7707-3.4", section: 3, topicTitle: "Control accounts" },
    ],
  },
  {
    number: 4,
    title: "Accounting procedures",
    description: "Year-end adjustments: capital vs revenue, depreciation, accruals and prepayments, irrecoverable debts, and inventory valuation.",
    topics: [
      { topic: "4.1", slug: "4-1", topicId: "o7707-4.1", section: 4, topicTitle: "Capital and revenue expenditure and receipts" },
      { topic: "4.2", slug: "4-2", topicId: "o7707-4.2", section: 4, topicTitle: "Depreciation and disposal of non-current assets" },
      { topic: "4.3", slug: "4-3", topicId: "o7707-4.3", section: 4, topicTitle: "Other payables and other receivables" },
      { topic: "4.4", slug: "4-4", topicId: "o7707-4.4", section: 4, topicTitle: "Irrecoverable debts and allowance for irrecoverable debts" },
      { topic: "4.5", slug: "4-5", topicId: "o7707-4.5", section: 4, topicTitle: "Valuation of inventory" },
    ],
  },
  {
    number: 5,
    title: "Preparation of financial statements",
    description: "Financial statements for sole traders, partnerships, limited companies, manufacturing businesses, clubs, and incomplete records.",
    topics: [
      { topic: "5.1", slug: "5-1", topicId: "o7707-5.1", section: 5, topicTitle: "Sole traders" },
      { topic: "5.2", slug: "5-2", topicId: "o7707-5.2", section: 5, topicTitle: "Partnerships" },
      { topic: "5.3", slug: "5-3", topicId: "o7707-5.3", section: 5, topicTitle: "Limited companies" },
      { topic: "5.4", slug: "5-4", topicId: "o7707-5.4", section: 5, topicTitle: "Manufacturing accounts" },
      { topic: "5.5", slug: "5-5", topicId: "o7707-5.5", section: 5, topicTitle: "Clubs and societies" },
      { topic: "5.6", slug: "5-6", topicId: "o7707-5.6", section: 5, topicTitle: "Incomplete records" },
    ],
  },
  {
    number: 6,
    title: "Analysis and interpretation",
    description: "Calculating and interpreting profitability, liquidity and efficiency ratios, inter-firm comparison, users, and limitations.",
    topics: [
      { topic: "6.1", slug: "6-1", topicId: "o7707-6.1", section: 6, topicTitle: "Calculation and understanding of accounting ratios" },
      { topic: "6.2", slug: "6-2", topicId: "o7707-6.2", section: 6, topicTitle: "Interpretation of accounting ratios" },
      { topic: "6.3", slug: "6-3", topicId: "o7707-6.3", section: 6, topicTitle: "Inter-business comparison" },
      { topic: "6.4", slug: "6-4", topicId: "o7707-6.4", section: 6, topicTitle: "Interested parties" },
      { topic: "6.5", slug: "6-5", topicId: "o7707-6.5", section: 6, topicTitle: "Limitations of accounting statements" },
    ],
  },
  {
    number: 7,
    title: "Accounting principles and policies",
    description: "Fundamental accounting concepts, professional ethics, and modern technology and sustainability in accounting.",
    topics: [
      { topic: "7.1", slug: "7-1", topicId: "o7707-7.1", section: 7, topicTitle: "Accounting concepts" },
      { topic: "7.2", slug: "7-2", topicId: "o7707-7.2", section: 7, topicTitle: "Ethical considerations" },
      { topic: "7.3", slug: "7-3", topicId: "o7707-7.3", section: 7, topicTitle: "Technology and sustainability" },
    ],
  },
];

export const ALL_O_LEVEL_TOPICS: AccountingTopicMeta[] =
  O_LEVEL_ACCOUNTING_SECTIONS.flatMap((s) => s.topics);

export function getTopicBySlug(slug: string): AccountingTopicMeta | undefined {
  return ALL_O_LEVEL_TOPICS.find((t) => t.slug === slug);
}

export function getTopicByCode(topic: string): AccountingTopicMeta | undefined {
  return ALL_O_LEVEL_TOPICS.find((t) => t.topic === topic);
}

export function getAdjacentTopics(slug: string): {
  prev: AccountingTopicMeta | null;
  next: AccountingTopicMeta | null;
} {
  const idx = ALL_O_LEVEL_TOPICS.findIndex((t) => t.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? ALL_O_LEVEL_TOPICS[idx - 1] : null,
    next: idx < ALL_O_LEVEL_TOPICS.length - 1 ? ALL_O_LEVEL_TOPICS[idx + 1] : null,
  };
}

// ── Client-side Quiz Shuffle & Draw (operates on pre-filtered topic pool) ────

const shuffle = <T,>(items: T[]): T[] => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const isNumericOption = (s: string) =>
  /^\$?[\d ,.]+(%| days| : 1)?( debit| credit)?$/.test(s.trim());

export const shuffleQuestionOptions = (q: AccountingMcq): AccountingMcq => {
  if (q.options.every(isNumericOption)) return q;
  const order = shuffle([0, 1, 2, 3]);
  return {
    ...q,
    options: order.map((i) => q.options[i]) as AccountingMcq["options"],
    optionFeedback: order.map((i) => q.optionFeedback[i]) as AccountingMcq["optionFeedback"],
    answer: order.indexOf(q.answer) as AccountingMcq["answer"],
  };
};

// Mirrors drawQuiz(topic, n, lastIds) from oLevelAccountingMcqs.ts,
// taking the already-filtered topic questions so the full bank is not bundled on the client.
export const drawQuizFromPool = (
  topicQuestions: AccountingMcq[],
  n = 5,
  lastIds: string[] = []
): AccountingMcq[] => {
  const pool = shuffle(topicQuestions);
  const fresh = pool.filter((q) => !lastIds.includes(q.id));
  const seen = pool.filter((q) => lastIds.includes(q.id));
  return [...fresh, ...seen].slice(0, n).map(shuffleQuestionOptions);
};

