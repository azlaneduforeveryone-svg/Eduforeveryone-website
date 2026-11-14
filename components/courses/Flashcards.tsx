"use client";

// Flashcard deck for O Level Accounting topics.
// No external dependencies. Session-only: nothing is saved, so it never
// touches Firestore or topic progress.
//
// Keyboard: Space or Enter flips, Left/Right arrows move, 1 = Again, 2 = Got it.

import { useCallback, useEffect, useMemo, useState, type KeyboardEvent } from "react";

export interface Flashcard {
  front: string;
  back: string;
  tag?: string;
}

function shuffled(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function Flashcards({ cards }: { cards: Flashcard[] }) {
  const [order, setOrder] = useState<number[]>(() => cards.map((_, i) => i));
  const [pos, setPos] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState<Set<number>>(new Set());
  const [again, setAgain] = useState<Set<number>>(new Set());
  const [finished, setFinished] = useState(false);

  // Reset if the topic (and so the cards) changes
  useEffect(() => {
    setOrder(cards.map((_, i) => i));
    setPos(0);
    setFlipped(false);
    setKnown(new Set());
    setAgain(new Set());
    setFinished(false);
  }, [cards]);

  const current = cards[order[pos]];
  const total = order.length;

  const go = useCallback(
    (delta: number) => {
      setFlipped(false);
      setPos((p) => {
        const next = p + delta;
        if (next >= total) {
          setFinished(true);
          return p;
        }
        return Math.max(0, next);
      });
    },
    [total]
  );

  const mark = useCallback(
    (gotIt: boolean) => {
      const id = order[pos];
      setKnown((s) => {
        const n = new Set(s);
        if (gotIt) n.add(id);
        else n.delete(id);
        return n;
      });
      setAgain((s) => {
        const n = new Set(s);
        if (gotIt) n.delete(id);
        else n.add(id);
        return n;
      });
      go(1);
    },
    [order, pos, go]
  );

  const restart = (ids: number[], shuffle = false) => {
    const base = shuffle ? shuffled(ids.length).map((i) => ids[i]) : ids;
    setOrder(base);
    setPos(0);
    setFlipped(false);
    setFinished(false);
    if (ids.length === cards.length) {
      setKnown(new Set());
      setAgain(new Set());
    }
  };

  const onKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (finished) return;
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      setFlipped((f) => !f);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (flipped && e.key === "1") {
      mark(false);
    } else if (flipped && e.key === "2") {
      mark(true);
    }
  };

  const againIds = useMemo(() => order.filter((i) => again.has(i)), [order, again]);
  const progressPct = total ? Math.round(((pos + (finished ? 1 : 0)) / total) * 100) : 0;

  if (!cards.length) return null;

  if (finished) {
    const reviewIds = cards.map((_, i) => i).filter((i) => again.has(i));
    return (
      <div className="rounded-2xl border border-efe-line bg-efe-bg p-6 text-center space-y-4">
        <div className="text-3xl" aria-hidden>
          {reviewIds.length === 0 ? "🎉" : "🔁"}
        </div>
        <h3 className="text-lg font-bold font-display text-efe-fg">Deck finished</h3>
        <p className="text-sm text-efe-muted">
          Got it: <strong className="text-efe-fg">{known.size}</strong> · To review:{" "}
          <strong className="text-efe-fg">{reviewIds.length}</strong> · Total cards: {cards.length}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {reviewIds.length > 0 && (
            <button type="button" className="efe-btn efe-btn-primary" onClick={() => restart(reviewIds)}>
              Review the {reviewIds.length} card{reviewIds.length === 1 ? "" : "s"} again
            </button>
          )}
          <button
            type="button"
            className="efe-btn efe-btn-secondary"
            onClick={() => restart(cards.map((_, i) => i), true)}
          >
            Start over (shuffled)
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4" onKeyDown={onKey}>
      {/* Progress */}
      <div className="flex items-center justify-between text-xs font-semibold text-efe-muted">
        <span>
          Card {pos + 1} of {total}
          {againIds.length > 0 && <> · {againIds.length} to review</>}
        </span>
        <button
          type="button"
          className="underline underline-offset-2 hover:text-efe-fg"
          onClick={() => restart(order, true)}
        >
          Shuffle
        </button>
      </div>
      <div className="h-1.5 rounded-full bg-efe-line overflow-hidden" aria-hidden>
        <div className="h-full bg-efe-accent transition-all" style={{ width: `${progressPct}%` }} />
      </div>

      {/* Card */}
      <button
        type="button"
        onClick={() => setFlipped((f) => !f)}
        aria-label={flipped ? "Answer shown. Click to see the question." : "Question shown. Click to see the answer."}
        className={`w-full min-h-[220px] sm:min-h-[240px] rounded-2xl border-2 p-6 sm:p-8 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-efe-accent ${
          flipped ? "border-efe-gold bg-efe-gold-soft" : "border-efe-line bg-efe-bg hover:border-efe-accent"
        }`}
      >
        <div className="flex items-center justify-between gap-2 mb-4">
          <span
            className={`text-[11px] font-bold uppercase tracking-wider ${
              flipped ? "text-efe-fg" : "text-efe-accent-ink"
            }`}
          >
            {flipped ? "Answer" : "Question"}
          </span>
          {current.tag && (
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-efe-surface border border-efe-line text-efe-muted">
              {current.tag}
            </span>
          )}
        </div>
        <p
          className={`whitespace-pre-line text-efe-fg leading-relaxed ${
            flipped ? "text-base sm:text-lg" : "text-lg sm:text-xl font-semibold"
          }`}
        >
          {flipped ? current.back : current.front}
        </p>
        {!flipped && <p className="mt-6 text-xs text-efe-muted">Think of your answer, then tap the card to check.</p>}
      </button>

      {/* Controls */}
      {flipped ? (
        <div className="grid grid-cols-2 gap-3">
          <button type="button" className="efe-btn efe-btn-secondary" onClick={() => mark(false)}>
            ↺ Again
          </button>
          <button type="button" className="efe-btn efe-btn-primary" onClick={() => mark(true)}>
            ✓ Got it
          </button>
        </div>
      ) : (
        <div className="flex items-center justify-between gap-3">
          <button
            type="button"
            className="efe-btn efe-btn-secondary efe-btn-sm"
            onClick={() => go(-1)}
            disabled={pos === 0}
          >
            ‹ Previous
          </button>
          <button type="button" className="efe-btn efe-btn-primary" onClick={() => setFlipped(true)}>
            Show answer
          </button>
          <button type="button" className="efe-btn efe-btn-secondary efe-btn-sm" onClick={() => go(1)}>
            Skip ›
          </button>
        </div>
      )}
      <p className="hidden sm:block text-[11px] text-efe-muted text-center">
        Keyboard: Space to flip · ← → to move · 1 Again · 2 Got it
      </p>
    </div>
  );
}
