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
  badgeColor = 'bg-teal-100 text-teal-700',
  meta,
}: CardProps) {
  return (
    <Link href={href} className="group block bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl">{emoji}</span>
          {badge && (
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor}`}>
              {badge}
            </span>
          )}
        </div>
        <div className="mb-1">
          <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">{subject}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{description}</p>
        {meta && <p className="text-xs text-gray-400 mt-3">{meta}</p>}
      </div>
      <div className="px-6 pb-4">
        <span className="text-sm font-semibold text-teal-600 flex items-center gap-1">View <span>→</span></span>
      </div>
    </Link>
  );
}
