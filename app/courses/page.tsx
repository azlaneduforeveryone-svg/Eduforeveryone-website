import type { Metadata } from "next";
import { getAllCourses, getAllSubjects } from '@/lib/data';
import AdminCoursesSection from "@/components/AdminCoursesSection";
import CoursesFilter from './CoursesFilter';
import Link from 'next/link';
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Free Online Courses — Math, Science, English & History",
  description: "Free courses including a complete 20-topic Mathematics curriculum from elementary to university level. Learn at your own pace.",
  alternates: { canonical: "https://eduforeveryone.com/courses" },
  openGraph: {
    title: "All Courses | EduForEveryone",
    description: "Browse free courses in Mathematics, Science, English and History.",
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
              <span className="text-xs text-white/80 font-medium">Mathematics · All Levels</span>
            </div>
            <h2 className="text-xl font-bold text-white mb-1">Complete Mathematics Curriculum</h2>
            <p className="text-white/85 text-sm leading-relaxed">
              20 topics from Elementary to University level — Counting, Algebra, Geometry, Trigonometry, Calculus and more.
            </p>
          </div>
          <div className="flex-shrink-0">
            <span className="efe-btn efe-btn-on-hero efe-btn-sm whitespace-nowrap">
              Explore 20 Topics →
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
