# Bank Reconciliation Tool - engine + statement generator

## What's here

- `lib/types.ts` - shared types, including `ColumnMapping` (how an
  uploaded file's actual columns map to date/description/amount) and
  `MatchedTxn` (now carries `seqCode` and `dateDiffDays` alongside
  status).
- `lib/mapping.ts` - turns raw uploaded rows into normalized signed
  transactions using a confirmed `ColumnMapping`. Also has
  `guessMapping()`, a heuristic to *pre-fill* the mapping UI - it does
  **not** auto-run reconciliation off its own guess.
- `lib/engine.ts` - the matching engine. Same-sign matching (unlike the
  Ahraj/Arkan intercompany script, bank and book use the same sign
  convention here), reference-number tie-break, bounded split
  detection. Every Matched or Split Match group gets a sequential
  `Seq_Code` - `M-001`, `M-002`... for exact matches, `S-001`,
  `S-002`... for splits - shared by both sides of the pair so you can
  trace a row from either sheet.
- `lib/remarks.ts` - plain-English explanation per row (why it's
  unmatched, how many days apart a match cleared, how many lines were
  combined in a split), used only in the side-by-side sheet.
- `lib/statement.ts` - builds the output workbook with ExcelJS:
  - **"Bank vs Cash Book"** - the two books side by side, bank columns
    on the left, book columns on the right, with Amount Diff, Matching
    Code (the Seq_Code), and Remarks in the middle. Amount Diff is a
    live formula (`=bank_amount - book_amount` for that row) - reads
    0.00 for a clean match; for a split match it's the *per-row* gap,
    not the group total, since a single row can't express a
    multi-line sum on its own - the group's Seq_Code is what ties
    those rows together for a manual check.
  - **"Reconciliation Statement"** - the formula-driven summary
    (unchanged from before).
  - Two detail sheets (bank / book), each now with a `Seq_Code` column
    matching what's in the side-by-side sheet.
- `test.ts` - synthetic cash book + bank statement exercising an exact
  match, a same-day-different-clearing-date match, a genuine split
  (bank shows one ATM withdrawal, books show two), and all four
  classic reconciling-item categories. Run with `npx tsx test.ts`.
- `sample_output.xlsx` - what `test.ts` produces. Recalculated with
  LibreOffice to confirm the formulas actually evaluate (0 errors, 7
  formulas) - open it and check the Reconciliation Statement tab; the
  Difference row should read 0.00.

## What this is NOT yet

- **Not styled.** The upload page (`app/tools/finance-tools/bank-reconciliation/page.tsx`)
  is functional but deliberately plain - restyle the markup to match
  the Trust-and-Authority design system.
- **Not load-tested.** Works end-to-end on synthetic data and small
  real files; hasn't been run against a large real bank statement or
  under concurrent traffic. See SETUP.md's section on Vercel's body
  size and function timeout limits before this gets real traffic.
- **CSV parsing is wired in now** (`parseFile.ts`, using `papaparse`),
  this note used to say otherwise - it was wrong, fixed once the API
  route actually needed it.

## The Debit/Credit landmine (read this before building the mapping UI)

The very first test run of `guessMapping()` mislabeled the cash book's
own Debit/Credit columns - it assumed "Credit = money in", which is
correct for a bank's own statement but backwards for a company's own
cash/bank ledger, where a Debit increases the asset account. Fixed now:
`guessMapping()` refuses to guess directionality when it only sees a
Debit/Credit pair, and returns both column names under
`_debitCreditCandidates` instead. **The mapping UI has to show the user
a real sample row and ask directly** - "Debit shows 1,500 here - does
that mean money added to this account, or money leaving it?" - rather
than defaulting to either interpretation. Getting it backwards silently
flips every reconciling item and still produces a plausible-looking
statement, worth being paranoid about specifically here.

## Next step

The API route and upload page are now built - see SETUP.md at the
project root for exactly where each file goes and how to test it.
Remaining open item: restyle `page.tsx` to match your site, and give
it a real look once it's live rather than the plain HTML it ships with
now.

## Dependencies

```
npm install exceljs papaparse
npm install -D typescript tsx @types/node   # tsx only needed to run test.ts directly
```

