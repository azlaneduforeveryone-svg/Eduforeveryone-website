"use client";
import { useState, useCallback } from "react";

type HistoryItem = { expr: string; result: string };

export default function SimpleCalculator() {
  const [val, setVal] = useState("0");
  const [op, setOp] = useState<string | null>(null);
  const [prev, setPrev] = useState<number | null>(null);
  const [fresh, setFresh] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);

  const addHist = useCallback((expr: string, result: string) => {
    setHistory(h => [{ expr, result }, ...h].slice(0, 25));
  }, []);

  const act = useCallback((type: string, arg?: string) => {
    setVal(v => {
      let next = v;
      if (type === "clear") { setOp(null); setPrev(null); setFresh(false); return "0"; }
      if (type === "del") return v.length > 1 ? v.slice(0, -1) : "0";
      if (type === "num") { if (fresh || v === "0") { setFresh(false); return arg!; } return v.length < 13 ? v + arg! : v; }
      if (type === "dot") return v.includes(".") ? v : v + ".";
      if (type === "sign") return (parseFloat(v) * -1).toString();
      if (type === "pct") return (parseFloat(v) / 100).toString();
      if (type === "op") {
        if (op && !fresh) {
          const a = prev!, b = parseFloat(v);
          let r = op === "+" ? a + b : op === "-" ? a - b : op === "*" ? a * b : b === 0 ? NaN : a / b;
          const res = isNaN(r) ? "Error" : parseFloat(r.toFixed(10)).toString();
          setPrev(parseFloat(res)); setOp(arg!); setFresh(true); return res;
        }
        setPrev(parseFloat(v)); setOp(arg!); setFresh(true); return v;
      }
      if (type === "eq") {
        if (!op) return v;
        const a = prev!, b = parseFloat(v);
        let r = op === "+" ? a + b : op === "-" ? a - b : op === "*" ? a * b : b === 0 ? NaN : a / b;
        const sym = op === "+" ? `${a}+${b}` : op === "-" ? `${a}−${b}` : op === "*" ? `${a}×${b}` : `${a}÷${b}`;
        const res = isNaN(r) ? "Error" : parseFloat(r.toFixed(10)).toString();
        addHist(sym, res); setOp(null); setPrev(null); setFresh(true); return res;
      }
      return next;
    });
  }, [op, prev, fresh, addHist]);

  const btn = (label: string, onClick: () => void, style: string) => (
    <button key={label} onClick={onClick} className={`${style} rounded-xl font-bold transition-all duration-75 active:translate-y-1 select-none`}
      style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.15)" }}
      onMouseDown={e => (e.currentTarget.style.boxShadow = "0 1px 0 rgba(0,0,0,0.25)")}
      onMouseUp={e => (e.currentTarget.style.boxShadow = "0 4px 0 rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.15)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 0 rgba(0,0,0,0.25), 0 4px 8px rgba(0,0,0,0.15)")}
    >{label}</button>
  );

  return (
    <div className="space-y-4">
      <div className="bg-gray-900 rounded-2xl p-4 text-right">
        <p className="text-gray-500 text-sm min-h-5">{op ? `${prev}${op}` : ""}</p>
        <p className="text-green-400 text-4xl font-bold font-mono tracking-wider break-all" style={{ textShadow: "0 0 10px rgba(74,222,128,0.4)" }}>{val}</p>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {btn("AC", () => act("clear"), "bg-red-900 text-red-200 py-4 text-base")}
        {btn("+/-", () => act("sign"), "bg-gray-700 text-white py-4 text-base")}
        {btn("%", () => act("pct"), "bg-gray-700 text-white py-4 text-base")}
        {btn("÷", () => act("op", "/"), "bg-indigo-800 text-indigo-200 py-4 text-xl")}
        {["7","8","9"].map(n => btn(n, () => act("num", n), "bg-gray-800 text-white py-4 text-xl"))}
        {btn("×", () => act("op", "*"), "bg-indigo-800 text-indigo-200 py-4 text-xl")}
        {["4","5","6"].map(n => btn(n, () => act("num", n), "bg-gray-800 text-white py-4 text-xl"))}
        {btn("−", () => act("op", "-"), "bg-indigo-800 text-indigo-200 py-4 text-xl")}
        {["1","2","3"].map(n => btn(n, () => act("num", n), "bg-gray-800 text-white py-4 text-xl"))}
        {btn("+", () => act("op", "+"), "bg-indigo-800 text-indigo-200 py-4 text-xl")}
        <button onClick={() => act("num", "0")} className="col-span-2 bg-gray-800 text-white py-4 text-xl rounded-xl font-bold transition-all duration-75 active:translate-y-1"
          style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.25)" }}>0</button>
        {btn(".", () => act("dot"), "bg-gray-800 text-white py-4 text-xl")}
        {btn("=", () => act("eq"), "bg-green-700 text-white py-4 text-xl")}
      </div>
      <div className="border-t border-gray-200 pt-3">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">History</span>
          <button onClick={() => setHistory([])} className="text-xs text-gray-400 hover:text-gray-600">Clear</button>
        </div>
        <div className="max-h-32 overflow-y-auto space-y-1">
          {history.length === 0 ? <p className="text-xs text-gray-400">No history yet</p> :
            history.map((h, i) => (
              <div key={i} className="flex justify-between text-sm bg-gray-50 rounded-lg px-3 py-1.5 cursor-pointer hover:bg-gray-100"
                onClick={() => setVal(h.result)}>
                <span className="text-gray-500 text-xs">{h.expr}</span>
                <span className="font-semibold text-gray-800">{h.result}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}