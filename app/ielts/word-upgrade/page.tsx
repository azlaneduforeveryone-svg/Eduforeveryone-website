import type { Metadata } from "next";
import WordUpgradeClient from "./WordUpgradeClient";

export const metadata: Metadata = {
  title: "Word Upgrade — IELTS Band 7+ Vocabulary Game | EduForEveryone",
  description:
    "Train your IELTS Lexical Resource. Replace basic words with natural, high-band academic vocabulary across 40 exam-focused contexts. 100% free.",
  alternates: { canonical: "https://eduforeveryone.com/ielts/word-upgrade" },
  openGraph: {
    title: "Word Upgrade — IELTS Vocabulary Practice | EduForEveryone",
    description:
      "Boost your IELTS Lexical Resource score with targeted Band 7+ vocabulary upgrades.",
    url: "https://eduforeveryone.com/ielts/word-upgrade",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function WordUpgradePage() {
  return <WordUpgradeClient />;
}
