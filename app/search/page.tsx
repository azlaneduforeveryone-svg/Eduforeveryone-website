import type { Metadata } from "next";
import SearchPage from "./SearchPage";

export const metadata: Metadata = {
  title: "Search — EduForEveryone",
  description: "Search all courses, notes, quizzes, tools, games and Islamic content on EduForEveryone.",
};

export default function Page() {
  return <SearchPage />;
}
