"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { IELTSFormat, overallBand } from "@/lib/ielts/ielts-types";
import { useAuth } from "@/contexts/AuthContext";
import { saveIeltsResult } from "@/lib/firebaseDB";
import { track } from "@/lib/analytics";
import { getMockListeningTest } from "@/lib/ielts/listeningData";
import { getAcademicReadingTest, getGTReadingTest } from "@/lib/ielts/readingData";
import { getAcademicWritingTest, getGTWritingTest } from "@/lib/ielts/writingData";
import { getSpeakingTest } from "@/lib/ielts/ielts-speaking-data";
import ListeningSection from "@/components/ielts/ListeningSection";
import ReadingSection from "@/components/ielts/ReadingSection";
import WritingSection from "@/components/ielts/WritingSection";
import SpeakingSection from "@/components/ielts/SpeakingSection";
import ResultsPage from "@/components/ielts/ResultsPage";

type Stage =
  | "format_select"
  | "listening"
  | "transfer"
  | "reading"
  | "writing"
  | "speaking"
  | "results";

interface Scores {
  listening?: number;
  reading?: number;
  writing?: number;
  speaking?: number;
}

const STAGE_LABELS: Record<Stage, string> = {
  format_select: "Format",
  listening:     "Listening",
  transfer:      "Transfer",
  reading:       "Reading",
  writing:       "Writing",
  speaking:      "Speaking",
  results:       "Results",
};

const ORDERED_STAGES: Stage[] = [
  "format_select",
  "listening",
  "transfer",
  "reading",
  "writing",
  "speaking",
  "results",
];

const TRANSFER_SECONDS = 10 * 60; // 10 minutes

function formatTime(s: number) {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = (s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
}

export default function FullTestClient() {
  const { user } = useAuth();
  const mockId = useMemo(() => "mock-" + Date.now(), []);
  const [format, setFormat] = useState<IELTSFormat | null>(null);
  const [stage, setStage] = useState<Stage>("format_select");
  const [scores, setScores] = useState<Scores>({});
  const [transferTime, setTransferTime] = useState(TRANSFER_SECONDS);
  const transferRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialise test data once format is chosen
  const listeningTest = useMemo(() => getMockListeningTest() as unknown as import("@/lib/ielts/ielts-types").ListeningTest, []);
  const academicReadingTest = useMemo(() => getAcademicReadingTest(), []);
  const gtReadingTest = useMemo(() => getGTReadingTest(), []);
  const academicWritingTest = useMemo(() => getAcademicWritingTest(), []);
  const gtWritingTest = useMemo(() => getGTWritingTest(), []);
  const speakingTest = useMemo(() => getSpeakingTest(), []);

  const readingTest = format === "academic" ? academicReadingTest : gtReadingTest;
  const writingTest = format === "academic" ? academicWritingTest : gtWritingTest;

  // Transfer period timer
  useEffect(() => {
    if (stage !== "transfer") return;
    setTransferTime(TRANSFER_SECONDS);
    transferRef.current = setInterval(() => {
      setTransferTime((t) => {
        if (t <= 1) {
          clearInterval(transferRef.current!);
          setStage("reading");
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(transferRef.current!);
  }, [stage]);

  function handleFormatSelect(f: IELTSFormat) {
    track("ielts_test_start", { section: "mock" });
    setFormat(f);
    setStage("listening");
  }

  function handleListeningComplete(band: number) {
    setScores((s) => ({ ...s, listening: band }));
    saveIeltsResult({ uid: user?.uid, displayName: user?.displayName ?? "", skill: "listening", band, source: "full-mock", mockId });
    setStage("transfer");
  }

  function handleReadingComplete(band: number) {
    setScores((s) => ({ ...s, reading: band }));
    saveIeltsResult({ uid: user?.uid, displayName: user?.displayName ?? "", skill: "reading", band, source: "full-mock", mockId });
    setStage("writing");
  }

  function handleWritingComplete(band: number) {
    setScores((s) => ({ ...s, writing: band }));
    saveIeltsResult({ uid: user?.uid, displayName: user?.displayName ?? "", skill: "writing", band, source: "full-mock", mockId });
    setStage("speaking");
  }

  function handleSpeakingComplete(band: number) {
    const overall = overallBand(scores.listening ?? 0, scores.reading ?? 0, scores.writing ?? 0, band);
    track("ielts_test_complete", { section: "mock", band: overall });
    setScores((s) => ({ ...s, speaking: band }));
    saveIeltsResult({ uid: user?.uid, displayName: user?.displayName ?? "", skill: "speaking", band, source: "full-mock", mockId });
    setStage("results");
  }

  function handleRestart() {
    setFormat(null);
    setScores({});
    setStage("format_select");
  }

  // ── Format selection ───────────────────────────────────────
  if (stage === "format_select") {
    return (
      <div className="min-h-screen bg-efe-bg flex items-center justify-center p-4">
        <div className="bg-efe-surface border border-efe-line rounded-3xl shadow-sm p-8 max-w-lg w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-efe-fg font-display">IELTS Full Test</h1>
            <p className="text-efe-muted text-sm">
              Select your test format to begin. The full test takes approximately 2 hours 45 minutes.
            </p>
          </div>

          <div className="space-y-3">
            <FormatCard
              title="Academic"
              badge="IELTS Academic"
              desc="For university admission and professional registration. Reading uses academic texts. Task 1 is a chart/diagram description."
              onClick={() => handleFormatSelect("academic")}
            />
            <FormatCard
              title="General Training"
              badge="IELTS General Training"
              desc="For work experience, migration, and secondary education. Reading uses everyday texts. Task 1 is a letter."
              onClick={() => handleFormatSelect("general")}
            />
          </div>

          <TestStructureInfo />
        </div>
      </div>
    );
  }

  // ── Transfer period ─────────────────────────────────────────
  if (stage === "transfer") {
    const urgent = transferTime < 120;
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center p-4">
        <div className="bg-efe-surface border border-efe-line rounded-3xl shadow-sm p-8 max-w-md w-full text-center space-y-6">
          <div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Answer Transfer Period</p>
            <h2 className="text-2xl font-bold text-efe-fg mt-2 font-display">10 Minutes</h2>
            <p className="text-sm text-efe-muted mt-1">
              In the real exam, use this time to transfer your answers to the answer sheet.
              Here, review your answers before Reading begins automatically.
            </p>
          </div>

          <div className={`text-6xl font-black font-mono ${urgent ? "text-red-600 animate-pulse" : "text-amber-600"}`}>
            {formatTime(transferTime)}
          </div>

          <p className="text-xs text-efe-muted">Reading will begin automatically when the timer ends.</p>

          <button
            onClick={() => { clearInterval(transferRef.current!); setStage("reading"); }}
            className="w-full py-3 bg-efe-accent text-white rounded-xl font-semibold hover:bg-efe-accent-ink transition"
          >
            Skip to Reading →
          </button>
        </div>
      </div>
    );
  }

  // ── Results ─────────────────────────────────────────────────
  if (stage === "results" && scores.listening && scores.reading && scores.writing && scores.speaking) {
    return (
      <div className="min-h-screen bg-efe-bg py-8">
        <ResultsPage
          scores={{
            listening: scores.listening,
            reading: scores.reading,
            writing: scores.writing,
            speaking: scores.speaking,
          }}
          format={format!}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  // ── Active section ─────────────────────────────────────────
  const stageIndex = ORDERED_STAGES.indexOf(stage);

  return (
    <div className="min-h-screen bg-efe-bg">
      {/* Top progress bar */}
      <div className="sticky top-0 z-10 bg-efe-surface border-b border-efe-line shadow-sm px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <span className="text-xs font-bold text-efe-muted shrink-0">
            {format === "academic" ? "Academic" : "General Training"}
          </span>
          <div className="flex items-center gap-1 flex-1">
            {(["listening", "reading", "writing", "speaking"] as Stage[]).map((s) => {
              const idx = ORDERED_STAGES.indexOf(s);
              const done = stageIndex > idx;
              const active = stage === s;
              return (
                <div key={s} className="flex items-center gap-1 flex-1">
                  <div
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      done ? "bg-green-500" : active ? "bg-efe-accent" : "bg-gray-200"
                    }`}
                  />
                  <span className={`text-xs font-medium shrink-0 ${done ? "text-green-600" : active ? "text-efe-accent" : "text-efe-muted"}`}>
                    {STAGE_LABELS[s]}
                  </span>
                </div>
              );
            })}
          </div>
          {scores.listening !== undefined && (
            <span className="text-xs text-efe-muted shrink-0">
              L: {scores.listening.toFixed(1)}{scores.reading !== undefined ? ` R: ${scores.reading.toFixed(1)}` : ""}
            </span>
          )}
        </div>
      </div>

      {/* Section content */}
      <div className="py-6">
        {stage === "listening" && (
          <ListeningSection test={listeningTest} onComplete={handleListeningComplete} />
        )}
        {stage === "reading" && format && (
          <ReadingSection test={readingTest} format={format} onComplete={handleReadingComplete} />
        )}
        {stage === "writing" && format && (
          <WritingSection test={writingTest} format={format} onComplete={handleWritingComplete} />
        )}
        {stage === "speaking" && (
          <SpeakingSection test={speakingTest} onComplete={handleSpeakingComplete} />
        )}
      </div>
    </div>
  );
}

// ── Sub-components ─────────────────────────────────────────────

function FormatCard({
  title,
  badge,
  desc,
  onClick,
}: {
  title: string;
  badge: string;
  desc: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left border border-efe-line bg-efe-surface rounded-2xl p-5 hover:border-efe-accent hover:bg-efe-accent-soft/40 transition group"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <span className="text-xs font-bold text-efe-accent bg-efe-accent-soft px-2 py-0.5 rounded-full">{badge}</span>
          <p className="font-bold text-efe-fg text-lg font-display">{title}</p>
          <p className="text-sm text-efe-muted">{desc}</p>
        </div>
        <span className="text-efe-muted group-hover:text-efe-accent text-2xl ml-4 mt-1">→</span>
      </div>
    </button>
  );
}

function TestStructureInfo() {
  return (
    <div className="bg-efe-bg border border-efe-line rounded-2xl p-4 space-y-2">
      <p className="text-xs font-bold text-efe-muted uppercase tracking-wider">Test Structure</p>
      <div className="space-y-1.5 text-xs text-efe-muted">
        <div className="flex justify-between"><span>🎧 Listening</span><span>~30 min + 10 min transfer</span></div>
        <div className="flex justify-between"><span>📖 Reading</span><span>60 min</span></div>
        <div className="flex justify-between"><span>✍️ Writing</span><span>60 min</span></div>
        <div className="flex justify-between"><span>🎙 Speaking</span><span>11–14 min</span></div>
      </div>
    </div>
  );
}
