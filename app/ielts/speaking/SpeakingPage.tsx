"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { SPEAKING_TOPICS as TOPICS, type SpeakingTopic as Topic } from "@/lib/ielts-speaking-data";


// ---------- Helper Functions for Band Score Display ----------
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

// ---------- AI Grading Result (text-based: 3 criteria, no pronunciation) ----------
interface Criterion { score: number; feedback: string; }
interface IELTSResult {
  overall: number;
  scope?: string;
  lr: Criterion;   // Lexical Resource
  gra: Criterion;  // Grammatical Range & Accuracy
  coh: Criterion;  // Coherence & Organisation
  summary: string;
  top_fix: string;
}

const SPEAKING_CRITERIA = [
  { key: "lr",  label: "Lexical Resource (Vocabulary)" },
  { key: "gra", label: "Grammatical Range & Accuracy" },
  { key: "coh", label: "Coherence & Organisation" },
];

// ---------- Cue Card Timer Component (unchanged from your original) ----------
function CueCardTimer() {
  const [phase, setPhase] = useState<"prep" | "speak" | "done" | "idle">("idle");
  const [remaining, setRemaining] = useState(60);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startPrep = useCallback(() => {
    setPhase("prep");
    setRemaining(60);
    intervalRef.current = setInterval(() => {
      setRemaining(r => {
        if (r <= 1) {
          clearInterval(intervalRef.current!);
          setPhase("speak");
          setRemaining(120);
          intervalRef.current = setInterval(() => {
            setRemaining(r2 => {
              if (r2 <= 1) {
                clearInterval(intervalRef.current!);
                setPhase("done");
                return 0;
              }
              return r2 - 1;
            });
          }, 1000);
          return 0;
        }
        return r - 1;
      });
    }, 1000);
  }, []);

  const reset = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setPhase("idle");
    setRemaining(60);
  }, []);

  useEffect(() => () => { if (intervalRef.current) clearInterval(intervalRef.current); }, []);

  const mm = String(Math.floor(remaining / 60)).padStart(2, "0");
  const ss = String(remaining % 60).padStart(2, "0");

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-0.5">
            {phase === "idle" ? "Cue Card Timer" : phase === "prep" ? "Preparation Time" : phase === "speak" ? "Speaking Time" : "Time Up!"}
          </p>
          <p className="text-3xl font-black text-amber-800 font-mono">{mm}:{ss}</p>
        </div>
        <div className="flex gap-2">
          {phase === "idle" && (
            <button onClick={startPrep} className="bg-amber-600 text-white px-4 py-2 rounded-xl font-bold text-sm hover:bg-amber-700 transition-colors">
              Start (1 min prep → 2 min speak)
            </button>
          )}
          {(phase === "prep" || phase === "speak" || phase === "done") && (
            <button onClick={reset} className="border border-amber-400 text-amber-700 px-4 py-2 rounded-xl font-bold text-sm hover:bg-amber-100 transition-colors">
              Reset
            </button>
          )}
        </div>
      </div>
      {phase === "prep" && <p className="text-xs text-amber-600 mt-2">Use your preparation time to note key points and structure your response.</p>}
      {phase === "speak" && <p className="text-xs text-amber-600 mt-2">Start speaking! Cover all the bullet points on the cue card.</p>}
      {phase === "done" && <p className="text-xs text-green-700 mt-2 font-medium">Great job! You can now compare your answer with the sample response below.</p>}
    </div>
  );
}

// ---------- Main Speaking Page Component ----------
export default function SpeakingPage() {
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activePart, setActivePart] = useState<1 | 2 | 3>(1);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  // --- Speech & Grading States ---
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiResult, setAiResult] = useState<IELTSResult | null>(null);
  const [aiError, setAiError] = useState<string | null>(null);

  const {
    transcript: liveTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable
  } = useSpeechRecognition();

  // Update local transcript when liveTranscript changes
  useEffect(() => {
    if (isRecording) {
      setTranscript(liveTranscript);
    }
  }, [liveTranscript, isRecording]);

  const handleStartRecording = () => {
    resetTranscript();
    setTranscript("");
    setSubmitted(false);
    setAiResult(null);
    setAiError(null);
    SpeechRecognition.startListening({ continuous: true, language: 'en-US' });
    setIsRecording(true);
  };

  const handleStopRecording = () => {
  SpeechRecognition.stopListening();
  setTranscript(liveTranscript); // ← add this BEFORE setIsRecording
  setIsRecording(false);
};

  const handleSubmit = async () => {
    if (!transcript || transcript.trim().length < 30) {
  setAiError("Please speak for longer before submitting."); // ← clearer message
  return;
}
    if (!activeTopic) return;

    setSubmitted(true);
    setAiLoading(true);
    setAiError(null);

    // Build a prompt based on current part
    let taskPrompt = "";
    if (activePart === 2 && activeTopic.cueCard) {
      taskPrompt = `Cue Card: ${activeTopic.cueCard.title}\nPoints: ${activeTopic.cueCard.points.join(", ")}\nFollow-up: ${activeTopic.cueCard.followUp}`;
    } else if (activePart === 1) {
      taskPrompt = `Part 1 question (example): ${activeTopic.part1[0]?.q || "Tell me about yourself."}`;
    } else {
      taskPrompt = `Part 3 discussion question: ${activeTopic.part3[0]?.q || "What are the effects of technology on society?"}`;
    }

    try {
      const res = await fetch("/api/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task: taskPrompt,
          response: transcript,
          part: activePart,
          topic: activeTopic.theme,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAiError(data.error || "Grading failed. Please try again.");
      } else {
        setAiResult(data as IELTSResult);
      }
    } catch {
      setAiError("Could not reach the scoring service. Check your connection.");
    } finally {
      setAiLoading(false);
    }
  };

  function toggle(key: string) {
    setExpanded(e => ({ ...e, [key]: !e[key] }));
  }

  function openTopic(t: Topic) {
    setActiveTopic(t);
    setActivePart(1);
    setExpanded({});
    setTranscript("");
    setSubmitted(false);
    setAiResult(null);
    setAiError(null);
    setIsRecording(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // If browser doesn't support speech recognition
  if (!browserSupportsSpeechRecognition) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6 text-center">
          <p className="text-red-700">⚠️ Your browser does not support speech recognition. Please use Chrome, Edge, or Safari.</p>
          <Link href="/ielts" className="inline-block mt-4 text-indigo-600">← Back to IELTS Hub</Link>
        </div>
      </div>
    );
  }

  // ---------------- Topic View (when a topic is selected) ----------------
  if (activeTopic) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
          <span>›</span>
          <Link href="/ielts/speaking" className="hover:text-indigo-600 transition-colors">Speaking</Link>
          <span>›</span>
          <span className="text-gray-600 font-medium">{activeTopic.theme}</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Topic: {activeTopic.theme}</h1>

        {/* Part Tabs */}
        <div className="flex gap-2 mb-6">
          {([1, 2, 3] as const).map(p => (
            <button
              key={p}
              onClick={() => {
                setActivePart(p);
                setSubmitted(false);
                setAiResult(null);
                setTranscript("");
                setIsRecording(false);
              }}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors ${
                activePart === p ? "bg-amber-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-amber-300"
              }`}
            >
              Part {p}
            </button>
          ))}
        </div>

        {/* ---------- Recording & AI Grading Section (shown on all parts) ---------- */}
        <div className="bg-white border border-amber-200 rounded-2xl p-5 mb-6 shadow-sm">
          <h3 className="font-bold text-amber-800 mb-3">🎙️ Practice & Get AI Feedback</h3>
          <p className="text-sm text-gray-600 mb-4">
            Answer the question above. Click record, speak clearly, then submit for AI evaluation.
          </p>
          <div className="flex flex-wrap gap-3 items-center mb-4">
            {!isRecording ? (
              <button
                onClick={handleStartRecording}
                className="bg-red-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                🔴 Start Recording
              </button>
            ) : (
              <button
                onClick={handleStopRecording}
                className="bg-gray-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                ⏹️ Stop Recording
              </button>
            )}
            {transcript && (
              <button
                onClick={handleSubmit}
                disabled={aiLoading}
                className="bg-amber-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-amber-700 disabled:opacity-50"
              >
                {aiLoading ? "Grading..." : "Submit & Grade"}
              </button>
            )}
          </div>
          {listening && (
            <div className="text-sm text-green-600 animate-pulse mb-2">🔊 Listening... speak now</div>
          )}
          {browserSupportsSpeechRecognition && isMicrophoneAvailable === false && (
            <div className="text-xs text-red-600 mb-2">Microphone access is blocked. Allow it in your browser settings, or just type your answer below.</div>
          )}
          <div className="mt-2">
            <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Your transcript (you can edit or type it):</p>
            <textarea
              value={transcript}
              onChange={(e) => setTranscript(e.target.value)}
              rows={5}
              placeholder="Speak using the button above and your words appear here. If the mic doesn't work on your device, just type your answer instead."
              className="w-full border border-gray-200 rounded-xl p-3 text-sm text-gray-700 leading-relaxed focus:outline-none focus:border-amber-400"
            />
            <p className="text-[11px] text-gray-400 mt-1">
              {transcript.trim() ? `${transcript.trim().split(/\s+/).filter(Boolean).length} words` : "Aim for at least 20 words."}
            </p>
          </div>
          {aiError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 mt-3">
              <p className="text-red-700 text-sm">{aiError}</p>
            </div>
          )}
        </div>

        {/* ---------- AI Results Display (if submitted) ---------- */}
        {submitted && aiResult && !aiLoading && (
          <div className="mb-8 space-y-5">
            <div className={`border rounded-2xl p-6 text-center ${bandBg(aiResult.overall)}`}>
              <p className={`text-6xl font-black leading-none mb-1 ${bandColor(aiResult.overall)}`}>
                {fmtScore(aiResult.overall)}
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Overall Band Score</p>
              <p className="text-sm text-gray-600 italic max-w-md mx-auto">{aiResult.summary}</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-xs text-blue-800">
              ℹ️ Indicative score from your transcript — it covers vocabulary, grammar and coherence. Pronunciation and full fluency can&apos;t be judged from text, so they aren&apos;t graded here. Use it to sharpen word choice and accuracy, not as a final speaking band.
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {SPEAKING_CRITERIA.map(({ key, label }) => {
                const c = aiResult[key as keyof IELTSResult] as { score: number; feedback: string };
                return (
                  <div key={key} className="bg-white border border-gray-200 rounded-2xl p-5">
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">{label}</span>
                      <span className={`text-lg font-black ${bandColor(c.score)}`}>
                        {fmtScore(c.score)}<span className="text-xs font-normal text-gray-400">/9</span>
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                      <div className={`h-full rounded-full ${barColor(c.score)}`} style={{ width: `${(c.score / 9) * 100}%` }} />
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{c.feedback}</p>
                  </div>
                );
              })}
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <p className="text-xs font-bold text-indigo-600 uppercase tracking-wide mb-1">⚡ Priority Fix</p>
              <p className="text-sm text-indigo-900 font-medium leading-relaxed">{aiResult.top_fix}</p>
            </div>
          </div>
        )}

        {/* ---------- Part 1 Content (questions + sample answers) ---------- */}
        {activePart === 1 && (
          <div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-semibold mb-1">Part 1 — Introduction & Interview (4–5 minutes)</p>
              <p className="text-xs text-amber-700">The examiner asks general questions about yourself and familiar topics. Answer naturally — don't memorise scripts.</p>
            </div>
            <div className="space-y-4">
              {activeTopic.part1.map((q, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-gray-900">{q.q}</p>
                    <button onClick={() => toggle(`p1-${i}`)} className="text-xs text-amber-600 font-semibold whitespace-nowrap hover:text-amber-700 flex-shrink-0">
                      {expanded[`p1-${i}`] ? "Hide answer" : "Sample answer"}
                    </button>
                  </div>
                  {expanded[`p1-${i}`] && (
                    <div className="mt-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <p className="text-sm text-gray-700 leading-relaxed italic">{q.sample}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ---------- Part 2 Content (Cue Card + Timer) ---------- */}
        {activePart === 2 && (
          <div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-semibold mb-1">Part 2 — Long Turn (3–4 minutes)</p>
              <p className="text-xs text-amber-700">You have 1 minute to prepare, then speak for 1–2 minutes. Use the timer below to practise under real conditions.</p>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-5">
              <p className="text-xs font-bold text-amber-600 uppercase tracking-wider mb-3">Cue Card</p>
              <h3 className="text-lg font-bold text-gray-900 mb-4">{activeTopic.cueCard.title}</h3>
              <ul className="space-y-2 mb-4">
                {activeTopic.cueCard.points.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-amber-500 font-bold flex-shrink-0">▸</span>
                    {pt}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 italic">Follow-up: {activeTopic.cueCard.followUp}</p>
              <CueCardTimer />
            </div>
            <button onClick={() => toggle("cuecard-sample")} className="w-full border border-amber-200 text-amber-700 py-2.5 rounded-xl font-bold text-sm hover:bg-amber-50 transition-colors mb-3">
              {expanded["cuecard-sample"] ? "Hide Sample Response" : "Show Sample Response"}
            </button>
            {expanded["cuecard-sample"] && (
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-5">
                <p className="text-xs font-semibold text-amber-700 mb-2 uppercase tracking-wider">Sample Response (Band 7–8)</p>
                <p className="text-sm text-gray-700 leading-relaxed italic">{activeTopic.cueCard.sample}</p>
              </div>
            )}
          </div>
        )}

        {/* ---------- Part 3 Content (Discussion questions) ---------- */}
        {activePart === 3 && (
          <div>
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 mb-5">
              <p className="text-sm text-amber-800 font-semibold mb-1">Part 3 — Discussion (4–5 minutes)</p>
              <p className="text-xs text-amber-700">More abstract questions linked to the Part 2 topic. The examiner expects extended, well-reasoned answers with examples.</p>
            </div>
            <div className="space-y-4">
              {activeTopic.part3.map((q, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-start justify-between gap-3">
                    <p className="font-semibold text-gray-900">{q.q}</p>
                    <button onClick={() => toggle(`p3-${i}`)} className="text-xs text-amber-600 font-semibold whitespace-nowrap hover:text-amber-700 flex-shrink-0">
                      {expanded[`p3-${i}`] ? "Hide answer" : "Sample answer"}
                    </button>
                  </div>
                  {expanded[`p3-${i}`] && (
                    <div className="mt-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                      <p className="text-sm text-gray-700 leading-relaxed italic">{q.sample}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Back button */}
        <div className="mt-8">
          <button onClick={() => setActiveTopic(null)} className="text-sm text-indigo-600 font-semibold hover:underline">
            ← Back to Speaking Topics
          </button>
        </div>
      </div>
    );
  }

  // ---------------- Topic Selection Screen (when no topic is selected) ----------------
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
        <span>›</span>
        <span className="text-gray-600 font-medium">Speaking</span>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-4xl">🗣️</span>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">IELTS Speaking Practice</h1>
            <p className="text-gray-500 mt-1">Part 1 questions, Part 2 cue cards with timer, and Part 3 academic discussions</p>
          </div>
        </div>
      </div>

      {/* Part Overview Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {[
          { part: 1, label: "Introduction", time: "4–5 min", desc: "Personal questions about yourself and familiar topics." },
          { part: 2, label: "Long Turn", time: "3–4 min", desc: "Speak for 1–2 minutes about a cue card topic." },
          { part: 3, label: "Discussion", time: "4–5 min", desc: "Abstract questions linked to the Part 2 topic." },
        ].map(p => (
          <div key={p.part} className="bg-white border border-amber-100 rounded-2xl p-5 text-center">
            <p className="text-3xl font-black text-amber-600 mb-1">{p.part}</p>
            <p className="font-bold text-gray-800 text-sm mb-0.5">{p.label}</p>
            <p className="text-xs text-gray-400 mb-2">{p.time}</p>
            <p className="text-xs text-gray-500">{p.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-5">Choose a Topic</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {TOPICS.map(t => (
          <div key={t.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-amber-300 hover:shadow-md transition-all">
            <h3 className="text-lg font-bold text-gray-900 mb-2">{t.theme}</h3>
            <div className="space-y-1 mb-4">
              <p className="text-xs text-gray-500">• Part 1: {t.part1.length} questions</p>
              <p className="text-xs text-gray-500">• Part 2: Cue card with timer</p>
              <p className="text-xs text-gray-500">• Part 3: {t.part3.length} discussion questions</p>
            </div>
            <button onClick={() => openTopic(t)} className="w-full bg-amber-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-amber-700 transition-colors">
              Practise {t.theme} →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-400 text-sm">More topics coming soon</p>
        <Link href="/ielts" className="inline-block mt-4 text-indigo-600 text-sm font-semibold hover:underline">← Back to IELTS Hub</Link>
      </div>
    </div>
  );
}
