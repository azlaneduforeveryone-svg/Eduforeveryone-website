import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Educational Calculators & Tools | EduForEveryone",
  description: "Free interactive educational and academic calculators.",
  alternates: {
    canonical: "https://eduforeveryone.com/calculators",
  },
};

export default function Page() {
  redirect("/tools");
}