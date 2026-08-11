import ExcelJS from "exceljs";
import type { MatchedTxn } from "./types";
import type { ReconType } from "./reconTypes";
import { remarkFor } from "./remarks";
import type { UnparsedRow } from "./mapping";

const FONT = "Arial";
const STATUS_FILL: Record<string, string> = {
  Matched: "C6EFCE",
  "Split Match (verify)": "F8CBAD",
  Unmatched: "FFC7CE",
};
const HEADER_FILL = "305496";
const INPUT_FONT_COLOR = "0000FF"; // blue = hardcoded input, per standard model convention
const NOTE_FONT = { name: FONT, italic: true, size: 9, color: { argb: "FF808080" } } as const;
const CONTACT_TEXT =
  "If you encounter any issues or have suggestions for improvement, please contact us at azlaneduforeveryone@gmail.com";
const CONTACT_MAILTO = "mailto:azlaneduforeveryone@gmail.com";
const MAX_UNPARSED_LISTED = 25; // per side, so a garbage file can't bloat the summary sheet

function styleHeader(ws: ExcelJS.Worksheet, ncols: number) {
  const row = ws.getRow(1);
  for (let c = 1; c <= ncols; c++) {
    const cell = row.getCell(c);
    cell.font = { name: FONT, bold: true, color: { argb: "FFFFFFFF" } };
    cell.fill = { type: "pattern", pattern: "solid", fgColor: { argb: `FF${HEADER_FILL}` } };
    cell.alignment = { horizontal: "center", vertical: "middle" };
  }
  ws.views = [{ state: "frozen", ySplit: 1 }];
}

/** Green when a check cell computes to exactly 0, red otherwise - used for
 * every tie-out check in the statement (opening+movement vs. closing, and
 * the final theirs-vs-ours difference), so they all read the same way at a
 * glance. */
function addZeroCheckFormatting(ws: ExcelJS.Worksheet, cellRef: string) {
  ws.addConditionalFormatting({
    ref: cellRef,
    rules: [
      { type: "cellIs", operator: "equal", formulae: ["0"], style: { fill: { type: "pattern", pattern: "solid", bgColor: { argb: "FFC6EFCE" } } }, priority: 1 },
      { type: "cellIs", operator: "greaterThan", formulae: ["0"], style: { fill: { type: "pattern", pattern: "solid", bgColor: { argb: "FFFFC7CE" } } }, priority: 2 },
      { type: "cellIs", operator: "lessThan", formulae: ["0"], style: { fill: { type: "pattern", pattern: "solid", bgColor: { argb: "FFFFC7CE" } } }, priority: 3 },
    ],
  });
}

function writeDetailSheet(wb: ExcelJS.Workbook, name: string, txns: MatchedTxn[]) {
  const ws = wb.addWorksheet(name);
  ws.columns = [
    { header: "Date", key: "date", width: 14 },
    { header: "Description", key: "description", width: 45 },
    { header: "Reference", key: "reference", width: 18 },
    { header: "Amount", key: "amount", width: 14 },
    { header: "Match_Status", key: "status", width: 22 },
    { header: "Matched_With", key: "matchedWith", width: 45 },
    { header: "Seq_Code", key: "seqCode", width: 12 },
  ];
  for (const t of txns) {
    const row = ws.addRow({
      date: t.date,
      description: t.description,
      reference: t.reference ?? "",
      amount: t.amount,
      status: t.status,
      matchedWith: t.matchedWith,
      seqCode: t.seqCode,
    });
    row.getCell("date").numFmt = "yyyy-mm-dd";
    row.getCell("amount").numFmt = "#,##0.00;(#,##0.00)";
    const fill = STATUS_FILL[t.status] ?? STATUS_FILL["Split Match (verify)"];
    for (let c = 1; c <= 7; c++) {
      row.getCell(c).fill = { type: "pattern", pattern: "solid", fgColor: { argb: `FF${fill}` } };
      row.getCell(c).font = { name: FONT, size: 10 };
    }
  }
  styleHeader(ws, 7);
  ws.autoFilter = { from: "A1", to: "G1" };
  return ws;
}

function writeSideBySideSheet(
  wb: ExcelJS.Workbook,
  bookTxns: MatchedTxn[],
  bankTxns: MatchedTxn[],
  rt: ReconType
) {
  const ws = wb.addWorksheet(rt.compareSheetName);
  const headers = [
    `${rt.theirLabel} Date`,
    `${rt.theirLabel} Reference`,
    `${rt.theirLabel} Description`,
    `${rt.theirLabel} Amount`,
    "Amount Diff",
    "Matching Code",
    "Remarks",
    `${rt.ourLabel} Amount`,
    `${rt.ourLabel} Description`,
    `${rt.ourLabel} Reference`,
    `${rt.ourLabel} Date`,
  ];
  ws.addRow(headers);

  let rowNum = 1;
  const writeRow = (
    bank: MatchedTxn | null,
    book: MatchedTxn | null,
    matchCode: string,
    statusForFill: string,
    remarkOverride: string | null
  ) => {
    rowNum += 1;
    const row = ws.getRow(rowNum);
    row.getCell(1).value = bank?.date ?? null;
    row.getCell(1).numFmt = "yyyy-mm-dd";
    row.getCell(2).value = bank?.reference ?? "";
    row.getCell(3).value = bank?.description ?? "";
    row.getCell(4).value = bank ? bank.amount : null;
    row.getCell(4).numFmt = "#,##0.00;(#,##0.00)";
    row.getCell(5).value = { formula: `D${rowNum}-H${rowNum}` };
    row.getCell(5).numFmt = "#,##0.00;(#,##0.00)";
    row.getCell(6).value = matchCode;
    row.getCell(7).value = remarkOverride ?? (bank ? remarkFor(bank, "bank") : book ? remarkFor(book, "book") : "");
    row.getCell(8).value = book ? book.amount : null;
    row.getCell(8).numFmt = "#,##0.00;(#,##0.00)";
    row.getCell(9).value = book?.description ?? "";
    row.getCell(10).value = book?.reference ?? "";
    row.getCell(11).value = book?.date ?? null;
    row.getCell(11).numFmt = "yyyy-mm-dd";
    const fillColor = STATUS_FILL[statusForFill] ?? STATUS_FILL["Split Match (verify)"];
    for (let c = 1; c <= 11; c++) {
      row.getCell(c).fill = { type: "pattern", pattern: "solid", fgColor: { argb: `FF${fillColor}` } };
      row.getCell(c).font = { name: FONT, size: 10 };
    }
  };

  // Matched / Split Match groups first, aligned side by side
  const groupIds = new Set<number>();
  for (const t of bankTxns) if (t.matchGroupId != null) groupIds.add(t.matchGroupId);
  for (const t of bookTxns) if (t.matchGroupId != null) groupIds.add(t.matchGroupId);

  for (const gid of [...groupIds].sort((a, b) => a - b)) {
    const bankRows = bankTxns.filter((t) => t.matchGroupId === gid);
    const bookRows = bookTxns.filter((t) => t.matchGroupId === gid);
    const seqCode = bankRows[0]?.seqCode ?? bookRows[0]?.seqCode ?? "";
    const status = bankRows[0]?.status ?? bookRows[0]?.status ?? "Matched";
    const splitRemark =
      status === "Split Match (verify)"
        ? `Split match - ${bankRows.length} ${rt.theirSheetName} line(s) vs ${bookRows.length} ${rt.ourSheetName} line(s) - verify`
        : null;
    const maxLen = Math.max(bankRows.length, bookRows.length);
    for (let i = 0; i < maxLen; i++) {
      writeRow(bankRows[i] ?? null, bookRows[i] ?? null, seqCode, status, splitRemark);
    }
  }

  // Then genuinely unmatched items, one side per row, with sign-aware
  // remarks from the type registry ("Deposit in transit" vs "Invoice in
  // your ledger, not on supplier statement", etc.). Sorted by reference
  // first (blank references last) so lines that share a reference - a
  // transfer fee and its VAT charge, say - end up adjacent even though
  // neither has a counterpart to match against; makes them easy to spot
  // as "these belong together" during manual review without claiming a
  // match that doesn't exist.
  const unmatchedSort = (a: MatchedTxn, b: MatchedTxn) => {
    const ra = a.reference ?? "";
    const rb = b.reference ?? "";
    if (ra !== rb) return ra === "" ? 1 : rb === "" ? -1 : ra.localeCompare(rb);
    return a.date.getTime() - b.date.getTime();
  };
  for (const t of bankTxns.filter((t) => t.status === "Unmatched").sort(unmatchedSort)) {
    writeRow(t, null, "-", "Unmatched", t.amount >= 0 ? rt.remarks.theirsPositive : rt.remarks.theirsNegative);
  }
  for (const t of bookTxns.filter((t) => t.status === "Unmatched").sort(unmatchedSort)) {
    writeRow(null, t, "-", "Unmatched", t.amount >= 0 ? rt.remarks.oursPositive : rt.remarks.oursNegative);
  }

  styleHeader(ws, headers.length);
  ws.autoFilter = { from: "A1", to: "K1" };
  const widths = [13, 14, 34, 13, 12, 13, 42, 13, 34, 14, 13];
  widths.forEach((w, i) => (ws.getColumn(i + 1).width = w));
  return ws;
}

import { getReconType, RECON_TYPES, type ReconTypeId } from "./reconTypes";

export interface StatementInputs {
  reconType: ReconTypeId;
  bankOpeningBalance: number;   // "their" side - user-entered, required
  bankClosingBalance: number;
  bookOpeningBalance: number;   // "our" side - user-entered, required
  bookClosingBalance: number;
  periodLabel: string;
  excludedBankOpeningBalanceRows?: { description: string; amount: number }[];
  excludedBookOpeningBalanceRows?: { description: string; amount: number }[];
  unparsedBankRows?: UnparsedRow[];
  unparsedBookRows?: UnparsedRow[];
}

export async function buildReconciliationWorkbook(
  bookTxns: MatchedTxn[],
  bankTxns: MatchedTxn[],
  inputs: StatementInputs
): Promise<ExcelJS.Workbook> {
  const rt = getReconType(inputs.reconType) || RECON_TYPES.bank;
  const wb = new ExcelJS.Workbook();
  wb.creator = "EduForEveryone Reconciliation Tool";

  const summary = wb.addWorksheet("Reconciliation Statement", {
    views: [{ showGridLines: false }],
  });
  // detail sheets added after, so the summary tab stays first; formulas
  // below reference them by name, which works regardless of add order
  writeSideBySideSheet(wb, bookTxns, bankTxns, rt);
  writeDetailSheet(wb, rt.theirSheetName, bankTxns);
  writeDetailSheet(wb, rt.ourSheetName, bookTxns);

  const bold = { name: FONT, bold: true };
  const normal = { name: FONT };
  const title = { name: FONT, bold: true, size: 14 };
  const moneyFmt = "#,##0.00;(#,##0.00)";

  summary.getColumn(1).width = 52;
  summary.getColumn(2).width = 18;

  let r = 1;
  summary.getCell(`A${r}`).value = `${rt.displayName} Statement`;
  summary.getCell(`A${r}`).font = title;
  r++;
  summary.getCell(`A${r}`).value = inputs.periodLabel;
  summary.getCell(`A${r}`).font = normal;
  r += 2;

  summary.getCell(`A${r}`).value = `Balance as per ${rt.theirLabel}`;
  summary.getCell(`A${r}`).font = bold;
  r++;

  summary.getCell(`A${r}`).value = "Opening balance";
  summary.getCell(`A${r}`).font = normal;
  const bankOpenRow = r;
  summary.getCell(`B${r}`).value = inputs.bankOpeningBalance;
  summary.getCell(`B${r}`).font = { name: FONT, color: { argb: `FF${INPUT_FONT_COLOR}` } };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = "Net movement (sum of uploaded transactions)";
  summary.getCell(`A${r}`).font = normal;
  const bankNetRow = r;
  summary.getCell(`B${r}`).value = { formula: `SUM('${rt.theirSheetName}'!D:D)` };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = "Closing balance";
  summary.getCell(`A${r}`).font = bold;
  const bankBalRow = r;
  summary.getCell(`B${r}`).value = inputs.bankClosingBalance;
  summary.getCell(`B${r}`).font = { name: FONT, bold: true, color: { argb: `FF${INPUT_FONT_COLOR}` } };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = "Check: opening + net movement vs. closing entered above (should be 0)";
  summary.getCell(`A${r}`).font = NOTE_FONT;
  summary.getCell(`B${r}`).value = { formula: `(B${bankOpenRow}+B${bankNetRow})-B${bankBalRow}` };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  addZeroCheckFormatting(summary, `B${r}`);
  r += 2;

  summary.getCell(`A${r}`).value = rt.statement.oursOnlyPositive;
  summary.getCell(`A${r}`).font = normal;
  const oursPosRow = r;
  summary.getCell(`B${r}`).value = {
    formula: `SUMIFS('${rt.ourSheetName}'!D:D,'${rt.ourSheetName}'!E:E,"Unmatched",'${rt.ourSheetName}'!D:D,">0")`,
  };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = rt.statement.oursOnlyNegative;
  summary.getCell(`A${r}`).font = normal;
  const oursNegRow = r;
  summary.getCell(`B${r}`).value = {
    formula: `SUMIFS('${rt.ourSheetName}'!D:D,'${rt.ourSheetName}'!E:E,"Unmatched",'${rt.ourSheetName}'!D:D,"<0")`,
  };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = rt.statement.adjustedTheirs;
  summary.getCell(`A${r}`).font = bold;
  const adjBankRow = r;
  summary.getCell(`B${r}`).value = {
    formula: `B${bankBalRow}+B${oursPosRow}+B${oursNegRow}`,
  };
  summary.getCell(`B${r}`).font = bold;
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  summary.getCell(`B${r}`).border = { top: { style: "thin" }, bottom: { style: "double" } };
  r += 2;

  summary.getCell(`A${r}`).value = `Balance as per ${rt.ourLabel}`;
  summary.getCell(`A${r}`).font = bold;
  r++;

  summary.getCell(`A${r}`).value = "Opening balance";
  summary.getCell(`A${r}`).font = normal;
  const bookOpenRow = r;
  summary.getCell(`B${r}`).value = inputs.bookOpeningBalance;
  summary.getCell(`B${r}`).font = { name: FONT, color: { argb: `FF${INPUT_FONT_COLOR}` } };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = "Net movement (sum of uploaded transactions)";
  summary.getCell(`A${r}`).font = normal;
  const bookNetRow = r;
  summary.getCell(`B${r}`).value = { formula: `SUM('${rt.ourSheetName}'!D:D)` };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = "Closing balance";
  summary.getCell(`A${r}`).font = bold;
  const bookBalRow = r;
  summary.getCell(`B${r}`).value = inputs.bookClosingBalance;
  summary.getCell(`B${r}`).font = { name: FONT, bold: true, color: { argb: `FF${INPUT_FONT_COLOR}` } };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = "Check: opening + net movement vs. closing entered above (should be 0)";
  summary.getCell(`A${r}`).font = NOTE_FONT;
  summary.getCell(`B${r}`).value = { formula: `(B${bookOpenRow}+B${bookNetRow})-B${bookBalRow}` };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  addZeroCheckFormatting(summary, `B${r}`);
  r += 2;

  summary.getCell(`A${r}`).value = rt.statement.theirsOnlyPositive;
  summary.getCell(`A${r}`).font = normal;
  const theirsPosRow = r;
  summary.getCell(`B${r}`).value = {
    formula: `SUMIFS('${rt.theirSheetName}'!D:D,'${rt.theirSheetName}'!E:E,"Unmatched",'${rt.theirSheetName}'!D:D,">0")`,
  };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = rt.statement.theirsOnlyNegative;
  summary.getCell(`A${r}`).font = normal;
  const theirsNegRow = r;
  summary.getCell(`B${r}`).value = {
    formula: `SUMIFS('${rt.theirSheetName}'!D:D,'${rt.theirSheetName}'!E:E,"Unmatched",'${rt.theirSheetName}'!D:D,"<0")`,
  };
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  r++;

  summary.getCell(`A${r}`).value = rt.statement.adjustedOurs;
  summary.getCell(`A${r}`).font = bold;
  const adjBookRow = r;
  summary.getCell(`B${r}`).value = {
    formula: `B${bookBalRow}+B${theirsPosRow}+B${theirsNegRow}`,
  };
  summary.getCell(`B${r}`).font = bold;
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  summary.getCell(`B${r}`).border = { top: { style: "thin" }, bottom: { style: "double" } };
  r += 2;

  summary.getCell(`A${r}`).value = "Difference (should be zero)";
  summary.getCell(`A${r}`).font = bold;
  summary.getCell(`B${r}`).value = { formula: `B${adjBankRow}-B${adjBookRow}` };
  summary.getCell(`B${r}`).font = bold;
  summary.getCell(`B${r}`).numFmt = moneyFmt;
  addZeroCheckFormatting(summary, `B${r}`);
  r += 1;

  if (rt.balanceSignNote) {
    summary.getCell(`A${r}`).value = rt.balanceSignNote;
    summary.getCell(`A${r}`).font = NOTE_FONT;
    r += 1;
  }
  r += 1;

  summary.getCell(`A${r}`).value =
    "Split Match (verify) items count as reconciled above but are worth a manual look - see the detail sheets.";
  summary.getCell(`A${r}`).font = NOTE_FONT;
  r += 1;

  const excludedNotes: string[] = [];
  for (const row of inputs.excludedBankOpeningBalanceRows ?? []) {
    excludedNotes.push(
      `${rt.theirLabel}: excluded "${row.description}" (${row.amount.toFixed(2)}) - looked like an opening balance line, not a real transaction.`
    );
  }
  for (const row of inputs.excludedBookOpeningBalanceRows ?? []) {
    excludedNotes.push(
      `${rt.ourLabel}: excluded "${row.description}" (${row.amount.toFixed(2)}) - looked like an opening balance line, not a real transaction.`
    );
  }
  if (excludedNotes.length) {
    r += 1;
    summary.getCell(`A${r}`).value = "Rows excluded from matching:";
    summary.getCell(`A${r}`).font = { name: FONT, bold: true, size: 9, color: { argb: "FF808080" } };
    for (const note of excludedNotes) {
      r += 1;
      summary.getCell(`A${r}`).value = note;
      summary.getCell(`A${r}`).font = NOTE_FONT;
    }
  }

  // Rows that had content but could not be parsed (unreadable date or
  // amount). These are excluded from matching and from the net-movement
  // sums, so they are the first place to look when a tie-out check above
  // is red. Capped per side so a garbage file can't bloat this sheet.
  const unparsedSections: [string, UnparsedRow[]][] = [
    [rt.theirLabel, inputs.unparsedBankRows ?? []],
    [rt.ourLabel, inputs.unparsedBookRows ?? []],
  ];
  if (unparsedSections.some(([, rowsU]) => rowsU.length > 0)) {
    r += 2;
    summary.getCell(`A${r}`).value =
      "Rows that could not be read (excluded from matching AND from the net-movement sums above):";
    summary.getCell(`A${r}`).font = { name: FONT, bold: true, size: 9, color: { argb: "FFB00000" } };
    for (const [label, rowsU] of unparsedSections) {
      for (const u of rowsU.slice(0, MAX_UNPARSED_LISTED)) {
        r += 1;
        summary.getCell(`A${r}`).value =
          `${label} row ${u.rowNumber}: ${u.reason}` + (u.description ? ` - "${u.description}"` : "");
        summary.getCell(`A${r}`).font = NOTE_FONT;
      }
      if (rowsU.length > MAX_UNPARSED_LISTED) {
        r += 1;
        summary.getCell(`A${r}`).value = `${label}: ${rowsU.length - MAX_UNPARSED_LISTED} more row(s) not listed.`;
        summary.getCell(`A${r}`).font = NOTE_FONT;
      }
    }
  }

  // Contact note
  r += 2;
  summary.mergeCells(`A${r}:B${r}`);
  const contactCell = summary.getCell(`A${r}`);
  contactCell.value = { text: CONTACT_TEXT, hyperlink: CONTACT_MAILTO };
  contactCell.font = { name: FONT, italic: true, size: 9, color: { argb: "FF6B7280" } };

  return wb;
}
