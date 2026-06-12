import type { Metadata } from "next";
import QuantPractice from "./QuantPractice";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "GMAT Quantitative Reasoning Practice — Free Problem Solving | EduForEveryone",
  description: "Free GMAT Focus Quantitative Reasoning practice. 10 random Problem Solving questions per session with detailed explanations and an estimated section score. No sign-up.",
  alternates: { canonical: "https://eduforeveryone.com/gmat/quant" },
  openGraph: {
    title: "GMAT Quant Practice | EduForEveryone",
    description: "Free GMAT Focus Quantitative Reasoning practice with explanations and estimated scoring.",
    url: "https://eduforeveryone.com/gmat/quant",
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
        { name: "Quantitative Reasoning", path: "/gmat/quant" },
      ])} />
      <QuantPractice />
    </>
  );
}
