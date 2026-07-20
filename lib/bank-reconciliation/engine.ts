import type { Txn, MatchedTxn, MatchStatus, ReconcileResult, ReconcileConfig } from "./types";
import { DEFAULT_CONFIG } from "./types";

const cents = (n: number) => Math.round(n * 100);
const dayDiff = (a: Date, b: Date) => Math.round(Math.abs(a.getTime() - b.getTime()) / 86400000);

interface Row {
  txn: Txn;
  amtC: number;
}

export function reconcile(
  bookTxns: Txn[],
  bankTxns: Txn[],
  overrides: Partial<ReconcileConfig> = {}
): ReconcileResult {
  // Per-type overrides (reconTypes.ts) merged over the bank-tuned defaults.
  const config: ReconcileConfig = { ...DEFAULT_CONFIG, ...overrides };

  const book: Row[] = bookTxns.map((t) => ({ txn: t, amtC: cents(t.amount) }));
  const bank: Row[] = bankTxns.map((t) => ({ txn: t, amtC: cents(t.amount) }));

  const bookOpen = new Set(book.map((r) => r.txn.id));
  const bankOpen = new Set(bank.map((r) => r.txn.id));
  const byIdBook = new Map(book.map((r) => [r.txn.id, r]));
  const byIdBank = new Map(bank.map((r) => [r.txn.id, r]));

  const status = new Map<
    string,
    { status: MatchStatus; groupId: number; seqCode: string; dateDiffDays: number; matchedWith: string }
  >();
  let groupId = 0;
  let matchedSeq = 0;
  let splitSeq = 0;

  const mark = (bookIds: number[], bankIds: number[], st: MatchStatus, dateDiffDays: number) => {
    groupId += 1;
    let seqCode = "";
    if (st === "Matched") {
      matchedSeq += 1;
      seqCode = `M-${String(matchedSeq).padStart(3, "0")}`;
    } else if (st === "Split Match (verify)") {
      splitSeq += 1;
      seqCode = `S-${String(splitSeq).padStart(3, "0")}`;
    }
    const bookRefs = bookIds.map((id) => byIdBook.get(id)!.txn.description).join("; ");
    const bankRefs = bankIds.map((id) => byIdBank.get(id)!.txn.description).join("; ");
    for (const id of bookIds) {
      status.set(`book:${id}`, { status: st, groupId, seqCode, dateDiffDays, matchedWith: bankRefs });
      bookOpen.delete(id);
    }
    for (const id of bankIds) {
      status.set(`bank:${id}`, { status: st, groupId, seqCode, dateDiffDays, matchedWith: bookRefs });
      bankOpen.delete(id);
    }
  };

  // ---------------- Pass 1: Reference + Date group match ----------------
  // When a reference/cheque number is present, related lines on one side
  // sharing that reference AND date almost always belong to the same
  // underlying operation - a transfer's fee split into separate VAT and
  // Transfer Fee lines, or a cash disbursement voucher split across
  // several expense lines. Aggregating by (Reference, Date) first, before
  // touching individual lines, lets a genuine multi-line split resolve
  // as one clean group match instead of depending on the bounded
  // subset-sum search in Pass 3 to happen to find it (it has a line-count
  // cap for performance reasons - this pass doesn't need one, since
  // there's no combinatorial search involved, just a sum).
  //
  // referenceMatchIgnoresDate (supplier/customer/intercompany types):
  // a shared reference is stronger evidence than date proximity in those
  // reconciliations - invoice date vs posting date routinely differs by
  // weeks - so the cross-side date window is lifted entirely for this
  // pass. Candidates are still sorted by date gap, so the closest-dated
  // pairing wins when one reference appears more than once.
  function groupByRefDate(byId: Map<number, Row>, openSet: Set<number>) {
    const groups = new Map<string, { rids: number[]; amtC: number; date: Date }>();
    for (const id of openSet) {
      const row = byId.get(id)!;
      const ref = row.txn.reference;
      if (!ref) continue; // never group rows that have no reference to begin with
      const key = `${ref}|${row.txn.date.getTime()}`;
      const g = groups.get(key) ?? { rids: [], amtC: 0, date: row.txn.date };
      g.rids.push(id);
      g.amtC += row.amtC;
      groups.set(key, g);
    }
    return groups;
  }

  const bookRefGroups = groupByRefDate(byIdBook, bookOpen);
  const bankRefGroups = groupByRefDate(byIdBank, bankOpen);

  const bankGroupsByAmt = new Map<number, string[]>();
  for (const [key, g] of bankRefGroups) {
    const arr = bankGroupsByAmt.get(g.amtC) ?? [];
    arr.push(key);
    bankGroupsByAmt.set(g.amtC, arr);
  }

  type RefCand = [dayGap: number, bookKey: string, bankKey: string];
  const refCandidates: RefCand[] = [];
  for (const [bookKey, bg] of bookRefGroups) {
    for (const bankKey of bankGroupsByAmt.get(bg.amtC) ?? []) {
      const bnkg = bankRefGroups.get(bankKey)!;
      const dd = dayDiff(bg.date, bnkg.date);
      if (!config.referenceMatchIgnoresDate && dd > config.dateToleranceDays) continue;
      refCandidates.push([dd, bookKey, bankKey]);
    }
  }
  refCandidates.sort((a, b) => a[0] - b[0]);

  const usedBookKeys = new Set<string>();
  const usedBankKeys = new Set<string>();
  for (const [dd, bookKey, bankKey] of refCandidates) {
    if (usedBookKeys.has(bookKey) || usedBankKeys.has(bankKey)) continue;
    const bg = bookRefGroups.get(bookKey)!;
    const bnkg = bankRefGroups.get(bankKey)!;
    if (!bg.rids.every((id) => bookOpen.has(id)) || !bnkg.rids.every((id) => bankOpen.has(id))) continue;
    const st: MatchStatus = bg.rids.length === 1 && bnkg.rids.length === 1 ? "Matched" : "Split Match (verify)";
    mark(bg.rids, bnkg.rids, st, dd);
    usedBookKeys.add(bookKey);
    usedBankKeys.add(bankKey);
  }

  // ---------------- Pass 2: exact 1:1, same amount, date proximity, reference tie-break ----------------
  // With referenceMatchIgnoresDate, a pair sharing a reference is admitted
  // even outside the date window, and same-reference candidates are
  // preferred over closer-dated ones - a reference is deliberate, a date
  // gap is circumstance in AP/AR data. Without the flag, behavior is
  // exactly the original: date window filter, closest date first,
  // reference only as tie-break.
  const bankBuckets = new Map<number, number[]>();
  for (const id of bankOpen) {
    const r = byIdBank.get(id)!;
    const arr = bankBuckets.get(r.amtC) ?? [];
    arr.push(id);
    bankBuckets.set(r.amtC, arr);
  }

  type Cand = [dayGap: number, refMismatch: number, bookId: number, bankId: number];
  const candidates: Cand[] = [];
  for (const bookId of bookOpen) {
    const br = byIdBook.get(bookId)!;
    for (const bankId of bankBuckets.get(br.amtC) ?? []) {
      const nr = byIdBank.get(bankId)!;
      const dd = dayDiff(br.txn.date, nr.txn.date);
      const sameRef = !!(
        br.txn.reference && nr.txn.reference && br.txn.reference === nr.txn.reference
      );
      if (dd > config.dateToleranceDays && !(config.referenceMatchIgnoresDate && sameRef)) continue;
      candidates.push([dd, sameRef ? 0 : 1, bookId, bankId]);
    }
  }
  candidates.sort((a, b) =>
    config.referenceMatchIgnoresDate
      ? a[1] - b[1] || a[0] - b[0] // reference match first, then closest date
      : a[0] - b[0] || a[1] - b[1] // original: closest date first, reference tie-break
  );
  for (const [dd, , bookId, bankId] of candidates) {
    if (bookOpen.has(bookId) && bankOpen.has(bankId)) {
      mark([bookId], [bankId], "Matched", dd);
    }
  }

  // ---------------- Pass 3: bounded split match, either direction ----------------
  // MAX_COMBO_ATTEMPTS is a hard ceiling on total combinations tried across
  // BOTH directions of this pass combined. Without it, a file where most
  // rows don't cleanly match (bad column mapping, or a genuinely messy
  // file) drives this into O(rows^2)-ish territory - confirmed by testing:
  // 2,000 vs 2,000 mostly-unmatched rows took ~4s, 5,000 vs 5,000 took
  // ~14s, and that curve keeps climbing. On a serverless function with a
  // 10s default timeout, or just a real user waiting on a spinner, that's
  // a hang, not a slow response. Anchors are processed largest-amount-first,
  // so when the budget runs out, it's the small/immaterial items that get
  // skipped (left as Unmatched) rather than the ones worth flagging.
  let comboAttempts = 0;
  const budgetLeft = () => comboAttempts < config.maxComboAttempts;

  const trySplit = (
    anchorOpen: Set<number>,
    anchorMap: Map<number, Row>,
    poolOpen: Set<number>,
    poolMap: Map<number, Row>,
    anchorIsBook: boolean
  ) => {
    const anchors = [...anchorOpen].sort(
      (a, b) => Math.abs(anchorMap.get(b)!.amtC) - Math.abs(anchorMap.get(a)!.amtC)
    );
    for (const anchorId of anchors) {
      if (!budgetLeft()) break;
      if (!anchorOpen.has(anchorId)) continue;
      const anchor = anchorMap.get(anchorId)!;
      const target = anchor.amtC;
      let pool = [...poolOpen].filter(
        (id) => dayDiff(poolMap.get(id)!.txn.date, anchor.txn.date) <= config.splitDateWindowDays
      );
      if (pool.length < 2) continue;
      pool.sort(
        (a, b) =>
          dayDiff(poolMap.get(a)!.txn.date, anchor.txn.date) -
          dayDiff(poolMap.get(b)!.txn.date, anchor.txn.date)
      );
      pool = pool.slice(0, config.maxCandidatePool);

      const before = comboAttempts;
      const found = findCombo(pool, (id) => poolMap.get(id)!.amtC, target, config.maxSplitLines, () => {
        comboAttempts++;
        return comboAttempts - before < config.maxComboAttemptsPerAnchor && budgetLeft();
      });
      if (found) {
        const dd = Math.max(...found.map((id) => dayDiff(poolMap.get(id)!.txn.date, anchor.txn.date)));
        if (anchorIsBook) mark([anchorId], found, "Split Match (verify)", dd);
        else mark(found, [anchorId], "Split Match (verify)", dd);
      }
    }
  };

  trySplit(bookOpen, byIdBook, bankOpen, byIdBank, true);
  trySplit(bankOpen, byIdBank, bookOpen, byIdBook, false);

  // ---------------- write back ----------------
  const finalize = (rows: Row[], prefix: "book" | "bank"): MatchedTxn[] =>
    rows.map((r) => {
      const s = status.get(`${prefix}:${r.txn.id}`);
      return {
        ...r.txn,
        status: s?.status ?? "Unmatched",
        matchGroupId: s?.groupId ?? null,
        seqCode: s?.seqCode ?? "",
        dateDiffDays: s?.dateDiffDays ?? null,
        matchedWith: s?.matchedWith ?? "",
      };
    });

  return { bookTxns: finalize(book, "book"), bankTxns: finalize(bank, "bank") };
}

/** Bounded combination search for a subset summing to `target` (integer cents).
 * `tick` is called once per combination attempt and returns false when the
 * caller's budget is exhausted - search aborts immediately when that happens
 * rather than continuing to burn time on an already-slow file. */
function findCombo(
  pool: number[],
  amtOf: (id: number) => number,
  target: number,
  maxLines: number,
  tick: () => boolean
): number[] | null {
  const n = pool.length;
  const combo: number[] = [];
  function search(start: number, remaining: number, depth: number): number[] | null {
    if (remaining === 0 && depth >= 2) return [...combo];
    if (depth >= maxLines) return null;
    for (let i = start; i < n; i++) {
      if (!tick()) return null;
      const amt = amtOf(pool[i]);
      combo.push(pool[i]);
      const res = search(i + 1, remaining - amt, depth + 1);
      if (res) return res;
      combo.pop();
    }
    return null;
  }
  return search(0, target, 0);
}
