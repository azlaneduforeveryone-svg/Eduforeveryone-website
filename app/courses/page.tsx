import type { Metadata } from "next";
import { getAllCourses, getAllSubjects } from '@/lib/data';
import AdminCoursesSection from "@/components/AdminCoursesSection";
import CoursesFilter from './CoursesFilter';
import Link from 'next/link';
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Free Online Courses: O Level and IGCSE Accounting, Biology and Mathematics",
  description: "Free Cambridge O Level and IGCSE Accounting (7707, 0452) and Biology (5090, 0610) courses, plus O Level and IGCSE Mathematics (4024, 0580). Notes, flashcards and exam-style practice questions.",
  alternates: { canonical: "https://eduforeveryone.com/courses" },
  openGraph: {
    title: "All Courses | EduForEveryone",
    description: "Free Cambridge O Level and IGCSE Accounting, Biology and Mathematics courses.",
    url: "https://eduforeveryone.com/courses",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function CoursesPage() {
  const courses = getAllCourses();
  const subjects = getAllSubjects();

  return (
    <div className="efe-page">
      <PageHeader
        title="All Courses"
        description="Browse our complete library of free courses."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {/* Admin-uploaded courses from Firebase */}
        <AdminCoursesSection />

        {/* Accounting Hub Banner */}
        <Link
          href="/courses/accounting"
          className="group efe-banner flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 mb-6 transition-all hover:shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-3xl flex-shrink-0">
            📊
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-bold bg-efe-gold-soft text-efe-gold px-2.5 py-0.5 rounded-full">NEW</span>
              <span className="text-xs text-white/80 font-medium">O Level 7707 · IGCSE 0452</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Cambridge O Level and IGCSE Accounting</h2>
            <p className="text-white/85 text-sm leading-relaxed">
              One course for O Level 7707 and IGCSE 0452 (same syllabus content, exams from 2027). 28 topics across all 7 sections, with notes, mind maps, flashcards and 336 practice multiple-choice questions with option-by-option feedback.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="efe-btn efe-btn-on-hero efe-btn-sm whitespace-nowrap">
              Start Accounting →
            </span>
          </div>
        </Link>

        {/* Biology Hub Banner */}
        <Link
          href="/courses/biology"
          className="group efe-banner flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 mb-6 transition-all hover:shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-3xl flex-shrink-0">
            🧬
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-bold bg-efe-gold-soft text-efe-gold px-2.5 py-0.5 rounded-full">NEW</span>
              <span className="text-xs text-white/80 font-medium">O Level 5090 · IGCSE 0610</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Cambridge O Level and IGCSE Biology</h2>
            <p className="text-white/85 text-sm leading-relaxed">
              One course for O Level 5090 and IGCSE 0610 (Core and Extended), exams 2026 to 2028. 52 topics with notes, labelled diagrams, mind maps, flashcards and 641 exam-style practice questions, each tagged to your syllabus.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="efe-btn efe-btn-on-hero efe-btn-sm whitespace-nowrap">
              Start Biology →
            </span>
          </div>
        </Link>

        {/* Mathematics Hub Banner */}
        <Link
          href="/courses/mathematics"
          className="group efe-banner flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 mb-10 transition-all hover:shadow-lg"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/25 flex items-center justify-center text-3xl flex-shrink-0">
            🧮
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1.5">
              <span className="text-xs font-bold bg-efe-gold-soft text-efe-gold px-2.5 py-0.5 rounded-full">NEW</span>
              <span className="text-xs text-white/80 font-medium">O Level 4024 · IGCSE 0580</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Cambridge O Level and IGCSE Mathematics</h2>
            <p className="text-white/85 text-sm leading-relaxed">
              One course for O Level 4024 and IGCSE 0580 (Core and Extended). 72 topics with plain English notes, real-life examples solved step by step, diagrams, mind maps, flashcards and 654 exam-style practice questions, each tagged to your syllabus.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="efe-btn efe-btn-on-hero efe-btn-sm whitespace-nowrap">
              Start Mathematics →
            </span>
          </div>
        </Link>

        {/* Other Courses */}
        <SectionHeader
          title="Other Courses"
          description="Science, English, History and more."
        />
        <CoursesFilter courses={courses} subjects={subjects} />
      </div>
    </div>
  );
}
