"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import ShareScore from "@/components/ShareScore";

type Category = "all" | "math" | "science" | "history" | "english";
type Difficulty = "easy" | "medium" | "hard";

interface Question {
  q: string; opts: string[]; ans: number;
  diff: Difficulty; pts: number; cat: string;
}

const QB: Record<string, Question[]> = {
  math: [
    {q:"What is 15 × 8?",opts:["120","110","130","125"],ans:0,diff:"easy",pts:10,cat:"Math"},
    {q:"What is √144?",opts:["11","12","13","14"],ans:1,diff:"easy",pts:10,cat:"Math"},
    {q:"What is 7³?",opts:["343","216","512","441"],ans:0,diff:"medium",pts:20,cat:"Math"},
    {q:"Solve: 2x + 6 = 18. What is x?",opts:["4","5","6","7"],ans:2,diff:"medium",pts:20,cat:"Math"},
    {q:"What is π to 2 decimal places?",opts:["3.12","3.14","3.16","3.18"],ans:1,diff:"easy",pts:10,cat:"Math"},
    {q:"Sum of angles in a triangle?",opts:["90°","120°","180°","360°"],ans:2,diff:"easy",pts:10,cat:"Math"},
    {q:"What is 25% of 200?",opts:["40","45","50","55"],ans:2,diff:"easy",pts:10,cat:"Math"},
    {q:"Which is a prime number?",opts:["15","21","37","49"],ans:2,diff:"medium",pts:20,cat:"Math"},
    {q:"Area of a circle with radius 5?",opts:["25π","50π","75π","100π"],ans:0,diff:"medium",pts:20,cat:"Math"},
    {q:"What is log₁₀(1000)?",opts:["2","3","4","10"],ans:1,diff:"hard",pts:30,cat:"Math"},
    {q:"Derivative of x²?",opts:["x","2x","2","x²"],ans:1,diff:"hard",pts:30,cat:"Math"},
    {q:"What is 12! ÷ 11!?",opts:["10","11","12","13"],ans:2,diff:"hard",pts:30,cat:"Math"},
  ],
  science: [
    {q:"Chemical formula of water?",opts:["H2O","CO2","NaCl","O2"],ans:0,diff:"easy",pts:10,cat:"Science"},
    {q:"Powerhouse of the cell?",opts:["Nucleus","Ribosome","Mitochondria","Golgi body"],ans:2,diff:"easy",pts:10,cat:"Science"},
    {q:"Bones in the adult human body?",opts:["196","206","216","226"],ans:1,diff:"medium",pts:20,cat:"Science"},
    {q:"Planet closest to the Sun?",opts:["Venus","Earth","Mars","Mercury"],ans:3,diff:"easy",pts:10,cat:"Science"},
    {q:"Speed of light (approx)?",opts:["3×10⁶ m/s","3×10⁸ m/s","3×10¹⁰ m/s","3×10¹² m/s"],ans:1,diff:"hard",pts:30,cat:"Science"},
    {q:"Gas plants absorb in photosynthesis?",opts:["Oxygen","Nitrogen","Carbon Dioxide","Hydrogen"],ans:2,diff:"easy",pts:10,cat:"Science"},
    {q:"Atomic number of Carbon?",opts:["4","6","8","12"],ans:1,diff:"medium",pts:20,cat:"Science"},
    {q:"Newton's 2nd Law of Motion?",opts:["F=mv","F=ma","F=mg","F=md"],ans:1,diff:"medium",pts:20,cat:"Science"},
    {q:"DNA stands for?",opts:["Deoxyribonucleic Acid","Diribose Nucleic Acid","Deoxyribose Nitrogen Acid","Diribonucleic Acid"],ans:0,diff:"medium",pts:20,cat:"Science"},
    {q:"Most abundant gas in Earth's atmosphere?",opts:["Oxygen","Carbon Dioxide","Nitrogen","Argon"],ans:2,diff:"medium",pts:20,cat:"Science"},
  ],
  history: [
    {q:"Year World War II ended?",opts:["1943","1944","1945","1946"],ans:2,diff:"easy",pts:10,cat:"History"},
    {q:"First President of the United States?",opts:["John Adams","Thomas Jefferson","George Washington","Benjamin Franklin"],ans:2,diff:"easy",pts:10,cat:"History"},
    {q:"French Revolution began in?",opts:["1776","1789","1799","1815"],ans:1,diff:"medium",pts:20,cat:"History"},
    {q:"Empire ruled by Genghis Khan?",opts:["Ottoman","Mongol","Persian","Roman"],ans:1,diff:"easy",pts:10,cat:"History"},
    {q:"Berlin Wall fell in?",opts:["1987","1988","1989","1990"],ans:2,diff:"medium",pts:20,cat:"History"},
    {q:"Who signed the Magna Carta?",opts:["King John","King Henry","The Barons","The Pope"],ans:0,diff:"hard",pts:30,cat:"History"},
    {q:"First country to land on the Moon?",opts:["USSR","UK","China","USA"],ans:3,diff:"easy",pts:10,cat:"History"},
    {q:"Renaissance began in which country?",opts:["France","Germany","Italy","Spain"],ans:2,diff:"medium",pts:20,cat:"History"},
    {q:"Year the Titanic sank?",opts:["1910","1911","1912","1913"],ans:2,diff:"easy",pts:10,cat:"History"},
    {q:"Who invented the telephone?",opts:["Edison","Tesla","Bell","Marconi"],ans:2,diff:"easy",pts:10,cat:"History"},
  ],
  english: [
    {q:"Synonym for 'happy'?",opts:["Sad","Joyful","Angry","Tired"],ans:1,diff:"easy",pts:10,cat:"English"},
    {q:"Grammatically correct sentence?",opts:["She don't like it","She doesn't likes it","She doesn't like it","She not like it"],ans:2,diff:"easy",pts:10,cat:"English"},
    {q:"'The wind whispered' is an example of?",opts:["Simile","Metaphor","Personification","Alliteration"],ans:2,diff:"medium",pts:20,cat:"English"},
    {q:"Plural of 'analysis'?",opts:["Analysises","Analyzes","Analyses","Analysis"],ans:2,diff:"medium",pts:20,cat:"English"},
    {q:"Who wrote Romeo and Juliet?",opts:["Dickens","Shakespeare","Chaucer","Austen"],ans:1,diff:"easy",pts:10,cat:"English"},
    {q:"Antonym for 'ancient'?",opts:["Old","Historic","Modern","Classic"],ans:2,diff:"easy",pts:10,cat:"English"},
    {q:"Example of alliteration?",opts:["Big and tall","Peter Piper picked","Like a rose","The sun set"],ans:1,diff:"medium",pts:20,cat:"English"},
    {q:"Total syllables in a haiku?",opts:["14","17","21","5"],ans:1,diff:"hard",pts:30,cat:"English"},
    {q:"Past tense of 'bring'?",opts:["Bringed","Brung","Brought","Brang"],ans:2,diff:"medium",pts:20,cat:"English"},
    {q:"What does 'ambiguous' mean?",opts:["Clear","Unclear/multiple meanings","Wrong","Correct"],ans:1,diff:"hard",pts:30,cat:"English"},
  ],
};

const TOTAL = 10;
const shadow = "0 4px 0 rgba(0,0,0,0.2)";

function shuffle<T>(arr: T[]): T[] { return [...arr].sort(() => Math.random() - 0.5); }
function getPool(cat: Category): Question[] {
  if (cat === "all") return [...QB.math,...QB.science,...QB.history,...QB.english];
  return QB[cat] ?? [];
}

export default function QuizBattleGame() {
  const [cat, setCat] = useState<Category>("all");
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [best, setBest] = useState(0);
  const [lives, setLives] = useState(3);
  const [qList, setQList] = useState<Question[]>([]);
  const [qIdx, setQIdx] = useState(0);
  const [curQ, setCurQ] = useState<Question | null>(null);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<{ text: string; ok: boolean } | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [history, setHistory] = useState<boolean[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const [puUsed, setPuUsed] = useState({ fifty: false, skip: false, time: false });
  const [hiddenOpts, setHiddenOpts] = useState<number[]>([]);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalTimeRef = useRef(0);

  const clearTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  const startGame = useCallback((c: Category = cat) => {
    clearTimer();
    const list = shuffle(getPool(c)).slice(0, TOTAL);
    setQList(list); setQIdx(0); setScore(0); setStreak(0); setCorrect(0);
    setLives(3); setHistory([]); setGameOver(false); setStarted(true);
    setPuUsed({ fifty: false, skip: false, time: false }); setHiddenOpts([]);
    const q = list[0]; setCurQ(q); setAnswered(false); setSelected(null);
    setFeedback(null);
    const t = q.diff === "hard" ? 12 : q.diff === "medium" ? 18 : 25;
    totalTimeRef.current = t; setTimeLeft(t);
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v - 0.1).toFixed(1)))), 100);
  }, [cat]);

  const loadNext = useCallback((list: Question[], idx: number, lv: number) => {
    if (idx >= TOTAL || lv <= 0) { setGameOver(true); clearTimer(); return; }
    const q = list[idx]; setCurQ(q); setAnswered(false); setSelected(null);
    setFeedback(null); setHiddenOpts([]);
    const t = q.diff === "hard" ? 12 : q.diff === "medium" ? 18 : 25;
    totalTimeRef.current = t; setTimeLeft(t);
    clearTimer();
    timerRef.current = setInterval(() => setTimeLeft(v => Math.max(0, parseFloat((v - 0.1).toFixed(1)))), 100);
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && curQ && !answered && started && !gameOver) {
      clearTimer(); setAnswered(true);
      setFeedback({ text: `⏰ Time's up! Answer: ${curQ.opts[curQ.ans]}`, ok: false });
      setLives(l => { const nl = Math.max(0, l - 1); return nl; });
      setStreak(0); setHistory(h => [...h, false]);
    }
  }, [timeLeft, curQ, answered, started, gameOver]);

  const handleAnswer = useCallback((idx: number) => {
    if (answered || !curQ) return;
    setAnswered(true); setSelected(idx); clearTimer();
    const isRight = idx === curQ.ans;
    if (isRight) {
      const timeBonus = Math.round(timeLeft * 2);
      const streakBonus = streak >= 5 ? 50 : streak >= 3 ? 25 : 0;
      const earned = curQ.pts + timeBonus + streakBonus;
      setScore(s => { const ns = s + earned; setBest(b => Math.max(b, ns)); return ns; });
      setCorrect(c => c + 1); setStreak(s => s + 1);
      setFeedback({ text: `✅ Correct! +${earned} pts${streakBonus ? ` 🔥 +${streakBonus} bonus` : ""}`, ok: true });
      setHistory(h => [...h, true]);
    } else {
      setLives(l => Math.max(0, l - 1)); setStreak(0);
      setFeedback({ text: `❌ Wrong! Answer: ${curQ.opts[curQ.ans]}`, ok: false });
      setHistory(h => [...h, false]);
    }
  }, [answered, curQ, timeLeft, streak]);

  const next = () => {
    const ni = qIdx + 1;
    setQIdx(ni);
    loadNext(qList, ni, lives - (feedback?.ok === false && feedback.text.startsWith("❌") ? 1 : lives > 0 ? 0 : 1));
  };

  const useFifty = () => {
    if (puUsed.fifty || answered || !curQ) return;
    setPuUsed(p => ({ ...p, fifty: true }));
    const wrong = [0,1,2,3].filter(i => i !== curQ.ans);
    const hide = shuffle(wrong).slice(0, 2);
    setHiddenOpts(hide);
  };
  const useSkip = () => {
    if (puUsed.skip || answered) return;
    setPuUsed(p => ({ ...p, skip: true }));
    setAnswered(true); setFeedback({ text: "⏭️ Skipped!", ok: true });
    setHistory(h => [...h, false]);
  };
  const useTime = () => {
    if (puUsed.time || answered) return;
    setPuUsed(p => ({ ...p, time: true }));
    setTimeLeft(t => Math.min(totalTimeRef.current, t + 10));
  };

  const timerPct = curQ ? (timeLeft / totalTimeRef.current) * 100 : 100;
  const timerColor = timerPct > 50 ? "#6366f1" : timerPct > 25 ? "#BA7517" : "#E24B4A";
  const diffColor: Record<Difficulty, string> = { easy:"bg-teal-50 text-teal-700", medium:"bg-amber-50 text-amber-700", hard:"bg-red-50 text-red-700" };

  return (
    <div className="space-y-3">
      {/* Stats */}
      <div className="grid grid-cols-4 gap-2">
        {[["Score",score],["Streak",streak],["Correct",correct],["Best",best]].map(([l,v])=>(
          <div key={l} className="bg-gray-50 rounded-xl p-2 text-center border border-gray-100">
            <p className="text-lg font-bold text-gray-900">{v}</p>
            <p className="text-xs text-gray-500">{l}</p>
          </div>
        ))}
      </div>

      {/* Lives */}
      <div className="flex justify-center gap-1 text-2xl">
        {Array(3).fill(0).map((_,i) => <span key={i}>{i < lives ? "❤️" : "🖤"}</span>)}
      </div>

      {/* Category */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {(["all","math","science","history","english"] as Category[]).map(c => (
          <button key={c} onClick={() => { setCat(c); startGame(c); }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all
              ${cat===c?"bg-indigo-600 text-white border-indigo-700":"border-gray-200 text-gray-500 hover:border-indigo-300"}`}>
            {c==="all"?"🌐 All":c==="math"?"🧮 Math":c==="science"?"🔬 Science":c==="history"?"🌍 History":"📝 English"}
          </button>
        ))}
      </div>

      {!started && (
        <div className="text-center py-10">
          <p className="text-5xl mb-4">🧠</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Quiz Battle</h2>
          <p className="text-gray-500 text-sm mb-2">10 questions · 3 lives · Powerups</p>
          <p className="text-gray-400 text-xs mb-6">Earn bonus points for speed & streaks!</p>
          <button onClick={() => startGame()} className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold text-base" style={{boxShadow:"0 4px 0 #3730a3"}}>
            Start Quiz
          </button>
        </div>
      )}

      {gameOver && (
        <div className="bg-gradient-to-b from-indigo-600 to-indigo-800 text-white rounded-2xl p-6 text-center">
          <p className="text-4xl mb-2">{correct>=9?"🏆":correct>=7?"🌟":correct>=5?"👍":"📚"}</p>
          <p className="text-4xl font-black my-2">{score}</p>
          <p className="text-lg font-bold mb-1">{correct}/{TOTAL} Correct</p>
          <p className="text-indigo-200 text-sm mb-5">{correct>=9?"Outstanding!":correct>=7?"Excellent!":correct>=5?"Good Job!":"Keep Studying!"}</p>
          <button onClick={() => startGame()} className="bg-white text-indigo-700 px-8 py-3 rounded-xl font-bold mb-5" style={{boxShadow:"0 4px 0 rgba(0,0,0,0.2)"}}>
            Play Again
          </button>

          {/* Share Score */}
          <ShareScore
            score={score}
            gameName="Quiz Battle"
            gameEmoji="🧠"
            detail={`${correct}/${TOTAL} correct · ${lives} lives remaining`}
            gameUrl="/games/quiz-battle"
          />

          <div className="mt-5 space-y-1.5 text-left max-h-48 overflow-y-auto">
            <p className="text-xs text-indigo-300 font-semibold mb-2">Round Summary</p>
            {history.map((h, i) => (
              <div key={i} className={`flex justify-between text-xs rounded-lg px-3 py-2 ${h?"bg-teal-600/30":"bg-red-500/30"}`}>
                <span className="truncate flex-1 mr-2">Q{i+1}: {qList[i]?.q.slice(0,40)}{(qList[i]?.q.length||0)>40?"...":""}</span>
                <span>{h?"✅":"❌"}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {started && !gameOver && curQ && (
        <>
          {/* Progress dots */}
          <div className="flex gap-1.5 justify-center">
            {Array(TOTAL).fill(0).map((_,i) => (
              <div key={i} className={`rounded-full transition-all ${
                i < history.length ? (history[i]?"bg-teal-500 w-2 h-2":"bg-red-400 w-2 h-2") :
                i === qIdx ? "bg-indigo-600 w-3 h-3" : "bg-gray-200 w-2 h-2"}`} />
            ))}
          </div>

          {/* Streak banner */}
          {streak >= 3 && (
            <div className="text-center py-2 bg-amber-50 border border-amber-200 rounded-xl text-amber-800 text-sm font-bold">
              🔥 {streak} Streak! Bonus points active!
            </div>
          )}

          {/* Powerups */}
          <div className="grid grid-cols-3 gap-2">
            {[["50/50","🎯",useFifty,puUsed.fifty],["Skip","⏭️",useSkip,puUsed.skip],["+10s","⏰",useTime,puUsed.time]].map(([l,e,fn,used])=>(
              <button key={l as string} onClick={fn as ()=>void} disabled={!!used || answered}
                className={`py-2 rounded-xl border text-xs font-bold transition-all flex flex-col items-center gap-0.5 ${used?"opacity-40":"hover:bg-gray-50"} border-gray-200`}
                style={{boxShadow:shadow}}>
                <span className="text-lg">{e as string}</span>{l as string}
              </button>
            ))}
          </div>

          {/* Question card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-3">
              <span className={`text-xs font-bold px-2 py-1 rounded-full ${diffColor[curQ.diff]}`}>{curQ.diff.toUpperCase()}</span>
              <span className="text-xs text-gray-400 font-semibold">Q{qIdx+1}/{TOTAL} · +{curQ.pts} pts{streak>=3?" +bonus":""}</span>
            </div>
            <p className="text-base font-bold text-gray-900 leading-relaxed">{curQ.q}</p>
            <p className="text-xs text-gray-400 mt-1">{curQ.cat}</p>
          </div>

          {/* Timer */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-100" style={{ width:`${timerPct}%`, background:timerColor }} />
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-2.5">
            {curQ.opts.map((opt, i) => {
              const hidden = hiddenOpts.includes(i);
              let cls = "bg-white border-gray-200 text-gray-900";
              if (answered) {
                if (i === curQ.ans) cls = "bg-teal-600 border-teal-700 text-white";
                else if (i === selected) cls = "bg-red-500 border-red-600 text-white";
                else cls = "bg-gray-50 border-gray-200 text-gray-400";
              }
              return (
                <button key={i} onClick={() => !hidden && handleAnswer(i)} disabled={answered || hidden}
                  className={`${cls} ${hidden?"opacity-20 cursor-not-allowed":""} border rounded-xl py-3 px-3 text-sm font-semibold text-left transition-all active:translate-y-0.5`}
                  style={{boxShadow:shadow}}>
                  <span className="font-bold mr-1">{String.fromCharCode(65+i)}.</span>{opt}
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {feedback && (
            <div className={`text-center py-3 px-4 rounded-xl font-semibold text-sm ${feedback.ok?"bg-teal-50 text-teal-700 border border-teal-100":"bg-red-50 text-red-700 border border-red-100"}`}>
              {feedback.text}
            </div>
          )}

          {/* Next */}
          {answered && (
            <button onClick={next} className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold text-base"
              style={{boxShadow:"0 4px 0 #3730a3"}}>
              {qIdx + 1 >= TOTAL || lives <= 0 ? "See Results" : "Next Question →"}
            </button>
          )}
        </>
      )}
    </div>
  );
}