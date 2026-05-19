import type { Metadata } from "next";
import PracticePage from "./PracticePage";
export const metadata: Metadata = {
  title: "IELTS Practice — Choose Your Skill | EduForEveryone",
  description: "Free IELTS practice for all 4 skills — Listening, Reading, Writing and Speaking.",
};
export default function Page() { return <PracticePage />; }