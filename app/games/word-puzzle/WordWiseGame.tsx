"use client";
import { useState, useEffect, useCallback, useRef } from "react";

type Category = "all" | "math" | "science" | "english";
type CellState = "empty" | "filled" | "correct" | "present" | "absent" | "revealed";
type KeyState = "correct" | "present" | "absent" | "unused";
type Difficulty = "beginner" | "easy" | "medium" | "hard" | "expert";

interface WordEntry {
  w: string;
  h: string;          // hint
  meaning: string;    // definition shown after win
  sentence: string;   // example sentence shown after win
  cat: string;        // category label
}

const WORDS: Record<string, WordEntry[]> = {
  math: [
    { w:"ANGLE", h:"Found in triangles and geometry", meaning:"The space between two lines that meet at a point, measured in degrees.", sentence:"The angle between the two walls of the room was exactly 90 degrees.", cat:"Mathematics" },
    { w:"PRIME", h:"A number with only 2 factors", meaning:"A number greater than 1 that can only be divided by 1 and itself.", sentence:"The number 7 is a prime number because nothing divides it except 1 and 7.", cat:"Mathematics" },
    { w:"RATIO", h:"A comparison of two quantities", meaning:"A relationship between two numbers showing how many times one value contains the other.", sentence:"The ratio of boys to girls in the class was 3 to 2.", cat:"Mathematics" },
    { w:"GRAPH", h:"Used to visualize data or functions", meaning:"A diagram showing the relationship between variable quantities.", sentence:"We drew a graph to show how the temperature changed over the week.", cat:"Mathematics" },
    { w:"DIGIT", h:"A single number from 0 to 9", meaning:"Any of the numerals from 0 to 9, especially when forming part of a number.", sentence:"The number 347 has three digits.", cat:"Mathematics" },
    { w:"SLOPE", h:"The steepness of a line on a graph", meaning:"A measure of the steepness of a line, calculated as rise divided by run.", sentence:"The slope of the hill made it difficult to ride a bicycle up it.", cat:"Mathematics" },
    { w:"POWER", h:"Exponent or index in mathematics", meaning:"The number of times a number is multiplied by itself, shown as an exponent.", sentence:"Two to the power of three equals eight.", cat:"Mathematics" },
    { w:"CHORD", h:"A line segment inside a circle", meaning:"A straight line joining two points on a circle's circumference.", sentence:"We drew a chord across the circle from one side to the other.", cat:"Mathematics" },
    { w:"PROOF", h:"A logical argument in mathematics", meaning:"A logical argument that establishes the truth of a mathematical statement.", sentence:"The mathematician spent years working on a proof for the famous theorem.", cat:"Mathematics" },
    { w:"CUBIC", h:"Related to the power of three", meaning:"Having three dimensions, or raised to the third power.", sentence:"The volume of a cube is found using the cubic formula: side × side × side.", cat:"Mathematics" },
    { w:"WHOLE", h:"A type of number — not a fraction", meaning:"A complete number without fractions or decimals, such as 1, 2, 3.", sentence:"We only use whole numbers when counting people — you can't have half a person!", cat:"Mathematics" },
    { w:"SCALE", h:"Used for measuring or proportion", meaning:"A ratio that compares a measurement on a model to the actual measurement.", sentence:"The map had a scale of 1 cm to 10 km.", cat:"Mathematics" },
  ],
  science: [
    { w:"CELLS", h:"The basic unit of all living things", meaning:"The smallest structural and functional units of an organism.", sentence:"All living things are made of cells — some creatures have just one!", cat:"Science" },
    { w:"ATOMS", h:"The smallest unit of an element", meaning:"The smallest particle of a chemical element that retains its properties.", sentence:"Everything around you — air, water, your body — is made of atoms.", cat:"Science" },
    { w:"ORBIT", h:"The path of a planet around a star", meaning:"The curved path of a celestial object around a star, planet or moon.", sentence:"The Earth takes 365 days to complete one orbit around the Sun.", cat:"Science" },
    { w:"FORCE", h:"A push or pull on an object", meaning:"An interaction that changes the motion or shape of an object.", sentence:"Gravity is a force that pulls objects toward the centre of the Earth.", cat:"Science" },
    { w:"OZONE", h:"A gas layer protecting Earth", meaning:"A form of oxygen that forms a layer in the atmosphere protecting Earth from UV radiation.", sentence:"The ozone layer acts like a sunscreen for the entire planet.", cat:"Science" },
    { w:"LIGHT", h:"Electromagnetic radiation we can see", meaning:"Electromagnetic radiation that is visible to the human eye.", sentence:"Light from the Sun takes about 8 minutes to reach the Earth.", cat:"Science" },
    { w:"SOLID", h:"A state of matter with fixed shape", meaning:"A state of matter where particles are tightly packed with a definite shape.", sentence:"Ice is a solid form of water that melts when heated.", cat:"Science" },
    { w:"NERVE", h:"Carries signals in your body", meaning:"A bundle of fibres that transmits electrical signals between the brain and body.", sentence:"When you touch something hot, a nerve sends a signal to your brain instantly.", cat:"Science" },
    { w:"VIRUS", h:"A microscopic pathogen", meaning:"A tiny infectious agent that can only replicate inside living cells of an organism.", sentence:"The flu is caused by a virus that spreads through sneezing and coughing.", cat:"Science" },
    { w:"SPINE", h:"The backbone of vertebrates", meaning:"The column of vertebrae extending from the skull to the pelvis, protecting the spinal cord.", sentence:"The spine keeps you upright and protects the nerves running through your back.", cat:"Science" },
    { w:"TRAIT", h:"A characteristic passed by genetics", meaning:"A genetically determined characteristic inherited from parents.", sentence:"Eye colour is a trait that children inherit from their parents.", cat:"Science" },
    { w:"WATER", h:"H₂O — essential for all life", meaning:"A transparent liquid essential for all known life, made of hydrogen and oxygen.", sentence:"Without water, no living organism on Earth could survive for long.", cat:"Science" },
  ],
  english: [
    { w:"PROSE", h:"Ordinary written language", meaning:"Written or spoken language in its ordinary form without metrical structure.", sentence:"The author chose to write in prose rather than poetry to tell her story.", cat:"English" },
    { w:"TENSE", h:"Past, present or future in grammar", meaning:"A grammatical category that locates a situation in time.", sentence:"We use the past tense when we talk about things that already happened.", cat:"English" },
    { w:"IRONY", h:"Meaning the opposite of what you say", meaning:"A form of expression where the intended meaning is opposite to the literal meaning.", sentence:"It was irony that the fire station burned down first in the disaster.", cat:"English" },
    { w:"RHYME", h:"Matching end sounds in poetry", meaning:"Correspondence of sound between words, especially at the end of lines of poetry.", sentence:"The poem had a perfect rhyme between 'moon' and 'June'.", cat:"English" },
    { w:"GENRE", h:"A category of literature or writing", meaning:"A style or category of art, music, or literature with a particular form or content.", sentence:"Mystery is her favourite genre of novel to read on weekends.", cat:"English" },
    { w:"THEME", h:"The central idea of a story", meaning:"The central topic, subject, or message within a narrative.", sentence:"The theme of the novel was the importance of friendship and loyalty.", cat:"English" },
    { w:"COMMA", h:"A punctuation mark used to separate", meaning:"A punctuation mark indicating a pause between parts of a sentence.", sentence:"You need a comma between items in a list, like apples, oranges, and grapes.", cat:"English" },
    { w:"DRAFT", h:"An early version of a piece of writing", meaning:"A preliminary version of a piece of writing that will be revised.", sentence:"She wrote three drafts of the essay before she was happy with it.", cat:"English" },
    { w:"FABLE", h:"A story with a moral, often with animals", meaning:"A short story with a moral, typically featuring animals as characters.", sentence:"The fable of the tortoise and the hare teaches us that slow and steady wins the race.", cat:"English" },
    { w:"ESSAY", h:"A short piece of writing on a topic", meaning:"A short piece of writing on a particular subject.", sentence:"The teacher asked us to write an essay about our favourite place in the world.", cat:"English" },
    { w:"NOVEL", h:"A long work of fiction", meaning:"A long narrative work of fiction with characters and a plot.", sentence:"It took the author three years to write her debut novel.", cat:"English" },
    { w:"VERSE", h:"A line or stanza of poetry", meaning:"Writing arranged with a metrical rhythm, or a single line of poetry.", sentence:"The first verse of the poem described a beautiful summer morning.", cat:"English" },
  ],
};

const MAX_GUESSES = 6;
const KEYBOARD_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","⌫"],
];

// How many letters to reveal based on difficulty
const REVEAL_COUNT: Record<Difficulty, number> = {
  beginner: 3, easy: 2, medium: 1, hard: 0, expert: 0,
};

const DIFF_LABELS: Record<Difficulty, { label: string; color: string; desc: string }> = {
  beginner: { label: "Beginner",  color: "bg-green-100 text-green-700",  desc: "3 letters revealed" },
  easy:     { label: "Easy",      color: "bg-teal-100 text-teal-700",    desc: "2 letters revealed" },
  medium:   { label: "Medium",    color: "bg-amber-100 text-amber-700",  desc: "1 letter revealed"  },
  hard:     { label: "Hard",      color: "bg-orange-100 text-orange-700",desc: "No letters revealed" },
  expert:   { label: "Expert",    color: "bg-red-100 text-red-700",      desc: "No hints allowed!" },
};

// Streak thresholds for difficulty progression
const STREAK_THRESHOLDS: [number, Difficulty][] = [
  [0, "beginner"], [3, "easy"], [6, "medium"], [10, "hard"], [15, "expert"],
];

function getDifficulty(streak: number): Difficulty {
  let diff: Difficulty = "beginner";
  for (const [threshold, d] of STREAK_THRESHOLDS) {
    if (streak >= threshold) diff = d;
  }
  return diff;
}

function getAllWords(): WordEntry[] {
  return [...WORDS.math, ...WORDS.science, ...WORDS.english];
}

function getRevealedPositions(word: string, count: number): number[] {
  const positions: number[] = [];
  const available = Array.from({ length: word.length }, (_, i) => i);
  const shuffled = available.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function scoreGuess(guess: string, word: string): CellState[] {
  const result: CellState[] = Array(word.length).fill("absent");
  const wArr = word.split(""); const gArr = guess.split("");
  gArr.forEach((ch, i) => { if (ch === wArr[i]) { result[i] = "correct"; wArr[i] = ""; gArr[i] = ""; } });
  gArr.forEach((ch, i) => {
    if (!ch) return;
    const idx = wArr.indexOf(ch);
    if (idx !== -1) { result[i] = "present"; wArr[idx] = ""; }
  });
  return result;
}

const cellBg: Record<CellState, string> = {
  empty:    "bg-white border-gray-200 text-gray-900",
  filled:   "bg-white border-gray-600 text-gray-900 scale-105",
  correct:  "bg-teal-600 border-teal-700 text-white",
  present:  "bg-amber-500 border-amber-600 text-white",
  absent:   "bg-gray-600 border-gray-700 text-white",
  revealed: "bg-indigo-100 border-indigo-400 text-indigo-800",
};

const keyBg: Record<KeyState, string> = {
  unused:  "bg-gray-200 text-gray-800",
  correct: "bg-teal-600 text-white",
  present: "bg-amber-500 text-white",
  absent:  "bg-gray-500 text-white",
};

interface GuessRow { letters: string[]; results: CellState[]; }

// ── How to Play Modal ─────────────────────────────────────────────────────────
function HowToPlayModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl my-4" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-black text-gray-900">How to Play</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-2xl font-bold leading-none">×</button>
        </div>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          Guess the hidden <strong>education word</strong> in <strong>6 tries</strong>.
          Some letters are already revealed to help you get started!
        </p>

        {/* Color guide */}
        <div className="space-y-2.5 mb-5">
          {[
            { cls:"bg-indigo-100 border-indigo-400 text-indigo-800", label:"Revealed", desc:"Letter given to you as a clue" },
            { cls:"bg-teal-600 border-teal-700 text-white",          label:"Correct 🟩", desc:"Right letter, right position" },
            { cls:"bg-amber-500 border-amber-600 text-white",        label:"Present 🟨", desc:"Right letter, wrong position" },
            { cls:"bg-gray-600 border-gray-700 text-white",          label:"Absent ⬛",  desc:"Letter not in the word" },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3">
              <div className={`${item.cls} border-2 w-9 h-9 rounded-lg flex-shrink-0 flex items-center justify-center font-black text-sm`}>A</div>
              <div>
                <p className="font-bold text-gray-900 text-sm">{item.label}</p>
                <p className="text-gray-500 text-xs">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Difficulty progression */}
        <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-xl p-4 mb-4 border border-gray-100">
          <p className="text-xs font-bold text-gray-700 mb-2">🔥 Difficulty Progression</p>
          <div className="space-y-1.5">
            {Object.entries(DIFF_LABELS).map(([d, info]) => (
              <div key={d} className="flex items-center gap-2">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${info.color}`}>{info.label}</span>
                <span className="text-xs text-gray-500">{info.desc}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">Your difficulty rises automatically as your streak grows!</p>
        </div>

        {/* Tips */}
        <div className="bg-gray-50 rounded-xl p-4 mb-5">
          <p className="text-xs font-bold text-gray-700 mb-2">💡 Tips</p>
          <ul className="text-xs text-gray-600 space-y-1.5">
            <li>📱 <strong>Mobile:</strong> Tap the board to type with your keyboard</li>
            <li>⌨️ <strong>Desktop:</strong> Type directly — letters, Backspace, Enter</li>
            <li>🔤 <strong>On-screen:</strong> Tap the letter buttons at the bottom</li>
            <li>💡 <strong>Hint:</strong> Costs 5 pts but gives you a clue about the word</li>
            <li>📖 <strong>After winning:</strong> Learn the word meaning and example!</li>
            <li>🔥 <strong>Streak:</strong> Build your streak to unlock harder levels!</li>
          </ul>
        </div>

        <button onClick={onClose} className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold text-base"
          style={{ boxShadow: "0 4px 0 #0F6E56" }}>Let's Play! 🎮</button>
      </div>
    </div>
  );
}

// ── Word Meaning Card (shown after win) ────────────────────────────────────────
function WordMeaningCard({ entry, streak }: { entry: WordEntry; streak: number }) {
  return (
    <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-5">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-2xl">📖</span>
        <div>
          <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider">{entry.cat} Word</p>
          <p className="text-xl font-black text-gray-900 tracking-widest">{entry.w}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="bg-white rounded-xl p-3 border border-teal-100">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Meaning</p>
          <p className="text-sm text-gray-700 leading-relaxed">{entry.meaning}</p>
        </div>
        <div className="bg-white rounded-xl p-3 border border-teal-100">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Example Sentence</p>
          <p className="text-sm text-gray-600 leading-relaxed italic">"{entry.sentence}"</p>
        </div>
      </div>
      <div className="mt-3 text-center">
        <span className="text-xs text-teal-600 font-semibold">🔥 Streak: {streak} — {streak >= 15 ? "Expert level!" : streak >= 10 ? "Hard level!" : streak >= 6 ? "Medium level!" : streak >= 3 ? "Easy level!" : "Keep going to level up!"}</span>
      </div>
    </div>
  );
}

// ── Main Game ─────────────────────────────────────────────────────────────────
export default function WordWiseGame() {
  const [category, setCategory] = useState<Category>("all");
  const [currentEntry, setCurrentEntry] = useState<WordEntry | null>(null);
  const [revealedPos, setRevealedPos] = useState<number[]>([]);
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
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");
  const [shake, setShake] = useState(false);
  const [showHow, setShowHow] = useState(false);
  const hiddenInputRef = useRef<HTMLInputElement>(null);

  const word = currentEntry?.w.toUpperCase() ?? "";

  const newGame = useCallback((cat: Category = category, currentStreak: number = streak) => {
    const pool = cat === "all" ? getAllWords() : WORDS[cat] ?? getAllWords();
    const pick = pool[Math.floor(Math.random() * pool.length)];
    const diff = getDifficulty(currentStreak);
    const revealCount = diff === "expert" ? 0 : REVEAL_COUNT[diff];
    const revealed = getRevealedPositions(pick.w, revealCount);

    setCurrentEntry(pick);
    setRevealedPos(revealed);
    setDifficulty(diff);
    setGuesses([]); setCurrent(""); setKeyStates({});
    setMessage(""); setHintShown(false); setHintUsed(false);
    setGameWon(false); setGameLost(false);

    // Pre-fill key states for revealed letters
    const newKeys: Record<string, KeyState> = {};
    revealed.forEach(i => { newKeys[pick.w[i]] = "correct"; });
    setKeyStates(newKeys);
  }, [category, streak]);

  useEffect(() => { newGame("all", 0); setShowHow(true); }, []);

  const showMsg = (msg: string) => { setMessage(msg); setTimeout(() => setMessage(""), 2500); };

  const pressKey = useCallback((key: string) => {
    if (!currentEntry || gameWon || gameLost) return;
    if (key === "⌫" || key === "BACKSPACE") { setCurrent(c => c.slice(0, -1)); return; }
    if (key === "ENTER") {
      if (current.length < word.length) {
        setShake(true); setTimeout(() => setShake(false), 500);
        showMsg(`Word must be ${word.length} letters!`); return;
      }
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
        const diffBonus = { beginner:0, easy:10, medium:20, hard:40, expert:60 }[difficulty];
        const earned = 100 + bonus + diffBonus - (hintUsed ? 5 : 0);
        const newStreak = streak + 1;
        setScore(s => s + earned); setWins(w => w + 1); setStreak(newStreak); setGameWon(true);
        const newDiff = getDifficulty(newStreak);
        if (newDiff !== difficulty) showMsg(`🎉 Level Up! Now ${DIFF_LABELS[newDiff].label}!`);
        else showMsg(`🎉 ${["Genius!","Amazing!","Excellent!","Great!","Good!","Phew!"][guesses.length]} +${earned} pts`);
      } else if (guesses.length + 1 >= MAX_GUESSES) {
        setStreak(0); setGameLost(true); setDifficulty("beginner");
        showMsg(`The word was: ${word}`);
      }
      return;
    }
    if (/^[A-Za-z]$/.test(key) && current.length < word.length) {
      setCurrent(c => c + key.toUpperCase());
    }
  }, [currentEntry, gameWon, gameLost, current, word, guesses, keyStates, hintUsed, difficulty, streak]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const k = e.key;
      if (k === "Backspace") pressKey("BACKSPACE");
      else if (k === "Enter") pressKey("ENTER");
      else if (/^[A-Za-z]$/.test(k)) pressKey(k.toUpperCase());
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [pressKey]);

  const focusInput = () => hiddenInputRef.current?.focus();
  const wordLen = word.length || 5;
  const diffInfo = DIFF_LABELS[difficulty];

  const renderBoard = () => {
    const rows = [];
    for (let r = 0; r < MAX_GUESSES; r++) {
      const cells = [];
      for (let c = 0; c < wordLen; c++) {
        let letter = "", state: CellState = "empty";
        const isRevealed = revealedPos.includes(c) && r === 0 && guesses.length === 0;

        if (r < guesses.length) {
          letter = guesses[r].letters[c] || "";
          state = guesses[r].results[c];
          // If this position was revealed and it's correct, keep correct state
        } else if (r === guesses.length && !gameWon && !gameLost) {
          letter = current[c] || "";
          state = letter ? "filled" : "empty";
        }

        // Show revealed letters on empty rows after first guess
        if (!letter && revealedPos.includes(c) && !gameWon && !gameLost && r >= guesses.length && r > 0) {
          letter = word[c];
          state = "revealed";
        }
        // Show revealed on board row 0 always
        if (r === 0 && guesses.length === 0 && revealedPos.includes(c)) {
          letter = word[c];
          state = "revealed";
        }

        cells.push(
          <div key={c}
            className={`flex items-center justify-center border-2 rounded-xl font-black uppercase transition-all duration-150 select-none ${cellBg[state]}`}
            style={{ width: wordLen > 5 ? 46 : 52, height: wordLen > 5 ? 46 : 52, fontSize: wordLen > 5 ? 18 : 22 }}>
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
    <>
      <input ref={hiddenInputRef} className="sr-only" onChange={() => {}}
        autoCapitalize="off" autoCorrect="off" autoComplete="off" spellCheck={false} aria-hidden="true" />

      {showHow && <HowToPlayModal onClose={() => setShowHow(false)} />}

      <div className="space-y-3">
        {/* Stats + How to Play */}
        <div className="flex gap-3 items-stretch">
          <div className="grid grid-cols-3 gap-2 flex-1">
            {[["Score",score],["Wins",wins],["Streak",streak]].map(([l,v])=>(
              <div key={l} className="bg-gray-50 rounded-xl p-2 text-center border border-gray-100">
                <p className="text-lg font-bold text-gray-900">{v}</p>
                <p className="text-xs text-gray-500">{l}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setShowHow(true)}
            className="bg-teal-50 border border-teal-100 text-teal-700 rounded-xl px-3 py-2 text-xs font-bold hover:bg-teal-100 transition-colors flex flex-col items-center justify-center gap-1">
            <span>❓</span><span className="whitespace-nowrap">How to Play</span>
          </button>
        </div>

        {/* Difficulty badge + category */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${diffInfo.color}`}>
              {diffInfo.label}
            </span>
            {currentEntry && (
              <span className="text-xs text-gray-500 font-medium">
                {currentEntry.cat} · {wordLen} letters
              </span>
            )}
          </div>
          {revealedPos.length > 0 && (
            <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">
              🔵 {revealedPos.length} letter{revealedPos.length > 1 ? "s" : ""} revealed
            </span>
          )}
        </div>

        {/* Category selector */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {(["all","math","science","english"] as Category[]).map(cat => (
            <button key={cat} onClick={() => { setCategory(cat); newGame(cat, streak); }}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all
                ${category===cat?"bg-teal-600 text-white border-teal-700":"border-gray-200 text-gray-500 hover:border-teal-300"}`}>
              {cat==="all"?"🌐 All":cat==="math"?"🧮 Math":cat==="science"?"🔬 Science":"📝 English"}
            </button>
          ))}
          <button onClick={() => newGame(category, streak)} className="px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 text-gray-500 hover:border-gray-400 whitespace-nowrap">
            ↻ New Word
          </button>
        </div>

        {/* Mobile tip */}
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-xl px-3 py-2 text-xs text-blue-600">
          <span>📱</span>
          <span><strong>Mobile:</strong> Tap the board to type · <strong>Desktop:</strong> Type directly</span>
        </div>

        {/* Board */}
        <div className="flex flex-col gap-1.5 items-center cursor-pointer" onClick={focusInput}>
          {renderBoard()}
        </div>

        {/* Message */}
        {message && (
          <div className="text-center py-2 px-4 bg-gray-900 text-white rounded-full text-sm font-semibold">
            {message}
          </div>
        )}

        {/* Hint */}
        {!gameWon && !gameLost && difficulty !== "expert" && (
          <div className="text-center">
            <button onClick={() => { setHintShown(true); if (!hintUsed) { setHintUsed(true); setScore(s => Math.max(0, s - 5)); } }}
              className="text-xs border border-amber-200 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full font-semibold hover:bg-amber-100 transition-colors">
              💡 Hint {hintUsed ? "(used)" : "(-5 pts)"}
            </button>
            {hintShown && currentEntry && (
              <p className="text-xs text-gray-500 mt-2 italic bg-gray-50 rounded-xl py-2 px-4">{currentEntry.h}</p>
            )}
          </div>
        )}

        {difficulty === "expert" && !gameWon && !gameLost && (
          <p className="text-center text-xs text-red-500 font-semibold">💀 Expert Mode — No hints allowed!</p>
        )}

        {/* Word meaning card after win */}
        {gameWon && currentEntry && (
          <WordMeaningCard entry={currentEntry} streak={streak} />
        )}

        {/* Result button */}
        {(gameWon || gameLost) && (
          <button onClick={() => newGame(category, gameWon ? streak : 0)}
            className={`w-full py-3 rounded-xl font-bold text-base text-white transition-all ${gameWon ? "bg-teal-600" : "bg-gray-700"}`}
            style={{ boxShadow: gameWon ? "0 4px 0 #0F6E56" : "0 4px 0 #333" }}>
            {gameWon ? `🎉 Next Word →  (${DIFF_LABELS[getDifficulty(streak)].label})` : `😢 Try Again — Word was: ${word}`}
          </button>
        )}

        {/* Keyboard */}
        <div className="flex flex-col gap-1.5 items-center">
          {KEYBOARD_ROWS.map((row, ri) => (
            <div key={ri} className="flex gap-1">
              {row.map(key => (
                <button key={key} onClick={() => pressKey(key)}
                  className={`${key.length > 1 ? "px-2 text-xs" : "w-8"} h-11 rounded-lg font-bold text-sm transition-all active:translate-y-0.5 select-none ${keyBg[keyStates[key] || "unused"]}`}
                  style={{ boxShadow: "0 3px 0 rgba(0,0,0,0.15)", minWidth: key.length > 1 ? 48 : 32 }}>
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Level up indicator */}
        {streak > 0 && (
          <div className="text-center text-xs text-gray-400">
            {streak >= 15 ? "💀 Expert — 0 letters revealed" :
             streak >= 10 ? `🟠 Hard — ${15 - streak} wins to Expert` :
             streak >= 6  ? `🟡 Medium — ${10 - streak} wins to Hard` :
             streak >= 3  ? `🟢 Easy — ${6 - streak} wins to Medium` :
             `🌱 Beginner — ${3 - streak} wins to Easy`}
          </div>
        )}
      </div>
    </>
  );
}