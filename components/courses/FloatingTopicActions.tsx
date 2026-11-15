"use client";

// Floating buttons on course topic pages, bottom right:
//   "Ask AI tutor" jumps to the tutor section (only if the page has one)
//   "Back to top" scrolls to the top
// They appear once the student has scrolled down a little.

import { useEffect, useState } from "react";

export default function FloatingTopicActions({ tutorTargetId }: { tutorTargetId?: string }) {
  const [visible, setVisible] = useState(false);
  const [hasTutor, setHasTutor] = useState(false);
  const [tutorInView, setTutorInView] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const target = tutorTargetId ? document.getElementById(tutorTargetId) : null;
    setHasTutor(Boolean(target));
    let io: IntersectionObserver | undefined;
    if (target && "IntersectionObserver" in window) {
      io = new IntersectionObserver(([e]) => setTutorInView(e.isIntersecting), { threshold: 0.15 });
      io.observe(target);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, [tutorTargetId]);

  const smooth = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

  const goToTutor = () => {
    const el = tutorTargetId ? document.getElementById(tutorTargetId) : null;
    if (!el) return;
    el.scrollIntoView({ behavior: smooth(), block: "start" });
    const input = el.querySelector<HTMLElement>("textarea, input[type='text']");
    if (input) setTimeout(() => input.focus({ preventScroll: true }), 600);
  };

  return (
    <div
      className={`fixed right-4 z-40 flex flex-col items-end gap-3 transition-all duration-200 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}
      aria-hidden={!visible}
    >
      {hasTutor && !tutorInView && (
        <button
          type="button"
          onClick={goToTutor}
          tabIndex={visible ? 0 : -1}
          className="flex items-center gap-2 h-12 pl-4 pr-5 rounded-full bg-efe-accent text-white font-bold text-base shadow-lg hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-efe-accent"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 5h16v11H9l-5 4V5z" strokeLinejoin="round" />
            <path d="M8 9.5h8M8 12.5h5" strokeLinecap="round" />
          </svg>
          Ask AI tutor
        </button>
      )}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: smooth() })}
        tabIndex={visible ? 0 : -1}
        aria-label="Back to top"
        title="Back to top"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-efe-line text-efe-fg shadow-lg hover:bg-efe-accent-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-efe-accent"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M4.5 12.5 10 7l5.5 5.5" />
        </svg>
      </button>
    </div>
  );
}
