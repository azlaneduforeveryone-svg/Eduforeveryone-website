import type { Metadata } from "next";
import AdminPanel from "./AdminPanel";

export const metadata: Metadata = {
  title: "Admin Dashboard | EduForEveryone",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return <AdminPanel />;
}