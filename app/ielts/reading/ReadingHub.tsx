"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import { useAdminCollection } from "@/lib/useAdminCollection";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ReadingQ {
  id: number; type: string; q: string;
  opts?: string[]; answer: string;
  acceptedAnswers?: string[]; explanation: string; sentenceTemplate?: string;
}
interface Passage {
  id: string; title: string; tag: string; level: string;
  wordCount: number; text: string; questions: ReadingQ[];
}

// ── Constants ─────────────────────────────────────────────────────────────────
const QUESTIONS_PER_PASSAGE = 13;
const LABELS = ["A","B","C","D"] as const;

// ── Helpers ───────────────────────────────────────────────────────────────────
function fisherYates<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleMCQOptions(q: ReadingQ): ReadingQ {
  if (q.type !== "mcq" || !q.opts || q.opts.length < 2) return q;
  const texts = q.opts.map(o => o.slice(3));
  const correctIdx = LABELS.indexOf(q.answer as typeof LABELS[number]);
  const correctText = texts[correctIdx] ?? texts[0];
  const shuffled = fisherYates(texts);
  const newIdx = shuffled.indexOf(correctText);
  return { ...q, opts: shuffled.map((t, i) => `${LABELS[i]}. ${t}`), answer: LABELS[newIdx] ?? "A" };
}

function selectQuestions(questions: ReadingQ[], count: number): ReadingQ[] {
  return fisherYates(questions).slice(0, Math.min(count, questions.length)).map(shuffleMCQOptions);
}

function grade(userAns: string, q: ReadingQ): boolean {
  const u = userAns.toLowerCase().trim().replace(/[.,]/g,"");
  const checks = [q.answer, ...(q.acceptedAnswers||[])].map(a => a.toLowerCase().trim().replace(/[.,]/g,""));
  return checks.some(c => u===c || u===c.replace(/^the /,"") || (u.length>2 && c===u));
}

// ── Transform Firebase → Passage[] ───────────────────────────────────────────
function transformPassages(raw: Record<string, unknown>[]): Passage[] {
  if (!raw.length) return [];
  if (raw[0]?.questions && Array.isArray(raw[0].questions)) {
    return raw.filter(r => r.id || r.passage_id).map(r => ({
      id: String(r.id || r.passage_id || ""),
      title: String(r.title || ""),
      tag: String(r.tag || "General"),
      level: String(r.level || "Academic"),
      wordCount: Number(r.wordCount || r.word_count || 0),
      text: String(r.text || ""),
      questions: (r.questions as Record<string,unknown>[]).map((q,i) => ({
        id: Number(q.id || q.q_id || i+1),
        type: String(q.type || "mcq"),
        q: String(q.q || q.question || ""),
        opts: Array.isArray(q.opts) ? q.opts.map(String) : undefined,
        answer: String(q.answer || ""),
        acceptedAnswers: Array.isArray(q.acceptedAnswers) ? q.acceptedAnswers.map(String) : undefined,
        explanation: String(q.explanation || ""),
        sentenceTemplate: q.sentenceTemplate ? String(q.sentenceTemplate) : undefined,
      })).filter(q => q.q),
    })).filter(p => p.title && p.text);
  }
  const map: Record<string, Passage> = {};
  for (const item of raw) {
    const pid = String(item.id || item.passage_id || "");
    if (!pid) continue;
    if (item.text || item.passage_text) {
      map[pid] = { id:pid, title:String(item.title||""), tag:String(item.tag||"General"),
        level:String(item.level||"Academic"), wordCount:Number(item.wordCount||0),
        text:String(item.text||item.passage_text||""), questions: map[pid]?.questions||[] };
    } else if (item.q || item.question) {
      if (!map[pid]) map[pid]={id:pid,title:"",tag:"General",level:"Academic",wordCount:0,text:"",questions:[]};
      map[pid].questions.push({
        id:Number(item.id||map[pid].questions.length+1), type:String(item.type||"mcq"),
        q:String(item.q||item.question||""),
        opts:Array.isArray(item.opts)?item.opts.map(String):undefined,
        answer:String(item.answer||""),
        acceptedAnswers:item.accepted_answers?String(item.accepted_answers).split("|"):undefined,
        explanation:String(item.explanation||""),
        sentenceTemplate:item.sentence_template?String(item.sentence_template):undefined,
      });
    }
  }
  return Object.values(map).filter(p=>p.title&&p.text);
}

const LEVEL_COLORS: Record<string,string> = {
  "Academic":"bg-indigo-100 text-indigo-700","General Training":"bg-teal-100 text-teal-700",
  "Advanced":"bg-purple-100 text-purple-700","Intermediate":"bg-blue-100 text-blue-700",
};
const TFNG_OPTS = ["TRUE","FALSE","NOT GIVEN"];
const YNNG_OPTS = ["YES","NO","NOT GIVEN"];
const PARA_OPTS = ["A","B","C","D","E","F"];

// ── Passage Modal ─────────────────────────────────────────────────────────────
function PassageModal({ passage, sessionQs, onClose, startNum }:
  { passage: Passage; sessionQs: ReadingQ[]; onClose: () => void; startNum: number }) {
  const [answers,   setAnswers]   = useState<Record<number,string>>({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? sessionQs.filter(q => grade(answers[q.id]||"", q)).length : 0;
  const answered = Object.keys(answers).length;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-5xl w-full my-6 shadow-2xl" onClick={e=>e.stopPropagation()}>
        {/* Header */}
        <div className="bg-indigo-600 text-white rounded-t-2xl p-5 flex justify-between items-start">
          <div>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">{passage.level}</span>
            <h2 className="text-xl font-black mt-2">{passage.title}</h2>
            <p className="text-indigo-200 text-xs mt-1">
              {passage.wordCount} words · Questions {startNum}–{startNum + sessionQs.length - 1}
              {" "}· {sessionQs.length} questions (randomly selected)
            </p>
          </div>
          <button onClick={onClose} className="text-white/70 hover:text-white text-xl">✕</button>
        </div>

        <div className="p-5 grid lg:grid-cols-2 gap-5">
          {/* Passage */}
          <div className="bg-gray-50 rounded-xl p-5 max-h-[65vh] overflow-y-auto">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Reading Passage</p>
            {passage.text.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-gray-700 leading-relaxed mb-3">{para.replace(/\[.*?\]/g,"")}</p>
            ))}
          </div>

          {/* Questions */}
          <div className="max-h-[65vh] overflow-y-auto space-y-4">
            {submitted && (
              <div className={`rounded-xl p-4 text-center ${score>=Math.ceil(sessionQs.length*0.7)?"bg-green-50 border border-green-200":"bg-amber-50 border border-amber-200"}`}>
                <p className="text-3xl font-black">{score}/{sessionQs.length}</p>
                <p className="text-sm text-gray-600 mt-1">{score>=Math.ceil(sessionQs.length*0.7)?"Great work! 👍":"Keep practising! 📚"}</p>
              </div>
            )}

            {sessionQs.map((q, i) => {
              const num = startNum + i;
              const userAns = answers[q.id] || "";
              const correct = submitted ? grade(userAns, q) : null;
              return (
                <div key={q.id}
                  className={`bg-white border rounded-xl p-4 ${correct===true?"border-emerald-300 bg-emerald-50/30":correct===false?"border-red-300 bg-red-50/20":"border-gray-200"}`}>
                  <div className="flex items-start gap-2 mb-3">
                    <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 ${correct===true?"bg-emerald-100 text-emerald-700":correct===false?"bg-red-100 text-red-600":"bg-indigo-100 text-indigo-700"}`}>{num}</span>
                    <div className="flex-1">
                      {q.type==="tfng"&&<span className="text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded mr-1 font-bold">T/F/NG</span>}
                      {q.type==="ynng"&&<span className="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded mr-1 font-bold">Y/N/NG</span>}
                      {q.type==="mcq"&&<span className="text-xs bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded mr-1 font-bold">MCQ</span>}
                      <p className="inline text-sm font-semibold text-gray-900">{q.sentenceTemplate||q.q}</p>
                    </div>
                  </div>

                  {q.type==="tfng"&&(
                    <div className="flex gap-2 pl-9">
                      {TFNG_OPTS.map(opt=>{
                        const chosen=userAns.toUpperCase()===opt;
                        const isRight=submitted&&q.answer.toUpperCase()===opt;
                        const isWrong=submitted&&chosen&&q.answer.toUpperCase()!==opt;
                        return <button key={opt} disabled={submitted} onClick={()=>setAnswers(a=>({...a,[q.id]:opt}))}
                          className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all ${isRight?"bg-emerald-100 border-emerald-400 text-emerald-800":isWrong?"bg-red-100 border-red-400 text-red-800":chosen?"bg-indigo-100 border-indigo-400 text-indigo-900":"border-gray-200 hover:border-indigo-300"}`}>{opt}</button>;
                      })}
                    </div>
                  )}

                  {q.type==="ynng"&&(
                    <div className="flex gap-2 pl-9">
                      {YNNG_OPTS.map(opt=>{
                        const chosen=userAns.toUpperCase()===opt;
                        const isRight=submitted&&q.answer.toUpperCase()===opt;
                        const isWrong=submitted&&chosen&&q.answer.toUpperCase()!==opt;
                        return <button key={opt} disabled={submitted} onClick={()=>setAnswers(a=>({...a,[q.id]:opt}))}
                          className={`flex-1 py-1.5 rounded-lg border text-xs font-bold transition-all ${isRight?"bg-emerald-100 border-emerald-400 text-emerald-800":isWrong?"bg-red-100 border-red-400 text-red-800":chosen?"bg-indigo-100 border-indigo-400 text-indigo-900":"border-gray-200 hover:border-indigo-300"}`}>{opt}</button>;
                      })}
                    </div>
                  )}

                  {q.type==="mcq"&&q.opts&&(
                    <div className="space-y-1.5 pl-9">
                      {q.opts.map(opt=>{
                        const letter=opt[0];
                        const chosen=userAns===letter;
                        const isRight=submitted&&letter===q.answer;
                        const isWrong=submitted&&chosen&&letter!==q.answer;
                        return <button key={opt} disabled={submitted} onClick={()=>setAnswers(a=>({...a,[q.id]:letter}))}
                          className={`w-full text-left px-3 py-2 rounded-lg border text-sm transition-all ${isRight?"bg-emerald-100 border-emerald-400 text-emerald-800 font-semibold":isWrong?"bg-red-100 border-red-400 text-red-800":chosen?"bg-indigo-100 border-indigo-400 text-indigo-900 font-semibold":"border-gray-200 hover:border-indigo-300"}`}>{opt}</button>;
                      })}
                    </div>
                  )}

                  {["matching_headings","matching_info"].includes(q.type)&&(
                    <div className="flex gap-2 flex-wrap pl-9">
                      {(q.type==="matching_info"?PARA_OPTS:["i","ii","iii","iv","v","vi","vii","viii"]).map(opt=>{
                        const chosen=userAns===opt;
                        const isRight=submitted&&q.answer===opt;
                        const isWrong=submitted&&chosen&&q.answer!==opt;
                        return <button key={opt} disabled={submitted} onClick={()=>setAnswers(a=>({...a,[q.id]:opt}))}
                          className={`px-3 py-1.5 rounded-lg border text-xs font-bold transition-all ${isRight?"bg-emerald-100 border-emerald-400 text-emerald-800":isWrong?"bg-red-100 border-red-400 text-red-800":chosen?"bg-indigo-100 border-indigo-400 text-indigo-900":"border-gray-200 hover:border-indigo-300"}`}>{opt}</button>;
                      })}
                    </div>
                  )}

                  {["fill","word_box","short_answer","sentence_completion","summary_completion"].includes(q.type)&&(
                    <div className="pl-9">
                      <input type="text" disabled={submitted} value={userAns}
                        onChange={e=>setAnswers(a=>({...a,[q.id]:e.target.value}))}
                        placeholder="Write your answer (words from passage)…"
                        className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none disabled:bg-gray-50 ${correct===true?"border-emerald-400 bg-emerald-50":correct===false?"border-red-400 bg-red-50":"border-gray-200 focus:border-indigo-400"}`} />
                    </div>
                  )}

                  {submitted&&(
                    <div className={`mt-2 pl-9 text-xs px-2 py-1.5 rounded-lg leading-relaxed ${correct?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-700"}`}>
                      {correct?`✓ Correct: ${q.answer}`:`✗ Your: "${userAns||"(blank)"}" — Answer: ${q.answer}`}
                      {q.explanation?" — "+q.explanation:""}
                    </div>
                  )}
                </div>
              );
            })}

            {!submitted?(
              <button onClick={()=>setSubmitted(true)} disabled={answered<sessionQs.length}
                className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-700 disabled:opacity-50 transition-all">
                {answered<sessionQs.length?`${answered}/${sessionQs.length} answered — Submit when ready`:"Submit Answers →"}
              </button>
            ):(
              <button onClick={onClose}
                className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-all">
                Close
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main ReadingHub ────────────────────────────────────────────────────────────
export default function ReadingHub({ localPassages = [] }: { localPassages?: Passage[] }) {
  const [selected,    setSelected]    = useState<{passage: Passage; sessionQs: ReadingQ[]; startNum: number} | null>(null);
  const [sessionKey,  setSessionKey]  = useState(0); // increment to reshuffle

  const { data: fbPassages, loading, fromFirebase } = useAdminCollection(
    "admin_ielts_reading",
    transformPassages,
    localPassages
  );

  // When session key changes or passages load, select 13Q per passage with shuffle
  const sessionData = useMemo(() => {
    let num = 1;
    return fbPassages.map(p => {
      const selected = selectQuestions(p.questions, QUESTIONS_PER_PASSAGE);
      const startNum = num;
      num += selected.length;
      return { passage: p, sessionQs: selected, startNum };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionKey, fbPassages]);

  const openPassage = (idx: number) => {
    setSelected(sessionData[idx]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600">IELTS</Link>
        <span>›</span><span className="text-gray-700 font-medium">Reading</span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">📖</span>
        <div className="flex-1">
          <h1 className="text-3xl font-black text-gray-900 mb-1">IELTS Reading Practice</h1>
          <p className="text-gray-500 text-sm">
            {loading ? "Loading passages…" : `${fbPassages.length} passages · ${QUESTIONS_PER_PASSAGE} questions each · shuffled every attempt`}
            {fromFirebase && <span className="ml-2 text-indigo-600 font-semibold">· from admin panel</span>}
          </p>
        </div>
        <button onClick={() => setSessionKey(k => k + 1)}
          title="Shuffle questions"
          className="text-xs border border-gray-200 text-gray-500 hover:text-indigo-600 hover:border-indigo-300 px-3 py-2 rounded-xl transition-all flex items-center gap-1.5">
          🔀 New Shuffle
        </button>
      </div>

      {/* Info banner */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-4 mb-6 text-sm text-indigo-800">
        <p>📋 Each passage selects <strong>{QUESTIONS_PER_PASSAGE} random questions</strong> from its full question bank. Questions and MCQ options are reshuffled every attempt. Click <strong>🔀 New Shuffle</strong> to get a different selection.</p>
      </div>

      {/* Loading skeletons */}
      {loading && (
        <div className="grid sm:grid-cols-2 gap-4">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-full mb-4" />
              <div className="h-10 bg-gray-200 rounded-xl" />
            </div>
          ))}
        </div>
      )}

      {!loading && fbPassages.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p className="font-semibold">No passages yet</p>
          <p className="text-sm mt-1">Upload reading passages via the admin panel → IELTS Reading tab</p>
        </div>
      )}

      {/* Passage cards */}
      {!loading && sessionData.length > 0 && (
        <div className="grid sm:grid-cols-2 gap-4">
          {sessionData.map(({ passage, sessionQs, startNum }, idx) => (
            <div key={passage.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${LEVEL_COLORS[passage.level] || "bg-gray-100 text-gray-600"}`}>
                  {passage.level}
                </span>
                <span className="text-xs text-gray-400">Q{startNum}–Q{startNum+sessionQs.length-1}</span>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-1">{passage.title}</h3>
              <p className="text-gray-500 text-xs mb-1">{passage.tag}</p>
              <p className="text-gray-400 text-xs mb-4">{passage.wordCount} words · {sessionQs.length} questions selected</p>
              <button onClick={() => openPassage(idx)}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all">
                Start Practice →
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Passage modal */}
      {selected && (
        <PassageModal
          passage={selected.passage}
          sessionQs={selected.sessionQs}
          startNum={selected.startNum}
          onClose={() => setSelected(null)}
        />
      )}

      <div className="mt-8 text-center">
        <Link href="/ielts" className="text-indigo-600 text-sm font-semibold hover:underline">
          ← Back to IELTS Hub
        </Link>
      </div>
    </div>
  );
}
