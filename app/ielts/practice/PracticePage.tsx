"use client";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const SKILLS = [
  {
    icon: "🎧", title: "Listening", href: "/ielts/listening",
    skillClass: "efe-skill-listening",
    time: "30 min", questions: "40 questions", sections: "4 sections",
    desc: "Hear recordings of monologues and conversations by native English speakers, then answer questions.",
    types: ["Form completion", "Multiple choice", "Note completion", "Map labelling"],
    tip: "You hear each recording once only — so focus and take notes!",
  },
  {
    icon: "📖", title: "Reading", href: "/ielts/reading",
    skillClass: "efe-skill-reading",
    time: "60 min", questions: "40 questions", sections: "3 passages",
    desc: "Read three long texts from academic journals, books, and newspapers, then answer a variety of questions.",
    types: ["True / False / Not Given", "Multiple choice", "Sentence completion", "Matching headings"],
    tip: "Skim first, then scan for answers — never read word by word.",
  },
  {
    icon: "✍️", title: "Writing", href: "/ielts/writing",
    skillClass: "efe-skill-writing",
    time: "60 min", questions: "2 tasks", sections: "Task 1 + Task 2",
    desc: "Describe a graph or chart (Task 1), then write a formal essay arguing a position (Task 2).",
    types: ["Describe visual data", "Discuss both views", "Problem & solution", "Agree / Disagree"],
    tip: "Task 2 carries double the marks — spend 40 minutes on it.",
  },
  {
    icon: "🗣️", title: "Speaking", href: "/ielts/speaking",
    skillClass: "efe-skill-speaking",
    time: "11–14 min", questions: "3 parts", sections: "Interview format",
    desc: "A face-to-face interview with a certified examiner covering personal topics, a cue card speech, and a discussion.",
    types: ["Part 1: Introduction", "Part 2: Cue card monologue", "Part 3: In-depth discussion"],
    tip: "Extend every answer with reasons and examples — never give one-word replies.",
  },
];

export default function PracticePage() {
  return (
    <div className="efe-page">
      <PageHeader
        eyebrow="Free IELTS Preparation"
        title="Choose Your Practice Area"
        description="Select any skill to start practising. All tests are completely free — no signup required."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        {/* 4 Skill cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {SKILLS.map(skill => (
            <Card key={skill.title} className="p-6 justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className={`w-12 h-12 rounded-[14px] border inline-flex items-center justify-center text-2xl ${skill.skillClass}`}>
                      {skill.icon}
                    </span>
                    <div>
                      <h2 className="text-xl font-bold text-efe-fg font-display">{skill.title}</h2>
                      <div className="flex gap-2 mt-1 items-center">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${skill.skillClass}`}>{skill.time}</span>
                        <span className="text-xs text-efe-muted">{skill.questions}</span>
                      </div>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${skill.skillClass}`}>{skill.sections}</span>
                </div>
                <p className="text-efe-muted text-sm leading-relaxed mb-4">{skill.desc}</p>
                <div className="bg-efe-bg border border-efe-line rounded-xl p-3 mb-4">
                  <p className="text-xs font-bold text-efe-muted uppercase tracking-wide mb-2">Question Types</p>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.types.map(t => (
                      <span key={t} className="text-xs bg-efe-surface border border-efe-line text-efe-fg px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-2 mb-5">
                  <span className="flex-shrink-0">💡</span>
                  <p className="text-xs text-efe-muted italic">{skill.tip}</p>
                </div>
              </div>
              <Button href={skill.href} variant="primary" className="w-full">
                Start {skill.title} Practice →
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/ielts" className="text-efe-accent-ink text-sm font-semibold hover:underline">← Back to IELTS Hub</Link>
        </div>
      </div>
    </div>
  );
}
