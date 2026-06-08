"use client";
import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import Link from "next/link";
import { getAdminIELTSListening } from "@/lib/adminDB";
import { getPracticeSections } from "@/lib/ielts-listening-bank";

interface ListeningQ {
  id: number; q: string; type: "fill" | "mcq";
  opts?: string[]; answer: string; hint?: string;
}
interface Section {
  num: number; title: string; context: string;
  transcript: string; questions: ListeningQ[];
  audio?: string;
}
type Answers = Record<number, string>;
type Results = { score: number; total: number } | null;

const RAW_TO_BAND: [number, number][] = [
  [39,9],[37,8.5],[35,8],[32,7.5],[30,7],[26,6.5],
  [23,6],[18,5.5],[16,5],[13,4.5],[10,4],[6,3.5],[4,3],[2,2.5],[0,1],
];
const getBand = (raw: number, total: number) => {
  const scaled = Math.round((raw / total) * 40);
  for (const [min, band] of RAW_TO_BAND) { if (scaled >= min) return band; }
  return 1;
};

const SECTIONS: Section[] = getPracticeSections().map((s, i) => ({
  num: i + 1,
  title: s.title,
  context: s.context,
  transcript: s.transcript,
  audio: s.audio,
  questions: s.questions.map(q => ({
    id: q.id, type: q.type, q: q.q,
    opts: q.opts, answer: q.answer, hint: q.explanation,
  })),
}));

// ─── Pre-generated audio config ──────────────────────────────────────────────
// Files live in /public/ielts/listening/ as section-1.mp3 … section-4.mp3,
// produced by the edge-tts pipeline (see listening_scripts.json).
const AUDIO_BASE = "/ielts/listening";
const READ_SECONDS = 45;
const ALLOW_PAUSE  = true;  // set false for strict exam realism (no pausing)
const ALLOW_REPLAY = true;  // set false for strict exam realism (one listen only)

function AudioPlayer({ section, onFinished }: { section: Section; onFinished: () => void }) {
  const [status,   setStatus]   = useState<"idle"|"reading"|"playing"|"paused"|"done"|"error">("idle");
  const [readTime, setReadTime] = useState(READ_SECONDS);
  const [progress, setProgress] = useState(0);

  const audioRef     = useRef<HTMLAudioElement | null>(null);
  const readTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const src = section.audio ?? `${AUDIO_BASE}/section-${section.num}.mp3`;

  useEffect(() => {
    return () => {
      if (readTimerRef.current) clearInterval(readTimerRef.current);
      audioRef.current?.pause();
    };
  }, [section.num]);

  const play = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    setStatus("playing");
    a.play().catch(() => setStatus("error"));
  }, []);

  const startReading = () => {
    setStatus("reading");
    setReadTime(READ_SECONDS);
    readTimerRef.current = setInterval(() => {
      setReadTime(t => {
        if (t <= 1) { clearInterval(readTimerRef.current!); play(); return 0; }
        return t - 1;
      });
    }, 1_000);
  };

  const skipToPlay = () => {
    if (readTimerRef.current) clearInterval(readTimerRef.current);
    play();
  };

  const togglePause = () => {
    const a = audioRef.current;
    if (!a) return;
    if (status === "playing") { a.pause(); setStatus("paused"); }
    else { setStatus("playing"); a.play().catch(() => setStatus("error")); }
  };

  const stop = () => {
    audioRef.current?.pause();
    if (readTimerRef.current) clearInterval(readTimerRef.current);
    setStatus("done");
    onFinished();
  };

  const replay = () => {
    const a = audioRef.current;
    if (!a) return;
    a.currentTime = 0;
    setProgress(0);
    play();
  };

  const handleTimeUpdate = () => {
    const a = audioRef.current;
    if (!a || !a.duration || isNaN(a.duration)) return;
    setProgress(Math.round((a.currentTime / a.duration) * 100));
  };
  const handleEnded = () => { setProgress(100); setStatus("done"); onFinished(); };

  return (
    <div className="bg-gray-900 text-white rounded-2xl p-5 mb-6">
      {/* No `controls` attribute on purpose — students cannot scrub or seek. */}
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleEnded}
        onError={() => setStatus("error")}
      />

      {status === "idle" && (
        <div className="space-y-4">
          <div>
            <p className="font-bold text-sm text-gray-200">Section {section.num} Audio</p>
            <p className="text-gray-400 text-xs mt-1">
              AI-generated audio · plays once, like the real exam. You get {READ_SECONDS} seconds to read the questions first.
            </p>
          </div>
          <button onClick={startReading}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-xl font-bold transition-all"
            style={{ boxShadow: "0 4px 0 #065f46" }}>
            🎧 Start Listening
          </button>
        </div>
      )}

      {status === "reading" && (
        <div className="text-center py-3">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Reading Time</p>
          <p className="text-7xl font-black text-emerald-400 mb-2">{readTime}</p>
          <p className="text-gray-400 text-sm mb-4">Preview the questions below — audio starts automatically</p>
          <button onClick={skipToPlay} className="text-xs text-emerald-400 hover:underline">
            Skip → Play now
          </button>
        </div>
      )}

      {(status === "playing" || status === "paused") && (
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 transition-all
              ${status === "playing" ? "bg-emerald-500 animate-pulse" : "bg-gray-600"}`}>
              🎧
            </div>
            <div>
              <p className="font-bold text-sm">Section {section.num} — Now Playing</p>
              <p className="text-gray-400 text-xs">
                {status === "paused" ? "⏸ Paused — press Resume to continue" : "In the real IELTS, each recording plays once only"}
              </p>
            </div>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-emerald-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-xs text-gray-500 text-right mb-3">{progress}%</p>
          <div className="flex gap-2">
            {ALLOW_PAUSE && (
              <button onClick={togglePause}
                className="flex-1 bg-gray-700 hover:bg-gray-600 py-2.5 rounded-xl text-sm font-bold transition-all">
                {status === "paused" ? "▶ Resume" : "⏸ Pause"}
              </button>
            )}
            <button onClick={stop}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 py-2.5 rounded-xl text-sm font-bold transition-all">
              ⏹ Stop & Answer
            </button>
          </div>
        </div>
      )}

      {status === "done" && (
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center text-lg flex-shrink-0">✓</div>
            <div>
              <p className="font-bold text-sm text-emerald-400">Audio Complete</p>
              <p className="text-gray-400 text-xs">Now answer all questions below, then submit</p>
            </div>
          </div>
          {ALLOW_REPLAY && (
            <button onClick={replay} className="w-full bg-gray-700 hover:bg-gray-600 py-2.5 rounded-xl text-sm font-bold transition-all">
              ↺ Replay Audio
            </button>
          )}
        </div>
      )}

      {status === "error" && (
        <div>
          <div className="bg-amber-900/40 border border-amber-700 rounded-lg px-3 py-2 text-xs text-amber-100 mb-3">
            Audio for this section isn't available yet. You can still read the transcript and answer the questions below.
          </div>
          <button onClick={onFinished}
            className="w-full bg-gray-700 hover:bg-gray-600 py-2.5 rounded-xl text-sm font-bold transition-all">
            Continue →
          </button>
        </div>
      )}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformFirebaseSections(data: any[]): Section[] {
  if (!data?.length) return [];
  let sections: Section[] = [];
  if (data[0]?.questions && Array.isArray(data[0].questions)) {
    sections = data.filter(d => d.num && d.title).map(d => ({
      num: Number(d.num), title: String(d.title || ""),
      context: String(d.context || ""), transcript: String(d.transcript || ""),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      questions: (d.questions as any[]).map((q: any, i: number) => ({
        id: Number(q.id ?? i + 1),
        type: (q.type === "mcq" ? "mcq" : "fill") as "fill" | "mcq",
        q: String(q.q || q.question || ""),
        opts: Array.isArray(q.opts) ? q.opts : undefined,
        answer: String(q.answer ?? ""), hint: q.hint || undefined,
      })).filter((q: ListeningQ) => q.q),
    })).filter(s => s.questions.length > 0);
  } else {
    const map: Record<number, Section> = {};
    for (const item of data) {
      const num = Number(item.sectionNum ?? item.num ?? 1);
      if (!map[num]) map[num] = { num, title: String(item.title || `Section ${num}`), context: String(item.context || ""), transcript: String(item.transcript || ""), questions: [] };
      if (item.q || item.question) map[num].questions.push({ id: Number(item.id ?? map[num].questions.length + 1), type: (item.type === "mcq" ? "mcq" : "fill") as "fill" | "mcq", q: String(item.q || item.question || ""), opts: Array.isArray(item.opts) ? item.opts : undefined, answer: String(item.answer ?? ""), hint: item.hint || undefined });
    }
    sections = Object.values(map);
  }
  const dedup = new Map<number, Section>();
  for (const s of sections) {
    const ex = dedup.get(s.num);
    if (!ex || s.questions.length > ex.questions.length) dedup.set(s.num, s);
  }
  return Array.from(dedup.values()).sort((a, b) => a.num - b.num);
}

const QUESTIONS_PER_SECTION = 10;
const LBLS = ["A","B","C","D"] as const;
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function shuffleMCQL(q: ListeningQ): ListeningQ {
  if (q.type !== "mcq" || !q.opts || q.opts.length < 2) return q;
  const texts = q.opts.map(o => o.slice(3));
  const correctText = texts[LBLS.indexOf(q.answer as typeof LBLS[number])] ?? texts[0];
  const s = shuffle(texts); const ni = s.indexOf(correctText);
  return { ...q, opts: s.map((t, i) => `${LBLS[i]}. ${t}`), answer: LBLS[ni] ?? "A" };
}
function pickQuestions(s: Section, n: number): Section {
  return { ...s, questions: shuffle(s.questions).slice(0, Math.min(n, s.questions.length)).map(shuffleMCQL) };
}

export default function ListeningPage() {
  const [activeSection,  setActiveSection]  = useState<Section | null>(null);
  const [answers,        setAnswers]        = useState<Answers>({});
  const [results,        setResults]        = useState<Results>(null);
  const [showTranscript, setShowTranscript] = useState(false);
  const [audioFinished,  setAudioFinished]  = useState(false);
  const [sessionKey,     setSessionKey]     = useState(0);
  const [fbSections,     setFbSections]     = useState<Section[]>([]);
  const [fbLoading,      setFbLoading]      = useState(true);

  useEffect(() => {
    getAdminIELTSListening()
      .then(data => { const t = transformFirebaseSections(data); if (t.length) setFbSections(t); })
      .catch(e => console.error("[Listening] Firebase load failed:", e))
      .finally(() => setFbLoading(false));
  }, []);

  const ACTIVE_SECTIONS = useMemo(() => {
    const base = fbSections.length > 0 ? fbSections : SECTIONS;
    return base.map(s => pickQuestions(s, QUESTIONS_PER_SECTION));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionKey, fbSections]);

  function start(s: Section) {
    setActiveSection(s); setAnswers({}); setResults(null);
    setShowTranscript(false); setAudioFinished(false);
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

  if (activeSection) return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-emerald-600">IELTS</Link>
        <span>›</span>
        <Link href="/ielts/listening" className="hover:text-emerald-600">Listening</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">Section {activeSection.num}</span>
      </div>

      {results && (
        <div className={`rounded-2xl p-6 mb-6 text-center border ${
          results.score >= Math.ceil(results.total * 0.7) ? "bg-green-50 border-green-200" :
          results.score >= Math.ceil(results.total * 0.5) ? "bg-amber-50 border-amber-200" :
          "bg-red-50 border-red-200"}`}>
          <p className="text-5xl font-black mb-1" style={{
            color: results.score >= Math.ceil(results.total * 0.7) ? "#16a34a" :
                   results.score >= Math.ceil(results.total * 0.5) ? "#d97706" : "#dc2626"
          }}>{results.score} / {results.total}</p>
          <p className="text-sm text-gray-500 mb-1">Estimated band: <strong>{getBand(results.score, results.total)}</strong></p>
          <p className="font-semibold text-gray-700 mb-4">
            {results.score === results.total ? "🎉 Perfect score!" : results.score >= Math.ceil(results.total * 0.7) ? "👍 Good work!" : "📚 Keep practising!"}
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={() => setShowTranscript(v => !v)}
              className="text-sm text-emerald-600 font-semibold border border-emerald-300 px-4 py-2 rounded-xl hover:bg-emerald-50">
              {showTranscript ? "Hide" : "Show"} Transcript
            </button>
            <button onClick={() => { setActiveSection(null); }}
              className="bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-emerald-700">
              Try Another Section
            </button>
          </div>
        </div>
      )}

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-5">
        <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-full">{activeSection.title}</span>
        <h2 className="font-bold text-emerald-900 mt-2 mb-1">{activeSection.title}</h2>
        <p className="text-emerald-700 text-sm">{activeSection.context}</p>
      </div>

      {!results && (
        <AudioPlayer section={activeSection} onFinished={() => setAudioFinished(true)} />
      )}

      {showTranscript && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-700">📄 Full Transcript</h3>
            <button onClick={() => setShowTranscript(false)} className="text-sm text-gray-400 hover:text-gray-600">Hide ✕</button>
          </div>
          <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{activeSection.transcript}</pre>
        </div>
      )}

      {!results && !showTranscript && !audioFinished && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-sm text-amber-800">
          💡 Listen to the audio first, then answer the questions.
          <button onClick={() => setShowTranscript(true)} className="ml-2 underline font-semibold">Show transcript instead</button>
        </div>
      )}

      <div className="space-y-4 mb-8">
        <h3 className="font-bold text-gray-900">Questions — Section {activeSection.num}</h3>
        {activeSection.questions.map((q, i) => {
          const given   = (answers[q.id] ?? "").toLowerCase().trim();
          const correct = results ? given === q.answer.toLowerCase() : null;
          return (
            <div key={q.id} className={`bg-white border rounded-2xl p-5 transition-all ${
              correct === true  ? "border-green-300 bg-green-50/40" :
              correct === false ? "border-red-300 bg-red-50/30" : "border-gray-200"}`}>
              <p className="font-semibold text-gray-900 mb-3">
                <span className="text-emerald-600 font-black mr-2">{i + 1}.</span>{q.q}
              </p>
              {q.type === "fill" ? (
                <input type="text" value={answers[q.id] ?? ""}
                  onChange={e => !results && setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                  onKeyDown={e => e.key === "Enter" && !results && submit()}
                  placeholder="Type your answer…" disabled={!!results}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-400 disabled:bg-gray-50 disabled:text-gray-500" />
              ) : (
                <div className="space-y-2">
                  {(q.opts ?? []).map(opt => {
                    const letter = opt[0]; const chosen = answers[q.id] === letter;
                    const isCorrect = results && letter === q.answer;
                    const isWrong   = results && chosen && letter !== q.answer;
                    return (
                      <button key={opt} onClick={() => !results && setAnswers(a => ({ ...a, [q.id]: letter }))}
                        className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all ${
                          isCorrect ? "bg-green-100 border-green-400 text-green-800 font-semibold" :
                          isWrong   ? "bg-red-100 border-red-400 text-red-800" :
                          chosen    ? "bg-emerald-100 border-emerald-400 text-emerald-800 font-semibold" :
                          "border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50"}`}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}
              {results && (
                <div className={`mt-3 text-xs px-3 py-2 rounded-xl ${correct ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                  {correct ? "✓ Correct!" : `✗ Correct answer: ${q.answer}`}
                  {q.hint && <span className="ml-2 text-gray-500">— {q.hint}</span>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!results && (
        <button onClick={submit}
          disabled={Object.keys(answers).length < activeSection.questions.length}
          className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-base hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ boxShadow: "0 4px 0 #065f46" }}>
          {Object.keys(answers).length < activeSection.questions.length
            ? `Answer all questions (${Object.keys(answers).length}/${activeSection.questions.length} done)`
            : "Submit Answers →"}
        </button>
      )}

      <div className="mt-6 text-center">
        <button onClick={() => { setActiveSection(null); }}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
          ← Back to all sections
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-emerald-600">IELTS</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">Listening</span>
      </div>

      <div className="flex items-start gap-4 mb-8">
        <span className="text-5xl">🎧</span>
        <div className="flex-1">
          <h1 className="text-3xl font-black text-gray-900 mb-1">IELTS Listening Practice</h1>
          <p className="text-gray-500 text-sm">{ACTIVE_SECTIONS.length} sections · {QUESTIONS_PER_SECTION} questions each · shuffled every attempt · AI-generated audio</p>
        </div>
        <button onClick={() => setSessionKey(k => k + 1)}
          className="flex-shrink-0 text-xs border border-gray-200 text-gray-500 hover:text-emerald-600 hover:border-emerald-300 px-3 py-2 rounded-xl transition-all">
          🔀 New Shuffle
        </button>
      </div>

      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-8">
        <p className="font-bold text-emerald-800 mb-3">🎙️ How the Audio Works</p>
        <div className="grid sm:grid-cols-3 gap-3 text-sm text-emerald-700">
          <div className="flex gap-2"><span className="font-black text-emerald-500">1.</span><span>Pick a section and press "Start Listening"</span></div>
          <div className="flex gap-2"><span className="font-black text-emerald-500">2.</span><span>45-second reading time before audio begins</span></div>
          <div className="flex gap-2"><span className="font-black text-emerald-500">3.</span><span>Audio plays automatically — answer as you listen</span></div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { num:1, label:"Social Need",  desc:"Everyday conversation between two people" },
          { num:2, label:"Social Need",  desc:"Monologue in an everyday public context" },
          { num:3, label:"Educational",  desc:"Discussion between students or a tutor" },
          { num:4, label:"Educational",  desc:"Academic lecture or monologue" },
        ].map(s => (
          <div key={s.num} className="bg-white border border-emerald-200 rounded-2xl p-4 text-center">
            <p className="text-2xl font-black text-emerald-600 mb-1">{s.num}</p>
            <p className="text-xs font-semibold text-gray-700 mb-1">{s.label}</p>
            <p className="text-xs text-gray-400 leading-tight">{s.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-gray-900 mb-5">Choose a Section</h2>

      {fbLoading ? (
        <div className="grid sm:grid-cols-2 gap-5">
          {[1,2,3,4].map(i => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded w-1/3 mb-3" />
              <div className="h-3 bg-gray-100 rounded w-2/3 mb-2" />
              <div className="h-3 bg-gray-100 rounded w-1/2 mb-4" />
              <div className="h-10 bg-gray-200 rounded-xl" />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-5">
          {ACTIVE_SECTIONS.map(s => (
            <div key={s.num} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all">
              <div className="flex items-start justify-between mb-3">
                <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-bold">Section {s.num}</span>
                <span className="text-xs text-gray-400">{s.questions.length} questions</span>
              </div>
              <p className="font-bold text-gray-900 text-sm mb-1">{s.title.split("—")[1]?.trim() || s.title}</p>
              <p className="text-gray-500 text-xs mb-4 leading-relaxed">{s.context}</p>
              <button onClick={() => start(s)}
                className="w-full bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all"
                style={{ boxShadow: "0 3px 0 #065f46" }}>
                🎧 Start Section {s.num} →
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/ielts" className="inline-block text-emerald-600 text-sm font-semibold hover:underline">
          ← Back to IELTS Hub
        </Link>
      </div>
    </div>
  );
}
