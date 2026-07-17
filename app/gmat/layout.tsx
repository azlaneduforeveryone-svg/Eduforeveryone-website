// app/gmat/layout.tsx
// Wraps every /gmat/* route so the GMAC trademark disclaimer is written once.

import TrademarkDisclaimer from "@/components/TrademarkDisclaimer";

export default function GmatLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <TrademarkDisclaimer exam="gmat" />
    </>
  );
}
