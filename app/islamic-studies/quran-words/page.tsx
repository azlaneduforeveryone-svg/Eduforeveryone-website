import type { Metadata } from "next";
import {
  isQuranWordsLive,
  getReviewedQuranWords,
  QURAN_WORDS,
} from "@/lib/games/quran-words";
import { loadQulQuranWords, mergeQuranWords } from "@/lib/games/quran-words-qul";
import QuranWordsClient from "./QuranWordsClient";

export function generateMetadata(): Metadata {
  const isLive = isQuranWordsLive();

  if (!isLive) {
    return {
      title: "Quran Word Meanings (In Review) — Islamic Studies | EduForEveryone",
      description:
        "Learn common Quranic vocabulary with authentic references. Currently undergoing scholarly editorial review.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: "Quran Word Meanings — Free Islamic Vocabulary Game | EduForEveryone",
    description:
      "Learn high-frequency Quranic words, their English meanings, and surah references through an authentic, ad-free learning game.",
    alternates: {
      canonical: "https://eduforeveryone.com/islamic-studies/quran-words",
    },
    openGraph: {
      title: "Quran Word Meanings — Islamic Studies | EduForEveryone",
      description: "Interactive Quranic vocabulary game. 100% ad-free forever.",
      url: "https://eduforeveryone.com/islamic-studies/quran-words",
      siteName: "EduForEveryone",
      type: "website",
    },
  };
}

export default function QuranWordsPage() {
  const isLive = isQuranWordsLive();
  const isDev = process.env.NODE_ENV === "development";

  // In production when not live, do not pass or render any unreviewed word data in HTML
  // English: hand-written words plus the QUL words not already among them.
  // Urdu: all 300 QUL words (the hand-written words have no Urdu meanings).
  const qulWords = isLive || isDev ? loadQulQuranWords() : [];
  const words = isLive
    ? mergeQuranWords(getReviewedQuranWords(), qulWords)
    : isDev
    ? QURAN_WORDS
    : [];
  const urduWords = isLive ? qulWords : [];

  return (
    <QuranWordsClient
      isLive={isLive}
      isDev={isDev}
      words={words}
      urduWords={urduWords}
      totalWordCount={words.length || QURAN_WORDS.length}
    />
  );
}
