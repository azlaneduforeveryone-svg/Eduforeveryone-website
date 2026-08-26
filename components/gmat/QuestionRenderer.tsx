"use client";
// components/gmat/QuestionRenderer.tsx
// ---------------------------------------------------------------------------
// One renderer per GMAT question type. NO question literals live here — every
// item is passed in (already type-aware-shuffled by lib/gmat/engine.ts).
//
// Also exports pure grading/answered helpers that the SectionRunner and
// GmatResults share, so grading logic is defined once. RC and MSR grade at the
// sub-question level; every other type grades as a single unit.
//
// Accent colour is emerald (distinct from IELTS's indigo) per the build spec.
// ---------------------------------------------------------------------------

import { useState } from "react";
import { DS_OPTIONS } from "@/lib/gmat/types";
import type { GmatQuestion, GmatDifficulty } from "@/lib/gmat/types";

const LETTERS = ["A", "B", "C", "D", "E"] as const;

/* ----------------------------- Answer model -------------------------------
   number                              PS / CR / DS  (option index)
   { a?: number; b?: number }          two-part-analysis
   number[]                            table (per statement) / graphics (per blank)
   Record<string, number>             reading-comprehension (subId -> index)
   Record<string, number|number[]>    multi-source-reasoning (subId -> mcq idx | yn[])
--------------------------------------------------------------------------- */
export type GmatAnswer = unknown;

/* ------------------------------- Grading ---------------------------------- */
/* Returns one {difficulty, correct} entry per gradable unit. RC/MSR expand into
   their sub-questions; all other types yield exactly one entry. */
export function gradeFull(
  q: GmatQuestion,
  answer: GmatAnswer
): { difficulty: GmatDifficulty; correct: boolean }[] {
  switch (q.type) {
    case "problem-solving":
    case "critical-reasoning":
    case "data-sufficiency":
      return [{ difficulty: q.difficulty, correct: answer === q.correct }];

    case "two-part-analysis": {
      const a = answer as { a?: number; b?: number } | undefined;
      return [{ difficulty: q.difficulty, correct: !!a && a.a === q.correctA && a.b === q.correctB }];
    }

    case "table-analysis": {
      const a = (answer as number[]) || [];
      const ok = q.statements.every((s, i) => a[i] === (s.correct ? 0 : 1));
      return [{ difficulty: q.difficulty, correct: ok }];
    }

    case "graphics-interpretation": {
      const a = (answer as number[]) || [];
      const ok = q.blanks.every((b, i) => a[i] === b.correct);
      return [{ difficulty: q.difficulty, correct: ok }];
    }

    case "reading-comprehension": {
      const a = (answer as Record<string, number>) || {};
      return q.questions.map((sub) => ({
        difficulty: q.difficulty,
        correct: a[sub.id] === sub.correct,
      }));
    }

    case "multi-source-reasoning": {
      const a = (answer as Record<string, number | number[]>) || {};
      return q.questions.map((sub) => {
        if (sub.kind === "mcq") {
          return { difficulty: q.difficulty, correct: a[sub.id] === sub.correct };
        }
        const picks = (a[sub.id] as number[]) || [];
        const ok = sub.statements.every((s, i) => picks[i] === (s.correct ? 0 : 1));
        return { difficulty: q.difficulty, correct: ok };
      });
    }
  }
}

/* How many gradable units a question contributes to the section total. */
export function unitCount(q: GmatQuestion): number {
  if (q.type === "reading-comprehension" || q.type === "multi-source-reasoning")
    return q.questions.length;
  return 1;
}

/* Whether the user has supplied any answer (for the palette's answered state). */
export function isAnswered(q: GmatQuestion, answer: GmatAnswer): boolean {
  if (answer === undefined || answer === null) return false;
  switch (q.type) {
    case "two-part-analysis": {
      const a = answer as { a?: number; b?: number };
      return a.a !== undefined && a.b !== undefined;
    }
    case "table-analysis":
      return (answer as number[]).filter((x) => x !== undefined).length === q.statements.length;
    case "graphics-interpretation":
      return (answer as number[]).filter((x) => x !== undefined).length === q.blanks.length;
    case "reading-comprehension":
      return Object.keys(answer as Record<string, number>).length === q.questions.length;
    case "multi-source-reasoning":
      return Object.keys(answer as Record<string, unknown>).length === q.questions.length;
    default:
      return true; // a number index was set
  }
}

/* ------------------------------ UI helpers -------------------------------- */
function OptionButton(props: {
  letter: string;
  text: string;
  chosen: boolean;
  review?: boolean;
  isCorrect?: boolean;
  onClick: () => void;
  explanation?: string;
}) {
  const { letter, text, chosen, review, isCorrect, onClick, explanation } = props;
  let cls = "border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50";
  if (review) {
    if (isCorrect) cls = "border-green-400 bg-green-50 text-green-800";
    else if (chosen) cls = "border-red-400 bg-red-50 text-red-800";
    else cls = "border-gray-200 text-gray-500";
  } else if (chosen) {
    cls = "bg-emerald-100 border-emerald-400 text-emerald-800 font-semibold";
  }
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={review}
      className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all ${cls} ${review ? "cursor-default" : ""}`}
    >
      <span className="font-bold mr-2">{letter}.</span>
      {text}
      {review && isCorrect && <span className="ml-2 text-green-600 font-bold">✓</span>}
      {review && chosen && !isCorrect && <span className="ml-2 text-red-500 font-bold">✗</span>}
      {review && explanation && (
        <span className="block mt-1.5 text-xs text-gray-500 font-normal">{explanation}</span>
      )}
    </button>
  );
}

/* A simple SVG bar / line chart from structured chart data (no chart lib). */
function ChartView({
  kind, labels, values, yLabel,
}: { kind: "bars" | "line" | "scatter"; labels: string[]; values: number[]; yLabel?: string }) {
  const W = 420, H = 200, pad = 34;
  const max = Math.max(...values, 1);
  const innerW = W - pad * 2, innerH = H - pad * 2;
  const x = (i: number) => pad + (innerW * (i + 0.5)) / values.length;
  const y = (v: number) => pad + innerH - (innerH * v) / max;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="chart">
      {/* axes */}
      <line x1={pad} y1={pad} x2={pad} y2={H - pad} stroke="#cbd5e1" />
      <line x1={pad} y1={H - pad} x2={W - pad} y2={H - pad} stroke="#cbd5e1" />
      {yLabel && (
        <text x={6} y={pad - 12} fontSize="9" fill="#64748b">{yLabel}</text>
      )}
      {kind === "bars" &&
        values.map((v, i) => {
          const bw = innerW / values.length * 0.55;
          return (
            <rect key={i} x={x(i) - bw / 2} y={y(v)} width={bw} height={H - pad - y(v)}
              fill="#10b981" rx={2} />
          );
        })}
      {kind !== "bars" && (
        <polyline
          fill="none" stroke="#10b981" strokeWidth={2}
          points={values.map((v, i) => `${x(i)},${y(v)}`).join(" ")}
        />
      )}
      {values.map((v, i) => (
        <g key={`pt-${i}`}>
          {kind !== "bars" && <circle cx={x(i)} cy={y(v)} r={3} fill="#059669" />}
          <text x={x(i)} y={y(v) - 6} fontSize="9" fill="#334155" textAnchor="middle">{v}</text>
          <text x={x(i)} y={H - pad + 14} fontSize="9" fill="#64748b" textAnchor="middle">{labels[i]}</text>
        </g>
      ))}
    </svg>
  );
}

/* ------------------------------- Renderer --------------------------------- */
interface Props {
  question: GmatQuestion;
  answer: GmatAnswer;
  onChange: (a: GmatAnswer) => void;
  review?: boolean;
}

export default function QuestionRenderer({ question: q, answer, onChange, review }: Props) {
  switch (q.type) {
    /* ---- Problem Solving & Critical Reasoning ---- */
    case "problem-solving":
    case "critical-reasoning": {
      const chosen = answer as number | undefined;
      return (
        <div>
          {q.passage && (
            <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 border border-gray-200 rounded-xl p-4 mb-4 whitespace-pre-line">
              {q.passage}
            </p>
          )}
          <p className="font-semibold text-gray-900 leading-snug mb-4 text-sm">{q.stem}</p>
          <div className="space-y-2">
            {q.options.map((opt, i) => (
              <OptionButton
                key={i}
                letter={LETTERS[i]}
                text={opt}
                chosen={chosen === i}
                review={review}
                isCorrect={i === q.correct}
                explanation={review ? q.optionExplanations?.[i] : undefined}
                onClick={() => onChange(i)}
              />
            ))}
          </div>
        </div>
      );
    }

    /* ---- Data Sufficiency (FIXED option order — never shuffled) ---- */
    case "data-sufficiency": {
      const chosen = answer as number | undefined;
      return (
        <div>
          <p className="font-semibold text-gray-900 leading-snug mb-3 text-sm">{q.stem}</p>
          <div className="space-y-1.5 mb-4">
            <p className="text-sm text-gray-700"><span className="font-bold">(1)</span> {q.statements[0]}</p>
            <p className="text-sm text-gray-700"><span className="font-bold">(2)</span> {q.statements[1]}</p>
          </div>
          <div className="space-y-2">
            {DS_OPTIONS.map((opt, i) => (
              <OptionButton
                key={i}
                letter={LETTERS[i]}
                text={opt}
                chosen={chosen === i}
                review={review}
                isCorrect={i === q.correct}
                explanation={review ? q.optionExplanations?.[i] : undefined}
                onClick={() => onChange(i)}
              />
            ))}
          </div>
        </div>
      );
    }

    /* ---- Reading Comprehension ---- */
    case "reading-comprehension": {
      const a = (answer as Record<string, number>) || {};
      return (
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="lg:w-1/2 bg-gray-50 border border-gray-200 rounded-xl p-4 lg:max-h-[70vh] lg:overflow-y-auto">
            {q.passage.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-gray-700 leading-[1.8] mb-3 last:mb-0">{para}</p>
            ))}
          </div>
          <div className="lg:w-1/2 space-y-5">
            {q.questions.map((sub, si) => (
              <div key={sub.id}>
                <p className="font-semibold text-gray-900 text-sm mb-2">
                  <span className="text-emerald-600 font-bold mr-1">{si + 1}.</span>{sub.stem}
                </p>
                <div className="space-y-2">
                  {sub.options.map((opt, i) => (
                    <OptionButton
                      key={i}
                      letter={LETTERS[i]}
                      text={opt}
                      chosen={a[sub.id] === i}
                      review={review}
                      isCorrect={i === sub.correct}
                      explanation={review ? sub.optionExplanations?.[i] : undefined}
                      onClick={() => onChange({ ...a, [sub.id]: i })}
                    />
                  ))}
                </div>
                {review && (
                  <p className="text-xs text-gray-500 mt-2 bg-gray-50 border border-gray-100 rounded-lg p-2">{sub.explanation}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }

    /* ---- Two-Part Analysis ---- */
    case "two-part-analysis": {
      const a = (answer as { a?: number; b?: number }) || {};
      return (
        <div>
          <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3">{q.intro}</p>
          <p className="font-semibold text-gray-900 text-sm mb-4">{q.prompt}</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-3 py-2 text-center font-bold text-gray-600 w-24">{q.colHeaders[0]}</th>
                  <th className="px-3 py-2 text-center font-bold text-gray-600 w-24">{q.colHeaders[1]}</th>
                  <th className="px-3 py-2 text-left font-bold text-gray-600">Option</th>
                </tr>
              </thead>
              <tbody>
                {q.rows.map((row, i) => {
                  const aCorrect = review && i === q.correctA;
                  const bCorrect = review && i === q.correctB;
                  return (
                    <tr key={i} className="border-t border-gray-100">
                      <td className="px-3 py-2 text-center">
                        <input type="radio" name={`${q.id}-A`} checked={a.a === i} disabled={review}
                          onChange={() => onChange({ ...a, a: i })} className="accent-emerald-600 w-4 h-4" />
                        {aCorrect && <span className="ml-1 text-green-600 font-bold">✓</span>}
                      </td>
                      <td className="px-3 py-2 text-center">
                        <input type="radio" name={`${q.id}-B`} checked={a.b === i} disabled={review}
                          onChange={() => onChange({ ...a, b: i })} className="accent-emerald-600 w-4 h-4" />
                        {bCorrect && <span className="ml-1 text-green-600 font-bold">✓</span>}
                      </td>
                      <td className="px-3 py-2 text-gray-700">{row}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
    }

    /* ---- Table Analysis ---- */
    case "table-analysis":
      return <TableAnalysisView q={q} answer={answer} onChange={onChange} review={review} />;

    /* ---- Graphics Interpretation ---- */
    case "graphics-interpretation": {
      const a = (answer as number[]) || [];
      return (
        <div>
          <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3">{q.intro}</p>
          <div className="bg-white border border-gray-200 rounded-xl p-3 mb-4">
            <ChartView {...q.chart} />
          </div>
          <div className="space-y-3">
            {q.blanks.map((b, bi) => {
              const picked = a[bi];
              const right = review && picked === b.correct;
              const wrong = review && picked !== undefined && picked !== b.correct;
              return (
                <div key={bi} className="text-sm text-gray-800 flex flex-wrap items-center gap-2">
                  <span>{b.prefix}</span>
                  <select
                    value={picked ?? ""}
                    disabled={review}
                    onChange={(e) => {
                      const next = [...a];
                      next[bi] = Number(e.target.value);
                      onChange(next);
                    }}
                    className={`border rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-emerald-400 ${
                      right ? "border-green-400 bg-green-50" : wrong ? "border-red-400 bg-red-50" : "border-gray-300"
                    }`}
                  >
                    <option value="" disabled>Select…</option>
                    {b.options.map((opt, oi) => (
                      <option key={oi} value={oi}>{opt}</option>
                    ))}
                  </select>
                  {b.suffix && <span>{b.suffix}</span>}
                  {review && <span className="text-xs text-gray-500">(correct: {b.options[b.correct]})</span>}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    /* ---- Multi-Source Reasoning ---- */
    case "multi-source-reasoning":
      return <MsrView q={q} answer={answer} onChange={onChange} review={review} />;
  }
}

/* ---- Table Analysis (own component: sortable header state) ---- */
function TableAnalysisView({
  q, answer, onChange, review,
}: { q: Extract<GmatQuestion, { type: "table-analysis" }>; answer: GmatAnswer; onChange: (a: GmatAnswer) => void; review?: boolean }) {
  const [sortCol, setSortCol] = useState<number | null>(null);
  const [asc, setAsc] = useState(true);
  const a = (answer as number[]) || [];

  const sortedRows = sortCol === null
    ? q.table.rows
    : [...q.table.rows].sort((r1, r2) => {
        const v1 = r1[sortCol], v2 = r2[sortCol];
        if (typeof v1 === "number" && typeof v2 === "number") return asc ? v1 - v2 : v2 - v1;
        return asc ? String(v1).localeCompare(String(v2)) : String(v2).localeCompare(String(v1));
      });

  const clickHeader = (ci: number) => {
    if (sortCol === ci) setAsc((v) => !v);
    else { setSortCol(ci); setAsc(true); }
  };

  return (
    <div>
      <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 border border-gray-200 rounded-xl p-4 mb-3">{q.intro}</p>
      <div className="overflow-x-auto mb-4">
        <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              {q.table.columns.map((c, ci) => (
                <th key={ci} onClick={() => clickHeader(ci)}
                  className="px-3 py-2 text-left font-bold text-gray-600 cursor-pointer hover:bg-gray-100 select-none">
                  {c} {sortCol === ci ? (asc ? "▲" : "▼") : "⇅"}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, ri) => (
              <tr key={ri} className="border-t border-gray-100">
                {row.map((cell, ci) => <td key={ci} className="px-3 py-2 text-gray-700">{cell}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="space-y-3">
        {q.statements.map((s, si) => {
          const picked = a[si];
          const correctIdx = s.correct ? 0 : 1;
          return (
            <div key={si} className="bg-white border border-gray-200 rounded-xl p-3">
              <p className="text-sm text-gray-800 mb-2">{s.text}</p>
              <div className="flex gap-2">
                {q.answerLabels.map((label, li) => {
                  const chosen = picked === li;
                  let cls = "border-gray-200 text-gray-600 hover:border-emerald-300";
                  if (review) {
                    if (li === correctIdx) cls = "border-green-400 bg-green-50 text-green-700";
                    else if (chosen) cls = "border-red-400 bg-red-50 text-red-700";
                  } else if (chosen) cls = "bg-emerald-100 border-emerald-400 text-emerald-800";
                  return (
                    <button key={li} type="button" disabled={review}
                      onClick={() => { const next = [...a]; next[si] = li; onChange(next); }}
                      className={`px-4 py-1.5 rounded-lg border text-xs font-semibold transition-all ${cls}`}>
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ---- Multi-Source Reasoning (own component: tab state) ---- */
function MsrView({
  q, answer, onChange, review,
}: { q: Extract<GmatQuestion, { type: "multi-source-reasoning" }>; answer: GmatAnswer; onChange: (a: GmatAnswer) => void; review?: boolean }) {
  const [tab, setTab] = useState(0);
  const a = (answer as Record<string, number | number[]>) || {};

  return (
    <div className="flex flex-col lg:flex-row gap-4">
      {/* sources */}
      <div className="lg:w-1/2">
        <div className="flex gap-1 mb-2 flex-wrap">
          {q.sources.map((s, i) => (
            <button key={i} type="button" onClick={() => setTab(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                tab === i ? "bg-emerald-600 text-white border-emerald-600" : "bg-white text-gray-600 border-gray-200 hover:border-emerald-300"
              }`}>
              {s.title}
            </button>
          ))}
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-700 leading-relaxed whitespace-pre-line lg:max-h-[60vh] lg:overflow-y-auto">
          {q.sources[tab].body}
        </div>
      </div>
      {/* sub-questions */}
      <div className="lg:w-1/2 space-y-5">
        {q.questions.map((sub, si) => (
          <div key={sub.id}>
            <p className="font-semibold text-gray-900 text-sm mb-2">
              <span className="text-emerald-600 font-bold mr-1">{si + 1}.</span>{sub.stem}
            </p>
            {sub.kind === "mcq" ? (
              <div className="space-y-2">
                {sub.options.map((opt, i) => (
                  <OptionButton key={i} letter={LETTERS[i]} text={opt}
                    chosen={a[sub.id] === i} review={review} isCorrect={i === sub.correct}
                    onClick={() => onChange({ ...a, [sub.id]: i })} />
                ))}
                {review && <p className="text-xs text-gray-500 mt-2 bg-gray-50 border border-gray-100 rounded-lg p-2">{sub.explanation}</p>}
              </div>
            ) : (
              <div className="space-y-2">
                {sub.statements.map((s, sti) => {
                  const picks = (a[sub.id] as number[]) || [];
                  const correctIdx = s.correct ? 0 : 1;
                  return (
                    <div key={sti} className="bg-white border border-gray-200 rounded-xl p-2.5">
                      <p className="text-xs text-gray-800 mb-1.5">{s.text}</p>
                      <div className="flex gap-2">
                        {sub.answerLabels.map((label, li) => {
                          const chosen = picks[sti] === li;
                          let cls = "border-gray-200 text-gray-600 hover:border-emerald-300";
                          if (review) {
                            if (li === correctIdx) cls = "border-green-400 bg-green-50 text-green-700";
                            else if (chosen) cls = "border-red-400 bg-red-50 text-red-700";
                          } else if (chosen) cls = "bg-emerald-100 border-emerald-400 text-emerald-800";
                          return (
                            <button key={li} type="button" disabled={review}
                              onClick={() => { const next = [...picks]; next[sti] = li; onChange({ ...a, [sub.id]: next }); }}
                              className={`px-3 py-1 rounded-lg border text-xs font-semibold transition-all ${cls}`}>
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
                {review && <p className="text-xs text-gray-500 mt-2 bg-gray-50 border border-gray-100 rounded-lg p-2">{sub.explanation}</p>}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
