"use client";

import { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import SectionHeader from "@/components/ui/SectionHeader";
import HowItWorks, { type HowItWorksStep } from "@/components/courses/HowItWorks";
import { useAuth } from "@/contexts/AuthContext";
import { ALL_O_LEVEL_BIOLOGY_TOPICS } from "@/lib/courses/biologySyllabus";
import {
  type TopicProgress,
  computeTopicStatus,
  getAllLocalProgress,
  getAllFirestoreProgress,
} from "@/lib/courses/accountingProgress";
import type { BiologyHubSection, BiologyHubTopic } from "./page";

const STEPS: HowItWorksStep[] = [
  { title: "Start here", text: "See what you need to know and learn the key words for the topic." },
  { title: "Watch", text: "A short video lesson on the topic.", soon: true },
  { title: "Read the notes", text: "Clear notes with labelled diagrams, common mistakes and exam tips." },
  { title: "Explore in 3D", text: "Turn and tap 3D models of organs such as the heart, on selected topics.", soon: true },
  { title: "Mind map", text: "The whole topic on one page, to see how the ideas link." },
  { title: "Flashcards", text: "Test your memory of key words, structures and processes." },
  { title: "Practice MCQs", text: "Exam-style questions. Every answer explains why it is right or wrong." },
  { title: "Ask the AI tutor", text: "Still stuck? Sign in and ask a question about the topic." },
];

interface BiologyHubClientProps {
  sections: BiologyHubSection[];
}

export default function BiologyHubClient({ sections }: BiologyHubClientProps) {
  const { user, loading: authLoading } = useAuth();
  const [progressMap, setProgressMap] = useState<Record<string, TopicProgress>>({});
  const [loadingProgress, setLoadingProgress] = useState(true);

  const allTopics = useMemo(
    () => sections.flatMap((s) => s.topics),
    [sections]
  );

  useEffect(() => {
    if (authLoading) return;
    let active = true;

    async function load() {
      setLoadingProgress(true);
      if (user?.uid) {
        const remote = await getAllFirestoreProgress(user.uid, ALL_O_LEVEL_BIOLOGY_TOPICS);
        if (active) {
          setProgressMap(remote);
          setLoadingProgress(false);
        }
      } else {
        const local = getAllLocalProgress(ALL_O_LEVEL_BIOLOGY_TOPICS);
        if (active) {
          setProgressMap(local);
          setLoadingProgress(false);
        }
      }
    }

    load();
    return () => {
      active = false;
    };
  }, [user?.uid, authLoading]);

  const { masteredCount, studiedCount } = useMemo(() => {
    let mastered = 0;
    let studied = 0;
    for (const t of allTopics) {
      const st = computeTopicStatus(
        progressMap[t.topicId],
        Boolean(t.videoId),
        t.hasNotes,
        t.hasQuiz
      );
      if (st === "mastered") mastered++;
      else if (st === "studied") studied++;
    }
    return { masteredCount: mastered, studiedCount: studied };
  }, [allTopics, progressMap]);

  const totalTopics = allTopics.length;
  const progressPercent = totalTopics > 0 ? Math.round((masteredCount / totalTopics) * 100) : 0;

  return (
    <div className="efe-page min-h-screen flex flex-col">
      {/* Hero */}
      <PageHeader
        eyebrow="Cambridge O Level Biology (5090)"
        title="Biology"
        description="Learn O Level Biology (5090) topic by topic for exams in 2026, 2027 and 2028 — from cells and enzymes to genetics, ecology, and biotechnology. Free, structured, and built for exam mastery."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Biology" },
        ]}
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#o-level-5090"
              className="efe-btn efe-btn-on-hero"
            >
              Start O Level Biology
            </a>
          </div>
        }
      />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12 flex-1 w-full space-y-14">
        {/* How it works (not clickable on purpose; one real start link) */}
        <HowItWorks
          id="how-it-works-heading"
          title="How each topic works"
          intro={`Every one of the ${totalTopics} topics follows the same steps, in this order. Topics are being added section by section.`}
          steps={STEPS}
          startHref="/courses/biology/o-level/1-1"
          startLabel="Start with topic 1.1"
        />

        {/* Progress Bar */}
        <section id="o-level-5090" className="scroll-mt-20" aria-label="Course progress">
          <div className="efe-card p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
              <div>
                <h2 className="text-lg font-bold font-display text-efe-fg">
                  O Level Biology (5090) Progress
                </h2>
                <p className="text-sm text-efe-muted">
                  Syllabus structure is ready for exams in 2026, 2027 and 2028. Notes, models, and practice questions are being added.
                </p>
              </div>
              <div className="text-right">
                <span className="text-base font-bold text-efe-accent-ink">
                  {masteredCount} of {totalTopics} topics mastered
                </span>
                {studiedCount > 0 && (
                  <span className="block text-xs text-efe-muted">
                    {studiedCount} studied (quiz to go)
                  </span>
                )}
              </div>
            </div>

            <div
              className="w-full h-3.5 bg-efe-bg rounded-full overflow-hidden border border-efe-line"
              role="progressbar"
              aria-valuenow={masteredCount}
              aria-valuemin={0}
              aria-valuemax={totalTopics}
              aria-label={`${masteredCount} of ${totalTopics} topics mastered`}
            >
              <div
                className="h-full bg-efe-accent transition-all duration-300 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap items-center gap-5 text-xs text-efe-muted">
              <span className="inline-flex items-center gap-2">
                <ProgressCircle status="not-started" />
                <span>Not started</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <ProgressCircle status="studied" />
                <span>Studied</span>
              </span>
              <span className="inline-flex items-center gap-2">
                <ProgressCircle status="mastered" />
                <span>Mastered (quiz passed 5/5)</span>
              </span>
              {loadingProgress && (
                <span className="text-efe-muted ml-auto">Syncing progress…</span>
              )}
            </div>
          </div>
        </section>

        {/* 19 Syllabus Sections */}
        <section aria-labelledby="syllabus-sections-heading" className="space-y-10">
          <SectionHeader
            eyebrow="2026–2028 Syllabus"
            title={<span id="syllabus-sections-heading">O Level Biology Syllabus Topics</span>}
            description={`${totalTopics} topics across ${sections.length} sections, built for exams in 2026, 2027 and 2028.`}
          />

          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.number} className="efe-card p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-efe-line">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-efe-accent-ink">
                      Section {section.number}
                    </span>
                    <h3 className="text-xl font-bold font-display text-efe-fg mt-0.5">
                      {section.number}. {section.title}
                    </h3>
                    <p className="text-sm text-efe-muted mt-1">{section.description}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-efe-bg border border-efe-line text-efe-muted self-start sm:self-center whitespace-nowrap">
                    {section.topics.length} {section.topics.length === 1 ? "topic" : "topics"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.topics.map((topic) => {
                    const rawStatus = computeTopicStatus(
                      progressMap[topic.topicId],
                      Boolean(topic.videoId),
                      topic.hasNotes,
                      topic.hasQuiz
                    );
                    const circleStatus: "not-started" | "studied" | "mastered" =
                      rawStatus === "mastered"
                        ? "mastered"
                        : rawStatus === "studied"
                        ? "studied"
                        : "not-started";

                    return (
                      <TopicRowCard
                        key={topic.topicId}
                        topic={topic}
                        circleStatus={circleStatus}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer Disclaimer */}
      <aside className="border-t border-efe-line bg-white/70 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-xs text-efe-muted leading-relaxed text-center">
            EduForEveryone is independent and is not affiliated with or endorsed by Cambridge University Press &amp; Assessment.
          </p>
        </div>
      </aside>
    </div>
  );
}

function TopicRowCard({
  topic,
  circleStatus,
}: {
  topic: BiologyHubTopic;
  circleStatus: "not-started" | "studied" | "mastered";
}) {
  const statusLabel =
    circleStatus === "mastered"
      ? "Mastered"
      : circleStatus === "studied"
      ? "Studied"
      : "Not started";

  return (
    <Link
      href={`/courses/biology/o-level/${topic.slug}`}
      className="group flex items-center justify-between gap-3 p-4 rounded-xl border border-efe-line bg-efe-surface hover:border-efe-accent hover:shadow-sm transition-all"
    >
      <div className="flex items-center gap-3.5 min-w-0">
        <ProgressCircle status={circleStatus} />
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-efe-accent-soft text-efe-accent-ink">
              {topic.topic}
            </span>
            <span className="text-xs text-efe-muted">{statusLabel}</span>
            {!topic.hasNotes && (
              <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-efe-bg border border-efe-line text-efe-muted">
                Coming soon
              </span>
            )}
          </div>
          <h4 className="font-semibold text-sm sm:text-base text-efe-fg group-hover:text-efe-accent-ink transition-colors truncate mt-1">
            {topic.topicTitle}
          </h4>
        </div>
      </div>
      <span
        aria-hidden="true"
        className="text-efe-muted group-hover:text-efe-accent group-hover:translate-x-0.5 transition-all text-sm font-bold flex-shrink-0"
      >
        →
      </span>
    </Link>
  );
}

function ProgressCircle({
  status,
}: {
  status: "not-started" | "studied" | "mastered";
}) {
  if (status === "mastered") {
    return (
      <span
        title="Mastered"
        aria-label="Mastered"
        className="w-6 h-6 rounded-full bg-efe-accent text-white flex items-center justify-center flex-shrink-0 shadow-sm"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    );
  }

  if (status === "studied") {
    return (
      <span
        title="Studied (video + notes done)"
        aria-label="Studied"
        className="w-6 h-6 rounded-full border-2 border-efe-accent bg-efe-accent-soft flex items-center justify-center flex-shrink-0"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-efe-accent" />
      </span>
    );
  }

  return (
    <span
      title="Not started"
      aria-label="Not started"
      className="w-6 h-6 rounded-full border-2 border-efe-line bg-white flex-shrink-0"
    />
  );
}
