"use client";
// components/AdminCoursesSection.tsx
// Reads admin-uploaded courses from Firebase and displays them
// Import this into app/courses/page.tsx alongside the existing CoursesFilter

import { useAdminCollection } from "@/lib/useAdminCollection";
import Card from "@/components/ui/Card";

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
        <div className="h-4 w-32 bg-efe-line rounded animate-pulse" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1,2,3].map(i => (
          <div key={i} className="efe-card p-5 animate-pulse">
            <div className="h-8 w-8 bg-efe-line rounded mb-3" />
            <div className="h-4 bg-efe-line rounded w-2/3 mb-2" />
            <div className="h-3 bg-efe-bg rounded w-full mb-1" />
            <div className="h-3 bg-efe-bg rounded w-3/4" />
          </div>
        ))}
      </div>
    </div>
  );

  if (courses.length === 0) return null;

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-efe-fg">
          📥 Recently Added Courses
        </h2>
        <span className="text-xs text-efe-muted bg-efe-surface border border-efe-line px-3 py-1 rounded-full">
          {courses.length} from admin
        </span>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map(course => (
          <Card key={course.id} href={course.href} className="p-5 justify-between">
            <div>
              <div className="flex items-start gap-3 mb-3">
                <span className="w-11 h-11 rounded-[12px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl group-hover:bg-efe-accent group-hover:text-white transition-colors">
                  {course.emoji}
                </span>
                <div className="flex-1">
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-efe-accent-soft text-efe-accent-ink">
                    {course.subject}
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-efe-fg text-sm mb-1 group-hover:text-efe-accent transition-colors">
                {course.title}
              </h3>
              <p className="text-efe-muted text-xs leading-relaxed mb-3 line-clamp-2">
                {course.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs text-efe-muted">{course.level}</span>
              {course.lessons > 0 && (
                <span className="text-xs text-efe-accent-ink font-semibold">{course.lessons} lessons</span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
