"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────
type Phase = "intro" | "listening" | "reading" | "writing" | "speaking" | "results";

interface LQ { id: number; type: "fill"|"mcq"; q: string; opts?: string[]; answer: string; }
interface RQ { id: number; type: "mcq"|"tfng"; q: string; opts?: string[]; answer: string; explanation: string; }

function pick<T>(arr: T[]): T { return arr[Math.floor(Math.random() * arr.length)]; }

const fmt = (s: number) => `${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;

// ── Content pools ─────────────────────────────────────────────────────────────
const LISTENING_POOL = [
  {
    title: "Hotel Reservation",
    context: "A guest calls a hotel to make a booking.",
    script: `Receptionist: Good morning, Grand Palace Hotel, how can I help you? Guest: Hello, I'd like to make a reservation for two nights please. Receptionist: Of course. What dates were you thinking? Guest: From the fourteenth to the sixteenth of March. Receptionist: And how many guests? Guest: Just myself. Do you have a standard single room available? Receptionist: Yes we do. That would be eighty five pounds per night including breakfast. Guest: Perfect. Can I also request a room on a high floor? I'd prefer a view. Receptionist: Certainly. Floors eight to twelve have city views. I'll note that for you. Guest: And is there parking available? Receptionist: Yes, underground parking is twelve pounds per day. You need to register your vehicle at check-in. Guest: Great. My name is Thompson. James Thompson. Receptionist: Thank you Mr Thompson. Check-in is from two pm.`,
    questions: [
      { id:1, type:"fill" as const, q:"The guest is booking for _____ nights.", answer:"2" },
      { id:2, type:"fill" as const, q:"The nightly rate including breakfast is £_____.", answer:"85" },
      { id:3, type:"mcq"  as const, q:"Which floors have city views?",
        opts:["A. Floors 1-5","B. Floors 5-10","C. Floors 8-12","D. Floors 10-15"], answer:"C" },
      { id:4, type:"fill" as const, q:"Parking costs £_____ per day.", answer:"12" },
      { id:5, type:"fill" as const, q:"The guest's surname is _____.", answer:"Thompson" },
    ],
  },
  {
    title: "Library Information",
    context: "A student asks a librarian about library services.",
    script: `Librarian: Good afternoon, City Library, how can I help you? Student: Hi, I'm a new student at the university and I wanted to ask about joining the library. Librarian: Of course. You'll need to bring your student ID and a proof of address — a utility bill or bank statement works. Student: Great. And how many books can I borrow at once? Librarian: Students get ten books at a time, for three weeks each. Student: What about renewals? Librarian: You can renew twice online, as long as nobody else has reserved the book. Student: Does the library have twenty four hour access? Librarian: The main library closes at nine pm on weekdays and six pm on weekends. However, the reading room in block B is open twenty four hours using your student card. Student: Perfect. And is there printing available? Librarian: Yes, five pence per page for black and white, twenty pence for colour. You add credit to your student card at the front desk.`,
    questions: [
      { id:1, type:"mcq" as const, q:"What documents are needed to join the library?",
        opts:["A. Passport only","B. Student ID and proof of address","C. Bank card only","D. Student ID only"], answer:"B" },
      { id:2, type:"fill" as const, q:"Students can borrow _____ books at a time.", answer:"10" },
      { id:3, type:"fill" as const, q:"Books can be borrowed for _____ weeks.", answer:"3" },
      { id:4, type:"mcq" as const, q:"Which area is open 24 hours?",
        opts:["A. Main library","B. Computer lab","C. Reading room in Block B","D. Café"], answer:"C" },
      { id:5, type:"fill" as const, q:"Black and white printing costs _____ pence per page.", answer:"5" },
    ],
  },
  {
    title: "Sports Centre Membership",
    context: "A caller enquires about joining a local sports centre.",
    script: `Staff: Good morning, Riverside Sports Centre. Caller: Hi, I'd like to find out about membership options. Staff: Of course. We have three tiers. Basic is thirty five pounds a month — gym and swimming only. Standard is fifty pounds and includes all fitness classes. Premium is seventy pounds and adds personal training sessions and spa access. Caller: Is there a joining fee? Staff: No joining fee at the moment — we're running a promotion until the end of the month. Caller: Great. What are the opening hours? Staff: We're open Monday to Friday, six am to ten pm, and weekends eight am to eight pm. Caller: And is there parking? Staff: Free parking for members for up to three hours. Caller: Brilliant. Can I come in for a tour? Staff: Absolutely — just ask for Marcus at reception, any weekday morning.`,
    questions: [
      { id:1, type:"fill" as const, q:"The Standard membership costs £_____ per month.", answer:"50" },
      { id:2, type:"mcq" as const, q:"Which membership includes spa access?",
        opts:["A. Basic","B. Standard","C. Premium","D. All of them"], answer:"C" },
      { id:3, type:"fill" as const, q:"There is currently no _____ fee.", answer:"joining" },
      { id:4, type:"fill" as const, q:"Weekday opening time: _____ am.", answer:"6" },
      { id:5, type:"fill" as const, q:"For a tour, ask for _____ at reception.", answer:"Marcus" },
    ],
  },
];

const READING_POOL = [
  {
    title: "The Science of Memory",
    text: `Memory is one of the most complex and fascinating functions of the human brain. Rather than acting as a simple recording device, the brain actively reconstructs memories each time they are recalled, which means that memories can change subtly over time. This process, known as memory reconsolidation, has profound implications for our understanding of eyewitness testimony and personal recollection.

Research has identified three primary types of memory: sensory memory, which holds information for less than a second; short-term memory, which can retain around seven items for approximately thirty seconds; and long-term memory, which has an effectively unlimited capacity and can last a lifetime. The transfer of information from short-term to long-term memory is significantly enhanced by repetition, meaningful association, and emotional significance.

Sleep plays a critical role in memory consolidation. Studies have shown that people who sleep within eight hours of learning new information retain significantly more than those who remain awake. During deep sleep, the hippocampus — a region central to memory formation — replays the day's experiences and gradually transfers them to the cortex for long-term storage.

Recent neuroscience has also challenged the long-held view that adults cannot generate new brain cells. Research now suggests that neurogenesis — the birth of new neurons — continues in the hippocampus throughout adulthood, and that exercise and cognitive stimulation can enhance this process, potentially slowing age-related memory decline.`,
    questions: [
      { id:1, type:"tfng" as const, q:"The brain records memories exactly as events occur.", answer:"FALSE",
        explanation:"The passage states the brain 'actively reconstructs' memories, meaning they can change." },
      { id:2, type:"tfng" as const, q:"Short-term memory can hold unlimited information.", answer:"FALSE",
        explanation:"Short-term memory holds around seven items for approximately 30 seconds." },
      { id:3, type:"mcq"  as const, q:"According to the passage, what enhances memory transfer?",
        opts:["A. Stress and pressure","B. Repetition, association and emotion","C. Avoiding sleep","D. Sensory overload"],
        answer:"B", explanation:"Paragraph 2 lists repetition, meaningful association, and emotional significance." },
      { id:4, type:"tfng" as const, q:"Sleep is important for moving memories to long-term storage.", answer:"TRUE",
        explanation:"The hippocampus transfers experiences to the cortex during deep sleep." },
      { id:5, type:"mcq"  as const, q:"What does 'neurogenesis' mean in this passage?",
        opts:["A. Memory loss","B. Brain surgery","C. Birth of new neurons","D. Sleep cycles"],
        answer:"C", explanation:"Paragraph 4 defines neurogenesis as 'the birth of new neurons'." },
    ],
  },
  {
    title: "Urban Green Spaces",
    text: `As cities continue to grow in population and density, urban planners are increasingly recognising the vital importance of green spaces — parks, gardens, tree-lined streets, and waterways — to the overall health and wellbeing of city residents. Research consistently shows that access to nature, even in small doses, produces measurable improvements in mental health, physical activity levels, and social cohesion.

A landmark study conducted across twelve European cities found that residents living within three hundred metres of a park reported twenty percent lower rates of anxiety and depression than those without access to green spaces. Furthermore, green areas reduce the urban heat island effect, where cities become significantly warmer than surrounding rural areas due to heat absorbed by buildings and roads. A single mature tree can reduce local temperatures by up to two degrees Celsius through shading and evapotranspiration.

Despite these benefits, green spaces in many cities are under threat from development pressure. Land values in urban centres make it economically tempting to build on parks and gardens. Critics argue, however, that this represents a false economy: the cost of treating mental health conditions, heat-related illness, and physical inactivity far exceeds the short-term gains from development.

Some cities have responded innovatively. Singapore has integrated greenery directly into its building infrastructure, with rooftop gardens and vertical plant walls now mandatory in new commercial developments. Similarly, cities like Copenhagen and Amsterdam have expanded their cycle networks through parks, encouraging residents to choose greener transport options while simultaneously increasing park usage.`,
    questions: [
      { id:1, type:"tfng" as const, q:"All cities are reducing the size of their green spaces.", answer:"NOT GIVEN",
        explanation:"The passage says many green spaces are under threat but doesn't state all cities are reducing them." },
      { id:2, type:"mcq"  as const, q:"How much can a single mature tree reduce local temperature?",
        opts:["A. One degree","B. Two degrees","C. Three degrees","D. Five degrees"],
        answer:"B", explanation:"Paragraph 2 states 'up to two degrees Celsius'." },
      { id:3, type:"tfng" as const, q:"People near parks show lower rates of anxiety.", answer:"TRUE",
        explanation:"Paragraph 2 states residents near parks reported 20% lower rates of anxiety and depression." },
      { id:4, type:"mcq"  as const, q:"What does 'false economy' mean in paragraph 3?",
        opts:["A. Saving money wisely","B. A decision that appears cost-saving but costs more overall","C. Economic growth","D. A financial mistake due to fraud"],
        answer:"B", explanation:"Building on parks appears profitable but healthcare costs exceed the savings." },
      { id:5, type:"tfng" as const, q:"Singapore requires green features in new commercial buildings.", answer:"TRUE",
        explanation:"Paragraph 4 states rooftop gardens and vertical plant walls are 'mandatory in new commercial developments'." },
    ],
  },
];

const WRITING_PROMPTS = [
  {
    task: "Task 2 — Academic Essay",
    prompt: "Some people believe that universities should focus solely on academic education and should not provide vocational training or practical skills. To what extent do you agree or disagree?",
    tips: ["Write at least 250 words", "Give your opinion clearly", "Support each point with an example", "Use formal language"],
    time: 40,
  },
  {
    task: "Task 2 — Discussion Essay",
    prompt: "In many countries, the gap between rich and poor is widening. Some argue governments should reduce this inequality, while others believe it is not the government's responsibility. Discuss both views and give your opinion.",
    tips: ["Write at least 250 words", "Present both sides fairly", "Give your opinion in the conclusion", "Use: However, Furthermore, On the other hand"],
    time: 40,
  },
  {
    task: "Task 2 — Problem & Solution",
    prompt: "Traffic congestion in cities is becoming an increasingly serious problem. What are the main causes of this problem, and what measures could be taken to address it?",
    tips: ["Write at least 250 words", "Identify at least 2 causes", "Suggest at least 2 solutions", "Give specific examples"],
    time: 40,
  },
];

const SPEAKING_POOL = [
  {
    part1: ["Do you work or are you a student?", "What do you enjoy most about your studies or job?", "How do you usually spend your weekends?"],
    part2: { topic: "Describe a book that had a big impact on you.", points: ["What the book was about", "When you read it", "Why it was important to you", "How it affected you"] },
    part3: ["Do you think reading is becoming less popular? Why?", "How has technology changed the way people read?", "Should schools encourage more reading? How?"],
  },
  {
    part1: ["What kind of food do you enjoy most?", "Do you prefer eating at home or in restaurants?", "Is food important in your culture?"],
    part2: { topic: "Describe a meal you enjoyed recently.", points: ["What you ate", "Where you had it", "Who you were with", "Why it was memorable"] },
    part3: ["How has global food culture changed in recent years?", "Do you think fast food has a negative effect on society?", "How important is it to preserve traditional food culture?"],
  },
  {
    part1: ["Do you enjoy travelling?", "What is your favourite place you have visited?", "Do you prefer cities or the countryside?"],
    part2: { topic: "Describe a journey or trip that was memorable.", points: ["Where you went", "Who you went with", "What happened", "Why it was memorable"] },
    part3: ["How has tourism changed in your country?", "What are the negative effects of mass tourism?", "Should governments do more to promote local tourism?"],
  },
];

// ── Band helpers ──────────────────────────────────────────────────────────────
const BAND_MAP: number[] = [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4];
const scoreToBand = (correct: number, total: number): number => {
  const wrong = Math.min(total - correct, BAND_MAP.length - 1);
  return BAND_MAP[wrong];
};

const BAND_COLORS: Record<string, string> = {
  "9":"bg-emerald-500","8.5":"bg-emerald-400","8":"bg-green-500","7.5":"bg-green-400",
  "7":"bg-lime-500","6.5":"bg-yellow-400","6":"bg-amber-400","5.5":"bg-orange-400",
  "5":"bg-orange-500","4.5":"bg-red-400","4":"bg-red-500",
};

const SPEAKING_CRITERIA = ["Fluency & Coherence", "Lexical Resource", "Grammar Range", "Pronunciation"];
const BAND_OPTS = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

// ── Main component ────────────────────────────────────────────────────────────
export default function DiagnosticTest() {
  const [phase, setPhase] = useState<Phase>("intro");
  const [lSection]  = useState(() => pick(LISTENING_POOL));
  const [rPassage]  = useState(() => pick(READING_POOL));
  const [wPrompt]   = useState(() => pick(WRITING_PROMPTS));
  const [speaking]  = useState(() => pick(SPEAKING_POOL));

  const [lAnswers, setLAnswers] = useState<Record<number,string>>({});
  const [rAnswers, setRAnswers] = useState<Record<number,string>>({});
  const [essay, setEssay]       = useState("");
  const [spPart, setSpPart]     = useState(0);
  const [spTimer, setSpTimer]   = useState(120);
  const [spRatings, setSpRatings] = useState<Record<string,number>>({});

  const [timeLeft, setTimeLeft]   = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioDone, setAudioDone] = useState(false);
  const [playError, setPlayError] = useState(false);

  const timerRef   = useRef<ReturnType<typeof setInterval>|null>(null);
  const spTimerRef = useRef<ReturnType<typeof setInterval>|null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }, []);

  const startTimer = useCallback((seconds: number, onEnd: () => void) => {
    stopTimer();
    setTimeLeft(seconds);
    timerRef.current = setInterval(() => {
      setTimeLeft(v => {
        if (v <= 1) { clearInterval(timerRef.current!); timerRef.current = null; onEnd(); return 0; }
        return v - 1;
      });
    }, 1000);
  }, [stopTimer]);

  useEffect(() => () => stopTimer(), [stopTimer]);

  // ── Speaking Part 2 timer ──────────────────────────────────────────────────
  useEffect(() => {
    if (phase !== "speaking" || spPart !== 1) return;
    setSpTimer(120);
    spTimerRef.current = setInterval(() => {
      setSpTimer(v => {
        if (v <= 1) { clearInterval(spTimerRef.current!); return 0; }
        return v - 1;
      });
    }, 1000);
    return () => { if (spTimerRef.current) clearInterval(spTimerRef.current); };
  }, [phase, spPart]);

  // ── SpeechSynthesis: wait for voices, then play ────────────────────────────
  const playListening = useCallback(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) {
      console.error("[DiagnosticTest] Web Speech API not available");
      setPlayError(true);
      setAudioDone(true);
      return;
    }
    setPlayError(false);
    setIsPlaying(true);

    const speak = () => {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(lSection.script);
        utter.rate = 0.88;
        utter.lang = "en-GB";
        
        const voices = window.speechSynthesis.getVoices();
        if (voices.length === 0) {
          console.warn("[DiagnosticTest] No voices available");
          setPlayError(true);
          setIsPlaying(false);
          setAudioDone(true);
          return;
        }
        
        // Find best matching voice
        const voice = voices.find(v => v.lang === "en-GB") ||
                      voices.find(v => v.lang.startsWith("en-GB")) ||
                      voices.find(v => v.lang.startsWith("en")) || 
                      voices[0];
        
        if (voice) {
          utter.voice = voice;
          console.log(`[DiagnosticTest] Using voice: ${voice.name}`);
        }
        
        utter.onend  = () => { 
          console.log("[DiagnosticTest] Audio finished");
          setIsPlaying(false); 
          setAudioDone(true); 
        };
        utter.onerror = (e) => { 
          console.error("[DiagnosticTest] Speech error:", e.error);
          setIsPlaying(false); 
          setPlayError(true); 
          setAudioDone(true); 
        };
        
        window.speechSynthesis.speak(utter);
        console.log("[DiagnosticTest] Started speaking");
      } catch (err) {
        console.error("[DiagnosticTest] Error during speak:", err);
        setPlayError(true);
        setIsPlaying(false);
        setAudioDone(true);
      }
    };

    // Voices may not be loaded yet — wait for them
    const voices = window.speechSynthesis.getVoices();
    console.log(`[DiagnosticTest] Available voices: ${voices.length}`);
    
    if (voices.length > 0) {
      speak();
    } else {
      console.log("[DiagnosticTest] Waiting for voices to load...");
      
      // Try again after a short delay (Chrome needs this sometimes)
      const retryTimer = setTimeout(() => {
        const retryVoices = window.speechSynthesis.getVoices();
        if (retryVoices.length > 0) {
          console.log(`[DiagnosticTest] Voices loaded after delay (${retryVoices.length})`);
          speak();
        }
      }, 500);
      
      const handleVoicesChanged = () => {
        console.log("[DiagnosticTest] onvoiceschanged fired");
        clearTimeout(retryTimer);
        speak();
      };
      
      window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
      
      // Cleanup function
      return () => {
        clearTimeout(retryTimer);
        window.speechSynthesis.onvoiceschanged = null;
      };
    }
  }, [lSection.script]);

  // ── Phase transitions ──────────────────────────────────────────────────────
  const goReading  = () => { window.speechSynthesis?.cancel(); setPhase("reading");  startTimer(20*60, () => goWriting()); };
  const goWriting  = () => { stopTimer(); setPhase("writing");  startTimer(40*60, () => goSpeaking()); };
  const goSpeaking = () => { stopTimer(); setPhase("speaking"); };
  const goResults  = () => { stopTimer(); window.speechSynthesis?.cancel(); setPhase("results"); };

  // ── Scores ─────────────────────────────────────────────────────────────────
  const lScore = lSection.questions.filter(q =>
    (lAnswers[q.id] || "").toLowerCase().trim() === q.answer.toLowerCase()
  ).length;
  const rScore = rPassage.questions.filter(q =>
    (rAnswers[q.id] || "").toLowerCase().trim() === q.answer.toLowerCase()
  ).length;
  const lBand = scoreToBand(lScore, lSection.questions.length);
  const rBand = scoreToBand(rScore, rPassage.questions.length);
  const wordCount = essay.trim() ? essay.trim().split(/\s+/).length : 0;
  const wBand = wordCount >= 250 ? 6.5 : wordCount >= 200 ? 5.5 : 5.0;
  const spRatingVals = Object.values(spRatings);
  const sBand = spRatingVals.length === 4
    ? Math.round((spRatingVals.reduce((a,b) => a+b,0) / 4) * 2) / 2
    : 6.0;
  const overall = Math.round(((lBand + rBand + wBand + sBand) / 4) * 2) / 2;

  // ── INTRO ──────────────────────────────────────────────────────────────────
  if (phase === "intro") return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-5xl block mb-4">🎯</span>
        <h1 className="text-3xl font-black text-gray-900 mb-3">IELTS Diagnostic Test</h1>
        <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
          A mini mock covering all 4 skills. Get your estimated band score in under 75 minutes.
          Questions are randomly selected each time.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {[
          { icon:"🎧", skill:"Listening", time:"~10 min", info:"5 questions — audio played once",    color:"bg-amber-50 border-amber-200" },
          { icon:"📖", skill:"Reading",   time:"~20 min", info:"5 questions — passage provided",     color:"bg-indigo-50 border-indigo-200" },
          { icon:"✍️", skill:"Writing",   time:"~40 min", info:"Task 2 essay — 250+ words",          color:"bg-green-50 border-green-200" },
          { icon:"🗣️", skill:"Speaking",  time:"~5 min",  info:"Part 1, 2 & 3 — self-assessed",     color:"bg-purple-50 border-purple-200" },
        ].map(s => (
          <div key={s.skill} className={`${s.color} border rounded-2xl p-4 flex items-center gap-4`}>
            <span className="text-3xl">{s.icon}</span>
            <div>
              <p className="font-bold text-gray-900 text-sm">{s.skill}</p>
              <p className="text-xs text-gray-500">{s.time} · {s.info}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Test CTA */}
      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-bold text-blue-900 text-sm">Want the real thing?</p>
          <p className="text-blue-600 text-xs mt-0.5">Full 2h 45min test — Academic or General Training — 5 question pools</p>
        </div>
        <Link href="/ielts/full-test"
          className="shrink-0 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-700 transition">
          Full Test →
        </Link>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-8">
        <p className="font-bold text-amber-800 mb-2">⚠️ Before you start</p>
        <ul className="space-y-1 text-sm text-amber-700">
          <li>• Find a quiet place — the listening section uses your browser's audio</li>
          <li>• Each section has a timer — work at exam pace</li>
          <li>• Do not refresh the page mid-test</li>
          <li>• Your results appear at the end with full answer review</li>
        </ul>
      </div>

      <button onClick={() => setPhase("listening")}
        className="w-full bg-teal-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-teal-700 transition-all"
        style={{ boxShadow:"0 4px 0 #0F6E56" }}>
        🚀 Start Diagnostic Test
      </button>
      <div className="text-center mt-4">
        <Link href="/ielts/practice" className="text-gray-400 text-sm hover:text-teal-600">← Choose a single skill instead</Link>
      </div>
    </div>
  );

  // ── LISTENING ─────────────────────────────────────────────────────────────
  if (phase === "listening") return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-amber-500 text-white rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between mb-1">
          <h2 className="font-black text-lg">🎧 Section 1 — Listening</h2>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">1 of 4</span>
        </div>
        <p className="text-amber-100 text-sm">{lSection.context}</p>
      </div>

      <div className="bg-gray-900 text-white rounded-2xl p-5 mb-5">
        <div className="flex items-center gap-3 mb-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPlaying ? "bg-amber-500 animate-pulse" : "bg-gray-700"}`}>
            🎧
          </div>
          <div>
            <p className="font-bold text-sm">{lSection.title}</p>
            <p className="text-gray-400 text-xs">
              {isPlaying ? "Playing — listen carefully" : audioDone ? "Audio complete" : "Ready — click Play when ready"}
            </p>
          </div>
        </div>

        {!audioDone && !isPlaying && (
          <button onClick={playListening}
            className="w-full bg-amber-500 hover:bg-amber-600 py-2.5 rounded-xl font-bold text-sm transition-all">
            ▶ Play Audio (once only)
          </button>
        )}
        {isPlaying && (
          <button onClick={() => { window.speechSynthesis.cancel(); setIsPlaying(false); setAudioDone(true); }}
            className="w-full bg-gray-700 py-2.5 rounded-xl font-bold text-sm">
            ⏹ Stop Audio
          </button>
        )}
        {audioDone && !playError && (
          <div className="w-full bg-emerald-600/30 border border-emerald-500 text-emerald-400 py-2.5 rounded-xl text-sm font-bold text-center">
            ✓ Audio complete — answer the questions below
          </div>
        )}
        {audioDone && playError && (
          <div className="w-full bg-red-900/40 border border-red-500 text-red-300 py-2.5 rounded-xl text-sm text-center">
            ⚠ Audio unavailable in this browser — read the script below, then answer.
          </div>
        )}
        {/* Script fallback — visible if audio failed */}
        {playError && (
          <details className="mt-3">
            <summary className="text-xs text-gray-400 cursor-pointer">Show script (fallback)</summary>
            <p className="text-xs text-gray-300 mt-2 leading-relaxed whitespace-pre-line">{lSection.script}</p>
          </details>
        )}
      </div>

      <div className="space-y-4 mb-6">
        {lSection.questions.map((q, i) => (
          <div key={q.id} className="bg-white border border-gray-200 rounded-2xl p-5">
            <p className="font-semibold text-gray-900 text-sm mb-3">
              <span className="text-amber-500 font-black mr-2">{i+1}.</span>{q.q}
            </p>
            {q.type === "mcq" ? (
              <div className="space-y-2">
                {q.opts!.map(opt => (
                  <button key={opt} onClick={() => setLAnswers(a => ({...a,[q.id]:opt[0]}))}
                    className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all
                      ${lAnswers[q.id]===opt[0] ? "bg-amber-100 border-amber-400 font-semibold" : "border-gray-200 hover:border-amber-300"}`}>
                    {opt}
                  </button>
                ))}
              </div>
            ) : (
              <input type="text" placeholder="Write your answer…"
                value={lAnswers[q.id] || ""}
                onChange={e => setLAnswers(a => ({...a,[q.id]:e.target.value}))}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400" />
            )}
          </div>
        ))}
      </div>

      <button onClick={goReading}
        className="w-full bg-amber-500 text-white py-4 rounded-2xl font-bold hover:bg-amber-600 transition-all">
        Next: Reading Section →
      </button>
    </div>
  );

  // ── READING ───────────────────────────────────────────────────────────────
  if (phase === "reading") return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="sticky top-0 z-20 bg-white border-b px-4 py-3 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-black text-indigo-600">📖 Reading</span>
          <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">2 of 4</span>
        </div>
        <span className={`font-mono font-bold text-sm px-3 py-1 rounded-lg ${timeLeft < 300 ? "bg-red-100 text-red-700 animate-pulse" : "bg-indigo-50 text-indigo-700"}`}>
          ⏱ {fmt(timeLeft)}
        </span>
      </div>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 bg-white border border-gray-200 rounded-2xl p-6 lg:sticky lg:top-20 lg:max-h-[75vh] lg:overflow-y-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Passage — {rPassage.title}</p>
          {rPassage.text.split("\n\n").map((p,i) => (
            <p key={i} className="text-sm text-gray-700 leading-[1.9] mb-4">{p}</p>
          ))}
        </div>
        <div className="lg:w-1/2 space-y-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-wide">Questions</p>
          {rPassage.questions.map((q, i) => (
            <div key={q.id} className="bg-white border border-gray-200 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-indigo-600">{i+1}.</span>
                {q.type === "tfng" && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold">T/F/NG</span>}
                {q.type === "mcq"  && <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">MCQ</span>}
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-3">{q.q}</p>
              {q.type === "tfng" ? (
                <div className="flex gap-2">
                  {["TRUE","FALSE","NOT GIVEN"].map(opt => (
                    <button key={opt} onClick={() => setRAnswers(a => ({...a,[q.id]:opt}))}
                      className={`flex-1 py-2 rounded-xl border text-xs font-bold transition-all
                        ${rAnswers[q.id]===opt ? "bg-indigo-100 border-indigo-400 text-indigo-800" : "border-gray-200 hover:border-indigo-300"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="space-y-2">
                  {q.opts!.map(opt => (
                    <button key={opt} onClick={() => setRAnswers(a => ({...a,[q.id]:opt[0]}))}
                      className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all
                        ${rAnswers[q.id]===opt[0] ? "bg-indigo-100 border-indigo-400 font-semibold" : "border-gray-200 hover:border-indigo-300"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button onClick={goWriting}
            className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold hover:bg-indigo-700 transition-all">
            Next: Writing Section →
          </button>
        </div>
      </div>
    </div>
  );

  // ── WRITING ───────────────────────────────────────────────────────────────
  if (phase === "writing") return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="sticky top-0 z-20 bg-white border-b px-4 py-3 mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-sm font-black text-green-700">✍️ Writing</span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">3 of 4</span>
        </div>
        <div className="flex items-center gap-3">
          <span className={`text-xs ${wordCount >= 250 ? "text-green-600 font-bold" : "text-gray-400"}`}>
            {wordCount} words {wordCount >= 250 ? "✓" : "(min 250)"}
          </span>
          <span className={`font-mono font-bold text-sm px-3 py-1 rounded-lg ${timeLeft < 600 ? "bg-red-100 text-red-700 animate-pulse" : "bg-green-50 text-green-700"}`}>
            ⏱ {fmt(timeLeft)}
          </span>
        </div>
      </div>
      <div className="bg-green-50 border border-green-200 rounded-2xl p-5 mb-5">
        <span className="text-xs font-bold text-green-700 uppercase tracking-wide">{wPrompt.task}</span>
        <p className="text-gray-900 font-semibold text-sm leading-relaxed mt-2">{wPrompt.prompt}</p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 mb-4">
        <p className="text-xs font-bold text-gray-500 mb-1.5">Tips</p>
        <div className="flex flex-wrap gap-2">
          {wPrompt.tips.map(t => (
            <span key={t} className="text-xs bg-green-50 text-green-700 border border-green-200 px-2 py-0.5 rounded-full">{t}</span>
          ))}
        </div>
      </div>
      <textarea value={essay} onChange={e => setEssay(e.target.value)}
        placeholder="Start writing your essay here… (minimum 250 words)"
        className="w-full h-72 border border-gray-200 rounded-2xl px-5 py-4 text-sm leading-relaxed focus:outline-none focus:border-green-500 resize-none mb-5" />
      <button onClick={goSpeaking}
        className="w-full bg-green-600 text-white py-4 rounded-2xl font-bold hover:bg-green-700 transition-all">
        Next: Speaking Section →
      </button>
    </div>
  );

  // ── SPEAKING ──────────────────────────────────────────────────────────────
  if (phase === "speaking") return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-purple-600 text-white rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-black text-lg">🗣️ Speaking</h2>
          <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">4 of 4</span>
        </div>
        <div className="flex gap-2">
          {["Part 1","Part 2","Part 3","Rate Yourself"].map((p,i) => (
            <button key={p} onClick={() => setSpPart(i)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all
                ${spPart===i ? "bg-white text-purple-700" : "bg-white/20 hover:bg-white/30"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>

      {spPart === 0 && (
        <div className="space-y-4 mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-3 text-sm">Part 1 — Introduction & Interview</p>
            <p className="text-gray-500 text-xs mb-4">Answer each question aloud. Aim for 2–3 sentences each.</p>
            {speaking.part1.map((q, i) => (
              <div key={i} className="bg-white border border-purple-100 rounded-xl p-4 mb-3">
                <p className="font-semibold text-gray-900 text-sm">❓ {q}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setSpPart(1)}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-all">
            Continue to Part 2 →
          </button>
        </div>
      )}

      {spPart === 1 && (
        <div className="space-y-4 mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-3">
              <p className="font-bold text-gray-900 text-sm">Part 2 — Cue Card</p>
              <span className={`font-mono font-black text-lg ${spTimer < 30 ? "text-red-600" : "text-purple-600"}`}>
                {fmt(spTimer)}
              </span>
            </div>
            <div className="bg-white border border-purple-200 rounded-xl p-4 mb-4">
              <p className="font-bold text-gray-900 mb-3">{speaking.part2.topic}</p>
              <p className="text-xs text-gray-500 mb-2">You should say:</p>
              <ul className="space-y-1">
                {speaking.part2.points.map(pt => (
                  <li key={pt} className="text-sm text-gray-700 flex gap-2"><span className="text-purple-400">•</span>{pt}</li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-2 text-xs text-amber-700">
              💡 1 minute to prepare → speak for 1–2 minutes. Timer above counts down your speaking time.
            </div>
          </div>
          <button onClick={() => setSpPart(2)}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-all">
            Continue to Part 3 →
          </button>
        </div>
      )}

      {spPart === 2 && (
        <div className="space-y-4 mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5">
            <p className="font-bold text-gray-900 mb-3 text-sm">Part 3 — Discussion</p>
            <p className="text-gray-500 text-xs mb-4">Give extended answers with opinions, reasons and examples.</p>
            {speaking.part3.map((q, i) => (
              <div key={i} className="bg-white border border-purple-100 rounded-xl p-4 mb-3">
                <p className="font-semibold text-gray-900 text-sm">❓ {q}</p>
              </div>
            ))}
          </div>
          <button onClick={() => setSpPart(3)}
            className="w-full bg-purple-600 text-white py-3 rounded-xl font-bold hover:bg-purple-700 transition-all">
            Rate Your Speaking →
          </button>
        </div>
      )}

      {spPart === 3 && (
        <div className="space-y-4 mb-6">
          <div className="bg-purple-50 border border-purple-200 rounded-2xl p-5 space-y-5">
            <div>
              <p className="font-bold text-gray-900 text-sm">Rate Your Speaking Performance</p>
              <p className="text-xs text-gray-500 mt-1">Be honest — this directly affects your band score estimate.</p>
            </div>
            {SPEAKING_CRITERIA.map(c => (
              <div key={c}>
                <p className="text-sm font-semibold text-gray-800 mb-2">{c}</p>
                <div className="flex gap-1.5 flex-wrap">
                  {BAND_OPTS.map(b => (
                    <button key={b} onClick={() => setSpRatings(r => ({...r,[c]:b}))}
                      className={`px-2.5 py-1 text-xs rounded-full border font-medium transition-all
                        ${spRatings[c]===b ? "bg-purple-600 text-white border-purple-600" : "border-gray-300 text-gray-600 hover:border-purple-400"}`}>
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <button onClick={goResults}
            disabled={Object.keys(spRatings).length < 4}
            className="w-full bg-teal-600 text-white py-4 rounded-2xl font-black hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            style={{ boxShadow:"0 4px 0 #0F6E56" }}>
            🎯 See My Results →
          </button>
        </div>
      )}
    </div>
  );

  // ── RESULTS ───────────────────────────────────────────────────────────────
  if (phase === "results") return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <p className="text-5xl mb-4">🎯</p>
        <h1 className="text-3xl font-black text-gray-900 mb-2">Diagnostic Complete!</h1>
        <p className="text-gray-500 text-sm">Estimated IELTS band scores based on this diagnostic</p>
      </div>

      {/* Overall */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white rounded-2xl p-8 text-center mb-6">
        <p className="text-teal-200 text-sm uppercase tracking-wider mb-2">Overall Estimated Band</p>
        <p className="text-7xl font-black mb-2">{overall}</p>
        <p className="text-teal-200 text-sm">
          {overall >= 7.5 ? "Excellent — University ready!" :
           overall >= 6.5 ? "Good — Strong candidate" :
           overall >= 6.0 ? "Competent — Keep practising" : "Developing — More practice needed"}
        </p>
      </div>

      {/* Skill breakdown */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { skill:"Listening", icon:"🎧", band:lBand, detail:`${lScore}/${lSection.questions.length} correct` },
          { skill:"Reading",   icon:"📖", band:rBand, detail:`${rScore}/${rPassage.questions.length} correct` },
          { skill:"Writing",   icon:"✍️", band:wBand, detail:`${wordCount} words written` },
          { skill:"Speaking",  icon:"🗣️", band:sBand, detail:"Self-assessed" },
        ].map(s => (
          <div key={s.skill} className="bg-white border border-gray-200 rounded-2xl p-5 text-center">
            <p className="text-2xl mb-2">{s.icon}</p>
            <p className="font-bold text-gray-700 text-sm mb-2">{s.skill}</p>
            <div className={`w-12 h-12 ${BAND_COLORS[String(s.band)] || "bg-gray-400"} text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-1`}>
              {s.band}
            </div>
            <p className="text-xs text-gray-400">{s.detail}</p>
          </div>
        ))}
      </div>

      {/* Full Test CTA */}
      <div className="bg-blue-600 text-white rounded-2xl p-5 mb-6 flex items-center justify-between gap-4">
        <div>
          <p className="font-bold text-sm">Ready for the full exam experience?</p>
          <p className="text-blue-200 text-xs mt-0.5">2h 45min · Academic or General Training · 5 random pools</p>
        </div>
        <Link href="/ielts/full-test"
          className="shrink-0 bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-bold hover:bg-blue-50 transition">
          Full Test →
        </Link>
      </div>

      {/* Answer review — Listening */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-5">
        <p className="font-bold text-gray-900 mb-4">📋 Listening Answers</p>
        {lSection.questions.map((q, i) => {
          const correct = (lAnswers[q.id]||"").toLowerCase().trim() === q.answer.toLowerCase();
          return (
            <div key={q.id} className={`flex gap-3 p-3 rounded-xl mb-2 text-sm ${correct ? "bg-teal-50" : "bg-red-50"}`}>
              <span className={`font-black shrink-0 ${correct ? "text-teal-600" : "text-red-500"}`}>{correct ? "✅" : "❌"} Q{i+1}</span>
              <div className="min-w-0">
                <p className="text-gray-600 text-xs truncate">{q.q}</p>
                {!correct && <p className="text-xs mt-0.5 text-red-600">Your: {lAnswers[q.id]||"(blank)"} → Correct: {q.answer}</p>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Answer review — Reading */}
      <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-8">
        <p className="font-bold text-gray-900 mb-4">📋 Reading Answers</p>
        {rPassage.questions.map((q, i) => {
          const correct = (rAnswers[q.id]||"").toLowerCase().trim() === q.answer.toLowerCase();
          return (
            <div key={q.id} className={`p-3 rounded-xl mb-2 text-sm ${correct ? "bg-teal-50" : "bg-red-50"}`}>
              <div className="flex gap-3">
                <span className={`font-black shrink-0 ${correct ? "text-teal-600" : "text-red-500"}`}>{correct ? "✅" : "❌"} Q{i+1}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-gray-700 text-xs truncate">{q.q}</p>
                  {!correct && <p className="text-xs mt-0.5 text-red-600">Your: {rAnswers[q.id]||"(blank)"} → Correct: {q.answer}</p>}
                  <p className="text-xs text-gray-400 mt-0.5">{q.explanation}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTAs */}
      <div className="grid sm:grid-cols-3 gap-3">
        <button onClick={() => window.location.reload()}
          className="bg-teal-600 text-white py-3.5 rounded-xl font-bold text-sm hover:bg-teal-700 transition-all">
          🔄 Retake Diagnostic
        </button>
        <Link href="/ielts/practice"
          className="bg-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm text-center hover:bg-gray-200 transition-all">
          📚 Skill Practice
        </Link>
        <Link href="/ielts"
          className="bg-gray-100 text-gray-700 py-3.5 rounded-xl font-bold text-sm text-center hover:bg-gray-200 transition-all">
          ← IELTS Hub
        </Link>
      </div>
    </div>
  );

  return null;
}
