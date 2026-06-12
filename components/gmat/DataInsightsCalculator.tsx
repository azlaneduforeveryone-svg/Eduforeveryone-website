"use client";
import { useState, useCallback } from "react";

/* ---------------------------------------------------------------------------
   components/gmat/DataInsightsCalculator.tsx

   A FAITHFUL GMAT Data Insights calculator. The real GMAT on-screen calculator
   is BASIC (four functions + memory + √, %, 1/x, ±). It deliberately omits all
   scientific functions (trig, log/ln, powers, factorial, constants).

   Derived from the site ScientificCalculator: same button/shadow aesthetic and
   the same core `act` arithmetic logic — scientific features stripped so it
   matches the real exam.

   GATING (enforce at the call site, NOT here):
     - Render ONLY in the Data Insights section and the Data Insights leg of the
       full mock. Never in Quant or Verbal.
     - Mirror the real exam: a top-left "Calculator" button toggles it open.
--------------------------------------------------------------------------- */

export default function DataInsightsCalculator({
  onClose,
}: {
  onClose?: () => void;
}) {
  const [val, setVal] = useState("0");
  const [op, setOp] = useState<string | null>(null);
  const [prev, setPrev] = useState<number | null>(null);
  const [fresh, setFresh] = useState(false);
  const [expr, setExpr] = useState("");
  const [mem, setMem] = useState(0);

  const round = (n: number) => parseFloat(n.toFixed(10)).toString();

  const act = useCallback(
    (type: string, arg?: string) => {
      if (type === "ac") {
        setVal("0"); setOp(null); setPrev(null); setFresh(false); setExpr("");
        return;
      }
      if (type === "del") {
        setVal((v) => (v.length > 1 ? v.slice(0, -1) : "0"));
        return;
      }
      // memory + unary keys present on the basic GMAT calculator
      if (type === "mem") {
        const v = parseFloat(val);
        if (arg === "m+") setMem((m) => m + v);
        if (arg === "m-") setMem((m) => m - v);
        if (arg === "mr") { setVal(mem.toString()); setFresh(true); }
        if (arg === "mc") setMem(0);
        return;
      }
      if (type === "sqrt") {
        const v = parseFloat(val);
        if (v < 0) { setVal("Error"); return; }
        setVal(round(Math.sqrt(v))); setFresh(true); setExpr(`√(${v}) =`);
        return;
      }
      if (type === "inv") {
        const v = parseFloat(val);
        if (v === 0) { setVal("Error"); return; }
        setVal(round(1 / v)); setFresh(true); setExpr(`1/(${v}) =`);
        return;
      }
      if (type === "pct") {
        const v = parseFloat(val);
        // percent of the pending operand when mid-operation, else /100
        const base = op && prev !== null ? prev : 100;
        setVal(round((v / 100) * (op && prev !== null ? base : 1)));
        setFresh(true);
        return;
      }

      setVal((v) => {
        if (type === "n") {
          if (fresh || v === "0") { setFresh(false); return arg!; }
          return v.length < 14 ? v + arg! : v;
        }
        if (type === "dot") return v.includes(".") ? v : v + ".";
        if (type === "sign") return (parseFloat(v) * -1).toString();
        if (type === "op") {
          if (op && !fresh) {
            const a = prev!, b = parseFloat(v);
            const r =
              op === "+" ? a + b :
              op === "-" ? a - b :
              op === "*" ? a * b :
              b === 0 ? NaN : a / b;
            const res = isNaN(r) ? "Error" : round(r);
            setPrev(parseFloat(res)); setOp(arg!); setFresh(true);
            setExpr(res + " " + symbol(arg!)); return res;
          }
          setPrev(parseFloat(v)); setOp(arg!); setFresh(true);
          setExpr(v + " " + symbol(arg!)); return v;
        }
        if (type === "eq") {
          if (!op) return v;
          const a = prev!, b = parseFloat(v);
          const r =
            op === "+" ? a + b :
            op === "-" ? a - b :
            op === "*" ? a * b :
            b === 0 ? NaN : a / b;
          const res = isNaN(r) ? "Error" : round(r);
          setOp(null); setPrev(null); setFresh(true); setExpr(""); return res;
        }
        return v;
      });
    },
    [op, prev, fresh, val, mem]
  );

  const shadow = "0 4px 0 rgba(0,0,0,0.35), 0 4px 8px rgba(0,0,0,0.25)";
  const pressed = "0 1px 0 rgba(0,0,0,0.35)";

  const Btn = ({
    label, onClick, cls, span,
  }: { label: string; onClick: () => void; cls: string; span?: string }) => (
    <button
      onClick={onClick}
      className={`${cls} ${span || ""} rounded-xl font-bold py-3 text-sm transition-all duration-75 active:translate-y-1 select-none`}
      style={{ boxShadow: shadow }}
      onMouseDown={(e) => (e.currentTarget.style.boxShadow = pressed)}
      onMouseUp={(e) => (e.currentTarget.style.boxShadow = shadow)}
      onMouseLeave={(e) => (e.currentTarget.style.boxShadow = shadow)}
    >
      {label}
    </button>
  );

  const NUM = (n: string) => (
    <Btn key={n} label={n} onClick={() => act("n", n)} cls="bg-gray-800 text-white" />
  );
  const OP = (label: string, o: string) => (
    <Btn key={o} label={label} onClick={() => act("op", o)} cls="bg-purple-950 text-purple-300 text-base" />
  );
  const FN = (label: string, t: string, arg?: string) => (
    <Btn key={label} label={label} onClick={() => act(t, arg)} cls="bg-gray-700 text-gray-200" />
  );

  return (
    <div className="bg-gray-950 rounded-2xl p-4 space-y-3 w-72">
      {/* Header — mirrors the real exam's labelled calculator panel */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wide text-gray-400">
          Calculator
        </span>
        <div className="flex items-center gap-2">
          {mem !== 0 && (
            <span className="text-xs text-green-400 font-mono">
              M:{parseFloat(mem.toFixed(6))}
            </span>
          )}
          {onClose && (
            <button
              onClick={onClose}
              className="text-xs text-gray-500 hover:text-gray-300"
              aria-label="Close calculator"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Screen */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-4 text-right">
        <p className="text-green-800 text-xs font-mono min-h-4">{expr}</p>
        <p
          className="text-green-400 text-3xl font-bold font-mono break-all"
          style={{ textShadow: "0 0 10px rgba(74,222,128,0.4)" }}
        >
          {val}
        </p>
      </div>

      {/* Grid — basic functions only */}
      <div className="grid grid-cols-4 gap-2">
        {/* memory row */}
        {FN("MC", "mem", "mc")}
        {FN("MR", "mem", "mr")}
        {FN("M+", "mem", "m+")}
        {FN("M-", "mem", "m-")}
        {/* clear + unary */}
        <Btn label="AC" onClick={() => act("ac")} cls="bg-red-950 text-red-300" />
        <Btn label="DEL" onClick={() => act("del")} cls="bg-red-950 text-red-300" />
        {FN("√", "sqrt")}
        {OP("÷", "/")}
        {/* 7 8 9 × */}
        {NUM("7")}{NUM("8")}{NUM("9")}{OP("×", "*")}
        {/* 4 5 6 − */}
        {NUM("4")}{NUM("5")}{NUM("6")}{OP("−", "-")}
        {/* 1 2 3 + */}
        {NUM("1")}{NUM("2")}{NUM("3")}{OP("+", "+")}
        {/* ± 0 . = */}
        <Btn label="+/−" onClick={() => act("sign")} cls="bg-gray-700 text-gray-200" />
        {NUM("0")}
        <Btn label="." onClick={() => act("dot")} cls="bg-gray-800 text-white" />
        <button
          onClick={() => act("eq")}
          className="bg-teal-700 text-white rounded-xl font-bold text-base py-3 active:translate-y-1"
          style={{ boxShadow: "0 4px 0 #0F6E56" }}
        >
          =
        </button>
      </div>

      {/* secondary unary row */}
      <div className="grid grid-cols-2 gap-2">
        {FN("1/x", "inv")}
        {FN("%", "pct")}
      </div>
    </div>
  );
}

function symbol(o: string) {
  return o === "*" ? "×" : o === "/" ? "÷" : o === "-" ? "−" : o;
}