import { getAllQuizzes } from '@/lib/data';
import Card from '@/components/Card';

export default function QuizPage() {
  const quizzes = getAllQuizzes();
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Quizzes</h1>
        <p className="text-lg text-gray-500">Test what you know with our interactive quizzes.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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