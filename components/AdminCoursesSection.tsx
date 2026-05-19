"use client";
// components/AdminCoursesSection.tsx
// Reads admin-uploaded courses from Firebase and displays them
// Import this into app/courses/page.tsx alongside the existing CoursesFilter

import { useAdminCollection } from "@/lib/useAdminCollection";
import Link from "next/link";

interface AdminCourse {
  id:          string;
  title:       string;
  subject:     string;
  level:       string;
  description: string;
  emoji:       string;
  lessons:     number;
  href:        string;
  type:        string;
}

function transformCourses(raw: Record<string, unknown>[]): AdminCourse[] {
  return raw
    .filter(r => (r.type === "course" || !r.type) && (r.course_id || r.id))
    .map(r => ({
      id:          String(r.course_id || r.id || ""),
      title:       String(r.title || ""),
      subject:     String(r.subject || "General"),
      level:       String(r.level || ""),
      description: String(r.description || ""),
      emoji:       String(r.emoji || "📚"),
      lessons:     Number(r.lessons || 0),
      href:        String(r.href || `/courses/${r.course_id || r.id}`),
      type:        "course",
    }))
    .filter(c => c.id && c.title);
}

const SUBJECT_COLORS: Record<string, string> = {
  Mathematics: "bg-teal-100 text-teal-700",
  Science:     "bg-green-100 text-green-700",
  English:     "bg-purple-100 text-purple-700",
  History:     "bg-red-100 text-red-700",
  General:     "bg-gray-100 text-gray-700",
};

export default function AdminCoursesSection() {
  const { data: courses, loading, fromFirebase } = useAdminCollection(
    "admin_courses",
    transformCourses,
    []
  );

  // Don't render anything if no Firebase data and not loading
  if (!loading && !fromFirebase) return null;
  if (loading) return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3].map(i => (
          <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 animate-pulse">
            <div className="h-8 w-8 bg-gray-200 rounded mb-3" />
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2" />
            <div className="h-3 bg-gray-100 rounded w-full mb-1" />
            <div className="h-3 bg-gray-100 rounded w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );

  if (courses.length === 0) return null;

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          📥 Recently Added Courses
        </h2>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
          {courses.length} from admin
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <Link key={course.id} href={course.href}
            className="group bg-white border border-gray-200 rounded-2xl p-5 hover:border-teal-300 hover:shadow-md transition-all">
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{course.emoji}</span>
              <div className="flex-1">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${SUBJECT_COLORS[course.subject] || SUBJECT_COLORS.General}`}>
                  {course.subject}
                </span>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-teal-600 transition-colors">
              {course.title}
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-3 line-clamp-2">
              {course.description}
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{course.level}</span>
              {course.lessons > 0 && (
                <span className="text-xs text-teal-600 font-semibold">{course.lessons} lessons</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
