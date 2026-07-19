// app/api/bank-reconciliation/route.ts
//
// Accepts two files (bank statement + cash book), their confirmed column
// mappings, and the four balance figures (opening/closing for each side)
// as multipart form data. Runs the reconciliation and streams back the
// generated .xlsx. Nothing is written to disk or a database - the whole
// request is handled in memory.
//
// Opening/closing balances are REQUIRED, user-entered figures, not
// auto-detected - the tool used to guess a closing balance from a
// Balance column or by summing transactions, but a guess the user never
// sees is worse than no guess at all. Asking upfront means the user is
// looking at their real statement while they type the number in, and it
// also lets the output do a tie-out check (opening + net movement should
// equal the closing balance they entered) that catches a file covering
// the wrong date range or missing transactions - something a silent
// auto-detected default could never catch.
//
// Import paths below are relative (../../../lib/...) so this works
// regardless of whether your project has a "@/*" path alias configured.
// If you do have one, feel free to switch these to "@/lib/bank-reconciliation/...".

import { NextRequest, NextResponse } from "next/server";
import { parseUpload } from "../../../lib/bank-reconciliation/parseFile";
import { applyMapping } from "../../../lib/bank-reconciliation/mapping";
import { reconcile } from "../../../lib/bank-reconciliation/engine";
import { buildReconciliationWorkbook } from "../../../lib/bank-reconciliation/statement";
import type { ColumnMapping } from "../../../lib/bank-reconciliation/types";

// ExcelJS needs Node APIs (Buffer, etc.) - this route can't run on the
// Edge runtime. Vercel defaults App Router routes to Node already, but
// this makes it explicit so it doesn't silently break if that default
// ever changes.
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

    const bankFile = form.get("bankFile");
    const bookFile = form.get("bookFile");
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
            "Opening and closing balance are required for both the bank statement and the cash book - " +
            "enter all four figures from your actual documents before generating.",
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

    const result = reconcile(bookResult.txns, bankResult.txns);

    const wb = await buildReconciliationWorkbook(result.bookTxns, result.bankTxns, {
      bookLabel: "Cash Book",
      bankLabel: "Bank Statement",
      bankOpeningBalance,
      bankClosingBalance,
      bookOpeningBalance,
      bookClosingBalance,
      periodLabel: periodLabel || "Period not specified",
      excludedBankOpeningBalanceRows: bankResult.excludedOpeningBalanceRows,
      excludedBookOpeningBalanceRows: bookResult.excludedOpeningBalanceRows,
    });

    const buffer = await wb.xlsx.writeBuffer();

    return new NextResponse(buffer as ArrayBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="Bank_Reconciliation.xlsx"`,
      },
    });
  } catch (err) {
    console.error("Bank reconciliation error:", err);
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Something went wrong processing the files." },
      { status: 500 }
    );
  }
}
