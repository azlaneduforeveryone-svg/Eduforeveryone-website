"use client";

// A notes diagram. Tap it to open a large view that students can pan around,
// so labels are readable on small phones. Esc or the Close button closes it.

import { useEffect, useRef, useState } from "react";

export default function ZoomableFigure({ src, caption }: { src: string; caption: string }) {
  const [open, setOpen] = useState(false);
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    scroller.current?.scrollTo(0, 0);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <figure className="my-2 -mx-5 sm:mx-0">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="block w-full cursor-zoom-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-efe-accent rounded-xl"
        aria-label={`Enlarge diagram: ${caption}`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={caption}
          loading="lazy"
          decoding="async"
          className="w-full h-auto bg-white border-y sm:border border-efe-line sm:rounded-xl"
        />
      </button>
      <figcaption className="mt-2 px-5 sm:px-0 text-sm text-efe-muted text-center">
        {caption} <span className="whitespace-nowrap font-semibold text-efe-accent-ink">(tap to enlarge)</span>
      </figcaption>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={caption}
          className="fixed inset-0 z-[60] flex flex-col bg-neutral-900"
        >
          <div className="flex items-center gap-3 px-4 py-3 bg-white">
            <p className="flex-1 text-sm sm:text-base font-semibold text-efe-fg">{caption}</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="efe-btn efe-btn-primary min-h-[44px]"
              autoFocus
            >
              Close
            </button>
          </div>
          <p className="sm:hidden text-center text-xs text-white/80 py-1.5">Drag to move around, or turn your phone sideways.</p>
          <div ref={scroller} className="flex-1 overflow-auto overscroll-contain" onClick={(e) => e.target === e.currentTarget && setOpen(false)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={caption} className="block bg-white mx-auto my-4 w-[max(100%,680px)] max-w-none sm:w-[min(1000px,95vw)] h-auto" />
          </div>
        </div>
      )}
    </figure>
  );
}
