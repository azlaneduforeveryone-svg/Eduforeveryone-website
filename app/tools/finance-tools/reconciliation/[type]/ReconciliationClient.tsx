"use client";

// app/tools/finance-tools/reconciliation/[type]/ReconciliationClient.tsx
//
// The shared reconciliation UI for all four types. All type-specific
// wording (labels, balance hints, amount-direction questions) comes from
// the ReconType object passed in by the server wrapper. Switching type in
// the selector navigates to the sibling route, which remounts this
// component - entered balances and uploaded files intentionally reset,
// since they belong to a specific reconciliation type.

import { useState, useCallback, useRef, DragEvent } from "react";
import Link from "next/link";
import { parseUpload } from "../../../../../lib/bank-reconciliation/parseFile";
import { guessMapping } from "../../../../../lib/bank-reconciliation/mapping";
import {
  inferDateOrder,
  makeDateParser,
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

interface FileSlot {
  file: File | null;
  headers: string[];
  headerWarning: string | null; // set when row 1 doesn't look like real headers
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
  headers: [],
  headerWarning: null,
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

async function loadFile(file: File): Promise<Partial<FileSlot>> {
  const { headers, rows } = await parseUpload(await file.arrayBuffer(), file.name);
  const guess = guessMapping(headers) as Partial<ColumnMapping> & {
    _debitCreditCandidates?: [string, string];
  };
  return {
    file,
    headers,
    headerWarning: headerWarningFor(headers, guess),
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
          accept=".xlsx,.xls,.csv"
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
              or <span className="text-teal-600 font-semibold">choose a file</span> — .xlsx, .xls, or .csv, up to{" "}
              {MAX_FILE_SIZE_LABEL}
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

  const balancesReady =
    bankOpening !== "" && bankClosing !== "" && bookOpening !== "" && bookClosing !== "" &&
    !isNaN(Number(bankOpening)) && !isNaN(Number(bankClosing)) &&
    !isNaN(Number(bookOpening)) && !isNaN(Number(bookClosing));

  const handleFile = useCallback(async (which: "bank" | "book", file: File | null) => {
    if (!file) return;
    setError(null);

    if (file.size > MAX_FILE_SIZE_BYTES) {
      setError(
        `"${file.name}" is ${formatBytes(file.size)}, which is over the ${MAX_FILE_SIZE_LABEL} limit. ` +
          `Try exporting a shorter date range (e.g. one quarter instead of a full year) and upload that instead.`
      );
      return;
    }

    const setter = which === "bank" ? setBank : setBook;
    try {
      const patch = await loadFile(file);
      setter({ ...EMPTY_SLOT, ...patch });
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not read that file.");
    }
  }, []);

  const canSubmit = balancesReady && isReady(bank) && isReady(book) && !busy;

  const handleSubmit = async () => {
    if (!bank.file || !book.file) return;
    setBusy(true);
    setError(null);
    try {
      const form = new FormData();
      form.set("reconType", rt.id);
      form.set("bankFile", bank.file);
      form.set("bookFile", book.file);
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
            <code className="text-xs bg-white border border-gray-200 rounded px-1 py-0.5">.xls</code>, or{" "}
            <code className="text-xs bg-white border border-gray-200 rounded px-1 py-0.5">.csv</code>, each up to{" "}
            {MAX_FILE_SIZE_LABEL}. <strong>The first row of the file must be column headers</strong> (Date,
            Description, Amount, etc.) — not a title, a blank row, or an opening-balance line. If your export has
            anything above the actual header row, delete those rows before uploading.
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
              <input
                type="number"
                step="0.01"
                value={bankOpening}
                onChange={(e) => setBankOpening(e.target.value)}
                className="block w-full mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </label>
            <label className="block text-sm text-gray-700">
              Closing balance
              <input
                type="number"
                step="0.01"
                value={bankClosing}
                onChange={(e) => setBankClosing(e.target.value)}
                className="block w-full mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </label>
          </div>
          <div>
            <p className="text-xs font-semibold text-gray-600 mb-1">{rt.ourLabel}</p>
            <p className="text-xs text-gray-500 mb-2">{rt.ourBalanceHint}</p>
            <label className="block text-sm text-gray-700 mb-2">
              Opening balance
              <input
                type="number"
                step="0.01"
                value={bookOpening}
                onChange={(e) => setBookOpening(e.target.value)}
                className="block w-full mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </label>
            <label className="block text-sm text-gray-700">
              Closing balance
              <input
                type="number"
                step="0.01"
                value={bookClosing}
                onChange={(e) => setBookClosing(e.target.value)}
                className="block w-full mt-1 rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
              />
            </label>
          </div>
        </div>
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
        <strong>Before uploading:</strong> the first row of each file must be the column headers (Date,
        Description, Amount…). Delete any title rows, blank rows, or opening-balance lines above the header
        row — the opening and closing balances go in the boxes above, not inside the file.
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
