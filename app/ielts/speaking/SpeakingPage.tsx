"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

// ---------- Types and Data (unchanged from your original) ----------
interface P1Question { q: string; sample: string; }
interface CueCard { title: string; points: string[]; followUp: string; sample: string; }
interface P3Question { q: string; sample: string; }

interface Topic {
  id: string;
  theme: string;
  part1: P1Question[];
  cueCard: CueCard;
  part3: P3Question[];
}

const TOPICS: Topic[] = [
  {
    id: "technology",
    theme: "Technology",
    part1: [
      { q: "How often do you use the internet?", sample: "I use the internet constantly throughout the day — mainly for work, keeping in touch with friends and watching educational content. I'd say I'm online for at least six or seven hours on a typical weekday." },
      { q: "What do you mainly use your phone for?", sample: "Primarily for communication — messaging, emails and video calls. I also use it a lot for navigation when I'm in an unfamiliar area, and I listen to podcasts during my commute." },
      { q: "Do you think young people spend too much time on social media?", sample: "I think many do, yes. While social media has genuine benefits for staying connected and discovering new ideas, the endless scrolling can easily become a habit that takes time away from more productive activities like reading or exercise." },
    ],
    cueCard: {
      title: "Describe a piece of technology you use every day.",
      points: ["What it is", "How long you have had it", "What you use it for", "Why it is important to you"],
      followUp: "Would you feel uncomfortable if you didn't have it for a day?",
      sample: "The piece of technology I rely on most every day is my laptop. I've had it for about three years and it's become absolutely central to both my work and my personal life. I use it for everything — writing, research, video calls and online learning. Without it, I'd struggle to complete most of my daily tasks. What I appreciate most about it is the portability — I can work from virtually anywhere, which gives me a lot of flexibility. If I didn't have it for a day, I'd honestly feel quite lost. So much of my routine depends on it that I'd have to completely reorganise my day.",
    },
    part3: [
      { q: "How has technology changed the way people communicate?", sample: "It's transformed communication in ways that would have been unimaginable a few decades ago. We can now connect with people across the world instantly, at virtually no cost. Video calls have made remote relationships feel much more personal than phone calls, and messaging apps have made short, informal communication the norm. However, some argue this has reduced the depth of our interactions — we communicate more frequently but perhaps less meaningfully." },
      { q: "Do you think technology is making us less creative?", sample: "That's an interesting question. I think the relationship between technology and creativity is actually quite complex. On one hand, digital tools like design software, music production apps and video editing platforms have democratised creative expression — anyone with a smartphone can now create content. On the other hand, there's a valid concern that the constant availability of entertainment means people spend less time in quiet reflection, which is often when creative ideas emerge." },
    ],
  },
  {
    id: "education",
    theme: "Education",
    part1: [
      { q: "What subject did you enjoy most at school?", sample: "I particularly enjoyed science, especially biology. I found the study of living systems fascinating — understanding how the human body works or how ecosystems maintain balance felt relevant in a way that some other subjects didn't." },
      { q: "Do you prefer studying alone or with others?", sample: "It depends on the task. For absorbing new material or writing essays, I prefer studying alone because I can concentrate fully. But for reviewing difficult concepts or problem-solving, I find study groups genuinely helpful — hearing how others approach a problem often gives me a new perspective." },
      { q: "Is there anything you would like to learn in the future?", sample: "Absolutely. I've always wanted to learn a third language — probably Spanish, since it would open up communication with so many more people. I'd also like to improve my data analysis skills, which are increasingly valuable across almost every profession." },
    ],
    cueCard: {
      title: "Describe a teacher who had a positive influence on you.",
      points: ["Who the teacher was", "What subject they taught", "What they did that influenced you", "How this affected your life or studies"],
      followUp: "Have you stayed in contact with this teacher since leaving school?",
      sample: "The teacher who had the greatest positive influence on me was my secondary school English teacher, Mr. Hassan. He taught English Literature, and what made him exceptional was his genuine enthusiasm for the subject — it was clear he wasn't just doing a job, but that literature actually mattered to him. He encouraged critical thinking rather than memorisation. Rather than simply telling us what a poem meant, he would ask us what we thought, and then guide us to dig deeper. That approach taught me to think independently and to appreciate complexity. It made me a much stronger writer and reader, and those skills have benefited me in every area of my life since. I genuinely believe his class changed the way I think.",
    },
    part3: [
      { q: "Should education systems focus more on practical skills or academic knowledge?", sample: "I think the most effective systems find a balance between the two. Pure academic knowledge without practical application can leave graduates ill-equipped for the workplace, while focusing exclusively on vocational skills risks narrowing students' intellectual horizons. Ideally, students should develop strong foundational knowledge alongside the practical abilities to apply it — critical thinking, communication and problem-solving are the skills most employers consistently say they value." },
      { q: "How important is it for students to study subjects they are interested in?", sample: "It's enormously important, in my view. Intrinsic motivation is one of the strongest predictors of academic success — when students genuinely care about what they're learning, they engage more deeply and retain information better. However, a purely interest-based curriculum has limitations. Some fundamental skills like mathematics, literacy and scientific reasoning are valuable regardless of personal preference, so there needs to be some core structure even within a more interest-driven system." },
    ],
  },
];

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

// ---------- Type for AI Grading Result (same as writing) ----------
interface IELTSResult {
  overall: number;
  ta: { score: number; feedback: string };
  cc: { score: number; feedback: string };
  lr: { score: number; feedback: string };
  gr: { score: number; feedback: string };
  summary: string;
  top_fix: string;
}

// Speaking criteria labels (keys match the result object)
const SPEAKING_CRITERIA = [
  { key: "ta", label: "Fluency & Coherence" },
  { key: "cc", label: "Lexical Resource" },
  { key: "lr", label: "Grammatical Range & Accuracy" },
  { key: "gr", label: "Pronunciation" },
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
    browserSupportsSpeechRecognition
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
    setIsRecording(false);
  };

  const handleSubmit = async () => {
    if (!transcript || transcript.trim().length < 30) {
      setAiError("Please record at least 30 seconds of speech before submitting.");
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
          {transcript && (
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mt-2">
              <p className="text-xs font-semibold text-gray-500 uppercase mb-1">Your transcript:</p>
              <p className="text-gray-700 text-sm leading-relaxed">{transcript}</p>
            </div>
          )}
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