"use client";
// app/ielts/reading/ReadingPage.tsx (or ReadingHub.tsx)
// Loads IELTS reading passages from Firebase admin_ielts_reading
// Falls back to local passages if Firebase is empty

import { useState } from "react";
import Link from "next/link";
import { useAdminCollection } from "@/lib/useAdminCollection";

interface ReadingQ {
  id:               number;
  type:             string;
  q:                string;
  opts?:            string[];
  answer:           string;
  acceptedAnswers?: string[];
  explanation:      string;
  sentenceTemplate?: string;
}

interface Passage {
  id:        string;
  title:     string;
  tag:       string;
  level:     string;
  wordCount: number;
  text:      string;
  questions: ReadingQ[];
}

// ── Transform Firebase admin_ielts_reading → Passage[] ──────────────────────
function transformPassages(raw: Record<string, unknown>[]): Passage[] {
  // Format A: each doc is a passage with embedded questions
  if (raw[0]?.questions && Array.isArray(raw[0].questions)) {
    return raw
      .filter(r => r.id || r.passage_id)
      .map(r => ({
        id:        String(r.id || r.passage_id || ""),
        title:     String(r.title || ""),
        tag:       String(r.tag || "General"),
        level:     String(r.level || "Academic"),
        wordCount: Number(r.wordCount || r.word_count || 0),
        text:      String(r.text || ""),
        questions: (r.questions as Record<string, unknown>[]).map((q, i) => ({
          id:               Number(q.id || q.q_id || i + 1),
          type:             String(q.type || "mcq"),
          q:                String(q.q || q.question || ""),
          opts:             Array.isArray(q.opts) ? q.opts.map(String) : undefined,
          answer:           String(q.answer || ""),
          acceptedAnswers:  Array.isArray(q.acceptedAnswers) ? q.acceptedAnswers.map(String) : undefined,
          explanation:      String(q.explanation || ""),
          sentenceTemplate: q.sentenceTemplate ? String(q.sentenceTemplate) : undefined,
        })).filter(q => q.q),
      }))
      .filter(p => p.id && p.title && p.text);
  }

  // Format B: separate passage and question docs — group by passageId
  const passages: Record<string, Passage> = {};
  for (const item of raw) {
    const pid = String(item.id || item.passage_id || "");
    if (!pid) continue;
    if (item.text || item.passage_text) {
      passages[pid] = {
        id:        pid,
        title:     String(item.title || ""),
        tag:       String(item.tag || "General"),
        level:     String(item.level || "Academic"),
        wordCount: Number(item.wordCount || item.word_count || 0),
        text:      String(item.text || item.passage_text || ""),
        questions: passages[pid]?.questions || [],
      };
    } else if (item.q || item.question) {
      if (!passages[pid]) passages[pid] = { id:pid, title:"", tag:"General", level:"Academic", wordCount:0, text:"", questions:[] };
      passages[pid].questions.push({
        id:               Number(item.id || item.q_id || passages[pid].questions.length + 1),
        type:             String(item.type || "mcq"),
        q:                String(item.q || item.question || ""),
        opts:             Array.isArray(item.opts) ? item.opts.map(String) : undefined,
        answer:           String(item.answer || ""),
        acceptedAnswers:  item.accepted_answers ? String(item.accepted_answers).split("|") : undefined,
        explanation:      String(item.explanation || ""),
        sentenceTemplate: item.sentence_template ? String(item.sentence_template) : undefined,
      });
    }
  }
  return Object.values(passages).filter(p => p.title && p.text);
}

const LEVEL_COLORS: Record<string, string> = {
  Academic:         "bg-indigo-100 text-indigo-700",
  "General Training":"bg-teal-100 text-teal-700",
  Advanced:         "bg-purple-100 text-purple-700",
  Intermediate:     "bg-blue-100 text-blue-700",
};

const TYPE_COLORS: Record<string, string> = {
  mcq:                 "bg-indigo-50 text-indigo-600",
  tfng:                "bg-amber-50 text-amber-600",
  ynng:                "bg-purple-50 text-purple-600",
  sentence_completion: "bg-teal-50 text-teal-600",
  short_answer:        "bg-orange-50 text-orange-600",
};

// ── Inline question viewer (no separate page needed) ─────────────────────────
function PassageModal({ passage, onClose }: { passage: Passage; onClose: () => void }) {
  const [answers,   setAnswers]   = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? passage.questions.filter(q => {
        const a = (answers[q.id] || "").toLowerCase().trim();
        const accepted = [q.answer, ...(q.acceptedAnswers || [])].map(s => s.toLowerCase().trim());
        return accepted.includes(a);
      }).length
    : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-4xl w-full my-6 shadow-2xl" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="bg-indigo-600 text-white rounded-t-2xl p-5 flex justify-between items-start">
          <div>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{passage.level}</span>
            <h2 className="text-xl font-black mt-2">{passage.title}</h2>
            <p className="text-indigo-200 text-xs mt-1">{passage.wordCount} words · {passage.questions.length} questions</p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white text-xl">✕</button>
        </div>

        <div className="p-6 grid lg:grid-cols-2 gap-6">
          {/* Passage text */}
          <div className="bg-gray-50 rounded-xl p-5 max-h-[60vh] overflow-y-auto">
            <p className="text-xs font-bold text-gray-400 mb-3 uppercase tracking-wide">Passage</p>
            {passage.text.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed mb-3">{para}</p>
            ))}
          </div>

          {/* Questions */}
          <div className="max-h-[60vh] overflow-y-auto space-y-4">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Questions</p>

            {submitted && (
              <div className={`rounded-xl p-4 text-center ${score >= passage.questions.length * 0.7 ? "bg-green-50 border border-green-200" : "bg-amber-50 border border-amber-200"}`}>
                <p className="text-2xl font-black">{score}/{passage.questions.length}</p>
                <p className="text-sm text-gray-600">{score >= passage.questions.length * 0.7 ? "Great work!" : "Keep practising!"}</p>
              </div>
            )}

            {passage.questions.map((q, i) => {
              const userAns = answers[q.id] || "";
              const accepted = [q.answer, ...(q.acceptedAnswers || [])].map(s => s.toLowerCase().trim());
              const correct = submitted ? accepted.includes(userAns.toLowerCase().trim()) : null;
              return (
                <div key={q.id} className={`bg-white border rounded-xl p-4 ${correct === true ? "border-green-300" : correct === false ? "border-red-300" : "border-gray-200"}`}>
                  <div className="flex items-start gap-2 mb-3">
                    <span className="text-xs font-black text-gray-400 mt-0.5">{i + 1}.</span>
                    <div className="flex-1">
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full mr-2 ${TYPE_COLORS[q.type] || "bg-gray-100 text-gray-600"}`}>
                        {q.type.replace("_", " ")}
                      </span>
                      <p className="text-sm font-semibold text-gray-900 mt-1">
                        {q.sentenceTemplate || q.q}
                      </p>
                    </div>
                  </div>

                  {q.type === "mcq" && q.opts ? (
                    <div className="space-y-1.5">
                      {q.opts.map(opt => {
                        const letter = opt[0];
                        const chosen = answers[q.id] === letter;
                        const isCorrect = submitted && letter === q.answer;
                        const isWrong = submitted && chosen && letter !== q.answer;
                        return (
                          <button key={opt}
                            onClick={() => !submitted && setAnswers(a => ({ ...a, [q.id]: letter }))}
                            className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-all
                              ${isCorrect ? "bg-green-100 border-green-400 text-green-800 font-semibold" :
                                isWrong   ? "bg-red-100 border-red-400 text-red-800" :
                                chosen    ? "bg-indigo-100 border-indigo-400 text-indigo-800 font-semibold" :
                                "border-gray-200 text-gray-700 hover:border-indigo-300"}`}>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  ) : q.type === "tfng" || q.type === "ynng" ? (
                    <div className="flex gap-2">
                      {(q.type === "tfng" ? ["TRUE","FALSE","NOT GIVEN"] : ["YES","NO","NOT GIVEN"]).map(opt => {
                        const chosen = answers[q.id] === opt;
                        const isCorrect = submitted && opt === q.answer;
                        return (
                          <button key={opt}
                            onClick={() => !submitted && setAnswers(a => ({ ...a, [q.id]: opt }))}
                            className={`flex-1 py-2 rounded-lg border text-xs font-semibold transition-all
                              ${isCorrect ? "bg-green-100 border-green-400 text-green-800" :
                                submitted && chosen ? "bg-red-100 border-red-400 text-red-800" :
                                chosen ? "bg-indigo-100 border-indigo-400 text-indigo-800" :
                                "border-gray-200 text-gray-600 hover:border-indigo-300"}`}>
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <input type="text"
                      value={answers[q.id] || ""}
                      onChange={e => !submitted && setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                      placeholder="Write your answer…"
                      disabled={submitted}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-indigo-400 disabled:bg-gray-50" />
                  )}

                  {submitted && (
                    <p className={`text-xs mt-2 px-3 py-1.5 rounded-lg ${correct ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
                      {correct ? "✓ Correct!" : `✗ Answer: ${q.answer}`}
                      {q.explanation ? ` — ${q.explanation}` : ""}
                    </p>
                  )}
                </div>
              );
            })}

            {!submitted ? (
              <button
                onClick={() => setSubmitted(true)}
                disabled={Object.keys(answers).length < passage.questions.length}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 transition-all">
                {Object.keys(answers).length < passage.questions.length
                  ? `${Object.keys(answers).length}/${passage.questions.length} answered`
                  : "Submit Answers →"}
              </button>
            ) : (
              <button onClick={() => { setAnswers({}); setSubmitted(false); }}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all">
                Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main Reading Hub ──────────────────────────────────────────────────────────
export default function ReadingHub({ localPassages = [] }: { localPassages?: Passage[] }) {
  const [selected, setSelected] = useState<Passage | null>(null);

  const { data: passages, loading, fromFirebase } = useAdminCollection(
    "admin_ielts_reading",
    transformPassages,
    localPassages
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600">IELTS</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">Reading</span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="text-5xl">📖</span>
        <div>
          <h1 className="text-3xl font-black text-gray-900 mb-1">IELTS Reading Practice</h1>
          <p className="text-gray-500 text-sm">
            {loading ? "Loading passages…" : `${passages.length} passages available`}
            {fromFirebase && <span className="ml-2 text-indigo-600 font-semibold">· {passages.length} from admin</span>}
          </p>
        </div>
      </div>

      {/* Loading skeletons */}
      {loading && (
        <div className="grid sm:grid-cols-2 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-full mb-1" />
              <div className="h-3 bg-gray-100 rounded w-4/5 mb-4" />
              <div className="h-10 bg-gray-200 rounded-xl" />
            </div>
          ))}
        </div>
      )}

      {/* Passage cards */}
      {!loading && passages.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p className="font-semibold">No passages yet</p>
          <p className="text-sm mt-1">Upload passages via the admin panel</p>
        </div>
      )}

      {!loading && passages.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {passages.map(passage => (
            <div key={passage.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${LEVEL_COLORS[passage.level] || "bg-gray-100 text-gray-600"}`}>
                  {passage.level}
                </span>
                <span className="text-xs text-gray-400">{passage.wordCount} words</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{passage.title}</h3>
              <p className="text-gray-500 text-xs mb-1">{passage.tag}</p>
              <p className="text-gray-400 text-xs mb-4">{passage.questions.length} questions</p>
              <button onClick={() => setSelected(passage)}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all">
                Start Practice →
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Passage modal */}
      {selected && <PassageModal passage={selected} onClose={() => setSelected(null)} />}

      <div className="mt-8 text-center">
        <Link href="/ielts" className="text-indigo-600 text-sm font-semibold hover:underline">
          ← Back to IELTS Hub
        </Link>
      </div>
    </div>
  );
}
