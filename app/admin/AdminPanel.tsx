"use client";
import { useState, useRef, useCallback, useEffect } from "react";
import * as XLSX from "xlsx";
import {
  saveToCollection, getCollectionCount,
  getUploadHistory, SaveMode,
} from "@/lib/adminDB";

// ── Types ─────────────────────────────────────────────────────────────────────
type Tab = "quiz" | "ielts_reading" | "ielts_listening" | "math" | "courses_notes";

interface UploadHistory {
  id: string;
  collection: string;
  count: number;
  mode: string;
  uploadedAt: { seconds: number } | null;
}

interface ParsedFile {
  data: Record<string, unknown>[];
  errors: string[];
  sheetName: string;
}

// ── Tab Config ────────────────────────────────────────────────────────────────
const TABS: { id: Tab; label: string; icon: string; collection: string; desc: string }[] = [
  { id:"quiz",            label:"Islamic Quiz",      icon:"☪️",  collection:"admin_quiz",             desc:"Trilingual quiz questions (EN/UR/HI) with Arabic ayahs" },
  { id:"ielts_reading",   label:"IELTS Reading",     icon:"📖",  collection:"admin_ielts_reading",    desc:"Reading passages with all 5 question types" },
  { id:"ielts_listening", label:"IELTS Listening",   icon:"🎧",  collection:"admin_ielts_listening",  desc:"Listening section scripts and questions" },
  { id:"math",            label:"Math Topics",       icon:"🧮",  collection:"admin_math",             desc:"Mathematics topic content and exercises" },
  { id:"courses_notes",   label:"Courses & Notes",   icon:"📚",  collection:"admin_courses",          desc:"Course metadata and study notes" },
];

// ── Excel Template Definitions ────────────────────────────────────────────────
const TEMPLATES: Record<Tab, { sheets: { name: string; headers: string[]; sample: (string|number)[][] }[] }> = {
  quiz: {
    sheets: [{
      name: "Questions",
      headers: [
        "category","difficulty","points",
        "arabic_ayah","reference",
        "en_question","en_opt_a","en_opt_b","en_opt_c","en_opt_d","en_answer",
        "ur_question","ur_opt_a","ur_opt_b","ur_opt_c","ur_opt_d","ur_answer",
        "hi_question","hi_opt_a","hi_opt_b","hi_opt_c","hi_opt_d","hi_answer",
      ],
      sample: [[
        "quran","easy",10,
        "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ","Al-Fatiha 1:2",
        "What does Al-Alameen mean?","The Muslims","All the worlds","The Arabs","The prophets",1,
        "العالمین کا معنی کیا ہے؟","مسلمان","تمام جہان","عرب","انبیاء",1,
        "अल-आलमीन का अर्थ क्या है?","मुसलमान","तमाम जहान","अरब","अंबिया",1,
      ]],
    }],
  },
  ielts_reading: {
    sheets: [
      {
        name: "Passage",
        headers: ["passage_id","title","tag","level","word_count","text"],
        sample: [["passage_001","The Science of Sleep","Science","Academic",450,"Sleep is a fundamental biological process...\n\nDuring sleep, the brain consolidates memories..."]],
      },
      {
        name: "Questions",
        headers: ["passage_id","q_id","type","question","opt_a","opt_b","opt_c","opt_d","answer","accepted_answers","explanation","sentence_template"],
        sample: [
          ["passage_001",1,"mcq","What is the main topic of the passage?","A. Dreams only","B. Sleep and brain function","C. Memory loss","D. Insomnia","B","","The passage discusses sleep as a biological process and its role in brain function",""],
          ["passage_001",2,"tfng","The brain is inactive during sleep.","","","","","FALSE","","The passage states the brain consolidates memories during sleep, showing it is active",""],
          ["passage_001",3,"sentence_completion","During sleep, the brain ________ memories.","","","","","consolidates","consolidates|processes","The passage explicitly states the brain consolidates memories during sleep","During sleep, the brain ________ memories."],
        ],
      },
    ],
  },
  ielts_listening: {
    sheets: [
      {
        name: "Sections",
        headers: ["section_num","title","context","transcript"],
        sample: [[1,"Section 1 — Daily Conversation","A customer calls a shop to enquire about products.","Shopkeeper: Good morning, how can I help?\nCustomer: Hi, I'd like to know about your membership options..."]],
      },
      {
        name: "Questions",
        headers: ["section_num","q_id","type","question","opt_a","opt_b","opt_c","opt_d","answer","hint"],
        sample: [
          [1,1,"fill","The basic membership costs £_____ per month.","","","","","25","Listen for the price mentioned for basic access."],
          [1,2,"mcq","When is the shop open on weekends?","A. 9am to 5pm","B. 10am to 4pm","C. 8am to 6pm","D. Closed","B","The shopkeeper mentions weekend hours."],
        ],
      },
    ],
  },
  math: {
    sheets: [{
      name: "Topics",
      headers: ["topic_id","title","level","category","description","key_point_1","key_point_2","key_point_3","key_point_4","key_point_5","example_problem","example_solution"],
      sample: [["algebra_basics","Algebra Basics","high","algebra","Introduction to algebra using variables and equations","Variables represent unknown values","Equations must be balanced on both sides","Like terms can be combined","Use inverse operations to solve for x","Always check your answer by substituting back","Solve: 2x + 5 = 13","2x = 8, therefore x = 4"]],
    }],
  },
  courses_notes: {
    sheets: [
      {
        name: "Courses",
        headers: ["course_id","title","subject","level","description","emoji","lessons","href"],
        sample: [["physics-mechanics","Physics Mechanics","Science","High School","Learn Newton's laws, motion, and energy","⚛️",5,"/courses/physics-mechanics"]],
      },
      {
        name: "Notes",
        headers: ["note_id","title","subject","content","tags"],
        sample: [["physics-notes","Physics Mechanics Notes","Science","Newton's First Law: An object at rest stays at rest...\n\nNewton's Second Law: F = ma...","physics,mechanics,newton"]],
      },
    ],
  },
};

// ── Parsers ──────────────────────────────────────────────────────────────────
function parseQuizSheet(rows: Record<string, string>[]): { data: Record<string, unknown>[]; errors: string[] } {
  const data: Record<string, unknown>[] = [];
  const errors: string[] = [];
  rows.forEach((row, i) => {
    const n = i + 2;
    if (!row.category || !row.difficulty || !row.en_question) {
      errors.push(`Row ${n}: Missing required fields (category, difficulty, en_question)`);
      return;
    }
    const enAns = parseInt(String(row.en_answer));
    const urAns = parseInt(String(row.ur_answer));
    const hiAns = parseInt(String(row.hi_answer));
    if (isNaN(enAns) || enAns < 0 || enAns > 3) {
      errors.push(`Row ${n}: en_answer must be 0, 1, 2, or 3`);
      return;
    }
    data.push({
      cat:       row.category.toLowerCase().trim(),
      diff:      row.difficulty.toLowerCase().trim(),
      pts:       parseInt(String(row.points)) || 10,
      arabicAyah: row.arabic_ayah || undefined,
      reference:  row.reference || undefined,
      en: { q: row.en_question, opts: [row.en_opt_a,row.en_opt_b,row.en_opt_c,row.en_opt_d], ans: enAns },
      ur: { q: row.ur_question || row.en_question, opts: [row.ur_opt_a||row.en_opt_a,row.ur_opt_b||row.en_opt_b,row.ur_opt_c||row.en_opt_c,row.ur_opt_d||row.en_opt_d], ans: !isNaN(urAns) ? urAns : enAns },
      hi: { q: row.hi_question || row.en_question, opts: [row.hi_opt_a||row.en_opt_a,row.hi_opt_b||row.en_opt_b,row.hi_opt_c||row.en_opt_c,row.hi_opt_d||row.en_opt_d], ans: !isNaN(hiAns) ? hiAns : enAns },
    });
  });
  return { data, errors };
}

function parseReadingPassageSheet(rows: Record<string, string>[]): Record<string, unknown>[] {
  return rows.filter(r => r.passage_id).map(r => ({
    id: r.passage_id, title: r.title, tag: r.tag, level: r.level,
    wordCount: parseInt(String(r.word_count)) || 0, text: r.text,
  }));
}

function parseReadingQSheet(rows: Record<string, string>[]): Record<string, unknown>[] {
  return rows.filter(r => r.passage_id && r.q_id).map(r => ({
    passageId: r.passage_id, id: parseInt(String(r.q_id)), type: r.type,
    q: r.question, answer: r.answer,
    opts: r.opt_a ? [r.opt_a, r.opt_b, r.opt_c, r.opt_d].filter(Boolean) : undefined,
    acceptedAnswers: r.accepted_answers ? r.accepted_answers.split("|") : undefined,
    explanation: r.explanation, sentenceTemplate: r.sentence_template || undefined,
  }));
}

function parseListeningSectionSheet(rows: Record<string, string>[]): Record<string, unknown>[] {
  return rows.filter(r => r.section_num).map(r => ({
    num: parseInt(String(r.section_num)), title: r.title,
    context: r.context, transcript: r.transcript,
  }));
}

function parseListeningQSheet(rows: Record<string, string>[]): Record<string, unknown>[] {
  return rows.filter(r => r.section_num && r.q_id).map(r => ({
    sectionNum: parseInt(String(r.section_num)), id: parseInt(String(r.q_id)),
    type: r.type, q: r.question, answer: r.answer,
    opts: r.opt_a ? [r.opt_a, r.opt_b, r.opt_c, r.opt_d].filter(Boolean) : undefined,
    hint: r.hint || undefined,
  }));
}

function parseMathSheet(rows: Record<string, string>[]): Record<string, unknown>[] {
  return rows.filter(r => r.topic_id).map(r => ({
    id: r.topic_id, title: r.title, level: r.level, category: r.category,
    description: r.description,
    keyPoints: [r.key_point_1,r.key_point_2,r.key_point_3,r.key_point_4,r.key_point_5].filter(Boolean),
    exampleProblem: r.example_problem, exampleSolution: r.example_solution,
  }));
}

// ── Template Generator ────────────────────────────────────────────────────────
function downloadTemplate(tab: Tab) {
  const wb = XLSX.utils.book_new();
  const tmpl = TEMPLATES[tab];
  tmpl.sheets.forEach(sheet => {
    const wsData = [sheet.headers, ...sheet.sample];
    const ws = XLSX.utils.aoa_to_sheet(wsData);
    // Style header row width
    ws["!cols"] = sheet.headers.map(() => ({ wch: 25 }));
    XLSX.utils.book_append_sheet(wb, ws, sheet.name);
  });
  XLSX.writeFile(wb, `${tab}_template.xlsx`);
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function AdminPanel() {
  const [loggedIn,   setLoggedIn]   = useState(false);
  const [checking,   setChecking]   = useState(true); // verifying session on mount
  const [password,   setPassword]   = useState("");
  const [pwError,    setPwError]    = useState(false);
  const [loginBusy,  setLoginBusy]  = useState(false);
  const [activeTab,  setActiveTab]  = useState<Tab>("quiz");
  const [dragging,   setDragging]   = useState(false);
  const [parsed,     setParsed]     = useState<ParsedFile | null>(null);
  const [saveMode,   setSaveMode]   = useState<SaveMode>("append");
  const [saving,     setSaving]     = useState(false);
  const [saveMsg,    setSaveMsg]    = useState<{ text: string; ok: boolean } | null>(null);
  const [counts,     setCounts]     = useState<Record<string, number>>({});
  const [history,    setHistory]    = useState<UploadHistory[]>([]);
  const [loadingStats, setLoadingStats] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  // ── Auth ──────────────────────────────────────────────────────────────────
  // Verify existing session cookie on mount
  useEffect(() => {
    fetch("/api/admin/verify")
      .then(r => { if (r.ok) setLoggedIn(true); })
      .catch(() => {})
      .finally(() => setChecking(false));
  }, []);

  const handleLogin = async () => {
    setLoginBusy(true);
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setLoggedIn(true);
      } else {
        setPwError(true);
        setTimeout(() => setPwError(false), 2000);
      }
    } catch {
      setPwError(true);
    }
    setLoginBusy(false);
  };

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" }).catch(() => {});
    setLoggedIn(false);
    setPassword("");
  };

  // ── Load stats ────────────────────────────────────────────────────────────
  const loadStats = useCallback(async () => {
    setLoadingStats(true);
    try {
      const [c, h] = await Promise.all([
        Promise.all(TABS.map(async t => ({ id: t.collection, count: await getCollectionCount(t.collection) }))),
        getUploadHistory(),
      ]);
      const counts: Record<string, number> = {};
      c.forEach(x => { counts[x.id] = x.count; });
      setCounts(counts);
      setHistory(h as UploadHistory[]);
    } catch (e) {
      console.error(e);
    }
    setLoadingStats(false);
  }, []);

  useEffect(() => { if (loggedIn) loadStats(); }, [loggedIn, loadStats]);

  // ── Tab change resets upload ──────────────────────────────────────────────
  useEffect(() => { setParsed(null); setSaveMsg(null); }, [activeTab]);

  // ── File parser ───────────────────────────────────────────────────────────
  const parseFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const wb = XLSX.read(e.target?.result, { type: "binary" });
        let data: Record<string, unknown>[] = [];
        let errors: string[] = [];

        const getRows = (sheetName: string): Record<string, string>[] => {
          const ws = wb.Sheets[sheetName];
          if (!ws) return [];
          return XLSX.utils.sheet_to_json<Record<string, string>>(ws, { defval: "" });
        };

        if (activeTab === "quiz") {
          const rows = getRows("Questions") || XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets[wb.SheetNames[0]], { defval: "" });
          const result = parseQuizSheet(rows);
          data = result.data; errors = result.errors;
        } else if (activeTab === "ielts_reading") {
          const passages = parseReadingPassageSheet(getRows("Passage"));
          const questions = parseReadingQSheet(getRows("Questions"));
          // Merge questions into passages
          data = passages.map(p => ({
            ...p,
            questions: questions.filter(q => q.passageId === p.id),
          }));
        } else if (activeTab === "ielts_listening") {
          const sections = parseListeningSectionSheet(getRows("Sections"));
          const questions = parseListeningQSheet(getRows("Questions"));
          data = sections.map(s => ({
            ...s,
            questions: questions.filter(q => q.sectionNum === s.num),
          }));
        } else if (activeTab === "math") {
          data = parseMathSheet(getRows("Topics") || XLSX.utils.sheet_to_json<Record<string, string>>(wb.Sheets[wb.SheetNames[0]], { defval: "" }));
        } else if (activeTab === "courses_notes") {
          const courses = (getRows("Courses")).filter(r => r.course_id).map(r => ({
            type: "course", id: r.course_id, title: r.title, subject: r.subject,
            level: r.level, description: r.description, emoji: r.emoji,
            lessons: parseInt(String(r.lessons)) || 0, href: r.href,
          }));
          const notes = (getRows("Notes")).filter(r => r.note_id).map(r => ({
            type: "note", id: r.note_id, title: r.title, subject: r.subject,
            content: r.content, tags: r.tags?.split(",").map((t: string) => t.trim()),
          }));
          data = [...courses, ...notes];
        }

        if (data.length === 0 && errors.length === 0) {
          errors.push("No valid data found. Check that your sheet names match the template exactly.");
        }

        setParsed({ data, errors, sheetName: wb.SheetNames[0] });
      } catch (err) {
        setParsed({ data: [], errors: [`Failed to parse file: ${String(err)}`], sheetName: "" });
      }
    };
    reader.readAsBinaryString(file);
  }, [activeTab]);

  // ── Drag & Drop ───────────────────────────────────────────────────────────
  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file?.name.endsWith(".xlsx") || file?.name.endsWith(".xls")) {
      parseFile(file);
    } else {
      setParsed({ data: [], errors: ["Please upload an Excel file (.xlsx)"], sheetName: "" });
    }
  }, [parseFile]);

  // ── Save ─────────────────────────────────────────────────────────────────
  const handleSave = async () => {
    if (!parsed?.data.length) return;
    setSaving(true);
    setSaveMsg(null);
    try {
      const tab = TABS.find(t => t.id === activeTab)!;
      await saveToCollection(tab.collection, parsed.data as Record<string, unknown>[], saveMode);
      setSaveMsg({ text: `✅ ${parsed.data.length} items saved to Firebase (${saveMode} mode)`, ok: true });
      setParsed(null);
      await loadStats();
    } catch (e) {
      setSaveMsg({ text: `❌ Save failed: ${String(e)}`, ok: false });
    }
    setSaving(false);
  };

  // ── Preview helper ────────────────────────────────────────────────────────
  const previewKeys = (data: Record<string, unknown>[]): string[] => {
    if (!data.length) return [];
    const keys = Object.keys(data[0]);
    // For quiz, show simplified preview
    if (activeTab === "quiz") return ["cat","diff","pts","en"].filter(k => keys.includes(k));
    return keys.slice(0, 6);
  };

  const fmtVal = (v: unknown): string => {
    if (typeof v === "object" && v !== null) {
      if ("q" in v) return String((v as {q:string}).q).slice(0, 50) + "…";
      return JSON.stringify(v).slice(0, 50) + "…";
    }
    return String(v ?? "").slice(0, 60);
  };

  const fmtTs = (ts: { seconds: number } | null) => {
    if (!ts) return "—";
    return new Date(ts.seconds * 1000).toLocaleString();
  };

  // ── Login Screen ──────────────────────────────────────────────────────────
  if (checking) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-teal-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!loggedIn) return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-sm">
        <div className="text-center mb-6">
          <p className="text-4xl mb-3">🔐</p>
          <h1 className="text-xl font-black text-white">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-1">EduForEveryone — Content Management</p>
        </div>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => e.key === "Enter" && handleLogin()}
          className={`w-full bg-gray-800 border rounded-xl px-4 py-3 text-white text-sm mb-3 focus:outline-none focus:border-teal-500 ${pwError ? "border-red-500" : "border-gray-700"}`}
        />
        {pwError && <p className="text-red-400 text-xs mb-3 text-center">Incorrect password</p>}
        <button onClick={handleLogin} disabled={loginBusy || !password}
          className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold hover:bg-teal-700 disabled:opacity-50 transition-all">
          {loginBusy ? "Checking…" : "Sign In →"}
        </button>
        <p className="text-gray-600 text-xs text-center mt-4">
          Set via ADMIN_PASSWORD env var (server-side only)
        </p>
      </div>
    </div>
  );

  const activeTabConfig = TABS.find(t => t.id === activeTab)!;

  // ── Admin Dashboard ───────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-950 flex">

      {/* Sidebar */}
      <div className="w-56 flex-shrink-0 bg-gray-900 border-r border-gray-800 flex flex-col">
        <div className="p-5 border-b border-gray-800">
          <p className="text-white font-black text-sm">⚙️ Admin Panel</p>
          <p className="text-gray-500 text-xs mt-0.5">EduForEveryone CMS</p>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {TABS.map(t => (
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2.5
                ${activeTab === t.id
                  ? "bg-teal-600 text-white"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"}`}>
              <span>{t.icon}</span>
              <span>{t.label}</span>
              {counts[t.collection] > 0 && (
                <span className={`ml-auto text-xs px-1.5 py-0.5 rounded-full font-bold
                  ${activeTab === t.id ? "bg-white/20 text-white" : "bg-gray-800 text-gray-400"}`}>
                  {counts[t.collection]}
                </span>
              )}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-gray-800">
          <button onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded-xl text-xs text-gray-500 hover:text-red-400 hover:bg-gray-800 transition-all">
            🚪 Sign Out
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-4xl mx-auto p-6 space-y-6">

          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-black text-white flex items-center gap-2">
                <span>{activeTabConfig.icon}</span>
                <span>{activeTabConfig.label}</span>
              </h1>
              <p className="text-gray-500 text-sm mt-0.5">{activeTabConfig.desc}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-600">
                {loadingStats ? "Loading…" : `${counts[activeTabConfig.collection] ?? 0} items in Firebase`}
              </span>
              <button onClick={loadStats}
                className="text-gray-500 hover:text-white text-xs border border-gray-700 px-3 py-1.5 rounded-lg transition-all">
                ↻ Refresh
              </button>
            </div>
          </div>

          {/* Step 1: Download Template */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <div>
                <p className="text-white font-bold text-sm">Step 1 — Download Excel Template</p>
                <p className="text-gray-500 text-xs mt-0.5">Fill in the template with your data, then upload below</p>
              </div>
              <button onClick={() => downloadTemplate(activeTab)}
                className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-all"
                style={{ boxShadow: "0 3px 0 #065f46" }}>
                📥 Download Template
              </button>
            </div>

            {/* Column reference */}
            <div className="bg-gray-800 rounded-xl p-4 overflow-x-auto">
              <p className="text-gray-400 text-xs font-semibold mb-2 uppercase tracking-wide">Template Columns</p>
              <div className="flex flex-wrap gap-2">
                {TEMPLATES[activeTab].sheets.map(sheet => (
                  <div key={sheet.name} className="flex-1 min-w-48">
                    <p className="text-teal-400 text-xs font-bold mb-2">📋 {sheet.name}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {sheet.headers.map(h => (
                        <span key={h} className="bg-gray-700 text-gray-300 text-xs px-2 py-0.5 rounded font-mono">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step 2: Upload */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <p className="text-white font-bold text-sm mb-3">Step 2 — Upload Filled Excel File</p>

            {/* Drop zone */}
            <div
              onDragOver={e => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={onDrop}
              onClick={() => fileRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all mb-4
                ${dragging ? "border-teal-500 bg-teal-500/10" : "border-gray-700 hover:border-gray-500 hover:bg-gray-800/50"}`}>
              <p className="text-4xl mb-3">📂</p>
              <p className="text-white font-semibold text-sm mb-1">
                {dragging ? "Drop to upload!" : "Drag & drop your Excel file here"}
              </p>
              <p className="text-gray-500 text-xs">or click to browse · .xlsx files only</p>
              <input ref={fileRef} type="file" accept=".xlsx,.xls" className="hidden"
                onChange={e => { const f = e.target.files?.[0]; if (f) parseFile(f); e.target.value = ""; }} />
            </div>

            {/* Parse errors */}
            {parsed?.errors.length ? (
              <div className="bg-red-900/30 border border-red-800 rounded-xl p-4 mb-4">
                <p className="text-red-400 font-bold text-sm mb-2">⚠️ {parsed.errors.length} Error(s) Found</p>
                {parsed.errors.slice(0, 5).map((e, i) => (
                  <p key={i} className="text-red-300 text-xs mb-1">• {e}</p>
                ))}
                {parsed.errors.length > 5 && (
                  <p className="text-red-400 text-xs">…and {parsed.errors.length - 5} more</p>
                )}
              </div>
            ) : null}

            {/* Preview */}
            {parsed?.data.length ? (
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-emerald-400 font-bold text-sm">
                    ✅ {parsed.data.length} items parsed successfully
                  </p>
                  <button onClick={() => setParsed(null)}
                    className="text-gray-500 hover:text-white text-xs">
                    Clear ✕
                  </button>
                </div>

                {/* Table preview */}
                <div className="bg-gray-800 rounded-xl overflow-x-auto mb-4">
                  <table className="w-full text-xs">
                    <thead>
                      <tr className="border-b border-gray-700">
                        {previewKeys(parsed.data as Record<string, unknown>[]).map(k => (
                          <th key={k} className="px-3 py-2 text-left text-gray-400 font-semibold uppercase tracking-wide whitespace-nowrap">
                            {k}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(parsed.data as Record<string, unknown>[]).slice(0, 8).map((row, i) => (
                        <tr key={i} className="border-b border-gray-700/50 hover:bg-gray-700/30">
                          {previewKeys(parsed.data as Record<string, unknown>[]).map(k => (
                            <td key={k} className="px-3 py-2 text-gray-300 max-w-48 truncate">
                              {fmtVal(row[k])}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {parsed.data.length > 8 && (
                    <p className="text-center text-gray-600 text-xs py-2">
                      …and {parsed.data.length - 8} more rows
                    </p>
                  )}
                </div>

                {/* Step 3: Save options */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-white font-bold text-sm mb-3">Step 3 — Choose Save Mode</p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button onClick={() => setSaveMode("append")}
                      className={`p-3 rounded-xl border text-left transition-all ${saveMode === "append" ? "border-teal-500 bg-teal-500/10" : "border-gray-700 hover:border-gray-600"}`}>
                      <p className={`text-sm font-bold mb-1 ${saveMode === "append" ? "text-teal-400" : "text-white"}`}>
                        ➕ Add to existing
                      </p>
                      <p className="text-gray-500 text-xs">Keep existing Firebase data and add new items alongside it</p>
                    </button>
                    <button onClick={() => setSaveMode("replace")}
                      className={`p-3 rounded-xl border text-left transition-all ${saveMode === "replace" ? "border-red-500 bg-red-500/10" : "border-gray-700 hover:border-gray-600"}`}>
                      <p className={`text-sm font-bold mb-1 ${saveMode === "replace" ? "text-red-400" : "text-white"}`}>
                        🔄 Replace all
                      </p>
                      <p className="text-gray-500 text-xs">Delete all existing data in this collection, then save new data</p>
                    </button>
                  </div>

                  {saveMode === "replace" && (
                    <div className="bg-red-900/20 border border-red-800 rounded-lg px-3 py-2 mb-3">
                      <p className="text-red-400 text-xs">
                        ⚠️ This will permanently delete all {counts[activeTabConfig.collection] ?? 0} existing items in <strong>{activeTabConfig.collection}</strong> before saving.
                      </p>
                    </div>
                  )}

                  {saveMsg && (
                    <div className={`rounded-lg px-4 py-3 mb-3 text-sm font-semibold ${saveMsg.ok ? "bg-emerald-900/30 border border-emerald-700 text-emerald-300" : "bg-red-900/30 border border-red-700 text-red-300"}`}>
                      {saveMsg.text}
                    </div>
                  )}

                  <button onClick={handleSave} disabled={saving}
                    className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold text-sm hover:bg-teal-700 disabled:opacity-50 transition-all"
                    style={{ boxShadow: "0 3px 0 #0F6E56" }}>
                    {saving ? "Saving to Firebase…" : `💾 Save ${parsed.data.length} Items to Firebase`}
                  </button>
                </div>
              </div>
            ) : null}
          </div>

          {/* Upload History */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5">
            <p className="text-white font-bold text-sm mb-4">📋 Upload History</p>
            {history.length === 0 ? (
              <p className="text-gray-600 text-sm text-center py-4">No uploads yet</p>
            ) : (
              <div className="space-y-2">
                {history.map((h) => (
                  <div key={h.id} className="flex items-center justify-between bg-gray-800 rounded-xl px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs px-2 py-1 rounded-full font-bold ${h.mode === "replace" ? "bg-red-900/50 text-red-400" : "bg-teal-900/50 text-teal-400"}`}>
                        {h.mode}
                      </span>
                      <div>
                        <p className="text-white text-xs font-semibold">{h.collection}</p>
                        <p className="text-gray-500 text-xs">{fmtTs(h.uploadedAt)}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-xs font-mono">{h.count} items</span>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
