// components/ielts/WritingSection.tsx
"use client";
import { useState } from "react";

interface WritingTask {
  task1: { prompt: string; minWords: number };
  task2: { prompt: string; minWords: number };
}

interface Props {
  test: WritingTask;
  format: "academic" | "general";
  onComplete: (band: number) => void;
}

export default function WritingSection({ test, format, onComplete }: Props) {
  const [task1Answer, setTask1Answer] = useState("");
  const [task2Answer, setTask2Answer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!task1Answer.trim() || !task2Answer.trim()) {
      setError("Please complete both tasks.");
      return;
    }
    setLoading(true);
    setError("");

    // Combine both tasks for grading (or grade separately and average)
    const fullResponse = `Task 1:\n${task1Answer}\n\nTask 2:\n${task2Answer}`;
    const fullPrompt = `${test.task1.prompt}\n\n${test.task2.prompt}`;

    try {
      const res = await fetch("/api/writing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ task: fullPrompt, response: fullResponse }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Grading failed");
      onComplete(data.overall);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold">Writing</h2>
      <div className="border rounded-2xl p-5 space-y-3">
        <p className="text-sm text-gray-500">Task 1 ({test.task1.minWords}+ words)</p>
        <p className="whitespace-pre-wrap">{test.task1.prompt}</p>
        <textarea
          rows={8}
          className="w-full border rounded-xl p-3"
          value={task1Answer}
          onChange={(e) => setTask1Answer(e.target.value)}
          disabled={loading}
          placeholder="Write your Task 1 answer here..."
        />
      </div>
      <div className="border rounded-2xl p-5 space-y-3">
        <p className="text-sm text-gray-500">Task 2 ({test.task2.minWords}+ words)</p>
        <p className="whitespace-pre-wrap">{test.task2.prompt}</p>
        <textarea
          rows={10}
          className="w-full border rounded-xl p-3"
          value={task2Answer}
          onChange={(e) => setTask2Answer(e.target.value)}
          disabled={loading}
          placeholder="Write your Task 2 answer here..."
        />
      </div>
      {error && <div className="text-red-600 text-sm">{error}</div>}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold disabled:opacity-50"
      >
        {loading ? "Grading with DeepSeek..." : "Submit Writing →"}
      </button>
    </div>
  );
}