import type { Metadata } from "next";
import { TASK1_MODEL_ANSWERS } from "@/lib/ielts/ielts-writing-model-answers";
import JsonLd, { breadcrumbLd } from "@/components/JsonLd";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "IELTS Academic Writing Task 1 Model Answers & Guide",
  description: "20 Band 8+ model answers for IELTS Academic Writing Task 1 bar charts, line graphs, pie charts, tables, process diagrams, and maps with expert breakdown.",
  alternates: { canonical: "https://eduforeveryone.com/ielts/writing/task-1" },
  openGraph: {
    title: "IELTS Academic Writing Task 1 Model Answers | EduForEveryone",
    description: "Explore 20 Band 8+ model answers for IELTS Academic Task 1 graphs, charts, and process diagrams.",
    url: "https://eduforeveryone.com/ielts/writing/task-1",
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
          { name: "Academic Task 1", path: "/ielts/writing/task-1" },
        ])}
      />
      <main className="efe-page">
        <PageHeader
          eyebrow="Academic Writing"
          title="IELTS Academic Writing Task 1 Model Answers"
          description="High-scoring model answers and comprehensive strategies for reporting line graphs, bar charts, pie charts, tables, diagrams, and maps."
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <Card className="p-6 sm:p-8 mb-10 leading-relaxed text-efe-muted space-y-4">
            <h2 className="text-2xl font-bold text-efe-fg font-display">Mastering IELTS Academic Writing Task 1</h2>
            <p>
              In IELTS Academic Writing Task 1, candidates are presented with a visual graphic—such as a line graph, bar chart, pie chart, data table, process diagram, or geographical map—and asked to summarize the information in their own words. You are expected to select and report the main features and make meaningful comparisons where relevant, without offering personal commentary or external explanations.
            </p>
            <p>
              You should allocate <strong className="text-efe-fg">20 minutes</strong> to Task 1 and write at least <strong className="text-efe-fg">150 words</strong>. Writing fewer than 150 words incurs a penalty under Task Achievement, while writing around 160 to 180 words ensures adequate depth without cutting into your Task 2 essay timing.
            </p>
            <h3 className="text-xl font-semibold text-efe-fg pt-2">The Four Assessment Criteria</h3>
            <p>
              Examiners evaluate your response using four equally weighted band descriptors:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong className="text-efe-fg">Task Achievement:</strong> Evaluates how effectively you identify overall trends, highlight key data points, and provide a clear, high-level overview.
              </li>
              <li>
                <strong className="text-efe-fg">Coherence &amp; Cohesion:</strong> Measures how logically your response is structured into distinct paragraphs (Introduction, Overview, and Body Paragraphs) and how naturally you connect sentences using linking phrases.
              </li>
              <li>
                <strong className="text-efe-fg">Lexical Resource:</strong> Assesses the range and precision of your vocabulary, including data description verbs (e.g., <em>plateaued</em>, <em>fluctuated</em>), proportions, and synonyms.
              </li>
              <li>
                <strong className="text-efe-fg">Grammatical Range &amp; Accuracy:</strong> Rewards correct grammar, varied sentence structures (passive voice, complex sentences), and accurate use of tenses.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-efe-fg pt-2">Common Pitfalls to Avoid</h3>
            <p>
              The most frequent mistake in Task 1 is forgetting to include a clear overview sentence. Without an overview, Task Achievement cannot exceed Band 5. Another common error is listing every single number in the graphic rather than grouping and comparing key data trends. Lastly, avoid offering opinions or reasons why a trend occurred; restrict your essay strictly to what the visual graphic displays.
            </p>
          </Card>

          <section>
            <SectionHeader
              title="Model Answer Gallery"
              rightSlot={
                <span className="text-sm font-semibold text-efe-muted bg-efe-surface border border-efe-line px-3 py-1 rounded-full">{TASK1_MODEL_ANSWERS.length} Samples</span>
              }
            />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {TASK1_MODEL_ANSWERS.map((m) => (
                <Card
                  key={m.id}
                  href={`/ielts/writing/task-1/${m.slug}`}
                  className="p-5 justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full border efe-skill-writing">
                        {m.id}
                      </span>
                      <span className="text-xs font-semibold text-efe-muted group-hover:text-efe-accent-ink transition-colors">
                        Band 8+
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-efe-fg group-hover:text-efe-accent transition-colors leading-snug">
                      {m.topic}
                    </h3>
                  </div>
                  <div className="mt-4 pt-3 border-t border-efe-line flex items-center justify-between text-xs font-semibold text-efe-accent-ink">
                    <span>View Model Answer</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
