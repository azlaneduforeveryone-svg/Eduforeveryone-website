import type { Metadata } from "next";
import VerbalPractice from "./VerbalPractice";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GMAT Verbal Reasoning Practice — Free CR & RC | EduForEveryone",
  description: "Free GMAT Focus Verbal Reasoning practice with Critical Reasoning and Reading Comprehension. 10 random questions per session, full explanations, estimated section score. No sign-up.",
  alternates: { canonical: "https://eduforeveryone.com/gmat/verbal" },
  openGraph: {
    title: "GMAT Verbal Practice | EduForEveryone",
    description: "Free GMAT Focus Verbal Reasoning practice with Critical Reasoning and Reading Comprehension.",
    url: "https://eduforeveryone.com/gmat/verbal",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "GMAT", path: "/gmat" },
        { name: "Verbal Reasoning", path: "/gmat/verbal" },
      ])} />
      <VerbalPractice />
    </>
  );
}
