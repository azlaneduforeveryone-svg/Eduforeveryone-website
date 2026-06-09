"use client";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useAdminCollection } from "@/lib/useAdminCollection";
import { useAuth } from "@/contexts/AuthContext";
import { saveIeltsResult } from "@/lib/firebaseDB";

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
const TEST_SECONDS = 20 * 60; // 20 minutes
const PARA_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const MCQLABELS = ["A","B","C","D"] as const;
const HEADING_NUMS = ["i","ii","iii","iv","v","vi","vii","viii","ix","x"];

// ── Band Score (Academic Reading) ─────────────────────────────────────────────
const toBand = (raw: number) => {
  if(raw>=39)return 9; if(raw>=37)return 8.5; if(raw>=35)return 8;
  if(raw>=33)return 7.5; if(raw>=30)return 7; if(raw>=27)return 6.5;
  if(raw>=23)return 6; if(raw>=19)return 5.5; if(raw>=15)return 5;
  if(raw>=13)return 4.5; if(raw>=10)return 4; return 3.5;
};

// ── Helpers ───────────────────────────────────────────────────────────────────
const fmt = (s: number) =>
  `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;

function fisherYates<T>(arr: T[]): T[] {
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}
  return a;
}

function shuffleMCQ(q: ReadingQ): ReadingQ {
  if(q.type!=="mcq"||!q.opts||q.opts.length<2) return q;
  const texts=q.opts.map(o=>o.slice(3));
  const cIdx=MCQLABELS.indexOf(q.answer as typeof MCQLABELS[number]);
  const cText=texts[cIdx]??texts[0];
  const s=fisherYates(texts); const ni=s.indexOf(cText);
  return {...q,opts:s.map((t,i)=>`${MCQLABELS[i]}. ${t}`),answer:MCQLABELS[ni]??"A"};
}

function selectQuestions(qs: ReadingQ[], n: number): ReadingQ[] {
  return fisherYates(qs).slice(0,Math.min(n,qs.length)).map(shuffleMCQ);
}

function grade(ans: string, q: ReadingQ): boolean {
  const u=ans.toLowerCase().trim().replace(/[.,]/g,"");
  const checks=[q.answer,...(q.acceptedAnswers||[])].map(a=>a.toLowerCase().trim().replace(/[.,]/g,""));
  return checks.some(c=>u===c||u===c.replace(/^the /,"")||u===c.replace(/^a /,""));
}

// ── Transform Firebase data ───────────────────────────────────────────────────
function transformPassages(raw: Record<string,unknown>[]): Passage[] {
  if(!raw.length) return [];
  if(raw[0]?.questions&&Array.isArray(raw[0].questions)){
    return raw.filter(r=>r.id||r.passage_id).map(r=>({
      id:String(r.id||r.passage_id||""),title:String(r.title||""),
      tag:String(r.tag||"General"),level:String(r.level||"Academic"),
      wordCount:Number(r.wordCount||r.word_count||0),text:String(r.text||""),
      questions:(r.questions as Record<string,unknown>[]).map((q,i)=>({
        id:Number(q.id||i+1),type:String(q.type||"mcq"),
        q:String(q.q||q.question||""),
        opts:Array.isArray(q.opts)?q.opts.map(String):undefined,
        answer:String(q.answer||""),
        acceptedAnswers:Array.isArray(q.acceptedAnswers)?q.acceptedAnswers.map(String):undefined,
        explanation:String(q.explanation||""),
        sentenceTemplate:q.sentenceTemplate?String(q.sentenceTemplate):undefined,
      })).filter(q=>q.q),
    })).filter(p=>p.title&&p.text);
  }
  const map:Record<string,Passage>={};
  for(const item of raw){
    const pid=String(item.id||item.passage_id||"");if(!pid)continue;
    if(item.text||item.passage_text){
      map[pid]={id:pid,title:String(item.title||""),tag:String(item.tag||"General"),
        level:String(item.level||"Academic"),wordCount:Number(item.wordCount||0),
        text:String(item.text||item.passage_text||""),questions:map[pid]?.questions||[]};
    }else if(item.q||item.question){
      if(!map[pid])map[pid]={id:pid,title:"",tag:"General",level:"Academic",wordCount:0,text:"",questions:[]};
      map[pid].questions.push({id:Number(item.id||map[pid].questions.length+1),
        type:String(item.type||"mcq"),q:String(item.q||item.question||""),
        opts:Array.isArray(item.opts)?item.opts.map(String):undefined,
        answer:String(item.answer||""),
        acceptedAnswers:item.accepted_answers?String(item.accepted_answers).split("|"):undefined,
        explanation:String(item.explanation||""),
        sentenceTemplate:item.sentence_template?String(item.sentence_template):undefined});
    }
  }
  return Object.values(map).filter(p=>p.title&&p.text);
}

// ── Question type label ───────────────────────────────────────────────────────
function qTypeLabel(type: string): { label: string; color: string } {
  const map: Record<string,{label:string;color:string}> = {
    tfng:               { label:"True / False / Not Given",      color:"bg-amber-100 text-amber-800" },
    ynng:               { label:"Yes / No / Not Given",          color:"bg-purple-100 text-purple-800" },
    mcq:                { label:"Multiple Choice",               color:"bg-blue-100 text-blue-800" },
    fill:               { label:"Short Answer",                  color:"bg-teal-100 text-teal-800" },
    sentence_completion:{ label:"Sentence Completion",           color:"bg-teal-100 text-teal-800" },
    summary_completion: { label:"Summary Completion",            color:"bg-teal-100 text-teal-800" },
    summary:            { label:"Summary Completion",            color:"bg-teal-100 text-teal-800" },
    word_box:           { label:"Summary Completion (Word Box)", color:"bg-teal-100 text-teal-800" },
    matching_headings:  { label:"Matching Headings",             color:"bg-indigo-100 text-indigo-800" },
    matching_info:      { label:"Matching Information",          color:"bg-indigo-100 text-indigo-800" },
    short_answer:       { label:"Short Answer",                  color:"bg-teal-100 text-teal-800" },
  };
  return map[type] || { label:"Question", color:"bg-gray-100 text-gray-700" };
}

const BUTTON_TYPES = ["tfng", "ynng", "mcq", "matching_headings", "matching_info"];
const isTextInput = (t: string) => !BUTTON_TYPES.includes(t);

const wordLimits: Record<string,string> = {
  fill:               "NO MORE THAN TWO WORDS AND/OR A NUMBER",
  sentence_completion:"NO MORE THAN TWO WORDS",
  summary_completion: "NO MORE THAN TWO WORDS",
  short_answer:       "NO MORE THAN THREE WORDS",
  word_box:           "ONE WORD ONLY (from the word box above)",
};

// ── Passage with [A][B][C] paragraph labels ───────────────────────────────────
function PassageDisplay({ text }: { text: string }) {
  const paragraphs = text.split("\n\n").filter(s => s.trim());
  let labelIdx = 0;
  return (
    <div className="text-[15px] leading-[1.85] text-gray-800 font-['Georgia',serif] selection:bg-indigo-200">
      {paragraphs.map((para, i) => {
        const clean = para.replace(/^\[Section [A-Z]\]\s*/i,"").replace(/^\[Paragraph [A-Z]\]\s*/i,"").trim();
        const isHeader = clean.length < 60 && clean === clean.toUpperCase() && !clean.includes(".") && clean.length > 3;
        if (isHeader) {
          return <p key={i} className="font-bold text-gray-900 text-base mt-5 mb-2">{clean}</p>;
        }
        const letter = PARA_LETTERS[labelIdx++];
        return (
          <p key={i} className="mb-4">
            <span className="font-bold text-gray-900 mr-1.5 select-none">[{letter}]</span>
            {clean}
          </p>
        );
      })}
    </div>
  );
}

// ── IELTS Reading Test (full screen) ─────────────────────────────────────────
function IELTSReadingTest({
  passage, sessionQs, startNum, onBack, onRetry,
}: {
  passage: Passage;
  sessionQs: ReadingQ[];
  startNum: number;
  onBack: () => void;
  onRetry: () => void;
}) {
  const { user } = useAuth();
  const [answers,        setAnswers]        = useState<Record<number,string>>({});
  const [marked,         setMarked]         = useState<Set<number>>(new Set());
  const [visited,        setVisited]        = useState<Set<number>>(new Set([0]));
  const [currentIdx,     setCurrentIdx]     = useState(0);
  const [phase,          setPhase]          = useState<"test"|"confirm"|"results">("test");
  const [timeLeft,       setTimeLeft]       = useState(TEST_SECONDS);
  const [passageOpen,    setPassageOpen]    = useState(true); // mobile toggle
  const [warned5min,     setWarned5min]     = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval>|null>(null);
  const qPanelRef = useRef<HTMLDivElement>(null);
  const savedRef = useRef(false);

  const q = sessionQs[currentIdx];
  const totalQs = sessionQs.length;
  const answeredCount = Object.keys(answers).length;
  const urgent = timeLeft < 120;
  const warning5 = timeLeft < 300;

  // Timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if(t<=1){ clearInterval(timerRef.current!); setPhase("results"); return 0; }
        return t-1;
      });
    }, 1000);
    return ()=>{ if(timerRef.current) clearInterval(timerRef.current); };
  }, []);

  // 5-minute warning
  useEffect(() => {
    if(warning5&&!warned5min){ setWarned5min(true); }
  }, [warning5, warned5min]);

  // Save result once when results phase begins
  useEffect(() => {
    if (phase !== "results" || savedRef.current) return;
    savedRef.current = true;
    const s = sessionQs.filter(sq => grade(answers[sq.id] || "", sq)).length;
    const b = toBand(Math.round((s / sessionQs.length) * 40));
    saveIeltsResult({
      uid: user?.uid,
      displayName: user?.displayName ?? "",
      skill: "reading",
      band: b,
      raw: s,
      total: sessionQs.length,
      testId: passage.id,
      source: "practice",
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  const goTo = useCallback((idx: number) => {
    setVisited(v => new Set([...v, idx]));
    setCurrentIdx(idx);
    qPanelRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goNext = () => {
    if(currentIdx < totalQs-1) { goTo(currentIdx+1); }
    else { setPhase("confirm"); }
  };

  const goPrev = () => { if(currentIdx>0) goTo(currentIdx-1); };

  const handleAnswer = (val: string) => setAnswers(a=>({...a,[q.id]:val}));

  const toggleMark = () => setMarked(m => {
    const n=new Set(m); n.has(q.id)?n.delete(q.id):n.add(q.id); return n;
  });

  const submitTest = () => {
    if(timerRef.current) clearInterval(timerRef.current);
    setPhase("results");
  };

  const score = sessionQs.filter(sq=>grade(answers[sq.id]||"",sq)).length;
  const band = toBand(Math.round((score/totalQs)*40));

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if(phase!=="test") return;
      if(e.key==="ArrowRight"||e.key==="ArrowDown") goNext();
      if(e.key==="ArrowLeft"||e.key==="ArrowUp") goPrev();
      if(e.key==="m"||e.key==="M") toggleMark();
    };
    window.addEventListener("keydown", handler);
    return ()=>window.removeEventListener("keydown", handler);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, currentIdx, totalQs]);

  // ── RESULTS ──────────────────────────────────────────────────────────────
  if(phase==="results") return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-indigo-700 text-white px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <h1 className="font-bold text-lg">IELTS Academic Reading — Results</h1>
          <div className="flex gap-3">
            <button onClick={onRetry}
              className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-bold text-sm hover:bg-indigo-50">
              🔀 New Questions
            </button>
            <button onClick={onBack}
              className="border border-white/40 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-white/10">
              ← All Passages
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Score cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white border border-indigo-200 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-5xl font-black text-indigo-600">{score}</p>
            <p className="text-gray-500 text-sm mt-1">Questions Correct</p>
            <p className="text-gray-400 text-xs">out of {totalQs}</p>
          </div>
          <div className={`rounded-2xl p-6 text-center shadow-sm border ${score>=Math.ceil(totalQs*0.7)?"bg-emerald-50 border-emerald-200":"score<Math.ceil(totalQs*0.5)?'bg-red-50 border-red-200':'bg-amber-50 border-amber-200'"}`}>
            <p className={`text-5xl font-black ${score>=Math.ceil(totalQs*0.7)?"text-emerald-600":score>=Math.ceil(totalQs*0.5)?"text-amber-600":"text-red-600"}`}>{band}</p>
            <p className="text-gray-500 text-sm mt-1">Estimated Band</p>
            <p className="text-gray-400 text-xs">IELTS Academic Reading</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-5xl font-black text-gray-700">{Math.round((score/totalQs)*100)}%</p>
            <p className="text-gray-500 text-sm mt-1">Accuracy</p>
            <p className="text-gray-400 text-xs">{totalQs - score} incorrect</p>
          </div>
        </div>

        {/* Review table */}
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-6">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-gray-900">Answer Review</h2>
            <p className="text-gray-500 text-xs mt-0.5">Review every question with the correct answer and explanation</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-12">Q</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Question</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-28">Your Answer</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-28">Correct</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-8">✓/✗</th>
                  <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Explanation</th>
                </tr>
              </thead>
              <tbody>
                {sessionQs.map((sq, i) => {
                  const userAns = answers[sq.id] || "";
                  const correct = grade(userAns, sq);
                  return (
                    <tr key={sq.id} className={`border-b border-gray-50 ${correct?"":"bg-red-50/40"}`}>
                      <td className="px-4 py-3 font-bold text-gray-600">{startNum+i}</td>
                      <td className="px-4 py-3 text-gray-700 max-w-xs">
                        <span className={`text-xs px-1.5 py-0.5 rounded font-semibold mr-1 ${qTypeLabel(sq.type).color}`}>
                          {qTypeLabel(sq.type).label}
                        </span>
                        <span className="line-clamp-2">{sq.sentenceTemplate||sq.q}</span>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`text-sm font-mono px-2 py-0.5 rounded ${correct?"bg-emerald-50 text-emerald-700":"bg-red-50 text-red-700"}`}>
                          {userAns||"—"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <span className="text-sm font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">
                          {sq.answer}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`text-base ${correct?"text-emerald-500":"text-red-500"}`}>
                          {correct?"✓":"✗"}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs leading-relaxed max-w-xs">
                        {sq.explanation}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // ── CONFIRM SUBMIT ────────────────────────────────────────────────────────
  if(phase==="confirm") return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full shadow-lg text-center">
        <p className="text-4xl mb-4">📋</p>
        <h2 className="text-xl font-black text-gray-900 mb-2">Submit Your Answers?</h2>
        <p className="text-gray-500 text-sm mb-2">
          You have answered <strong>{answeredCount} of {totalQs}</strong> questions.
        </p>
        {answeredCount < totalQs && (
          <p className="text-amber-600 text-xs bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mb-4">
            ⚠️ {totalQs - answeredCount} question{totalQs - answeredCount > 1 ? "s" : ""} unanswered.
            Unanswered questions are marked incorrect.
          </p>
        )}
        <p className="text-gray-400 text-xs mb-6">Time remaining: {fmt(timeLeft)}</p>
        <div className="flex gap-3">
          <button onClick={() => { setPhase("test"); goTo(currentIdx); }}
            className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-bold text-sm hover:bg-gray-50">
            ← Review Answers
          </button>
          <button onClick={submitTest}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-700">
            Submit Test →
          </button>
        </div>
      </div>
    </div>
  );

  // ── TEST INTERFACE ────────────────────────────────────────────────────────
  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">

      {/* ── Top bar: title + timer ─────────────────────────────────────────── */}
      <header className="bg-indigo-700 text-white flex-shrink-0 z-30">
        <div className="flex items-center justify-between px-4 py-2.5">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={onBack} className="text-white/70 hover:text-white text-sm flex-shrink-0">
              ← Exit
            </button>
            <div className="min-w-0">
              <p className="font-bold text-sm truncate">{passage.title}</p>
              <p className="text-indigo-300 text-xs">{passage.tag} · {passage.level}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Progress */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-indigo-300">
              <span>{answeredCount}/{totalQs} answered</span>
            </div>
            {/* Timer */}
            <div className={`flex items-center gap-1.5 px-4 py-2 rounded-lg font-mono font-bold text-sm transition-all ${
              urgent ? "bg-red-500 text-white animate-pulse" :
              warning5 ? "bg-orange-400 text-white" :
              "bg-indigo-800 text-white"}`}>
              ⏱ {fmt(timeLeft)}
            </div>
          </div>
        </div>
        {/* Progress bar */}
        <div className="h-1 bg-indigo-800">
          <div className="h-full bg-indigo-300 transition-all"
            style={{ width:`${(answeredCount/totalQs)*100}%` }} />
        </div>
        {/* 5-minute warning */}
        {warning5 && !urgent && (
          <div className="bg-orange-500 text-white text-xs text-center py-1 font-semibold">
            ⚠️ 5 minutes remaining — please finish your answers
          </div>
        )}
      </header>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <div className="flex flex-1 overflow-hidden">

        {/* LEFT: Passage */}
        <div className={`bg-white border-r border-gray-200 flex flex-col overflow-hidden
          ${passageOpen ? "w-full lg:w-[54%]" : "w-0 lg:w-[54%]"}`}>
          {/* Passage header */}
          <div className="flex-shrink-0 px-5 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50">
            <div>
              <p className="font-bold text-gray-900 text-sm">{passage.title}</p>
              <p className="text-gray-400 text-xs">{passage.wordCount} words · {passage.tag}</p>
            </div>
            <button onClick={() => setPassageOpen(v=>!v)}
              className="lg:hidden text-xs text-gray-500 border border-gray-200 px-2.5 py-1 rounded-lg">
              {passageOpen ? "Hide" : "Show"} Passage
            </button>
          </div>
          {/* Scrollable passage */}
          <div className="flex-1 overflow-y-auto px-6 py-5">
            <PassageDisplay text={passage.text} />
          </div>
        </div>

        {/* RIGHT: Questions panel */}
        <div ref={qPanelRef}
          className={`flex flex-col overflow-hidden bg-gray-50
            ${passageOpen ? "hidden lg:flex lg:w-[46%]" : "flex w-full lg:w-[46%]"}`}>

          {/* Mobile passage toggle */}
          <div className="lg:hidden flex-shrink-0 bg-white border-b border-gray-200 px-4 py-2">
            <button onClick={() => setPassageOpen(v=>!v)}
              className="w-full text-sm text-indigo-600 font-semibold border border-indigo-200 py-2 rounded-lg hover:bg-indigo-50">
              {passageOpen ? "▼ Hide" : "▲ Show"} Reading Passage
            </button>
          </div>

          {/* Navigation squares panel */}
          <div className="flex-shrink-0 bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                Question Navigation
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-white border border-gray-300 inline-block"/>=Unvisited</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-indigo-600 inline-block"/>=Current</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-emerald-500 inline-block"/>=Answered</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-orange-400 inline-block"/>=Flagged</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {sessionQs.map((sq, idx) => {
                const isAnswered = !!answers[sq.id];
                const isMarked   = marked.has(sq.id);
                const isCurrent  = idx === currentIdx;
                const isVisited  = visited.has(idx);
                return (
                  <button key={sq.id} onClick={() => goTo(idx)}
                    title={`Question ${startNum+idx}${isMarked?" (flagged)":""}`}
                    className={`w-8 h-8 rounded text-xs font-bold border transition-all hover:opacity-90
                      ${isCurrent  ? "bg-indigo-600 text-white border-indigo-700 ring-2 ring-indigo-300" :
                        isMarked   ? "bg-orange-400 text-white border-orange-500" :
                        isAnswered ? "bg-emerald-500 text-white border-emerald-600" :
                        isVisited  ? "bg-gray-200 text-gray-600 border-gray-300" :
                        "bg-white text-gray-400 border-gray-200 hover:border-gray-400"}`}>
                    {startNum+idx}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Question area */}
          <div className="flex-1 overflow-y-auto px-5 py-5">
            {/* Question header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${qTypeLabel(q.type).color}`}>
                  {qTypeLabel(q.type).label}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400">
                  Question {startNum+currentIdx} of {startNum+totalQs-1}
                </span>
                <button onClick={toggleMark}
                  title="Mark for review (M)"
                  className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                    marked.has(q.id)
                      ? "bg-orange-400 text-white border-orange-500"
                      : "border-gray-200 text-gray-500 hover:border-orange-300 hover:text-orange-500"}`}>
                  🚩 {marked.has(q.id) ? "Flagged" : "Flag"}
                </button>
              </div>
            </div>

            {/* Question text */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4 min-h-[100px]">
              <p className="text-base font-semibold text-gray-900 leading-snug">
                {q.sentenceTemplate || q.q}
              </p>
            </div>

            {/* Word limit warning */}
            {isTextInput(q.type) && wordLimits[q.type] && (
              <div className="flex items-center gap-2 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3">
                <span className="text-amber-600 font-bold text-sm flex-shrink-0">⚠️</span>
                <p className="text-amber-700 text-xs font-semibold">
                  Write {wordLimits[q.type]}
                </p>
              </div>
            )}

            {/* Answer input by type */}
            {/* T/F/NG */}
            {q.type === "tfng" && (
              <div className="space-y-2">
                {["TRUE","FALSE","NOT GIVEN"].map(opt => (
                  <button key={opt} onClick={() => handleAnswer(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                      answers[q.id]===opt
                        ? "bg-indigo-100 border-indigo-500 text-indigo-900"
                        : "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* Y/N/NG */}
            {q.type === "ynng" && (
              <div className="space-y-2">
                {["YES","NO","NOT GIVEN"].map(opt => (
                  <button key={opt} onClick={() => handleAnswer(opt)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                      answers[q.id]===opt
                        ? "bg-indigo-100 border-indigo-500 text-indigo-900"
                        : "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            )}

            {/* MCQ */}
            {q.type === "mcq" && q.opts && (
              <div className="space-y-2">
                {q.opts.map(opt => {
                  const letter = opt[0];
                  const chosen = answers[q.id] === letter;
                  return (
                    <button key={opt} onClick={() => handleAnswer(letter)}
                      onKeyDown={e => e.key==="Enter"&&handleAnswer(letter)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                        chosen
                          ? "bg-indigo-100 border-indigo-500 text-indigo-900 font-semibold"
                          : "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"}`}>
                      <span className="font-bold mr-2">{opt[0]}.</span>{opt.slice(3)}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Matching headings — official IELTS uses dropdown */}
            {q.type === "matching_headings" && (
              <div>
                <p className="text-xs text-gray-500 mb-2 font-medium">
                  Select the correct heading from the list:
                </p>
                <select value={answers[q.id]||""}
                  onChange={e => handleAnswer(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 appearance-none">
                  <option value="">-- Select a heading --</option>
                  {HEADING_NUMS.map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            )}

            {/* Matching info — paragraph letter */}
            {q.type === "matching_info" && (
              <div>
                <p className="text-xs text-gray-500 mb-2 font-medium">
                  Select the paragraph (A–F) that contains this information:
                </p>
                <div className="grid grid-cols-6 gap-2">
                  {["A","B","C","D","E","F"].map(opt => (
                    <button key={opt} onClick={() => handleAnswer(opt)}
                      className={`py-3 rounded-xl border font-black text-sm transition-all ${
                        answers[q.id]===opt
                          ? "bg-indigo-600 text-white border-indigo-700"
                          : "bg-white border-gray-200 text-gray-600 hover:border-indigo-300"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Text input types */}
            {isTextInput(q.type) && (
              <textarea
                value={answers[q.id]||""}
                onChange={e => handleAnswer(e.target.value)}
                onKeyDown={e => { if(e.key==="Enter"&&!e.shiftKey){ e.preventDefault(); goNext(); } }}
                rows={2}
                placeholder="Type your answer here…"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 resize-none"
              />
            )}

            {/* Keyboard hint */}
            <p className="text-xs text-gray-400 mt-4 text-center">
              ← → arrow keys to navigate · M to flag · Enter to go next
            </p>
          </div>

          {/* Navigation footer */}
          <div className="flex-shrink-0 bg-white border-t border-gray-200 px-5 py-3">
            <div className="flex items-center gap-3">
              <button onClick={goPrev} disabled={currentIdx===0}
                className="px-5 py-2.5 border border-gray-200 rounded-xl font-bold text-sm text-gray-600 hover:border-gray-400 disabled:opacity-30 disabled:cursor-not-allowed">
                ← Previous
              </button>
              <div className="flex-1 text-center">
                <p className="text-xs text-gray-400">
                  {startNum+currentIdx} / {startNum+totalQs-1}
                </p>
              </div>
              {currentIdx < totalQs-1 ? (
                <button onClick={goNext}
                  className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl font-bold text-sm hover:bg-indigo-700">
                  Next →
                </button>
              ) : (
                <button onClick={() => setPhase("confirm")}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl font-bold text-sm hover:bg-emerald-700">
                  Finish Test →
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Main ReadingHub ────────────────────────────────────────────────────────────
const LEVEL_COLORS: Record<string,string> = {
  "Academic":"bg-indigo-100 text-indigo-700","General Training":"bg-teal-100 text-teal-700",
  "Advanced":"bg-purple-100 text-purple-700","Intermediate":"bg-blue-100 text-blue-700",
};

export default function ReadingHub({ localPassages = [] }: { localPassages?: Passage[] }) {
  const [activeTest, setActiveTest] = useState<{passage:Passage;sessionQs:ReadingQ[];startNum:number}|null>(null);
  const [sessionKey, setSessionKey] = useState(0);

  const { data: passages, loading, fromFirebase } = useAdminCollection(
    "admin_ielts_reading",
    transformPassages,
    localPassages
  );

  const sessionData = useMemo(() => {
    let num = 1;
    return passages.map(p => {
      const sessionQs = selectQuestions(p.questions, QUESTIONS_PER_PASSAGE);
      const startNum = num;
      num += sessionQs.length;
      return { passage:p, sessionQs, startNum };
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionKey, passages]);

  // If test is active, render full-screen test
  if (activeTest) {
    return (
      <IELTSReadingTest
        passage={activeTest.passage}
        sessionQs={activeTest.sessionQs}
        startNum={activeTest.startNum}
        onBack={() => setActiveTest(null)}
        onRetry={() => {
          setSessionKey(k => k+1);
          setActiveTest(null);
          // Small delay to let sessionData recompute
          setTimeout(() => {
            const idx = passages.findIndex(p => p.id === activeTest.passage.id);
            if(idx >= 0 && sessionData[idx]) setActiveTest(sessionData[idx]);
          }, 100);
        }}
      />
    );
  }

  // Hub view
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600">IELTS</Link>
        <span>›</span><span className="text-gray-700 font-medium">Reading</span>
      </div>

      <div className="flex items-start gap-4 mb-6">
        <span className="text-5xl">📖</span>
        <div className="flex-1">
          <h1 className="text-3xl font-black text-gray-900 mb-1">IELTS Academic Reading</h1>
          <p className="text-gray-500 text-sm">
            {loading ? "Loading passages…" :
              `${passages.length} passage${passages.length!==1?"s":""} · ${QUESTIONS_PER_PASSAGE} questions each · 20 minute  per passage`}
            {fromFirebase && <span className="ml-2 text-indigo-600 font-semibold">· from admin panel</span>}
          </p>
        </div>
        <button onClick={() => setSessionKey(k=>k+1)}
          className="text-xs border border-gray-200 text-gray-500 hover:text-indigo-600 hover:border-indigo-300 px-3 py-2 rounded-xl transition-all flex-shrink-0">
          🔀 Reshuffle
        </button>
      </div>

      {/* Official format info */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-6">
        <p className="font-bold text-indigo-800 mb-3 text-sm">📋 Official IELTS Computer Test Format</p>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-indigo-700">
          <div className="flex gap-2"><span>⏱</span><span>20 minutes  per passage · timer auto-submits</span></div>
          <div className="flex gap-2"><span>🔢</span><span>One question at a time with navigation</span></div>
          <div className="flex gap-2"><span>🚩</span><span>Flag questions to review later</span></div>
          <div className="flex gap-2"><span>[A][B]</span><span>Paragraph labels in passage</span></div>
          <div className="flex gap-2"><span>⌨️</span><span>Arrow keys + M key to navigate/flag</span></div>
          <div className="flex gap-2"><span>📊</span><span>Full review table with explanations</span></div>
        </div>
      </div>

      {loading && (
        <div className="grid sm:grid-cols-2 gap-4">
          {[1,2,3].map(i=>(
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"/>
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"/>
              <div className="h-3 bg-gray-100 rounded w-full mb-4"/>
              <div className="h-10 bg-gray-200 rounded-xl"/>
            </div>
          ))}
        </div>
      )}

      {!loading && passages.length===0 && (
        <div className="text-center py-16 text-gray-400">
          <p className="text-4xl mb-3">📭</p>
          <p className="font-semibold">No passages yet</p>
          <p className="text-sm mt-1">Upload reading passages via admin panel → IELTS Reading tab</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        {sessionData.map(({ passage, sessionQs, startNum }, idx) => (
          <div key={passage.id}
            className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${LEVEL_COLORS[passage.level]||"bg-gray-100 text-gray-600"}`}>
                {passage.level}
              </span>
              <span className="text-xs text-gray-400">Q{startNum}–Q{startNum+sessionQs.length-1}</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm mb-1">{passage.title}</h3>
            <p className="text-gray-500 text-xs mb-1">{passage.tag}</p>
            <p className="text-gray-400 text-xs mb-4">{passage.wordCount} words · {sessionQs.length} questions · 20 min</p>
            <button onClick={() => setActiveTest({ passage, sessionQs, startNum })}
              className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all">
              Start Practice Test →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/ielts" className="text-indigo-600 text-sm font-semibold hover:underline">
          ← Back to IELTS Hub
        </Link>
      </div>
    </div>
  );
}
