import type { Metadata } from 'next';
import { getAllQuizzes } from '@/lib/data';
import Card from '@/components/Card';
import PageHeader from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Interactive Practice Quizzes — Test Your Knowledge | EduForEveryone',
  description:
    'Test your knowledge with free interactive quizzes across multiple subjects, difficulty levels, and topics. Track your score and learn instantly.',
  alternates: {
    canonical: 'https://eduforeveryone.com/quiz',
  },
  openGraph: {
    title: 'Interactive Practice Quizzes | EduForEveryone',
    description:
      'Test your knowledge with free interactive quizzes across multiple subjects and difficulty levels.',
    url: 'https://eduforeveryone.com/quiz',
    siteName: 'EduForEveryone',
    type: 'website',
  },
};

export default function QuizPage() {
  const quizzes = getAllQuizzes();
  return (
    <div className="efe-page">
      <PageHeader
        title="Quizzes"
        description="Test what you know with our interactive quizzes."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
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
    </div>
  );
}
