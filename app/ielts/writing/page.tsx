import type { Metadata } from "next";
import Link from "next/link";
import WritingPage from "./WritingPage";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "IELTS Writing Practice — Task 1 & Task 2 with AI Feedback",
  description: "60 free IELTS Writing prompts: Task 1 charts, maps, processes and Task 2 essays. Timed practice with word counter and AI band feedback.",
  alternates: { canonical: "https://eduforeveryone.com/ielts/writing" },
  openGraph: {
    title: "IELTS Writing Practice | EduForEveryone",
    description: "Free IELTS Writing Task 1 and Task 2 with timed practice and word counter.",
    url: "https://eduforeveryone.com/ielts/writing",
    siteName: "EduForEveryone",
    images: [{ url: "/Main_Logo.jpg", width: 800, height: 800, alt: "EduForEveryone" }],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([
        { name: "Home", path: "/" },
        { name: "IELTS", path: "/ielts" },
        { name: "Writing", path: "/ielts/writing" },
      ])} />
      <nav aria-label="IELTS Writing Hubs Navigation" className="bg-gray-100 border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-3 gap-3">
            <Link
              href="/ielts/writing/task-1"
              className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 block">Academic Task 1</span>
                <span className="text-sm font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                  Chart &amp; Diagram Guides
                </span>
                <span className="text-xs text-gray-500 block">20 Model Answers</span>
              </div>
              <span className="text-teal-600 font-bold group-hover:translate-x-1 transition-transform text-sm">→</span>
            </Link>
            <Link
              href="/ielts/writing/task-2"
              className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 block">Task 2 Essays</span>
                <span className="text-sm font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                  Band 8+ Essay Hub
                </span>
                <span className="text-xs text-gray-500 block">20 Model Essays</span>
              </div>
              <span className="text-teal-600 font-bold group-hover:translate-x-1 transition-transform text-sm">→</span>
            </Link>
            <Link
              href="/ielts/writing/gt-task-1"
              className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-sm transition-all group"
            >
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-teal-600 block">General Training Task 1</span>
                <span className="text-sm font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                  Letter Writing Hub
                </span>
                <span className="text-xs text-gray-500 block">20 Model Letters</span>
              </div>
              <span className="text-teal-600 font-bold group-hover:translate-x-1 transition-transform text-sm">→</span>
            </Link>
          </div>
        </div>
      </nav>
      <WritingPage />
    </>
  );
}

