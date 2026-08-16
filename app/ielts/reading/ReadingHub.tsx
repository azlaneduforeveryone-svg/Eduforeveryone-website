"use client";
import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { useAdminCollection } from "@/lib/useAdminCollection";
import { useAuth } from "@/contexts/AuthContext";
import { saveIeltsResult } from "@/lib/firebaseDB";
import ShareScore from "@/components/ielts/ShareScore";
import { PASSAGES, Question, Passage } from "@/lib/ielts/readingData";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ReadingQ {
  id: number; type: string; q: string;
  opts?: string[]; answer: string;
  acceptedAnswers?: string[]; explanation: string; sentenceTemplate?: string;
}

export interface TestConfig {
  passage: Passage;
  sessionQs: ReadingQ[];
  startNum: number;
  mode: "practice" | "simulation";
  timerMinutes: number; // 0 for unlimited, else minutes
}

// ── Constants ─────────────────────────────────────────────────────────────────
const QUESTIONS_PER_PASSAGE = 13;
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

// Group Instruction Generator (Official IELTS Benchmark Format)
function getGroupInstruction(type: string): JSX.Element {
  switch (type) {
    case "matching_info":
    case "matching_headings":
      return (
        <span>
          The text has paragraphs <strong>(A – E)</strong>. Which paragraph contains each of the following pieces of information?
        </span>
      );
    case "fill":
    case "sentence_completion":
    case "summary_completion":
    case "summary":
    case "short_answer":
      return (
        <span>
          Complete the following sentences using <strong className="text-red-600 font-black">NO MORE THAN THREE WORDS</strong> from the text for each gap.
        </span>
      );
    case "word_box":
      return (
        <span>
          Complete the summary using <strong className="text-red-600 font-black">ONE WORD ONLY</strong> from the word box provided.
        </span>
      );
    case "tfng":
      return (
        <span>
          Do the following statements agree with the information given in the Reading Passage? Write <strong>TRUE</strong>, <strong>FALSE</strong>, or <strong>NOT GIVEN</strong>.
        </span>
      );
    case "ynng":
      return (
        <span>
          Do the following statements agree with the claims of the writer in the Reading Passage? Write <strong>YES</strong>, <strong>NO</strong>, or <strong>NOT GIVEN</strong>.
        </span>
      );
    case "mcq":
    default:
      return <span>Choose the correct letter, <strong>A</strong>, <strong>B</strong>, <strong>C</strong>, or <strong>D</strong>.</span>;
  }
}

const BUTTON_TYPES = ["tfng", "ynng", "mcq", "matching_headings", "matching_info"];
const isTextInput = (t: string) => !BUTTON_TYPES.includes(t);

// ── Passage Display with Text Highlighting & Font Scale Controls ─────────────
function PassageDisplay({
  text,
  fontSize = "base",
  highlights = [],
  onAddHighlight,
  onClearHighlights,
}: {
  text: string;
  fontSize?: "sm" | "base" | "lg";
  highlights?: string[];
  onAddHighlight?: (selectedText: string) => void;
  onClearHighlights?: () => void;
}) {
  const [selectedText, setSelectedText] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);

  const paragraphs = text.split("\n\n").filter(s => s.trim());
  let labelIdx = 0;

  const fontClass =
    fontSize === "sm" ? "text-sm leading-relaxed" :
    fontSize === "lg" ? "text-lg leading-loose" :
    "text-[15px] leading-[1.85]";

  const handleTextSelection = () => {
    const sel = window.getSelection();
    if (sel && sel.toString().trim().length > 2) {
      setSelectedText(sel.toString().trim());
    } else {
      setSelectedText("");
    }
  };

  // Helper to render text with yellow highlights
  const renderHighlightedText = (content: string) => {
    if (!highlights || highlights.length === 0) return content;
    let parts: { text: string; isHighlighted: boolean }[] = [{ text: content, isHighlighted: false }];

    highlights.forEach(hl => {
      if (!hl) return;
      const nextParts: { text: string; isHighlighted: boolean }[] = [];
      parts.forEach(part => {
        if (part.isHighlighted) {
          nextParts.push(part);
          return;
        }
        const splitText = part.text.split(hl);
        for (let i = 0; i < splitText.length; i++) {
          if (splitText[i]) nextParts.push({ text: splitText[i], isHighlighted: false });
          if (i < splitText.length - 1) nextParts.push({ text: hl, isHighlighted: true });
        }
      });
      parts = nextParts;
    });

    return parts.map((p, idx) =>
      p.isHighlighted ? (
        <mark key={idx} className="bg-yellow-200 text-gray-900 rounded px-0.5 font-medium">
          {p.text}
        </mark>
      ) : (
        p.text
      )
    );
  };

  return (
    <div className="relative">
      {/* Floating Highlight Button */}
      {selectedText && onAddHighlight && (
        <div className="sticky top-2 z-20 flex justify-center mb-2">
          <button
            onClick={() => {
              onAddHighlight(selectedText);
              setSelectedText("");
              window.getSelection()?.removeAllRanges();
            }}
            className="bg-amber-500 text-white font-bold text-xs px-3 py-1.5 rounded-full shadow-lg hover:bg-amber-600 transition-all flex items-center gap-1 animate-bounce"
          >
            🖍 Highlight Selected Text
          </button>
        </div>
      )}

      {/* Clear highlights indicator */}
      {highlights.length > 0 && onClearHighlights && (
        <div className="flex justify-end mb-2">
          <button
            onClick={onClearHighlights}
            className="text-xs text-amber-700 hover:text-amber-900 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-md font-medium"
          >
            🧹 Clear Highlights ({highlights.length})
          </button>
        </div>
      )}

      <div
        ref={containerRef}
        onMouseUp={handleTextSelection}
        className={`${fontClass} text-gray-800 font-['Georgia',serif] selection:bg-amber-200 selection:text-gray-900`}
      >
        {paragraphs.map((para, i) => {
          const clean = para.replace(/^\[Section [A-Z]\]\s*/i, "").replace(/^\[Paragraph [A-Z]\]\s*/i, "").trim();
          const isHeader = clean.length < 60 && clean === clean.toUpperCase() && !clean.includes(".") && clean.length > 3;
          if (isHeader) {
            return <p key={i} className="font-bold text-gray-900 text-base mt-5 mb-2">{renderHighlightedText(clean)}</p>;
          }
          const letter = PARA_LETTERS[labelIdx++];
          return (
            <p key={i} className="mb-4">
              <span className="font-bold text-gray-900 mr-1.5 select-none">[{letter}]</span>
              {renderHighlightedText(clean)}
            </p>
          );
        })}
      </div>
    </div>
  );
}

// ── IELTS Reading Test Engine ─────────────────────────────────────────────────
function IELTSReadingTest({
  passage,
  sessionQs,
  startNum,
  mode = "simulation",
  timerMinutes = 20,
  onBack,
  onRetry,
}: {
  passage: Passage;
  sessionQs: ReadingQ[];
  startNum: number;
  mode?: "practice" | "simulation";
  timerMinutes?: number;
  onBack: () => void;
  onRetry: () => void;
}) {
  const { user } = useAuth();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [checkedQs, setCheckedQs] = useState<Record<number, boolean>>({});
  const [marked, setMarked] = useState<Set<number>>(new Set());
  const [visited, setVisited] = useState<Set<number>>(new Set([0]));
  const [currentIdx, setCurrentIdx] = useState(0);
  const [phase, setPhase] = useState<"test" | "confirm" | "results">("test");
  const [timeLeft, setTimeLeft] = useState(timerMinutes > 0 ? timerMinutes * 60 : 0);
  const [passageOpen, setPassageOpen] = useState(true); // mobile toggle
  const [fontSize, setFontSize] = useState<"sm" | "base" | "lg">("base");
  const [highlights, setHighlights] = useState<string[]>([]);
  const [warned5min, setWarned5min] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const qPanelRef = useRef<HTMLDivElement>(null);
  const savedRef = useRef(false);

  const q = sessionQs[currentIdx];
  const totalQs = sessionQs.length;
  const answeredCount = Object.keys(answers).length;
  const urgent = timerMinutes > 0 && timeLeft < 120;
  const warning5 = timerMinutes > 0 && timeLeft < 300;

  // Determine current group range (e.g. Q1-Q4)
  const currentGroup = useMemo(() => {
    let start = currentIdx;
    while (start > 0 && sessionQs[start - 1].type === q.type) {
      start--;
    }
    let end = currentIdx;
    while (end < totalQs - 1 && sessionQs[end + 1].type === q.type) {
      end++;
    }
    return {
      type: q.type,
      startNumGroup: startNum + start,
      endNumGroup: startNum + end,
    };
  }, [currentIdx, q.type, sessionQs, startNum, totalQs]);

  // Timer logic
  useEffect(() => {
    if (timerMinutes <= 0) return;
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          if (timerRef.current) clearInterval(timerRef.current);
          setPhase("results");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [timerMinutes]);

  // 5-minute warning
  useEffect(() => {
    if (warning5 && !warned5min) {
      setWarned5min(true);
    }
  }, [warning5, warned5min]);

  // Save result once when results phase begins
  useEffect(() => {
    if (phase !== "results" || savedRef.current) return;
    savedRef.current = true;
    const scoreVal = sessionQs.filter(sq => grade(answers[sq.id] || "", sq)).length;
    const bandVal = toBand(Math.round((scoreVal / sessionQs.length) * 40));

    // Save to Firebase DB
    saveIeltsResult({
      uid: user?.uid,
      displayName: user?.displayName ?? "",
      skill: "reading",
      band: bandVal,
      raw: scoreVal,
      total: sessionQs.length,
      testId: passage.id,
      source: mode,
    });

    // Save to localStorage history
    try {
      const rawHist = localStorage.getItem("ielts_reading_results_history");
      const hist = rawHist ? JSON.parse(rawHist) : {};
      hist[passage.id] = {
        band: bandVal,
        score: scoreVal,
        total: sessionQs.length,
        mode,
        date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      };
      localStorage.setItem("ielts_reading_results_history", JSON.stringify(hist));
    } catch {}
  }, [phase, answers, mode, passage.id, sessionQs, user?.displayName, user?.uid]);

  const goTo = useCallback((idx: number) => {
    setVisited(v => new Set([...v, idx]));
    setCurrentIdx(idx);
    qPanelRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goNext = () => {
    if (currentIdx < totalQs - 1) {
      goTo(currentIdx + 1);
    } else {
      setPhase("confirm");
    }
  };

  const goPrev = () => {
    if (currentIdx > 0) goTo(currentIdx - 1);
  };

  const handleAnswer = (val: string) => setAnswers(a => ({ ...a, [q.id]: val }));

  const toggleMark = () =>
    setMarked(m => {
      const n = new Set(m);
      n.has(q.id) ? n.delete(q.id) : n.add(q.id);
      return n;
    });

  const submitTest = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setPhase("results");
  };

  const score = sessionQs.filter(sq => grade(answers[sq.id] || "", sq)).length;
  const band = toBand(Math.round((score / totalQs) * 40));

  // Diagnostic calculations by Question Type
  const diagnostics = useMemo(() => {
    const typeMap: Record<string, { label: string; total: number; correct: number }> = {};
    sessionQs.forEach(sq => {
      const label = qTypeLabel(sq.type).label;
      if (!typeMap[label]) typeMap[label] = { label, total: 0, correct: 0 };
      typeMap[label].total += 1;
      if (grade(answers[sq.id] || "", sq)) typeMap[label].correct += 1;
    });
    return Object.values(typeMap);
  }, [sessionQs, answers]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (phase !== "test") return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goNext();
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goPrev();
      if (e.key === "m" || e.key === "M") toggleMark();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [phase, currentIdx, totalQs]);

  // Helper: Render sentence template with inline green circle badge and inline gap input
  const renderInlineSentenceInput = (template: string, qId: number, qNum: number) => {
    const rawText = template || q.q;
    const gapRegex = /\{gap\}|___+/g;

    if (gapRegex.test(rawText)) {
      const parts = rawText.split(gapRegex);
      return (
        <span className="leading-relaxed">
          {parts[0]}
          <span className="inline-flex items-center mx-1 gap-1 align-baseline">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs shrink-0 select-none shadow-sm">
              {qNum}
            </span>
            <input
              type="text"
              value={answers[qId] || ""}
              onChange={e => handleAnswer(e.target.value)}
              onKeyDown={e => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  goNext();
                }
              }}
              placeholder=""
              className="border border-gray-300 rounded-full px-3.5 py-1 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 w-44 font-medium text-gray-900 shadow-inner align-middle"
            />
          </span>
          {parts[1] || ""}
        </span>
      );
    }

    // Default inline layout if no {gap} tag
    return (
      <div className="flex items-center gap-2 flex-wrap">
        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs shrink-0 select-none shadow-sm">
          {qNum}
        </span>
        <span className="text-gray-900 font-semibold text-sm mr-2">{rawText}</span>
        <input
          type="text"
          value={answers[qId] || ""}
          onChange={e => handleAnswer(e.target.value)}
          onKeyDown={e => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              goNext();
            }
          }}
          placeholder="Type answer..."
          className="border border-gray-300 rounded-full px-4 py-1.5 text-sm bg-white focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 w-48 font-medium text-gray-900 shadow-inner"
        />
      </div>
    );
  };

  // ── RESULTS VIEW ────────────────────────────────────────────────────────────
  if (phase === "results")
    return (
      <div className="min-h-screen bg-gray-50 pb-12">
        {/* Header */}
        <div className="bg-indigo-700 text-white px-6 py-4">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div>
              <span className="text-xs bg-white/20 border border-white/30 text-white font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                {mode === "practice" ? "Practice Mode Results" : "Simulation Test Results"}
              </span>
              <h1 className="font-bold text-xl mt-1">{passage.title}</h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={onRetry}
                className="bg-white text-indigo-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-indigo-50 transition-all"
              >
                🔀 Retake Passage
              </button>
              <button
                onClick={onBack}
                className="border border-white/40 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-white/10 transition-all"
              >
                ← All Passages
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
          {/* Score cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white border border-indigo-200 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-5xl font-black text-indigo-600">{score}</p>
              <p className="text-gray-500 text-sm mt-1">Questions Correct</p>
              <p className="text-gray-400 text-xs">out of {totalQs}</p>
            </div>
            <div
              className={`rounded-2xl p-6 text-center shadow-sm border ${
                score >= Math.ceil(totalQs * 0.7)
                  ? "bg-emerald-50 border-emerald-200"
                  : score < Math.ceil(totalQs * 0.5)
                  ? "bg-red-50 border-red-200"
                  : "bg-amber-50 border-amber-200"
              }`}
            >
              <p
                className={`text-5xl font-black ${
                  score >= Math.ceil(totalQs * 0.7)
                    ? "text-emerald-600"
                    : score >= Math.ceil(totalQs * 0.5)
                    ? "text-amber-600"
                    : "text-red-600"
                }`}
              >
                {band}
              </p>
              <p className="text-gray-500 text-sm mt-1">Estimated Band Score</p>
              <p className="text-gray-400 text-xs">IELTS Academic Scale</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
              <p className="text-5xl font-black text-gray-700">{Math.round((score / totalQs) * 100)}%</p>
              <p className="text-gray-500 text-sm mt-1">Overall Accuracy</p>
              <p className="text-gray-400 text-xs">{totalQs - score} incorrect / skipped</p>
            </div>
          </div>

          {/* DIAGNOSTICS BREAKDOWN BY QUESTION TYPE */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-bold text-gray-900 text-lg mb-1 flex items-center gap-2">
              📊 Performance Breakdown by Question Type
            </h2>
            <p className="text-gray-500 text-xs mb-5">
              Identify your strengths and target specific question categories for improvement.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {diagnostics.map(diag => {
                const pct = Math.round((diag.correct / diag.total) * 100);
                return (
                  <div key={diag.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-gray-900 text-sm">{diag.label}</span>
                      <span className="font-mono text-xs font-bold text-indigo-700">
                        {diag.correct} / {diag.total} ({pct}%)
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                      <div
                        className={`h-full transition-all ${
                          pct >= 80 ? "bg-emerald-500" : pct >= 50 ? "bg-amber-500" : "bg-red-500"
                        }`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="text-[11px] text-gray-500">
                      {pct >= 80
                        ? "✨ Strong mastery! Keep maintaining speed."
                        : pct >= 50
                        ? "💡 Moderate performance. Review missed keywords."
                        : "⚠️ Key weakness. Practice skimming and detail matching for this type."}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Detailed Review Table */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-gray-100">
              <h2 className="font-bold text-gray-900">Full Answer Key & Explanations</h2>
              <p className="text-gray-500 text-xs mt-0.5">
                Detailed explanations mapping directly back to passage paragraphs
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-12">Q</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Question</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-28">
                      Your Answer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-28">Correct</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase w-8">Result</th>
                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-500 uppercase">Explanation</th>
                  </tr>
                </thead>
                <tbody>
                  {sessionQs.map((sq, i) => {
                    const userAns = answers[sq.id] || "";
                    const correct = grade(userAns, sq);
                    return (
                      <tr key={sq.id} className={`border-b border-gray-50 ${correct ? "" : "bg-red-50/40"}`}>
                        <td className="px-4 py-3 font-bold text-gray-600">{startNum + i}</td>
                        <td className="px-4 py-3 text-gray-700 max-w-xs">
                          <span
                            className={`text-xs px-1.5 py-0.5 rounded font-semibold mr-1 ${qTypeLabel(sq.type).color}`}
                          >
                            {qTypeLabel(sq.type).label}
                          </span>
                          <span className="line-clamp-2">{sq.sentenceTemplate || sq.q}</span>
                        </td>
                        <td className="px-4 py-3">
                          <span
                            className={`text-sm font-mono px-2 py-0.5 rounded ${
                              correct ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
                            }`}
                          >
                            {userAns || "—"}
                          </span>
                        </td>
                        <td className="px-4 py-3">
                          <span className="text-sm font-mono bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded">
                            {sq.answer}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className={`text-base font-bold ${correct ? "text-emerald-500" : "text-red-500"}`}>
                            {correct ? "✓" : "✗"}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-600 text-xs leading-relaxed max-w-xs">{sq.explanation}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <ShareScore skill="Reading" band={band} />
        </div>
      </div>
    );

  // ── CONFIRM SUBMIT MODAL ──────────────────────────────────────────────────
  if (phase === "confirm")
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 max-w-md w-full shadow-lg text-center">
          <p className="text-4xl mb-4">📋</p>
          <h2 className="text-xl font-black text-gray-900 mb-2">Submit Your Test?</h2>
          <p className="text-gray-500 text-sm mb-2">
            You have answered <strong>{answeredCount} of {totalQs}</strong> questions.
          </p>
          {answeredCount < totalQs && (
            <p className="text-amber-600 text-xs bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 mb-4">
              ⚠️ {totalQs - answeredCount} question{totalQs - answeredCount > 1 ? "s" : ""} unanswered. Unanswered
              questions are counted incorrect.
            </p>
          )}
          {timerMinutes > 0 && <p className="text-gray-400 text-xs mb-6">Time remaining: {fmt(timeLeft)}</p>}
          <div className="flex gap-3">
            <button
              onClick={() => {
                setPhase("test");
                goTo(currentIdx);
              }}
              className="flex-1 border border-gray-200 text-gray-600 py-3 rounded-xl font-bold text-sm hover:bg-gray-50"
            >
              ← Review Answers
            </button>
            <button
              onClick={submitTest}
              className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-indigo-700"
            >
              Submit Test →
            </button>
          </div>
        </div>
      </div>
    );

  // ── TEST INTERFACE ──────────────────────────────────────────────────────────
  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden relative">
      {/* Top Header */}
      <header className="bg-indigo-700 text-white flex-shrink-0 z-30 shadow-md">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3 min-w-0">
            <button onClick={onBack} className="text-white/70 hover:text-white text-sm flex-shrink-0 font-semibold">
              ← Exit
            </button>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <p className="font-bold text-sm truncate">{passage.title}</p>
                <span className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full font-bold uppercase">
                  {mode === "practice" ? "Practice" : "Simulation"}
                </span>
              </div>
              <p className="text-indigo-300 text-xs">{passage.tag} · {passage.level}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Progress */}
            <div className="hidden sm:flex items-center gap-2 text-xs text-indigo-200">
              <span>{answeredCount}/{totalQs} answered</span>
            </div>

            {/* Timer */}
            {timerMinutes > 0 ? (
              <div
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-mono font-bold text-sm transition-all ${
                  urgent
                    ? "bg-red-500 text-white animate-pulse"
                    : warning5
                    ? "bg-orange-400 text-white"
                    : "bg-indigo-800 text-white"
                }`}
              >
                ⏱ {fmt(timeLeft)}
              </div>
            ) : (
              <div className="bg-indigo-800 text-indigo-200 px-3 py-1.5 rounded-lg text-xs font-semibold">
                ♾️ Unlimited Time
              </div>
            )}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-indigo-900">
          <div
            className="h-full bg-emerald-400 transition-all duration-300"
            style={{ width: `${(answeredCount / totalQs) * 100}%` }}
          />
        </div>
      </header>

      {/* Main Workspace (With padding bottom for fixed navbar) */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden pb-14">
        {/* LEFT / TOP: Passage Panel (Desktop: 50% width, Mobile: Top 45vh stacked) */}
        <div
          className={`bg-white border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col overflow-hidden transition-all ${
            passageOpen ? "h-[45vh] lg:h-auto w-full lg:w-1/2" : "h-11 lg:h-auto w-full lg:w-1/2"
          }`}
        >
          {/* Passage Toolbar */}
          <div className="flex-shrink-0 px-4 py-2 border-b border-gray-100 flex items-center justify-between bg-gray-50">
            <div>
              <p className="font-bold text-gray-900 text-xs sm:text-sm">{passage.title}</p>
              <p className="text-gray-400 text-[11px]">{passage.wordCount} words · {passage.tag}</p>
            </div>

            {/* Controls: Font size + Mobile Expand/Collapse */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-white border border-gray-200 rounded-lg p-0.5 text-xs font-bold text-gray-600">
                <button
                  onClick={() => setFontSize("sm")}
                  className={`px-2 py-1 rounded ${fontSize === "sm" ? "bg-indigo-100 text-indigo-700" : "hover:bg-gray-100"}`}
                  title="Small text"
                >
                  A-
                </button>
                <button
                  onClick={() => setFontSize("base")}
                  className={`px-2 py-1 rounded ${fontSize === "base" ? "bg-indigo-100 text-indigo-700" : "hover:bg-gray-100"}`}
                  title="Medium text"
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize("lg")}
                  className={`px-2 py-1 rounded ${fontSize === "lg" ? "bg-indigo-100 text-indigo-700" : "hover:bg-gray-100"}`}
                  title="Large text"
                >
                  A+
                </button>
              </div>

              <button
                onClick={() => setPassageOpen(v => !v)}
                className="lg:hidden text-xs text-gray-600 border border-gray-200 px-2.5 py-1 rounded-lg font-semibold hover:bg-gray-100"
              >
                {passageOpen ? "Collapse Passage" : "Expand Passage"}
              </button>
            </div>
          </div>

          {/* Scrollable Passage */}
          {passageOpen && (
            <div className="flex-1 overflow-y-auto px-6 py-5">
              <PassageDisplay
                text={passage.text}
                fontSize={fontSize}
                highlights={highlights}
                onAddHighlight={text => setHighlights(h => [...h, text])}
                onClearHighlights={() => setHighlights([])}
              />
            </div>
          )}
        </div>

        {/* RIGHT / BOTTOM: Questions Panel (Desktop: 50% width, Mobile: Bottom stacked) */}
        <div
          ref={qPanelRef}
          className="flex-1 flex flex-col overflow-y-auto bg-gray-50 w-full lg:w-1/2"
        >
          {/* Active Question Area */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {/* GROUP INSTRUCTION HEADER (Picture 1 & Picture 2 Benchmark) */}
            <div className="bg-emerald-50 border border-emerald-200/80 rounded-2xl p-4 shadow-sm">
              <h3 className="text-base font-black text-emerald-900 mb-1 flex items-center justify-between">
                <span>
                  Questions {currentGroup.startNumGroup}–{currentGroup.endNumGroup}
                </span>
                <button
                  onClick={toggleMark}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all ${
                    marked.has(q.id)
                      ? "bg-orange-400 text-white border-orange-500"
                      : "border-emerald-300 text-emerald-800 bg-white hover:bg-emerald-100"
                  }`}
                >
                  🚩 {marked.has(q.id) ? "Flagged" : "Flag"}
                </button>
              </h3>
              <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                {getGroupInstruction(q.type)}
              </p>
            </div>

            {/* INLINE QUESTION INPUT RENDERER */}

            {/* PARAGRAPH MATCHING (matching_info / matching_headings) */}
            {(q.type === "matching_info" || q.type === "matching_headings") && (
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-gray-700 text-base min-w-[24px]">
                    {startNum + currentIdx}.
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <select
                        value={answers[q.id] || ""}
                        onChange={e => handleAnswer(e.target.value)}
                        className="border border-gray-300 rounded-full px-4 py-2 text-sm bg-white font-bold text-indigo-900 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 appearance-none cursor-pointer"
                      >
                        <option value="">Select v</option>
                        {(q.type === "matching_headings" ? HEADING_NUMS : ["A", "B", "C", "D", "E", "F"]).map(opt => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      <span className="text-sm font-semibold text-gray-900 leading-snug">{q.q}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* SENTENCE / SUMMARY COMPLETION / SHORT ANSWER */}
            {isTextInput(q.type) && (
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
                {renderInlineSentenceInput(q.sentenceTemplate || q.q, q.id, startNum + currentIdx)}
              </div>
            )}

            {/* T/F/NG */}
            {q.type === "tfng" && (
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
                <p className="text-base font-semibold text-gray-900 mb-3">
                  <span className="font-bold mr-2 text-gray-700">{startNum + currentIdx}.</span>
                  {q.q}
                </p>
                <div className="space-y-2">
                  {["TRUE", "FALSE", "NOT GIVEN"].map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                        answers[q.id] === opt
                          ? "bg-indigo-100 border-indigo-500 text-indigo-900 shadow-sm"
                          : "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Y/N/NG */}
            {q.type === "ynng" && (
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
                <p className="text-base font-semibold text-gray-900 mb-3">
                  <span className="font-bold mr-2 text-gray-700">{startNum + currentIdx}.</span>
                  {q.q}
                </p>
                <div className="space-y-2">
                  {["YES", "NO", "NOT GIVEN"].map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(opt)}
                      className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                        answers[q.id] === opt
                          ? "bg-indigo-100 border-indigo-500 text-indigo-900 shadow-sm"
                          : "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* MCQ */}
            {q.type === "mcq" && q.opts && (
              <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
                <p className="text-base font-semibold text-gray-900 mb-3">
                  <span className="font-bold mr-2 text-gray-700">{startNum + currentIdx}.</span>
                  {q.q}
                </p>
                <div className="space-y-2">
                  {q.opts.map(opt => {
                    const letter = opt[0];
                    const chosen = answers[q.id] === letter;
                    return (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(letter)}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${
                          chosen
                            ? "bg-indigo-100 border-indigo-500 text-indigo-900 font-semibold shadow-sm"
                            : "bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50/50"
                        }`}
                      >
                        <span className="font-bold mr-2">{opt[0]}.</span>
                        {opt.slice(3)}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* PRACTICE MODE INSTANT CHECK & EXPLANATION TOGGLE */}
            {mode === "practice" && (
              <div className="mt-4 pt-4 border-t border-gray-200">
                {!checkedQs[q.id] ? (
                  <button
                    onClick={() => setCheckedQs(c => ({ ...c, [q.id]: true }))}
                    disabled={!answers[q.id]}
                    className="w-full bg-amber-500 text-white font-bold text-sm py-2.5 rounded-xl hover:bg-amber-600 transition-all disabled:opacity-40"
                  >
                    💡 Check Answer & View Explanation
                  </button>
                ) : (
                  <div
                    className={`p-4 rounded-xl border text-xs space-y-2 ${
                      grade(answers[q.id] || "", q)
                        ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                        : "bg-red-50 border-red-200 text-red-900"
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold">
                      <span>{grade(answers[q.id] || "", q) ? "✓ Correct Answer!" : "✗ Incorrect"}</span>
                      <span>Correct: {q.answer}</span>
                    </div>
                    <p className="leading-relaxed opacity-90">{q.explanation}</p>
                  </div>
                )}
              </div>
            )}

            <p className="text-xs text-gray-400 mt-4 text-center">
              ← → arrow keys to navigate · M to flag · Enter to go next
            </p>
          </div>
        </div>
      </div>

      {/* FIXED BOTTOM NAVIGATION BAR (PICTURE 1 & PICTURE 2 BENCHMARK) */}
      <footer className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 px-4 py-2 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-3 border border-emerald-600/60 rounded-full px-3.5 py-1.5 bg-emerald-50/70 shadow-sm overflow-x-auto max-w-[70vw] sm:max-w-none">
          <span className="font-bold text-xs text-emerald-900 tracking-wider uppercase shrink-0">Part 1</span>
          <div className="flex items-center gap-1.5">
            {sessionQs.map((sq, idx) => {
              const isAnswered = !!answers[sq.id];
              const isMarked = marked.has(sq.id);
              const isCurrent = idx === currentIdx;
              return (
                <button
                  key={sq.id}
                  onClick={() => goTo(idx)}
                  title={`Question ${startNum + idx}${isMarked ? " (flagged)" : ""}`}
                  className={`relative w-7 h-7 rounded-full text-xs font-bold transition-all flex items-center justify-center shrink-0 ${
                    isCurrent
                      ? "bg-indigo-600 text-white ring-2 ring-indigo-300 scale-105"
                      : isAnswered
                      ? "bg-emerald-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-gray-500"
                  }`}
                >
                  {startNum + idx}
                  {isMarked && (
                    <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-orange-500 rounded-full border border-white" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={goPrev}
            disabled={currentIdx === 0}
            className="px-3.5 py-1.5 border border-gray-300 rounded-full font-bold text-xs text-gray-700 hover:bg-gray-100 disabled:opacity-30"
          >
            ← Prev
          </button>
          {currentIdx < totalQs - 1 ? (
            <button
              onClick={goNext}
              className="px-4 py-1.5 bg-indigo-600 text-white rounded-full font-bold text-xs hover:bg-indigo-700 shadow-sm"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={() => setPhase("confirm")}
              className="px-4 py-1.5 bg-emerald-600 text-white rounded-full font-bold text-xs hover:bg-emerald-700 shadow-sm"
            >
              Submit →
            </button>
          )}
        </div>
      </footer>
    </div>
  );
}

// ── PRE-TEST MODE CONFIGURATION MODAL ─────────────────────────────────────────
function PreTestModal({
  passage,
  sessionQs,
  startNum,
  onClose,
  onStart,
}: {
  passage: Passage;
  sessionQs: ReadingQ[];
  startNum: number;
  onClose: () => void;
  onStart: (config: TestConfig) => void;
}) {
  const [mode, setMode] = useState<"practice" | "simulation">("simulation");
  const [timerMinutes, setTimerMinutes] = useState<number>(20);

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white border border-gray-200 rounded-3xl max-w-lg w-full shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-700 to-indigo-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-xl font-bold w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10"
          >
            ✕
          </button>
          <span className="text-xs font-bold bg-white/20 border border-white/25 px-3 py-1 rounded-full uppercase tracking-wider">
            Passage Configuration
          </span>
          <h2 className="text-2xl font-black mt-2 leading-tight">{passage.title}</h2>
          <p className="text-indigo-200 text-xs mt-1">
            {passage.wordCount} words · {sessionQs.length} questions · {passage.level}
          </p>
        </div>

        <div className="p-6 space-y-6">
          {/* Mode Selector */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Choose Test Mode
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMode("simulation")}
                className={`p-4 rounded-2xl border text-left transition-all relative ${
                  mode === "simulation"
                    ? "bg-indigo-50 border-indigo-600 ring-2 ring-indigo-200 text-indigo-900"
                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl">⏱</span>
                  {mode === "simulation" && <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />}
                </div>
                <p className="font-bold text-sm">Simulation Test</p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">
                  Timed exam conditions. Results and explanations upon completion.
                </p>
              </button>

              <button
                type="button"
                onClick={() => setMode("practice")}
                className={`p-4 rounded-2xl border text-left transition-all relative ${
                  mode === "practice"
                    ? "bg-amber-50 border-amber-600 ring-2 ring-amber-200 text-amber-900"
                    : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xl">💡</span>
                  {mode === "practice" && <span className="w-2.5 h-2.5 rounded-full bg-amber-600" />}
                </div>
                <p className="font-bold text-sm">Practice Mode</p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">
                  Instant answer checking per question & immediate explanations.
                </p>
              </button>
            </div>
          </div>

          {/* Custom Timer Selector */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Timer Setting
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { mins: 10, label: "10 mins" },
                { mins: 15, label: "15 mins" },
                { mins: 20, label: "20 mins (Official)" },
                { mins: 0, label: "No Timer ♾️" },
              ].map(opt => (
                <button
                  key={opt.mins}
                  type="button"
                  onClick={() => setTimerMinutes(opt.mins)}
                  className={`py-2.5 px-2 rounded-xl text-xs font-bold border transition-all ${
                    timerMinutes === opt.mins
                      ? "bg-indigo-600 text-white border-indigo-700"
                      : "bg-white border-gray-200 text-gray-700 hover:border-gray-300"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Launch CTA */}
          <div className="pt-2">
            <button
              onClick={() => onStart({ passage, sessionQs, startNum, mode, timerMinutes })}
              className="w-full bg-indigo-600 text-white py-3.5 rounded-2xl font-black text-sm hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              🚀 Start Reading Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN READING HUB ──────────────────────────────────────────────────────────
const LEVEL_COLORS: Record<string, string> = {
  Academic: "bg-indigo-100 text-indigo-700",
  "General Training": "bg-teal-100 text-teal-700",
  Advanced: "bg-purple-100 text-purple-700",
  Intermediate: "bg-blue-100 text-blue-700",
};

export default function ReadingHub({ localPassages = [] }: { localPassages?: Passage[] }) {
  const [activeTestConfig, setActiveTestConfig] = useState<TestConfig | null>(null);
  const [modalData, setModalData] = useState<{ passage: Passage; sessionQs: ReadingQ[]; startNum: number } | null>(
    null
  );

  const [sessionKey, setSessionKey] = useState(0);

  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [levelFilter, setLevelFilter] = useState<"all" | "Academic" | "General Training" | "completed" | "unattempted">(
    "all"
  );
  const [sortBy, setSortBy] = useState<"default" | "title" | "words">("default");

  // Local storage completion history
  const [historyMap, setHistoryMap] = useState<Record<string, { band: number; score: number; total: number; date: string }>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem("ielts_reading_results_history");
      if (raw) setHistoryMap(JSON.parse(raw));
    } catch {}
  }, []);

  const { data: passages, loading, fromFirebase } = useAdminCollection(
    "admin_ielts_reading",
    transformPassages,
    localPassages.length ? localPassages : PASSAGES
  );

  const sessionData = useMemo(() => {
    let num = 1;
    return passages.map(p => {
      const sessionQs = selectQuestions(p.questions, QUESTIONS_PER_PASSAGE);
      const startNum = num;
      num += sessionQs.length;
      return { passage: p, sessionQs, startNum };
    });
  }, [sessionKey, passages]);

  // Filtered and Sorted Passages
  const filteredSessionData = useMemo(() => {
    return sessionData
      .filter(({ passage }) => {
        // Search query
        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          passage.title.toLowerCase().includes(q) ||
          passage.tag.toLowerCase().includes(q) ||
          passage.level.toLowerCase().includes(q);

        // Level filter
        let matchesFilter = true;
        if (levelFilter === "Academic") matchesFilter = passage.level === "Academic";
        else if (levelFilter === "General Training") matchesFilter = passage.level === "General Training";
        else if (levelFilter === "completed") matchesFilter = !!historyMap[passage.id];
        else if (levelFilter === "unattempted") matchesFilter = !historyMap[passage.id];

        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        if (sortBy === "title") return a.passage.title.localeCompare(b.passage.title);
        if (sortBy === "words") return b.passage.wordCount - a.passage.wordCount;
        return 0;
      });
  }, [sessionData, searchQuery, levelFilter, sortBy, historyMap]);

  // Active Test Execution
  if (activeTestConfig) {
    return (
      <IELTSReadingTest
        passage={activeTestConfig.passage}
        sessionQs={activeTestConfig.sessionQs}
        startNum={activeTestConfig.startNum}
        mode={activeTestConfig.mode}
        timerMinutes={activeTestConfig.timerMinutes}
        onBack={() => setActiveTestConfig(null)}
        onRetry={() => {
          setSessionKey(k => k + 1);
          setActiveTestConfig(null);
          setTimeout(() => {
            const idx = passages.findIndex(p => p.id === activeTestConfig.passage.id);
            if (idx >= 0 && sessionData[idx]) {
              setActiveTestConfig({
                ...sessionData[idx],
                mode: activeTestConfig.mode,
                timerMinutes: activeTestConfig.timerMinutes,
              });
            }
          }, 100);
        }}
      />
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600">
          IELTS
        </Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">Reading</span>
      </div>

      {/* Header Title */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6 justify-between">
        <div className="flex items-start gap-4">
          <span className="text-5xl">📖</span>
          <div>
            <h1 className="text-3xl font-black text-gray-900 mb-1">IELTS Academic Reading</h1>
            <p className="text-gray-500 text-sm">
              {loading
                ? "Loading passages…"
                : `${passages.length} passages · ${QUESTIONS_PER_PASSAGE} questions each · 20 min per passage`}
              {fromFirebase && <span className="ml-2 text-indigo-600 font-semibold">· from admin panel</span>}
            </p>
          </div>
        </div>

        <button
          onClick={() => setSessionKey(k => k + 1)}
          className="text-xs border border-gray-200 text-gray-600 hover:text-indigo-600 hover:border-indigo-300 px-3 py-2 rounded-xl transition-all shrink-0 font-bold self-start"
        >
          🔀 Reshuffle Questions
        </button>
      </div>

      {/* SEARCH AND FILTER BAR */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 mb-6 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search bar */}
          <div className="relative flex-1">
            <span className="absolute left-3.5 top-2.5 text-gray-400 text-sm">🔍</span>
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search reading passages by topic or keyword..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-gray-200 text-sm bg-gray-50 focus:bg-white focus:outline-none focus:border-indigo-500 transition-all"
            />
          </div>

          {/* Sort dropdown */}
          <select
            value={sortBy}
            onChange={e => setSortBy(e.target.value as "default" | "title" | "words")}
            className="border border-gray-200 rounded-xl px-3 py-2 text-xs font-semibold bg-gray-50 focus:bg-white focus:outline-none focus:border-indigo-500"
          >
            <option value="default">Sort: Default</option>
            <option value="title">Sort: Title (A–Z)</option>
            <option value="words">Sort: Longest Word Count</option>
          </select>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-gray-100">
          <span className="text-xs text-gray-400 self-center font-medium mr-1">Filter:</span>
          {[
            { id: "all", label: "All Passages" },
            { id: "Academic", label: "Academic" },
            { id: "General Training", label: "General Training" },
            { id: "completed", label: "✓ Completed" },
            { id: "unattempted", label: "Unattempted" },
          ].map(f => (
            <button
              key={f.id}
              onClick={() => setLevelFilter(f.id as typeof levelFilter)}
              className={`text-xs px-3 py-1 rounded-full font-semibold transition-all ${
                levelFilter === f.id
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Official format info card */}
      <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5 mb-6">
        <p className="font-bold text-indigo-800 mb-3 text-sm flex items-center gap-2">
          📋 Official IELTS Computer Test Features
        </p>
        <div className="grid sm:grid-cols-3 gap-3 text-xs text-indigo-700">
          <div className="flex gap-2">
            <span>⏱</span>
            <span>Flexible timer settings & Practice vs Simulation mode</span>
          </div>
          <div className="flex gap-2">
            <span>🖍</span>
            <span>Passage text highlighting & font size controls</span>
          </div>
          <div className="flex gap-2">
            <span>🚩</span>
            <span>Flag questions to review later</span>
          </div>
          <div className="flex gap-2">
            <span>[A][B]</span>
            <span>Paragraph labels in passage</span>
          </div>
          <div className="flex gap-2">
            <span>⌨️</span>
            <span>Arrow keys + M key to navigate/flag</span>
          </div>
          <div className="flex gap-2">
            <span>📊</span>
            <span>Performance breakdown by question type</span>
          </div>
        </div>
      </div>

      {/* Skeleton Loading */}
      {loading && (
        <div className="grid sm:grid-cols-2 gap-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/4 mb-3" />
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-full mb-4" />
              <div className="h-10 bg-gray-200 rounded-xl" />
            </div>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && filteredSessionData.length === 0 && (
        <div className="text-center py-16 text-gray-400 bg-white border border-gray-200 rounded-2xl">
          <p className="text-4xl mb-3">📭</p>
          <p className="font-semibold text-gray-700">No passages match your filter</p>
          <p className="text-sm mt-1">Try clearing your search query or filter settings.</p>
          <button
            onClick={() => {
              setSearchQuery("");
              setLevelFilter("all");
            }}
            className="mt-4 text-xs bg-indigo-50 text-indigo-600 px-4 py-2 rounded-xl font-bold hover:bg-indigo-100"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* Passage Cards Grid */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filteredSessionData.map(({ passage, sessionQs, startNum }) => {
          const hist = historyMap[passage.id];
          return (
            <div
              key={passage.id}
              className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                      LEVEL_COLORS[passage.level] || "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {passage.level}
                  </span>
                  {hist ? (
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      ✓ Band {hist.band}
                    </span>
                  ) : (
                    <span className="text-xs text-gray-400">
                      Q{startNum}–Q{startNum + sessionQs.length - 1}
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-gray-900 text-sm mb-1">{passage.title}</h3>
                <p className="text-gray-500 text-xs mb-1">{passage.tag}</p>
                <p className="text-gray-400 text-xs mb-4">
                  {passage.wordCount} words · {sessionQs.length} questions · ~15-20 min
                </p>
              </div>

              <button
                onClick={() => setModalData({ passage, sessionQs, startNum })}
                className="w-full bg-indigo-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-all flex items-center justify-center gap-1"
              >
                Choose Mode & Start →
              </button>
            </div>
          );
        })}
      </div>

      {/* PRE-TEST CONFIGURATION MODAL */}
      {modalData && (
        <PreTestModal
          passage={modalData.passage}
          sessionQs={modalData.sessionQs}
          startNum={modalData.startNum}
          onClose={() => setModalData(null)}
          onStart={config => {
            setModalData(null);
            setActiveTestConfig(config);
          }}
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
