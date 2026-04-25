"use client";
import { useState } from "react";

type Tab = "tvm" | "npv" | "irr" | "bond";
type Mode = "phy" | "form";
type TVMKey = "N" | "IY" | "PV" | "PMT" | "FV";
type HistItem = { expr: string; result: string };

// ── Verified Calculations ─────────────────────────────────────────────────────
function solveTVM(solve: TVMKey, vals: Record<TVMKey, number>): number {
  const r = vals.IY / 100, n = vals.N, pv = vals.PV, pmt = vals.PMT, fv = vals.FV;
  if (solve === "FV")  return -(pv * Math.pow(1+r,n) + pmt * ((Math.pow(1+r,n)-1)/r));
  if (solve === "PV")  return -(fv / Math.pow(1+r,n) + pmt * ((1-Math.pow(1+r,-n))/r));
  if (solve === "PMT") return -(r * (pv * Math.pow(1+r,n) + fv)) / (Math.pow(1+r,n)-1);
  if (solve === "N")   return Math.log((-fv*r+pmt)/(pv*r+pmt)) / Math.log(1+r);
  let rt = 0.1; // I/Y Newton-Raphson
  for (let i = 0; i < 200; i++) {
    const f  = pv*Math.pow(1+rt,n) + pmt*((Math.pow(1+rt,n)-1)/rt) + fv;
    const df = n*pv*Math.pow(1+rt,n-1) + pmt*(n*rt*Math.pow(1+rt,n-1)-(Math.pow(1+rt,n)-1))/(rt*rt);
    const nr = rt - f/df;
    if (Math.abs(nr-rt) < 1e-10) { rt = nr; break; }
    rt = nr;
  }
  return rt * 100;
}

function solveNPV(initial: number, flows: number[], rate: number): number {
  let npv = -initial;
  flows.forEach((cf, i) => { npv += cf / Math.pow(1 + rate/100, i+1); });
  return npv;
}

function solveIRR(initial: number, flows: number[]): number {
  let r = 0.1;
  for (let i = 0; i < 1000; i++) {
    let npv = -initial, dnpv = 0;
    flows.forEach((cf, t) => { npv += cf/Math.pow(1+r,t+1); dnpv -= (t+1)*cf/Math.pow(1+r,t+2); });
    if (Math.abs(npv) < 1e-8) break;
    r = r - npv/dnpv;
  }
  return r * 100;
}

function solveBond(face: number, couponRate: number, ytm: number, years: number): number {
  const C = face * (couponRate/100), y = ytm/100;
  let price = 0;
  for (let t = 1; t <= years; t++) price += C / Math.pow(1+y, t);
  return price + face / Math.pow(1+y, years);
}

// ── Shared UI ─────────────────────────────────────────────────────────────────
const shadow = "0 4px 0 rgba(0,0,0,0.35), 0 4px 8px rgba(0,0,0,0.2)";
const shadowPress = "0 1px 0 rgba(0,0,0,0.35)";

function PhyBtn({ label, onClick, cls, span }: { label: string; onClick: () => void; cls: string; span?: string }) {
  return (
    <button onClick={onClick}
      className={`${cls} ${span||""} rounded-xl font-bold py-3 text-xs transition-all duration-75 active:translate-y-1 select-none leading-tight`}
      style={{ boxShadow: shadow }}
      onMouseDown={e=>(e.currentTarget.style.boxShadow=shadowPress)}
      onMouseUp={e=>(e.currentTarget.style.boxShadow=shadow)}
      onMouseLeave={e=>(e.currentTarget.style.boxShadow=shadow)}
    >{label}</button>
  );
}

function Field({ label, value, onChange, placeholder, hint }: { label: string; value: string; onChange: (v: string) => void; placeholder: string; hint?: string }) {
  return (
    <div className="mb-3">
      <label className="block text-xs font-semibold text-gray-500 mb-1">{label}{hint && <span className="ml-1 text-gray-400 font-normal">{hint}</span>}</label>
      <input type="number" value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white" />
    </div>
  );
}

function FormBtn({ onClick, label }: { onClick: () => void; label: string }) {
  return (
    <button onClick={onClick} className="w-full bg-teal-600 text-white rounded-xl py-3 font-bold text-base mt-1 active:translate-y-0.5"
      style={{ boxShadow: "0 4px 0 #0F6E56" }}
      onMouseDown={e=>(e.currentTarget.style.boxShadow="0 1px 0 #0F6E56")}
      onMouseUp={e=>(e.currentTarget.style.boxShadow="0 4px 0 #0F6E56")}
      onMouseLeave={e=>(e.currentTarget.style.boxShadow="0 4px 0 #0F6E56")}>{label}</button>
  );
}

function ResultBox({ rows }: { rows: { label: string; value: string; main?: boolean }[] }) {
  return (
    <div className="mt-4 bg-teal-50 border border-teal-100 rounded-2xl p-4 space-y-2">
      {rows.map((r, i) => (
        <div key={i} className={`flex justify-between items-center ${r.main ? "border-b border-teal-200 pb-2 mb-1" : ""}`}>
          <span className="text-sm text-gray-600">{r.label}</span>
          <span className={`font-bold font-mono ${r.main ? "text-xl text-teal-700" : "text-gray-800"}`}>{r.value}</span>
        </div>
      ))}
    </div>
  );
}

function InfoBox({ text }: { text: string }) {
  return <div className="mt-3 bg-blue-50 border border-blue-100 rounded-xl p-3 text-xs text-blue-700 leading-relaxed">{text}</div>;
}

function HistBox({ history, onClear }: { history: HistItem[]; onClear: () => void }) {
  return (
    <div className="mt-3 border-t border-gray-100 pt-3">
      <div className="flex justify-between mb-2">
        <span className="text-xs text-gray-400">History</span>
        <button onClick={onClear} className="text-xs text-gray-400 hover:text-gray-600">Clear</button>
      </div>
      <div className="max-h-24 overflow-y-auto space-y-1">
        {history.length === 0
          ? <p className="text-xs text-gray-400">No calculations yet</p>
          : history.map((h, i) => (
              <div key={i} className="flex justify-between text-xs bg-gray-50 rounded-lg px-3 py-1.5">
                <span className="text-gray-400 flex-1 mr-2 truncate">{h.expr}</span>
                <span className="text-teal-700 font-bold font-mono whitespace-nowrap">{h.result}</span>
              </div>
            ))}
      </div>
    </div>
  );
}

// ── Physical Calculator Base ──────────────────────────────────────────────────
function usePhyCalc() {
  const [v, setV] = useState("0");
  const [op, setOp] = useState<string|null>(null);
  const [pr, setPr] = useState<number|null>(null);
  const [fr, setFr] = useState(false);
  const num  = (d: string) => setV(cur => { if(fr||cur==="0"){setFr(false);return d;} return cur.length<12?cur+d:cur; });
  const dot  = () => setV(cur => cur.includes(".")?cur:cur+".");
  const sign = () => setV(cur => (parseFloat(cur)*-1).toString());
  const del  = () => setV(cur => cur.length>1?cur.slice(0,-1):"0");
  const ac   = () => { setV("0"); setOp(null); setPr(null); setFr(false); };
  const doOp = (o: string) => { if(op&&!fr)doEq(o); setPr(parseFloat(v)); setOp(o); setFr(true); };
  const doEq = (nextOp?: string) => {
    if(!op) return;
    const a=pr!, b=parseFloat(v);
    let r = op==="+"?a+b:op==="-"?a-b:op==="*"?a*b:b===0?NaN:a/b;
    const res = isNaN(r)?"Error":parseFloat(r.toFixed(8)).toString();
    setV(res); setOp(nextOp||null); setPr(nextOp?parseFloat(res):null); setFr(true);
  };
  return { v, setV, fr, setFr, num, dot, sign, del, ac, doOp, doEq };
}

// ── TVM Physical ──────────────────────────────────────────────────────────────
function TVMPhy() {
  const { v, setV, setFr, num, dot, sign, del, ac, doOp, doEq } = usePhyCalc();
  const [tvm, setTvm] = useState<Record<TVMKey,number|null>>({N:null,IY:null,PV:null,PMT:null,FV:null});
  const [active, setActive] = useState<TVMKey|null>(null);
  const [lbl, setLbl] = useState("READY");
  const [hist, setHist] = useState<HistItem[]>([]);

  const setKey = (k: TVMKey) => { const val=parseFloat(v); setTvm(t=>({...t,[k]:val})); setActive(k); setLbl(k+" SET"); setFr(true); };
  const cpt = (solve: TVMKey) => {
    try {
      const filled = {...tvm} as Record<TVMKey,number>;
      (Object.keys(filled) as TVMKey[]).filter(k=>k!==solve).forEach(k=>{ if(filled[k]===null) throw new Error(); });
      const res = solveTVM(solve, filled);
      if(isNaN(res)||!isFinite(res)) throw new Error();
      const r = parseFloat(res.toFixed(6));
      setV(r.toString()); setTvm(t=>({...t,[solve]:r})); setActive(solve); setLbl("CPT "+solve+" ="); setFr(true);
      setHist(h=>[{expr:`CPT ${solve} | N=${tvm.N} I/Y=${tvm.IY}% PV=${tvm.PV} PMT=${tvm.PMT} FV=${tvm.FV}`,result:r.toFixed(4)},...h].slice(0,15));
    } catch { setV("ERROR"); setFr(true); }
  };

  const N = (l:string,fn:()=>void,c:string,s?:string) => <PhyBtn label={l} onClick={fn} cls={c} span={s}/>;
  return (
    <div className="bg-gray-950 rounded-2xl p-3 border border-gray-800">
      <div className="bg-gray-900 rounded-xl p-3 mb-3 text-right border border-gray-800">
        <p className="text-green-800 text-xs font-mono tracking-widest min-h-4">{lbl}</p>
        <p className="text-green-400 text-3xl font-bold font-mono break-all" style={{textShadow:"0 0 8px rgba(74,222,128,0.4)"}}>{v}</p>
      </div>
      <div className="grid grid-cols-5 gap-2 bg-gray-900 rounded-xl p-2 mb-2">
        {(["N","IY","PV","PMT","FV"] as TVMKey[]).map(k=>(
          <div key={k} className="text-center">
            <span className="text-xs text-green-800 block font-mono">{k}</span>
            <span className={`text-xs font-mono font-bold block min-h-4 ${active===k?"text-green-400":"text-gray-700"}`}>
              {tvm[k]!==null?parseFloat((tvm[k] as number).toFixed(3)).toString():"—"}
            </span>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-2 mb-2">
        {(["N","IY","PV","PMT","FV"] as TVMKey[]).map(k=>N(k,()=>setKey(k),"bg-emerald-950 text-emerald-300"))}
        {(["N","IY","PV","PMT","FV"] as TVMKey[]).map(k=>N("CPT\n"+k,()=>cpt(k),"bg-green-900 text-green-300 font-extrabold whitespace-pre-line"))}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {N("AC",ac,"bg-red-950 text-red-300")}
        {N("+/-",sign,"bg-gray-700 text-gray-300")}
        {N("DEL",del,"bg-gray-700 text-gray-300")}
        {N("÷",()=>doOp("/"),"bg-purple-950 text-purple-300 text-base")}
        {["7","8","9"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}
        {N("×",()=>doOp("*"),"bg-purple-950 text-purple-300 text-base")}
        {["4","5","6"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}
        {N("−",()=>doOp("-"),"bg-purple-950 text-purple-300 text-base")}
        {["1","2","3"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}
        {N("+",()=>doOp("+"),"bg-purple-950 text-purple-300 text-base")}
        <button onClick={()=>num("0")} className="col-span-2 bg-gray-800 text-white rounded-xl font-bold text-base py-3 active:translate-y-1" style={{boxShadow:shadow}}>0</button>
        {N(".",dot,"bg-gray-800 text-white text-base")}
        <button onClick={()=>doEq()} className="col-span-1 bg-yellow-700 text-white rounded-xl font-extrabold text-base py-3 active:translate-y-1" style={{boxShadow:"0 4px 0 #7a4a00"}}>=</button>
      </div>
      <div className="mt-3 border-t border-gray-800 pt-3">
        <div className="flex justify-between mb-2"><span className="text-xs text-gray-600">History</span><button onClick={()=>setHist([])} className="text-xs text-gray-700 hover:text-gray-500">Clear</button></div>
        <div className="max-h-24 overflow-y-auto space-y-1">
          {hist.length===0?<p className="text-xs text-gray-700">No history yet</p>:hist.map((h,i)=>(
            <div key={i} className="flex justify-between text-xs bg-gray-900 rounded px-2 py-1">
              <span className="text-gray-600 flex-1 mr-2 truncate">{h.expr}</span>
              <span className="text-green-400 font-mono font-bold whitespace-nowrap">{h.result}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── TVM Form ──────────────────────────────────────────────────────────────────
function TVMForm() {
  const [fields, setFields] = useState<Record<TVMKey,string>>({N:"",IY:"",PV:"",PMT:"",FV:""});
  const [result, setResult] = useState<{key:TVMKey;val:number}|null>(null);
  const [error, setError] = useState("");
  const [hist, setHist] = useState<HistItem[]>([]);

  const set = (k:TVMKey) => (v:string) => setFields(f=>({...f,[k]:v}));
  const solve = (key:TVMKey) => {
    try {
      const vals = {} as Record<TVMKey,number>;
      (Object.keys(fields) as TVMKey[]).filter(k=>k!==key).forEach(k=>{ if(!fields[k]) throw new Error(`Enter ${k}`); vals[k]=parseFloat(fields[k]); });
      vals[key]=0;
      const res = solveTVM(key, vals);
      if(isNaN(res)||!isFinite(res)) throw new Error("Invalid inputs");
      const r = parseFloat(res.toFixed(6));
      setResult({key,val:r}); setFields(f=>({...f,[key]:r.toString()})); setError("");
      setHist(h=>[{expr:`CPT ${key}`,result:r.toFixed(4)},...h].slice(0,15));
    } catch(e:any) { setError(e.message); }
  };

  return (
    <div className="space-y-2">
      <p className="text-xs text-gray-400 mb-3">Leave one field empty — click its CPT button to solve for it</p>
      {([["N","Periods","e.g. 60"],["IY","Annual Rate %","e.g. 5"],["PV","Present Value","e.g. -10000 (negative for loans)"],["PMT","Payment","e.g. 0"],["FV","Future Value","e.g. 0"]] as [TVMKey,string,string][]).map(([k,lbl,ph])=>(
        <Field key={k} label={`${k} — ${lbl}`} value={fields[k]} onChange={set(k)} placeholder={ph} />
      ))}
      <div className="grid grid-cols-5 gap-1">
        {(["N","IY","PV","PMT","FV"] as TVMKey[]).map(k=>(
          <button key={k} onClick={()=>solve(k)} className="bg-gray-800 text-white rounded-lg py-2 text-xs font-bold hover:bg-gray-700 active:translate-y-0.5" style={{boxShadow:"0 3px 0 #111"}}>
            CPT<br/>{k}
          </button>
        ))}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {result && <ResultBox rows={[{label:`Computed ${result.key}`,value:result.val.toFixed(4),main:true}]}/>}
      <HistBox history={hist} onClear={()=>setHist([])}/>
    </div>
  );
}

// ── NPV Form ──────────────────────────────────────────────────────────────────
function NPVForm() {
  const [init,setInit]=useState(""); const [flows,setFlows]=useState(""); const [rate,setRate]=useState("");
  const [result,setResult]=useState<number|null>(null); const [error,setError]=useState("");
  const [hist,setHist]=useState<HistItem[]>([]);
  const calc=()=>{
    try{
      const i=parseFloat(init),r=parseFloat(rate),cf=flows.split(",").map(s=>parseFloat(s.trim()));
      if(isNaN(i)||isNaN(r)||cf.some(isNaN)) throw new Error("Check all fields");
      const npv=solveNPV(i,cf,r); setResult(npv); setError("");
      setHist(h=>[{expr:`NPV | Init=${i} Rate=${r}%`,result:npv.toFixed(2)},...h].slice(0,15));
    }catch(e:any){setError(e.message);}
  };
  return (
    <div>
      <Field label="Initial Investment" value={init} onChange={setInit} placeholder="e.g. 10000"/>
      <div className="mb-3"><label className="block text-xs font-semibold text-gray-500 mb-1">Cash Flows <span className="text-gray-400 font-normal">(comma separated)</span></label>
        <input type="text" value={flows} onChange={e=>setFlows(e.target.value)} placeholder="e.g. 3000, 4000, 5000"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"/></div>
      <Field label="Discount Rate %" value={rate} onChange={setRate} placeholder="e.g. 10"/>
      <FormBtn onClick={calc} label="Calculate NPV"/>
      {error&&<p className="text-red-500 text-sm mt-2">{error}</p>}
      {result!==null&&<ResultBox rows={[{label:"Net Present Value",value:`$${result.toFixed(2)}`,main:true},{label:result>=0?"✅ Accept project":"❌ Reject project",value:result>=0?"Positive":"Negative"}]}/>}
      <InfoBox text="NPV > 0 means the project earns more than the discount rate — accept it. NPV < 0 — reject it."/>
      <HistBox history={hist} onClear={()=>setHist([])}/>
    </div>
  );
}

// ── NPV Physical ──────────────────────────────────────────────────────────────
function NPVPhy() {
  const [v,setV]=useState("0"); const [step,setStep]=useState(0);
  const [init,setInit]=useState(0); const [flows,setFlows]=useState<number[]>([]); const [rate,setRate]=useState(0);
  const [result,setResult]=useState<number|null>(null); const [status,setStatus]=useState("Step 1: Enter initial investment → ENTER");

  const steps=["ENTER INITIAL INVESTMENT","ADD CASH FLOW → ENTER each","ENTER DISCOUNT RATE %"];
  const num=(d:string)=>setV(cur=>cur==="0"?d:cur.length<12?cur+d:cur);
  const dot=()=>setV(cur=>cur.includes(".")?cur:cur+".");
  const sign=()=>setV(cur=>(parseFloat(cur)*-1).toString());
  const del=()=>setV(cur=>cur.length>1?cur.slice(0,-1):"0");
  const ac=()=>setV("0");

  const enter=()=>{
    const val=parseFloat(v);
    if(step===0){setInit(val);setStep(1);setStatus("Add cash flows → press CF+ then ENTER each one");}
    else if(step===1){setFlows(f=>[...f,val]);setStatus(`CF added: [${[...flows,val].join(", ")}] — add more or switch to RATE%`);}
    else if(step===2){setRate(val);const npv=solveNPV(init,[...flows],val);setResult(npv);setStatus(`NPV = $${npv.toFixed(2)} ${npv>=0?"✓ ACCEPT":"✗ REJECT"}`);}
    setV("0");
  };

  const N=(l:string,fn:()=>void,c:string,s?:string)=><PhyBtn label={l} onClick={fn} cls={c} span={s}/>;
  return (
    <div className="bg-gray-950 rounded-2xl p-3 border border-gray-800">
      <div className="bg-gray-900 rounded-xl p-3 mb-3 text-right border border-gray-800">
        <p className="text-green-800 text-xs font-mono min-h-4">{steps[step]}</p>
        <p className="text-green-400 text-3xl font-bold font-mono">{v}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {N("INIT",()=>{setStep(0);},"bg-emerald-950 text-emerald-300")}
        {N("CF+",()=>{setStep(1);},"bg-emerald-950 text-emerald-300")}
        {N("RATE%",()=>{setStep(2);},"bg-emerald-950 text-emerald-300")}
        {N("COMPUTE NPV",()=>{if(flows.length>0){const npv=solveNPV(init,flows,rate);setResult(npv);setStatus(`NPV = $${npv.toFixed(2)} ${npv>=0?"✓ ACCEPT":"✗ REJECT"}`);}},
          "bg-green-900 text-green-300 font-extrabold col-span-2")}
        {N("RESET",()=>{setV("0");setStep(0);setInit(0);setFlows([]);setRate(0);setResult(null);setStatus("Step 1: Enter initial investment → ENTER");},"bg-red-950 text-red-300")}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {N("AC",ac,"bg-red-950 text-red-300")}{N("+/-",sign,"bg-gray-700 text-gray-300")}{N("DEL",del,"bg-gray-700 text-gray-300")}<div/>
        {["7","8","9"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        {["4","5","6"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        {["1","2","3"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        <button onClick={()=>num("0")} className="col-span-2 bg-gray-800 text-white rounded-xl font-bold text-base py-3 active:translate-y-1" style={{boxShadow:shadow}}>0</button>
        {N(".",dot,"bg-gray-800 text-white text-base")}
        <button onClick={enter} className="bg-yellow-700 text-white rounded-xl font-extrabold py-3 active:translate-y-1" style={{boxShadow:"0 4px 0 #7a4a00"}}>ENTER</button>
      </div>
      <p className="text-xs text-green-700 font-mono mt-2">{status}</p>
      {result!==null&&<div className="mt-2 bg-gray-900 rounded-xl p-3"><p className="text-green-400 font-mono font-bold text-sm">NPV = ${result.toFixed(2)} {result>=0?"✓ ACCEPT":"✗ REJECT"}</p></div>}
    </div>
  );
}

// ── IRR Form ──────────────────────────────────────────────────────────────────
function IRRForm() {
  const [init,setInit]=useState(""); const [flows,setFlows]=useState(""); const [hurdle,setHurdle]=useState("");
  const [result,setResult]=useState<number|null>(null); const [error,setError]=useState("");
  const [hist,setHist]=useState<HistItem[]>([]);
  const calc=()=>{
    try{
      const i=parseFloat(init),cf=flows.split(",").map(s=>parseFloat(s.trim()));
      if(isNaN(i)||cf.some(isNaN)) throw new Error("Check all fields");
      const irr=solveIRR(i,cf); if(isNaN(irr)) throw new Error("Could not converge");
      setResult(irr); setError("");
      setHist(h=>[{expr:`IRR | Init=${i}`,result:irr.toFixed(4)+"%"},...h].slice(0,15));
    }catch(e:any){setError(e.message);}
  };
  const h=hurdle?parseFloat(hurdle):null;
  return (
    <div>
      <Field label="Initial Investment" value={init} onChange={setInit} placeholder="e.g. 10000"/>
      <div className="mb-3"><label className="block text-xs font-semibold text-gray-500 mb-1">Cash Flows <span className="text-gray-400 font-normal">(comma separated)</span></label>
        <input type="text" value={flows} onChange={e=>setFlows(e.target.value)} placeholder="e.g. 3000, 4000, 5000"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-teal-500"/></div>
      <Field label="Hurdle Rate %" value={hurdle} onChange={setHurdle} placeholder="e.g. 10 (optional)"/>
      <FormBtn onClick={calc} label="Calculate IRR"/>
      {error&&<p className="text-red-500 text-sm mt-2">{error}</p>}
      {result!==null&&<ResultBox rows={[{label:"Internal Rate of Return",value:`${result.toFixed(4)}%`,main:true},...(h!==null?[{label:result>=h?"✅ Accept (IRR ≥ Hurdle)":"❌ Reject (IRR < Hurdle)",value:result>=h?"Profitable":"Not profitable"}]:[])]}/>}
      <InfoBox text="IRR is the rate that makes NPV = 0. If IRR > your required return (hurdle rate), accept the project."/>
      <HistBox history={hist} onClear={()=>setHist([])}/>
    </div>
  );
}

// ── IRR Physical ──────────────────────────────────────────────────────────────
function IRRPhy() {
  const [v,setV]=useState("0"); const [step,setStep]=useState(0);
  const [init,setInit]=useState(0); const [flows,setFlows]=useState<number[]>([]); const [hurdle,setHurdle]=useState<number|null>(null);
  const [result,setResult]=useState<number|null>(null); const [status,setStatus]=useState("Step 1: Enter initial investment → ENTER");

  const steps=["ENTER INITIAL INVESTMENT","ADD CASH FLOW → ENTER each","ENTER HURDLE RATE % (optional)"];
  const num=(d:string)=>setV(cur=>cur==="0"?d:cur.length<12?cur+d:cur);
  const dot=()=>setV(cur=>cur.includes(".")?cur:cur+".");
  const sign=()=>setV(cur=>(parseFloat(cur)*-1).toString());
  const del=()=>setV(cur=>cur.length>1?cur.slice(0,-1):"0");
  const ac=()=>setV("0");

  const enter=()=>{
    const val=parseFloat(v);
    if(step===0){setInit(val);setStep(1);setStatus("Add cash flows → CF+ then ENTER each");}
    else if(step===1){setFlows(f=>[...f,val]);setStatus(`CF: [${[...flows,val].join(", ")}]`);}
    else if(step===2){setHurdle(val);const irr=solveIRR(init,[...flows]);setResult(irr);setStatus(`IRR = ${irr.toFixed(4)}% ${val?irr>=val?"✓ ACCEPT":"✗ REJECT":""}`);}
    setV("0");
  };

  const N=(l:string,fn:()=>void,c:string,s?:string)=><PhyBtn label={l} onClick={fn} cls={c} span={s}/>;
  return (
    <div className="bg-gray-950 rounded-2xl p-3 border border-gray-800">
      <div className="bg-gray-900 rounded-xl p-3 mb-3 text-right border border-gray-800">
        <p className="text-green-800 text-xs font-mono min-h-4">{steps[Math.min(step,2)]}</p>
        <p className="text-green-400 text-3xl font-bold font-mono">{v}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-2">
        {N("INIT",()=>setStep(0),"bg-emerald-950 text-emerald-300")}
        {N("CF+",()=>setStep(1),"bg-emerald-950 text-emerald-300")}
        {N("HURDLE",()=>setStep(2),"bg-emerald-950 text-emerald-300")}
        {N("COMPUTE IRR",()=>{const irr=solveIRR(init,flows);setResult(irr);setStatus(`IRR=${irr.toFixed(4)}% ${hurdle!==null?irr>=hurdle?"✓ ACCEPT":"✗ REJECT":""}`);},
          "bg-green-900 text-green-300 font-extrabold col-span-2")}
        {N("RESET",()=>{setV("0");setStep(0);setInit(0);setFlows([]);setHurdle(null);setResult(null);setStatus("Step 1: Enter initial investment → ENTER");},"bg-red-950 text-red-300")}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {N("AC",ac,"bg-red-950 text-red-300")}{N("+/-",sign,"bg-gray-700 text-gray-300")}{N("DEL",del,"bg-gray-700 text-gray-300")}<div/>
        {["7","8","9"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        {["4","5","6"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        {["1","2","3"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        <button onClick={()=>num("0")} className="col-span-2 bg-gray-800 text-white rounded-xl font-bold text-base py-3 active:translate-y-1" style={{boxShadow:shadow}}>0</button>
        {N(".",dot,"bg-gray-800 text-white text-base")}
        <button onClick={enter} className="bg-yellow-700 text-white rounded-xl font-extrabold py-3 active:translate-y-1" style={{boxShadow:"0 4px 0 #7a4a00"}}>ENTER</button>
      </div>
      <p className="text-xs text-green-700 font-mono mt-2">{status}</p>
      {result!==null&&<div className="mt-2 bg-gray-900 rounded-xl p-3"><p className="text-green-400 font-mono font-bold text-sm">IRR = {result.toFixed(4)}%{hurdle!==null?result>=hurdle?" ✓ ACCEPT":" ✗ REJECT":""}</p></div>}
    </div>
  );
}

// ── Bond Form ─────────────────────────────────────────────────────────────────
function BondForm() {
  const [face,setFace]=useState(""); const [cpn,setCpn]=useState(""); const [ytm,setYtm]=useState(""); const [yrs,setYrs]=useState("");
  const [result,setResult]=useState<{price:number;coupon:number;diff:number}|null>(null); const [error,setError]=useState("");
  const [hist,setHist]=useState<HistItem[]>([]);
  const calc=()=>{
    try{
      const f=parseFloat(face),c=parseFloat(cpn),y=parseFloat(ytm),n=parseFloat(yrs);
      if([f,c,y,n].some(isNaN)) throw new Error("Fill all fields");
      const price=solveBond(f,c,y,n),coupon=f*(c/100),diff=price-f;
      setResult({price,coupon,diff}); setError("");
      setHist(h=>[{expr:`Bond FV=${f} CPN=${c}% YTM=${y}% N=${n}yr`,result:`$${price.toFixed(2)}`},...h].slice(0,15));
    }catch(e:any){setError(e.message);}
  };
  return (
    <div>
      <Field label="Face Value (Par)" value={face} onChange={setFace} placeholder="e.g. 1000"/>
      <Field label="Coupon Rate %" value={cpn} onChange={setCpn} placeholder="e.g. 8" hint="(annual)"/>
      <Field label="Yield to Maturity %" value={ytm} onChange={setYtm} placeholder="e.g. 10"/>
      <Field label="Years to Maturity" value={yrs} onChange={setYrs} placeholder="e.g. 5"/>
      <FormBtn onClick={calc} label="Calculate Bond Price"/>
      {error&&<p className="text-red-500 text-sm mt-2">{error}</p>}
      {result&&<ResultBox rows={[{label:"Bond Price",value:`$${result.price.toFixed(2)}`,main:true},{label:"Annual Coupon",value:`$${result.coupon.toFixed(2)}`},{label:result.diff>=0?"Premium (above par)":"Discount (below par)",value:`$${Math.abs(result.diff).toFixed(2)}`},{label:result.price>parseFloat(face)?"📈 Trading at Premium":result.price<parseFloat(face)?"📉 Trading at Discount":"⚖️ At Par",value:""}]}/>}
      <InfoBox text="YTM > Coupon Rate → bond trades at Discount. YTM < Coupon Rate → Premium. Equal → At Par."/>
      <HistBox history={hist} onClear={()=>setHist([])}/>
    </div>
  );
}

// ── Bond Physical ─────────────────────────────────────────────────────────────
function BondPhy() {
  const [v,setV]=useState("0"); const [step,setStep]=useState(0);
  const [data,setData]=useState({face:0,cpn:0,ytm:0,yrs:0});
  const [result,setResult]=useState<string|null>(null);
  const labels=["ENTER FACE VALUE","ENTER COUPON RATE %","ENTER YIELD TO MATURITY %","ENTER YEARS TO MATURITY"];
  const keys=["face","cpn","ytm","yrs"] as const;

  const num=(d:string)=>setV(cur=>cur==="0"?d:cur.length<12?cur+d:cur);
  const dot=()=>setV(cur=>cur.includes(".")?cur:cur+".");
  const sign=()=>setV(cur=>(parseFloat(cur)*-1).toString());
  const del=()=>setV(cur=>cur.length>1?cur.slice(0,-1):"0");
  const ac=()=>setV("0");

  const enter=()=>{
    const val=parseFloat(v);
    setData(d=>({...d,[keys[step]]:val}));
    if(step<3){setStep(s=>s+1);}
    else{const d2={...data,[keys[step]]:val};const price=solveBond(d2.face,d2.cpn,d2.ytm,d2.yrs);setResult(`Price=$${price.toFixed(2)} Coupon=$${(d2.face*d2.cpn/100).toFixed(2)}/yr`);}
    setV("0");
  };

  const N=(l:string,fn:()=>void,c:string,s?:string)=><PhyBtn label={l} onClick={fn} cls={c} span={s}/>;
  return (
    <div className="bg-gray-950 rounded-2xl p-3 border border-gray-800">
      <div className="bg-gray-900 rounded-xl p-3 mb-3 text-right border border-gray-800">
        <p className="text-green-800 text-xs font-mono min-h-4">{labels[Math.min(step,3)]}</p>
        <p className="text-green-400 text-3xl font-bold font-mono">{v}</p>
      </div>
      <div className="grid grid-cols-4 gap-2 mb-2">
        {["FACE","CPN%","YTM%","YRS"].map((lbl,i)=>N(lbl,()=>setStep(i),"bg-emerald-950 text-emerald-300"))}
        {N("COMPUTE PRICE",()=>{const price=solveBond(data.face,data.cpn,data.ytm,data.yrs);setResult(`Price=$${price.toFixed(2)} | Coupon=$${(data.face*data.cpn/100).toFixed(2)}/yr | ${price>data.face?"Premium":"Discount"}=$${Math.abs(price-data.face).toFixed(2)}`);},
          "bg-green-900 text-green-300 font-extrabold col-span-3")}
        {N("RESET",()=>{setV("0");setStep(0);setData({face:0,cpn:0,ytm:0,yrs:0});setResult(null);},"bg-red-950 text-red-300")}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {N("AC",ac,"bg-red-950 text-red-300")}{N("+/-",sign,"bg-gray-700 text-gray-300")}{N("DEL",del,"bg-gray-700 text-gray-300")}<div/>
        {["7","8","9"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        {["4","5","6"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        {["1","2","3"].map(n=>N(n,()=>num(n),"bg-gray-800 text-white text-base"))}<div/>
        <button onClick={()=>num("0")} className="col-span-2 bg-gray-800 text-white rounded-xl font-bold text-base py-3 active:translate-y-1" style={{boxShadow:shadow}}>0</button>
        {N(".",dot,"bg-gray-800 text-white text-base")}
        <button onClick={enter} className="bg-yellow-700 text-white rounded-xl font-extrabold py-3 active:translate-y-1" style={{boxShadow:"0 4px 0 #7a4a00"}}>ENTER</button>
      </div>
      <div className="mt-2 text-xs text-green-800 font-mono">
        {keys.map((k,i)=><span key={k} className={`mr-3 ${step===i?"text-green-400":""}`}>{k.toUpperCase()}={(data as any)[k]||"—"}</span>)}
      </div>
      {result&&<div className="mt-2 bg-gray-900 rounded-xl p-3"><p className="text-green-400 font-mono font-bold text-xs">{result}</p></div>}
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function FinancialCalculator() {
  const [tab, setTab] = useState<Tab>("tvm");
  const [mode, setMode] = useState<Mode>("phy");

  const tabs = [
    { key:"tvm" as Tab, label:"TVM", emoji:"⏱️" },
    { key:"npv" as Tab, label:"NPV", emoji:"📊" },
    { key:"irr" as Tab, label:"IRR", emoji:"📈" },
    { key:"bond" as Tab, label:"Bond", emoji:"💰" },
  ];

  return (
    <div className="space-y-4">
      {/* Tab bar */}
      <div className="grid grid-cols-4 gap-2">
        {tabs.map(t=>(
          <button key={t.key} onClick={()=>setTab(t.key)}
            className={`flex flex-col items-center gap-1 py-2 rounded-xl border text-xs font-bold transition-all
              ${tab===t.key?"bg-teal-600 text-white border-teal-700":"bg-white text-gray-500 border-gray-200 hover:border-teal-300"}`}
            style={{boxShadow:tab===t.key?"0 3px 0 #0F6E56":"0 3px 0 rgba(0,0,0,0.1)"}}>
            <span className="text-base">{t.emoji}</span>{t.label}
          </button>
        ))}
      </div>

      {/* Mode toggle */}
      <div className="flex gap-2 bg-gray-100 rounded-xl p-1">
        {([["phy","🖩 Physical"],["form","📋 Form"]] as [Mode,string][]).map(([m,lbl])=>(
          <button key={m} onClick={()=>setMode(m)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all
              ${mode===m?"bg-white text-gray-900 shadow":"text-gray-500"}`}>{lbl}</button>
        ))}
      </div>

      {/* Calculator panels */}
      {tab==="tvm"  && (mode==="phy"?<TVMPhy/>:<TVMForm/>)}
      {tab==="npv"  && (mode==="phy"?<NPVPhy/>:<NPVForm/>)}
      {tab==="irr"  && (mode==="phy"?<IRRPhy/>:<IRRForm/>)}
      {tab==="bond" && (mode==="phy"?<BondPhy/>:<BondForm/>)}
    </div>
  );
}