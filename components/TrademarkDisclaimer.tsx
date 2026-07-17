// components/TrademarkDisclaimer.tsx
// Muted trademark attribution rendered once per section via app/[section]/layout.tsx.
// Server component — no interactivity, no "use client".

const TEXT: Record<string, string> = {
  gmat:
    "GMAT™ is a registered trademark of the Graduate Management Admission Council (GMAC). GMAC does not endorse, nor is it affiliated in any way with, this website.",
  ielts:
    "IELTS is a registered trademark of the British Council, IDP: IELTS Australia and Cambridge University Press & Assessment, which neither endorse nor are affiliated with this website.",
};

interface Props {
  exam: "gmat" | "ielts";
}

export default function TrademarkDisclaimer({ exam }: Props) {
  return (
    <aside className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6">
        <p className="text-xs text-gray-400 leading-relaxed text-center">{TEXT[exam]}</p>
      </div>
    </aside>
  );
}
