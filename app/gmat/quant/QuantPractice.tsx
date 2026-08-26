"use client";
import PracticeRunner from "@/components/gmat/PracticeRunner";
import { QUANT_BANK } from "@/lib/gmat/quant";

export default function QuantPractice() {
  return <PracticeRunner bank={QUANT_BANK} />;
}
