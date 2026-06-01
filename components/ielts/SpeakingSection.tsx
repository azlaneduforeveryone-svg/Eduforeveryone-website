// components/ielts/SpeakingSection.tsx
"use client";
import { useState, useEffect } from "react";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

interface SpeakingTest {
  part2: { cueCard: string; preparation: number; speaking: number };
  part3: { questions: string[] };
}

interface Props {
  test: SpeakingTest;
  onComplete: (band: number) => void;
}

export default function SpeakingSection({ test, onComplete }: Props) {
  const [stage, setStage] = useState<"part2" | "part3" | "submitting">("part2");
  const [transcript, setTranscript] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { transcript: liveTranscript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();

  useEffect(() => {
    if (isRecording) setTranscript(liveTranscript);
  }, [liveTranscript, isRecording]);

  if (!browserSupportsSpeechRecognition) {
    return <div className="p-6 text-center">Your browser does not support speech recognition. Use Chrome or Edge.</div>;
  }

  const startRecording = () => {
    resetTranscript();
    setTranscript("");
    setError("");
    SpeechRecognition.startListening({ continuous: true, language: "en-US" });
    setIsRecording(true);
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
    setIsRecording(false);
  };

  const handleSubmit = async () => {
    if (!transcript.trim()) {
      setError("Please record your answer first.");
      return;
    }
    setLoading(true);
    setError("");
    const task = stage === "part2" ? test.part2.cueCard : test.part3.questions[0];
    try {
      const res = await fetch("/api/speaking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task, response: transcript, part: stage === "part2" ? 2 : 3, topic: "IELTS Speaking" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      onComplete(data.overall);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-bold">Speaking Test</h2>
      {stage === "part2" && (
        <div className="border rounded-2xl p-5 space-y-4">
          <p className="text-sm text-gray-500">Part 2 – Cue Card (1 min prep, 2 min speak)</p>
          <div className="bg-amber-50 p-4 rounded-xl">
            <p className="whitespace-pre-wrap font-medium">{test.part2.cueCard}</p>
          </div>
          <div className="flex gap-3">
            {!isRecording ? (
              <button onClick={startRecording} className="bg-red-600 text-white px-4 py-2 rounded-lg">
                🎙️ Start Recording
              </button>
            ) : (
              <button onClick={stopRecording} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                ⏹️ Stop Recording
              </button>
            )}
          </div>
          {transcript && (
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-xs font-semibold">Your transcript:</p>
              <p className="text-sm">{transcript}</p>
            </div>
          )}
          <button
            onClick={() => setStage("part3")}
            disabled={!transcript}
            className="w-full bg-blue-600 text-white py-2 rounded-lg disabled:opacity-50"
          >
            Next → Part 3
          </button>
        </div>
      )}

      {stage === "part3" && (
        <div className="border rounded-2xl p-5 space-y-4">
          <p className="text-sm text-gray-500">Part 3 – Discussion</p>
          <div className="bg-amber-50 p-4 rounded-xl">
            <p className="whitespace-pre-wrap">{test.part3.questions[0]}</p>
          </div>
          <div className="flex gap-3">
            {!isRecording ? (
              <button onClick={startRecording} className="bg-red-600 text-white px-4 py-2 rounded-lg">
                🎙️ Start Recording
              </button>
            ) : (
              <button onClick={stopRecording} className="bg-gray-600 text-white px-4 py-2 rounded-lg">
                ⏹️ Stop Recording
              </button>
            )}
          </div>
          {transcript && (
            <div className="bg-gray-50 p-3 rounded">
              <p className="text-xs font-semibold">Your transcript:</p>
              <p className="text-sm">{transcript}</p>
            </div>
          )}
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Grading..." : "Submit Speaking →"}
          </button>
        </div>
      )}

      {stage === "submitting" && <div>Loading...</div>}
    </div>
  );
}