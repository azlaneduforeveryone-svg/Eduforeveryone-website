import type { Metadata } from 'next';
import { getQuizById, getAllQuizzes } from '@/lib/data';
import { notFound } from 'next/navigation';
import QuizEngine from '@/components/quiz/QuizEngine';

export async function generateStaticParams() {
  return getAllQuizzes().map((q) => ({ id: q.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const quiz = getQuizById(params.id);
  if (!quiz) {
    return {
      title: 'Quiz Not Found | EduForEveryone',
    };
  }
  return {
    title: `${quiz.title} — Free Quiz (${quiz.difficulty}) | EduForEveryone`,
    description: `${quiz.description} Test your understanding with ${quiz.questionCount} interactive questions on ${quiz.subject}.`,
    alternates: {
      canonical: `https://eduforeveryone.com/quiz/${params.id}`,
    },
    openGraph: {
      title: `${quiz.title} | EduForEveryone`,
      description: quiz.description,
      url: `https://eduforeveryone.com/quiz/${params.id}`,
      siteName: 'EduForEveryone',
      type: 'website',
    },
  };
}

export default function QuizDetailPage({ params }: { params: { id: string } }) {
  const quiz = getQuizById(params.id);
  if (!quiz) notFound();

  return (
    <div className="efe-page">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
        <div className="mb-8">
          <span className="text-xs font-semibold text-efe-accent uppercase tracking-wide">{quiz.subject}</span>
          <h1 className="text-4xl font-bold text-efe-fg font-display mt-2 mb-3">🧠 {quiz.title}</h1>
          <p className="text-lg text-efe-muted mb-4">{quiz.description}</p>
          <div className="flex items-center gap-4 text-sm text-efe-muted">
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
    </div>
  );
}
