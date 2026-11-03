import React from "react";
import Link from "next/link";

export interface ChipProps {
  active?: boolean;
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Chip({
  active = false,
  onClick,
  href,
  children,
  className = "",
  type = "button",
}: ChipProps) {
  const cls = `efe-chip ${active ? "efe-chip-active" : ""} ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        aria-current={active ? "true" : undefined}
        className={cls}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-pressed={active ? "true" : "false"}
      className={cls}
    >
      {children}
    </button>
  );
}

