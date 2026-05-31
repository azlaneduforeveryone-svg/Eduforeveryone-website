"use client";
import { IELTSFormat, overallBand } from "@/lib/ielts-types";

interface Props {
  scores: {
    listening: number;
    reading: number;
    writing: number;
    speaking: number;
  };
  format: IELTSFormat;
  onRestart: () => void;
}

function bandColour(band: number) {
  if (band >= 8) return "text-green-600";
  if (band >= 6.5) return "text-blue-600";
  if (band >= 5) return "text-amber-600";
  return "text-red-600";
}

function bandLabel(band: number) {
  if (band >= 8.5) return "Expert";
  if (band >= 7.5) return "Very Good";
  if (band >= 6.5) return "Competent";
  if (band >= 5.5) return "Modest";
  if (band >= 4.5) return "Limited";
  return "Extremely Limited";
}

export default function ResultsPage({ scores, format, onRestart }: Props) {
  const overall = overallBand(
    scores.listening,
    scores.reading,
    scores.writing,
    scores.speaking
  );

  const sections = [
    { label: "Listening", score: scores.listening, icon: "🎧" },
    { label: "Reading", score: scores.reading, icon: "📖" },
    { label: "Writing", score: scores.writing, icon: "✍️" },
    { label: "Speaking", score: scores.speaking, icon: "🎙" },
  ];

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-8">
      {/* Overall score */}
      <div className="text-center space-y-2 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 border border-blue-200">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest">Overall Band Score</p>
        <p className={`text-7xl font-black ${bandColour(overall)}`}>{overall.toFixed(1)}</p>
        <p className="text-lg font-semibold text-gray-600">{bandLabel(overall)}</p>
        <p className="text-xs text-gray-400 mt-2">
          {format === "academic" ? "IELTS Academic" : "IELTS General Training"}
        </p>
      </div>

      {/* Section breakdown */}
      <div className="grid grid-cols-2 gap-4">
        {sections.map(({ label, score, icon }) => (
          <div key={label} className="bg-white border rounded-2xl p-5 text-center shadow-sm">
            <span className="text-2xl">{icon}</span>
            <p className={`text-4xl font-black mt-2 ${bandColour(score)}`}>{score.toFixed(1)}</p>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
            <p className="text-xs text-gray-400">{bandLabel(score)}</p>
          </div>
        ))}
      </div>

      {/* Band descriptors */}
      <div className="bg-gray-50 rounded-2xl p-5 space-y-3">
        <h3 className="font-semibold text-gray-700 text-sm">IELTS Band Scale Reference</h3>
        <div className="space-y-1.5">
          {[
            { range: "9.0", label: "Expert", colour: "bg-green-500" },
            { range: "8.0–8.5", label: "Very Good", colour: "bg-green-400" },
            { range: "7.0–7.5", label: "Good", colour: "bg-blue-400" },
            { range: "6.0–6.5", label: "Competent", colour: "bg-blue-300" },
            { range: "5.0–5.5", label: "Modest", colour: "bg-amber-400" },
            { range: "4.0–4.5", label: "Limited", colour: "bg-red-300" },
          ].map(({ range, label, colour }) => (
            <div key={range} className="flex items-center gap-3 text-xs">
              <div className={`w-2 h-2 rounded-full ${colour}`} />
              <span className="font-mono w-14 text-gray-600">{range}</span>
              <span className="text-gray-500">{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Tips based on weakest section */}
      <WeaknessTip scores={scores} />

      <button
        onClick={onRestart}
        className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Take Another Test
      </button>
    </div>
  );
}

function WeaknessTip({ scores }: { scores: Props["scores"] }) {
  const entries = Object.entries(scores) as [keyof typeof scores, number][];
  const weakest = entries.reduce((a, b) => (b[1] < a[1] ? b : a));
  const [section, band] = weakest;

  const tips: Record<string, string[]> = {
    listening: [
      "Practise active listening — predict answers before they appear.",
      "Focus on Section 3 & 4 which use more academic vocabulary.",
      "Train with one-play-only audio to simulate real exam conditions.",
    ],
    reading: [
      "Skim each passage for gist before answering questions.",
      "For TRUE/FALSE/NOT GIVEN, only mark TRUE if it is explicitly stated.",
      "Manage your time — 20 minutes per passage in Academic.",
    ],
    writing: [
      "Task 2 is worth double marks — prioritise it if time is short.",
      "Always write 150+ words for Task 1 and 250+ for Task 2.",
      "Use a clear 4-paragraph structure for Task 2: intro, body × 2, conclusion.",
    ],
    speaking: [
      "Extend every answer — never give a one-word response.",
      "Use fillers naturally ('That's an interesting question..') to buy thinking time.",
      "Practise Part 2 alone with a timer to build confidence speaking for 2 minutes.",
    ],
  };

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 space-y-2">
      <p className="text-sm font-semibold text-amber-800">
        💡 Focus area: <span className="capitalize">{section}</span> ({band.toFixed(1)})
      </p>
      <ul className="space-y-1.5">
        {tips[section].map((tip, i) => (
          <li key={i} className="text-xs text-amber-700 flex gap-2">
            <span>•</span>{tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
