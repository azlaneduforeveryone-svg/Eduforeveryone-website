import type { Metadata } from "next";
import ListeningPage from "./ListeningPage";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "IELTS Listening Practice — Free 4-Section Tests",
  description: "Free IELTS Listening practice with 4-section tests and audio. Practice all question types with instant scoring. No sign-up needed.",
  alternates: { canonical: "https://eduforeveryone.com/ielts/listening" },
  openGraph: {
    title: "IELTS Listening Practice | EduForEveryone",
    description: "Free IELTS listening practice with all 4 sections and question types.",
    url: "https://eduforeveryone.com/ielts/listening",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "IELTS", path: "/ielts" },
        { name: "Listening", path: "/ielts/listening" },
      ])} />
      <ListeningPage />
    </>
  );
}
