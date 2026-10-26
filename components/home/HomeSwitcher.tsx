"use client";

import { useEffect, useState } from "react";
import type { HomeSection } from "@/lib/homeSections";
import { HomeIcon } from "./HomeIcons";

interface HomeSwitcherProps {
  sections: HomeSection[];
}

export default function HomeSwitcher({ sections }: HomeSwitcherProps) {
  const ids = sections.map((s) => s.id);
  const [active, setActive] = useState(ids[0] || "");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateActive = () => {
      // Header is 64px, switcher is ~55px, threshold ~130px
      const threshold = 140;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top <= threshold) {
            current = id;
          }
        }
      }
      if (current) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();

    return () => window.removeEventListener("scroll", updateActive);
  }, [ids]);

  const scrollTo = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setActive(id);
      if (window.history && window.history.pushState) {
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

  return (
    <nav className="home-switcher home-gutter" aria-label="Sections">
      <div className="home-wrap home-switcher-row">
        {sections.map((s) => {
          const isCurrent = active === s.id;
          return (
            <a
              key={s.id}
              className="home-chip"
              href={`#${s.id}`}
              onClick={(e) => scrollTo(s.id, e)}
              aria-current={isCurrent ? "true" : undefined}
            >
              <HomeIcon name={s.chipIcon} size={15} aria-hidden={true} />
              <span>{s.chip}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
