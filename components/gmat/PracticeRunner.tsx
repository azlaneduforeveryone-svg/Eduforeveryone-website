"use client";
// components/gmat/PracticeRunner.tsx
// ---------------------------------------------------------------------------
// Shared practice runner for a single GMAT section. Samples 10 unseen,
// already-shuffled questions from the static bank via the engine (no-repeat
// rotation), runs the SectionRunner, then shows GmatResults and writes the
// attempt to history (localStorage always; Firestore when logged in).
// Used by QuantPractice / VerbalPractice / DataInsightsPractice — none of them
// contain any question literals.
// ---------------------------------------------------------------------------

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import SectionRunner from "./SectionRunner";
import type { SectionRunResult } from "./SectionRunner";
import GmatResults from "./GmatResults";
import { getBank } from "@/lib/gmat/form";
import { sampleSection, estimateTotal } from "@/lib/gmat/engine";
import { saveGmatResult } from "@/lib/firebaseDB";
import type { GmatQuestion, GmatSection } from "@/lib/gmat/types";

const PRACTICE_SIZE = 10;
const PRACTICE_MINUTES = 22; // ~ real-exam ratio for 10 questions

interface Props { section: GmatSection; }

export default function PracticeRunner({ section }: Props) {
  const { user } = useAuth();
  const bank = getBank(section);
  const [phase, setPhase] = useState<"loading" | "test" | "result">("loading");
  const [questions, setQuestions] = useState<GmatQuestion[]>([]);
  const [result, setResult] = useState<SectionRunResult | null>(null);

  const start = useCallback(() => {
    setQuestions(sampleSection(bank, PRACTICE_SIZE));
    setResult(null);
    setPhase("test");
  }, [bank]);

  useEffect(() => { start(); }, [start]);

  const handleFinish = useCallback((r: SectionRunResult) => {
    setResult(r);
    setPhase("result");
    saveGmatResult(
      {
        formId: `practice-${section}`,
        sections: [r.score],
        estimatedTotal: estimateTotal([r.score.estimatedSectionScore]),
        completedAt: Date.now(),
      },
      user?.uid
    );
  }, [section, user?.uid]);

  if (phase === "loading") {
    return <div className="flex items-center justify-center min-h-[50vh] text-gray-400 text-sm">Loading questions…</div>;
  }

  if (phase === "result" && result) {
    return (
      <GmatResults
        results={[result]}
        onRetry={start}
        retryLabel="Next 10 Questions"
        homeHref="/gmat"
        homeLabel="← GMAT Hub"
      />
    );
  }

  return (
    <div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/gmat" className="hover:text-emerald-600 transition-colors">GMAT</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">{bank.name} — Practice</span>
        </div>
      </div>
      <SectionRunner
        section={section}
        sectionName={`${bank.name} — Practice (${PRACTICE_SIZE} questions)`}
        questions={questions}
        minutes={PRACTICE_MINUTES}
        editsAllowed={3}
        onFinish={handleFinish}
        allowUntimed
      />
    </div>
  );
}
