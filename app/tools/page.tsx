import type { Metadata } from "next";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Free Calculators — Scientific, Financial (TVM/NPV/IRR) & More",
  description: "Free online tools: scientific calculator, financial calculator (TVM, NPV, IRR, bonds), reconciliations (bank, supplier, customer, intercompany), number-to-words in 8 languages.",
  alternates: { canonical: "https://eduforeveryone.com/tools" },
};

const tools = [
  { href:"/tools/simple-calculator", emoji:"🔢", title:"Simple Calculator", description:"Basic arithmetic calculator with full calculation history. Perfect for everyday maths.", tags:["Addition","Subtraction","History"], badge:"" },
  { href:"/tools/scientific-calculator", emoji:"🔬", title:"Scientific Calculator", description:"Trig, logarithms, powers, roots, factorial, memory & more. DEG/RAD/GRAD modes + 2ND key.", tags:["Trig","Logarithms","Memory"], badge:"Intermediate" },
  { href:"/tools/cfa-calculator", emoji:"📊", title:"Financial Calculator", description:"Time Value of Money calculator — compute N, I/Y, PV, PMT, FV instantly. BA II Plus style.", tags:["TVM","Finance","CFA"], badge:"Advanced" },
  { href:"/tools/finance-tools/reconciliation/bank", emoji:"🏦", title:"Reconciliations", description:"Bank, supplier, customer, and intercompany reconciliations. Match both sides and get a formula-driven Excel statement back instantly.", tags:["Bank","Supplier","Intercompany"], badge:"New" },
  { href:"/tools/number-to-words", emoji:"🔡", title:"Number to Words", description:"Convert any number to words in 8 languages including Arabic, Hindi, Urdu. Supports 8 currencies.", tags:["Arabic","Hindi","Currency"], badge:"Popular" },
];

export default function ToolsPage() {
  return (
    <div className="efe-page">
      <PageHeader
        eyebrow="Free Tools"
        title="Educational Tools"
        description="Free tools to help students learn, practice, and get things done. No sign-up. No cost."
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {tools.map(tool => (
            <Card key={tool.href} href={tool.href} className="p-6 justify-between">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="w-12 h-12 rounded-[14px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl group-hover:bg-efe-accent group-hover:text-white transition-colors">
                    {tool.emoji}
                  </span>
                  {tool.badge && (
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                      tool.badge === "New" ? "bg-efe-gold-soft text-efe-gold" : "bg-efe-accent-soft text-efe-accent-ink"
                    }`}>
                      {tool.badge}
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-bold text-efe-fg mb-2 group-hover:text-efe-accent transition-colors">{tool.title}</h2>
                <p className="text-efe-muted text-sm leading-relaxed mb-4">{tool.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {tool.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-0.5 bg-efe-bg text-efe-muted rounded-md border border-efe-line">{tag}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
