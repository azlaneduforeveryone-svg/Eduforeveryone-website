import { getCourseById, getAllCourses } from '@/lib/data';
import { notFound } from 'next/navigation';
import LessonViewer from './LessonViewer';

export async function generateStaticParams() {
  return getAllCourses().map((c) => ({ id: c.id }));
}

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const course = getCourseById(params.id);
  if (!course) notFound();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{course.subject}</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">
          {course.thumbnail} {course.title}
        </h1>
        <p className="text-lg text-gray-500 mb-4">{course.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full font-semibold">{course.level}</span>
          <span>{course.lessonCount} lessons</span>
        </div>
      </div>
      <LessonViewer lessons={course.lessons} />
    </div>
  );
}
