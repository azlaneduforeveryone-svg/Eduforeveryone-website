import type { Metadata } from "next";
import IELTSGuide from "./IELTSGuide";

export const metadata: Metadata = {
  title: "IELTS Complete Study Guide — Free Download | EduForEveryone",
  description: "Download our free IELTS study guide covering exam format, band scores, marking criteria, strategies and study plans for all 4 skills.",
};

export default function Page() { return <IELTSGuide />; }