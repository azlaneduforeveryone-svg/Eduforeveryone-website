import type { Metadata } from 'next';
import { getCourseById, getAllCourses } from '@/lib/data';
import { notFound } from 'next/navigation';
import LessonViewer from './LessonViewer';

export async function generateStaticParams() {
  return getAllCourses().map((c) => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const course = getCourseById(params.id);
  if (!course) {
    return {
      title: 'Course Not Found | EduForEveryone',
    };
  }
  return {
    title: `${course.title} — Free Online Course | EduForEveryone`,
    description: course.description,
    alternates: {
      canonical: `https://eduforeveryone.com/courses/${params.id}`,
    },
    openGraph: {
      title: `${course.title} | EduForEveryone`,
      description: course.description,
      url: `https://eduforeveryone.com/courses/${params.id}`,
      siteName: 'EduForEveryone',
      type: 'article',
    },
  };
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = getCourseById(params.id);
  if (!course) notFound();

  return (
    <div className="efe-page min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <span className="text-xs font-semibold text-efe-accent uppercase tracking-wide">{course.subject}</span>
          <h1 className="text-4xl font-bold text-efe-fg font-display mt-2 mb-3">
            {course.thumbnail} {course.title}
          </h1>
          <p className="text-lg text-efe-muted mb-4">{course.description}</p>
          <div className="flex items-center gap-4 text-sm text-efe-muted">
            <span className="bg-efe-accent-soft text-efe-accent-ink px-3 py-1 rounded-full font-semibold">{course.level}</span>
            <span>{course.lessonCount} lessons</span>
          </div>
        </div>
        <LessonViewer lessons={course.lessons} />
      </div>
    </div>
  );
}
