"use client";

// AI tutor box for O Level Accounting topic pages.
// Signed-in users only; the server enforces a daily limit.
// The conversation lives only in this page session (nothing is stored).

import { useEffect, useRef, useState, type FormEvent } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { getAppCheckHeader } from "@/lib/appCheck";
import NotesContent from "@/components/courses/NotesContent";

type Turn = { role: "user" | "assistant"; content: string };

const MAX_LEN = 500;

const STARTERS = [
  "Explain this topic in simple words",
  "Give me a short worked example",
  "What mistakes do students make here?",
];

export default function AiTutor({
  topic,
  topicTitle,
  onNeedSignIn,
}: {
  topic: string;
  topicTitle: string;
  onNeedSignIn: () => void;
}) {
  const { user, loading } = useAuth();
  const [turns, setTurns] = useState<Turn[]>([]);
  const [question, setQuestion] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [remaining, setRemaining] = useState<number | null>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // New topic, new conversation
  useEffect(() => {
    setTurns([]);
    setError(null);
  }, [topic]);

  useEffect(() => {
    if (turns.length) endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [turns, busy]);

  const ask = async (text: string) => {
    const q = text.trim();
    if (!q || busy) return;
    if (!user) {
      onNeedSignIn();
      return;
    }
    setBusy(true);
    setError(null);
    const history = turns.slice(-8);
    setTurns((t) => [...t, { role: "user", content: q }]);
    setQuestion("");
    try {
      const [idToken, appCheckHeaders] = await Promise.all([
        user.getIdToken(),
        getAppCheckHeader(),
      ]);
      const res = await fetch("/api/accounting/tutor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
          ...appCheckHeaders,
        },
        body: JSON.stringify({ topic, question: q, history }),
      });
      const data = (await res.json().catch(() => ({}))) as { answer?: string; error?: string; remaining?: number };
      if (typeof data.remaining === "number") setRemaining(data.remaining);
      if (!res.ok || !data.answer) {
        setError(data.error || "The tutor could not answer just now. Please try again.");
        if (res.status === 401) onNeedSignIn();
        // Take the unanswered question back off the list and put it back in the box
        setTurns((t) => t.slice(0, -1));
        if (res.status !== 429) setQuestion(q);
        return;
      }
      setTurns((t) => [...t, { role: "assistant", content: data.answer as string }]);
    } catch {
      setError("Network problem. Check your connection and try again.");
      setTurns((t) => t.slice(0, -1));
      setQuestion(q);
    } finally {
      setBusy(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void ask(question);
  };

  if (loading) {
    return <div className="text-sm text-efe-muted">Loading…</div>;
  }

  if (!user) {
    return (
      <div className="rounded-xl border border-efe-line bg-efe-bg p-5 space-y-3">
        <p className="text-sm text-efe-fg">
          The AI tutor can explain any part of <strong>{topicTitle}</strong> in simple words and give you extra
          examples. It is free, but you need to sign in so we can keep it running for everyone.
        </p>
        <button type="button" className="efe-btn efe-btn-primary" onClick={onNeedSignIn}>
          Sign in to ask a question
        </button>
      </div>
    );
  }

  const limitReached = remaining === 0;

  return (
    <div className="space-y-4">
      {turns.length === 0 && (
        <div className="flex flex-wrap gap-2">
          {STARTERS.map((s) => (
            <button
              key={s}
              type="button"
              disabled={busy || limitReached}
              onClick={() => void ask(s)}
              className="text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full border border-efe-line bg-efe-bg text-efe-fg hover:border-efe-accent disabled:opacity-50"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {turns.length > 0 && (
        <div className="space-y-3" aria-live="polite">
          {turns.map((t, i) =>
            t.role === "user" ? (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] rounded-2xl rounded-br-sm bg-efe-accent-soft text-efe-fg px-4 py-2.5 text-sm whitespace-pre-line">
                  {t.content}
                </div>
              </div>
            ) : (
              <div key={i} className="rounded-2xl rounded-bl-sm border border-efe-line bg-efe-bg px-4 py-3">
                <div className="text-[11px] font-bold uppercase tracking-wider text-efe-accent-ink mb-2">
                  AI tutor
                </div>
                <NotesContent notes={t.content} />
              </div>
            )
          )}
          {busy && (
            <div className="rounded-2xl border border-efe-line bg-efe-bg px-4 py-3 text-sm text-efe-muted">
              The tutor is thinking…
            </div>
          )}
          <div ref={endRef} />
        </div>
      )}

      {error && (
        <div role="alert" className="rounded-xl border border-red-300 bg-red-50 text-red-800 px-4 py-2.5 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={onSubmit} className="space-y-2">
        <label htmlFor={`tutor-q-${topic}`} className="sr-only">
          Your question
        </label>
        <textarea
          id={`tutor-q-${topic}`}
          value={question}
          onChange={(e) => setQuestion(e.target.value.slice(0, MAX_LEN))}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void ask(question);
            }
          }}
          rows={3}
          disabled={busy || limitReached}
          placeholder={
            limitReached
              ? "You have used today's questions. Come back tomorrow."
              : "Type your question, for example: Why is drawings not an expense?"
          }
          className="w-full rounded-xl border border-efe-line bg-efe-bg px-4 py-3 text-sm text-efe-fg placeholder:text-efe-muted focus:outline-none focus:ring-2 focus:ring-efe-accent disabled:opacity-60"
        />
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs text-efe-muted">
            {question.length}/{MAX_LEN}
            {remaining !== null && <> · {remaining} question{remaining === 1 ? "" : "s"} left today</>}
          </span>
          <div className="flex gap-2">
            {turns.length > 0 && (
              <button
                type="button"
                className="efe-btn efe-btn-secondary efe-btn-sm"
                onClick={() => {
                  setTurns([]);
                  setError(null);
                }}
                disabled={busy}
              >
                New chat
              </button>
            )}
            <button
              type="submit"
              className="efe-btn efe-btn-primary efe-btn-sm"
              disabled={busy || limitReached || question.trim().length < 3}
            >
              {busy ? "Asking…" : "Ask"}
            </button>
          </div>
        </div>
      </form>

      <p className="text-[11px] text-efe-muted">
        AI answers can be wrong. Always check against the notes above. Up to 10 questions a day. Do not share personal
        information.
      </p>
    </div>
  );
}
