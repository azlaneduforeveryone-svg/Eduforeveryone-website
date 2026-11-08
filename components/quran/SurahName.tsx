import { surahNameChar } from "@/lib/surahNames";
import { getSurahMeta } from "@/lib/quranSurahMeta";

/**
 * A surah's name in King Fahd Complex calligraphy ("سورة <name>").
 * The font has its own colours (black letters, coloured marks) that Safari and Firefox
 * always use, whatever the text colour. `white` turns everything the browser draws into
 * white with a CSS filter, so the name reads the same on dark headers in every browser.
 * Screen readers and search engines get the name as text through aria-label.
 */
export default function SurahName({
  surah, size = 32, white = false, className = "",
}: { surah: number; size?: number; white?: boolean; className?: string }) {
  const meta = getSurahMeta(surah);
  const label = meta ? `سورة ${meta.arabicName} (Surah ${meta.name})` : `Surah ${surah}`;
  return (
    <span role="img" aria-label={label} title={meta ? `Surah ${meta.name}` : undefined}
      className={className}
      style={{
        fontFamily: "var(--font-surah-names)", fontSize: `${size}px`, lineHeight: 1.25,
        display: "inline-block", whiteSpace: "nowrap",
        // brightness(0) makes every colour black, invert(1) then makes it white.
        filter: white ? "brightness(0) invert(1) drop-shadow(0 1px 1px rgba(0,0,0,0.15))" : undefined,
      }}>
      {surahNameChar(surah)}
    </span>
  );
}
