"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

interface IELTSResult {
  overall: number;
  ta: { score: number; feedback: string };
  cc: { score: number; feedback: string };
  lr: { score: number; feedback: string };
  gr: { score: number; feedback: string };
  summary: string;
  top_fix: string;
}

const CRITERIA: { key: keyof Pick<IELTSResult, "ta" | "cc" | "lr" | "gr">; label: string }[] = [
  { key: "ta", label: "Task Achievement" },
  { key: "cc", label: "Coherence & Cohesion" },
  { key: "lr", label: "Lexical Resource" },
  { key: "gr", label: "Grammatical Range & Accuracy" },
];

function bandColor(s: number) {
  return s >= 7 ? "text-green-700" : s >= 5.5 ? "text-amber-700" : "text-red-600";
}
function bandBg(s: number) {
  return s >= 7 ? "bg-green-50 border-green-200" : s >= 5.5 ? "bg-amber-50 border-amber-200" : "bg-red-50 border-red-200";
}
function barColor(s: number) {
  return s >= 7 ? "bg-green-500" : s >= 5.5 ? "bg-amber-500" : "bg-red-500";
}
function fmtScore(n: number) {
  return Number.isInteger(n) ? String(n) : n.toFixed(1);
}

interface Prompt {
  id: string;
  task: 1 | 2;
  title: string;
  prompt: string;
  minWords: number;
  timeMin: number;
  tips: string[];
  samplePoints: string[];
}

const PROMPTS: Prompt[] = [
  {
    id: "t1-bar-chart",
    task: 1,
    title: "Bar Chart — University Subjects",
    timeMin: 20,
    minWords: 150,
    prompt: `The bar chart below shows the percentage of students who chose different subjects at a UK university in 2015 and 2023.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

[Chart description: In 2015, Business was the most popular subject at 28%, followed by Engineering at 22%, Arts at 18%, Sciences at 17%, and Law at 15%. By 2023, Sciences had risen sharply to 30%, Business fell to 21%, Engineering remained steady at 22%, Arts declined to 12%, and Law grew to 15%.]`,
    tips: [
      "Do NOT give your opinion — only describe the data",
      "Open with an overview paragraph summarising the main trend",
      "Group and compare data logically (highest to lowest, or changes over time)",
      "Use precise language: 'rose sharply', 'remained stable', 'accounted for approximately'",
    ],
    samplePoints: [
      "Sciences saw the most significant increase (+13%), becoming the most popular subject by 2023",
      "Business declined from the top position (28%) to 21% over the period",
      "Engineering remained notably stable at 22% across both years",
      "Arts experienced the largest fall, dropping 6 percentage points",
    ],
  },
  {
    id: "t1-line-graph",
    task: 1,
    title: "Line Graph — Coffee Consumption",
    timeMin: 20,
    minWords: 150,
    prompt: `The line graph below shows annual coffee consumption (in kilograms per person) in four countries between 2000 and 2020.

Summarise the information by selecting and reporting the main features, and make comparisons where relevant.

[Graph description: Finland maintained the highest consumption throughout, starting at 11kg in 2000 and rising to 13kg by 2020. USA grew steadily from 4kg to 7kg. Brazil rose from 3kg to 6.5kg. China started at 0.5kg in 2000 and rose to 2.5kg by 2020, the steepest relative increase.]`,
    tips: [
      "Begin with an overview of the overall trend across all countries",
      "Describe the highest and lowest values and how they changed",
      "Use appropriate language for trends: 'climbed steadily', 'fluctuated', 'levelled off'",
      "Avoid describing every single data point — focus on key changes",
    ],
    samplePoints: [
      "Finland consistently led all four countries, rising from 11kg to 13kg",
      "China showed the most dramatic relative growth despite starting lowest",
      "USA and Brazil followed similar upward patterns throughout the period",
      "All four countries showed growth — none declined over the 20-year period",
    ],
  },
  {
    id: "t2-technology",
    task: 2,
    title: "Technology & Society",
    timeMin: 40,
    minWords: 250,
    prompt: `Some people believe that technology has made modern life more complicated. Others argue that technology simplifies our lives.

Discuss both views and give your own opinion.

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    tips: [
      "Structure: Introduction → View 1 body paragraph → View 2 body paragraph → Your opinion → Conclusion",
      "Each body paragraph: topic sentence → explanation → example → link",
      "Clearly state your own opinion — do not sit on the fence",
      "Aim for varied sentence structures and sophisticated vocabulary",
      "Avoid repeating words from the question — paraphrase in your introduction",
    ],
    samplePoints: [
      "View 1 (complicates): information overload, constant connectivity expectations, cyber security risks, learning curve for new tools",
      "View 2 (simplifies): instant communication, access to information, automation of repetitive tasks, remote working flexibility",
      "Balanced opinion: technology simplifies routine tasks but creates new complexities; net benefit depends on digital literacy",
    ],
  },
  {
    id: "t2-environment",
    task: 2,
    title: "Environment & Individual Responsibility",
    timeMin: 40,
    minWords: 250,
    prompt: `Some people think that individuals can do very little to address environmental problems and that it is governments and large corporations that must take responsibility.

To what extent do you agree or disagree?

Give reasons for your answer and include any relevant examples from your own knowledge or experience.`,
    tips: [
      "For 'to what extent' — decide your position: fully agree, partially agree, or disagree",
      "Partial agreement: acknowledge individual actions matter but argue systemic change is essential",
      "Include specific, realistic examples — e.g. carbon taxes, Paris Agreement, recycling schemes",
      "Avoid vague statements — be precise about what governments or individuals can do",
    ],
    samplePoints: [
      "Individual actions have limited systemic impact — one person's carbon footprint vs industrial emissions",
      "Governments can mandate emissions targets, fund renewables, enforce regulations",
      "Corporations control production — supply chain changes have far greater scale than consumer choices",
      "However, collective consumer demand can pressure corporations and influence policy",
    ],
  },
];

type TimerState = "idle" | "running" | "paused" | "finished";

function useTimer(totalSeconds: number) {
  const [remaining, setRemaining] = useState(totalSeconds);
  const [state, setState] = useState<TimerState>("idle");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const start = useCallback(() => {
    setState("running");
    intervalRef.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          clearInterval(intervalRef.current!);
          setState("finished");
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  }, []);

  const pause = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setState("paused");
  }, []);

  const resume = useCallback(() => {
    setState("running");
    intervalRef.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          clearInterval(intervalRef.current!);
          setState("finished");
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  }, []);

  const reset = useCallback((secs: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setRemaining(secs);
    setState("idle");
  }, []);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");
  return { display: `${mm}:${ss}`, state, remaining, start, pause, resume, reset };
}

export default function WritingPage() {
  const [selected, setSelected] = useState<Prompt | null>(null);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [tab, setTab] = useState<1 | 2>(1);
  const [aiResult, setAiResult] = useState<IELTSResult | null>(null);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const timer = useTimer(selected ? selected.timeMin * 60 : 1200);

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  function selectPrompt(p: Prompt) {
    setSelected(p);
    setText("");
    setSubmitted(false);
    setAiResult(null);
    setAiError(null);
    timer.reset(p.timeMin * 60);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function handleSubmit() {
    if (!selected) return;
    timer.pause();
    setSubmitted(true);
    setAiResult(null);
    setAiError(null);
    setAiLoading(true);
    window.scrollTo({ top: 0, behavior: "smooth" });

    try {
      const res = await fetch("/api/ielts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: selected.prompt, response: text }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAiError(data.error || "Scoring failed. Please try again.");
      } else {
        setAiResult(data as IELTSResult);
      }
    } catch {
      setAiError("Could not reach the scoring service. Check your connection and try again.");
    } finally {
      setAiLoading(false);
    }
  }

  function handleBack() {
    setSelected(null);
    setText("");
    setSubmitted(false);
    setAiResult(null);
    setAiError(null);
  }

  const task1 = PROMPTS.filter(p => p.task === 1);
  const task2 = PROMPTS.filter(p => p.task === 2);
  const shown  = tab === 1 ? task1 : task2;

  if (selected) {
    const pctDone = Math.min(wordCount / selected.minWords, 1);
    const timerWarning = timer.remaining < 300 && timer.state === "running";
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
          <span>›</span>
          <Link href="/ielts/writing" className="hover:text-indigo-600 transition-colors">Writing</Link>
          <span>›</span>
          <span className="text-gray-600 font-medium">Task {selected.task}</span>
        </div>

        {/* ── Loading ─────────────────────────────────────────────────────── */}
        {submitted && aiLoading && (
          <div className="bg-violet-50 border border-violet-200 rounded-2xl p-8 mb-8 flex flex-col items-center gap-3 text-center">
            <div className="w-9 h-9 border-4 border-violet-200 border-t-violet-600 rounded-full animate-spin" />
            <p className="font-semibold text-violet-800">Scoring your response…</p>
            <p className="text-violet-500 text-sm">Gemini is evaluating your essay against IELTS band descriptors</p>
          </div>
        )}

        {/* ── Error ───────────────────────────────────────────────────────── */}
        {submitted && aiError && !aiLoading && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-8">
            <p className="font-bold text-red-800 mb-1">⚠ Scoring failed</p>
            <p className="text-red-700 text-sm mb-4">{aiError}</p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleSubmit}
                className="bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors"
              >
                Retry
              </button>
              <button
                onClick={() => { setSubmitted(false); setAiError(null); }}
                className="border border-red-200 text-red-700 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-red-50 transition-colors"
              >
                Edit Response
              </button>
              <button onClick={handleBack} className="border border-gray-200 text-gray-600 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
                Try Another Prompt
              </button>
            </div>
          </div>
        )}

        {/* ── AI results ──────────────────────────────────────────────────── */}
        {submitted && aiResult && !aiLoading && (
          <div className="mb-8 space-y-5">
            {/* Overall band score */}
            <div className={`border rounded-2xl p-6 text-center ${bandBg(aiResult.overall)}`}>
              <p className={`text-6xl font-black leading-none mb-1 ${bandColor(aiResult.overall)}`}>
                {fmtScore(aiResult.overall)}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Overall Band Score</p>
              <p className="text-sm text-gray-600 italic max-w-md mx-auto">{aiResult.summary}</p>
            </div>

            {/* Criterion cards — 2×2 grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {CRITERIA.map(({ key, label }) => {
                const c = aiResult[key];
                return (
                  <div key={key} className="bg-white border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</span>
                      <span className={`text-lg font-black ${bandColor(c.score)}`}>
                        {fmtScore(c.score)}<span className="text-xs font-normal text-gray-400">/9</span>
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                      <div
                        className={`h-full rounded-full transition-all duration-500 ${barColor(c.score)}`}
                        style={{ width: `${(c.score / 9) * 100}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{c.feedback}</p>
                  </div>
                );
              })}
            </div>

            {/* Priority fix */}
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1">⚡ Priority Fix</p>
              <p className="text-sm text-indigo-900 font-medium leading-relaxed">{aiResult.top_fix}</p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => { setSubmitted(false); setAiResult(null); }}
                className="bg-violet-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors"
              >
                Edit &amp; Resubmit
              </button>
              <button onClick={handleBack} className="border border-violet-300 text-violet-700 px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-violet-50 transition-colors">
                Try Another Prompt
              </button>
            </div>
          </div>
        )}

        {/* Task prompt */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs bg-violet-100 text-violet-700 px-2.5 py-1 rounded-full font-bold">Task {selected.task}</span>
            <span className="text-xs bg-gray-100 text-gray-500 px-2.5 py-1 rounded-full">{selected.timeMin} min · {selected.minWords}+ words</span>
          </div>
          <h2 className="font-bold text-gray-900 mb-3">{selected.title}</h2>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">{selected.prompt}</p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-violet-50 border border-violet-100 rounded-xl p-4 mb-6">
          <h3 className="font-semibold text-violet-800 text-sm mb-2">Task {selected.task} Tips</h3>
          <ul className="space-y-1">
            {selected.tips.map((t, i) => <li key={i} className="text-xs text-violet-700">• {t}</li>)}
          </ul>
        </div>

        {/* Timer + stats bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 bg-white border border-gray-200 rounded-2xl px-5 py-3 mb-4">
          <div className="flex items-center gap-4">
            <div className={`text-2xl font-black font-mono ${timerWarning ? "text-red-600 animate-pulse" : "text-gray-900"}`}>
              {timer.display}
            </div>
            <div className="flex gap-2">
              {timer.state === "idle" && (
                <button onClick={timer.start} className="bg-violet-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-violet-700 transition-colors">Start Timer</button>
              )}
              {timer.state === "running" && (
                <button onClick={timer.pause} className="bg-gray-200 text-gray-700 px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-gray-300 transition-colors">Pause</button>
              )}
              {timer.state === "paused" && (
                <button onClick={timer.resume} className="bg-violet-600 text-white px-4 py-1.5 rounded-lg text-xs font-bold hover:bg-violet-700 transition-colors">Resume</button>
              )}
              {timer.state === "finished" && <span className="text-red-600 text-xs font-bold">Time up!</span>}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-sm font-semibold text-gray-700">
              {wordCount} <span className="text-gray-400 font-normal">/ {selected.minWords} words</span>
            </div>
            <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-violet-500 rounded-full transition-all" style={{ width: `${pctDone * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Textarea */}
        <textarea
          value={text}
          onChange={e => setText(e.target.value)}
          disabled={submitted}
          placeholder={`Write your Task ${selected.task} response here…`}
          className="w-full h-80 border border-gray-200 rounded-2xl p-5 text-sm text-gray-700 leading-relaxed focus:outline-none focus:border-violet-400 resize-none disabled:bg-gray-50 mb-4"
        />

        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={wordCount < selected.minWords}
            className="w-full bg-violet-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {wordCount < selected.minWords
              ? `Write at least ${selected.minWords} words (${selected.minWords - wordCount} more needed)`
              : "Submit Response →"}
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
        <span className="text-gray-600 font-medium">Writing</span>
      </div>

      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">✍️</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">IELTS Writing Practice</h1>
            <p className="text-gray-500 mt-1">Timed Task 1 and Task 2 practice with word counter</p>
          </div>
        </div>
      </div>

      {/* Task comparison */}
      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {[
          { task: 1, time: "20 minutes", words: "150+ words", desc: "Describe a graph, chart, diagram or process. No personal opinion required.", color: "bg-blue-50 border-blue-200" },
          { task: 2, time: "40 minutes", words: "250+ words", desc: "Write an essay responding to a point of view, argument or problem.", color: "bg-violet-50 border-violet-200" },
        ].map(t => (
          <div key={t.task} className={`border rounded-2xl p-5 ${t.color}`}>
            <p className="font-black text-2xl text-gray-800 mb-1">Task {t.task}</p>
            <p className="text-sm text-gray-600 mb-1">{t.time} · {t.words}</p>
            <p className="text-sm text-gray-500">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Tab selector */}
      <div className="flex gap-2 mb-6">
        <button onClick={() => setTab(1)} className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-colors ${tab === 1 ? "bg-violet-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-violet-300"}`}>
          Task 1 — Graph Description
        </button>
        <button onClick={() => setTab(2)} className={`px-5 py-2.5 rounded-xl font-bold text-sm transition-colors ${tab === 2 ? "bg-violet-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-violet-300"}`}>
          Task 2 — Essay
        </button>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {shown.map(p => (
          <div key={p.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-violet-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${p.task === 1 ? "bg-blue-50 text-blue-700" : "bg-violet-50 text-violet-700"}`}>
                Task {p.task}
              </span>
              <span className="text-xs text-gray-400">{p.timeMin} min · {p.minWords}+ words</span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-5 line-clamp-3">{p.prompt.slice(0, 150)}…</p>
            <button onClick={() => selectPrompt(p)} className="w-full bg-violet-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-violet-700 transition-colors">
              Start Writing →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/ielts" className="inline-block text-indigo-600 text-sm font-semibold hover:underline">← Back to IELTS Hub</Link>
      </div>
    </div>
  );
}
