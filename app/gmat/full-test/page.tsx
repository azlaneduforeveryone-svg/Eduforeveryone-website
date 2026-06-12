import type { Metadata } from "next";
import GmatFullMock from "./GmatFullMock";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GMAT Focus Full Mock Test — Free 3-Section Practice | EduForEveryone",
  description: "Take a free full GMAT Focus mock test: Quantitative Reasoning, Verbal Reasoning and Data Insights, each timed at 45 minutes. Choose your section order, get an estimated total score and full explanations. No sign-up.",
  alternates: { canonical: "https://eduforeveryone.com/gmat/full-test" },
  openGraph: {
    title: "GMAT Focus Full Mock Test | EduForEveryone",
    description: "Free full GMAT Focus mock — three timed sections, section-order choice, estimated total score and explanations.",
    url: "https://eduforeveryone.com/gmat/full-test",
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
        { name: "Full Mock Test", path: "/gmat/full-test" },
      ])} />
      <GmatFullMock />
    </>
  );
}
