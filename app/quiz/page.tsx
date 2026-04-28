import { getAllQuizzes } from '@/lib/data';
import Card from '@/components/Card';
import Link from 'next/link';

export default function QuizPage() {
  const quizzes = getAllQuizzes();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Quizzes</h1>
        <p className="text-lg text-gray-500">Test what you know with our interactive quizzes.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Islamic Quiz — static card */}
        <Link href="/quiz/islamic-quiz"
          className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-teal-200 hover:shadow-md transition-all">
          <div className="flex items-start justify-between mb-4">
            <img src="/Islamic_Quiz_Logo.jpeg" alt="Islamic Quiz" className="w-12 h-12 object-contain rounded-lg" />
            <span className="text-xs font-medium bg-green-100 text-green-700 px-2.5 py-1 rounded-full">All Levels</span>
          </div>
          <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-1">ISLAMIC STUDIES</p>
          <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">Islamic Quiz</h2>
          <p className="text-gray-500 text-sm mb-4">Test your Islamic knowledge in English, Urdu and Hindi. 7 categories including Quran, Hadith, Seerah and more!</p>
          <p className="text-xs text-gray-400">English · اردو · हिन्दी</p>
          <p className="text-teal-600 text-sm font-semibold mt-3">View →</p>
        </Link>

        {/* Dynamic quizzes from data */}
        {quizzes.map((quiz) => (
          <Card
            key={quiz.id}
            href={`/quiz/${quiz.id}`}
            emoji="🧠"
            title={quiz.title}
            subject={quiz.subject}
            description={quiz.description}
            badge={quiz.difficulty}
            badgeColor={
              quiz.difficulty === 'Easy'
                ? 'bg-green-100 text-green-700'
                : quiz.difficulty === 'Medium'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }
            meta={`${quiz.questionCount} questions`}
          />
        ))}
      </div>
    </div>
  );
}