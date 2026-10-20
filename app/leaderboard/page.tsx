import type { Metadata } from "next";
import LeaderboardPage from "./LeaderboardPage";

export const metadata: Metadata = {
  title: "Community Leaderboard — Top Learners & Points | EduForEveryone",
  description:
    "See top learners, points earned, and study achievements across quizzes and learning modules on EduForEveryone.",
  alternates: {
    canonical: "https://eduforeveryone.com/leaderboard",
  },
  openGraph: {
    title: "Community Leaderboard — Top Learners & Points | EduForEveryone",
    description:
      "See top learners, points earned, and study achievements across quizzes and learning modules on EduForEveryone.",
    url: "https://eduforeveryone.com/leaderboard",
    siteName: "EduForEveryone",
    type: "website",
  },
};

export default function Page() {
  return <LeaderboardPage />;
}