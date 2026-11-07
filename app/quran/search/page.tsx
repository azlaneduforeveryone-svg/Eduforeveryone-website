import type { Metadata } from "next";
import QuranSearch from "./QuranSearch";

export const metadata: Metadata = {
  title: "Search the Quran: Arabic, English, Urdu | EduForEveryone",
  description: "Search the Holy Quran by Arabic words (with or without harakat) or by English and Urdu word-by-word meanings. Free and ad-free.",
  alternates: { canonical: "https://eduforeveryone.com/quran/search" },
};

export default function Page() {
  return <QuranSearch />;
}
