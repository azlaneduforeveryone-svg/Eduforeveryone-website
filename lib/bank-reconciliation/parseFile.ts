import * as XLSX from "xlsx";
import Papa from "papaparse";

export interface ParsedFile {
  headers: string[];
  rows: Record<string, unknown>[];
  /** PDF only: true when the parsed rows reconcile against the running
   *  balance (arithmetic proof the extraction is correct). undefined for
   *  Excel/CSV. When false, the page surfaces the rows for explicit
   *  confirmation rather than trusting them silently. */
  balanceVerified?: boolean;
  /** Opening/closing balance read from the statement, ONLY when the parse
   *  verified against the running balance (an unverified parse's balances
   *  are as untrustworthy as its rows). The page prefills these into the
   *  balance boxes as "auto-filled, please confirm" - never silently
   *  trusted, since they drive the tie-out check. undefined when not found
   *  or not verified. */
  detectedOpeningBalance?: number;
  detectedClosingBalance?: number;
}

// ---------------------------------------------------------------------------
// Header hygiene - shared by every path
// ---------------------------------------------------------------------------

/** Normalize a raw header array: strip BOM, fill blanks with __EMPTY_n
 * (matching how SheetJS/Papa name unlabeled columns), and de-duplicate so
 * two identical headers don't silently overwrite each other in the row
 * objects. */
function cleanHeaders(raw: (string | undefined)[]): string[] {
  const seen = new Map<string, number>();
  return raw.map((h, i) => {
    let name = String(h ?? "").replace(/^\uFEFF/, "").trim();
    if (!name) name = `__EMPTY_${i}`;
    const prior = seen.get(name);
    if (prior === undefined) {
      seen.set(name, 0);
      return name;
    }
    const next = prior + 1;
    seen.set(name, next);
    return `${name}_${next}`; // "Amount", "Amount_1", ...
  });
}

// ---------------------------------------------------------------------------
// CSV
// ---------------------------------------------------------------------------

/** Decode CSV bytes, honoring a BOM and the common non-UTF-8 encodings that
 * Excel produces outside the US/UK (Arabic Windows-1256, UTF-16). Falls back
 * to UTF-8. TextDecoder with fatal:true lets us detect a decode that
 * produced replacement characters and retry. */
function decodeText(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  // UTF-16 LE/BE byte-order marks
  if (bytes[0] === 0xff && bytes[1] === 0xfe) return new TextDecoder("utf-16le").decode(buffer);
  if (bytes[0] === 0xfe && bytes[1] === 0xff) return new TextDecoder("utf-16be").decode(buffer);
  // Try strict UTF-8 first; if it throws, the bytes aren't valid UTF-8.
  try {
    return new TextDecoder("utf-8", { fatal: true }).decode(buffer);
  } catch {
    // Windows-1256 is the dominant legacy Arabic encoding; if the runtime
    // lacks it, this throws and we fall through to lenient UTF-8.
    try {
      return new TextDecoder("windows-1256").decode(buffer);
    } catch {
      return new TextDecoder("utf-8").decode(buffer); // lenient, last resort
    }
  }
}

function parseCsv(buffer: ArrayBuffer): ParsedFile {
  let text = decodeText(buffer).replace(/^\uFEFF/, ""); // strip BOM if any survived
  const result = Papa.parse<string[]>(text, {
    header: false,          // parse as arrays so we can clean headers ourselves
    skipEmptyLines: "greedy",
    dynamicTyping: false,
    delimiter: "",          // "" tells Papa to auto-detect , ; \t | among others
  });
  const data = result.data.filter((r) => Array.isArray(r) && r.some((c) => String(c ?? "").trim() !== ""));
  if (data.length === 0) return { headers: [], rows: [] };
  const headers = cleanHeaders(data[0] as string[]);
  const rows = data.slice(1).map((arr) => {
    const obj: Record<string, unknown> = {};
    headers.forEach((h, i) => (obj[h] = (arr as string[])[i] ?? ""));
    return obj;
  });
  return { headers, rows };
}

// ---------------------------------------------------------------------------
// Excel - SheetJS reads BOTH .xlsx AND legacy binary .xls (ExcelJS could not
// read .xls at all, which is why every .xls upload used to fail).
// ---------------------------------------------------------------------------

function parseExcel(buffer: ArrayBuffer): ParsedFile {
  // cellDates keeps real date cells as Date objects (so parsing.ts sees a
  // Date and skips text inference); raw values are preserved otherwise.
  const wb = XLSX.read(buffer, { type: "array", cellDates: true });
  const ws = wb.Sheets[wb.SheetNames[0]];
  if (!ws) return { headers: [], rows: [] };
  // header:1 => array-of-arrays, so blank/duplicate headers are handled by
  // cleanHeaders rather than SheetJS silently coping. defval keeps empty
  // cells present as "" instead of dropping the key.
  const aoa: unknown[][] = XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: "", blankrows: false });
  if (aoa.length === 0) return { headers: [], rows: [] };
  const headers = cleanHeaders((aoa[0] as (string | undefined)[]).map((c) => (c == null ? "" : String(c))));
  const rows: Record<string, unknown>[] = [];
  for (let i = 1; i < aoa.length; i++) {
    const arr = aoa[i];
    if (!arr || arr.every((c) => c === "" || c == null)) continue;
    const obj: Record<string, unknown> = {};
    headers.forEach((h, j) => (obj[h] = arr[j] ?? ""));
    rows.push(obj);
  }
  return { headers, rows };
}


// ===========================================================================
// PDF - digital (text-layer) bank statements. Positional model: numbers are
// assigned to columns by x-coordinate (WHERE a number sits), not by order on
// the line. Design follows the cross-region blueprint: leading-date row
// anchor, header-synonym column detection, and running-balance continuity as
// the universal correctness gate. Validated end-to-end against separate
// Debit/Credit statements from SNB (ascending) and Riyad Bank (descending,
// left-aligned amount columns, multi-word merged headers).
//
// pdfjs cannot run on the server (needs DOMMatrix), so this path is
// browser-only. The page converts a parsed PDF to .xlsx before submit, so
// the server never reaches here.
// ---------------------------------------------------------------------------

interface PositionedToken {
  s: string;
  x0: number; // left edge
  x1: number; // right edge
}
interface TextLine {
  y: number;
  tokens: PositionedToken[];
  text: string;
}

// A money token: 1,234.56 | (1,234.56) | -1234.56 | 1,234.56- | Arabic-Indic
// digit forms. Requires a decimal group so bare reference numbers (109164089)
// don't match. NOTE: assumes 1,234.56 grouping (all six focus regions). It does
// NOT correctly parse continental 1.234,56 - that needs a locale pass.
const MONEY_RE = /\(?-?[\d\u0660-\u0669\u06F0-\u06F9][\d\u0660-\u0669\u06F0-\u06F9,\u066C\u060C.\u066B]*\.\d{2}\)?-?/;
const MONEY_RE_G = new RegExp(MONEY_RE.source, "g");
const DATE_RE =
  /\b(\d{1,4}[/\-.]\d{1,2}[/\-.]\d{1,4}|\d{1,2}[-\s][A-Za-z]{3,}[-\s]\d{2,4}|[A-Za-z]{3,}\s+\d{1,2},?\s+\d{2,4})\b/;

// Column header synonyms (blueprint Section 6, lowercased + Arabic). Multi-word
// synonyms are listed BEFORE their single-word substrings within a group so the
// more specific label is checked first when a header cell is a merged token.
const HEADERS = {
  date: ["date of transaction", "transaction date", "booked date", "posting date", "value date", "txn date", "date", "تاريخ القيمة", "التاريخ", "تاريخ"],
  description: ["description", "details", "particulars", "narration", "narrative", "transaction", "memo", "remarks", "reference", "البيان", "الوصف", "بيان"],
  debit: ["debit", "withdrawals", "withdrawal", "money out", "paid out", "payments out", "charges", "debits", "مدين", "مسحوبات", "سحب"],
  credit: ["credit", "deposits", "deposit", "money in", "paid in", "payments in", "additions", "credits", "دائن", "ايداع", "إيداع"],
  amount: ["transaction amount", "amount", "المبلغ", "مبلغ", "قيمة"],
  balance: ["running balance", "closing balance", "balance", "الرصيد", "رصيد"],
} as const;

type ColKind = keyof typeof HEADERS;

// Amount-bearing columns: a value is only kept if its nearest column is one of
// these. date/description columns exist only to ABSORB non-amount numbers
// (references, IDs) that sit under them, keeping them out of the amounts.
const AMOUNT_KINDS = new Set<ColKind>(["debit", "credit", "amount", "balance"]);

// Per-token match priority. date before description so "Transaction Date" reads
// as a date not a description; balance/credit/debit before amount so
// "Credit Amount" / "Debit Amount" resolve to credit/debit, not amount;
// description last so specific columns win.
const HEADER_PRIORITY: ColKind[] = ["date", "balance", "credit", "debit", "amount", "description"];

const OPENING_MARK = /(opening balance|balance b\/?f|balance b\/?d|brought forward|opening bal|رصيد افتتاحي|رصيد سابق)/i;

// Lines that END the transaction table: totals, transaction counts,
// closing-balance rows, boilerplate footers. Once hit, the table is over - stop
// so their figures are never read as movements. Broad enough to catch SNB's
// "Total Debit Amount" / "Total Credit Amount" footer.
const STOP_MARK =
  /(closing balance|balance c\/?f|carried forward|total\s+(debit|credit|withdrawals?|deposits?)|total\s+.*\b(amount|transactions?)\b|\*\*\s*total|system generated|رصيد ختامي|إجمالي)/i;

function normalizeDigitsLocal(s: string): string {
  return s
    .replace(/[\u0660-\u0669]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[\u06F0-\u06F9]/g, (d) => String(d.charCodeAt(0) - 0x06f0));
}

function moneyToNum(raw: string): number {
  let t = normalizeDigitsLocal(raw).trim();
  t = t.replace(/[\u066C\u060C]/g, ",").replace(/\u066B/g, ".").replace(/[\u2212\u2010-\u2015]/g, "-");
  let neg = false;
  if (/^\(.*\)$/.test(t)) { neg = true; t = t.slice(1, -1); }
  if (/^-/.test(t)) { neg = true; t = t.replace(/^-+/, ""); }
  if (/-\s*$/.test(t)) { neg = true; t = t.replace(/-+\s*$/, ""); }
  t = t.replace(/[^0-9.,]/g, "").replace(/,/g, "");
  const n = parseFloat(t);
  return isNaN(n) ? NaN : neg ? -n : n;
}

async function extractPdfLines(buffer: ArrayBuffer): Promise<TextLine[]> {
  const pdfjs: any = await import("pdfjs-dist");
  try {
    const worker: any = await import("pdfjs-dist/build/pdf.worker.mjs");
    pdfjs.GlobalWorkerOptions.workerPort = new worker.default();
  } catch {
    /* some setups auto-resolve the worker */
  }
  const doc = await pdfjs.getDocument({ data: new Uint8Array(buffer) }).promise;
  const lines: TextLine[] = [];
  for (let p = 1; p <= doc.numPages; p++) {
    const page = await doc.getPage(p);
    const content = await page.getTextContent();
    const byY = new Map<number, PositionedToken[]>();
    for (const it of content.items as any[]) {
      if (!("str" in it) || !it.str || !it.str.trim()) continue;
      const x0 = it.transform[4];
      const y = Math.round(it.transform[5]);
      const width = it.width ?? 0;
      // Merge tokens on the same visual line (y within 2px).
      let key = y;
      for (const k of byY.keys()) if (Math.abs(k - y) <= 2) { key = k; break; }
      const arr = byY.get(key) ?? [];
      arr.push({ s: it.str, x0, x1: x0 + width });
      byY.set(key, arr);
    }
    const ys = [...byY.keys()].sort((a, b) => b - a);
    for (const y of ys) {
      const toks = byY.get(y)!.sort((a, b) => a.x0 - b.x0);
      const text = toks.map((t) => t.s).join(" ").replace(/\s+/g, " ").trim();
      if (text) lines.push({ y, tokens: toks, text });
    }
  }
  return lines;
}

interface ColPos { kind: ColKind; cx: number; } // cx = column center x

/** Find the header line and the CENTER x of each recognizable column. Matches
 * each header token by substring against the synonym set in priority order, so
 * it works whether pdf.js emits headers as one word per token (SNB) or merges
 * multi-word labels like "Credit Amount" / "Value Date" into one token (Riyad).
 * Returns null if no recognizable header row is present. */
function detectColumns(lines: TextLine[]): { headerIndex: number; cols: ColPos[] } | null {
  for (let i = 0; i < Math.min(lines.length, 60); i++) {
    const line = lines[i];
    const lower = line.text.toLowerCase();
    // A header row should mention a balance or amount plus a date/description.
    const looksHeader =
      (lower.includes("balance") || HEADERS.amount.some((h) => lower.includes(h))) &&
      (HEADERS.date.some((h) => lower.includes(h)) || HEADERS.description.some((h) => lower.includes(h)));
    if (!looksHeader) continue;

    const cols: ColPos[] = [];
    const claimed = new Set<ColKind>();
    for (const tk of line.tokens) {
      const low = tk.s.toLowerCase();
      for (const kind of HEADER_PRIORITY) {
        if (claimed.has(kind)) continue;
        if (HEADERS[kind].some((syn) => low.includes(syn))) {
          cols.push({ kind, cx: (tk.x0 + tk.x1) / 2 });
          claimed.add(kind);
          break; // one kind per header token
        }
      }
    }
    if (cols.some((c) => c.kind === "balance" || c.kind === "amount") && cols.length >= 2) {
      return { headerIndex: i, cols };
    }
  }
  return null;
}

type Schema = "debitCredit" | "signedAmount" | "unknown";

interface PdfTxn {
  Date: string;
  Description: string;
  Debit: number | "";
  Credit: number | "";
  Amount: number | "";
  Balance: number | "";
}

/** Assign each money token to the nearest column center among ALL columns, then
 * keep it only if that nearest column is an amount column (Voronoi partition).
 * No absolute pixel threshold, which would be tied to one font size / page
 * scale; this adapts to any column spacing and to left- OR right-aligned amount
 * columns. Numbers in the description/reference area fall into that column's
 * cell and drop out on their own. */
function assignByColumn(tokens: PositionedToken[], cols: ColPos[]): Map<ColKind, number> {
  const out = new Map<ColKind, number>();
  for (const tk of tokens) {
    // Match the money SUBSTRING, not the whole token: pdf.js merges e.g.
    // "1319012 Charges: 0.50 REMBK:THE" into one token, and running moneyToNum
    // on the whole string would concatenate every digit into one wrong number.
    const m = tk.s.match(MONEY_RE);
    if (!m) continue;
    const val = moneyToNum(m[0]);
    if (isNaN(val)) continue;
    const tc = (tk.x0 + tk.x1) / 2;
    let best: ColPos | null = null;
    let bestD = Infinity;
    for (const c of cols) {
      const d = Math.abs(c.cx - tc);
      if (d < bestD) { bestD = d; best = c; }
    }
    if (best && AMOUNT_KINDS.has(best.kind)) out.set(best.kind, val); // last wins per column
  }
  return out;
}

function buildTxns(
  lines: TextLine[],
  headerIndex: number,
  cols: ColPos[]
): { txns: PdfTxn[]; schema: Schema; openingBalance: number | ""; closingBalance: number | "" } {
  const hasDebit = cols.some((c) => c.kind === "debit");
  const hasCredit = cols.some((c) => c.kind === "credit");
  const hasAmount = cols.some((c) => c.kind === "amount");
  const schema: Schema = hasDebit || hasCredit ? "debitCredit" : hasAmount ? "signedAmount" : "unknown";

  const txns: PdfTxn[] = [];
  let cur: PdfTxn | null = null;
  let closingBalance: number | "" = "";

  for (let i = headerIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    const dateM = line.text.match(DATE_RE);
    const startsWithDate = !!dateM && line.text.trim().toLowerCase().startsWith(dateM[0].toLowerCase().slice(0, 3));
    const isOpening = OPENING_MARK.test(line.text);

    if (STOP_MARK.test(line.text)) {
      const assigned = assignByColumn(line.tokens, cols);
      if (assigned.has("balance")) closingBalance = assigned.get("balance")!;
      break;
    }

    if (dateM && (startsWithDate || isOpening)) {
      if (cur) txns.push(cur);
      const assigned = assignByColumn(line.tokens, cols);
      cur = {
        Date: dateM[0],
        Description: line.text.replace(DATE_RE, "").replace(MONEY_RE_G, "").replace(/\bSAR\b|\bSR\b|\bAED\b|[£$€]/gi, "").replace(/\s+/g, " ").trim(),
        Debit: assigned.get("debit") ?? "",
        Credit: assigned.get("credit") ?? "",
        Amount: assigned.get("amount") ?? "",
        Balance: assigned.get("balance") ?? "",
      };
      // An opening-balance row is a seed, not a transaction: carries a balance,
      // no movement. Keep it out of the transaction list but keep its balance.
      if (isOpening) {
        cur.Debit = cur.Credit = cur.Amount = "";
        cur.Description = "__OPENING__";
      }
    } else if (cur) {
      // Continuation line: append description; also capture money if the amount
      // or balance landed on a wrapped line (rare but happens).
      const assigned = assignByColumn(line.tokens, cols);
      if (cur.Debit === "" && assigned.has("debit")) cur.Debit = assigned.get("debit")!;
      if (cur.Credit === "" && assigned.has("credit")) cur.Credit = assigned.get("credit")!;
      if (cur.Amount === "" && assigned.has("amount")) cur.Amount = assigned.get("amount")!;
      if (cur.Balance === "" && assigned.has("balance")) cur.Balance = assigned.get("balance")!;
      if (cur.Description !== "__OPENING__") {
        const extra = line.text.replace(MONEY_RE_G, "").replace(/\s+/g, " ").trim();
        if (extra) cur.Description = `${cur.Description} ${extra}`.trim();
      }
    }
  }
  if (cur) txns.push(cur);

  const openingSeed = txns.find((t) => t.Description === "__OPENING__");
  const realTxns = txns.filter((t) => t.Description !== "__OPENING__");
  const lastBal = realTxns.length ? realTxns[realTxns.length - 1].Balance : "";
  const closing = closingBalance !== "" ? closingBalance : lastBal;
  return {
    txns: realTxns,
    schema,
    openingBalance: openingSeed?.Balance ?? "",
    closingBalance: closing,
  };
}

/** Signed movement for a txn. `flip` inverts a single signed-amount column when
 * the negative=outflow guess was wrong. */
function movement(t: PdfTxn, schema: Schema, flip: boolean): number | null {
  if (schema === "debitCredit") {
    const d = t.Debit === "" ? 0 : Math.abs(t.Debit as number);
    const c = t.Credit === "" ? 0 : Math.abs(t.Credit as number);
    if (d === 0 && c === 0) return null;
    return c - d; // credit in, debit out
  }
  if (t.Amount === "") return null;
  return (flip ? -1 : 1) * (t.Amount as number);
}

/** Verify prev +/- movement = balance down the file. Returns pass ratio.
 * openingBalance, when known, seeds the check so the FIRST transaction is
 * validated too. */
function verifyContinuity(
  txns: PdfTxn[],
  schema: Schema,
  flip: boolean,
  openingBalance: number | "" = ""
): number {
  let ok = 0, checked = 0;
  let prevBal: number | "" = openingBalance;
  for (let i = 0; i < txns.length; i++) {
    const bal = txns[i].Balance;
    const mv = movement(txns[i], schema, flip);
    if (prevBal !== "" && bal !== "" && mv !== null) {
      checked++;
      if (Math.abs((prevBal as number) + mv - (bal as number)) < 0.02) ok++;
    }
    if (bal !== "") prevBal = bal;
  }
  return checked === 0 ? 0 : ok / checked;
}

async function parsePdf(buffer: ArrayBuffer): Promise<ParsedFile> {
  // Backstop for a direct server-side call. pdfjs needs browser APIs
  // (DOMMatrix); the page converts a PDF to .xlsx before submit, so the
  // server never reaches this branch. MUST stay inside the function.
  if (typeof window === "undefined") {
    throw new Error("PDF parsing runs in the browser only.");
  }

  const lines = await extractPdfLines(buffer);
  const textVolume = lines.reduce((n, l) => n + l.text.length, 0);
  if (textVolume < 200) {
    throw new Error(
      "This looks like a scanned or photographed PDF, which we can't read reliably. " +
        "Please upload the Excel or CSV export your bank offers alongside the PDF."
    );
  }

  const detected = detectColumns(lines);
  if (!detected) {
    throw new Error(
      "We couldn't find a transaction table with recognizable column headers in this PDF. " +
        "Please upload the Excel or CSV export instead."
    );
  }

  const { txns, schema, openingBalance, closingBalance } = buildTxns(lines, detected.headerIndex, detected.cols);
  const real = txns.filter((t) => t.Balance !== "" || t.Debit !== "" || t.Credit !== "" || t.Amount !== "");
  if (real.length < 2) {
    throw new Error(
      "We couldn't read the transactions in this PDF reliably. Please upload the Excel or CSV export instead."
    );
  }

  // Statements arrive newest-first or oldest-first, and a single signed-amount
  // column may use either sign for outflow. The continuity check assumes
  // oldest-first. Try both orders (and both sign interpretations for
  // signedAmount); keep whichever reconciles, and emit rows chronologically so
  // a descending statement isn't misread as unverified.
  const flips = schema === "signedAmount" ? [false, true] : [false];
  let flip = false;
  let confidence = -1;
  let reversed = false;
  for (const rev of [false, true]) {
    const seq = rev ? [...real].reverse() : real;
    for (const fl of flips) {
      const c = verifyContinuity(seq, schema, fl, rev ? "" : openingBalance);
      if (c > confidence) { confidence = c; flip = fl; reversed = rev; }
    }
  }
  const ordered = reversed ? [...real].reverse() : real;

  const verified = confidence >= 0.9; // allow a stray footer/subtotal row
  // NOTE: per product decision, an UNVERIFIED parse is NOT auto-imported. It is
  // surfaced with rows shown so the user can confirm or override. The page reads
  // balanceVerified to decide whether to show that override UI.

  // Emit canonical columns for the detected schema so the mapping step only
  // offers columns that exist.
  const headers =
    schema === "signedAmount"
      ? ["Date", "Description", "Amount", "Balance"]
      : ["Date", "Description", "Debit", "Credit", "Balance"];

  const rows = ordered.map((t) => {
    const o: Record<string, unknown> = { Date: t.Date, Description: t.Description, Balance: t.Balance };
    if (schema === "signedAmount") {
      o.Amount = t.Amount === "" ? "" : flip ? -(t.Amount as number) : t.Amount;
    } else {
      o.Debit = t.Debit;
      o.Credit = t.Credit;
    }
    return o;
  });

  // Only surface balances when the parse VERIFIED against the running balance.
  // If the rows didn't reconcile, balances read from the same file are equally
  // untrustworthy - leave them out and let the user type them.
  return {
    headers,
    rows,
    balanceVerified: verified,
    detectedOpeningBalance: verified && openingBalance !== "" ? (openingBalance as number) : undefined,
    detectedClosingBalance: verified && closingBalance !== "" ? (closingBalance as number) : undefined,
  };
}

// ---------------------------------------------------------------------------
// Entry point - same signature and ParsedFile shape as before, so nothing
// downstream (guessMapping, applyMapping, the API route) changes.
// ---------------------------------------------------------------------------

export async function parseUpload(buffer: ArrayBuffer, filename: string): Promise<ParsedFile> {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".csv") || lower.endsWith(".tsv") || lower.endsWith(".txt")) return parseCsv(buffer);
  if (lower.endsWith(".xlsx") || lower.endsWith(".xls") || lower.endsWith(".xlsm")) return parseExcel(buffer);
  if (lower.endsWith(".pdf")) return parsePdf(buffer);
  throw new Error(`Unsupported file type: ${filename}. Upload a .xlsx, .xls, .csv, or .pdf file.`);
}