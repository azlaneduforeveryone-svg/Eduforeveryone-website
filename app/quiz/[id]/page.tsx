import { getQuizById, getAllQuizzes } from '@/lib/data';
import { notFound } from 'next/navigation';
import QuizEngine from './QuizEngine';

export async function generateStaticParams() {
  return getAllQuizzes().map((q) => ({ id: q.id }));
}

export default function QuizDetailPage({ params }: { params: { id: string } }) {
  const quiz = getQuizById(params.id);
  if (!quiz) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-8">
        <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{quiz.subject}</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">🧠 {quiz.title}</h1>
        <p className="text-lg text-gray-500 mb-4">{quiz.description}</p>
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span className={`px-3 py-1 rounded-full font-semibold ${
            quiz.difficulty === 'Easy' ? 'bg-green-100 text-green-700'
            : quiz.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700'
            : 'bg-red-100 text-red-700'
          }`}>{quiz.difficulty}</span>
          <span>{quiz.questionCount} questions</span>
        </div>
      </div>
      <QuizEngine questions={quiz.questions} />
    </div>
  );
}
