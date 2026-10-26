import React from "react";

export type HomeIconName =
  | "book-open"
  | "palette"
  | "book-marked"
  | "book"
  | "hand-heart"
  | "circle-help"
  | "languages"
  | "headphones"
  | "book-text"
  | "pen-line"
  | "mic"
  | "timer"
  | "sparkles"
  | "message-square-quote"
  | "trending-up"
  | "compass"
  | "sigma"
  | "quote"
  | "chart-line"
  | "puzzle"
  | "divide"
  | "swords"
  | "landmark"
  | "handshake"
  | "users"
  | "network"
  | "calculator"
  | "banknote"
  | "hash"
  | "graduation-cap"
  | "gamepad-2"
  | "arrow-right"
  | "search";

interface HomeIconProps {
  name: HomeIconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
}

export function HomeIcon({
  name,
  size = 20,
  strokeWidth = 2,
  className,
  "aria-hidden": ariaHidden = true,
}: HomeIconProps) {
  let content: React.ReactNode = null;

  switch (name) {
    case "arrow-right":
      content = (
        <>
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </>
      );
      break;
    case "search":
      content = (
        <>
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </>
      );
      break;
    case "book-open":
      content = (
        <>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </>
      );
      break;
    case "palette":
      content = (
        <>
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </>
      );
      break;
    case "book-marked":
      content = (
        <>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M10 2v10l3-2.5 3 2.5V2" />
        </>
      );
      break;
    case "book":
      content = (
        <>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </>
      );
      break;
    case "hand-heart":
      content = (
        <>
          <path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16" />
          <path d="m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9" />
          <path d="m2 15 6 6" />
          <path d="M19.5 8.5c.7-.7 1.5-1.5 1.5-2.5A2.5 2.5 0 0 0 18.5 3.5c-.8 0-1.5.4-2 1-.5-.6-1.2-1-2-1A2.5 2.5 0 0 0 12 6c0 1 .8 1.8 1.5 2.5L16 11l3.5-2.5z" />
        </>
      );
      break;
    case "circle-help":
      content = (
        <>
          <circle cx="12" cy="12" r="10" />
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
          <path d="M12 17h.01" />
        </>
      );
      break;
    case "languages":
      content = (
        <>
          <path d="m5 8 6 6" />
          <path d="m4 14 6-6 2-3" />
          <path d="M2 5h12" />
          <path d="M7 2h1" />
          <path d="m22 22-5-10-5 10" />
          <path d="M14 18h6" />
        </>
      );
      break;
    case "headphones":
      content = (
        <>
          <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        </>
      );
      break;
    case "book-text":
      content = (
        <>
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M8 7h8" />
          <path d="M8 11h8" />
          <path d="M8 15h5" />
        </>
      );
      break;
    case "pen-line":
      content = (
        <>
          <path d="M12 20h9" />
          <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
          <path d="m15 5 3 3" />
        </>
      );
      break;
    case "mic":
      content = (
        <>
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" x2="12" y1="19" y2="22" />
        </>
      );
      break;
    case "timer":
      content = (
        <>
          <line x1="10" x2="14" y1="2" y2="2" />
          <line x1="12" x2="15" y1="14" y2="11" />
          <circle cx="12" cy="14" r="8" />
        </>
      );
      break;
    case "sparkles":
      content = (
        <>
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
        </>
      );
      break;
    case "message-square-quote":
      content = (
        <>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 12a2 2 0 0 0 2-2V8H8" />
          <path d="M14 12a2 2 0 0 0 2-2V8h-2" />
        </>
      );
      break;
    case "trending-up":
      content = (
        <>
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </>
      );
      break;
    case "compass":
      content = (
        <>
          <circle cx="12" cy="12" r="10" />
          <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
        </>
      );
      break;
    case "sigma":
      content = (
        <>
          <path d="M18 7V4H6l6 8-6 8h12v-3" />
        </>
      );
      break;
    case "quote":
      content = (
        <>
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </>
      );
      break;
    case "chart-line":
      content = (
        <>
          <path d="m3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
        </>
      );
      break;
    case "puzzle":
      content = (
        <>
          <path d="M19.4 7.8c-.1-.3-.1-.7 0-1 .3-5-4.1-5.4-4.9-.5-1.1 7.2-5.5 5.5-5.5 5.5s-.9-4.4-5.5-5.5C-1.3 5.6-.7 10 4.2 11.2c.3 0 .7 0 1 0 7.2 1.1 5.5 5.5 5.5 5.5s-4.4.9-5.5 5.5c-.8 4.9 3.6 5.5 4.9.5 0-.3 0-.7 0-1 1.1-7.2 5.5-5.5 5.5-5.5s.9 4.4 5.5 5.5c4.9.8 5.5-3.6.5-4.9-.3 0-.7 0-1 0-7.2-1.1-5.5-5.5-5.5-5.5s4.4-.9 5.5-5.5c.8-4.9-3.6-5.5-4.9-.5z" />
        </>
      );
      break;
    case "divide":
      content = (
        <>
          <circle cx="12" cy="6" r="1.5" fill="currentColor" />
          <line x1="5" x2="19" y1="12" y2="12" />
          <circle cx="12" cy="18" r="1.5" fill="currentColor" />
        </>
      );
      break;
    case "swords":
      content = (
        <>
          <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
          <line x1="13" x2="19" y1="19" y2="13" />
          <line x1="16" x2="20" y1="16" y2="20" />
          <line x1="19" x2="21" y1="21" y2="19" />
          <polyline points="14.5 6.5 18 3 21 3 21 6 17.5 9.5" />
          <line x1="5" x2="11" y1="19" y2="13" />
          <line x1="4" x2="8" y1="20" y2="16" />
          <line x1="3" x2="5" y1="21" y2="19" />
        </>
      );
      break;
    case "landmark":
      content = (
        <>
          <line x1="3" x2="21" y1="22" y2="22" />
          <line x1="6" x2="6" y1="18" y2="11" />
          <line x1="10" x2="10" y1="18" y2="11" />
          <line x1="14" x2="14" y1="18" y2="11" />
          <line x1="18" x2="18" y1="18" y2="11" />
          <polygon points="12 2 20 7 4 7" />
        </>
      );
      break;
    case "handshake":
      content = (
        <>
          <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.3-4.3a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L13 12.4" />
          <path d="m18 10 1.6-1.6a1 1 0 0 0 0-1.4l-2.6-2.6a1 1 0 0 0-1.4 0L14 6" />
          <path d="m2 14 6 6" />
          <path d="m7 19-3-3a1 1 0 0 1 0-1.4l8.3-8.3a1 1 0 0 1 1.4 0l3 3" />
        </>
      );
      break;
    case "users":
      content = (
        <>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </>
      );
      break;
    case "network":
      content = (
        <>
          <rect x="16" y="16" width="6" height="6" rx="1" />
          <rect x="2" y="16" width="6" height="6" rx="1" />
          <rect x="9" y="2" width="6" height="6" rx="1" />
          <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
          <path d="M12 12V8" />
        </>
      );
      break;
    case "calculator":
      content = (
        <>
          <rect width="16" height="20" x="4" y="2" rx="2" />
          <line x1="8" x2="16" y1="6" y2="6" />
          <line x1="16" x2="16" y1="14" y2="18" />
          <path d="M16 10h.01" />
          <path d="M12 10h.01" />
          <path d="M8 10h.01" />
          <path d="M12 14h.01" />
          <path d="M8 14h.01" />
          <path d="M12 18h.01" />
          <path d="M8 18h.01" />
        </>
      );
      break;
    case "banknote":
      content = (
        <>
          <rect width="20" height="12" x="2" y="6" rx="2" />
          <circle cx="12" cy="12" r="2" />
          <path d="M6 12h.01M18 12h.01" />
        </>
      );
      break;
    case "hash":
      content = (
        <>
          <line x1="4" x2="20" y1="9" y2="9" />
          <line x1="4" x2="20" y1="15" y2="15" />
          <line x1="10" x2="8" y1="3" y2="21" />
          <line x1="16" x2="14" y1="3" y2="21" />
        </>
      );
      break;
    case "graduation-cap":
      content = (
        <>
          <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
          <path d="M22 10v6" />
          <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
        </>
      );
      break;
    case "gamepad-2":
      content = (
        <>
          <line x1="6" x2="10" y1="12" y2="12" />
          <line x1="8" x2="8" y1="10" y2="14" />
          <line x1="15" x2="15.01" y1="13" y2="13" />
          <line x1="18" x2="18.01" y1="11" y2="11" />
          <rect width="20" height="12" x="2" y="6" rx="2" />
        </>
      );
      break;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={ariaHidden}
    >
      {content}
    </svg>
  );
}
