import React from "react";
import Link from "next/link";

export interface BreadcrumbItem {
  label: React.ReactNode;
  href?: string;
}

export interface PageHeaderProps {
  title: React.ReactNode;
  eyebrow?: React.ReactNode;
  arabicTitle?: string;
  description?: React.ReactNode;
  breadcrumbs?: BreadcrumbItem[];
  meta?: React.ReactNode;
  actions?: React.ReactNode;
  calm?: boolean;
  className?: string;
}

export default function PageHeader({
  title,
  eyebrow,
  arabicTitle,
  description,
  breadcrumbs,
  meta,
  actions,
  calm = false,
  className = "",
}: PageHeaderProps) {
  return (
    <section className={`efe-page-header ${className}`.trim()}>
      {!calm && <div className="efe-page-header-pattern" aria-hidden="true" />}
      <div className="efe-page-header-inner">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="efe-page-header-breadcrumbs" aria-label="Breadcrumb">
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                {i > 0 && <span aria-hidden="true">›</span>}
                {b.href ? (
                  <Link href={b.href}>{b.label}</Link>
                ) : (
                  <span className="font-medium text-white">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="flex-1 min-w-0">
            {eyebrow && (
              <div className="efe-page-header-eyebrow">
                <span className="efe-page-header-dot" aria-hidden="true" />
                <span>{eyebrow}</span>
              </div>
            )}
            <h1>{title}</h1>
            {arabicTitle && (
              <p className="efe-page-header-arabic" dir="rtl">
                {arabicTitle}
              </p>
            )}
            {description && (
              <div className="efe-page-header-desc">{description}</div>
            )}
            {meta && <div className="mt-4">{meta}</div>}
          </div>

          {actions && (
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

