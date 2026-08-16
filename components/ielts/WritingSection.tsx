// components/ielts/WritingSection.tsx
"use client";
import { useState, useMemo } from "react";
import { WritingTest, IELTSFormat } from "@/lib/ielts/ielts-types";
import { academicT1ApiType, gtT1ApiType, task2ApiType } from "@/lib/ielts/writingData";
import Task1Figure from "@/components/ielts/Task1Figure";

interface Props {
  test: WritingTest;
  format: IELTSFormat;
  onComplete: (band: number) => void;
}

interface TaskGrade {
  overall: number;
  summary: string;
  top_fix: string;
}

interface CombinedResult {
  t1: TaskGrade;
  t2: TaskGrade;
  writing: number; // weighted, Task 2 counts double
}

const wordCount = (s: string) => (s.trim() ? s.trim().split(/\s+/).length : 0);
const roundHalf = (n: number) => Math.round(n * 2) / 2;

async function gradeTask(payload: {
  testType: string;
  taskType: string;
  task: string;
  response: string;
}): Promise<TaskGrade> {
  const res = await fetch("/api/writing", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error || "Grading failed");
  return { overall: data.overall, summary: data.summary, top_fix: data.top_fix };
}

export default function WritingSection({ test, format, onComplete }: Props) {
  const [task1Answer, setTask1Answer] = useState("");
  const [task2Answer, setTask2Answer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<CombinedResult | null>(null);

  const testType = format === "academic" ? "Academic" : "General";

  // Per-task grader payloads (taskType is what /api/writing branches on).
  const task1Meta = useMemo(() => {
    if (test.format === "academic") {
      return {
        taskType: academicT1ApiType(test.task1.chartType),
        task: `${test.task1.prompt}\n\n[Figure data the candidate is describing: ${test.task1.chartDescription}]`,
      };
    }
    return {
      taskType: gtT1ApiType(),
      task: `${test.task1.prompt}\n\nThe letter must cover these points:\n${test.task1.bulletPoints
        .map((b) => `- ${b}`)
        .join("\n")}`,
    };
  }, [test]);

  const task2Meta = useMemo(
    () => ({ taskType: task2ApiType(test.task2.taskType), task: test.task2.prompt }),
    [test]
  );

  const w1 = wordCount(task1Answer);
  const w2 = wordCount(task2Answer);

  const handleSubmit = async () => {
    if (task1Answer.trim().length < 50 || task2Answer.trim().length < 50) {
      setError("Please write a genuine attempt for both tasks (at least ~25 words each) before submitting.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const [t1, t2] = await Promise.all([
        gradeTask({ testType, taskType: task1Meta.taskType, task: task1Meta.task, response: task1Answer }),
        gradeTask({ testType, taskType: task2Meta.taskType, task: task2Meta.task, response: task2Answer }),
      ]);
      // Official weighting: Task 2 carries twice the weight of Task 1.
      const writing = roundHalf((t1.overall + 2 * t2.overall) / 3);
      setResult({ t1, t2, writing });
    } catch (err: any) {
      setError(err.message || "Something went wrong while grading.");
    } finally {
      setLoading(false);
    }
  };

  // ── Results view ────────────────────────────────────────────
  if (result) {
    return (
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h2 className="text-2xl font-bold">Writing — Graded</h2>
        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest">Writing Band</p>
          <p className="text-5xl font-black text-blue-700 mt-1">{result.writing.toFixed(1)}</p>
          <p className="text-xs text-gray-500 mt-2">
            Task 1 ({result.t1.overall.toFixed(1)}) + Task 2 ×2 ({result.t2.overall.toFixed(1)}) → weighted
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <TaskResultCard label="Task 1" grade={result.t1} />
          <TaskResultCard label="Task 2 (double weight)" grade={result.t2} />
        </div>
        <button
          onClick={() => onComplete(result.writing)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold hover:bg-blue-700 transition"
        >
          Continue to Speaking →
        </button>
      </div>
    );
  }

  // ── Input view ──────────────────────────────────────────────
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h2 className="text-2xl font-bold">Writing</h2>

      {/* Task 1 */}
      <div className="border rounded-2xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-700">
            Task 1{" "}
            <span className="font-normal text-gray-500">
              ({test.format === "academic" ? test.task1.chartTypeLabel : test.task1.letterTypeLabel} · {test.task1.minWords}+ words)
            </span>
          </p>
          <span className={`text-xs font-mono ${w1 < test.task1.minWords ? "text-amber-600" : "text-green-600"}`}>{w1} words</span>
        </div>
        <p className="whitespace-pre-wrap text-gray-800">{test.task1.prompt}</p>

        {test.format === "academic" ? (
          <Task1Figure figure={test.task1.figure} />
        ) : (
          <div className="rounded-xl bg-gray-50 border border-gray-200 p-4">
            <p className="text-xs font-semibold text-gray-500 mb-1">In your letter you should:</p>
            <ul className="space-y-1">
              {test.task1.bulletPoints.map((b, i) => (
                <li key={i} className="text-sm text-gray-700 flex gap-2">
                  <span className="text-indigo-400">•</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        )}

        <textarea
          rows={8}
          className="w-full border rounded-xl p-3"
          value={task1Answer}
          onChange={(e) => setTask1Answer(e.target.value)}
          disabled={loading}
          placeholder="Write your Task 1 answer here..."
        />
      </div>

      {/* Task 2 */}
      <div className="border rounded-2xl p-5 space-y-3">
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-gray-700">
            Task 2 <span className="font-normal text-gray-500">({test.task2.taskTypeLabel} · {test.task2.minWords}+ words)</span>
          </p>
          <span className={`text-xs font-mono ${w2 < test.task2.minWords ? "text-amber-600" : "text-green-600"}`}>{w2} words</span>
        </div>
        <p className="whitespace-pre-wrap text-gray-800">{test.task2.prompt}</p>
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
        {loading ? "Grading both tasks with DeepSeek..." : "Submit Writing →"}
      </button>
    </div>
  );
}

function TaskResultCard({ label, grade }: { label: string; grade: TaskGrade }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 space-y-2">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-700">{label}</p>
        <span className="text-2xl font-black text-blue-600">{grade.overall.toFixed(1)}</span>
      </div>
      <p className="text-xs text-gray-600">{grade.summary}</p>
      <p className="text-xs text-amber-700">
        <span className="font-semibold">Fix: </span>
        {grade.top_fix}
      </p>
    </div>
  );
}
