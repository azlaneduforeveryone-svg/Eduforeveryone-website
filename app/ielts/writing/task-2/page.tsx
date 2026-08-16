import type { Metadata } from "next";
import Link from "next/link";
import { TASK2_MODEL_ANSWERS } from "@/lib/ielts/ielts-task2-model-answers";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "IELTS Writing Task 2 Model Essays & Essay Band Guides",
  description: "20 Band 8+ model essays for IELTS Writing Task 2 covering opinion essays, discussion prompts, cause-and-solution, and advantages/disadvantages.",
  alternates: { canonical: "https://eduforeveryone.com/ielts/writing/task-2" },
  openGraph: {
    title: "IELTS Writing Task 2 Model Essays | EduForEveryone",
    description: "Read 20 high-scoring Band 8+ model essays for IELTS Writing Task 2 with outline advice and grading tips.",
    url: "https://eduforeveryone.com/ielts/writing/task-2",
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
          { name: "Task 2 Essays", path: "/ielts/writing/task-2" },
        ])}
      />
      <main className="min-h-screen bg-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <header className="mb-8 text-center sm:text-left">
            <span className="inline-block px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Task 2 Essays
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              IELTS Writing Task 2 Model Essays
            </h1>
            <p className="mt-2 text-lg text-gray-600 max-w-3xl">
              High-scoring sample essays, proven paragraph structures, and expert advice to help you reach Band 7, 8, or 9 in Task 2.
            </p>
          </header>

          <section className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm leading-relaxed text-gray-700 space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">Mastering IELTS Writing Task 2 Essays</h2>
            <p>
              IELTS Writing Task 2 is a formal essay task that carries two-thirds of your total writing score. Candidates are presented with a point of view, argument, or problem and asked to compose a well-structured response. Common essay types include Agree/Disagree, Discuss Both Views, Advantages &amp; Disadvantages, Problem &amp; Solution, and Direct Questions.
            </p>
            <p>
              You should spend <strong>40 minutes</strong> on Task 2 and write at least <strong>250 words</strong> (aiming for 270 to 300 words). Writing under 250 words reduces your score on Task Response, while spending more than 40 minutes risks leaving Task 1 incomplete.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 pt-2">The Four Band Descriptors</h3>
            <p>
              Your essay is assessed against four criteria, each contributing 25% to your Task 2 score:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Task Response:</strong> Measures how completely you answer every part of the prompt, whether your position remains clear from introduction to conclusion, and how well you support your main ideas.
              </li>
              <li>
                <strong>Coherence &amp; Cohesion:</strong> Checks the logical progression of your argument, paragraph division (Introduction, Body Paragraph 1, Body Paragraph 2, Conclusion), and appropriate use of linking devices.
              </li>
              <li>
                <strong>Lexical Resource:</strong> Evaluates your vocabulary range, precise word choices, correct collocations, and ability to paraphrase without awkward phrasing.
              </li>
              <li>
                <strong>Grammatical Range &amp; Accuracy:</strong> Assesses grammatical variety—such as complex clauses, conditionals, and passive forms—along with sentence precision and punctuation.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-gray-900 pt-2">Key Mistakes to Eliminate</h3>
            <p>
              A major mistake is addressing only half of a prompt (for instance, discussing advantages while ignoring disadvantages). Another common error is writing a vague introduction that fails to state a clear thesis. Candidates also suffer when using memorized &quot;template&quot; sentences that feel unnatural or irrelevant to the prompt. Always spend 3–5 minutes planning your outline before writing.
            </p>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Essay Library
              </h2>
              <span className="text-sm font-semibold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
                {TASK2_MODEL_ANSWERS.length} Essays
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TASK2_MODEL_ANSWERS.map((m) => (
                <Link
                  key={m.id}
                  href={`/ielts/writing/task-2/${m.slug}`}
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
                    <span>Read Model Essay</span>
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
