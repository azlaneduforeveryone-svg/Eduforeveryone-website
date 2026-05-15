"use client";
import { useState } from "react";
import Link from "next/link";

interface Question {
  id: number;
  type: "mcq" | "tfng";
  q: string;
  opts?: string[];
  answer: string;
  explanation: string;
}

interface Passage {
  id: string;
  title: string;
  tag: string;
  level: string;
  text: string;
  questions: Question[];
}

const PASSAGES: Passage[] = [
  {
    id: "sleep-science",
    title: "The Science of Sleep",
    tag: "Academic",
    level: "Band 6–7",
    text: `Sleep is one of the most fundamental biological processes shared by nearly all animals. Despite spending roughly one-third of their lives asleep, humans have only recently begun to understand why sleep is so essential. Scientists now know that sleep serves multiple critical functions, including memory consolidation, cellular repair and immune system regulation.

During sleep, the brain cycles through distinct stages known as REM (Rapid Eye Movement) and non-REM sleep. Non-REM sleep, which occurs first, consists of three progressively deeper stages. The deepest stage, slow-wave sleep, is when the body performs most of its physical restoration. Growth hormone is released, muscles are repaired, and the immune system strengthens. REM sleep, by contrast, is characterised by vivid dreaming and is believed to be essential for emotional processing and memory formation.

Research conducted at the University of Berkeley demonstrated that sleep deprivation significantly impairs cognitive function. Subjects who slept fewer than six hours per night for two weeks showed cognitive deficits equivalent to two full nights of total sleep loss. Remarkably, these individuals reported feeling only slightly sleepy, suggesting that people often underestimate the impact of chronic sleep restriction on their performance.

Modern lifestyles present numerous threats to healthy sleep. Artificial light — particularly the blue light emitted by smartphones and tablets — suppresses melatonin production, the hormone responsible for signalling sleep onset. Additionally, the increasing demands of work and social commitments have led many people to view sleep as a luxury rather than a necessity. Sleep scientists argue that this cultural attitude must change if society is to address the growing epidemic of sleep-related health problems, including obesity, diabetes and cardiovascular disease.`,
    questions: [
      {
        id: 1,
        type: "tfng",
        q: "Humans have understood the importance of sleep for a very long time.",
        answer: "FALSE",
        explanation: "The passage states humans have 'only recently begun to understand why sleep is so essential', contradicting this statement.",
      },
      {
        id: 2,
        type: "tfng",
        q: "Growth hormone is released during the deepest stage of non-REM sleep.",
        answer: "TRUE",
        explanation: "The passage explicitly states: 'Growth hormone is released, muscles are repaired' during slow-wave sleep (the deepest non-REM stage).",
      },
      {
        id: 3,
        type: "tfng",
        q: "The Berkeley study participants were fully aware of how impaired they had become.",
        answer: "FALSE",
        explanation: "The passage says they 'reported feeling only slightly sleepy', indicating they underestimated their impairment.",
      },
      {
        id: 4,
        type: "mcq",
        q: "According to the passage, which function does REM sleep primarily serve?",
        opts: [
          "A. Physical restoration and muscle repair",
          "B. Immune system strengthening",
          "C. Emotional processing and memory formation",
          "D. Melatonin production",
        ],
        answer: "C",
        explanation: "The passage states REM sleep 'is believed to be essential for emotional processing and memory formation'.",
      },
      {
        id: 5,
        type: "mcq",
        q: "What does the writer suggest about society's view of sleep?",
        opts: [
          "A. It is appropriately valued as a health priority",
          "B. It needs to change to combat health problems",
          "C. It has improved thanks to scientific research",
          "D. It only affects younger generations",
        ],
        answer: "B",
        explanation: "The passage says 'this cultural attitude must change if society is to address the growing epidemic of sleep-related health problems'.",
      },
    ],
  },
  {
    id: "urban-farming",
    title: "The Rise of Urban Farming",
    tag: "Academic",
    level: "Band 7–8",
    text: `Urban farming — the practice of cultivating food within city environments — has experienced a remarkable resurgence in recent decades. Once viewed as a relic of wartime necessity, it is now celebrated as an innovative solution to some of the most pressing challenges of the 21st century, from food security to environmental sustainability.

Proponents of urban agriculture cite numerous benefits. Locally grown produce requires significantly less transportation, thereby reducing carbon emissions associated with the global food supply chain. Rooftop gardens and vertical farms can also mitigate the urban heat island effect, where cities absorb and retain heat at higher rates than surrounding rural areas. Furthermore, community gardens have been shown to foster social cohesion, reduce crime rates in neglected urban spaces, and provide therapeutic benefits to participants.

Critics, however, question whether urban farming can ever be more than a supplement to conventional agriculture. Land in cities is expensive and limited; the yields per square metre achieved by rooftop gardens are typically far lower than those of large-scale rural operations. Water usage can also be intensive, and not all urban environments receive sufficient sunlight to support productive cultivation year-round.

Technological innovations are beginning to address some of these constraints. Hydroponic and aeroponic systems allow crops to grow without soil, using up to 90% less water than traditional agriculture. LED lighting technology has made indoor farming viable in buildings with limited natural light. Some companies are now operating fully automated vertical farms in former warehouses, producing leafy greens and herbs at competitive costs. Whether these advances will allow urban farming to scale sufficiently to make a meaningful contribution to a city's food needs remains an open question.`,
    questions: [
      {
        id: 1,
        type: "mcq",
        q: "How does the writer describe the historical perception of urban farming?",
        opts: [
          "A. As an innovative modern concept",
          "B. As something associated with wartime",
          "C. As a leading agricultural method",
          "D. As a threat to rural farming",
        ],
        answer: "B",
        explanation: "The passage states urban farming was 'once viewed as a relic of wartime necessity'.",
      },
      {
        id: 2,
        type: "tfng",
        q: "Community gardens have been proven to eliminate crime in urban areas.",
        answer: "FALSE",
        explanation: "The passage says gardens 'reduce crime rates', not eliminate them. 'Proven to eliminate' is too strong and inaccurate.",
      },
      {
        id: 3,
        type: "tfng",
        q: "Hydroponic systems use considerably less water than conventional farming.",
        answer: "TRUE",
        explanation: "The passage states these systems use 'up to 90% less water than traditional agriculture'.",
      },
      {
        id: 4,
        type: "mcq",
        q: "Which of the following is NOT mentioned as a challenge facing urban farming?",
        opts: [
          "A. High land costs in cities",
          "B. Lower yields compared to rural farms",
          "C. Lack of consumer interest",
          "D. Insufficient sunlight in some locations",
        ],
        answer: "C",
        explanation: "Lack of consumer interest is never mentioned. The passage raises land costs, lower yields and sunlight issues.",
      },
      {
        id: 5,
        type: "mcq",
        q: "What is the writer's overall tone regarding the future of urban farming?",
        opts: [
          "A. Fully optimistic — urban farming will replace traditional agriculture",
          "B. Entirely negative — the challenges are insurmountable",
          "C. Cautiously uncertain — the potential is there but questions remain",
          "D. Indifferent — the topic is of little practical importance",
        ],
        answer: "C",
        explanation: "The final sentence 'remains an open question' reflects cautious uncertainty, balanced between promise and unresolved challenges.",
      },
    ],
  },
];

type UserAnswers = Record<number, string>;
type ResultState = { score: number; total: number } | null;

export default function ReadingPage() {
  const [selected, setSelected] = useState<Passage | null>(null);
  const [answers, setAnswers]   = useState<UserAnswers>({});
  const [result, setResult]     = useState<ResultState>(null);

  function startPassage(p: Passage) {
    setSelected(p);
    setAnswers({});
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submit() {
    if (!selected) return;
    const total = selected.questions.length;
    const score = selected.questions.reduce((acc, q) => {
      const given = (answers[q.id] ?? "").toUpperCase().trim();
      return acc + (given === q.answer ? 1 : 0);
    }, 0);
    setResult({ score, total });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function reset() {
    setSelected(null);
    setAnswers({});
    setResult(null);
  }

  if (selected) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
          <span>›</span>
          <Link href="/ielts/reading" className="hover:text-indigo-600 transition-colors">Reading</Link>
          <span>›</span>
          <span className="text-gray-600 font-medium">{selected.title}</span>
        </div>

        {/* Result banner */}
        {result && (
          <div className={`rounded-2xl p-6 mb-8 text-center ${result.score >= Math.ceil(result.total * 0.6) ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}>
            <p className="text-4xl font-black mb-1" style={{ color: result.score >= Math.ceil(result.total * 0.6) ? "#16a34a" : "#d97706" }}>
              {result.score} / {result.total}
            </p>
            <p className="font-semibold text-gray-700">{result.score === result.total ? "Perfect score! Excellent work." : result.score >= Math.ceil(result.total * 0.6) ? "Good work — review the ones you missed." : "Keep practising — check the explanations below."}</p>
            <button onClick={reset} className="mt-4 bg-indigo-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors">
              Try Another Passage
            </button>
          </div>
        )}

        {/* Header */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-medium">{selected.tag}</span>
            <span className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">{selected.level}</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">{selected.title}</h1>
        </div>

        {/* Passage */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider">Reading Passage</h2>
          {selected.text.split("\n\n").map((para, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4 last:mb-0">{para}</p>
          ))}
        </div>

        {/* Questions */}
        <div className="space-y-6 mb-8">
          <h2 className="font-bold text-gray-900 text-lg">Questions</h2>
          {selected.questions.map((q, i) => (
            <div key={q.id} className={`bg-white border rounded-2xl p-5 ${result ? (answers[q.id]?.toUpperCase().trim() === q.answer ? "border-green-300 bg-green-50/40" : "border-red-300 bg-red-50/30") : "border-gray-200"}`}>
              <p className="font-semibold text-gray-900 mb-3">
                <span className="text-indigo-600 mr-2">{i + 1}.</span>
                {q.type === "tfng" && <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full mr-2 font-medium">True / False / Not Given</span>}
                {q.q}
              </p>

              {q.type === "mcq" && q.opts && (
                <div className="space-y-2">
                  {q.opts.map(opt => {
                    const letter = opt[0];
                    const chosen = answers[q.id] === letter;
                    const correct = result && letter === q.answer;
                    const wrong = result && chosen && letter !== q.answer;
                    return (
                      <button key={opt} onClick={() => !result && setAnswers(a => ({ ...a, [q.id]: letter }))}
                        className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all ${
                          correct ? "bg-green-100 border-green-400 text-green-800 font-semibold" :
                          wrong   ? "bg-red-100 border-red-400 text-red-800" :
                          chosen  ? "bg-indigo-100 border-indigo-400 text-indigo-800 font-semibold" :
                          "border-gray-200 text-gray-700 hover:border-indigo-300"
                        }`}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {q.type === "tfng" && (
                <div className="flex flex-wrap gap-2">
                  {["TRUE", "FALSE", "NOT GIVEN"].map(opt => {
                    const chosen = answers[q.id] === opt;
                    const correct = result && opt === q.answer;
                    const wrong = result && chosen && opt !== q.answer;
                    return (
                      <button key={opt} onClick={() => !result && setAnswers(a => ({ ...a, [q.id]: opt }))}
                        className={`px-4 py-2 rounded-xl border text-sm font-semibold transition-all ${
                          correct ? "bg-green-100 border-green-400 text-green-800" :
                          wrong   ? "bg-red-100 border-red-400 text-red-800" :
                          chosen  ? "bg-indigo-100 border-indigo-400 text-indigo-800" :
                          "border-gray-200 text-gray-600 hover:border-indigo-300"
                        }`}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {result && (
                <div className={`mt-3 text-xs p-3 rounded-xl ${answers[q.id]?.toUpperCase().trim() === q.answer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  <span className="font-bold">{answers[q.id]?.toUpperCase().trim() === q.answer ? "✓ Correct" : `✗ Correct answer: ${q.answer}`}</span> — {q.explanation}
                </div>
              )}
            </div>
          ))}
        </div>

        {!result && (
          <button onClick={submit} disabled={Object.keys(answers).length < selected.questions.length}
            className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {Object.keys(answers).length < selected.questions.length
              ? `Answer all questions (${Object.keys(answers).length}/${selected.questions.length} done)`
              : "Submit Answers →"}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
        <span>›</span>
        <span className="text-gray-600 font-medium">Reading</span>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">📖</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">IELTS Reading Practice</h1>
            <p className="text-gray-500 mt-1">Academic passages with instant scoring and answer explanations</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {["Multiple Choice","True / False / Not Given","Gap Fill (coming soon)","Matching (coming soon)"].map(t => (
            <span key={t} className="text-xs bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full font-medium">{t}</span>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-5 mb-8">
        <h2 className="font-bold text-indigo-800 mb-2">Reading Tips</h2>
        <ul className="text-sm text-indigo-700 space-y-1">
          <li>• Skim the passage first to get the main idea, then read questions before reading in detail</li>
          <li>• For True/False/Not Given — "Not Given" means the information is not in the passage at all</li>
          <li>• Answers follow the order of the passage for most question types</li>
        </ul>
      </div>

      {/* Passage cards */}
      <h2 className="text-xl font-bold text-gray-900 mb-5">Choose a Passage</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {PASSAGES.map(p => (
          <div key={p.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs bg-indigo-100 text-indigo-700 px-2.5 py-1 rounded-full font-medium">{p.tag}</span>
              <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{p.level}</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{p.title}</h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.text.slice(0, 120)}…</p>
            <div className="flex items-center justify-between">
              <span className="text-xs text-gray-400">{p.questions.length} questions</span>
              <button onClick={() => startPassage(p)} className="bg-indigo-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors">
                Start →
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">More passages coming soon — including General Training texts</p>
        <Link href="/ielts" className="inline-block mt-4 text-indigo-600 text-sm font-semibold hover:underline">← Back to IELTS Hub</Link>
      </div>
    </div>
  );
}
