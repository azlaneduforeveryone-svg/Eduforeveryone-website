"use client";
import PracticeRunner from "@/components/gmat/PracticeRunner";
import { VERBAL_BANK } from "@/lib/gmat/verbal";

export default function VerbalPractice() {
  return <PracticeRunner bank={VERBAL_BANK} />;
}
