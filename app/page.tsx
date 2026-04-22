import Link from 'next/link';
import Card from '@/components/Card';
import { getFeaturedCourses, getAllNotes, getAllQuizzes } from '@/lib/data';

export default function Home() {
  const featured = getFeaturedCourses();
  const notes = getAllNotes().slice(0, 3);
  const quizzes = getAllQuizzes().slice(0, 3);

  return (
    <div>
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Free Education for Everyone
          </h1>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            High-quality courses, study notes, and interactive quizzes. No fees. No barriers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/courses" className="bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-teal-50 transition-colors">
              Browse Courses
            </Link>
            <Link href="/quiz" className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              Take a Quiz
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Courses</h2>
          <Link href="/courses" className="text-sm font-semibold text-teal-600">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course) => (
            <Card key={course.id} href={`/courses/${course.id}`} emoji={course.thumbnail} title={course.title} subject={course.subject} description={course.description} badge={course.level} meta={`${course.lessonCount} lessons`} />
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Study Notes</h2>
            <Link href="/notes" className="text-sm font-semibold text-teal-600">View all →</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => (
              <Card key={note.id} href={`/notes/${note.id}`} emoji="📝" title={note.title} subject={note.subject} description={note.summary} meta={note.readTime + ' read'} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Test Your Knowledge</h2>
          <Link href="/quiz" className="text-sm font-semibold text-teal-600">View all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} href={`/quiz/${quiz.id}`} emoji="🧠" title={quiz.title} subject={quiz.subject} description={quiz.description} badge={quiz.difficulty} meta={`${quiz.questionCount} questions`} />
          ))}
        </div>
      </section>
    </div>
  );
}
