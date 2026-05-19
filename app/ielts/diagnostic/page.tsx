import type { Metadata } from "next";
import DiagnosticTest from "./DiagnosticTest";
export const metadata: Metadata = {
  title: "IELTS Diagnostic Test — Free Mini Mock Exam | EduForEveryone",
  description: "Take a free IELTS diagnostic test covering all 4 skills. Get your estimated band score instantly.",
};
export default function Page() { return <DiagnosticTest />; }