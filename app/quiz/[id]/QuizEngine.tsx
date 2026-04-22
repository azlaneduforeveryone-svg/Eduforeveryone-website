'use client';
import { useState } from 'react';
import { QuizQuestion } from '@/types';

export default function QuizEngine({ questions }: { questions: QuizQuestion[] }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [finished, setFinished] = useState(false);

  const question = questions[current];
  const isAnswered = selected !== null;

  function handleSelect(i: number) {
    if (isAnswered) return;
    setSelected(i);
    const updated = [...answers];
    updated[current] = i;
    setAnswers(updated);
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(answers[current + 1]);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrent(0);
    setSelected(null);
    setAnswers(Array(questions.length).fill(null));
    setFinished(false);
  }

  const score = answers.filter((a, i) => a === questions[i].correct).length;

  if (finished) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 text-center">
        <div className="text-6xl mb-4">{score === questions.length ? '🏆' : score >= questions.length / 2 ? '🎉' : '📚'}</div>
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Complete!</h2>
        <p className="text-xl text-gray-500 mb-6">You scored <span className="font-bold text-teal-600">{score}/{questions.length}</span></p>
        <div className="space-y-4 text-left mb-8">
          {questions.map((q, i) => (
            <div key={q.id} className={`p-4 rounded-xl border ${answers[i] === q.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
              <p className="font-semibold text-gray-900 mb-1">{q.question}</p>
              <p className="text-sm text-gray-600">✓ {q.options[q.correct]}</p>
              <p className="text-xs text-gray-400 mt-1">{q.explanation}</p>
            </div>
          ))}
        </div>
        <button onClick={handleRestart} className="bg-teal-600 text-white font-bold px-8 py-3 rounded-xl hover:bg-teal-700 transition-colors">
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <div className="h-1.5 bg-gray-100">
        <div className="h-full bg-teal-500 transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} />
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex justify-between text-sm text-gray-400 mb-6">
          <span>Question {current + 1} of {questions.length}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">{question.question}</h2>
        <div className="space-y-3 mb-8">
          {question.options.map((opt, i) => {
            let style = 'bg-gray-50 border-gray-200 text-gray-700 hover:border-teal-300 hover:bg-teal-50/50';
            if (isAnswered) {
              if (i === question.correct) style = 'bg-green-50 border-green-400 text-green-800';
              else if (i === selected) style = 'bg-red-50 border-red-400 text-red-800';
              else style = 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
            }
            return (
              <button key={i} onClick={() => handleSelect(i)} className={`w-full text-left p-4 rounded-xl border-2 transition-all font-medium ${style}`}>
                <span className="mr-3 font-bold text-sm">{String.fromCharCode(65 + i)}.</span>{opt}
              </button>
            );
          })}
        </div>
        {isAnswered && (
          <div className={`p-4 rounded-xl mb-6 ${selected === question.correct ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className="font-semibold mb-1">{selected === question.correct ? '✅ Correct!' : '❌ Incorrect'}</p>
            <p className="text-sm text-gray-600">{question.explanation}</p>
          </div>
        )}
        <button onClick={handleNext} disabled={!isAnswered} className="w-full bg-teal-600 text-white font-bold py-3 rounded-xl hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
          {current < questions.length - 1 ? 'Next Question →' : 'See Results'}
        </button>
      </div>
    </div>
  );
}
