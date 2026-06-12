import type { Metadata } from "next";
import DataInsightsPractice from "./DataInsightsPractice";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GMAT Data Insights Practice — DS, MSR, Table & Graphics | EduForEveryone",
  description: "Free GMAT Focus Data Insights practice: Data Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics Interpretation and Two-Part Analysis. 10 questions per session, explanations, estimated score.",
  alternates: { canonical: "https://eduforeveryone.com/gmat/data-insights" },
  openGraph: {
    title: "GMAT Data Insights Practice | EduForEveryone",
    description: "Free GMAT Focus Data Insights practice across all five question formats with explanations.",
    url: "https://eduforeveryone.com/gmat/data-insights",
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
        { name: "Data Insights", path: "/gmat/data-insights" },
      ])} />
      <DataInsightsPractice />
    </>
  );
}
