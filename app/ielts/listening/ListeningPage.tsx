"use client";
import { useState } from "react";
import Link from "next/link";

interface ListeningQ {
  id: number;
  q: string;
  type: "fill" | "mcq";
  opts?: string[];
  answer: string;
  hint?: string;
}

interface Section {
  num: number;
  title: string;
  context: string;
  transcript: string;
  questions: ListeningQ[];
}

const SECTIONS: Section[] = [
  {
    num: 1,
    title: "Section 1 — Everyday Conversation",
    context: "A customer calls a local sports centre to enquire about membership options.",
    transcript: `Receptionist: Good morning, Riverside Sports Centre. How can I help you?
Customer: Hi, I'm interested in joining the centre. Could you tell me about your membership options?
Receptionist: Of course. We have three types. A basic membership is £25 per month, which gives you access to the gym and the swimming pool during off-peak hours — that's before 4pm on weekdays.
Customer: And what about peak hours?
Receptionist: For full access including evenings and weekends, the standard membership is £40 per month. We also have a premium option at £55 which includes unlimited classes such as yoga, spinning and pilates.
Customer: Great. How do I sign up?
Receptionist: You can register online, or come in and fill out a form at reception. You'll need a passport or driving licence for identification, and your bank details for the direct debit.
Customer: Is there a joining fee?
Receptionist: Yes, there's a one-off joining fee of £15 for all memberships. However, if you sign up before the end of the month we're waiving it as part of our summer promotion.
Customer: Excellent. My name is Sarah Collins — C-O-L-L-I-N-S.
Receptionist: Perfect, I've noted that. Can I take your email address to send you the registration link?
Customer: It's sarah.collins@mailbox.com.
Receptionist: Wonderful. You'll receive an email within 24 hours. Is there anything else?
Customer: No, that covers everything. Thank you very much.`,
    questions: [
      { id: 1, type: "fill", q: "The basic membership costs £_____ per month.", answer: "25", hint: "Listen for the price mentioned for basic access." },
      { id: 2, type: "fill", q: "The premium membership includes unlimited _____, spinning and pilates.", answer: "yoga", hint: "Three types of classes are mentioned." },
      { id: 3, type: "fill", q: "The one-off joining fee is £_____.", answer: "15", hint: "The receptionist mentions this after discussing the membership types." },
      { id: 4, type: "fill", q: "The customer's surname is _____.", answer: "Collins", hint: "The customer spells it out." },
      { id: 5, type: "mcq",  q: "When can the joining fee be waived?", opts: ["A. Always, for new members", "B. If signing up online only", "C. Before the end of the month during a promotion", "D. If paying annually"], answer: "C", hint: "The receptionist explains a condition for waiving the fee." },
    ],
  },
  {
    num: 2,
    title: "Section 2 — Monologue",
    context: "A guide gives a talk about a local nature reserve to a group of visitors.",
    transcript: `Welcome, everyone, to the Greenwood Nature Reserve. My name is David, and I'll be your guide today. Before we begin our walk, let me give you a brief overview of what you can expect.

The reserve covers approximately 450 hectares and contains three distinct ecosystems: ancient woodland, freshwater wetlands, and open meadows. Each supports a unique range of wildlife. The woodland area, which we'll visit first, is home to over 60 species of birds, including the rare red kite. The wetlands, in the centre of the reserve, support a significant population of otters as well as various amphibians.

Our walk today will take approximately two hours. The full route is 6 kilometres, though there is a shorter 3-kilometre loop if anyone has mobility concerns — please let me know and I'll ensure you're not left behind. The terrain is mostly flat, though there are two gentle hills in the eastern section near the meadows.

A few important reminders: please stay on the marked paths at all times, as going off-trail can disturb nesting wildlife. Dogs are permitted but must remain on a lead throughout. Photography is encouraged — the reserve is particularly photogenic at this time of year. Finally, a small gift shop and café are located at the exit. The café offers hot drinks and light snacks, and proceeds from both help fund the reserve's conservation programmes.`,
    questions: [
      { id: 1, type: "fill", q: "The reserve covers approximately _____ hectares.", answer: "450", hint: "A specific number is given at the start of the description." },
      { id: 2, type: "fill", q: "The woodland area is home to over _____ species of birds.", answer: "60", hint: "Listen for the number given about the woodland." },
      { id: 3, type: "mcq", q: "Where are the otters located in the reserve?", opts: ["A. In the ancient woodland", "B. In the open meadows", "C. In the freshwater wetlands", "D. Near the entrance"], answer: "C", hint: "The guide describes the central area of the reserve." },
      { id: 4, type: "fill", q: "The shorter walking loop is _____ kilometres.", answer: "3", hint: "An alternative route length is mentioned." },
      { id: 5, type: "mcq", q: "What do the café and gift shop proceeds support?", opts: ["A. Staff salaries", "B. The reserve's conservation programmes", "C. Free entry for school groups", "D. New walking trail construction"], answer: "B", hint: "The guide mentions this at the very end of his talk." },
    ],
  },
];

type Answers = Record<number, string>;
type Results = { score: number; total: number } | null;

export default function ListeningPage() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<Results>(null);
  const [showTranscript, setShowTranscript] = useState(false);

  function start(s: Section) {
    setActiveSection(s);
    setAnswers({});
    setResults(null);
    setShowTranscript(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submit() {
    if (!activeSection) return;
    const total = activeSection.questions.length;
    const score = activeSection.questions.reduce((acc, q) => {
      const given = (answers[q.id] ?? "").toLowerCase().trim();
      return acc + (given === q.answer.toLowerCase() ? 1 : 0);
    }, 0);
    setResults({ score, total });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (activeSection) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
          <span>›</span>
          <Link href="/ielts/listening" className="hover:text-indigo-600 transition-colors">Listening</Link>
          <span>›</span>
          <span className="text-gray-600 font-medium">Section {activeSection.num}</span>
        </div>

        {results && (
          <div className={`rounded-2xl p-6 mb-8 text-center ${results.score >= 3 ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}>
            <p className="text-4xl font-black mb-1" style={{ color: results.score >= 3 ? "#16a34a" : "#d97706" }}>{results.score} / {results.total}</p>
            <p className="font-semibold text-gray-700 mb-2">{results.score === results.total ? "Perfect score!" : results.score >= 3 ? "Good work!" : "Keep practising!"}</p>
            <button onClick={() => setShowTranscript(true)} className="mr-3 text-sm text-indigo-600 font-semibold underline">View Transcript</button>
            <button onClick={() => setActiveSection(null)} className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">Try Another Section</button>
          </div>
        )}

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-6">
          <h2 className="font-bold text-emerald-800 mb-1">{activeSection.title}</h2>
          <p className="text-emerald-700 text-sm">{activeSection.context}</p>
        </div>

        {/* Transcript (shown after submit or on request) */}
        {showTranscript && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-700">Transcript</h3>
              <button onClick={() => setShowTranscript(false)} className="text-sm text-gray-400 hover:text-gray-600">Hide</button>
            </div>
            <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{activeSection.transcript}</pre>
          </div>
        )}

        {!showTranscript && !results && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 text-sm text-amber-800">
            <strong>Instructions:</strong> Read the context above carefully. In the real exam, you would listen to an audio recording. Here, read the questions and answer based on your comprehension skills.
            <button onClick={() => setShowTranscript(true)} className="ml-2 underline font-semibold">Read the transcript</button> to answer the questions.
          </div>
        )}

        <div className="space-y-5 mb-8">
          <h2 className="font-bold text-gray-900 text-lg">Questions</h2>
          {activeSection.questions.map((q, i) => {
            const given = (answers[q.id] ?? "").toLowerCase().trim();
            const correct = results && given === q.answer.toLowerCase();
            const wrong = results && given !== q.answer.toLowerCase();
            return (
              <div key={q.id} className={`bg-white border rounded-2xl p-5 ${results ? (correct ? "border-green-300 bg-green-50/40" : "border-red-300 bg-red-50/30") : "border-gray-200"}`}>
                <p className="font-semibold text-gray-900 mb-3">
                  <span className="text-emerald-600 mr-2">{i + 1}.</span>
                  {q.q}
                </p>
                {q.type === "fill" ? (
                  <input
                    type="text"
                    value={answers[q.id] ?? ""}
                    onChange={e => !results && setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                    placeholder="Type your answer…"
                    disabled={!!results}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-400 disabled:bg-gray-50"
                  />
                ) : (
                  <div className="space-y-2">
                    {(q.opts ?? []).map(opt => {
                      const letter = opt[0];
                      const chosen = answers[q.id] === letter;
                      const isCorrect = results && letter === q.answer;
                      const isWrong = results && chosen && letter !== q.answer;
                      return (
                        <button key={opt} onClick={() => !results && setAnswers(a => ({ ...a, [q.id]: letter }))}
                          className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all ${
                            isCorrect ? "bg-green-100 border-green-400 text-green-800 font-semibold" :
                            isWrong   ? "bg-red-100 border-red-400 text-red-800" :
                            chosen    ? "bg-emerald-100 border-emerald-400 text-emerald-800 font-semibold" :
                            "border-gray-200 text-gray-700 hover:border-emerald-300"
                          }`}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}
                {results && (
                  <div className={`mt-3 text-xs p-3 rounded-xl ${correct ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {correct ? "✓ Correct" : `✗ Correct answer: ${q.answer}`} — {q.hint}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!results && (
          <button onClick={submit} disabled={Object.keys(answers).length < activeSection.questions.length}
            className="w-full bg-emerald-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {Object.keys(answers).length < activeSection.questions.length
              ? `Answer all questions (${Object.keys(answers).length}/${activeSection.questions.length} done)`
              : "Submit Answers →"}
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
        <span>›</span>
        <span className="text-gray-600 font-medium">Listening</span>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🎧</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">IELTS Listening Practice</h1>
            <p className="text-gray-500 mt-1">All 4 section types with transcript-based question practice</p>
          </div>
        </div>
      </div>

      <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-5 mb-8">
        <h2 className="font-bold text-emerald-800 mb-2">About This Section</h2>
        <p className="text-emerald-700 text-sm leading-relaxed">
          The real IELTS Listening test uses audio recordings. Here, each section includes a written transcript you can read to practice all question types and build your listening vocabulary. Full audio integration is coming soon.
        </p>
      </div>

      {/* Section overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { num: 1, label: "Social Need", desc: "Everyday conversation between two people" },
          { num: 2, label: "Social Need", desc: "Monologue in an everyday context" },
          { num: 3, label: "Educational", desc: "Conversation in an academic context" },
          { num: 4, label: "Educational", desc: "Academic monologue or lecture" },
        ].map(s => (
          <div key={s.num} className={`bg-white border rounded-2xl p-4 text-center ${s.num <= 2 ? "border-emerald-200" : "border-gray-200 opacity-60"}`}>
            <p className="text-2xl font-black text-emerald-600 mb-1">{s.num}</p>
            <p className="text-xs font-semibold text-gray-700 mb-1">{s.label}</p>
            <p className="text-xs text-gray-400 leading-tight">{s.desc}</p>
            {s.num > 2 && <p className="text-xs text-gray-400 mt-2 font-medium">Coming soon</p>}
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-5">Available Practice Sections</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {SECTIONS.map(s => (
          <div key={s.num} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-medium">{s.title}</span>
            </div>
            <p className="text-gray-700 text-sm font-medium mb-1">{s.context}</p>
            <p className="text-gray-400 text-xs mb-4">{s.questions.length} questions · Transcript included</p>
            <button onClick={() => start(s)} className="w-full bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">
              Start Section {s.num} →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">Sections 3 & 4 with full audio coming soon</p>
        <Link href="/ielts" className="inline-block mt-4 text-indigo-600 text-sm font-semibold hover:underline">← Back to IELTS Hub</Link>
      </div>
    </div>
  );
}
