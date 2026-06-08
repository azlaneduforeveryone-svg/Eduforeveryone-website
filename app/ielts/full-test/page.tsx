"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import { IELTSFormat, overallBand } from "@/lib/ielts-types";
import { getMockListeningTest } from "@/lib/ielts-listening-bank";
import { getAcademicReadingTest } from "@/lib/ielts-reading-academic-data";
import { getGTReadingTest } from "@/lib/ielts-reading-gt-data";
import { getAcademicWritingTest, getGTWritingTest } from "@/lib/ielts-writing-data";
import { getSpeakingTest } from "@/lib/ielts-speaking-data";
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

export default function FullTestPage() {
  const [format, setFormat] = useState<IELTSFormat | null>(null);
  const [stage, setStage] = useState<Stage>("format_select");
  const [scores, setScores] = useState<Scores>({});
  const [transferTime, setTransferTime] = useState(TRANSFER_SECONDS);
  const transferRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Initialise test data once format is chosen
  const listeningTest = useMemo(() => getMockListeningTest() as unknown as import("@/lib/ielts-types").ListeningTest, []);
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
    setFormat(f);
    setStage("listening");
  }

  function handleListeningComplete(band: number) {
    setScores((s) => ({ ...s, listening: band }));
    setStage("transfer");
  }

  function handleReadingComplete(band: number) {
    setScores((s) => ({ ...s, reading: band }));
    setStage("writing");
  }

  function handleWritingComplete(band: number) {
    setScores((s) => ({ ...s, writing: band }));
    setStage("speaking");
  }

  function handleSpeakingComplete(band: number) {
    setScores((s) => ({ ...s, speaking: band }));
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-lg w-full space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-black text-gray-900">IELTS Full Test</h1>
            <p className="text-gray-500 text-sm">
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
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-md w-full text-center space-y-6">
          <div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-widest">Answer Transfer Period</p>
            <h2 className="text-2xl font-bold text-gray-800 mt-2">10 Minutes</h2>
            <p className="text-sm text-gray-500 mt-1">
              In the real exam, use this time to transfer your answers to the answer sheet.
              Here, review your answers before Reading begins automatically.
            </p>
          </div>

          <div className={`text-6xl font-black font-mono ${urgent ? "text-red-600 animate-pulse" : "text-amber-600"}`}>
            {formatTime(transferTime)}
          </div>

          <p className="text-xs text-gray-400">Reading will begin automatically when the timer ends.</p>

          <button
            onClick={() => { clearInterval(transferRef.current!); setStage("reading"); }}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
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
    <div className="min-h-screen bg-gray-50">
      {/* Top progress bar */}
      <div className="sticky top-0 z-10 bg-white border-b shadow-sm px-4 py-3">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <span className="text-xs font-bold text-gray-400 shrink-0">
            {format === "academic" ? "Academic" : "General Training"}
          </span>
          <div className="flex items-center gap-1 flex-1">
            {(["listening", "reading", "writing", "speaking"] as Stage[]).map((s, i) => {
              const idx = ORDERED_STAGES.indexOf(s);
              const done = stageIndex > idx;
              const active = stage === s;
              return (
                <div key={s} className="flex items-center gap-1 flex-1">
                  <div
                    className={`flex-1 h-1.5 rounded-full transition-all ${
                      done ? "bg-green-500" : active ? "bg-blue-500" : "bg-gray-200"
                    }`}
                  />
                  <span className={`text-xs font-medium shrink-0 ${done ? "text-green-600" : active ? "text-blue-600" : "text-gray-400"}`}>
                    {STAGE_LABELS[s]}
                  </span>
                </div>
              );
            })}
          </div>
          {scores.listening !== undefined && (
            <span className="text-xs text-gray-400 shrink-0">
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
      className="w-full text-left border-2 border-gray-200 rounded-2xl p-5 hover:border-blue-400 hover:bg-blue-50 transition group"
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <span className="text-xs font-bold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full">{badge}</span>
          <p className="font-bold text-gray-900 text-lg">{title}</p>
          <p className="text-sm text-gray-500">{desc}</p>
        </div>
        <span className="text-gray-300 group-hover:text-blue-500 text-2xl ml-4 mt-1">→</span>
      </div>
    </button>
  );
}

function TestStructureInfo() {
  return (
    <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Test Structure</p>
      <div className="space-y-1.5 text-xs text-gray-600">
        <div className="flex justify-between"><span>🎧 Listening</span><span>~30 min + 10 min transfer</span></div>
        <div className="flex justify-between"><span>📖 Reading</span><span>60 min</span></div>
        <div className="flex justify-between"><span>✍️ Writing</span><span>60 min</span></div>
        <div className="flex justify-between"><span>🎙 Speaking</span><span>11–14 min</span></div>
      </div>
    </div>
  );
}
