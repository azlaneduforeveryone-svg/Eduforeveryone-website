import type { Metadata } from "next";
import MathHubPage from "./MathHubPage";

export const metadata: Metadata = {
  title: "Mathematics — All Levels | EduForEveryone",
  description: "Free mathematics courses from elementary to university. Counting, algebra, geometry, trigonometry, calculus and more. Each topic includes explanation, examples, practice and quiz.",
  keywords: ["math courses","learn mathematics","algebra","calculus","geometry","trigonometry","statistics","free math lessons"],
  alternates: { canonical: "https://eduforeveryone.com/courses/mathematics" },
};

export default function Page() {
  return <MathHubPage />;
}
