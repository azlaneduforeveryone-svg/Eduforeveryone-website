// Renders O Level Accounting revision notes written in a small Markdown subset.
// No external dependencies (keeps the $0 / small-bundle rule).
//
// Supported, one block per blank-line-separated chunk:
//   ## Heading          ### Sub-heading
//   - bullet item       1. numbered item
//   > rule box          | table | row |   (|---| separator rows are skipped)
//   **bold** inside any text
// Anything else is a paragraph.

import { Fragment, type ReactNode } from "react";

function inline(text: string, keyBase: string): ReactNode[] {
  // Split on **bold** markers
  const parts = text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={`${keyBase}-b${i}`} className="font-bold text-efe-fg">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={`${keyBase}-t${i}`}>{part}</Fragment>
    )
  );
}

function splitRow(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((c) => c.trim());
}

const isSeparatorRow = (line: string) => /^\|?\s*:?-{3,}:?\s*(\|\s*:?-{3,}:?\s*)*\|?$/.test(line.trim());

export default function NotesContent({ notes }: { notes: string }) {
  const blocks = notes
    .replace(/\r\n/g, "\n")
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="space-y-4 text-[15px] sm:text-base leading-relaxed text-efe-fg">
      {blocks.map((block, bi) => {
        const key = `blk-${bi}`;
        const lines = block.split("\n").map((l) => l.trimEnd());
        const first = lines[0];

        if (first.startsWith("### ")) {
          return (
            <h4 key={key} className="text-base sm:text-lg font-bold text-efe-fg pt-1">
              {inline(first.slice(4), key)}
            </h4>
          );
        }

        if (first.startsWith("## ")) {
          return (
            <h3
              key={key}
              className="text-lg sm:text-xl font-bold font-display text-efe-fg pt-3 border-t border-efe-line first:border-t-0 first:pt-0"
            >
              {inline(first.slice(3), key)}
            </h3>
          );
        }

        if (lines.every((l) => l.trim().startsWith("|"))) {
          const rows = lines.filter((l) => !isSeparatorRow(l)).map(splitRow);
          const [head, ...body] = rows;
          return (
            <div key={key} className="overflow-x-auto rounded-xl border border-efe-line">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-efe-accent-soft">
                  <tr>
                    {head.map((cell, ci) => (
                      <th
                        key={`${key}-h${ci}`}
                        className="text-left font-bold text-efe-accent-ink px-3 py-2 border-b border-efe-line"
                      >
                        {inline(cell, `${key}-h${ci}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {body.map((row, ri) => (
                    <tr key={`${key}-r${ri}`} className="even:bg-efe-surface">
                      {head.map((_, ci) => (
                        <td
                          key={`${key}-r${ri}c${ci}`}
                          className="px-3 py-2 align-top border-b border-efe-line last:border-b-0"
                        >
                          {inline(row[ci] ?? "", `${key}-r${ri}c${ci}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (lines.every((l) => l.trim().startsWith(">"))) {
          const text = lines.map((l) => l.trim().replace(/^>\s?/, "")).join(" ");
          return (
            <div
              key={key}
              className="rounded-xl border-l-4 border-efe-gold bg-efe-gold-soft px-4 py-3 font-semibold"
            >
              {inline(text, key)}
            </div>
          );
        }

        if (lines.every((l) => /^\s*-\s+/.test(l))) {
          return (
            <ul key={key} className="list-disc pl-6 space-y-1.5">
              {lines.map((l, li) => (
                <li key={`${key}-li${li}`}>{inline(l.replace(/^\s*-\s+/, ""), `${key}-li${li}`)}</li>
              ))}
            </ul>
          );
        }

        if (lines.every((l) => /^\s*\d+\.\s+/.test(l))) {
          return (
            <ol key={key} className="list-decimal pl-6 space-y-1.5">
              {lines.map((l, li) => (
                <li key={`${key}-li${li}`}>{inline(l.replace(/^\s*\d+\.\s+/, ""), `${key}-li${li}`)}</li>
              ))}
            </ol>
          );
        }

        // Paragraph: a heading line followed directly by text lines is still split correctly
        return (
          <p key={key}>{inline(lines.join(" "), key)}</p>
        );
      })}
    </div>
  );
}
