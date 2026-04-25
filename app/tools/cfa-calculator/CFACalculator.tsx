"use client";
import { useState, useCallback } from "react";

type HistItem = { expr: string; result: string };
type TVMKey = "N" | "IY" | "PV" | "PMT" | "FV";

const EMPTY_TVM = { N: null, IY: null, PV: null, PMT: null, FV: null } as Record<TVMKey, number | null>;

export default function CFACalculator() {
  const [val, setVal] = useState("0");
  const [op, setOp] = useState<string | null>(null);
  const [prev, setPrev] = useState<number | null>(null);
  const [fresh, setFresh] = useState(false);
  const [tvm, setTvm] = useState<Record<TVMKey, number | null>>(EMPTY_TVM);
  const [activeKey, setActiveKey] = useState<TVMKey | null>(null);
  const [history, setHistory] = useState<HistItem[]>([]);
  const [label, setLabel] = useState("READY");

  const addH = useCallback((e: string, r: string) => setHistory(h => [{ expr: e, result: r }, ...h].slice(0, 25)), []);

  const setTVMKey = useCallback((key: TVMKey) => {
    const v = parseFloat(val);
    setTvm(t => ({ ...t, [key]: v }));
    setActiveKey(key);
    setLabel(`${key} SET`);
    setFresh(true);
  }, [val]);

  const compute = useCallback((solve: TVMKey) => {
    const { N, IY, PV, PMT, FV } = tvm;
    try {
      let result: number;
      const r = (IY ?? 0) / 100;
      const n = N ?? 0;
      const pv = PV ?? 0;
      const pmt = PMT ?? 0;
      const fv = FV ?? 0;

      if (solve === "FV") {
        result = -(pv * Math.pow(1 + r, n) + pmt * ((Math.pow(1 + r, n) - 1) / r));
      } else if (solve === "PV") {
        result = -(fv / Math.pow(1 + r, n) + pmt * ((1 - Math.pow(1 + r, -n)) / r));
      } else if (solve === "PMT") {
        result = -(r * (pv * Math.pow(1 + r, n) + fv)) / (Math.pow(1 + r, n) - 1);
      } else if (solve === "N") {
        result = Math.log((-fv * r + pmt) / (pv * r + pmt)) / Math.log(1 + r);
      } else {
        // I/Y via Newton-Raphson
        let rt = 0.1;
        for (let i = 0; i < 200; i++) {
          const f = pv * Math.pow(1 + rt, n) + pmt * ((Math.pow(1 + rt, n) - 1) / rt) + fv;
          const df = n * pv * Math.pow(1 + rt, n - 1) + pmt * (n * rt * Math.pow(1 + rt, n - 1) - (Math.pow(1 + rt, n) - 1)) / (rt * rt);
          const nr = rt - f / df;
          if (Math.abs(nr - rt) < 1e-10) { rt = nr; break; }
          rt = nr;
        }
        result = rt * 100;
      }
      if (isNaN(result) || !isFinite(result)) { setVal("Error"); return; }
      const res = parseFloat(result.toFixed(6));
      setVal(res.toString());
      setTvm(t => ({ ...t, [solve]: res }));
      setLabel(`CPT ${solve} =`);
      setFresh(true);
      addH(`CPT ${solve} | N=${tvm.N} I/Y=${tvm.IY}% PV=${tvm.PV} PMT=${tvm.PMT} FV=${tvm.FV}`, res.toFixed(4));
    } catch { setVal("Error"); }
  }, [tvm, addH]);

  const num = (d: string) => setVal(v => { if (fresh || v === "0") { setFresh(false); return d; } return v.length < 13 ? v + d : v; });
  const dot = () => setVal(v => v.includes(".") ? v : v + ".");
  const sign = () => setVal(v => (parseFloat(v) * -1).toString());
  const del = () => setVal(v => v.length > 1 ? v.slice(0, -1) : "0");
  const clear = () => { setVal("0"); setOp(null); setPrev(null); setFresh(false); setLabel("READY"); };
  const clrTVM = () => { setTvm(EMPTY_TVM); setActiveKey(null); };

  const doOp = (o: string) => {
    if (op && !fresh) doEq();
    setPrev(parseFloat(val)); setOp(o); setFresh(true);
  };
  const doEq = () => {
    if (!op) return;
    const a = prev!, b = parseFloat(val);
    let r = op === "+" ? a + b : op === "-" ? a - b : op === "*" ? a * b : b === 0 ? NaN : a / b;
    const sym = `${a}${op === "*" ? "×" : op === "/" ? "÷" : op}${b}`;
    const res = isNaN(r) ? "Error" : parseFloat(r.toFixed(8)).toString();
    addH(sym + " = " + res, res);
    setVal(res); setOp(null); setPrev(null); setFresh(true);
  };
  const fn = (f: string) => {
    const v = parseFloat(val);
    let r: number, lbl: string;
    if (f === "sqrt") { r = Math.sqrt(v); lbl = `√${v}`; }
    else if (f === "inv") { r = 1 / v; lbl = `1/${v}`; }
    else { r = v / 100; lbl = `${v}%`; }
    const res = parseFloat(r.toFixed(8)).toString();
    addH(lbl + " = " + res, res); setVal(res); setFresh(true);
  };

  const shadow = "0 4px 0 rgba(0,0,0,0.4), 0 4px 8px rgba(0,0,0,0.3)";
  const shadowPressed = "0 1px 0 rgba(0,0,0,0.4)";
  const B = (lbl: string, onClick: () => void, cls: string, span?: string) => (
    <button key={lbl + cls} onClick={onClick}
      className={`${cls} ${span||""} rounded-xl font-bold py-3 text-xs transition-all duration-75 active:translate-y-1 select-none leading-tight`}
      style={{ boxShadow: shadow }}
      onMouseDown={e=>(e.currentTarget.style.boxShadow=shadowPressed)}
      onMouseUp={e=>(e.currentTarget.style.boxShadow=shadow)}
      onMouseLeave={e=>(e.currentTarget.style.boxShadow=shadow)}
    >{lbl}</button>
  );

  return (
    <div className="space-y-3">
      <div className="bg-gray-950 rounded-2xl p-4 border border-gray-800">
        <p className="text-green-700 text-xs font-mono tracking-widest min-h-4">{label}</p>
        <p className="text-green-400 text-3xl font-bold font-mono text-right break-all" style={{ textShadow: "0 0 10px rgba(74,222,128,0.4)" }}>{val}</p>
      </div>

      <div className="grid grid-cols-5 gap-2 bg-gray-900 rounded-xl p-3">
        {(["N","IY","PV","PMT","FV"] as TVMKey[]).map(k => (
          <div key={k} className="text-center">
            <span className="text-xs text-green-700 block font-mono">{k}</span>
            <span className={`text-xs font-mono font-bold block min-h-5 ${activeKey === k ? "text-green-400" : "text-gray-600"}`}>
              {tvm[k] !== null ? parseFloat((tvm[k] as number).toFixed(4)).toString() : "—"}
            </span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-5 gap-2">
        {B("CLR\nTVM", clrTVM, "bg-blue-950 text-blue-300 whitespace-pre-line")}
        {(["N","IY","PV","PMT","FV"] as TVMKey[]).slice(0,4).map(k => B(k, ()=>setTVMKey(k), "bg-emerald-950 text-emerald-300"))}
        {B("FV", ()=>setTVMKey("FV"), "bg-emerald-950 text-emerald-300")}
        {(["N","IY","PV","PMT","FV"] as TVMKey[]).map(k => B(`CPT\n${k}`, ()=>compute(k), "bg-green-900 text-green-300 font-extrabold whitespace-pre-line"))}
        {B("√x", ()=>fn("sqrt"), "bg-gray-800 text-gray-300")}
        {B("1/x", ()=>fn("inv"), "bg-gray-800 text-gray-300")}
        {B("%", ()=>fn("pct"), "bg-gray-800 text-gray-300")}
        {B("CE/C", clear, "bg-red-950 text-red-300")}
        {B("DEL", del, "bg-red-950 text-red-300")}
        {["7","8","9"].map(n=>B(n, ()=>num(n), "bg-gray-800 text-white text-base"))}
        {B("÷", ()=>doOp("/"), "bg-purple-950 text-purple-300 text-base")}
        {B("+/-", sign, "bg-gray-700 text-gray-300")}
        {["4","5","6"].map(n=>B(n, ()=>num(n), "bg-gray-800 text-white text-base"))}
        {B("×", ()=>doOp("*"), "bg-purple-950 text-purple-300 text-base")}
        {B("DEL", del, "bg-gray-700 text-gray-300")}
        {["1","2","3"].map(n=>B(n, ()=>num(n), "bg-gray-800 text-white text-base"))}
        {B("−", ()=>doOp("-"), "bg-purple-950 text-purple-300 text-base")}
        {B("+", ()=>doOp("+"), "bg-purple-950 text-purple-300 text-base")}
        <button onClick={()=>num("0")} className="col-span-2 bg-gray-800 text-white rounded-xl font-bold text-base py-3 active:translate-y-1" style={{boxShadow:shadow}}>0</button>
        {B(".", dot, "bg-gray-800 text-white text-base")}
        <button onClick={doEq} className="col-span-2 bg-yellow-700 text-white rounded-xl font-extrabold text-sm py-3 active:translate-y-1" style={{boxShadow:"0 4px 0 #7a4a00"}}>ENTER =</button>
      </div>

      <div className="border-t border-gray-800 pt-3">
        <div className="flex justify-between mb-2"><span className="text-xs text-gray-600">History</span><button onClick={()=>setHistory([])} className="text-xs text-gray-700 hover:text-gray-500">Clear</button></div>
        <div className="max-h-28 overflow-y-auto space-y-1">
          {history.length===0?<p className="text-xs text-gray-700">No history yet</p>:history.map((h,i)=>(
            <div key={i} className="flex justify-between text-xs bg-gray-900 rounded px-2 py-1 cursor-pointer hover:bg-gray-800" onClick={()=>setVal(h.result)}>
              <span className="text-gray-600 flex-1 mr-2 break-all">{h.expr}</span><span className="text-green-400 font-mono font-bold whitespace-nowrap">{h.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}