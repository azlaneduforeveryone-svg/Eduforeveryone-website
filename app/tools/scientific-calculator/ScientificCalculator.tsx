"use client";
import { useState, useCallback } from "react";

type HistItem = { expr: string; result: string };

export default function ScientificCalculator() {
  const [val, setVal] = useState("0");
  const [op, setOp] = useState<string | null>(null);
  const [prev, setPrev] = useState<number | null>(null);
  const [fresh, setFresh] = useState(false);
  const [expr, setExpr] = useState("");
  const [mode, setMode] = useState<"deg"|"rad"|"grd">("deg");
  const [is2nd, setIs2nd] = useState(false);
  const [mem, setMem] = useState(0);
  const [history, setHistory] = useState<HistItem[]>([]);

  const toAng = (v: number) => mode === "deg" ? v * Math.PI / 180 : mode === "grd" ? v * Math.PI / 200 : v;
  const frAng = (v: number) => mode === "deg" ? v * 180 / Math.PI : mode === "grd" ? v * 200 / Math.PI : v;

  const addH = useCallback((e: string, r: string) => setHistory(h => [{ expr: e, result: r }, ...h].slice(0, 25)), []);

  const applyFn = useCallback((fn: string) => {
    const v = parseFloat(val);
    let r: number, lbl: string;
    switch (fn) {
      case "sin": r = is2nd ? frAng(Math.asin(v)) : Math.sin(toAng(v)); lbl = (is2nd ? "sin⁻¹" : "sin") + `(${v})`; break;
      case "cos": r = is2nd ? frAng(Math.acos(v)) : Math.cos(toAng(v)); lbl = (is2nd ? "cos⁻¹" : "cos") + `(${v})`; break;
      case "tan": r = is2nd ? frAng(Math.atan(v)) : Math.tan(toAng(v)); lbl = (is2nd ? "tan⁻¹" : "tan") + `(${v})`; break;
      case "log": r = is2nd ? Math.pow(10, v) : Math.log10(v); lbl = is2nd ? `10^${v}` : `log(${v})`; break;
      case "ln":  r = is2nd ? Math.exp(v) : Math.log(v); lbl = is2nd ? `e^${v}` : `ln(${v})`; break;
      case "sq":  r = is2nd ? Math.sqrt(v) : v * v; lbl = is2nd ? `√${v}` : `${v}²`; break;
      case "cb":  r = is2nd ? Math.cbrt(v) : Math.pow(v, 3); lbl = is2nd ? `∛${v}` : `${v}³`; break;
      case "sqrt":r = is2nd ? v * v : Math.sqrt(v); lbl = is2nd ? `${v}²` : `√${v}`; break;
      case "cbrt":r = is2nd ? Math.pow(v, 3) : Math.cbrt(v); lbl = is2nd ? `${v}³` : `∛${v}`; break;
      case "inv": r = 1 / v; lbl = `1/${v}`; break;
      case "abs": r = is2nd ? Math.trunc(v) : Math.abs(v); lbl = is2nd ? `INT(${v})` : `|${v}|`; break;
      case "fact":{const n=Math.round(v);let f=1;for(let i=2;i<=n;i++)f*=i;r=f;lbl=`${n}!`;}break;
      case "pct": r = v / 100; lbl = `${v}%`; break;
      case "pi":  r = Math.PI; lbl = "π"; break;
      case "e":   r = Math.E; lbl = "e"; break;
      case "rand":r = Math.random(); lbl = "RND"; break;
      case "pow": setPrev(v); setOp("^"); setFresh(true); setExpr(`${v}^`); return;
      case "ms":  setMem(m => m + v); return;
      case "ms-": setMem(m => m - v); return;
      case "mr":  setVal(mem.toString()); setFresh(true); return;
      case "mc":  setMem(0); return;
      default: return;
    }
    if (isNaN(r!) || !isFinite(r!)) { setVal("Error"); return; }
    const res = parseFloat(r!.toFixed(10)).toString();
    addH(lbl! + " = " + res, res);
    setVal(res); setFresh(true); setExpr(lbl! + " =");
  }, [val, is2nd, mode, mem, addH, frAng, toAng]);

  const act = useCallback((type: string, arg?: string) => {
    if (type === "ac") { setVal("0"); setOp(null); setPrev(null); setFresh(false); setExpr(""); return; }
    if (type === "del") { setVal(v => v.length > 1 ? v.slice(0, -1) : "0"); return; }
    setVal(v => {
      if (type === "n") { if (fresh || v === "0") { setFresh(false); return arg!; } return v.length < 14 ? v + arg! : v; }
      if (type === "dot") return v.includes(".") ? v : v + ".";
      if (type === "sign") return (parseFloat(v) * -1).toString();
      if (type === "op") {
        if (op && !fresh) {
          const a = prev!, b = parseFloat(v);
          let r = op === "+" ? a + b : op === "-" ? a - b : op === "*" ? a * b : op === "/" ? (b === 0 ? NaN : a / b) : Math.pow(a, b);
          const res = isNaN(r) ? "Error" : parseFloat(r.toFixed(10)).toString();
          setPrev(parseFloat(res)); setOp(arg!); setFresh(true); setExpr(res + arg!); return res;
        }
        setPrev(parseFloat(v)); setOp(arg!); setFresh(true); setExpr(v + arg!); return v;
      }
      if (type === "eq") {
        if (!op) return v;
        const a = prev!, b = parseFloat(v);
        let r = op === "+" ? a + b : op === "-" ? a - b : op === "*" ? a * b : op === "/" ? (b === 0 ? NaN : a / b) : Math.pow(a, b);
        const sym = `${a}${op === "*" ? "×" : op === "/" ? "÷" : op}${b}`;
        const res = isNaN(r) ? "Error" : parseFloat(r.toFixed(10)).toString();
        addH(sym + " = " + res, res); setOp(null); setPrev(null); setFresh(true); setExpr(""); return res;
      }
      return v;
    });
  }, [op, prev, fresh, addH]);

  const B = (label: string, onClick: () => void, cls: string, span?: string) => (
    <button key={label + cls} onClick={onClick}
      className={`${cls} ${span || ""} rounded-xl font-bold text-sm py-3 transition-all duration-75 active:translate-y-1 select-none`}
      style={{ boxShadow: "0 4px 0 rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3)" }}
      onMouseDown={e => (e.currentTarget.style.boxShadow = "0 1px 0 rgba(0,0,0,0.4)")}
      onMouseUp={e => (e.currentTarget.style.boxShadow = "0 4px 0 rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 4px 0 rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3)")}
    >{label}</button>
  );

  const FN = (lbl: string, fn: string) => B(lbl, () => applyFn(fn), "bg-green-900 text-green-300");
  const FN2 = (lbl: string, fn: string) => B(lbl, () => applyFn(fn), "bg-blue-950 text-blue-300");
  const NUM = (n: string) => B(n, () => act("n", n), "bg-gray-800 text-white text-base");
  const OP = (lbl: string, o: string) => B(lbl, () => act("op", o), "bg-purple-950 text-purple-300 text-base");

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        {(["deg","rad","grd"] as const).map(m => (
          <button key={m} onClick={() => setMode(m)} className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${mode === m ? "bg-green-900 text-green-300 border-green-700" : "border-gray-600 text-gray-500"}`}>{m.toUpperCase()}</button>
        ))}
        <button onClick={() => setIs2nd(s => !s)} className={`px-3 py-1 rounded-full text-xs font-bold border transition-all ${is2nd ? "bg-blue-900 text-blue-300 border-blue-700" : "border-gray-600 text-gray-500"}`}>2ND {is2nd ? "ON" : "OFF"}</button>
        {mem !== 0 && <span className="px-3 py-1 text-xs text-green-400 font-mono">M:{parseFloat(mem.toFixed(6))}</span>}
      </div>
      <div className="bg-gray-950 rounded-2xl p-4 text-right border border-gray-800">
        <p className="text-green-700 text-xs font-mono min-h-4">{expr}</p>
        <p className="text-green-400 text-3xl font-bold font-mono break-all" style={{ textShadow: "0 0 10px rgba(74,222,128,0.4)" }}>{val}</p>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {FN(is2nd?"sin⁻¹":"sin","sin")}{FN(is2nd?"cos⁻¹":"cos","cos")}{FN(is2nd?"tan⁻¹":"tan","tan")}{FN(is2nd?"10ˣ":"log","log")}{FN(is2nd?"eˣ":"ln","ln")}
        {FN(is2nd?"√x":"x²","sq")}{FN(is2nd?"∛x":"x³","cb")}{FN(is2nd?"x²":"√x","sqrt")}{FN(is2nd?"x³":"∛x","cbrt")}{FN("xʸ","pow")}
        {FN("1/x","inv")}{FN("|x|","abs")}{FN("n!","fact")}{FN("%","pct")}{FN("eˣ","e")}
        {FN2("π","pi")}{FN2("e","e")}{FN2("M+","ms")}{FN2("MR","mr")}{FN2("MC","mc")}
        {B("AC",()=>act("ac"),"bg-red-950 text-red-300")}{B("DEL",()=>act("del"),"bg-red-950 text-red-300")}{FN2("RND","rand")}{OP("÷","/")} {OP("×","*")}
        {NUM("7")}{NUM("8")}{NUM("9")}{OP("−","-")}{OP("+","+")}
        {NUM("4")}{NUM("5")}{NUM("6")}{B("+/-",()=>act("sign"),"bg-blue-950 text-blue-300")}{FN2("M-","ms-")}
        {NUM("1")}{NUM("2")}{NUM("3")}
        <button onClick={()=>act("n","0")} className="col-span-2 bg-gray-800 text-white rounded-xl font-bold text-base py-3 active:translate-y-1" style={{boxShadow:"0 4px 0 rgba(0,0,0,0.4)"}}>0</button>
        {B(".",()=>act("dot"),"bg-gray-800 text-white text-base")}
        <button onClick={()=>act("eq")} className="col-span-3 bg-cyan-900 text-cyan-300 rounded-xl font-bold text-base py-3 active:translate-y-1" style={{boxShadow:"0 4px 0 rgba(0,0,0,0.4)"}}>= ENTER</button>
      </div>
      <div className="border-t border-gray-700 pt-3">
        <div className="flex justify-between mb-2"><span className="text-xs text-gray-500">History</span><button onClick={()=>setHistory([])} className="text-xs text-gray-600 hover:text-gray-400">Clear</button></div>
        <div className="max-h-28 overflow-y-auto space-y-1">
          {history.length===0?<p className="text-xs text-gray-600">No history yet</p>:history.map((h,i)=>(
            <div key={i} className="flex justify-between text-xs bg-gray-900 rounded px-2 py-1 cursor-pointer hover:bg-gray-800" onClick={()=>setVal(h.result)}>
              <span className="text-gray-600">{h.expr}</span><span className="text-green-400 font-mono font-bold">{h.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}