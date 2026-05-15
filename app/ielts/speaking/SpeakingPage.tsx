"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

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

export default function SpeakingPage() {
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activePart, setActivePart] = useState<1 | 2 | 3>(1);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  function toggle(key: string) {
    setExpanded(e => ({ ...e, [key]: !e[key] }));
  }

  function openTopic(t: Topic) {
    setActiveTopic(t);
    setActivePart(1);
    setExpanded({});
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (activeTopic) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/ielts" className="hover:text-indigo-600 transition-colors">IELTS</Link>
          <span>›</span>
          <Link href="/ielts/speaking" className="hover:text-indigo-600 transition-colors">Speaking</Link>
          <span>›</span>
          <span className="text-gray-600 font-medium">{activeTopic.theme}</span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">Topic: {activeTopic.theme}</h1>

        {/* Part tabs */}
        <div className="flex gap-2 mb-6">
          {([1, 2, 3] as const).map(p => (
            <button key={p} onClick={() => setActivePart(p)}
              className={`px-4 py-2 rounded-xl font-bold text-sm transition-colors ${activePart === p ? "bg-amber-600 text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-amber-300"}`}>
              Part {p}
            </button>
          ))}
        </div>

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

        <div className="mt-8">
          <button onClick={() => setActiveTopic(null)} className="text-sm text-indigo-600 font-semibold hover:underline">← Back to Speaking Topics</button>
        </div>
      </div>
    );
  }

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

      {/* Part overview */}
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
