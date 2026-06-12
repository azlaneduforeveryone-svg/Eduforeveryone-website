import type { Metadata } from "next";
import GmatHub from "./GmatHub";
import JsonLd, { faqLd, breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Free GMAT Focus Edition Practice — Quant, Verbal & Data Insights",
  description: "Free GMAT Focus Edition practice: timed Quantitative Reasoning, Verbal Reasoning and Data Insights sections plus a full mock test. Bookmark, edit answers, choose section order, get an estimated 205–805 score and detailed explanations. No sign-up.",
  alternates: { canonical: "https://eduforeveryone.com/gmat" },
  openGraph: {
    title: "Free GMAT Focus Edition Practice | EduForEveryone",
    description: "Practice every GMAT Focus section and a full timed mock — free, no sign-up, with explanations and estimated scoring.",
    url: "https://eduforeveryone.com/gmat",
    siteName: "EduForEveryone",
    type: "website",
  },
};

const FAQS = [
  { q: "What is the GMAT Focus Edition?", a: "The current GMAT: three 45-minute sections (Quantitative Reasoning, Verbal Reasoning, Data Insights), 64 questions, about 2 hours 15 minutes. It dropped the essay, Sentence Correction and standalone Geometry." },
  { q: "How is it scored?", a: "The official total runs from 205 to 805 in 10-point steps, with each section scored 60–90. Our practice gives a difficulty-weighted estimate only — it is not an official GMAT score." },
  { q: "Can I go back and change answers?", a: "Yes. GMAT Focus lets you bookmark questions and edit up to 3 answers per section, and this practice mirrors that." },
  { q: "Do I need an account?", a: "No. Every practice section and the full mock run with no sign-up. History saves locally; signing in backs it up across devices." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={faqLd(FAQS)} />
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "GMAT", path: "/gmat" },
      ])} />
      <GmatHub />
    </>
  );
}
