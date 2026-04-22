import { getAllCourses, getAllSubjects } from '@/lib/data';
import Card from '@/components/Card';
import CoursesFilter from './CoursesFilter';

export default function CoursesPage() {
  const courses = getAllCourses();
  const subjects = getAllSubjects();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">All Courses</h1>
        <p className="text-lg text-gray-500">Browse our complete library of free courses.</p>
      </div>
      <CoursesFilter courses={courses} subjects={subjects} />
    </div>
  );
}
