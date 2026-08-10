"use client";

// app/tools/finance-tools/reconciliation/[type]/ReconciliationClient.tsx
//
// The shared reconciliation UI for all four types. All type-specific
// wording (labels, balance hints, amount-direction questions) comes from
// the ReconType object passed in by the server wrapper. Switching type in
// the selector navigates to the sibling route, which remounts this
// component - entered balances and uploaded files intentionally reset,
// since they belong to a specific reconciliation type.
//
// PDF handling note: pdfjs cannot run on the server (no DOM / DOMMatrix).
// So a PDF is parsed ONLY in the browser (in loadFile), and at submit time
// its parsed rows are rebuilt into an .xlsx blob that is sent to the API in
// place of the PDF. The server therefore never receives a PDF and never
// loads pdfjs - it just parses a spreadsheet like any other upload.

import { useState, useCallback, useRef, DragEvent } from "react";
import Link from "next/link";
import * as XLSX from "xlsx";
import { parseUpload } from "../../../../../lib/bank-reconciliation/parseFile";
import { guessMapping } from "../../../../../lib/bank-reconciliation/mapping";
import {
  inferDateOrder,
  makeDateParser,
  parseAmountDetailed,
  type DateOrder,
  type InferredOrder,
} from "../../../../../lib/bank-reconciliation/parsing";
import { RECON_TYPES, type ReconType } from "../../../../../lib/bank-reconciliation/reconTypes";
import type { ColumnMapping } from "../../../../../lib/bank-reconciliation/types";

// Kept in sync with the server-side check in app/api/bank-reconciliation/route.ts -
// change both together. 3MB per file leaves headroom under Vercel's 4.5MB
// combined request-body limit (two files + the mapping JSON in one request).
const MAX_FILE_SIZE_BYTES = 3 * 1024 * 1024;
const MAX_FILE_SIZE_LABEL = "3 MB";
// PDFs are converted to a small .xlsx in the browser before submit, so the
// raw PDF is never sent - it can be larger than the request-body limit.
const MAX_PDF_SIZE_BYTES = 15 * 1024 * 1024;
const MAX_PDF_SIZE_LABEL = "15 MB";

// Rows kept in memory per file for date-order inference. A statement with
// 500 rows and no day above 12 does not exist in practice, so this is
// plenty for inference while keeping state small.
const INFERENCE_SAMPLE_ROWS = 500;

const DATE_ORDER_OPTIONS: { value: DateOrder; label: string }[] = [
  { value: "DMY", label: "DD-MM-YYYY (day first)" },
  { value: "MDY", label: "MM-DD-YYYY (month first)" },
  { value: "YMD", label: "YYYY-MM-DD (year, month, day)" },
  { value: "YDM", label: "YYYY-DD-MM (year, day, month)" },
];

function isPdfName(name: string): boolean {
  return name.toLowerCase().endsWith(".pdf");
}

interface FileSlot {
  file: File | null;
  isPdf: boolean;
  // For PDFs only: every parsed row + the header order, kept so we can
  // rebuild an .xlsx blob at submit time. null for Excel/CSV, whose
  // original File is re-parsed by the server directly.
  allRows: Record<string, unknown>[] | null;
  headers: string[];
  headerWarning: string | null; // set when row 1 doesn't look like real headers
  balanceVerified: boolean;      // PDF running-balance self-check passed
  sampleRow: Record<string, unknown> | null;
  sampleRows: Record<string, unknown>[]; // for date-order inference
  dateCol: string;
  dateOrderOverride: DateOrder | ""; // user's choice when inference is ambiguous
  descriptionCol: string;
  referenceCol: string; // "" = none
  amountMode: "single" | "inOut" | "";
  amountCol: string;
  flipSign: boolean;
  moneyInCol: string;
  moneyOutCol: string;
  debitCreditCandidates: [string, string] | null;
  debitMeansIn: boolean | null; // null = not yet answered
}

const EMPTY_SLOT: FileSlot = {
  file: null,
  isPdf: false,
  allRows: null,
  headers: [],
  headerWarning: null,
  balanceVerified: false,
  sampleRow: null,
  sampleRows: [],
  dateCol: "",
  dateOrderOverride: "",
  descriptionCol: "",
  referenceCol: "",
  amountMode: "",
  amountCol: "",
  flipSign: false,
  moneyInCol: "",
  moneyOutCol: "",
  debitCreditCandidates: null,
  debitMeansIn: null,
};

/** Detect a file whose first row is probably NOT the header row: SheetJS
 * fills missing headers with "__EMPTY..." keys, and a title row or an
 * opening-balance line produces blank, numeric, or date-like "headers".
 * Shown as a warning, not a block - the user may still map manually. */
function headerWarningFor(headers: string[], guess: Partial<ColumnMapping>): string | null {
  const suspicious = headers.filter(
    (h) => !h || /^__empty/i.test(h) || /^column ?\d+$/i.test(h) || /^[\d.,/\s-]+$/.test(h.trim())
  ).length;
  if (suspicious >= Math.max(2, headers.length / 2) || (!guess.dateCol && !guess.descriptionCol)) {
    return (
      "These column names don't look like real headers. The FIRST row of the file must be the " +
      "header row (Date, Description, Amount…). If row 1 is a title, a blank row, or an " +
      "opening-balance line, delete it in Excel and upload the file again."
    );
  }
  return null;
}

async function loadFile(file: File): Promise<Partial<FileSlot> & {
  detectedOpeningBalance?: number;
  detectedClosingBalance?: number;
}> {
  const parsed = await parseUpload(await file.arrayBuffer(), file.name);
  const { headers, rows } = parsed;
  const pdf = isPdfName(file.name);
  const guess = guessMapping(headers) as Partial<ColumnMapping> & {
    _debitCreditCandidates?: [string, string];
  };
  return {
    file,
    isPdf: pdf,
    allRows: pdf ? rows : null,
    headers,
    headerWarning: pdf && parsed.balanceVerified ? null : headerWarningFor(headers, guess),
    balanceVerified: !!parsed.balanceVerified,
    detectedOpeningBalance: parsed.detectedOpeningBalance,
    detectedClosingBalance: parsed.detectedClosingBalance,
    sampleRow: rows[0] ?? null,
    sampleRows: rows.slice(0, INFERENCE_SAMPLE_ROWS),
    dateCol: guess.dateCol ?? "",
    dateOrderOverride: "",
    descriptionCol: guess.descriptionCol ?? "",
    referenceCol: guess.referenceCol ?? "",
    amountMode: guess.amountMode ?? "",
    amountCol: guess.amountCol ?? "",
    moneyInCol: guess.moneyInCol ?? "",
    moneyOutCol: guess.moneyOutCol ?? "",
    debitCreditCandidates: guess._debitCreditCandidates ?? null,
    debitMeansIn: null,
  };
}

/** Build the File actually sent to the server. Excel/CSV go as-is. A PDF is
 * rebuilt from its parsed rows into an .xlsx blob, so the server never sees
 * a PDF (pdfjs can't run there) and just parses a spreadsheet. */
function fileForSubmit(slot: FileSlot): File {
  if (slot.isPdf && slot.allRows) {
    const ws = XLSX.utils.json_to_sheet(slot.allRows, { header: slot.headers });
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Statement");
    const out = XLSX.write(wb, { type: "array", bookType: "xlsx" }) as ArrayBuffer;
    const blob = new Blob([out], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    const base = (slot.file?.name ?? "statement").replace(/\.pdf$/i, "");
    return new File([blob], `${base}.xlsx`, { type: blob.type });
  }
  return slot.file!;
}

function inferredOrderFor(slot: FileSlot): InferredOrder | "" {
  if (!slot.dateCol || slot.sampleRows.length === 0) return "";
  return inferDateOrder(slot.sampleRows.map((r) => r[slot.dateCol]));
}

function needsDateFormat(slot: FileSlot): boolean {
  return !!slot.file && inferredOrderFor(slot) === "AMBIGUOUS" && !slot.dateOrderOverride;
}

/** Runs the real date parser over the sample rows so unreadable dates are
 * flagged in the browser BEFORE generating, not discovered at the bottom
 * of the Excel output afterwards. Blank cells don't count as failures -
 * exports often end with empty footer rows. */
function dateIssuesFor(slot: FileSlot): { failed: number; total: number; example: string } | null {
  if (!slot.file || !slot.dateCol || needsDateFormat(slot)) return null;
  const toDate = makeDateParser(resolvedDateOrder(slot) ?? "DMY");
  let failed = 0;
  let total = 0;
  let example = "";
  for (const r of slot.sampleRows) {
    const raw = r[slot.dateCol];
    if (raw == null || String(raw).trim() === "") continue;
    total++;
    if (!toDate(raw)) {
      failed++;
      if (!example) example = String(raw);
    }
  }
  return failed > 0 ? { failed, total, example } : null;
}

function resolvedDateOrder(slot: FileSlot): DateOrder | undefined {
  const inferred = inferredOrderFor(slot);
  if (inferred === "AMBIGUOUS") return slot.dateOrderOverride || undefined;
  if (inferred === "NO_TEXT_DATES" || inferred === "") return undefined;
  return inferred;
}

function columnsReady(slot: FileSlot): boolean {
  if (!slot.file || !slot.dateCol || !slot.descriptionCol) return false;
  // Debit/Credit path: once debitMeansIn is answered, the mapping is fully
  // resolvable (toColumnMapping derives moneyInCol/moneyOutCol from it at
  // submit time) - don't fall through to the generic amountMode checks
  // below, which test moneyInCol/moneyOutCol directly and are never
  // populated on this path, only debitMeansIn is.
  if (slot.debitCreditCandidates) return slot.debitMeansIn !== null;
  if (slot.amountMode === "single") return !!slot.amountCol;
  // Any other state - INCLUDING amountMode "" when nothing was auto-guessed
  // (e.g. Arabic or unrecognized headers) - renders the In/Out selects, so
  // readiness must track those selects. Requiring amountMode === "inOut"
  // here dead-ended such files: the user picked both columns manually and
  // the Generate button still never enabled, with no way to fix it.
  return !!slot.moneyInCol && !!slot.moneyOutCol;
}

function isReady(slot: FileSlot): boolean {
  return columnsReady(slot) && !needsDateFormat(slot);
}

function toColumnMapping(slot: FileSlot): ColumnMapping {
  const dateOrder = resolvedDateOrder(slot);
  if (slot.debitCreditCandidates) {
    const [debitCol, creditCol] = slot.debitCreditCandidates;
    return {
      dateCol: slot.dateCol,
      dateOrder,
      descriptionCol: slot.descriptionCol,
      referenceCol: slot.referenceCol || undefined,
      amountMode: "inOut",
      moneyInCol: slot.debitMeansIn ? debitCol : creditCol,
      moneyOutCol: slot.debitMeansIn ? creditCol : debitCol,
    };
  }
  if (slot.amountMode === "single") {
    return {
      dateCol: slot.dateCol,
      dateOrder,
      descriptionCol: slot.descriptionCol,
      referenceCol: slot.referenceCol || undefined,
      amountMode: "single",
      amountCol: slot.amountCol,
      amountSign: slot.flipSign ? -1 : 1,
    };
  }
  return {
    dateCol: slot.dateCol,
    dateOrder,
    descriptionCol: slot.descriptionCol,
    referenceCol: slot.referenceCol || undefined,
    amountMode: "inOut",
    moneyInCol: slot.moneyInCol,
    moneyOutCol: slot.moneyOutCol,
  };
}

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

/** Signed amounts (integer cents) of the sample rows under the current
 * mapping - a lightweight client-side mirror of applyMapping's amount
 * logic, used only for the opposite-sign detector below. */
function slotAmountsCents(slot: FileSlot): number[] {
  const m = toColumnMapping(slot);
  const cell = (v: unknown): number | null => {
    if (v == null || String(v).trim() === "") return 0;
    const p = parseAmountDetailed(v);
    if (p.value === null) return null;
    if (p.drcr) return (p.drcr === "DR" ? -1 : 1) * Math.abs(p.value);
    return p.value;
  };
  const out: number[] = [];
  for (const r of slot.sampleRows) {
    let a: number | null;
    if (m.amountMode === "single") {
      const v = cell(r[m.amountCol!]);
      a = v === null ? null : v * (m.amountSign ?? 1);
    } else {
      const i = cell(r[m.moneyInCol!]);
      const o = cell(r[m.moneyOutCol!]);
      a = i === null || o === null ? null : i - o;
    }
    if (a !== null && a !== 0) out.push(Math.round(a * 100));
  }
  return out;
}

/** Detects the classic killer of supplier/customer/intercompany recons:
 * the two files use OPPOSITE sign conventions (one ledger records
 * increases as positive, the other as negative), so every real
 * counterpart is invisible to the matcher and amounts pair up with
 * unrelated transactions instead. Warned here, before generation. */
function mirrorSignWarning(theirSlot: FileSlot, ourSlot: FileSlot): boolean {
  if (!columnsReady(theirSlot) || !columnsReady(ourSlot)) return false;
  const a = slotAmountsCents(theirSlot);
  const bList = slotAmountsCents(ourSlot);
  if (a.length < 4 || bList.length < 4) return false;
  const same = new Set(bList);
  const mirror = new Set(bList.map((x) => -x));
  let sameHits = 0;
  let mirrorHits = 0;
  for (const x of a) {
    if (same.has(x)) sameHits++;
    if (mirror.has(x)) mirrorHits++;
  }
  return mirrorHits >= 4 && mirrorHits > sameHits * 2;
}

// ---------------- Type selector: links to the sibling routes ----------------
function TypeSelector({ current }: { current: ReconType }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {Object.values(RECON_TYPES).map((t) => (
        <Link
          key={t.id}
          href={`/tools/finance-tools/reconciliation/${t.id}`}
          className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
            t.id === current.id
              ? "bg-teal-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700"
          }`}
        >
          {t.displayName.replace(" Reconciliation", "")}
        </Link>
      ))}
    </div>
  );
}

// ---------------- Dropzone: drag-and-drop + a "Choose file" fallback ----------------
function Dropzone({
  label,
  hint,
  file,
  onFile,
}: {
  label: string;
  hint: string;
  file: File | null;
  onFile: (file: File) => void;
}) {
  const [isDragging, setIsDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setIsDragging(false);
      const dropped = e.dataTransfer.files?.[0];
      if (dropped) onFile(dropped);
    },
    [onFile]
  );

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-900 mb-1">{label}</label>
      <p className="text-xs text-gray-500 mb-2">{hint}</p>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={`rounded-xl border-2 border-dashed p-6 text-center cursor-pointer transition-all ${
          isDragging
            ? "border-teal-500 bg-teal-50"
            : file
            ? "border-teal-200 bg-teal-50/40"
            : "border-gray-200 bg-gray-50 hover:border-teal-300 hover:bg-teal-50/40"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls,.csv,.pdf"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) onFile(f);
            e.target.value = ""; // allow re-selecting the same file after an error
          }}
        />
        {file ? (
          <>
            <div className="text-2xl mb-1">✅</div>
            <p className="text-sm font-semibold text-gray-800">{file.name}</p>
            <p className="text-xs text-gray-500 mt-0.5">{formatBytes(file.size)} — click or drop to replace</p>
          </>
        ) : (
          <>
            <div className="text-2xl mb-1">📄</div>
            <p className="text-sm font-semibold text-gray-700">Drag and drop your file here</p>
            <p className="text-xs text-gray-500 mt-1">
              or <span className="text-teal-600 font-semibold">choose a file</span> — .xlsx, .xls, .csv, or .pdf
            </p>
          </>
        )}
      </div>
    </div>
  );
}

function ColumnMappingForm({
  label,
  slot,
  rt,
  onChange,
}: {
  label: string;
  slot: FileSlot;
  rt: ReconType;
  onChange: (patch: Partial<FileSlot>) => void;
}) {
  if (!slot.file) return null;
  const inferred = inferredOrderFor(slot);
  const dateIssues = dateIssuesFor(slot);
  const dir = rt.amountDirection;
  const opts = (extra?: string) => (
    <>
      <option value="">-- select --</option>
      {extra && <option value="">None</option>}
      {slot.headers.map((h) => (
        <option key={h} value={h}>
          {h}
        </option>
      ))}
    </>
  );

  const selectClass =
    "block w-full mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500";
  const labelClass = "block text-sm font-semibold text-gray-700 mb-3";

  return (
    <div className="mt-3 p-4 rounded-xl border border-gray-100 shadow-sm bg-white">
      <h3 className="font-semibold text-gray-900 mb-3">{label}: confirm columns</h3>

      {slot.isPdf && slot.balanceVerified && (
        <div className="rounded-lg bg-teal-50 border border-teal-200 p-3 mb-3 text-sm text-teal-800">
          ✓ Read from PDF and verified against the running balance. Please still confirm the columns below.
        </div>
      )}

      {slot.headerWarning && (
        <div className="rounded-lg bg-amber-50 border border-amber-300 p-3 mb-3 text-sm text-amber-900">
          ⚠️ {slot.headerWarning}
        </div>
      )}

      <label className={labelClass}>
        Date column
        <select
          className={selectClass}
          value={slot.dateCol}
          onChange={(e) => onChange({ dateCol: e.target.value, dateOrderOverride: "" })}
        >
          {opts()}
        </select>
      </label>

      {inferred === "AMBIGUOUS" && (
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 mb-3">
          <p className="text-sm text-gray-700 mb-2">
            The dates in this file (e.g.{" "}
            <span className="font-mono">{String(slot.sampleRow?.[slot.dateCol] ?? "")}</span>) could be read more
            than one way, because every date has both day and month of 12 or less. Please confirm the format used:
          </p>
          <select
            className={selectClass}
            value={slot.dateOrderOverride}
            onChange={(e) => onChange({ dateOrderOverride: e.target.value as DateOrder | "" })}
          >
            <option value="">-- select date format --</option>
            {DATE_ORDER_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {dateIssues && (
        <div className="rounded-lg bg-amber-50 border border-amber-300 p-3 mb-3 text-sm text-amber-900">
          ⚠️ {dateIssues.failed} of {dateIssues.total} rows have a date that can&apos;t be read (e.g.{" "}
          <span className="font-mono">{dateIssues.example}</span>). Those rows will be excluded from matching
          and listed in the report. Check that the right Date column is selected above, or fix the dates in the
          file and upload it again.
        </div>
      )}

      <label className={labelClass}>
        Description column
        <select
          className={selectClass}
          value={slot.descriptionCol}
          onChange={(e) => onChange({ descriptionCol: e.target.value })}
        >
          {opts()}
        </select>
      </label>

      <label className={labelClass}>
        Reference / invoice / cheque number column (optional)
        <select
          className={selectClass}
          value={slot.referenceCol}
          onChange={(e) => onChange({ referenceCol: e.target.value })}
        >
          {opts("none")}
        </select>
      </label>

      {slot.debitCreditCandidates ? (
        <div className="rounded-lg bg-amber-50 border border-amber-200 p-4 mt-2">
          <p className="text-sm text-gray-700 mb-2">
            This file has separate <strong>{slot.debitCreditCandidates[0]}</strong> and{" "}
            <strong>{slot.debitCreditCandidates[1]}</strong> columns. In the first row of your file:
          </p>
          <p className="text-sm font-mono text-gray-600 mb-3">
            {slot.debitCreditCandidates[0]} = {String(slot.sampleRow?.[slot.debitCreditCandidates[0]] ?? "(blank)")}
            {"  |  "}
            {slot.debitCreditCandidates[1]} = {String(slot.sampleRow?.[slot.debitCreditCandidates[1]] ?? "(blank)")}
          </p>
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Does <strong>{slot.debitCreditCandidates[0]}</strong> {dir.questionSuffix}
          </p>
          <label className="inline-flex items-center gap-2 mr-6 text-sm text-gray-700">
            <input
              type="radio"
              className="accent-teal-600"
              checked={slot.debitMeansIn === true}
              onChange={() => onChange({ debitMeansIn: true })}
            />
            {slot.debitCreditCandidates[0]} = {dir.inRadio}
          </label>
          <label className="inline-flex items-center gap-2 text-sm text-gray-700">
            <input
              type="radio"
              className="accent-teal-600"
              checked={slot.debitMeansIn === false}
              onChange={() => onChange({ debitMeansIn: false })}
            />
            {slot.debitCreditCandidates[0]} = {dir.outRadio}
          </label>
        </div>
      ) : slot.amountMode === "single" ? (
        <>
          <label className={labelClass}>
            Amount column
            <select
              className={selectClass}
              value={slot.amountCol}
              onChange={(e) => onChange({ amountCol: e.target.value })}
            >
              {opts()}
            </select>
          </label>
          <label className="flex items-center gap-2 text-sm text-gray-700 font-medium">
            <input
              type="checkbox"
              className="accent-teal-600"
              checked={slot.flipSign}
              onChange={(e) => onChange({ flipSign: e.target.checked })}
            />
            {dir.flipSignLabel}
          </label>
        </>
      ) : (
        <>
          <label className={labelClass}>
            {dir.moneyInSelect}
            <select
              className={selectClass}
              value={slot.moneyInCol}
              onChange={(e) => onChange({ moneyInCol: e.target.value, amountMode: "inOut" })}
            >
              {opts()}
            </select>
          </label>
          <label className={labelClass}>
            {dir.moneyOutSelect}
            <select
              className={selectClass}
              value={slot.moneyOutCol}
              onChange={(e) => onChange({ moneyOutCol: e.target.value, amountMode: "inOut" })}
            >
              {opts()}
            </select>
          </label>
        </>
      )}
    </div>
  );
}

export default function ReconciliationClient({ rt }: { rt: ReconType }) {
  const [bankOpening, setBankOpening] = useState(""); // "their" side
  const [bankClosing, setBankClosing] = useState("");
  const [bookOpening, setBookOpening] = useState(""); // "our" side
  const [bookClosing, setBookClosing] = useState("");
  const [bank, setBank] = useState<FileSlot>(EMPTY_SLOT);
  const [book, setBook] = useState<FileSlot>(EMPTY_SLOT);
  const [periodLabel, setPeriodLabel] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // Which balance boxes were auto-filled from a statement (for the "confirm"
  // hint). Cleared for a field as soon as the user edits it by hand.
  const [autoFilled, setAutoFilled] = useState<Set<string>>(new Set());

  const balancesReady =
    bankOpening !== "" && bankClosing !== "" && bookOpening !== "" && bookClosing !== "" &&
    !isNaN(Number(bankOpening)) && !isNaN(Number(bankClosing)) &&
    !isNaN(Number(bookOpening)) && !isNaN(Number(bookClosing));

  const handleFile = useCallback(async (which: "bank" | "book", file: File | null) => {
    if (!file) return;
    setError(null);

    const pdf = isPdfName(file.name);
    const limit = pdf ? MAX_PDF_SIZE_BYTES : MAX_FILE_SIZE_BYTES;
    const limitLabel = pdf ? MAX_PDF_SIZE_LABEL : MAX_FILE_SIZE_LABEL;
    if (file.size > limit) {
      setError(
        `"${file.name}" is ${formatBytes(file.size)}, which is over the ${limitLabel} limit. ` +
          `Try exporting a shorter date range (e.g. one quarter instead of a full year) and upload that instead.`
      );
      return;
    }

    const setter = which === "bank" ? setBank : setBook;
    try {
      const patch = await loadFile(file);
      setter({ ...EMPTY_SLOT, ...patch });

      // Prefill balances the parser read and VERIFIED from this statement,
      // into the matching side's boxes. Marked "auto-filled, confirm" and
      // fully editable - never silently trusted, since they drive the
      // tie-out check. Only fills a box that's currently empty, so we don't
      // overwrite a figure the user already typed.
      const openStr =
        patch.detectedOpeningBalance != null ? String(patch.detectedOpeningBalance) : "";
      const closeStr =
        patch.detectedClosingBalance != null ? String(patch.detectedClosingBalance) : "";
      if (openStr || closeStr) {
        const filled = new Set(autoFilled);
        if (which === "bank") {
          if (openStr && bankOpening === "") { setBankOpening(openStr); filled.add("bankOpening"); }
          if (closeStr && bankClosing === "") { setBankClosing(closeStr); filled.add("bankClosing"); }
        } else {
          if (openStr && bookOpening === "") { setBookOpening(openStr); filled.add("bookOpening"); }
          if (closeStr && bookClosing === "") { setBookClosing(closeStr); filled.add("bookClosing"); }
        }
        setAutoFilled(filled);
      }
    } catch (e) {
      // parseFile throws friendly messages for scanned or unverifiable PDFs.
      setter(EMPTY_SLOT);
      setError(e instanceof Error ? e.message : "Could not read that file.");
    }
  }, [autoFilled, bankOpening, bankClosing, bookOpening, bookClosing]);

  const canSubmit = balancesReady && isReady(bank) && isReady(book) && !busy;

  const handleSubmit = async () => {
    if (!bank.file || !book.file) return;
    setBusy(true);
    setError(null);
    try {
      const form = new FormData();
      form.set("reconType", rt.id);
      // PDFs are converted to .xlsx here so the server never receives a PDF.
      form.set("bankFile", fileForSubmit(bank));
      form.set("bookFile", fileForSubmit(book));
      form.set("bankMapping", JSON.stringify(toColumnMapping(bank)));
      form.set("bookMapping", JSON.stringify(toColumnMapping(book)));
      form.set("periodLabel", periodLabel);
      form.set("bankOpeningBalance", bankOpening);
      form.set("bankClosingBalance", bankClosing);
      form.set("bookOpeningBalance", bookOpening);
      form.set("bookClosingBalance", bookClosing);

      const res = await fetch("/api/bank-reconciliation", { method: "POST", body: form });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || `Request failed (${res.status})`);
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = rt.outputFilename;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-3xl font-black text-gray-900 mb-2">{rt.displayName}</h1>
      <p className="text-gray-600 mb-6">
        Upload your {rt.theirLabel.toLowerCase()} and your {rt.ourLabel.toLowerCase()}. Nothing is stored —
        files are processed in memory and the result comes back as a download.
      </p>

      <TypeSelector current={rt} />

      {/* ---------------- How to use this ---------------- */}
      <div className="rounded-xl border border-gray-100 bg-gray-50 p-5 mb-8">
        <h2 className="text-sm font-bold text-gray-900 mb-3">How this works</h2>
        <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
          <li>
            <strong>Have both documents open</strong> — your {rt.theirLabel.toLowerCase()} and your{" "}
            {rt.ourLabel.toLowerCase()}, covering the same date range — and enter the four balance figures below
            exactly as shown on each.
          </li>
          <li>
            <strong>Export two files</strong> from the same documents: one for each side, from your bank or the
            other party&apos;s statement and from your accounting software or spreadsheet.
          </li>
          <li>
            <strong>Upload both below.</strong> Accepted formats: <code className="text-xs bg-white border border-gray-200 rounded px-1 py-0.5">.xlsx</code>,{" "}
            <code className="text-xs bg-white border border-gray-200 rounded px-1 py-0.5">.xls</code>,{" "}
            <code className="text-xs bg-white border border-gray-200 rounded px-1 py-0.5">.csv</code>, or{" "}
            <code className="text-xs bg-white border border-gray-200 rounded px-1 py-0.5">.pdf</code>. For
            spreadsheets, <strong>the first row must be the column headers</strong> (Date, Description, Amount,
            etc.) — not a title, a blank row, or an opening-balance line. PDF bank statements are read
            automatically and checked against the running balance; if we can&apos;t read one reliably we&apos;ll ask
            for the Excel or CSV export instead.
          </li>
          <li>
            <strong>Confirm the columns</strong> for each file once it&apos;s uploaded. Most of this gets guessed
            automatically; you just confirm it&apos;s right.
          </li>
          <li>
            <strong>Click Generate.</strong> You&apos;ll get an Excel file back with a reconciliation statement — including a
            tie-out check against the opening/closing balances you entered — a side-by-side comparison, and the full
            detail. Nothing is saved on our end.
          </li>
        </ol>
      </div>

      {/* ---------------- Balances - collected before the files ---------------- */}
      <div className="rounded-xl border border-gray-100 bg-white shadow-sm p-5 mb-8">
        <h2 className="text-sm font-bold text-gray-900 mb-1">Balances</h2>
        <p className="text-xs text-gray-500 mb-4">
          Type these in from your actual documents — don&apos;t rely on us guessing them from the files.
          They&apos;re also used to double-check the uploaded transactions actually add up to the closing balance
          on each side.
        </p>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-4">
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-1">{rt.theirLabel}</p>
            <p className="text-xs text-gray-500 mb-2">{rt.theirBalanceHint}</p>
            <label className="block text-sm text-gray-700 mb-2">
              Opening balance
              {autoFilled.has("bankOpening") && (
                <span className="ml-2 text-xs font-medium text-teal-600">auto-filled — please confirm</span>
              )}
              <input
                type="number"
                step="0.01"
                value={bankOpening}
                onChange={(e) => {
                  setBankOpening(e.target.value);
                  if (autoFilled.has("bankOpening"))
                    setAutoFilled((s) => { const n = new Set(s); n.delete("bankOpening"); return n; });
                }}
                className={`block w-full mt-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                  autoFilled.has("bankOpening") ? "border-teal-300 bg-teal-50/40" : "border-gray-200"
                }`}
              />
            </label>
            <label className="block text-sm text-gray-700">
              Closing balance
              {autoFilled.has("bankClosing") && (
                <span className="ml-2 text-xs font-medium text-teal-600">auto-filled — please confirm</span>
              )}
              <input
                type="number"
                step="0.01"
                value={bankClosing}
                onChange={(e) => {
                  setBankClosing(e.target.value);
                  if (autoFilled.has("bankClosing"))
                    setAutoFilled((s) => { const n = new Set(s); n.delete("bankClosing"); return n; });
                }}
                className={`block w-full mt-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                  autoFilled.has("bankClosing") ? "border-teal-300 bg-teal-50/40" : "border-gray-200"
                }`}
              />
            </label>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-1">{rt.ourLabel}</p>
            <p className="text-xs text-gray-500 mb-2">{rt.ourBalanceHint}</p>
            <label className="block text-sm text-gray-700 mb-2">
              Opening balance
              {autoFilled.has("bookOpening") && (
                <span className="ml-2 text-xs font-medium text-teal-600">auto-filled — please confirm</span>
              )}
              <input
                type="number"
                step="0.01"
                value={bookOpening}
                onChange={(e) => {
                  setBookOpening(e.target.value);
                  if (autoFilled.has("bookOpening"))
                    setAutoFilled((s) => { const n = new Set(s); n.delete("bookOpening"); return n; });
                }}
                className={`block w-full mt-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                  autoFilled.has("bookOpening") ? "border-teal-300 bg-teal-50/40" : "border-gray-200"
                }`}
              />
            </label>
            <label className="block text-sm text-gray-700">
              Closing balance
              {autoFilled.has("bookClosing") && (
                <span className="ml-2 text-xs font-medium text-teal-600">auto-filled — please confirm</span>
              )}
              <input
                type="number"
                step="0.01"
                value={bookClosing}
                onChange={(e) => {
                  setBookClosing(e.target.value);
                  if (autoFilled.has("bookClosing"))
                    setAutoFilled((s) => { const n = new Set(s); n.delete("bookClosing"); return n; });
                }}
                className={`block w-full mt-1 rounded-lg border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 ${
                  autoFilled.has("bookClosing") ? "border-teal-300 bg-teal-50/40" : "border-gray-200"
                }`}
              />
            </label>
          </div>
        </div>
        {autoFilled.size > 0 && (
          <p className="mt-3 text-xs text-teal-700">
            Balances highlighted above were read from your uploaded statement. Check them against your document
            before generating — they drive the tie-out check.
          </p>
        )}
      </div>

      <label className="block text-sm font-semibold text-gray-700 mb-6">
        Period (shown on the statement, e.g. &quot;June 2026&quot;)
        <input
          type="text"
          value={periodLabel}
          onChange={(e) => setPeriodLabel(e.target.value)}
          className="block w-full mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
        />
      </label>

      <div className="rounded-lg bg-amber-50 border border-amber-300 p-4 mb-4 text-sm text-amber-900">
        <strong>Before uploading a spreadsheet:</strong> the first row of each file must be the column headers
        (Date, Description, Amount…). Delete any title rows, blank rows, or opening-balance lines above the header
        row — the opening and closing balances go in the boxes above, not inside the file. (PDF statements are
        handled automatically.)
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Dropzone
            label={rt.theirLabel}
            hint="The statement or export received from the other side."
            file={bank.file}
            onFile={(f) => handleFile("bank", f)}
          />
          <ColumnMappingForm label={rt.theirLabel} slot={bank} rt={rt} onChange={(p) => setBank((s) => ({ ...s, ...p }))} />
        </div>
        <div>
          <Dropzone
            label={rt.ourLabel}
            hint="Your own ledger for the same account."
            file={book.file}
            onFile={(f) => handleFile("book", f)}
          />
          <ColumnMappingForm label={rt.ourLabel} slot={book} rt={rt} onChange={(p) => setBook((s) => ({ ...s, ...p }))} />
        </div>
      </div>

      {error && (
        <p className="mt-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-3">{error}</p>
      )}

      {mirrorSignWarning(bank, book) && (
        <p className="mt-6 text-sm text-red-800 bg-red-50 border border-red-300 rounded-lg px-4 py-3">
          ⚠️ These two files appear to use <strong>opposite sign conventions</strong> — amounts on one side show
          up with the opposite sign on the other, so real counterparts will not match. Fix it on the side exported
          from your accounting system: tick the flip-sign checkbox (single amount column) or swap the answer to
          the direction question (Debit/Credit columns). Then enter that side&apos;s opening and closing balances
          as positive numbers too, so the balances follow the same direction as the transactions.
        </p>
      )}

      <button
        onClick={handleSubmit}
        disabled={!canSubmit}
        className={`mt-8 px-6 py-3 rounded-lg text-sm font-semibold transition-all ${
          canSubmit
            ? "bg-teal-600 text-white hover:bg-teal-700 cursor-pointer"
            : "bg-gray-100 text-gray-400 cursor-not-allowed"
        }`}
      >
        {busy ? "Generating…" : "Generate Reconciliation Report"}
      </button>

      {!canSubmit && !busy && (
        <p className="mt-2 text-xs text-gray-500">
          {(() => {
            const theirL = rt.theirLabel.toLowerCase();
            const ourL = rt.ourLabel.toLowerCase();
            const items = [
              !balancesReady && "enter all four balance figures",
              !bank.file && `upload the ${theirL}`,
              bank.file && !columnsReady(bank) && `finish confirming the ${theirL} columns`,
              needsDateFormat(bank) && `choose the ${theirL} date format`,
              !book.file && `upload the ${ourL}`,
              book.file && !columnsReady(book) && `finish confirming the ${ourL} columns`,
              needsDateFormat(book) && `choose the ${ourL} date format`,
            ].filter(Boolean);
            return items.length ? `Still needed: ${items.join(", ")}.` : null;
          })()}
        </p>
      )}

      {/* ---------------- Contact ---------------- */}
      <p className="mt-12 text-center text-sm text-gray-500">
        Found an issue or have a suggestion? We would love to hear from you at{" "}
        <a
          href="mailto:azlaneduforeveryone@gmail.com"
          className="font-medium text-teal-600 hover:underline"
        >
          azlaneduforeveryone@gmail.com
        </a>
        .
      </p>
    </main>
  );
}
