import React from "react";
import Link from "next/link";

export interface CardProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
}

export default function Card({
  href,
  children,
  className = "",
  interactive = false,
}: CardProps) {
  if (href) {
    return (
      <Link
        href={href}
        className={`efe-card efe-card-interactive group ${className}`.trim()}
      >
        {children}
      </Link>
    );
  }
  return (
    <div
      className={`efe-card ${interactive ? "efe-card-interactive" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

