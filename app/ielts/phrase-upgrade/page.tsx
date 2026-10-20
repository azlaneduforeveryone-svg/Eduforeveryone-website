import type { Metadata } from "next";
import PhraseUpgradeClient from "./PhraseUpgradeClient";

export const metadata: Metadata = {
  title: "Phrase Upgrade — IELTS Writing & Speaking Phrases Game | EduForEveryone",
  description:
    "Master natural IELTS phrases for Writing Task 1, Writing Task 2, and Speaking. Replace overused clichés with flexible, examiner-approved collocations across 80 exam contexts.",
  alternates: { canonical: "https://eduforeveryone.com/ielts/phrase-upgrade" },
  openGraph: {
    title: "Phrase Upgrade — IELTS Writing & Speaking Game | EduForEveryone",
    description:
      "Avoid memorised clichés and upgrade to natural academic and spoken phrases for IELTS Band 7+.",
    url: "https://eduforeveryone.com/ielts/phrase-upgrade",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function PhraseUpgradePage() {
  return <PhraseUpgradeClient />;
}
