import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "onHero" | "ghostHero";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
  className?: string;
}

const VARIANT_CLASS: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "efe-btn-primary",
  secondary: "efe-btn-secondary",
  onHero: "efe-btn-on-hero",
  ghostHero: "efe-btn-ghost-hero",
};

const SIZE_CLASS: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "efe-btn-sm",
  md: "",
  lg: "efe-btn-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  type = "button",
  ...rest
}: ButtonProps) {
  const cls = `efe-btn ${VARIANT_CLASS[variant]} ${SIZE_CLASS[size]} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  );
}

