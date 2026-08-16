import type { Metadata } from "next";
import Link from "next/link";
import { GT_TASK1_MODEL_ANSWERS } from "@/lib/ielts/ielts-gt-task1-model-answers";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "IELTS General Training Task 1 Model Letters & Guide",
  description: "20 Band 8+ model letters for IELTS General Training Task 1 covering formal, semi-formal, and informal scenarios with tone and vocabulary guides.",
  alternates: { canonical: "https://eduforeveryone.com/ielts/writing/gt-task-1" },
  openGraph: {
    title: "IELTS General Training Task 1 Model Letters | EduForEveryone",
    description: "Explore 20 high-scoring model letters for IELTS General Training Task 1 with letter structures and tone tips.",
    url: "https://eduforeveryone.com/ielts/writing/gt-task-1",
    siteName: "EduForEveryone",
    images: [{ url: "/Main_Logo.jpg", width: 800, height: 800, alt: "EduForEveryone" }],
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Home", path: "/" },
          { name: "IELTS", path: "/ielts" },
          { name: "Writing", path: "/ielts/writing" },
          { name: "GT Task 1 Letters", path: "/ielts/writing/gt-task-1" },
        ])}
      />
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <header className="mb-8 text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              General Training
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              IELTS General Training Task 1 Model Letters
            </h1>
            <p className="mt-2 text-lg text-gray-600 max-w-3xl">
              Sample responses and clear guidance for formal, semi-formal, and personal letter-writing tasks in IELTS General Training.
            </p>
          </header>

          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm leading-relaxed text-gray-700 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Mastering IELTS General Training Task 1 Letters</h2>
            <p>
              In IELTS General Training Writing Task 1, candidates must write a letter in response to a practical, real-world situation. Prompts include writing a complaint to a company, requesting information from an institution, explaining a situation to a landlord, or writing a personal letter to a friend. Every prompt contains three specific bullet points that you must address.
            </p>
            <p>
              You should allocate <strong>20 minutes</strong> to Task 1 and write at least <strong>150 words</strong>. Aiming for 160 to 180 words ensures you expand sufficiently on all three bullet points without losing valuable time needed for Task 2.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 pt-2">The Four Assessment Criteria</h3>
            <p>
              Your letter is evaluated across four key band descriptors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Task Achievement:</strong> Evaluates whether you have covered all three bullet points in equal depth, stated a clear purpose for writing, and maintained a consistent tone throughout.
              </li>
              <li>
                <strong>Coherence &amp; Cohesion:</strong> Assesses how logically your letter flows, including proper paragraph breakdown (Greeting, Purpose, Bullet Point 1, Bullet Point 2/3, Sign-off) and cohesive transitions.
              </li>
              <li>
                <strong>Lexical Resource:</strong> Rewards tone-appropriate vocabulary. Formal letters demand professional terminology, whereas informal letters require natural, conversational idioms and expressions.
              </li>
              <li>
                <strong>Grammatical Range &amp; Accuracy:</strong> Measures sentence structure variety, correct tenses, modal verbs, and punctuation accuracy.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 pt-2">Frequent Mistakes to Avoid</h3>
            <p>
              The single biggest cause of lost marks in GT Task 1 is tone inconsistency—such as mixing formal phrases (&quot;I am writing to inform you&quot;) with informal greetings (&quot;Hey buddy&quot;). Another common pitfall is ignoring or skimming over one of the three prompt bullet points. Lastly, ensure you use the correct sign-off: <em>Yours faithfully</em> when the recipient&apos;s name is unknown, and <em>Yours sincerely</em> when writing to a named individual.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Letter Sample Collection
              </h2>
              <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                {GT_TASK1_MODEL_ANSWERS.length} Letters
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {GT_TASK1_MODEL_ANSWERS.map((m) => (
                <Link
                  key={m.id}
                  href={`/ielts/writing/gt-task-1/${m.slug}`}
                  className="group block bg-white border border-gray-200 rounded-xl p-5 hover:border-teal-500 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-full">
                        {m.id}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 group-hover:text-teal-600 transition-colors">
                        Band 8+
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 group-hover:text-teal-700 transition-colors leading-snug">
                      {m.topic}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-semibold text-teal-600">
                    <span>Read Model Letter</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
