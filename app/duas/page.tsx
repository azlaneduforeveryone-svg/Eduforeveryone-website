import type { Metadata } from "next";
import DuasClient from "./DuasClient";

export const metadata: Metadata = {
  title: "Daily Duas & Supplications — Authentic Islamic Duas with Audio | EduForEveryone",
  description:
    "Explore authentic daily duas with high-quality audio recitations, translations in multiple languages, and a digital Tasbeeh counter. Learn, listen, and memorize essential Islamic supplications.",
  alternates: {
    canonical: "https://eduforeveryone.com/duas",
  },
  openGraph: {
    title: "Daily Duas & Supplications — Authentic Islamic Duas with Audio | EduForEveryone",
    description:
      "Explore authentic daily duas with high-quality audio recitations, translations in multiple languages, and a digital Tasbeeh counter.",
    url: "https://eduforeveryone.com/duas",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function DuasPage() {
  return <DuasClient />;
}
