"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { saveQuizScore } from "@/lib/firebaseDB";
import { getAdminQuizQuestions } from "@/lib/adminDB";
import AuthModal from "@/components/AuthModal";
import ShareScore from "@/components/ShareScore";
import QuizResultShareModal from "@/components/quiz/QuizResultShareModal";
import { ALL_ISLAMIC_QUESTIONS, Question } from "@/lib/islamicQuizQuestions";

type Lang = "en" | "ur" | "hi";
type Cat = "all" | "quran" | "hadith" | "fiqh" | "seerah" | "history" | "pillars" | "names" | "tajweed" | "arabic" | "stories" | "tafseer";
type Diff = "easy" | "medium" | "hard" | "expert";

interface LangData { q: string; opts: string[]; ans: number; }

const UI = {
  en: { title:"Islamic Quiz", sub:"Test your Islamic knowledge", start:"Start Quiz",
        next:"Next →", results:"See Results", again:"Play Again",
        timesUp:"Time's up!", answer:"Answer:", correct:"Correct",
        genius:"Subhanallah! Perfect! 🌟", excellent:"MashaAllah! Excellent! ✨",
        good:"JazakAllah! Good effort! 👍", keep:"Keep learning, InshaaAllah! 📖",
        score:"Score", streak:"Streak", q:"Q", of:"of",
        cats:{all:"All",quran:"Quran & Tafseer",hadith:"Hadith",fiqh:"Fiqh",seerah:"Seerah",history:"History",pillars:"Pillars",names:"99 Names",tajweed:"Tajweed",arabic:"Arabic Words",stories:"Quran Stories",tafseer:"Tafseer"} },
  ur: { title:"اسلامی کوئز", sub:"اپنی اسلامی معلومات کو جانچیں", start:"کوئز شروع کریں",
        next:"اگلا →", results:"نتائج", again:"دوبارہ کھیلیں",
        timesUp:"وقت ختم!", answer:"جواب:", correct:"درست",
        genius:"سبحان اللہ! مکمل! 🌟", excellent:"ماشاءاللہ! بہترین! ✨",
        good:"جزاک اللہ! اچھی کوشش! 👍", keep:"سیکھتے رہیں، ان شاءاللہ! 📖",
        score:"اسکور", streak:"سلسلہ", q:"سوال", of:"از",
        cats:{all:"سب",quran:"قرآن و تفسیر",hadith:"حدیث",fiqh:"فقہ",seerah:"سیرت",history:"تاریخ",pillars:"ارکان اسلام",names:"99 نام",tajweed:"تجوید",arabic:"عربی الفاظ",stories:"قرآنی قصص",tafseer:"تفسیر"} },
  hi: { title:"इस्लामी क्विज़", sub:"अपनी इस्लामी जानकारी परखें", start:"क्विज़ शुरू करें",
        next:"अगला →", results:"परिणाम", again:"फिर खेलें",
        timesUp:"समय समाप्त!", answer:"उत्तर:", correct:"सही",
        genius:"सुभानअल्लाह! पूर्ण! 🌟", excellent:"माशाअल्लाह! उत्कृष्ट! ✨",
        good:"जज़ाकअल्लाह! अच्छा प्रयास! 👍", keep:"सीखते रहें, इन्शाअल्लाह! 📖",
        score:"स्कोर", streak:"स्ट्रीक", q:"प्र", of:"में से",
        cats:{all:"सभी",quran:"क़ुरआन",hadith:"हदीस",fiqh:"फ़िक़्ह",seerah:"सीरत",history:"इतिहास",pillars:"स्तंभ",names:"99 नाम",tajweed:"तजवीद",arabic:"अरबी शब्द",stories:"क़ुरआनी क़िस्से",tafseer:"तफ़सीर"} },
};

const TOTAL = 10;
const DIFF_TIME: Record<Diff,number> = { easy:25, medium:18, hard:12, expert:8 };
const DIFF_COLORS: Record<Diff,string> = {
  easy:"bg-green-100 text-green-700", medium:"bg-amber-100 text-amber-700",
  hard:"bg-orange-100 text-orange-700", expert:"bg-red-100 text-red-700",
};
const CAT_KEYS: Cat[] = ["all","quran","hadith","fiqh","seerah","history","pillars","names","tajweed","stories","tafseer"];

export default function IslamicQuizGame() {
  const [lang,         setLang]         = useState<Lang>("en");
  const [selectedCats, setSelectedCats] = useState<Set<Cat>>(new Set(["all"]));
  const [diff,         setDiff]         = useState<Diff>("easy");
  const [score,        setScore]        = useState(0);
  const [correct,      setCorrect]      = useState(0);
  const [streak,       setStreak]       = useState(0);
  const [qList,        setQList]        = useState<Question[]>([]);
  const [qIdx,         setQIdx]         = useState(0);
  const [curQ,         setCurQ]         = useState<Question | null>(null);
  const [answered,     setAnswered]     = useState(false);
  const [selected,     setSelected]     = useState<number | null>(null);
  const [feedback,     setFeedback]     = useState<{text:string;ok:boolean}|null>(null);
  const [timeLeft,     setTimeLeft]     = useState(0);
  const [history,      setHistory]      = useState<boolean[]>([]);
  const [gameOver,     setGameOver]     = useState(false);
  const [started,      setStarted]      = useState(false);
  const [showAuth,        setShowAuth]        = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);
  const [shuffledOpts, setShuffledOpts] = useState<Record<Lang,{opts:string[];ans:number}>>({
    en:{opts:[],ans:0}, ur:{opts:[],ans:0}, hi:{opts:[],ans:0}
  });
  const [firebaseQs,   setFirebaseQs]   = useState<Question[]>([]);
  const [fbLoading,    setFbLoading]    = useState(true);

  const seenIdsRef  = useRef<Set<number>>(new Set());
  const savedRef    = useRef(false);
  const optsListRef = useRef<Record<Lang,{opts:string[];ans:number}>[]>([]);
  const timerRef    = useRef<ReturnType<typeof setInterval>|null>(null);
  const totalTimeRef = useRef(0);

  const { user } = useAuth();
  const u = UI[lang];

  // Load questions from Firebase (admin uploaded) — merge with local QB
  useEffect(() => {
    getAdminQuizQuestions()
      .then(data => {
        setFirebaseQs(data as Question[]);
        setFbLoading(false);
      })
      .catch(() => setFbLoading(false));
  }, []);

  // Unified Question Bank: Merges Firebase dynamic questions with central 550+ questions bank
  const ALL_RAW_QUESTIONS = [...firebaseQs, ...ALL_ISLAMIC_QUESTIONS];

  // Automatic Runtime Deduplication Engine: Guarantees 100% unique questions with ZERO repeats
  const ALL_QUESTIONS = (() => {
    const seenTexts = new Set<string>();
    const unique: Question[] = [];

    for (const q of ALL_RAW_QUESTIONS) {
      if (!q || !q.en || !q.en.q) continue;
      // Normalize English & Urdu text for exact duplicate detection
      const normEn = q.en.q.toLowerCase().trim().replace(/[^a-z0-9]/g, "");
      const normUr = q.ur ? q.ur.q.trim().replace(/\s+/g, "") : "";

      if (!seenTexts.has(normEn) && (!normUr || !seenTexts.has(normUr))) {
        seenTexts.add(normEn);
        if (normUr) seenTexts.add(normUr);
        unique.push(q);
      }
    }

    return unique;
  })();

  const clearTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  // Shuffle options — same permutation across all 3 languages
  const buildShuffledOpts = useCallback((q: Question): Record<Lang,{opts:string[];ans:number}> => {
    const perm = q.en.opts.map((_,i) => i).sort(() => Math.random() - 0.5);
    return {
      en: { opts: perm.map(i => q.en.opts[i]), ans: perm.indexOf(q.en.ans) },
      ur: { opts: perm.map(i => q.ur.opts[i]), ans: perm.indexOf(q.ur.ans) },
      hi: { opts: perm.map(i => q.hi.opts[i]), ans: perm.indexOf(q.hi.ans) },
    };
  }, []);

  // Save score to Firebase
  const saveScore = useCallback(async (finalScore: number, finalCorrect: number, finalStreak: number) => {
    if (!user || savedRef.current) return;
    savedRef.current = true;
    try {
      await saveQuizScore({
        uid:         user.uid,
        displayName: user.displayName || "Anonymous",
        photoURL:    user.photoURL    || "",
        gameName:    "Islamic Quiz",
        category:    selectedCats.has("all") ? "quran" : Array.from(selectedCats)[0],
        difficulty:  diff,
        score:       finalScore,
        correct:     finalCorrect,
        total:       TOTAL,
        streak:      finalStreak,
      });
    } catch (e) {
      console.error("Failed to save score:", e);
    }
  }, [user, selectedCats, diff]);

  // Time up effect
  useEffect(() => {
    if (timeLeft === 0 && curQ && !answered && started && !gameOver) {
      clearTimer(); setAnswered(true);
      const correctOpt = shuffledOpts[lang].opts[shuffledOpts[lang].ans];
      setFeedback({ text:`${u.timesUp} ${u.answer} ${correctOpt}`, ok:false });
      setStreak(0); setHistory(h => [...h, false]);
    }
  }, [timeLeft, curQ, answered, started, gameOver, lang, u, shuffledOpts]);

  const startGame = useCallback(() => {
    savedRef.current = false; // reset save flag for new game

    const fisherYates = <T,>(arr: T[]): T[] => {
      const a = [...arr];
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    };

    // 1. Filter pool by selected categories
    let pool = ALL_QUESTIONS;
    if (!selectedCats.has("all")) {
      pool = ALL_QUESTIONS.filter(q => selectedCats.has(q.cat as Cat));
      if (pool.length < 5) pool = ALL_QUESTIONS;
    }

    // 2. Separate into difficulty tiers and shuffle each tier independently
    const easyPool = fisherYates(pool.filter(q => q.diff === "easy"));
    const medPool  = fisherYates(pool.filter(q => q.diff === "medium"));
    const hardPool = fisherYates(pool.filter(q => q.diff === "hard"));
    const expPool  = fisherYates(pool.filter(q => q.diff === "expert"));

    // 3. Assemble progressive 10-question sequence (Easy -> Medium -> Hard -> Expert)
    const selected10 = [
      ...easyPool.slice(0, 2),
      ...medPool.slice(0, 3),
      ...hardPool.slice(0, 3),
      ...expPool.slice(0, 2),
    ];

    // Fallback if tier pool had fewer questions
    if (selected10.length < TOTAL) {
      const unused = fisherYates(pool.filter(q => !selected10.includes(q)));
      selected10.push(...unused.slice(0, TOTAL - selected10.length));
    }

    const final10 = selected10.slice(0, TOTAL);
    const allOpts = final10.map(q => buildShuffledOpts(q));
    optsListRef.current = allOpts;

    setQList(final10);
    setQIdx(0);
    setScore(0);
    setCorrect(0);
    setStreak(0);
    setHistory([]);
    setGameOver(false);
    setStarted(true);

    const firstQ = final10[0];
    setCurQ(firstQ);
    setDiff(firstQ.diff);
    setShuffledOpts(allOpts[0]);
    setAnswered(false);
    setSelected(null);
    setFeedback(null);

    const t = DIFF_TIME[firstQ.diff];
    totalTimeRef.current = t;
    setTimeLeft(t);

    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v-0.1).toFixed(1)))), 100);
  }, [selectedCats, ALL_QUESTIONS, buildShuffledOpts]);

  const handleAnswer = useCallback((idx: number) => {
    if (answered || !curQ) return;
    setAnswered(true); setSelected(idx); clearTimer();
    const isRight = idx === shuffledOpts[lang].ans;
    if (isRight) {
      const tb = Math.round(timeLeft * 2);
      const earned = curQ.pts + tb;
      setScore(s => s + earned); setCorrect(c => c + 1); setStreak(s => s + 1);
      setFeedback({ text:`✅ +${earned} pts${streak >= 2 ? ` 🔥${streak+1}` : ""}`, ok:true });
      setHistory(h => [...h, true]);
    } else {
      setStreak(0);
      const correctOpt = shuffledOpts[lang].opts[shuffledOpts[lang].ans];
      setFeedback({ text:`❌ ${u.answer} ${correctOpt}`, ok:false });
      setHistory(h => [...h, false]);
    }
  }, [answered, curQ, lang, timeLeft, streak, u, shuffledOpts]);

  const next = () => {
    const ni = qIdx + 1;
    setQIdx(ni);
    if (ni >= qList.length) {
      setGameOver(true);
      clearTimer();
      // Save to Firebase when game ends
      setScore(s  => { setCorrect(c => { setStreak(st => { saveScore(s, c, st); return st; }); return c; }); return s; });
      return;
    }
    const nextQ = qList[ni];
    setCurQ(nextQ);
    setDiff(nextQ.diff); // Automatically update difficulty level for the next question!
    setShuffledOpts(optsListRef.current[ni]);
    setAnswered(false);
    setSelected(null);
    setFeedback(null);

    const t = DIFF_TIME[nextQ.diff];
    totalTimeRef.current = t;
    setTimeLeft(t);

    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v-0.1).toFixed(1)))), 100);
  };

  const toggleCat = (cat: Cat) => {
    if (cat === "all") { setSelectedCats(new Set(["all"])); return; }
    setSelectedCats(prev => {
      const next = new Set(prev); next.delete("all");
      if (next.has(cat)) next.delete(cat); else next.add(cat);
      if (next.size === 0) return new Set(["all"]);
      return next;
    });
  };

  const timerPct   = curQ ? (timeLeft / totalTimeRef.current) * 100 : 100;
  const timerColor = timerPct > 50 ? "#1D9E75" : timerPct > 25 ? "#BA7517" : "#E24B4A";
  const isRtl      = lang === "ur";
  const pct        = qList.length > 0 ? Math.round(correct / qList.length * 100) : 0;
  const msg        = pct === 100 ? u.genius : pct >= 70 ? u.excellent : pct >= 50 ? u.good : u.keep;
  const shadow     = "0 4px 0 rgba(0,0,0,0.15)";

  return (
    <div className="space-y-3" dir={isRtl ? "rtl" : "ltr"}>

      {/* Language selector */}
      <div className="grid grid-cols-3 gap-2">
        {(["en","ur","hi"] as Lang[]).map(l => (
          <button key={l} onClick={() => setLang(l)}
            className={`py-2 rounded-xl text-sm font-bold border transition-all ${lang===l?"bg-teal-600 text-white border-teal-700":"bg-white text-gray-500 border-gray-200 hover:border-teal-300"}`}
            style={{boxShadow:lang===l?"0 3px 0 #0F6E56":"0 3px 0 rgba(0,0,0,0.1)"}}>
            {l==="en"?"English":l==="ur"?"اردو":"हिन्दी"}
          </button>
        ))}
      </div>

      {/* Category selector */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {CAT_KEYS.map(cat => (
          <button key={cat} onClick={() => toggleCat(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all flex-shrink-0
              ${selectedCats.has(cat)?"bg-teal-600 text-white border-teal-700":"border-gray-200 text-gray-500 hover:border-teal-300"}`}>
            {u.cats[cat]}
          </button>
        ))}
      </div>

      {/* Adaptive Auto-Difficulty Banner */}
      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 border border-teal-100 rounded-2xl p-3 text-center">
        <p className="text-xs font-bold text-teal-800 flex items-center justify-center gap-1.5">
          <span>⚡ Adaptive Automatic Difficulty</span>
        </p>
        <p className="text-[11px] text-teal-600 mt-0.5">
          Questions start at Easy and automatically scale up (Medium ➔ Hard ➔ Expert) as you answer!
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2">
        {[[u.score,score],[u.correct,correct],[u.streak,streak]].map(([l,v]) => (
          <div key={String(l)} className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
            <p className="text-xl font-bold text-gray-900">{v}</p>
            <p className="text-xs text-gray-500">{l}</p>
          </div>
        ))}
      </div>

      {/* Start screen */}
      {!started && (
        <div className="text-center py-10">
          <p className="text-5xl mb-4">☪️</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{u.title}</h2>
          <p className="text-gray-500 text-sm mb-2 leading-relaxed">{u.sub}</p>
          {fbLoading ? (
            <p className="text-xs text-gray-400 mb-6">Loading questions…</p>
          ) : (
            <p className="text-xs text-gray-400 mb-6">
              {ALL_QUESTIONS.length} questions
              {firebaseQs.length > 0 && ` (${firebaseQs.length} from admin)`}
            </p>
          )}
          <button onClick={startGame} disabled={fbLoading}
            className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold text-base disabled:opacity-50"
            style={{boxShadow:"0 4px 0 #0F6E56"}}>
            {fbLoading ? "Loading…" : u.start}
          </button>
        </div>
      )}

      {/* Game Over */}
      {gameOver && (
        <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-6 text-center">
          <img src="/Islamic_Quiz_Logo.jpeg" alt="Islamic Quiz" className="w-16 h-16 object-contain mx-auto mb-2 rounded-xl" />
          <p className="text-4xl font-black text-teal-600 my-2">{score}</p>
          <p className="text-lg font-bold text-gray-900 mb-1">{correct}/{qList.length} {u.correct}</p>
          <p className="text-gray-500 text-sm mb-4">{msg}</p>
          <p className="text-xs text-gray-400 mb-4">
            {lang==="en" ? `Questions seen: ${seenIdsRef.current.size} / ${ALL_QUESTIONS.length} total` :
             lang==="ur" ? `دیکھے گئے سوالات: ${seenIdsRef.current.size} / ${ALL_QUESTIONS.length} کل` :
             `देखे गए सवाल: ${seenIdsRef.current.size} / ${ALL_QUESTIONS.length} कुल`}
          </p>

          {/* Sign in prompt for guests */}
          {!user && (
            <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 mb-4 text-center">
              <p className="text-sm font-bold text-teal-800 mb-1">💾 {lang==="en"?"Save Your Score!":lang==="ur"?"اپنا اسکور محفوظ کریں!":"अपना स्कोर सेव करें!"}</p>
              <p className="text-xs text-teal-600 mb-3">
                {lang==="en"?"Sign in to track your progress and appear on the leaderboard.":
                 lang==="ur"?"اپنی پیشرفت ٹریک کرنے اور لیڈربورڈ پر آنے کے لیے سائن ان کریں۔":
                 "अपनी प्रगति ट्रैक करने और लीडरबोर्ड पर आने के लिए साइन इन करें।"}
              </p>
              <button onClick={() => setShowAuth(true)}
                className="bg-teal-600 text-white text-sm font-bold px-6 py-2.5 rounded-xl hover:bg-teal-700 transition-all"
                style={{boxShadow:"0 3px 0 #0F6E56"}}>
                {lang==="en"?"Sign In / Create Account":lang==="ur"?"سائن ان / اکاؤنٹ بنائیں":"साइन इन / अकाउंट बनाएँ"}
              </button>
            </div>
          )}

          {/* Saved confirmation for logged in users */}
          {user && (
            <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-2 mb-4 text-center">
              <p className="text-xs text-green-700 font-semibold">
                ✅ {lang==="en"?"Score saved to your profile!":lang==="ur"?"اسکور آپ کی پروفائل میں محفوظ ہو گیا!":"स्कोर आपकी प्रोफ़ाइल में सेव हो गया!"}
              </p>
            </div>
          )}

          <button onClick={startGame} className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold mb-4"
            style={{boxShadow:"0 4px 0 #0F6E56"}}>
            {u.again}
          </button>

          <button
            onClick={() => setShowResultModal(true)}
            className="w-full bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-bold py-3.5 px-6 rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 mb-4 border border-amber-600"
          >
            <span>🖼️ Share Result Card Image (PNG)</span>
          </button>

          <ShareScore
            score={score}
            gameName="Islamic Quiz"
            gameEmoji="☪️"
            detail={`${correct}/${qList.length} correct · ${diff.charAt(0).toUpperCase()+diff.slice(1)} level`}
            gameUrl="/quiz/islamic-quiz"
          />

          <div className="mt-5 space-y-1.5 text-left max-h-48 overflow-y-auto" dir={isRtl?"rtl":"ltr"}>
            {history.map((h, i) => (
              <div key={i} className={`flex justify-between text-xs rounded-lg px-3 py-2 ${h?"bg-teal-50 text-teal-700":"bg-red-50 text-red-700"}`}>
                <span className="truncate flex-1 mr-2">{i+1}. {qList[i]?.[lang]?.q?.slice(0,45)}...</span>
                <span>{h?"✅":"❌"}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Active game */}
      {started && !gameOver && curQ && (
        <>
          {/* Progress dots */}
          <div className="flex gap-1.5 justify-center flex-wrap">
            {Array(qList.length).fill(0).map((_,i) => (
              <div key={i} className={`rounded-full transition-all ${
                i<history.length?(history[i]?"bg-teal-500 w-2 h-2":"bg-red-400 w-2 h-2"):
                i===qIdx?"bg-indigo-600 w-3 h-3":"bg-gray-200 w-2 h-2"}`}/>
            ))}
          </div>

          {/* Question card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${DIFF_COLORS[diff]}`}>
                {u.cats[curQ.cat as Cat]}
              </span>
              <span className="text-xs text-gray-400">{u.q}{qIdx+1} {u.of} {qList.length}</span>
            </div>

            {/* Arabic Ayah */}
            {curQ.arabicAyah && (
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-3 mb-3 text-center">
                <p className="text-xl leading-loose text-teal-900 mb-1"
                  style={{fontFamily:"'Amiri','Noto Naskh Arabic',serif", direction:"rtl"}}>
                  {curQ.arabicAyah}
                </p>
                {curQ.reference && (
                  <p className="text-xs text-teal-600 font-semibold">— {curQ.reference}</p>
                )}
              </div>
            )}

            <p className={`text-base font-bold text-gray-900 leading-relaxed ${isRtl?"text-right":""}`}
               style={isRtl?{fontFamily:"'Noto Nastaliq Urdu',serif"}:{}}>
              {curQ[lang].q}
            </p>
          </div>

          {/* Timer */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-100"
              style={{width:`${timerPct}%`, background:timerColor}}/>
          </div>

          {/* Options */}
          <div className="space-y-2.5">
            {shuffledOpts[lang].opts.map((opt, i) => {
              let cls = "bg-white border-gray-200 text-gray-900";
              if (answered) {
                if (i === shuffledOpts[lang].ans) cls = "bg-teal-600 border-teal-700 text-white";
                else if (i === selected)           cls = "bg-red-500 border-red-600 text-white";
                else                               cls = "bg-gray-50 border-gray-200 text-gray-400";
              }
              return (
                <button key={i} onClick={() => handleAnswer(i)} disabled={answered}
                  className={`w-full ${cls} border rounded-xl py-3 px-4 text-sm font-semibold text-left transition-all active:translate-y-0.5 ${isRtl?"text-right":""}`}
                  style={{boxShadow:shadow, ...(isRtl?{fontFamily:"'Noto Nastaliq Urdu',serif"}:{})}}>
                  <span className="font-bold mr-2">{String.fromCharCode(65+i)}.</span>{opt}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {feedback && (
            <div className={`text-center py-3 px-4 rounded-xl font-semibold text-sm
              ${feedback.ok?"bg-teal-50 text-teal-700 border border-teal-100":"bg-red-50 text-red-700 border border-red-100"}`}>
              {feedback.text}
            </div>
          )}

          {/* Next button */}
          {answered && (
            <button onClick={next} className="w-full bg-teal-600 text-white py-4 rounded-xl font-bold text-base"
              style={{boxShadow:"0 4px 0 #0F6E56"}}>
              {qIdx + 1 >= qList.length ? u.results : u.next}
            </button>
          )}
        </>
      )}

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}

      {/* Result Certificate Share Modal */}
      <QuizResultShareModal
        score={score}
        totalQuestions={qList.length}
        correctAnswers={correct}
        difficulty={diff}
        categoryLabel={u.cats[Array.from(selectedCats)[0] as Cat] || "Islamic Quiz"}
        lang={lang}
        isOpen={showResultModal}
        onClose={() => setShowResultModal(false)}
      />
    </div>
  );
}
