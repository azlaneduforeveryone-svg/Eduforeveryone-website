import type { Metadata } from "next";
import ProfilePage from "./ProfilePage";

export const metadata: Metadata = {
  title: "My Profile & Learning Dashboard | EduForEveryone",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <ProfilePage />;
}