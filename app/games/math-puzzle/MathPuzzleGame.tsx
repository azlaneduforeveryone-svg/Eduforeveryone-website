"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import ShareScore from "@/components/ShareScore";

type Level = "easy" | "medium" | "hard" | "expert";
type QuestionType = "add" | "sub" | "mul" | "div" | "missing" | "equation" | "sequence" | "power" | "mcq";

interface Question {
  q: string;
  ans: number;
  hint: string;
  opts: number[] | null;
  isInput: boolean;
  points: number;
  time: number;
}

interface HistItem { label: string; result: "✅" | "❌"; pts: number; }

const LEVELS: Record<Level, { time: number; points: number; types: QuestionType[] }> = {
  easy:   { time: 20, points: 10, types: ["add","sub","mul","mcq"] },
  medium: { time: 15, points: 20, types: ["add","sub","mul","div","missing","mcq"] },
  hard:   { time: 12, points: 30, types: ["mul","div","missing","equation","mcq"] },
  expert: { time: 8,  points: 50, types: ["equation","missing","sequence","power","mcq"] },
};

const rnd = (a: number, b: number) => Math.floor(Math.random() * (b - a + 1)) + a;
const shuffle = <T,>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

function generateQuestion(level: Level): Question {
  const cfg = LEVELS[level];
  const type = cfg.types[rnd(0, cfg.types.length - 1)];
  let q = "", ans = 0, hint = "", opts: number[] | null = null, isInput = false;

  if (type === "add") {
    const max = { easy:20, medium:100, hard:500, expert:9999 }[level];
    const a = rnd(1,max), b = rnd(1,max);
    q = `${a} + ${b} = ?`; ans = a+b; hint = "Addition";
  } else if (type === "sub") {
    const max = { easy:20, medium:100, hard:500, expert:9999 }[level];
    const a = rnd(10,max), b = rnd(1,a);
    q = `${a} − ${b} = ?`; ans = a-b; hint = "Subtraction";
  } else if (type === "mul") {
    const max = { easy:10, medium:20, hard:50, expert:99 }[level];
    const a = rnd(2,max), b = rnd(2,max);
    q = `${a} × ${b} = ?`; ans = a*b; hint = "Multiplication";
  } else if (type === "div") {
    const b = rnd(2,12), r = rnd(2,20);
    q = `${b*r} ÷ ${b} = ?`; ans = r; hint = "Division";
  } else if (type === "missing") {
    const a = rnd(2,50), b = rnd(2,50), result = a + b;
    if (rnd(0,1)) { q = `? + ${b} = ${result}`; ans = a; }
    else { q = `${a} + ? = ${result}`; ans = b; }
    hint = "Find the missing number"; isInput = true;
  } else if (type === "equation") {
    const a = rnd(2,10), b = rnd(1,20), x = rnd(1,15);
    q = `${a}x + ${b} = ${a*x+b}\nFind x`; ans = x; hint = "Solve for x"; isInput = true;
  } else if (type === "sequence") {
    const start = rnd(1,20), step = rnd(2,10);
    q = `${start}, ${start+step}, ${start+2*step}, ${start+3*step}, ?`;
    ans = start+4*step; hint = "Find the next number"; isInput = true;
  } else if (type === "power") {
    const base = rnd(2,9), exp = rnd(2,3);
    q = `${base}^${exp} = ?`; ans = Math.pow(base,exp); hint = "Powers & Exponents"; isInput = true;
  } else {
    const a = rnd(2,30), b = rnd(2,30);
    q = `${a} × ${b} = ?`; ans = a*b; hint = "Choose the correct answer";
  }

  if (!isInput) {
    const wrongs = new Set<number>();
    while (wrongs.size < 3) {
      const w = ans + rnd(-10,10);
      if (w !== ans && w > 0) wrongs.add(w);
    }
    opts = shuffle([ans, ...wrongs]);
  }

  return { q, ans, hint, opts, isInput, points: cfg.points, time: cfg.time };
}

const TOTAL_Q = 10;

export default function MathPuzzleGame() {
  const [level, setLevel] = useState<Level>("easy");
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);
  const [qNum, setQNum] = useState(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [answered, setAnswered] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [inputVal, setInputVal] = useState("");
  const [feedback, setFeedback] = useState<{ text: string; correct: boolean } | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [history, setHistory] = useState<HistItem[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const [started, setStarted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const totalTime = useRef(0);

  const clearTimer = () => { if (timerRef.current) clearInterval(timerRef.current); };

  const handleResult = useCallback((isRight: boolean, correctAns: number, pts: number, expired = false) => {
    clearTimer();
    setAnswered(true);
    let earned = 0;
    if (isRight) {
      const timeBonus = Math.round(timeLeft * 2);
      earned = pts + timeBonus;
      setScore(s => { const ns = s + earned; setBest(b => Math.max(b, ns)); return ns; });
      setCorrect(c => c + 1);
      setStreak(s => s + 1);
      setFeedback({ text: `✅ Correct! +${earned} pts`, correct: true });
    } else {
      setStreak(0);
      setFeedback({ text: expired ? `⏰ Time's up! Answer: ${correctAns}` : `❌ Wrong! Answer: ${correctAns}`, correct: false });
    }
    setHistory(h => [...h, { label: `Q${qNum}`, result: isRight ? "✅" : "❌", pts: earned }]);
  }, [timeLeft, qNum]);

  const startQuestion = useCallback((q: Question, num: number) => {
    setQuestion(q); setAnswered(false); setSelected(null); setInputVal(""); setFeedback(null);
    setTimeLeft(q.time); totalTime.current = q.time;
    clearTimer();
    timerRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 0.1) { clearTimer(); return 0; }
        return parseFloat((t - 0.1).toFixed(1));
      });
    }, 100);
  }, []);

  useEffect(() => {
    if (timeLeft === 0 && question && !answered && started) {
      handleResult(false, question.ans, question.points, true);
    }
  }, [timeLeft, question, answered, handleResult, started]);

  const startGame = useCallback((lv: Level = level) => {
    clearTimer(); setScore(0); setCorrect(0); setStreak(0); setHistory([]);
    setGameOver(false); setStarted(true);
    const q = generateQuestion(lv);
    setQNum(1); startQuestion(q, 1);
  }, [level, startQuestion]);

  const nextQuestion = () => {
    const next = qNum + 1;
    if (next > TOTAL_Q) { setGameOver(true); clearTimer(); return; }
    setQNum(next);
    startQuestion(generateQuestion(level), next);
  };

  const checkMCQ = (opt: number) => {
    if (answered || !question) return;
    setSelected(opt);
    handleResult(opt === question.ans, question.ans, question.points);
  };

  const checkInput = () => {
    if (answered || !question || inputVal === "") return;
    handleResult(parseFloat(inputVal) === question.ans, question.ans, question.points);
  };

  const timerPct = question ? (timeLeft / totalTime.current) * 100 : 100;
  const timerColor = timerPct > 50 ? "#1D9E75" : timerPct > 25 ? "#BA7517" : "#E24B4A";

  const shadow = "0 4px 0 rgba(0,0,0,0.15)";

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[["Score", score], ["Correct", correct], ["Best", best]].map(([l, v]) => (
          <div key={l} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
            <p className="text-2xl font-bold text-gray-900">{v}</p>
            <p className="text-xs text-gray-500">{l}</p>
          </div>
        ))}
      </div>

      {/* Streak */}
      {streak > 1 && (
        <div className="flex justify-center">
          <span className="bg-amber-50 border border-amber-200 text-amber-800 text-sm font-bold px-4 py-1.5 rounded-full">
            🔥 {streak} Streak!
          </span>
        </div>
      )}

      {/* Level selector */}
      <div className="grid grid-cols-4 gap-2">
        {(["easy","medium","hard","expert"] as Level[]).map(l => (
          <button key={l} onClick={() => { setLevel(l); startGame(l); }}
            className={`py-2 rounded-xl text-xs font-bold border transition-all capitalize
              ${level===l?"bg-teal-600 text-white border-teal-700":"bg-white text-gray-500 border-gray-200 hover:border-teal-300"}`}
            style={{boxShadow:level===l?"0 3px 0 #0F6E56":"0 3px 0 rgba(0,0,0,0.1)"}}>
            {l}
          </button>
        ))}
      </div>

      {!started && (
        <div className="text-center py-10">
          <p className="text-5xl mb-4">🧮</p>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Math Puzzle</h2>
          <p className="text-gray-500 text-sm mb-6">10 questions · Beat the clock · Build your streak</p>
          <button onClick={() => startGame()} className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold text-base" style={{boxShadow:"0 4px 0 #0F6E56"}}>
            Start Game
          </button>
        </div>
      )}

      {gameOver && (
        <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-6 text-center">
          <p className="text-gray-500 text-sm font-semibold mb-1">Game Over</p>
          <p className="text-5xl font-bold text-teal-600 my-2">{score}</p>
          <p className="text-lg font-bold text-gray-900 mb-1">{correct}/{TOTAL_Q} Correct</p>
          <p className="text-gray-500 text-sm mb-5">
            {correct>=9?"🏆 Outstanding!":correct>=7?"🌟 Great job!":correct>=5?"👍 Good effort!":"📚 Keep practicing!"}
          </p>
          <button onClick={() => startGame()} className="bg-teal-600 text-white px-8 py-3 rounded-xl font-bold mb-5" style={{boxShadow:"0 4px 0 #0F6E56"}}>
            Play Again
          </button>

          {/* Share Score */}
          <ShareScore
            score={score}
            gameName="Math Puzzle"
            gameEmoji="🧮"
            detail={`${correct}/${TOTAL_Q} correct · Level: ${level}`}
            gameUrl="/games/math-puzzle"
          />

          <div className="mt-5 space-y-2 text-left">
            <p className="text-xs text-gray-400 font-semibold mb-2">Round Summary</p>
            {history.map((h, i) => (
              <div key={i} className="flex justify-between text-sm bg-gray-50 rounded-lg px-3 py-2">
                <span className="font-semibold text-gray-700">{h.label}</span>
                <span>{h.result} {h.pts > 0 ? `+${h.pts} pts` : ""}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {started && !gameOver && question && (
        <>
          <p className="text-center text-xs text-gray-400">Question {qNum} of {TOTAL_Q}</p>

          {/* Question card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">{question.hint}</p>
            <p className="text-3xl font-bold text-gray-900 leading-tight whitespace-pre-line">{question.q}</p>
          </div>

          {/* Timer */}
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-100" style={{ width: `${timerPct}%`, background: timerColor }} />
          </div>

          {/* MCQ Options */}
          {!question.isInput && question.opts && (
            <div className="grid grid-cols-2 gap-3">
              {question.opts.map((opt, i) => {
                let cls = "bg-white border-gray-200 text-gray-900";
                if (answered) {
                  if (opt === question.ans) cls = "bg-teal-600 border-teal-700 text-white";
                  else if (opt === selected) cls = "bg-red-500 border-red-600 text-white";
                }
                return (
                  <button key={i} onClick={() => checkMCQ(opt)} disabled={answered}
                    className={`${cls} border rounded-xl py-4 text-2xl font-bold transition-all active:translate-y-0.5`}
                    style={{boxShadow:shadow}}>
                    {opt}
                  </button>
                );
              })}
            </div>
          )}

          {/* Input */}
          {question.isInput && (
            <div className="flex gap-3">
              <input type="number" value={inputVal} onChange={e => setInputVal(e.target.value)}
                onKeyDown={e => e.key==="Enter" && checkInput()}
                disabled={answered} placeholder="Your answer..."
                className={`flex-1 border rounded-xl px-4 py-3 text-2xl font-bold text-center focus:outline-none focus:ring-2 focus:ring-teal-500 ${answered?(parseFloat(inputVal)===question.ans?"border-teal-500 bg-teal-50":"border-red-400 bg-red-50"):"border-gray-200"}`}
                autoFocus />
              {!answered && (
                <button onClick={checkInput} className="bg-teal-600 text-white px-5 rounded-xl font-bold text-base" style={{boxShadow:"0 4px 0 #0F6E56"}}>Go</button>
              )}
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div className={`text-center py-3 px-4 rounded-xl font-semibold text-sm ${feedback.correct?"bg-teal-50 text-teal-700 border border-teal-100":"bg-red-50 text-red-700 border border-red-100"}`}>
              {feedback.text}
            </div>
          )}

          {/* Next button */}
          {answered && (
            <button onClick={nextQuestion} className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold text-base" style={{boxShadow:"0 4px 0 #111"}}>
              {qNum >= TOTAL_Q ? "See Results" : "Next Question →"}
            </button>
          )}
        </>
      )}
    </div>
  );
}
