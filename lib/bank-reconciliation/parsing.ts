// lib/bank-reconciliation/parsing.ts
// Input normalization for public uploads.
//
// Covers:
//   - Text dates in DMY / MDY / YMD / YDM order, with per-column inference
//   - Real Excel date cells (Date objects or raw serial numbers)
//   - Month-name dates ("05-Jan-2026", "Jan 5, 2026")
//   - Text amounts: currency symbols/codes, thousands separators (incl.
//     European "1.234,56"), parentheses negatives, trailing minus, DR/CR
//     suffixes, Arabic-Indic digits and Arabic decimal/thousands separators
//
// Wiring (in the xlsx -> rows layer, after column mapping, before engine.ts):
//   1. const order = inferDateOrder(rawDateCells);
//   2. If order === "AMBIGUOUS": show a per-file date-format <select>
//      (DD-MM-YYYY / MM-DD-YYYY / YYYY-MM-DD / YYYY-DD-MM) and use the
//      user's choice. Never guess silently on ambiguous files.
//      If order === "NO_TEXT_DATES": the column holds real Excel dates;
//      any order value works, the parser ignores it for non-strings.
//   3. const toDate = makeDateParser(order === "AMBIGUOUS" || order === "NO_TEXT_DATES" ? userChoiceOr("DMY") : order);
//   4. row.date = toDate(cell). null => flag the row "unparseable date",
//      exclude it from matching, and list it in the output for review
//      (a wrong date silently breaks Pass 1 Reference+Date grouping).
//   5. row.amount = parseAmount(cell) on every amount cell, all three
//      mapping paths. null => flag like an unparseable date.
//   6. If parseAmountDetailed() reports a DR/CR suffix on a signed Amount
//      column, apply direction through the existing debit-direction
//      toggle. Do not hardcode: DR means outflow on a bank statement but
//      the book side can be the opposite.

export type DateOrder = "DMY" | "MDY" | "YMD" | "YDM";
export type InferredOrder = DateOrder | "AMBIGUOUS" | "NO_TEXT_DATES";

// ---------------------------------------------------------------- digits

const ARABIC_INDIC = /[\u0660-\u0669]/g; // U+0660-0669
const EXT_ARABIC_INDIC = /[\u06F0-\u06F9]/g; // U+06F0-06F9

function normalizeDigits(s: string): string {
  return s
    .replace(ARABIC_INDIC, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(EXT_ARABIC_INDIC, (d) => String(d.charCodeAt(0) - 0x06f0));
}

// ---------------------------------------------------------------- dates

const EXCEL_EPOCH_MS = Date.UTC(1899, 11, 30); // Excel serial 0, 1900 system

/** Excel date serial -> UTC Date (time-of-day fractions rounded away). */
export function excelSerialToDate(serial: number): Date {
  return new Date(EXCEL_EPOCH_MS + Math.round(serial) * 86400000);
}

const MONTHS: Record<string, number> = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12,
};

function monthFromName(token: string): number | null {
  const t = token.toLowerCase().replace(/\.$/, "");
  if (t.length < 3 || /^\d+$/.test(t)) return null;
  if (t.startsWith("sept")) return 9;
  return MONTHS[t.slice(0, 3)] ?? null;
}

function dateTokens(s: string): string[] {
  return normalizeDigits(s).trim().split(/[\s\/\-.,]+/).filter(Boolean);
}

function buildDate(y: number, m: number, d: number): Date | null {
  if (y < 100) y += 2000; // 2-digit years: bank data is recent
  if (m < 1 || m > 12 || d < 1 || d > 31) return null;
  const dt = new Date(Date.UTC(y, m - 1, d));
  // Round-trip check rejects impossible dates like 31-02
  return dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === d
    ? dt
    : null;
}

/**
 * Infer the token order of a TEXT date column by scanning all cells.
 * Per-column, never per-cell: per-cell guessing can parse rows of the
 * same file inconsistently.
 *
 * Returns:
 *  - a DateOrder when the column disambiguates itself (any day > 12)
 *  - "AMBIGUOUS" when it does not (every date has day and month <= 12,
 *    or the samples contradict each other) -> ask the user
 *  - "NO_TEXT_DATES" when the column has no parseable text dates
 *    (real Excel date cells / serials) -> order is irrelevant
 */
export function inferDateOrder(cells: unknown[]): InferredOrder {
  type Sample = { nums: number[]; yearIdx: number };
  const samples: Sample[] = [];
  let sawMonthNames = false;

  for (const c of cells) {
    if (typeof c !== "string") continue;
    const tokens = dateTokens(c);
    if (tokens.length !== 3) continue;
    if (tokens.some((t) => monthFromName(t) !== null)) {
      sawMonthNames = true; // self-describing, no inference needed
      continue;
    }
    const nums = tokens.map((t) => parseInt(t, 10));
    if (nums.some((n) => isNaN(n))) continue;
    let yearIdx = tokens.findIndex((t) => t.length === 4);
    if (yearIdx === -1) yearIdx = nums.findIndex((n) => n > 31);
    if (yearIdx === -1) yearIdx = 2; // dd/mm/yy or mm/dd/yy style
    samples.push({ nums, yearIdx });
  }

  if (samples.length === 0) {
    // Month-name-only columns parse correctly under any order.
    return sawMonthNames ? "DMY" : "NO_TEXT_DATES";
  }

  const yearIdx = samples[0].yearIdx;
  if (samples.some((s) => s.yearIdx !== yearIdx)) return "AMBIGUOUS";
  if (yearIdx === 1) return "AMBIGUOUS"; // dd-yyyy-mm: not a real format

  if (yearIdx === 0) {
    const dmEvidence = samples.some((s) => s.nums[1] > 12); // day in slot 1
    const mdEvidence = samples.some((s) => s.nums[2] > 12); // day in slot 2
    if (dmEvidence && mdEvidence) return "AMBIGUOUS";
    if (dmEvidence) return "YDM";
    if (mdEvidence) return "YMD";
    // No evidence either way. ISO yyyy-mm-dd is overwhelmingly more
    // common than yyyy-dd-mm, so default rather than nag the user.
    return "YMD";
  }

  // Year last
  const dayFirst = samples.some((s) => s.nums[0] > 12);
  const monthFirst = samples.some((s) => s.nums[1] > 12);
  if (dayFirst && monthFirst) return "AMBIGUOUS"; // contradictory data
  if (dayFirst) return "DMY";
  if (monthFirst) return "MDY";
  return "AMBIGUOUS"; // genuinely 50/50: surface the format selector
}

/** Build a cell -> Date parser for a resolved column order. */
export function makeDateParser(order: DateOrder): (raw: unknown) => Date | null {
  return (raw: unknown): Date | null => {
    if (raw == null || raw === "") return null;
    if (raw instanceof Date) return isNaN(raw.getTime()) ? null : raw;
    if (typeof raw === "number") {
      if (!isFinite(raw) || raw <= 0 || raw > 200000) return null;
      return excelSerialToDate(raw);
    }
    const tokens = dateTokens(String(raw));
    if (tokens.length !== 3) return null;

    // Month-name path: self-describing, order does not matter.
    const nameIdx = tokens.findIndex((t) => monthFromName(t) !== null);
    if (nameIdx !== -1) {
      const m = monthFromName(tokens[nameIdx])!;
      const rest = tokens.filter((_, i) => i !== nameIdx);
      const a = parseInt(rest[0], 10);
      const b = parseInt(rest[1], 10);
      if (isNaN(a) || isNaN(b)) return null;
      // 4-digit (or > 31) token is the year; otherwise assume year last.
      const aIsYear = rest[0].length === 4 || a > 31;
      const [d, y] = aIsYear ? [b, a] : [a, b];
      return buildDate(y, m, d);
    }

    const nums = tokens.map((t) => parseInt(t, 10));
    if (nums.some((n) => isNaN(n))) return null;
    const [t0, t1, t2] = nums;
    switch (order) {
      case "DMY": return buildDate(t2, t1, t0);
      case "MDY": return buildDate(t2, t0, t1);
      case "YMD": return buildDate(t0, t1, t2);
      case "YDM": return buildDate(t0, t2, t1);
    }
  };
}

// ---------------------------------------------------------------- amounts

export interface ParsedAmount {
  value: number | null;
  /** Set when the cell carried a DR/CR suffix. Direction must be applied
   *  by the caller through the debit-direction mapping toggle. */
  drcr: "DR" | "CR" | null;
}

export function parseAmountDetailed(raw: unknown): ParsedAmount {
  if (typeof raw === "number") {
    return { value: isFinite(raw) ? raw : null, drcr: null };
  }
  if (raw == null) return { value: null, drcr: null };

  let s = normalizeDigits(String(raw)).trim();
  if (!s) return { value: null, drcr: null };

  // Arabic thousands (U+066C), Arabic comma (U+060C), Arabic decimal (U+066B)
  s = s.replace(/[\u066C\u060C]/g, ",").replace(/\u066B/g, ".");

  let drcr: ParsedAmount["drcr"] = null;
  const lead = s.match(/^(DR|CR)\b\.?/i);
  const tail = s.match(/\b(DR|CR)\.?$/i);
  if (lead || tail) {
    drcr = ((lead ?? tail)![1]).toUpperCase() as "DR" | "CR";
    s = s.replace(/^(DR|CR)\b\.?/i, "").replace(/\b(DR|CR)\.?$/i, "").trim();
  }

  let negative = false;
  if (/^\(.*\)$/.test(s)) {
    negative = true;
    s = s.slice(1, -1).trim();
  }
  if (/^-/.test(s)) negative = true;
  if (/-\s*$/.test(s)) {
    negative = true;
    s = s.replace(/-\s*$/, "");
  }

  // Strip currency symbols/codes, letters (Latin + Arabic), spaces, NBSP.
  s = s.replace(/[^0-9.,-]/g, "").replace(/^-+/, "");
  if (!s || s.includes("-")) return { value: null, drcr };

  // Resolve separators.
  const lastComma = s.lastIndexOf(",");
  const lastDot = s.lastIndexOf(".");
  if (lastComma !== -1 && lastDot !== -1) {
    // Both present: whichever appears last is the decimal separator.
    s = lastComma > lastDot
      ? s.replace(/\./g, "").replace(/,/g, ".") // 1.234,56
      : s.replace(/,/g, "");                    // 1,234.56
  } else if (lastComma !== -1) {
    const parts = s.split(",");
    // A single comma with 1-2 trailing digits reads as a decimal comma;
    // anything else is a thousands separator.
    s = parts.length === 2 && parts[1].length <= 2
      ? parts[0] + "." + parts[1]
      : s.replace(/,/g, "");
  } else if (lastDot !== -1) {
    const parts = s.split(".");
    if (parts.length > 2) {
      // "1.234.567" (dot thousands) or "1.234.567.89" (last group decimal)
      const last = parts.pop()!;
      s = last.length <= 2 ? parts.join("") + "." + last : parts.join("") + last;
    }
  }

  const value = parseFloat(s);
  if (isNaN(value)) return { value: null, drcr };
  return { value: negative ? -value : value, drcr };
}

/** Convenience wrapper when the DR/CR flag is not needed. */
export function parseAmount(raw: unknown): number | null {
  return parseAmountDetailed(raw).value;
}
