import Link from 'next/link';

interface CardProps {
  href: string;
  emoji: string;
  title: string;
  subject: string;
  description: string;
  badge?: string;
  badgeColor?: string;
  meta?: string;
}

export default function Card({
  href,
  emoji,
  title,
  subject,
  description,
  badge,
  badgeColor = 'bg-efe-accent-soft text-efe-accent-ink',
  meta,
}: CardProps) {
  return (
    <Link href={href} className="efe-card efe-card-interactive group overflow-hidden justify-between">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="w-12 h-12 rounded-[14px] bg-efe-accent-soft text-efe-accent-ink inline-flex items-center justify-center text-2xl transition-colors group-hover:bg-efe-accent group-hover:text-white">
            {emoji}
          </span>
          {badge && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>
        <div className="mb-1">
          <span className="text-xs font-bold text-efe-accent-ink uppercase tracking-wider">{subject}</span>
        </div>
        <h3 className="text-lg font-bold text-efe-fg mb-2 group-hover:text-efe-accent transition-colors">{title}</h3>
        <p className="text-sm text-efe-muted leading-relaxed line-clamp-2">{description}</p>
        {meta && <p className="text-xs text-efe-muted/80 mt-3">{meta}</p>}
      </div>
      <div className="px-6 pb-5 pt-2 border-t border-efe-line/60 flex items-center justify-between">
        <span className="text-sm font-semibold text-efe-accent-ink group-hover:text-efe-accent flex items-center gap-1 transition-colors">
          View <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      </div>
    </Link>
  );
}
