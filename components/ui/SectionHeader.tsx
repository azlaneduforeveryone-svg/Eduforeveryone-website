import React from "react";
import Link from "next/link";

export interface SectionHeaderProps {
  eyebrow?: React.ReactNode;
  arabicMark?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  badge?: React.ReactNode;
  action?: {
    label: React.ReactNode;
    href: string;
  };
  rightSlot?: React.ReactNode;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  arabicMark,
  title,
  description,
  badge,
  action,
  rightSlot,
  className = "",
}: SectionHeaderProps) {
  return (
    <header className={`efe-section-head ${className}`.trim()}>
      <div>
        {(eyebrow || arabicMark) && (
          <div className="efe-section-kicker">
            {arabicMark && (
              <span className="efe-section-kicker-ar">{arabicMark}</span>
            )}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        )}
        <div className="flex items-center gap-3 flex-wrap">
          <h2>{title}</h2>
          {badge}
        </div>
        {description && <p className="efe-section-sub">{description}</p>}
      </div>

      {action && (
        <Link
          href={action.href}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-efe-accent-ink hover:text-efe-accent transition-colors"
        >
          <span>{action.label}</span>
          <span aria-hidden="true">→</span>
        </Link>
      )}
      {rightSlot}
    </header>
  );
}

