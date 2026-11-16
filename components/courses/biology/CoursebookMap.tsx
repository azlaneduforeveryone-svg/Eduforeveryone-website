// "Using the coursebook?" table on the Biology course page.
// The 20-chapter coursebook (exams from 2023) follows the older syllabus order,
// so its chapter numbers do not match the 2026 to 2028 syllabus topics used on this site.

import Link from "next/link";

type Row = { chapter: string; title: string; topics: string[] };

const ROWS: Row[] = [
  { chapter: "1.1", title: "Characteristics of organisms", topics: [] },
  { chapter: "1.2 to 1.6", title: "Classification, keys, kingdoms, groups, viruses", topics: ["2.1", "2.2"] },
  { chapter: "2", title: "Cells (including sizes of specimens)", topics: ["1.1", "1.2"] },
  { chapter: "3", title: "Movement into and out of cells", topics: ["3.1", "3.2"] },
  { chapter: "4.1", title: "Carbohydrates, fats and proteins", topics: ["4.1"] },
  { chapter: "4.2", title: "The structure of DNA", topics: ["17.2"] },
  { chapter: "5", title: "Enzymes", topics: ["5.1", "5.2"] },
  { chapter: "6", title: "Plant nutrition", topics: ["6.1", "6.2", "6.3"] },
  { chapter: "7", title: "Human nutrition", topics: ["8.1", "8.2", "8.3"] },
  { chapter: "8", title: "Transport in plants", topics: ["7.1", "7.2"] },
  { chapter: "9", title: "Transport in animals", topics: ["11.1", "11.2", "11.3", "11.4"] },
  { chapter: "10", title: "Diseases and immunity", topics: ["12.1", "12.2", "12.3"] },
  { chapter: "11.1", title: "Respiration", topics: ["10.1", "10.2", "10.3"] },
  { chapter: "11.2", title: "Gas exchange in humans", topics: ["9.1"] },
  { chapter: "12.1 to 12.3", title: "Nervous system, sense organs, hormones", topics: ["14.1", "14.2", "14.3"] },
  { chapter: "12.4", title: "Coordination in plants", topics: ["15.1"] },
  { chapter: "13.1", title: "Excretion", topics: ["13.1", "13.2"] },
  { chapter: "13.2", title: "Homeostasis", topics: ["14.4", "14.5", "14.6"] },
  { chapter: "14", title: "Reproduction in plants", topics: ["16.2", "16.3"] },
  { chapter: "15.1", title: "The human reproductive systems", topics: ["16.4"] },
  { chapter: "15.2", title: "Sexually transmitted infections", topics: ["12.1"] },
  { chapter: "16.1", title: "Chromosomes and cell division", topics: ["16.1"] },
  { chapter: "16.2", title: "Inheriting genes", topics: ["17.3"] },
  { chapter: "16.3", title: "Genes and protein synthesis", topics: ["17.2"] },
  { chapter: "17", title: "Variation and selection", topics: ["17.1", "17.4"] },
  { chapter: "18", title: "Organisms and their environment", topics: ["19.1", "19.2", "19.3"] },
  { chapter: "19", title: "Human influences on ecosystems", topics: ["19.4", "19.5"] },
  { chapter: "20", title: "Biotechnology and genetic modification", topics: ["18.1", "18.2"] },
];

export default function CoursebookMap() {
  return (
    <details className="efe-card p-5 group">
      <summary className="cursor-pointer list-none flex items-center justify-between gap-3 font-bold text-efe-fg text-base sm:text-lg">
        <span>Using the coursebook? Find your chapter here</span>
        <svg aria-hidden="true" viewBox="0 0 20 20" className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 7.5 10 12.5 15 7.5" />
        </svg>
      </summary>
      <p className="mt-3 text-sm sm:text-base text-efe-muted">
        The 20-chapter coursebook (for exams from 2023) follows the older syllabus order. This site follows the
        2026 to 2028 syllabus, so the numbers are different. Everything in the book is still covered here.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-sm sm:text-base border-collapse">
          <thead>
            <tr className="text-left border-b border-efe-line">
              <th className="py-2 pr-3 font-semibold">Book chapter</th>
              <th className="py-2 pr-3 font-semibold">Book title</th>
              <th className="py-2 font-semibold">Topic on this site</th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r) => (
              <tr key={r.chapter} className="border-b border-efe-line align-top">
                <td className="py-2 pr-3 whitespace-nowrap font-semibold">{r.chapter}</td>
                <td className="py-2 pr-3">{r.title}</td>
                <td className="py-2">
                  {r.topics.length === 0 ? (
                    <span className="text-efe-muted">Not in the 2026 to 2028 syllabus</span>
                  ) : (
                    <span className="flex flex-wrap gap-1.5">
                      {r.topics.map((t) => (
                        <Link
                          key={t}
                          href={`/courses/biology/o-level/${t.replace(".", "-")}`}
                          className="inline-block rounded-md border border-efe-line px-2 py-0.5 font-semibold text-efe-accent-ink hover:bg-efe-accent-soft"
                        >
                          {t}
                        </Link>
                      ))}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs sm:text-sm text-efe-muted">
        Book 15.2 (sexually transmitted infections) is covered through HIV in topics 12.1 and 12.3.
      </p>
    </details>
  );
}
