"use client";
import { useState, useEffect, useCallback, useRef } from "react";

type Category = "all" | "math" | "science" | "english";
type CellState = "correct" | "present" | "absent" | "revealed";
type KeyState  = "correct" | "present" | "absent" | "unused";
type Difficulty = "beginner" | "easy" | "medium" | "hard" | "expert";

interface WordEntry {
  w: string; h: string; meaning: string; sentence: string; cat: string;
}
interface GuessRow { letters: string[]; results: CellState[]; }

// ── Word Bank (4, 5, 6 letters) ───────────────────────────────────────────────
const WORDS: Record<string, WordEntry[]> = {
  math: [
    { w:"PLUS",   h:"Add two numbers",                  meaning:"The operation of addition.",                                          sentence:"Three plus four equals seven.",                           cat:"Mathematics" },
    { w:"AREA",   h:"Space inside a 2D shape",           meaning:"The amount of space inside a flat shape.",                            sentence:"The area of the square is 16 cm².",                      cat:"Mathematics" },
    { w:"AXIS",   h:"A reference line on a graph",       meaning:"A fixed reference line for measurement on a graph.",                  sentence:"The x-axis runs horizontally on the graph.",             cat:"Mathematics" },
    { w:"CUBE",   h:"A 3D shape with 6 equal faces",     meaning:"A three-dimensional shape with six equal square faces.",              sentence:"A dice is a perfect cube.",                              cat:"Mathematics" },
    { w:"DIGIT",  h:"A single number 0–9",               meaning:"Any numeral from 0 to 9.",                                            sentence:"The number 347 has three digits.",                       cat:"Mathematics" },
    { w:"ANGLE",  h:"Found in triangles",                meaning:"The space between two lines that meet at a point.",                   sentence:"A right angle measures exactly 90 degrees.",             cat:"Mathematics" },
    { w:"PRIME",  h:"Divisible only by 1 and itself",    meaning:"A number greater than 1 with exactly two factors.",                   sentence:"The number 7 is prime because only 1 and 7 divide it.", cat:"Mathematics" },
    { w:"RATIO",  h:"A comparison of two quantities",    meaning:"A relationship between two numbers showing how many times one contains the other.", sentence:"The ratio of boys to girls was 3 to 2.",  cat:"Mathematics" },
    { w:"GRAPH",  h:"Visual display of data",            meaning:"A diagram showing the relationship between variable quantities.",     sentence:"We drew a graph to show how temperature changed.",       cat:"Mathematics" },
    { w:"SLOPE",  h:"Steepness of a line",               meaning:"A measure of steepness, calculated as rise divided by run.",          sentence:"The slope of the hill made cycling difficult.",          cat:"Mathematics" },
    { w:"CHORD",  h:"Line inside a circle",              meaning:"A straight line joining two points on a circle.",                     sentence:"We drew a chord across the centre of the circle.",       cat:"Mathematics" },
    { w:"PROOF",  h:"A logical argument",                meaning:"A logical argument establishing the truth of a statement.",           sentence:"The mathematician spent years on the proof.",            cat:"Mathematics" },
    { w:"FACTOR", h:"A number that divides evenly",      meaning:"A number that divides another number without a remainder.",           sentence:"The factors of 12 are 1, 2, 3, 4, 6, and 12.",          cat:"Mathematics" },
    { w:"VECTOR", h:"Has magnitude and direction",       meaning:"A quantity that has both magnitude and direction.",                   sentence:"Velocity is a vector because it includes direction.",    cat:"Mathematics" },
    { w:"MATRIX", h:"A rectangular array of numbers",   meaning:"A rectangular arrangement of numbers in rows and columns.",           sentence:"We multiplied the two matrices to solve the system.",    cat:"Mathematics" },
  ],
  science: [
    { w:"GENE",   h:"Unit of heredity",                  meaning:"A unit of heredity that carries instructions for a trait.",           sentence:"Eye colour is controlled by genes from both parents.",   cat:"Science" },
    { w:"ATOM",   h:"Smallest unit of an element",       meaning:"The smallest particle of a chemical element.",                        sentence:"Everything around you is made of atoms.",                cat:"Science" },
    { w:"CELL",   h:"Basic unit of life",                meaning:"The smallest structural and functional unit of an organism.",         sentence:"All living things are made of at least one cell.",       cat:"Science" },
    { w:"MASS",   h:"Amount of matter in an object",     meaning:"The quantity of matter in an object.",                               sentence:"The mass of the rock is 5 kilograms.",                   cat:"Science" },
    { w:"CELLS",  h:"Plural — basic units of life",      meaning:"The smallest structural and functional units of organisms.",          sentence:"The microscope revealed thousands of cells in the sample.", cat:"Science" },
    { w:"ATOMS",  h:"Smallest units of elements",        meaning:"The smallest particles of chemical elements.",                        sentence:"Water molecules are made of hydrogen and oxygen atoms.",  cat:"Science" },
    { w:"ORBIT",  h:"Path around a star or planet",      meaning:"The curved path of a body around another in space.",                  sentence:"Earth takes 365 days to complete one orbit of the Sun.", cat:"Science" },
    { w:"FORCE",  h:"Push or pull",                      meaning:"An interaction that changes the motion of an object.",               sentence:"Gravity is a force that pulls objects downward.",        cat:"Science" },
    { w:"LIGHT",  h:"Visible electromagnetic radiation", meaning:"Electromagnetic radiation visible to the human eye.",                 sentence:"Light from the Sun takes 8 minutes to reach Earth.",    cat:"Science" },
    { w:"VIRUS",  h:"Microscopic pathogen",              meaning:"A tiny infectious agent that replicates inside living cells.",        sentence:"The flu is caused by a virus.",                          cat:"Science" },
    { w:"NEURON", h:"Brain nerve cell",                  meaning:"A specialised cell that transmits nerve impulses in the body.",       sentence:"Neurons carry signals from the brain to your muscles.",  cat:"Science" },
    { w:"PLASMA", h:"Fourth state of matter",            meaning:"A high-energy state of matter where electrons are free from atoms.",  sentence:"The Sun is made of plasma, not gas or liquid.",          cat:"Science" },
    { w:"OXYGEN", h:"Gas essential for breathing",       meaning:"A chemical element essential for respiration in most living things.", sentence:"We breathe in oxygen and breathe out carbon dioxide.",  cat:"Science" },
  ],
  english: [
    { w:"EPIC",   h:"A long heroic poem or story",       meaning:"A long poem or story celebrating heroic deeds.",                      sentence:"Homer's Odyssey is one of the greatest epic poems.",     cat:"English" },
    { w:"PLOT",   h:"The events in a story",             meaning:"The sequence of events that make up a story.",                        sentence:"The plot of the novel had many unexpected twists.",      cat:"English" },
    { w:"TONE",   h:"Attitude of the writer",            meaning:"The attitude a writer expresses toward a subject.",                   sentence:"The tone of the letter was formal and respectful.",      cat:"English" },
    { w:"PROSE",  h:"Ordinary written language",         meaning:"Written or spoken language without metrical structure.",              sentence:"She chose to write in prose rather than poetry.",         cat:"English" },
    { w:"TENSE",  h:"Past, present or future",           meaning:"A grammatical category that locates a situation in time.",            sentence:"We use the past tense for things that already happened.", cat:"English" },
    { w:"IRONY",  h:"Saying the opposite of what you mean", meaning:"Expression where the intended meaning is opposite to literal.",   sentence:"It was irony that the fire station burned down first.",  cat:"English" },
    { w:"RHYME",  h:"Matching sounds in poetry",         meaning:"Correspondence of sound between words.",                              sentence:"The poem had a perfect rhyme between 'moon' and 'June'.", cat:"English" },
    { w:"GENRE",  h:"Category of writing",               meaning:"A style or category of literature with particular characteristics.",  sentence:"Mystery is her favourite genre to read.",                cat:"English" },
    { w:"THEME",  h:"Central idea of a story",           meaning:"The central topic or message within a narrative.",                    sentence:"The theme of the novel was friendship and loyalty.",     cat:"English" },
    { w:"SIMILE", h:"Comparison using like or as",       meaning:"A figure of speech comparing two things using 'like' or 'as'.",       sentence:"He ran like the wind during the race.",                  cat:"English" },
    { w:"FABLE",  h:"Story with a moral lesson",         meaning:"A short story with a moral, often with animal characters.",           sentence:"The fable of the tortoise and hare teaches persistence.", cat:"English" },
    { w:"SATIRE", h:"Using humour to criticise",         meaning:"The use of humour or irony to expose and criticise human foolishness.", sentence:"The novel was a satire mocking the political system.", cat:"English" },
  ],
};

const MAX_GUESSES = 6;
const KEYBOARD_ROWS = [
  ["Q","W","E","R","T","Y","U","I","O","P"],
  ["A","S","D","F","G","H","J","K","L"],
  ["ENTER","Z","X","C","V","B","N","M","⌫"],
];

const REVEAL_COUNT: Record<Difficulty,number> = { beginner:3, easy:2, medium:1, hard:0, expert:0 };
const DIFF_INFO: Record<Difficulty,{label:string;color:string;desc:string}> = {
  beginner: { label:"Beginner", color:"bg-green-100 text-green-700",   desc:"3 letters revealed" },
  easy:     { label:"Easy",     color:"bg-teal-100 text-teal-700",     desc:"2 letters revealed" },
  medium:   { label:"Medium",   color:"bg-amber-100 text-amber-700",   desc:"1 letter revealed"  },
  hard:     { label:"Hard",     color:"bg-orange-100 text-orange-700", desc:"No letters revealed" },
  expert:   { label:"Expert",   color:"bg-red-100 text-red-700",       desc:"No hints allowed!"  },
};
const STREAK_LEVELS: [number,Difficulty][] = [[0,"beginner"],[3,"easy"],[6,"medium"],[10,"hard"],[15,"expert"]];

function getDiff(streak:number):Difficulty {
  let d:Difficulty="beginner";
  for(const [t,v] of STREAK_LEVELS) if(streak>=t) d=v;
  return d;
}
function getAllWords():WordEntry[]{ return [...WORDS.math,...WORDS.science,...WORDS.english]; }
function getRndPos(len:number,count:number):number[]{
  return [...Array(len).keys()].sort(()=>Math.random()-0.5).slice(0,count);
}
function scoreGuess(guess:string,word:string):CellState[]{
  const res:CellState[]=Array(word.length).fill("absent");
  const wa=word.split(""), ga=guess.split("");
  ga.forEach((c,i)=>{ if(c===wa[i]){res[i]="correct";wa[i]="";ga[i]="";} });
  ga.forEach((c,i)=>{ if(!c)return; const x=wa.indexOf(c); if(x!==-1){res[i]="present";wa[x]="";} });
  return res;
}

const cellStyle:Record<CellState,string>={
  correct: "bg-teal-600 border-teal-700 text-white",
  present: "bg-amber-500 border-amber-600 text-white",
  absent:  "bg-gray-600 border-gray-700 text-white",
  revealed:"bg-indigo-100 border-indigo-400 text-indigo-800",
};
const keyStyle:Record<KeyState,string>={
  unused:"bg-gray-200 text-gray-800", correct:"bg-teal-600 text-white",
  present:"bg-amber-500 text-white",  absent:"bg-gray-500 text-white",
};

// ── How to Play Modal ─────────────────────────────────────────────────────────
function HowToPlay({onClose}:{onClose:()=>void}){
  return(
    <div className="fixed inset-0 bg-black/60 z-50 flex items-end sm:items-center justify-center" onClick={onClose}>
      <div
        className="bg-white w-full sm:max-w-sm sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col"
        style={{ maxHeight: "90vh" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Fixed header */}
        <div className="flex justify-between items-center px-5 pt-5 pb-3 border-b border-gray-100 flex-shrink-0">
          <h2 className="text-lg font-black text-gray-900">How to Play</h2>
          <button onClick={onClose} className="text-gray-400 text-2xl font-bold leading-none w-8 h-8 flex items-center justify-center hover:text-gray-600">×</button>
        </div>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 px-5 py-4 space-y-4">
          <p className="text-gray-600 text-sm leading-relaxed">
            Guess the hidden <strong>education word</strong> in <strong>up to 6 tries</strong>.
            Words can be <strong>4, 5 or 6 letters</strong> long. Some letters are revealed as clues!
          </p>

          {/* Color guide */}
          <div className="space-y-2">
            {[
              {cls:"bg-indigo-100 border-indigo-400 text-indigo-800", label:"🔵 Revealed", desc:"Given to you as a free clue"},
              {cls:"bg-teal-600 border-teal-700 text-white",           label:"🟩 Correct",  desc:"Right letter, right position"},
              {cls:"bg-amber-500 border-amber-600 text-white",         label:"🟨 Present",  desc:"Right letter, wrong position"},
              {cls:"bg-gray-600 border-gray-700 text-white",           label:"⬛ Absent",   desc:"Letter not in the word"},
            ].map(x=>(
              <div key={x.label} className="flex items-center gap-3">
                <div className={`${x.cls} border-2 w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-black text-xs`}>A</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm">{x.label}</p>
                  <p className="text-gray-500 text-xs">{x.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Difficulty */}
          <div className="bg-gradient-to-r from-green-50 to-red-50 rounded-xl p-3 border border-gray-100">
            <p className="text-xs font-bold text-gray-700 mb-2">🔥 Difficulty Progression</p>
            <div className="space-y-1.5">
              {(Object.entries(DIFF_INFO) as [Difficulty, typeof DIFF_INFO[Difficulty]][]).map(([d, info]) => (
                <div key={d} className="flex items-center gap-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${info.color}`}>{info.label}</span>
                  <span className="text-xs text-gray-500">{info.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-2 italic">Streak rises → fewer letters revealed!</p>
          </div>

          {/* Tips */}
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-xs font-bold text-gray-700 mb-2">💡 Tips</p>
            <ul className="text-xs text-gray-600 space-y-1.5">
              <li>📱 <strong>Mobile:</strong> Tap the active row to open your keyboard</li>
              <li>⌨️ <strong>Desktop:</strong> Just start typing!</li>
              <li>📖 <strong>After winning:</strong> Learn the word meaning + example</li>
              <li>🔥 <strong>Build streak</strong> to reach Expert level!</li>
              <li>📏 <strong>Words vary:</strong> 4, 5 or 6 letters</li>
            </ul>
          </div>
        </div>

        {/* Fixed sticky button at bottom — always visible */}
        <div className="px-5 py-4 border-t border-gray-100 flex-shrink-0 bg-white sm:rounded-b-2xl">
          <button onClick={onClose} className="w-full bg-teal-600 text-white py-3 rounded-xl font-bold text-base"
            style={{ boxShadow: "0 4px 0 #0F6E56" }}>
            Let's Play! 🎮
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Guess History Row ─────────────────────────────────────────────────────────
function HistoryRow({row,wordLen}:{row:GuessRow;wordLen:number}){
  const sz = wordLen > 5 ? 36 : wordLen > 4 ? 40 : 44;
  return(
    <div className="flex gap-1.5 justify-center">
      {Array(wordLen).fill(0).map((_,i)=>(
        <div key={i} className={`flex items-center justify-center border-2 rounded-xl font-black uppercase text-white ${cellStyle[row.results[i]]}`}
          style={{width:sz,height:sz,fontSize:sz*0.45}}>
          {row.letters[i]}
        </div>
      ))}
    </div>
  );
}

// ── Active Input Row ──────────────────────────────────────────────────────────
function ActiveRow({current,word,revealedPos,shake,onClick}:{current:string;word:string;revealedPos:number[];shake:boolean;onClick:()=>void}){
  const wordLen=word.length;
  const sz = wordLen > 5 ? 44 : wordLen > 4 ? 50 : 56;
  const fs = wordLen > 5 ? 20 : wordLen > 4 ? 22 : 24;
  return(
    <div className={`flex gap-2 justify-center cursor-pointer ${shake?"animate-bounce":""}`} onClick={onClick}>
      {Array(wordLen).fill(0).map((_,i)=>{
        const isRevealed = revealedPos.includes(i) && !current[i];
        const letter = current[i] || (isRevealed ? word[i] : "");
        const hasLetter = !!current[i];
        return(
          <div key={i}
            className={`flex items-center justify-center border-2 rounded-xl font-black uppercase transition-all
              ${isRevealed?"bg-indigo-100 border-indigo-400 text-indigo-800":
                hasLetter?"bg-white border-gray-700 text-gray-900 scale-105":"bg-white border-gray-300 text-gray-900"}`}
            style={{width:sz,height:sz,fontSize:fs}}>
            {letter}
          </div>
        );
      })}
    </div>
  );
}

// ── Word Meaning Card ─────────────────────────────────────────────────────────
function MeaningCard({entry,streak}:{entry:WordEntry;streak:number}){
  return(
    <div className="bg-gradient-to-b from-teal-50 to-white border border-teal-100 rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">📖</span>
        <div>
          <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider">{entry.cat}</p>
          <p className="text-2xl font-black text-gray-900 tracking-widest">{entry.w}</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="bg-white rounded-xl p-4 border border-teal-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">📌 Meaning</p>
          <p className="text-sm text-gray-700 leading-relaxed">{entry.meaning}</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-teal-100">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">✏️ Example Sentence</p>
          <p className="text-sm text-gray-600 leading-relaxed italic">"{entry.sentence}"</p>
        </div>
      </div>
      <p className="text-center text-xs text-teal-600 font-semibold mt-3">
        🔥 Streak: {streak} · {getDiff(streak) === "expert"?"Expert Mode 💀":
          `Next level at streak ${STREAK_LEVELS.find(([t])=>t>streak)?.[0] ?? "∞"}`}
      </p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function WordWiseGame(){
  const [category,setCategory]=useState<Category>("all");
  const [entry,setEntry]=useState<WordEntry|null>(null);
  const [revealedPos,setRevealedPos]=useState<number[]>([]);
  const [guesses,setGuesses]=useState<GuessRow[]>([]);
  const [current,setCurrent]=useState("");
  const [keyStates,setKeyStates]=useState<Record<string,KeyState>>({});
  const [message,setMessage]=useState("");
  const [hintShown,setHintShown]=useState(false);
  const [hintUsed,setHintUsed]=useState(false);
  const [gameWon,setGameWon]=useState(false);
  const [gameLost,setGameLost]=useState(false);
  const [score,setScore]=useState(0);
  const [wins,setWins]=useState(0);
  const [streak,setStreak]=useState(0);
  const [difficulty,setDifficulty]=useState<Difficulty>("beginner");
  const [shake,setShake]=useState(false);
  const [showHow,setShowHow]=useState(false);
  const inputRef=useRef<HTMLInputElement>(null);

  const word=entry?.w.toUpperCase()??"";

  const newGame=useCallback((cat:Category=category,str:number=streak)=>{
    const pool=cat==="all"?getAllWords():WORDS[cat]??getAllWords();
    const pick=pool[Math.floor(Math.random()*pool.length)];
    const diff=getDiff(str);
    const revCount=diff==="expert"?0:REVEAL_COUNT[diff];
    const rev=getRndPos(pick.w.length,revCount);
    setEntry(pick); setRevealedPos(rev); setDifficulty(diff);
    setGuesses([]); setCurrent(""); setMessage("");
    setHintShown(false); setHintUsed(false); setGameWon(false); setGameLost(false);
    const ks:Record<string,KeyState>={};
    rev.forEach(i=>{ks[pick.w[i]]="correct";});
    setKeyStates(ks);
    setTimeout(()=>inputRef.current?.focus(),100);
  },[category,streak]);

  useEffect(()=>{ newGame("all",0); setShowHow(true); },[]);

  const showMsg=(msg:string)=>{setMessage(msg);setTimeout(()=>setMessage(""),2500);};

  const pressKey=useCallback((key:string)=>{
    if(!entry||gameWon||gameLost) return;
    if(key==="⌫"||key==="BACKSPACE"){setCurrent(c=>c.slice(0,-1));return;}
    if(key==="ENTER"){
      if(current.length<word.length){
        setShake(true);setTimeout(()=>setShake(false),500);
        showMsg(`Need ${word.length} letters!`);return;
      }
      const results=scoreGuess(current,word);
      const row:GuessRow={letters:current.split(""),results};
      const newGuesses=[...guesses,row];
      setGuesses(newGuesses);
      const nk={...keyStates};
      current.split("").forEach((ch,i)=>{
        const r=results[i];
        if(r==="correct") nk[ch]="correct";
        else if(r==="present"&&nk[ch]!=="correct") nk[ch]="present";
        else if(!nk[ch]) nk[ch]="absent";
      });
      setKeyStates(nk); setCurrent("");
      if(results.every(r=>r==="correct")){
        const bonus=Math.max(0,(MAX_GUESSES-newGuesses.length)*20);
        const dBonus={beginner:0,easy:10,medium:20,hard:40,expert:60}[difficulty];
        const earned=100+bonus+dBonus-(hintUsed?5:0);
        const ns=streak+1;
        setScore(s=>s+earned); setWins(w=>w+1); setStreak(ns); setGameWon(true);
        const nd=getDiff(ns);
        if(nd!==difficulty) showMsg(`🎉 Level Up! Now ${DIFF_INFO[nd].label}! +${earned} pts`);
        else showMsg(`🎉 ${["Genius!","Amazing!","Excellent!","Great!","Good!","Phew!"][newGuesses.length-1]||"Well done!"} +${earned} pts`);
      } else if(newGuesses.length>=MAX_GUESSES){
        setStreak(0); setGameLost(true); setDifficulty("beginner");
        showMsg(`The word was: ${word}`);
      }
      return;
    }
    if(/^[A-Za-z]$/.test(key)&&current.length<word.length) setCurrent(c=>c+key.toUpperCase());
  },[entry,gameWon,gameLost,current,word,guesses,keyStates,hintUsed,difficulty,streak]);

  useEffect(()=>{
    const h=(e:KeyboardEvent)=>{
      if(e.key==="Backspace") pressKey("BACKSPACE");
      else if(e.key==="Enter") pressKey("ENTER");
      else if(/^[A-Za-z]$/.test(e.key)) pressKey(e.key.toUpperCase());
    };
    window.addEventListener("keydown",h);
    return ()=>window.removeEventListener("keydown",h);
  },[pressKey]);

  const diffInfo=DIFF_INFO[difficulty];
  const attemptsLeft=MAX_GUESSES-guesses.length;

  return(
    <>
      <input ref={inputRef} className="sr-only" onChange={()=>{}}
        autoCapitalize="off" autoCorrect="off" autoComplete="off" spellCheck={false} aria-hidden="true"/>
      {showHow&&<HowToPlay onClose={()=>setShowHow(false)}/>}

      <div className="space-y-4">
        {/* Stats + How to Play */}
        <div className="flex gap-3 items-stretch">
          <div className="grid grid-cols-3 gap-2 flex-1">
            {[["Score",score],["Wins",wins],["Streak",streak]].map(([l,v])=>(
              <div key={l} className="bg-gray-50 rounded-xl p-2.5 text-center border border-gray-100">
                <p className="text-xl font-bold text-gray-900">{v}</p>
                <p className="text-xs text-gray-500">{l}</p>
              </div>
            ))}
          </div>
          <button onClick={()=>setShowHow(true)} className="bg-teal-50 border border-teal-100 text-teal-700 rounded-xl px-3 py-2 text-xs font-bold hover:bg-teal-100 flex flex-col items-center justify-center gap-1">
            <span>❓</span><span className="whitespace-nowrap">How to Play</span>
          </button>
        </div>

        {/* Difficulty + word info */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${diffInfo.color}`}>{diffInfo.label}</span>
            {entry&&<span className="text-xs text-gray-500 font-medium">{entry.cat} · {word.length} letters · {attemptsLeft} tries left</span>}
          </div>
          {revealedPos.length>0&&(
            <span className="text-xs text-indigo-600 font-semibold bg-indigo-50 px-2 py-1 rounded-full border border-indigo-100">
              🔵 {revealedPos.length} letter{revealedPos.length>1?"s":""} revealed
            </span>
          )}
        </div>

        {/* Category selector */}
        <div className="flex gap-2 overflow-x-auto pb-1">
          {(["all","math","science","english"] as Category[]).map(cat=>(
            <button key={cat} onClick={()=>{setCategory(cat);newGame(cat,streak);}}
              className={`px-3 py-1.5 rounded-full text-xs font-bold border whitespace-nowrap transition-all
                ${category===cat?"bg-teal-600 text-white border-teal-700":"border-gray-200 text-gray-500 hover:border-teal-300"}`}>
              {cat==="all"?"🌐 All":cat==="math"?"🧮 Math":cat==="science"?"🔬 Science":"📝 English"}
            </button>
          ))}
          <button onClick={()=>newGame(category,streak)} className="px-3 py-1.5 rounded-full text-xs font-bold border border-gray-200 text-gray-500 hover:border-gray-400 whitespace-nowrap">↻ New</button>
        </div>

        {/* ── ACTIVE INPUT ROW ── */}
        {!gameWon&&!gameLost&&(
          <div className="bg-white border-2 border-teal-200 rounded-2xl p-5 shadow-sm">
            <p className="text-center text-xs text-gray-400 mb-3 font-semibold">
              📱 Tap boxes to type with keyboard · ⌨️ Or type directly
            </p>
            <ActiveRow current={current} word={word} revealedPos={revealedPos} shake={shake} onClick={()=>inputRef.current?.focus()}/>
            <div className="flex justify-between items-center mt-3">
              <span className="text-xs text-gray-400">{current.length}/{word.length} letters</span>
              <button onClick={()=>pressKey("ENTER")} disabled={current.length<word.length}
                className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${current.length===word.length?"bg-teal-600 text-white hover:bg-teal-700":"bg-gray-100 text-gray-400 cursor-not-allowed"}`}
                style={current.length===word.length?{boxShadow:"0 3px 0 #0F6E56"}:{}}>
                Submit →
              </button>
            </div>
          </div>
        )}

        {/* ── PREVIOUS GUESSES ── */}
        {guesses.length>0&&(
          <div className="space-y-2">
            <p className="text-xs text-gray-400 font-semibold text-center">Previous Guesses ({guesses.length}/{MAX_GUESSES})</p>
            {[...guesses].reverse().map((g,i)=>(
              <HistoryRow key={i} row={g} wordLen={word.length}/>
            ))}
          </div>
        )}

        {/* Message */}
        {message&&(
          <div className="text-center py-2 px-4 bg-gray-900 text-white rounded-full text-sm font-semibold">
            {message}
          </div>
        )}

        {/* Hint */}
        {!gameWon&&!gameLost&&difficulty!=="expert"&&(
          <div className="text-center">
            <button onClick={()=>{setHintShown(true);if(!hintUsed){setHintUsed(true);setScore(s=>Math.max(0,s-5));}}}
              className="text-xs border border-amber-200 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full font-semibold hover:bg-amber-100 transition-colors">
              💡 Hint {hintUsed?"(used)":"(-5 pts)"}
            </button>
            {hintShown&&entry&&<p className="text-xs text-gray-500 mt-2 italic bg-gray-50 rounded-xl py-2 px-4">{entry.h}</p>}
          </div>
        )}
        {difficulty==="expert"&&!gameWon&&!gameLost&&(
          <p className="text-center text-xs text-red-500 font-semibold">💀 Expert Mode — No hints!</p>
        )}



        {/* Result button */}
        {/* Word meaning card — shown on BOTH win AND lose */}
        {(gameWon||gameLost)&&entry&&(
          <>
            {gameLost&&(
              <div className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center">
                <p className="text-2xl mb-1">😢</p>
                <p className="text-sm text-red-600 font-semibold mb-1">Better luck next time!</p>
                <p className="text-xs text-red-400">The word was — learn it for next time 👇</p>
              </div>
            )}
            <MeaningCard entry={entry} streak={streak}/>
            <button onClick={()=>newGame(category,gameWon?streak:0)}
              className={`w-full py-3 rounded-xl font-bold text-base text-white ${gameWon?"bg-teal-600":"bg-gray-700"}`}
              style={{boxShadow:gameWon?"0 4px 0 #0F6E56":"0 4px 0 #333"}}>
              {gameWon?`🎉 Next Word → (${DIFF_INFO[getDiff(streak)].label})`:"🔄 Try Another Word"}
            </button>
          </>
        )}

        {/* Keyboard */}
        <div className="flex flex-col gap-1.5 items-center pt-1">
          {KEYBOARD_ROWS.map((row,ri)=>(
            <div key={ri} className="flex gap-1">
              {row.map(key=>(
                <button key={key} onClick={()=>pressKey(key)}
                  className={`${key.length>1?"px-2 text-xs":"w-8"} h-11 rounded-lg font-bold text-sm transition-all active:translate-y-0.5 select-none ${keyStyle[keyStates[key]||"unused"]}`}
                  style={{boxShadow:"0 3px 0 rgba(0,0,0,0.15)",minWidth:key.length>1?48:32}}>
                  {key}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Progress */}
        {streak>0&&(
          <p className="text-center text-xs text-gray-400">
            {streak>=15?"💀 Expert — 0 letters revealed":
             streak>=10?`🟠 Hard — ${15-streak} wins to Expert`:
             streak>=6?`🟡 Medium — ${10-streak} wins to Hard`:
             streak>=3?`🟢 Easy — ${6-streak} wins to Medium`:
             `🌱 Beginner — ${3-streak} wins to Easy`}
          </p>
        )}
      </div>
    </>
  );
}