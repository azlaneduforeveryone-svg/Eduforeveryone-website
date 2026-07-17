// app/ielts/layout.tsx
// Wraps every /ielts/* route so the IELTS trademark disclaimer is written once.

import TrademarkDisclaimer from "@/components/TrademarkDisclaimer";

export default function IeltsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <TrademarkDisclaimer exam="ielts" />
    </>
  );
}
