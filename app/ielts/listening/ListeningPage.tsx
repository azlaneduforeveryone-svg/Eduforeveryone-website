"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";

// ── Types ─────────────────────────────────────────────────────────────────────
interface ListeningQ {
  id: number;
  q: string;
  type: "fill" | "mcq";
  opts?: string[];
  answer: string;
  hint?: string;
}

interface Section {
  num: number;
  title: string;
  context: string;
  transcript: string;
  questions: ListeningQ[];
}

type Answers = Record<number, string>;
type Results = { score: number; total: number } | null;

// ── Band Score Conversion ─────────────────────────────────────────────────────
const RAW_TO_BAND: [number, number][] = [
  [39,9],[37,8.5],[35,8],[32,7.5],[30,7],[26,6.5],
  [23,6],[18,5.5],[16,5],[13,4.5],[10,4],[6,3.5],[4,3],[2,2.5],[0,1],
];
const getBand = (raw: number, total: number) => {
  const scaled = Math.round((raw / total) * 40);
  for (const [min, band] of RAW_TO_BAND) {
    if (scaled >= min) return band;
  }
  return 1;
};

// ── Section Data ──────────────────────────────────────────────────────────────
const SECTIONS: Section[] = [
  {
    num: 1,
    title: "Section 1 — Everyday Conversation",
    context: "A customer calls a local sports centre to enquire about membership options.",
    transcript: `Receptionist: Good morning, Riverside Sports Centre. How can I help you?
Customer: Hi, I'm interested in joining the centre. Could you tell me about your membership options?
Receptionist: Of course. We have three types. A basic membership is twenty five pounds per month, which gives you access to the gym and the swimming pool during off-peak hours — that's before 4pm on weekdays.
Customer: And what about peak hours?
Receptionist: For full access including evenings and weekends, the standard membership is forty pounds per month. We also have a premium option at fifty five pounds which includes unlimited classes such as yoga, spinning and pilates.
Customer: Great. How do I sign up?
Receptionist: You can register online, or come in and fill out a form at reception. You'll need a passport or driving licence for identification, and your bank details for the direct debit.
Customer: Is there a joining fee?
Receptionist: Yes, there's a one-off joining fee of fifteen pounds for all memberships. However, if you sign up before the end of the month we're waiving it as part of our summer promotion.
Customer: Excellent. My name is Sarah Collins — C, O, L, L, I, N, S.
Receptionist: Perfect, I've noted that. Can I take your email address to send you the registration link?
Customer: It's sarah dot collins at mailbox dot com.
Receptionist: Wonderful. You'll receive an email within twenty four hours. Is there anything else?
Customer: No, that covers everything. Thank you very much.`,
    questions: [
      { id:1, type:"fill", q:"The basic membership costs £_____ per month.", answer:"25", hint:"Listen for the price mentioned for basic access." },
      { id:2, type:"fill", q:"The premium membership includes unlimited _____, spinning and pilates.", answer:"yoga", hint:"Three types of classes are mentioned." },
      { id:3, type:"fill", q:"The one-off joining fee is £_____.", answer:"15", hint:"The receptionist mentions this after discussing membership types." },
      { id:4, type:"fill", q:"The customer's surname is _____.", answer:"Collins", hint:"The customer spells it out letter by letter." },
      { id:5, type:"mcq",  q:"When can the joining fee be waived?",
        opts:["A. Always for new members","B. If signing up online only","C. Before the end of the month during a promotion","D. If paying annually"],
        answer:"C", hint:"The receptionist explains a specific condition for waiving the fee." },
    ],
  },
  {
    num: 2,
    title: "Section 2 — Public Information Talk",
    context: "A guide gives a talk about a local nature reserve to a group of visitors.",
    transcript: `Welcome, everyone, to the Greenwood Nature Reserve. My name is David, and I'll be your guide today. Before we begin our walk, let me give you a brief overview of what you can expect.

The reserve covers approximately four hundred and fifty hectares and contains three distinct ecosystems: ancient woodland, freshwater wetlands, and open meadows. Each supports a unique range of wildlife. The woodland area, which we'll visit first, is home to over sixty species of birds, including the rare red kite. The wetlands, in the centre of the reserve, support a significant population of otters as well as various amphibians.

Our walk today will take approximately two hours. The full route is six kilometres, though there is a shorter three kilometre loop if anyone has mobility concerns — please let me know and I'll ensure you're not left behind. The terrain is mostly flat, though there are two gentle hills in the eastern section near the meadows.

A few important reminders: please stay on the marked paths at all times, as going off-trail can disturb nesting wildlife. Dogs are permitted but must remain on a lead throughout. Photography is encouraged — the reserve is particularly photogenic at this time of year. Finally, a small gift shop and café are located at the exit. The café offers hot drinks and light snacks, and proceeds from both help fund the reserve's conservation programmes.`,
    questions: [
      { id:1, type:"fill", q:"The reserve covers approximately _____ hectares.", answer:"450", hint:"A specific number is given at the start of the description." },
      { id:2, type:"fill", q:"The woodland area is home to over _____ species of birds.", answer:"60", hint:"Listen for the number given about the woodland." },
      { id:3, type:"mcq",  q:"Where are the otters located in the reserve?",
        opts:["A. In the ancient woodland","B. In the open meadows","C. In the freshwater wetlands","D. Near the entrance"],
        answer:"C", hint:"The guide describes the central area of the reserve." },
      { id:4, type:"fill", q:"The shorter walking loop is _____ kilometres.", answer:"3", hint:"An alternative route length is mentioned." },
      { id:5, type:"mcq",  q:"What do the café and gift shop proceeds support?",
        opts:["A. Staff salaries","B. The reserve's conservation programmes","C. Free entry for school groups","D. New walking trail construction"],
        answer:"B", hint:"The guide mentions this at the very end of his talk." },
    ],
  },
  {
    num: 3,
    title: "Section 3 — Academic Discussion",
    context: "Two university students, Tom and Nina, discuss their group assignment about urban green spaces.",
    transcript: `Tom: Nina, have you finished reading the articles Professor Keane assigned for our urban ecology assignment?
Nina: I've read two of them. The one on biodiversity in city parks was really interesting — apparently even small parks with just a few trees can support over a hundred different insect species.
Tom: I read that one too. It made me think differently about those tiny pocket parks you see between office buildings.
Nina: And the second article I read argued that the psychological benefits of green spaces are just as significant as the ecological ones. Office workers who could see trees from their desks reported twenty percent lower stress levels.
Tom: That's a compelling figure. I've been looking at how different cities have approached urban greening, and Singapore is extraordinary. They have a government target to keep forty seven percent of the city covered in vegetation.
Nina: Really? That's remarkable. How do they achieve that in such a dense city?
Tom: Rooftop gardens, vertical green walls on skyscrapers, and they've integrated parks directly into transport infrastructure — like greenery along major expressways.
Nina: For our assignment, I think we need to focus on measurable outcomes rather than just describing what cities have done. Professor Keane specifically said she wants quantitative data.
Tom: Agreed. I was thinking we could look at three metrics: air quality improvement, property values near parks, and mental health outcomes.
Nina: The property value angle is interesting — I read a study showing that homes within three hundred metres of a public park are valued on average eight percent higher.
Tom: That's a strong economic argument for investment in green spaces.
Nina: For the structure of our presentation, should we start with the environmental case and move to the social and economic arguments?
Tom: I think so. And we should probably address the main criticism — that green spaces are expensive to maintain.
Nina: There are counter-arguments though. Community gardening programmes reduce council maintenance costs.
Tom: Good point. I'll draft the social and economic parts if you handle the introduction and environmental section.
Nina: Perfect. Let's meet Thursday to put it all together.`,
    questions: [
      { id:1, type:"mcq",  q:"How many insect species can a small urban park support?",
        opts:["A. Over 50","B. Over 100","C. Over 200","D. Over 500"], answer:"B", hint:"Nina mentions a specific number from the article." },
      { id:2, type:"fill", q:"Workers with views of trees reported _____% lower stress levels.", answer:"20", hint:"Nina quotes a specific statistic." },
      { id:3, type:"fill", q:"Singapore's vegetation coverage target is _____% of the city.", answer:"47", hint:"Tom describes Singapore's government target." },
      { id:4, type:"mcq",  q:"What does Professor Keane specifically require in the assignment?",
        opts:["A. Case studies","B. Interviews","C. Quantitative data","D. A literature review"], answer:"C", hint:"Nina reminds Tom what the professor asked for." },
      { id:5, type:"mcq",  q:"Who will draft the introduction and environmental section?",
        opts:["A. Tom","B. Nina","C. Both together","D. Professor Keane"], answer:"B", hint:"Listen to who agrees to write which part at the end." },
    ],
  },
  {
    num: 4,
    title: "Section 4 — Academic Lecture",
    context: "A university lecture on bioluminescence — the ability of living organisms to produce light.",
    transcript: `Lecturer: Good morning. Today we're going to examine one of nature's most extraordinary phenomena — bioluminescence. The ability of living organisms to produce and emit light. By the end of this lecture, I want you to understand the biochemical mechanism behind it, its ecological functions, and its emerging applications in medicine and technology.

Let's begin with the biochemistry. Bioluminescence occurs when a light-emitting compound called luciferin reacts with oxygen in the presence of an enzyme called luciferase. This reaction produces light with remarkable efficiency — approximately ninety to ninety-five percent of the energy released is emitted as visible light, with almost no heat generated. By comparison, a typical incandescent light bulb converts only about ten percent of its energy into light, wasting the rest as heat. This makes bioluminescence one of the most efficient light-producing processes known to science.

The colour of bioluminescent light varies between species. The most common colour in the ocean is blue-green, with a wavelength of around four hundred and eighty nanometres. This makes biological sense — blue-green light travels furthest through seawater.

Now, let's consider why organisms produce light. Researchers have identified four primary functions. First, predation — the anglerfish uses a bioluminescent lure dangling from its head to attract prey in the darkness of the deep ocean. Second, bioluminescence serves as a defensive mechanism. The sea firefly releases a cloud of glowing mucus when threatened, which disorientates predators. Third, it functions as camouflage — called counter-illumination, where organisms match the faint light filtering down from the surface to eliminate their shadow. And fourth, it facilitates communication, particularly for reproductive signalling.

Approximately seventy-six percent of marine species in the deep ocean exhibit some form of bioluminescence.

In medicine, the luciferase gene has been inserted into cancer cells, allowing surgeons to locate tumours with extraordinary precision using a light-detecting camera. In environmental science, bioluminescent organisms are used as biological indicators of water quality — a decrease in coastal bioluminescence can provide an early warning of chemical contamination.

Bioluminescence has evolved independently at least forty separate times across the tree of life. I'll leave you with that thought.`,
    questions: [
      { id:1, type:"fill", q:"The enzyme that enables bioluminescence is called _____.", answer:"luciferase", hint:"Two chemical names are mentioned — listen for the enzyme." },
      { id:2, type:"fill", q:"Bioluminescence converts _____ to 95% of its energy into visible light.", answer:"90", hint:"A percentage range is given." },
      { id:3, type:"mcq",  q:"Why is blue-green light most common in the ocean?",
        opts:["A. It is most visible to humans","B. It travels furthest through seawater","C. It requires least energy","D. It is least visible to predators"], answer:"B", hint:"The lecturer explains the biological reason." },
      { id:4, type:"mcq",  q:"How does the anglerfish use bioluminescence?",
        opts:["A. For camouflage","B. To communicate with mates","C. As a lure to attract prey","D. As a defensive mechanism"], answer:"C", hint:"The first function described is predation." },
      { id:5, type:"fill", q:"About _____% of deep ocean marine species exhibit bioluminescence.", answer:"76", hint:"A specific percentage is stated." },
    ],
  },
];

// ── Audio Player Component ────────────────────────────────────────────────────
function AudioPlayer({
  section, onFinished,
}: {
  section: Section;
  onFinished: () => void;
}) {
  const [voices,   setVoices]   = useState<SpeechSynthesisVoice[]>([]);
  const [voice,    setVoice]    = useState<SpeechSynthesisVoice | null>(null);
  const [rate,     setRate]     = useState(0.85);
  const [status,   setStatus]   = useState<"idle"|"reading"|"playing"|"paused"|"done">("idle");
  const [readTime, setReadTime] = useState(45);
  const [progress, setProgress] = useState(0);

  const timerRef     = useRef<ReturnType<typeof setInterval>|null>(null);
  const progressRef  = useRef<ReturnType<typeof setInterval>|null>(null);
  const keepAliveRef = useRef<ReturnType<typeof setInterval>|null>(null);
  const chunksRef    = useRef<string[]>([]);
  const chunkIdxRef  = useRef(0);
  const stoppedRef   = useRef(false);
  const totalChunksRef = useRef(0);

  const clearAll = useCallback(() => {
    if (timerRef.current)     clearInterval(timerRef.current);
    if (progressRef.current)  clearInterval(progressRef.current);
    if (keepAliveRef.current) clearInterval(keepAliveRef.current);
  }, []);

  // Load voices
  useEffect(() => {
    const load = () => {
      const v = window.speechSynthesis.getVoices();
      setVoices(v.filter(x => x.lang.startsWith("en")));
      const preferred =
        v.find(x => x.lang === "en-GB") ||
        v.find(x => x.lang === "en-AU") ||
        v.find(x => x.lang.startsWith("en-US")) ||
        v[0] || null;
      setVoice(preferred);
    };
    load();
    window.speechSynthesis.onvoiceschanged = load;
    return () => {
      stoppedRef.current = true;
      window.speechSynthesis.cancel();
      clearAll();
    };
  }, [clearAll]);

  // Split transcript into sentence-sized chunks (~200 chars max)
  // This fixes Chrome's bug of stopping after ~15 seconds on long texts
  const buildChunks = useCallback((text: string): string[] => {
    // Split on sentence boundaries
    const sentences = text
      .replace(/([.!?])\s+/g, "$1\n")
      .split("\n")
      .map(s => s.trim())
      .filter(Boolean);

    const chunks: string[] = [];
    let current = "";
    for (const sentence of sentences) {
      if ((current + " " + sentence).length > 220) {
        if (current) chunks.push(current.trim());
        current = sentence;
      } else {
        current = current ? current + " " + sentence : sentence;
      }
    }
    if (current.trim()) chunks.push(current.trim());
    return chunks;
  }, []);

  const speakChunk = useCallback((idx: number) => {
    if (stoppedRef.current) return;
    const chunks = chunksRef.current;
    if (idx >= chunks.length) {
      // All chunks done
      clearAll();
      setProgress(100);
      setStatus("done");
      onFinished();
      return;
    }

    const utter = new SpeechSynthesisUtterance(chunks[idx]);
    utter.rate = rate;
    if (voice) utter.voice = voice;

    utter.onend = () => {
      if (stoppedRef.current) return;
      chunkIdxRef.current = idx + 1;
      setProgress(Math.round(((idx + 1) / totalChunksRef.current) * 100));
      speakChunk(idx + 1);
    };

    utter.onerror = (e) => {
      // Ignore "interrupted" errors from cancel() — just skip to next chunk
      if (e.error === "interrupted" || stoppedRef.current) return;
      chunkIdxRef.current = idx + 1;
      speakChunk(idx + 1);
    };

    window.speechSynthesis.speak(utter);
  }, [rate, voice, onFinished, clearAll]);

  const playAudio = useCallback(() => {
    stoppedRef.current = false;
    // IMPORTANT: cancel + 250ms delay before speaking — fixes "no sound" after cancel
    window.speechSynthesis.cancel();
    clearAll();

    const chunks = buildChunks(section.transcript);
    chunksRef.current    = chunks;
    totalChunksRef.current = chunks.length;
    chunkIdxRef.current  = 0;
    setProgress(0);
    setStatus("playing");

    // Chrome keepalive: resume every 10s to prevent silent pause bug
    keepAliveRef.current = setInterval(() => {
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) {
        window.speechSynthesis.pause();
        window.speechSynthesis.resume();
      }
    }, 10000);

    // Delay start slightly after cancel to let browser reset
    setTimeout(() => {
      if (!stoppedRef.current) speakChunk(0);
    }, 250);
  }, [section.transcript, buildChunks, speakChunk, clearAll]);

  const startReading = () => {
    setStatus("reading");
    setReadTime(45);
    timerRef.current = setInterval(() => {
      setReadTime(v => {
        if (v <= 1) { clearInterval(timerRef.current!); playAudio(); return 0; }
        return v - 1;
      });
    }, 1000);
  };

  const togglePause = () => {
    if (status === "paused") {
      window.speechSynthesis.resume();
      setStatus("playing");
    } else {
      window.speechSynthesis.pause();
      setStatus("paused");
    }
  };

  const stopEarly = () => {
    stoppedRef.current = true;
    window.speechSynthesis.cancel();
    clearAll();
    setProgress(100);
    setStatus("done");
    onFinished();
  };

  return (
    <div className="bg-gray-900 text-white rounded-2xl p-5 mb-6">
      {/* Voice + speed settings (only before start) */}
      {status === "idle" && (
        <div className="space-y-3 mb-5">
          <p className="font-bold text-sm text-gray-300">⚙️ Audio Settings</p>
          <div>
            <label className="text-xs text-gray-400 block mb-1">Voice</label>
            <select value={voice?.name || ""}
              onChange={e => setVoice(voices.find(v => v.name === e.target.value) || null)}
              className="w-full bg-gray-800 border border-gray-600 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-emerald-400">
              {voices.map(v => (
                <option key={v.name} value={v.name}>{v.name} ({v.lang})</option>
              ))}
            </select>
          </div>
          <div>
            <label className="text-xs text-gray-400 block mb-1">
              Speed: {rate === 0.8 ? "Slow" : rate === 0.85 ? "Normal (Recommended)" : "Fast"}
            </label>
            <div className="flex gap-2">
              {([["0.8","🐢 Slow"],["0.85","✅ Normal"],["1.0","🐇 Fast"]] as [string,string][]).map(([r,l]) => (
                <button key={r} onClick={() => setRate(parseFloat(r))}
                  className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all
                    ${rate === parseFloat(r)
                      ? "bg-emerald-500 text-white border-emerald-600"
                      : "bg-gray-800 text-gray-300 border-gray-600 hover:border-emerald-400"}`}>
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Reading countdown */}
      {status === "reading" && (
        <div className="text-center mb-4">
          <p className="text-xs text-gray-400 mb-1 uppercase tracking-wider">Reading Time</p>
          <p className="text-5xl font-black text-emerald-400">{readTime}s</p>
          <p className="text-xs text-gray-400 mt-1">Review the questions below — audio starts automatically</p>
          <button onClick={playAudio} className="mt-3 text-xs text-emerald-400 font-semibold hover:underline">
            Skip → Play now
          </button>
        </div>
      )}

      {/* Playing / paused */}
      {(status === "playing" || status === "paused") && (
        <div className="mb-4">
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0
              ${status === "playing" ? "bg-emerald-500 animate-pulse" : "bg-gray-600"}`}>
              🎧
            </div>
            <div>
              <p className="font-bold text-sm">Section {section.num} Audio</p>
              <p className="text-xs text-gray-400">{status === "paused" ? "Paused" : "Playing..."}</p>
            </div>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-emerald-500 rounded-full transition-all duration-1000"
              style={{ width: `${progress}%` }} />
          </div>
          <div className="flex gap-2">
            <button onClick={togglePause}
              className="flex-1 bg-gray-700 hover:bg-gray-600 py-2.5 rounded-xl text-sm font-bold transition-all">
              {status === "paused" ? "▶ Resume" : "⏸ Pause"}
            </button>
            <button onClick={stopEarly}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 py-2.5 rounded-xl text-sm font-bold transition-all">
              ⏹ Stop & Answer
            </button>
          </div>
        </div>
      )}

      {/* Done */}
      {status === "done" && (
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">✓</div>
          <div>
            <p className="font-bold text-sm text-emerald-400">Audio Complete</p>
            <p className="text-xs text-gray-400">Now answer all questions below</p>
          </div>
        </div>
      )}

      {/* Start button */}
      {status === "idle" && (
        <button onClick={startReading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm transition-all"
          style={{ boxShadow: "0 4px 0 #065f46" }}>
          🎧 Start Listening
        </button>
      )}

      {/* Replay after done */}
      {status === "done" && (
        <button onClick={playAudio}
          className="w-full bg-gray-700 hover:bg-gray-600 text-white py-2.5 rounded-xl text-sm font-bold transition-all mt-2">
          ↺ Replay Audio
        </button>
      )}
    </div>
  );
}

// ── Main Page Component ───────────────────────────────────────────────────────
export default function ListeningPage() {
  const [activeSection,   setActiveSection]   = useState<Section | null>(null);
  const [answers,         setAnswers]         = useState<Answers>({});
  const [results,         setResults]         = useState<Results>(null);
  const [showTranscript,  setShowTranscript]  = useState(false);
  const [audioFinished,   setAudioFinished]   = useState(false);

  function start(s: Section) {
    // Fully reset speech engine before loading new section
    window.speechSynthesis.cancel();
    setTimeout(() => {
      setActiveSection(s);
      setAnswers({});
      setResults(null);
      setShowTranscript(false);
      setAudioFinished(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 300);
  }

  function submit() {
    if (!activeSection) return;
    const total = activeSection.questions.length;
    const score = activeSection.questions.reduce((acc, q) => {
      const given = (answers[q.id] ?? "").toLowerCase().trim();
      return acc + (given === q.answer.toLowerCase() ? 1 : 0);
    }, 0);
    setResults({ score, total });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ── Active section view ───────────────────────────────────────────────────
  if (activeSection) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/ielts" className="hover:text-emerald-600 transition-colors">IELTS</Link>
          <span>›</span>
          <Link href="/ielts/listening" className="hover:text-emerald-600 transition-colors">Listening</Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">Section {activeSection.num}</span>
        </div>

        {/* Results banner */}
        {results && (
          <div className={`rounded-2xl p-6 mb-6 text-center border
            ${results.score >= Math.ceil(results.total * 0.7)
              ? "bg-green-50 border-green-200"
              : results.score >= Math.ceil(results.total * 0.5)
              ? "bg-amber-50 border-amber-200"
              : "bg-red-50 border-red-200"}`}>
            <p className="text-5xl font-black mb-1"
               style={{ color: results.score >= Math.ceil(results.total * 0.7) ? "#16a34a" : results.score >= Math.ceil(results.total * 0.5) ? "#d97706" : "#dc2626" }}>
              {results.score} / {results.total}
            </p>
            <p className="text-sm text-gray-500 mb-1">
              Estimated band: <strong>{getBand(results.score, results.total)}</strong>
            </p>
            <p className="font-semibold text-gray-700 mb-4">
              {results.score === results.total ? "🎉 Perfect score!" : results.score >= Math.ceil(results.total * 0.7) ? "👍 Good work!" : "📚 Keep practising!"}
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <button onClick={() => setShowTranscript(v => !v)}
                className="text-sm text-emerald-600 font-semibold border border-emerald-300 px-4 py-2 rounded-xl hover:bg-emerald-50">
                {showTranscript ? "Hide" : "Show"} Transcript
              </button>
              <button onClick={() => { setActiveSection(null); window.speechSynthesis.cancel(); }}
                className="bg-emerald-600 text-white px-5 py-2 rounded-xl font-bold text-sm hover:bg-emerald-700">
                Try Another Section
              </button>
            </div>
          </div>
        )}

        {/* Section context */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-5">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs bg-emerald-100 text-emerald-700 font-bold px-2.5 py-1 rounded-full">
              Section {activeSection.num} of 4
            </span>
          </div>
          <h2 className="font-bold text-emerald-900 mb-1">{activeSection.title}</h2>
          <p className="text-emerald-700 text-sm">{activeSection.context}</p>
        </div>

        {/* Audio player — only shown before results */}
        {!results && (
          <AudioPlayer
            section={activeSection}
            onFinished={() => setAudioFinished(true)}
          />
        )}

        {/* Transcript */}
        {showTranscript && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-gray-700">📄 Full Transcript</h3>
              <button onClick={() => setShowTranscript(false)} className="text-sm text-gray-400 hover:text-gray-600">Hide ✕</button>
            </div>
            <pre className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap font-sans">{activeSection.transcript}</pre>
          </div>
        )}

        {/* Show transcript link before audio done */}
        {!results && !showTranscript && !audioFinished && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 mb-5 text-sm text-amber-800">
            💡 Tip: Listen to the audio first, then answer the questions.
            <button onClick={() => setShowTranscript(true)} className="ml-2 underline font-semibold">
              Show transcript instead
            </button>
          </div>
        )}

        {/* Questions */}
        <div className="space-y-4 mb-8">
          <h3 className="font-bold text-gray-900 text-base">
            Questions (Section {activeSection.num})
          </h3>
          {activeSection.questions.map((q, i) => {
            const given   = (answers[q.id] ?? "").toLowerCase().trim();
            const correct = results ? given === q.answer.toLowerCase() : null;
            return (
              <div key={q.id}
                className={`bg-white border rounded-2xl p-5 transition-all
                  ${correct === true  ? "border-green-300 bg-green-50/40" :
                    correct === false ? "border-red-300 bg-red-50/30" :
                    "border-gray-200"}`}>
                <p className="font-semibold text-gray-900 mb-3">
                  <span className="text-emerald-600 font-black mr-2">{i + 1}.</span>
                  {q.q}
                </p>

                {q.type === "fill" ? (
                  <input type="text"
                    value={answers[q.id] ?? ""}
                    onChange={e => !results && setAnswers(a => ({ ...a, [q.id]: e.target.value }))}
                    onKeyDown={e => e.key === "Enter" && !results && submit()}
                    placeholder="Type your answer…"
                    disabled={!!results}
                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-emerald-400 disabled:bg-gray-50 disabled:text-gray-500" />
                ) : (
                  <div className="space-y-2">
                    {(q.opts ?? []).map(opt => {
                      const letter    = opt[0];
                      const chosen    = answers[q.id] === letter;
                      const isCorrect = results && letter === q.answer;
                      const isWrong   = results && chosen && letter !== q.answer;
                      return (
                        <button key={opt}
                          onClick={() => !results && setAnswers(a => ({ ...a, [q.id]: letter }))}
                          className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all
                            ${isCorrect ? "bg-green-100 border-green-400 text-green-800 font-semibold" :
                              isWrong   ? "bg-red-100 border-red-400 text-red-800" :
                              chosen    ? "bg-emerald-100 border-emerald-400 text-emerald-800 font-semibold" :
                              "border-gray-200 text-gray-700 hover:border-emerald-300 hover:bg-emerald-50/50"}`}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                )}

                {results && (
                  <div className={`mt-3 text-xs px-3 py-2 rounded-xl
                    ${correct ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {correct
                      ? `✓ Correct!`
                      : `✗ Correct answer: ${q.answer}`}
                    {q.hint && <span className="ml-2 text-gray-500">— {q.hint}</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Submit */}
        {!results && (
          <button onClick={submit}
            disabled={Object.keys(answers).length < activeSection.questions.length}
            className="w-full bg-emerald-600 text-white py-4 rounded-2xl font-bold text-base hover:bg-emerald-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ boxShadow: "0 4px 0 #065f46" }}>
            {Object.keys(answers).length < activeSection.questions.length
              ? `Answer all questions (${Object.keys(answers).length}/${activeSection.questions.length} done)`
              : "Submit Answers →"}
          </button>
        )}

        {/* Back link */}
        <div className="mt-6 text-center">
          <button onClick={() => { setActiveSection(null); window.speechSynthesis.cancel(); }}
            className="text-sm text-gray-400 hover:text-gray-600">
            ← Back to all sections
          </button>
        </div>
      </div>
    );
  }

  // ── Section hub ───────────────────────────────────────────────────────────
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/ielts" className="hover:text-emerald-600 transition-colors">IELTS</Link>
        <span>›</span>
        <span className="text-gray-700 font-medium">Listening</span>
      </div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-8">
        <span className="text-5xl">🎧</span>
        <div>
          <h1 className="text-3xl font-black text-gray-900 mb-1">IELTS Listening Practice</h1>
          <p className="text-gray-500">All 4 sections · 20 questions · Real audio via browser speech synthesis</p>
        </div>
      </div>

      {/* How it works */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 mb-8">
        <p className="font-bold text-emerald-800 mb-3">🎙️ How the Audio Works</p>
        <div className="grid sm:grid-cols-3 gap-3 text-sm text-emerald-700">
          <div className="flex gap-2">
            <span className="font-black text-emerald-500">1.</span>
            <span>Choose your voice and speed in settings</span>
          </div>
          <div className="flex gap-2">
            <span className="font-black text-emerald-500">2.</span>
            <span>45-second reading time to preview questions</span>
          </div>
          <div className="flex gap-2">
            <span className="font-black text-emerald-500">3.</span>
            <span>Audio plays automatically — answer as you listen</span>
          </div>
        </div>
      </div>

      {/* Section type overview */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {[
          { num:1, label:"Social Need",   desc:"Everyday conversation between two people",  available:true },
          { num:2, label:"Social Need",   desc:"Monologue in an everyday public context",    available:true },
          { num:3, label:"Educational",   desc:"Discussion between students / tutor",        available:true },
          { num:4, label:"Educational",   desc:"Academic lecture or monologue",              available:true },
        ].map(s => (
          <div key={s.num}
            className="bg-white border border-emerald-200 rounded-2xl p-4 text-center">
            <p className="text-2xl font-black text-emerald-600 mb-1">{s.num}</p>
            <p className="text-xs font-semibold text-gray-700 mb-1">{s.label}</p>
            <p className="text-xs text-gray-400 leading-tight">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Section cards */}
      <h2 className="text-xl font-bold text-gray-900 mb-5">Choose a Section</h2>
      <div className="grid sm:grid-cols-2 gap-5">
        {SECTIONS.map(s => (
          <div key={s.num}
            className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-emerald-300 hover:shadow-md transition-all">
            <div className="flex items-start justify-between mb-3">
              <span className="text-xs bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full font-bold">
                Section {s.num}
              </span>
              <span className="text-xs text-gray-400">{s.questions.length} questions</span>
            </div>
            <p className="font-bold text-gray-900 text-sm mb-1">{s.title.split("—")[1]?.trim()}</p>
            <p className="text-gray-500 text-xs mb-4 leading-relaxed">{s.context}</p>
            <button onClick={() => start(s)}
              className="w-full bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-all"
              style={{ boxShadow: "0 3px 0 #065f46" }}>
              🎧 Start Section {s.num} →
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link href="/ielts"
          className="inline-block text-emerald-600 text-sm font-semibold hover:underline">
          ← Back to IELTS Hub
        </Link>
      </div>
    </div>
  );
}
