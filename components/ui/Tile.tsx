import React from "react";
import Link from "next/link";
import { HomeIcon, type HomeIconName } from "@/components/home/HomeIcons";

export interface TileProps {
  href: string;
  icon?: HomeIconName;
  emoji?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: string;
  className?: string;
}

export default function Tile({
  href,
  icon,
  emoji,
  title,
  subtitle,
  badge,
  className = "",
}: TileProps) {
  return (
    <Link href={href} className={`efe-tile ${className}`.trim()}>
      {badge && <span className="efe-tile-badge">{badge}</span>}
      <span className="efe-tile-icon" aria-hidden="true">
        {icon ? (
          <HomeIcon name={icon} />
        ) : (
          <span className="text-2xl leading-none">{emoji}</span>
        )}
      </span>
      <span className="efe-tile-label">{title}</span>
      {subtitle && (
        <span className="text-xs text-efe-muted leading-snug">{subtitle}</span>
      )}
    </Link>
  );
}
