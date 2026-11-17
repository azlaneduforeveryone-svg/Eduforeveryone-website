/**
 * The site's main sections, in ONE order.
 *
 * This list drives the header (Navbar), the home page chips and sections
 * (lib/homeSections.ts) and the footer columns. To add a new main section:
 *   1. add it here, in the place it should appear;
 *   2. add its home section in lib/homeSections.ts with the same id.
 * The home page sorts its sections by this list and the build fails if a
 * home section has no entry here, so the three can never drift apart again.
 */

export interface MainNavItem {
  /** Same id as the home section and its #anchor. */
  id: "islamic" | "courses" | "ielts" | "gmat" | "games" | "tools";
  label: string;
  href: string;
}

export const MAIN_NAV: MainNavItem[] = [
  { id: "islamic", label: "Islamic Studies", href: "/islamic-studies" },
  { id: "courses", label: "Courses", href: "/courses" },
  { id: "ielts", label: "IELTS", href: "/ielts" },
  { id: "gmat", label: "GMAT", href: "/gmat" },
  { id: "games", label: "Games", href: "/games" },
  { id: "tools", label: "Tools", href: "/tools" },
];

export const ABOUT_NAV = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy-policy", label: "Privacy Policy" },
];

export function navItem(id: MainNavItem["id"]): MainNavItem {
  const item = MAIN_NAV.find((n) => n.id === id);
  if (!item) throw new Error(`siteNav: no main nav item "${id}"`);
  return item;
}
