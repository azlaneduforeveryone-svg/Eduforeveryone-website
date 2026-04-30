"use client";
import { useState } from "react";
import Link from "next/link";
import { getTopicById, type MathTopic } from "@/lib/mathTopics";

const LEVEL_COLORS: Record<string, string> = {
  "Elementary":   "bg-green-100 text-green-700",
  "Middle School":"bg-blue-100 text-blue-700",
  "High School":  "bg-purple-100 text-purple-700",
  "University":   "bg-orange-100 text-orange-700",
  "Professional": "bg-red-100 text-red-700",
};

type Tab = "explain" | "examples" | "exercises" | "quiz";

// ── Quiz Component ────────────────────────────────────────────────────────────
function TopicQuiz({ topic }: { topic: MathTopic }) {
  const [answers,  setAnswers]  = useState<Record<number, number>>({});
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setAnswers(a => ({ ...a, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    let s = 0;
    topic.quiz.forEach((q, i) => {
      if (answers[i] === q.ans) s++;
      else setRevealed(r => ({ ...r, [i]: true }));
    });
    setScore(s);
    setSubmitted(true);
  };

  const reset = () => {
    setAnswers({}); setRevealed({}); setSubmitted(false); setScore(0);
  };

  const allAnswered = Object.keys(answers).length === topic.quiz.length;

  if (submitted) {
    const pct = Math.round((score / topic.quiz.length) * 100);
    return (
      <div className="space-y-5">
        {/* Score card */}
        <div className={`rounded-2xl p-6 text-center ${pct >= 80 ? "bg-teal-50 border border-teal-100" : pct >= 60 ? "bg-amber-50 border border-amber-100" : "bg-red-50 border border-red-100"}`}>
          <p className="text-4xl mb-2">{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</p>
          <p className={`text-4xl font-black ${pct >= 80 ? "text-teal-600" : pct >= 60 ? "text-amber-600" : "text-red-600"}`}>
            {score}/{topic.quiz.length}
          </p>
          <p className="font-bold text-gray-900 mt-1">{pct}% — {pct >= 80 ? "Excellent!" : pct >= 60 ? "Good effort!" : "Keep practicing!"}</p>
          {pct < 80 && (
            <Link href={`/courses/mathematics/${topic.id}`}
              className="inline-block mt-3 text-sm text-teal-600 font-semibold hover:underline">
              📖 Revisit this topic →
            </Link>
          )}
          <button onClick={reset} className="mt-4 bg-teal-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-teal-700 block mx-auto">
            Try Again
          </button>
        </div>

        {/* Review answers */}
        <div className="space-y-4">
          <h3 className="font-bold text-gray-900">Answer Review</h3>
          {topic.quiz.map((q, i) => {
            const isCorrect = answers[i] === q.ans;
            return (
              <div key={i} className={`rounded-2xl p-4 border ${isCorrect ? "bg-teal-50 border-teal-100" : "bg-red-50 border-red-100"}`}>
                <div className="flex items-start gap-2 mb-2">
                  <span>{isCorrect ? "✅" : "❌"}</span>
                  <p className="font-semibold text-gray-900 text-sm">{q.q}</p>
                </div>
                {!isCorrect && (
                  <>
                    <p className="text-sm text-red-600 ml-6">Your answer: <strong>{q.opts[answers[i]]}</strong></p>
                    <p className="text-sm text-teal-700 ml-6">Correct answer: <strong>{q.opts[q.ans]}</strong></p>
                    <div className="ml-6 mt-2 bg-white rounded-xl p-3 border border-red-100">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">💡 Explanation</p>
                      <p className="text-sm text-gray-700 leading-relaxed">{q.explanation}</p>
                      <Link href={`/courses/mathematics/${topic.id}`}
                        className="inline-flex items-center gap-1 mt-2 text-xs text-teal-600 font-bold hover:underline">
                        📖 Revisit "{topic.title}" topic →
                      </Link>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500">Answer all {topic.quiz.length} questions then click Submit.</p>
      {topic.quiz.map((q, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
          <p className="font-bold text-gray-900 mb-4">
            <span className="text-teal-600 mr-2">Q{i+1}.</span>{q.q}
          </p>
          <div className="space-y-2">
            {q.opts.map((opt, j) => (
              <button key={j} onClick={() => handleSelect(i, j)}
                className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-all
                  ${answers[i] === j
                    ? "bg-teal-600 text-white border-teal-700"
                    : "bg-gray-50 border-gray-200 text-gray-700 hover:border-teal-300 hover:bg-teal-50"}`}>
                <span className="font-bold mr-2">{String.fromCharCode(65+j)}.</span>{opt}
              </button>
            ))}
          </div>
        </div>
      ))}
      <button onClick={handleSubmit} disabled={!allAnswered}
        className={`w-full py-3.5 rounded-2xl font-bold text-base transition-all
          ${allAnswered ? "bg-teal-600 text-white hover:bg-teal-700" : "bg-gray-100 text-gray-400 cursor-not-allowed"}`}
        style={allAnswered ? { boxShadow: "0 4px 0 #0F6E56" } : {}}>
        {allAnswered ? "Submit Quiz →" : `Answer all questions (${Object.keys(answers).length}/${topic.quiz.length})`}
      </button>
    </div>
  );
}

// ── Exercises Component ───────────────────────────────────────────────────────
function TopicExercises({ topic }: { topic: MathTopic }) {
  const [shown, setShown] = useState<Record<number, boolean>>({});
  const toggleAnswer = (i: number) => setShown(s => ({ ...s, [i]: !s[i] }));

  return (
    <div className="space-y-5">
      <p className="text-sm text-gray-500 bg-amber-50 border border-amber-100 rounded-xl px-4 py-2.5">
        ✏️ Try each problem yourself before revealing the answer. Practice is the key to mastering mathematics!
      </p>
      {topic.exercises.map((ex, i) => (
        <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-start gap-3 mb-4">
            <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
              {i+1}
            </span>
            <div className="flex-1">
              <p className="font-bold text-gray-900 mb-2">{ex.problem}</p>
              <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-1.5 inline-block">
                💡 Hint: {ex.hint}
              </p>
            </div>
          </div>
          <button onClick={() => toggleAnswer(i)}
            className={`w-full py-2.5 rounded-xl text-sm font-bold border transition-all
              ${shown[i] ? "bg-teal-600 text-white border-teal-700" : "bg-white border-gray-200 text-gray-600 hover:border-teal-300"}`}>
            {shown[i] ? "Hide Answer ↑" : "Show Answer ↓"}
          </button>
          {shown[i] && (
            <div className="mt-3 space-y-2">
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
                <p className="text-xs font-bold text-teal-600 uppercase tracking-wider mb-1">Answer</p>
                <p className="font-bold text-teal-800">{ex.answer}</p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Step-by-step solution</p>
                <p className="text-sm text-gray-700 leading-relaxed">{ex.solution}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Main Topic Page ───────────────────────────────────────────────────────────
export default function MathTopicPage({ topicId }: { topicId: string }) {
  const topic = getTopicById(topicId);
  const [activeTab, setActiveTab] = useState<Tab>("explain");

  if (!topic) return (
    <div className="text-center py-20">
      <p className="text-4xl mb-4">🔍</p>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Topic not found</h1>
      <Link href="/courses/mathematics" className="text-teal-600 hover:underline">← Back to Mathematics</Link>
    </div>
  );

  const tabs: { id: Tab; label: string; emoji: string }[] = [
    { id:"explain",   label:"Explanation", emoji:"📖" },
    { id:"examples",  label:"Examples",    emoji:"💡" },
    { id:"exercises", label:"Practice",    emoji:"✏️" },
    { id:"quiz",      label:"Quiz",        emoji:"🧠" },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6 flex-wrap">
        <Link href="/courses" className="hover:text-teal-600">Courses</Link>
        <span>/</span>
        <Link href="/courses/mathematics" className="hover:text-teal-600">Mathematics</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">{topic.title}</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <span className="text-5xl">{topic.emoji}</span>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full bg-white/20`}>{topic.level}</span>
              <span className="text-xs text-teal-200">{topic.category}</span>
            </div>
            <h1 className="text-2xl font-black mb-1">{topic.title}</h1>
            <p className="text-teal-200 text-sm">{topic.subtitle}</p>
          </div>
        </div>
        <p className="text-teal-100 text-sm mt-4 leading-relaxed">{topic.description}</p>
        {/* Key points preview */}
        <div className="mt-4 flex flex-wrap gap-2">
          {topic.keyPoints.slice(0,3).map((kp, i) => (
            <span key={i} className="text-xs bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white">
              ✓ {kp.length > 40 ? kp.slice(0,40)+"..." : kp}
            </span>
          ))}
        </div>
      </div>

      {/* Learning path indicator */}
      <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
        {tabs.map((tab, i) => (
          <div key={tab.id} className="flex items-center gap-2 flex-shrink-0">
            <button onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-bold border transition-all
                ${activeTab === tab.id
                  ? "bg-teal-600 text-white border-teal-700"
                  : "bg-white text-gray-600 border-gray-200 hover:border-teal-300"}`}
              style={activeTab === tab.id ? { boxShadow: "0 3px 0 #0F6E56" } : {}}>
              <span>{tab.emoji}</span>
              <span>{tab.label}</span>
            </button>
            {i < tabs.length - 1 && <span className="text-gray-300">→</span>}
          </div>
        ))}
      </div>

      {/* ── EXPLANATION TAB ── */}
      {activeTab === "explain" && (
        <div className="space-y-5">
          {/* Explanation paragraphs */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              📖 Understanding {topic.title}
            </h2>
            <div className="space-y-4">
              {topic.explanation.map((para, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">{para}</p>
              ))}
            </div>
          </div>

          {/* Key points */}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
            <h3 className="font-bold text-teal-900 mb-3 flex items-center gap-2">
              🔑 Key Points to Remember
            </h3>
            <ul className="space-y-2">
              {topic.keyPoints.map((kp, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-teal-800">
                  <span className="text-teal-500 mt-0.5 flex-shrink-0">✓</span>
                  <span>{kp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {topic.tags.map(tag => (
              <span key={tag} className="text-xs px-2.5 py-1 bg-gray-100 text-gray-500 rounded-full border border-gray-200">
                #{tag}
              </span>
            ))}
          </div>

          {/* Next step CTA */}
          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-sm text-indigo-700 font-semibold">Ready to see worked examples?</p>
            <button onClick={() => setActiveTab("examples")}
              className="bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700">
              See Examples 💡 →
            </button>
          </div>
        </div>
      )}

      {/* ── EXAMPLES TAB ── */}
      {activeTab === "examples" && (
        <div className="space-y-5">
          {topic.examples.map((ex, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-indigo-600 text-white px-5 py-3">
                <p className="text-xs font-bold uppercase tracking-wider opacity-75 mb-0.5">Example {i+1}</p>
                <p className="font-bold">{ex.title}</p>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Problem</p>
                  <p className="font-semibold text-gray-900">{ex.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Step-by-step Solution</p>
                  <div className="space-y-2">
                    {ex.steps.map((step, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="w-6 h-6 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {j+1}
                        </span>
                        <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-xl p-3 flex items-center gap-3">
                  <span className="text-teal-600 text-lg">✅</span>
                  <div>
                    <p className="text-xs font-bold text-teal-600 uppercase tracking-wider">Answer</p>
                    <p className="font-bold text-teal-800">{ex.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-sm text-amber-700 font-semibold">Now try it yourself!</p>
            <button onClick={() => setActiveTab("exercises")}
              className="bg-amber-500 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-amber-600">
              Practice Exercises ✏️ →
            </button>
          </div>
        </div>
      )}

      {/* ── EXERCISES TAB ── */}
      {activeTab === "exercises" && (
        <>
          <TopicExercises topic={topic} />
          <div className="mt-5 bg-teal-50 border border-teal-100 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-sm text-teal-700 font-semibold">Ready to test your knowledge?</p>
            <button onClick={() => setActiveTab("quiz")}
              className="bg-teal-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-teal-700">
              Take the Quiz 🧠 →
            </button>
          </div>
        </>
      )}

      {/* ── QUIZ TAB ── */}
      {activeTab === "quiz" && <TopicQuiz topic={topic} />}

      {/* Related topics */}
      {topic.relatedTopics.length > 0 && (
        <div className="mt-8 border-t border-gray-100 pt-6">
          <h3 className="font-bold text-gray-900 mb-4">🔗 Related Topics</h3>
          <div className="flex flex-wrap gap-3">
            {topic.relatedTopics.map(id => {
              const rel = getTopicById(id);
              if (!rel) return null;
              return (
                <Link key={id} href={`/courses/mathematics/${id}`}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-all group">
                  <span>{rel.emoji}</span>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-teal-600">{rel.title}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
