"use client";
import PracticeRunner from "@/components/gmat/PracticeRunner";
import { DATA_INSIGHTS_BANK } from "@/lib/gmat/data-insights";

export default function DataInsightsPractice() {
  return <PracticeRunner bank={DATA_INSIGHTS_BANK} />;
}
