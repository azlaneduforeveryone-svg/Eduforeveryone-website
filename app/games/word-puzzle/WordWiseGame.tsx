"use client";
import { useState, useEffect, useCallback } from "react";

type Category = "all" | "math" | "science" | "english";
type CellState = "empty" | "filled" | "correct" | "present" | "absent";
type KeyState = "correct" | "present" | "absent" | "unused";

interface WordEntry { w: string; h: string; }
interface GuessRow { letters: string[]; results: CellState[]; }

const WORDS: Record<string, WordEntry[]> = {
  math: [
    {w:"ANGLE",h:"Found in triangles and geometry"},
    {w:"PRIME",h:"A number with only 2 factors"},
    {w:"RATIO",h:"A comparison of two quantities"},
    {w:"GRAPH",h:"Used to visualize data or functions"},
    {w:"DIGIT",h:"A single number from 0 to 9"},
    {w:"SCALE",h:"Used for measuring or proportion"},
    {w:"SOLVE",h:"What you do to an equation"},
    {w:"POWER",h:"Exponent or index in mathematics"},
    {w:"EQUAL",h:"Same value on both sides"},
    {w:"LIMIT",h:"A fundamental concept in calculus"},
    {w:"CHORD",h:"A line segment inside a circle"},
    {w:"SLOPE",h:"The steepness of a line on a graph"},
    {w:"PROOF",h:"A logical argument in mathematics"},
    {w:"WHOLE",h:"A type of number — not a fraction"},
    {w:"CUBIC",h:"Related to the power of three"},
  ],
  science: [
    {w:"CELLS",h:"The basic unit of all living things"},
    {w:"PLANT",h:"An organism that photosynthesizes"},
    {w:"ATOMS",h:"The smallest unit of an element"},
    {w:"ORBIT",h:"The path of a planet around a star"},
    {w:"FORCE",h:"A push or pull on an object"},
    {w:"OZONE",h:"A gas layer protecting Earth"},
    {w:"LIGHT",h:"Electromagnetic radiation we can see"},
    {w:"SOLID",h:"A state of matter with fixed shape"},
    {w:"LASER",h:"Concentrated beam of light"},
    {w:"NERVE",h:"Carries signals in your body"},
    {w:"VIRUS",h:"A microscopic pathogen"},
    {w:"BLOOD",h:"Red fluid that flows through veins"},
    {w:"WATER",h:"H₂O — essential for all life"},
    {w:"SPINE",h:"The backbone of vertebrates"},
    {w:"TRAIT",h:"A characteristic passed by genetics"},
  ],
  english: [
    {w:"PROSE",h:"Ordinary written language"},
    {w:"TENSE",h:"Past, present or future in grammar"},
    {w:"VOICE",h:"Active or passive in writing"},
    {w:"IRONY",h:"Meaning the opposite of what you say"},
    {w:"RHYME",h:"Matching end sounds in poetry"},
    {w:"GENRE",h:"A category of literature or writing"},
    {w:"THEME",h:"The central idea of a story"},
    {w:"COMMA",h:"A punctuation mark used to separate"},
    {w:"DRAFT",h:"An early version of a piece of writing"},
    {w:"FABLE",h:"A story with a moral, often with animals"},
    {w:"ESSAY",h:"A short piece of writing on a topic"},
    {w:"NOVEL",h:"A long work of fiction"},
    {w:"VERSE",h:"A line or stanza of poetry"},
    {w:"SIMILE",h:"A comparison using like or as — 6 letters"},
    {w:"CLAUSE",h:"A group of words with subject and verb — 6 letters"},
  ],
};

const MAX_GUESSES = 6;
const KEYBOARD_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","⌫"],
];

function getAllWords(): WordEntry[] {
  return [...WORDS.math, ...WORDS.science, ...WORDS.english];
}

function scoreGuess(guess: string, word: string): CellState[] {
  const result: CellState[] = Array(word.length).fill("absent");
  const wArr = word.split("");
  const gArr = guess.split("");
  gArr.forEach((ch, i) => { if (ch === wArr[i]) { result[i] = "correct"; wArr[i] = ""; gArr[i] = ""; } });
  gArr.forEach((ch, i) => {
    if (!ch) return;
    const idx = wArr.indexOf(ch);
    if (idx !== -1) { result[i] = "present"; wArr[idx] = ""; }
  });
  return result;
}

const cellBg: Record<CellState, string> = {
  empty: "bg-white border-gray-200",
  filled: "bg-white border-gray-500",
  correct: "bg-teal-600 border-teal-700 text-white",
  present: "bg-amber-500 border-amber-600 text-white",
  absent: "bg-gray-600 border-gray-700 text-white",
};

const keyBg: Record<KeyState, string> = {
  unused: "bg-gray-200 text-gray-800",
  correct: "bg-teal-600 text-white",
  present: "bg-amber-500 text-white",
  absent: "bg-gray-500 text-white",
};

export default function WordWiseGame() {
  const [category, setCategory] = useState<Category>("all");
  const [word, setWord] = useState("");
  const [hint, setHint] = useState("");
  const [guesses, setGuesses] = useState<GuessRow[]>([]);
  const [current, setCurrent] = useState("");
  const [keyStates, setKeyStates] = useState<Record<string, KeyState>>({});
  const [message, setMessage] = useState("");
  const [hintShown, setHintShown] = useState(false);
  const [hintUsed, setHintUsed] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [score, setScore] = useState(0);
  const [wins, setWins] = useState(0);
  const [streak, setStreak] = useState(0);
  const [shake, setShake] = useState(false);

  const newGame = useCallback((cat: Category = category) => {
    const pool = cat === "all" ? getAllWords() : WORDS[cat] ?? getAllWords();
    const pick = pool[Math.floor(Math.random() * pool.length)];
    setWord(pick.w.toUpperCase());
    setHint(pick.h);
    setGuesses([]); setCurrent(""); setKeyStates({});
    setMessage(""); setHintShown(false); setHintUsed(false);
    setGameWon(false); setGameLost(false);
  }, [category]);

  useEffect(() => { newGame("all"); }, []);

  const showMsg = (msg: string) => { setMessage(msg); setTimeout(() => setMessage(""), 2000); };

  const pressKey = useCallback((key: string) => {
    if (gameWon || gameLost) return;
    if (key === "⌫" || key === "BACKSPACE") { setCurrent(c => c.slice(0, -1)); return; }
    if (key === "ENTER") {
      if (current.length < word.length) { setShake(true); setTimeout(() => setShake(false), 500); showMsg("Not enough letters!"); return; }
      const results = scoreGuess(current, word);
      const row: GuessRow = { letters: current.split(""), results };
      setGuesses(g => [...g, row]);
      const newKeys = { ...keyStates };
      current.split("").forEach((ch, i) => {
        const r = results[i];
        if (r === "correct") newKeys[ch] = "correct";
        else if (r === "present" && newKeys[ch] !== "correct") newKeys[ch] = "present";
        else if (!newKeys[ch]) newKeys[ch] = "absent";
      });
      setKeyStates(newKeys);
      setCurrent("");
      if (results.every(r => r === "correct")) {
        const bonus = Math.max(0, (MAX_GUESSES - guesses.length - 1) * 20);
        const earned = 100 + bonus - (hintUsed ? 5 : 0);
        setScore(s => s + earned); setWins(w => w + 1); setStreak(s => s + 1); setGameWon(true);
        showMsg(`🎉 ${["Genius!","Amazing!","Excellent!","Great!","Good!","Phew!"][guesses.length]}  +${earned} pts`);
      } else if (guesses.length + 1 >= MAX_GUESSES) {
        setStreak(0); setGameLost(true); showMsg(`The word was: ${word}`);
      }
      return;
    }
    if (/^[A-Z]$/i.test(key) && current.length < word.length) setCurrent(c => c + key.toUpperCase());
  }, [gameWon, gameLost, current, word, guesses, keyStates, hintUsed]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const k = e.key.toUpperCase();
      if (k === "BACKSPACE" || k === "ENTER" || /^[A-Z]$/.test(k)) pressKey(k);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pressKey]);

  const wordLen = word.length || 5;

  const renderBoard = () => {
    const rows = [];
    for (let r = 0; r < MAX_GUESSES; r++) {
      const cells = [];
      for (let c = 0; c < wordLen; c++) {
        let letter = "", state: CellState = "empty";
        if (r < guesses.length) { letter = guesses[r].letters[c] || ""; state = guesses[r].results[c]; }
        else if (r === guesses.length && !gameWon && !gameLost) { letter = current[c] || ""; state = letter ? "filled" : "empty"; }
        cells.push(
          <div key={c} className={`flex items-center justify-center border-2 rounded-lg text-xl font-black uppercase transition-all duration-100 ${cellBg[state]} ${state === "filled" ? "scale-105" : ""}`}
            style={{ width: wordLen > 5 ? 44 : 52, height: wordLen > 5 ? 44 : 52 }}>
            {letter}
          </div>
        );
      }
      rows.push(
        <div key={r} className={`flex gap-1.5 ${r === guesses.length && shake ? "animate-bounce" : ""}`}>{cells}</div>
      );
    }
    return rows;
  };

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[["Score", score], ["Wins", wins], ["Streak", streak]].map(([l, v]) => (
          <div key={l} className="bg-gray-50 rounded-xl p-3 text-center border border-gray-100">
            <p className="text-2xl font-bold text-gray-900">{v}</p>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{l}</p>
          </div>
        ))}
      </div>

      {/* Category */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {(["all","math","science","english"] as Category[]).map(cat => (
          <button key={cat} onClick={() => { setCategory(cat); newGame(cat); }}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all capitalize
              ${category === cat ? "bg-teal-600 text-white border-teal-700" : "border-gray-200 text-gray-500 hover:border-teal-300"}`}>
            {cat === "all" ? "🌐 All" : cat === "math" ? "🧮 Math" : cat === "science" ? "🔬 Science" : "📝 English"}
          </button>
        ))}
        <button onClick={() => newGame()} className="px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 text-gray-500 hover:border-gray-400 whitespace-nowrap">
          New Word ↻
        </button>
      </div>

      {/* Board */}
      <div className="flex flex-col gap-1.5 items-center">{renderBoard()}</div>

      {/* Message */}
      {message && (
        <div className="text-center py-2 px-4 bg-gray-900 text-white rounded-full text-sm font-semibold">{message}</div>
      )}

      {/* Hint */}
      <div className="text-center">
        <button onClick={() => { setHintShown(true); setHintUsed(true); setScore(s => Math.max(0, s - 5)); }}
          className="text-xs border border-gray-200 px-4 py-1.5 rounded-full text-gray-500 hover:border-gray-400 font-semibold">
          💡 Hint (-5 pts)
        </button>
        {hintShown && <p className="text-xs text-gray-500 mt-2 italic">{hint}</p>}
      </div>

      {/* New game after result */}
      {(gameWon || gameLost) && (
        <button onClick={() => newGame()} className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold text-base"
          style={{ boxShadow: "0 4px 0 #0F6E56" }}>
          {gameWon ? "🎉 Next Word →" : `😢 Try Again (${word})`}
        </button>
      )}

      {/* Keyboard */}
      <div className="flex flex-col gap-1.5 items-center">
        {KEYBOARD_ROWS.map((row, ri) => (
          <div key={ri} className="flex gap-1">
            {row.map(key => (
              <button key={key} onClick={() => pressKey(key)}
                className={`${key.length > 1 ? "px-3 text-xs" : "w-8"} h-12 rounded-lg font-bold text-sm transition-all active:translate-y-0.5 ${keyBg[keyStates[key] || "unused"]}`}
                style={{ boxShadow: "0 3px 0 rgba(0,0,0,0.15)", minWidth: key.length > 1 ? 48 : 32 }}>
                {key}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}