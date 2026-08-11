// app/api/bank-reconciliation/route.ts
//
// Accepts two files (external statement + own ledger), their confirmed
// column mappings, the four balance figures, and an optional reconType
// ("bank" | "supplier" | "customer" | "intercompany", default "bank" so
// the currently deployed page keeps working). Runs the reconciliation and
// streams back the generated .xlsx. Nothing is written to disk or a
// database - the whole request is handled in memory.
//
// Field-name convention: "bank*" form fields = the external side
// (statement received from the other party), "book*" = the user's own
// ledger. Names kept for backward compatibility with the live page;
// rename together with the page refactor if desired.
//
// Opening/closing balances are REQUIRED, user-entered figures, not
// auto-detected - a guess the user never sees is worse than no guess at
// all, and asking upfront enables the tie-out check in the output.
//
// REQUIRED CHANGES IN OTHER FILES for this route to compile and behave:
//   1. engine.ts: reconcile() must accept an optional third argument
//      Partial<ReconcileConfig> merged over DEFAULT_CONFIG, and the
//      config needs the three override keys used in reconTypes.ts
//      (dateToleranceDays, referenceMatchIgnoresDate, maxSplitLines) -
//      align these names with the actual DEFAULT_CONFIG keys.
//   2. mapping.ts (applyMapping): parse dates through
//      makeDateParser(mapping.dateOrder ?? inferred) and every amount
//      cell through parseAmount() from parsing.ts; collect rows where
//      either returns null into an unparsedRows list on the result
//      instead of silently dropping or crashing.
//   3. statement.ts: take the ReconType object (terminology) instead of
//      hardcoded bank wording, report unparsedRows, and append the
//      contact note row.
//   4. types.ts: add dateOrder?: "DMY" | "MDY" | "YMD" | "YDM" to
//      ColumnMapping.

import { NextRequest, NextResponse } from "next/server";
import { parseUpload } from "../../../lib/bank-reconciliation/parseFile";
import { applyMapping } from "../../../lib/bank-reconciliation/mapping";
import { reconcile } from "../../../lib/bank-reconciliation/engine";
import { buildReconciliationWorkbook } from "../../../lib/bank-reconciliation/statement";
import { getReconType } from "../../../lib/bank-reconciliation/reconTypes";
import type { ColumnMapping } from "../../../lib/bank-reconciliation/types";

// ExcelJS needs Node APIs (Buffer, etc.) - this route can't run on the
// Edge runtime.
export const runtime = "nodejs";

// Kept in sync with MAX_FILE_SIZE_BYTES in the page component - this is the
// check that actually matters, since a client-side check alone can be
// bypassed by anyone calling this endpoint directly.
const MAX_FILE_SIZE_BYTES = 3 * 1024 * 1024;

function requireNumber(form: FormData, field: string): number | null {
  const raw = form.get(field);
  if (raw === null || raw === "") return null;
  const n = Number(raw);
  return isNaN(n) ? null : n;
}

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();

    const reconType = getReconType(form.get("reconType"));
    if (!reconType) {
      return NextResponse.json(
        { error: "Unknown reconciliation type." },
        { status: 400 }
      );
    }

    const bankFile = form.get("bankFile"); // external statement side
    const bookFile = form.get("bookFile"); // own ledger side
    const bankMappingRaw = form.get("bankMapping");
    const bookMappingRaw = form.get("bookMapping");
    const periodLabel = String(form.get("periodLabel") ?? "");

    if (!(bankFile instanceof File) || !(bookFile instanceof File)) {
      return NextResponse.json({ error: "Both files are required." }, { status: 400 });
    }
    if (bankFile.size > MAX_FILE_SIZE_BYTES || bookFile.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { error: `Each file must be under ${(MAX_FILE_SIZE_BYTES / 1024 / 1024).toFixed(0)} MB.` },
        { status: 413 }
      );
    }
    if (!bankMappingRaw || !bookMappingRaw) {
      return NextResponse.json({ error: "Column mapping is required for both files." }, { status: 400 });
    }

    const bankOpeningBalance = requireNumber(form, "bankOpeningBalance");
    const bankClosingBalance = requireNumber(form, "bankClosingBalance");
    const bookOpeningBalance = requireNumber(form, "bookOpeningBalance");
    const bookClosingBalance = requireNumber(form, "bookClosingBalance");

    if (
      bankOpeningBalance === null ||
      bankClosingBalance === null ||
      bookOpeningBalance === null ||
      bookClosingBalance === null
    ) {
      return NextResponse.json(
        {
          error:
            `Opening and closing balance are required for both the ${reconType.theirLabel.toLowerCase()} ` +
            `and the ${reconType.ourLabel.toLowerCase()} - enter all four figures from your actual ` +
            `documents before generating.`,
        },
        { status: 400 }
      );
    }

    const bankMapping = JSON.parse(String(bankMappingRaw)) as ColumnMapping;
    const bookMapping = JSON.parse(String(bookMappingRaw)) as ColumnMapping;

    const [bankParsed, bookParsed] = await Promise.all([
      parseUpload(await bankFile.arrayBuffer(), bankFile.name),
      parseUpload(await bookFile.arrayBuffer(), bookFile.name),
    ]);

    const bankResult = applyMapping(bankParsed.rows, bankMapping);
    const bookResult = applyMapping(bookParsed.rows, bookMapping);

    if (bankResult.txns.length === 0 || bookResult.txns.length === 0) {
      return NextResponse.json(
        {
          error:
            "No transactions were found after applying that column mapping. Double-check the Date and Amount columns and try again.",
        },
        { status: 400 }
      );
    }

    // Per-type matching overrides (wider date windows and reference-first
    // matching for supplier/customer, tight windows for bank).
    const result = reconcile(bookResult.txns, bankResult.txns, reconType.matching);

    const wb = await buildReconciliationWorkbook(result.bookTxns, result.bankTxns, {
      reconType: reconType.id,
      bankOpeningBalance,
      bankClosingBalance,
      bookOpeningBalance,
      bookClosingBalance,
      periodLabel: periodLabel || "Period not specified",
      excludedBankOpeningBalanceRows: bankResult.excludedOpeningBalanceRows,
      excludedBookOpeningBalanceRows: bookResult.excludedOpeningBalanceRows,
      unparsedBankRows: bankResult.unparsedRows,
      unparsedBookRows: bookResult.unparsedRows,
    });

    const buffer = await wb.xlsx.writeBuffer();

    return new NextResponse(buffer as ArrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${reconType.outputFilename}"`,
      },
    });
  } catch (err) {
    console.error("Reconciliation error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Something went wrong processing the files." },
      { status: 500 }
    );
  }
}
