import type { Metadata } from "next";
import { getAllCourses, getAllSubjects } from '@/lib/data';
import AdminCoursesSection from "@/components/AdminCoursesSection";
import CoursesFilter from './CoursesFilter';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "All Courses — Free Education | EduForEveryone",
  description: "Browse our complete library of free courses in Mathematics, Science, English, History and more.",
  keywords: ["free courses", "online learning", "mathematics", "science", "english", "history"],
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">All Courses</h1>
        <p className="text-lg text-gray-500">Browse our complete library of free courses.</p>
      </div>

      {/* Admin-uploaded courses from Firebase */}
      <AdminCoursesSection />

      {/* Mathematics Hub Banner */}
      <Link href="/courses/mathematics"
        className="group flex flex-col sm:flex-row items-start sm:items-center gap-5 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-6 mb-8 hover:from-teal-700 hover:to-teal-800 transition-all">
        <div className="text-5xl flex-shrink-0">🧮</div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">NEW</span>
            <span className="text-xs text-teal-200">Mathematics · All Levels</span>
          </div>
          <h2 className="text-xl font-black mb-1">Complete Mathematics Curriculum</h2>
          <p className="text-teal-200 text-sm leading-relaxed">
            20 topics from Elementary to University level — Counting, Algebra, Geometry, Trigonometry, Calculus and more.
          </p>
        </div>
        <div className="flex-shrink-0">
          <span className="bg-white text-teal-700 px-5 py-2.5 rounded-xl font-bold text-sm group-hover:bg-teal-50 transition-colors whitespace-nowrap">
            Explore 20 Topics →
          </span>
        </div>
      </Link>

      {/* Other Courses */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-1">Other Courses</h2>
        <p className="text-gray-500 text-sm">Science, English, History and more.</p>
      </div>
      <CoursesFilter courses={courses} subjects={subjects} />
    </div>
  );
}