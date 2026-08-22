// components/ielts/SpeakingSection.tsx
"use client";
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import { SpeakingTopic, PART2_SPEAK_SECONDS } from "@/lib/ielts/ielts-speaking-data";

interface Props {
  test: SpeakingTopic;
  onComplete: (band: number) => void;
}

const wordCount = (s: string) => s.trim().split(/\s+/).filter(Boolean).length;

export default function SpeakingSection({ test, onComplete }: Props) {
  const [stage, setStage] = useState<"part2" | "part3">("part2");
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const {
    transcript: liveTranscript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  useEffect(() => {
    if (listening) setTranscript(liveTranscript);
  }, [liveTranscript, listening]);

  const startRecording = () => {
    resetTranscript();
    setTranscript("");
    setError("");
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    setIsRecording(true);
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
    setTranscript(liveTranscript);
    setIsRecording(false);
  };

  const handleSubmit = async () => {
    if (wordCount(transcript) < 20) {
      setError("Please speak or type at least 20 words first.");
      return;
    }
    setLoading(true);
    setError("");
    const task =
      stage === "part2"
        ? `${test.cueCard.title}\nYou should say:\n- ${test.cueCard.points.join("\n- ")}\n${test.cueCard.followUp}`
        : test.part3[0].q;
    try {
      const res = await fetch("/api/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          task,
          response: transcript,
          part: stage === "part2" ? 2 : 3,
          topic: test.theme,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Grading failed.");
      onComplete(data.overall);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Could not reach the scoring service.");
    } finally {
      setLoading(false);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    // Not fatal — they can still type their answer.
    // (We only warn; the textarea below still works.)
  }

  const prompt =
    stage === "part2" ? (
      <div className="bg-amber-50 p-4 rounded-xl">
        <p className="font-medium mb-2">{test.cueCard.title}</p>
        <p className="text-sm text-gray-600 mb-1">You should say:</p>
        <ul className="list-disc list-inside text-sm text-gray-700 space-y-0.5">
          {test.cueCard.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
        <p className="text-sm text-gray-600 mt-2">{test.cueCard.followUp}</p>
        <p className="text-xs text-gray-400 mt-2">Speak for about {Math.round(PART2_SPEAK_SECONDS / 60)} minutes.</p>
      </div>
    ) : (
      <div className="bg-amber-50 p-4 rounded-xl">
        <p className="whitespace-pre-wrap">{test.part3[0].q}</p>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Speaking — {stage === "part2" ? "Part 2 (Cue Card)" : "Part 3 (Discussion)"}</h2>

      <div className="border rounded-2xl p-5 space-y-4">
        {prompt}

        <div className="flex gap-3 items-center flex-wrap">
          {!isRecording ? (
            <button onClick={startRecording} className="bg-red-600 text-white px-4 py-2 rounded-lg">
              🎙️ Start Recording
            </button>
          ) : (
            <button onClick={stopRecording} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
              ⏹️ Stop Recording
            </button>
          )}
          {listening && <span className="text-sm text-green-600 animate-pulse">🔊 Listening…</span>}
        </div>

        {browserSupportsSpeechRecognition && isMicrophoneAvailable === false && (
          <p className="text-xs text-red-600">Microphone is blocked — allow it in your browser, or just type below.</p>
        )}

        <div>
          <p className="text-xs font-semibold text-gray-500 mb-1">Your transcript (editable — type if the mic doesn&apos;t work):</p>
          <textarea
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
            rows={5}
            spellCheck={false}
            autoCorrect="off"
            autoCapitalize="off"
            autoComplete="off"
            data-gramm="false"
            data-gramm_editor="false"
            data-enable-grammarly="false"
            data-lt-active="false"
            placeholder="Your spoken words appear here. You can also type or correct them before submitting."
            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
          />
          <p className="text-[11px] text-gray-400 mt-1">
            {transcript.trim() ? `${wordCount(transcript)} words` : "Aim for at least 20 words."}
          </p>
        </div>

        {error && <div className="text-red-600 text-sm">{error}</div>}

        {stage === "part2" ? (
          <button
            onClick={() => {
              setStage("part3");
              setTranscript("");
              resetTranscript();
            }}
            disabled={wordCount(transcript) < 20}
            className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:opacity-50"
          >
            Next → Part 3
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Grading…" : "Submit Speaking →"}
          </button>
        )}

        <p className="text-[11px] text-gray-400">
          Indicative score from your transcript (vocabulary, grammar, coherence). Pronunciation and full fluency need audio and aren&apos;t graded here.
        </p>
      </div>
    </div>
  );
}
