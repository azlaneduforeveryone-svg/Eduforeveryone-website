import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        brand: {
          50:  "#f0fdf9",
          100: "#ccfbef",
          200: "#99f6e0",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        ink: {
          DEFAULT: "#0f172a",
          soft: "#334155",
          muted: "#64748b",
        },
        surface: {
          DEFAULT: "#ffffff",
          soft: "#f8fafc",
          muted: "#f1f5f9",
        },
        efe: {
          bg: "var(--efe-bg)",
          surface: "var(--efe-surface)",
          fg: "var(--efe-fg)",
          muted: "var(--efe-muted)",
          line: "var(--efe-line)",
          accent: "var(--efe-accent)",
          "accent-ink": "var(--efe-accent-ink)",
          "accent-soft": "var(--efe-accent-soft)",
          gold: "var(--efe-gold)",
          "gold-soft": "var(--efe-gold-soft)",
          "hero-a": "var(--efe-hero-a)",
          "hero-b": "var(--efe-hero-b)",
          "hero-fg": "var(--efe-hero-fg)",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
