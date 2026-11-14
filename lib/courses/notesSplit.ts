// Splits O Level Accounting notes into:
// - intro: the "What you need to know" and "Key words" blocks (shown before the video)
// - body:  everything after them (the main notes)
// Works on the Markdown subset used in oLevelAccountingNotes.ts.

const INTRO_HEADINGS = ["what you need to know", "key words"];

export function splitOLevelNotes(notes: string | undefined): { intro?: string; body?: string } {
  if (!notes || !notes.trim()) return {};
  const text = notes.replace(/\r\n/g, "\n");

  // Find each "## Heading" line and its position
  const headings = [...text.matchAll(/^## (.+)$/gm)].map((m) => ({
    title: m[1].trim().toLowerCase(),
    index: m.index ?? 0,
  }));

  // The intro is the leading run of headings that are in INTRO_HEADINGS
  let cut = -1;
  for (let i = 0; i < headings.length; i++) {
    if (!INTRO_HEADINGS.includes(headings[i].title)) {
      cut = headings[i].index;
      break;
    }
  }

  if (cut <= 0 || !INTRO_HEADINGS.includes(headings[0]?.title ?? "")) {
    return { body: text.trim() };
  }

  const intro = text.slice(0, cut).trim();
  const body = text.slice(cut).trim();
  return { intro: intro || undefined, body: body || undefined };
}
