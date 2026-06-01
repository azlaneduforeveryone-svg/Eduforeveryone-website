"use client";
import { useState, useRef, useEffect, useCallback } from "react";
import { ListeningTest, ListeningSection as LSType, rawToBand } from "@/lib/ielts-types";

interface Props {
  test: ListeningTest;
  onComplete: (band: number) => void;
}

type SectionPhase = "reading" | "playing" | "finishing" | "done";

const READ_SECONDS = 40;   // pre-reading time per section
const FINISH_SECONDS = 30; // time after audio ends to finish writing

function fmt(s: number) {
  return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
}

export default function ListeningSection({ test, onComplete }: Props) {
  const [sectionIdx, setSectionIdx]   = useState(0);
  const [phase, setPhase]             = useState<SectionPhase>("reading");
  const [readTime, setReadTime]       = useState(READ_SECONDS);
  const [finishTime, setFinishTime]   = useState(FINISH_SECONDS);
  const [answers, setAnswers]         = useState<Record<number, string>>({});
  const [submitted, setSubmitted]     = useState(false);

  const readTimerRef   = useRef<ReturnType<typeof setInterval> | null>(null);
  const finishTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const section: LSType = test.sections[sectionIdx];

  // ── Clean up all timers and speech on unmount ──────────────────────────────
  useEffect(() => {
    return () => {
      clearInterval(readTimerRef.current!);
      clearInterval(finishTimerRef.current!);
      window.speechSynthesis?.cancel();
    };
  }, []);

  // ── Start reading countdown when section changes ───────────────────────────
  useEffect(() => {
    setPhase("reading");
    setReadTime(READ_SECONDS);
    clearInterval(readTimerRef.current!);

    readTimerRef.current = setInterval(() => {
      setReadTime(t => {
        if (t <= 1) {
          clearInterval(readTimerRef.current!);
          startAudio();
          return 0;
        }
        return t - 1;
      });
    }, 1000);

    return () => clearInterval(readTimerRef.current!);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdx]);

  // ── Play audio ─────────────────────────────────────────────────────────────
  const startAudio = useCallback(() => {
    setPhase("playing");
    window.speechSynthesis?.cancel();

    if (!window.speechSynthesis) {
      console.warn("[ListeningSection] Web Speech API not available");
      // No TTS — skip straight to finishing phase
      startFinishing();
      return;
    }

    const speak = () => {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(section.script.trim());
        utter.rate = 0.88;
        utter.lang = "en-GB";
        
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) {
          console.warn("[ListeningSection] No voices available");
          startFinishing();
          return;
        }
        
        const voice  = voices.find(v => v.lang === "en-GB") ||
                       voices.find(v => v.lang.startsWith("en-GB")) ||
                       voices.find(v => v.lang.startsWith("en")) ||
                       voices[0] || null;
        if (voice) {
          utter.voice = voice;
          console.log(`[ListeningSection] Using voice: ${voice.name}`);
        }
        utter.onend   = () => { 
          console.log("[ListeningSection] Audio finished");
          startFinishing(); 
        };
        utter.onerror = (e) => { 
          console.error("[ListeningSection] Speech error:", e.error);
          startFinishing(); 
        };
        window.speechSynthesis.speak(utter);
        console.log("[ListeningSection] Started speaking");
      } catch (err) {
        console.error("[ListeningSection] Error during speak:", err);
        startFinishing();
      }
    };

    const voices = window.speechSynthesis.getVoices();
    console.log(`[ListeningSection] Available voices: ${voices.length}`);
    
    if (voices.length > 0) {
      speak();
    } else {
      console.log("[ListeningSection] Waiting for voices to load...");
      
      // Try again after a short delay
      const retryTimer = setTimeout(() => {
        const retryVoices = window.speechSynthesis.getVoices();
        if (retryVoices.length > 0) {
          console.log(`[ListeningSection] Voices loaded after delay (${retryVoices.length})`);
          speak();
        } else {
          console.warn("[ListeningSection] Still no voices after delay, skipping audio");
          startFinishing();
        }
      }, 800);
      
      const handleVoicesChanged = () => {
        console.log("[ListeningSection] onvoiceschanged fired");
        clearTimeout(retryTimer);
        speak();
      };
      
      window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdx, section.script]);

  // ── After audio ends — 30 s to finish writing ─────────────────────────────
  const startFinishing = useCallback(() => {
    setPhase("finishing");
    setFinishTime(FINISH_SECONDS);
    clearInterval(finishTimerRef.current!);

    finishTimerRef.current = setInterval(() => {
      setFinishTime(t => {
        if (t <= 1) {
          clearInterval(finishTimerRef.current!);
          advanceSection();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionIdx]);

  // ── Move to next section or submit ─────────────────────────────────────────
  const advanceSection = useCallback(() => {
    clearInterval(finishTimerRef.current!);
    window.speechSynthesis?.cancel();
    if (sectionIdx < 3) {
      setSectionIdx(i => i + 1);
    } else {
      setPhase("done");
      setSubmitted(true);
    }
  }, [sectionIdx]);

  function setAnswer(qId: number, value: string) {
    setAnswers(prev => ({ ...prev, [qId]: value }));
  }

  // ── Final submit ───────────────────────────────────────────────────────────
  function handleSubmit() {
    let correct = 0;
    test.sections.forEach(sec =>
      sec.questions.forEach(q => {
        const ua = (answers[q.id] ?? "").trim().toLowerCase();
        if (ua === q.answer.trim().toLowerCase()) correct++;
      })
    );
    onComplete(rawToBand(correct));
  }

  // ── Review screen ──────────────────────────────────────────────────────────
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto p-6 space-y-8">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
          <p className="text-green-700 font-bold">Listening complete — review your answers below</p>
        </div>

        {test.sections.map(sec => (
          <div key={sec.sectionNumber} className="space-y-3">
            <h3 className="font-semibold text-gray-700 border-b pb-1">{sec.title}</h3>
            {sec.questions.map(q => (
              <div key={q.id} className="flex gap-4 text-sm">
                <span className="text-gray-400 w-6 shrink-0">Q{q.id}</span>
                <span className="flex-1 text-gray-700">{q.q}</span>
                <span className="font-medium text-gray-900 text-right w-28 shrink-0">
                  {answers[q.id] ?? "—"}
                </span>
              </div>
            ))}
          </div>
        ))}

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Listening →
        </button>
      </div>
    );
  }

  const isReading   = phase === "reading";
  const isPlaying   = phase === "playing";
  const isFinishing = phase === "finishing";

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-5">

      {/* ── Section progress bar ─────────────────────────────────────── */}
      <div className="flex items-center gap-2">
        {test.sections.map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-colors ${
            i < sectionIdx ? "bg-green-500" : i === sectionIdx ? "bg-blue-500" : "bg-gray-200"
          }`} />
        ))}
      </div>

      {/* ── Status banner ────────────────────────────────────────────── */}
      {isReading && (
        <div className="flex items-center justify-between bg-amber-50 border border-amber-300 rounded-xl px-5 py-3">
          <div>
            <p className="font-semibold text-amber-800 text-sm">
              📖 Read the questions now — audio starts in
            </p>
            <p className="text-amber-600 text-xs mt-0.5">
              {section.instructions}
            </p>
          </div>
          <span className={`font-mono font-black text-3xl ml-4 shrink-0 ${
            readTime <= 10 ? "text-red-600 animate-pulse" : "text-amber-600"
          }`}>
            {readTime}s
          </span>
        </div>
      )}

      {isPlaying && (
        <div className="flex items-center gap-3 bg-blue-600 text-white rounded-xl px-5 py-3">
          <span className="animate-pulse text-xl shrink-0">🔊</span>
          <div className="flex-1">
            <p className="font-semibold text-sm">Audio playing — answer as you listen</p>
            <p className="text-blue-200 text-xs mt-0.5">Recording plays once only. No rewind or replay.</p>
          </div>
        </div>
      )}

      {isFinishing && (
        <div className="flex items-center justify-between bg-green-50 border border-green-300 rounded-xl px-5 py-3">
          <div>
            <p className="font-semibold text-green-800 text-sm">✅ Audio finished — complete any remaining answers</p>
            <p className="text-green-600 text-xs mt-0.5">Next section begins automatically.</p>
          </div>
          <div className="text-right shrink-0 ml-4">
            <span className={`font-mono font-black text-2xl ${
              finishTime <= 10 ? "text-red-600 animate-pulse" : "text-green-600"
            }`}>{finishTime}s</span>
            <button
              onClick={advanceSection}
              className="block text-xs text-green-600 underline mt-1 hover:text-green-800"
            >
              {sectionIdx < 3 ? "Next section →" : "Finish →"}
            </button>
          </div>
        </div>
      )}

      {/* ── Section header ────────────────────────────────────────────── */}
      <div>
        <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
        <p className="text-sm text-gray-500 mt-0.5">{section.context}</p>
      </div>

      {/* ── Questions — always visible ────────────────────────────────── */}
      <div className="space-y-5">
        {section.questions.map(q => (
          <div key={q.id} className="space-y-2">
            <label className="flex gap-3 text-sm text-gray-800">
              <span className="font-bold text-blue-600 w-6 shrink-0">{q.id}.</span>
              <span>{q.q}</span>
            </label>

            {q.type === "mcq" && q.opts ? (
              <div className="pl-9 space-y-1">
                {q.opts.map(opt => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm">
                    <input
                      type="radio"
                      name={`q-${q.id}`}
                      value={opt[0]}
                      checked={answers[q.id] === opt[0]}
                      onChange={() => setAnswer(q.id, opt[0])}
                      className="accent-blue-600"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            ) : (
              <div className="pl-9">
                <input
                  type="text"
                  value={answers[q.id] ?? ""}
                  onChange={e => setAnswer(q.id, e.target.value)}
                  placeholder="Your answer"
                  className="w-full max-w-xs border border-gray-300 rounded-lg px-3 py-1.5 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Manual skip (finishing phase only) ───────────────────────── */}
      {isFinishing && (
        <button
          onClick={advanceSection}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          {sectionIdx < 3 ? `Next: Section ${sectionIdx + 2} →` : "Finish Listening →"}
        </button>
      )}
    </div>
  );
}
