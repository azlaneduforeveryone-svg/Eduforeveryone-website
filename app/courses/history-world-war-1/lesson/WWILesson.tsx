"use client";
import { useState } from "react";
import Link from "next/link";

const QUIZ = [
  { q:"What does the acronym MAIN stand for in WWI causes?",
    opts:["Militarism, Alliances, Imperialism, Nationalism","Military, Army, Intelligence, Navy","Maps, Artillery, Industry, Nationalism","Monarchy, Alliances, Invasion, Navy"],
    ans:0, exp:"MAIN is the key acronym historians use: Militarism (arms race), Alliances (rival treaty blocs), Imperialism (competition for colonies), Nationalism (pride and ethnic tensions). All four combined to create the conditions for war." },
  { q:"Which event directly triggered the outbreak of WWI?",
    opts:["Germany invaded France","The sinking of the Lusitania","Assassination of Archduke Franz Ferdinand of Austria-Hungary","Britain declared war on Germany"],
    ans:2, exp:"On 28 June 1914, Archduke Franz Ferdinand (heir to the Austro-Hungarian throne) was assassinated in Sarajevo by Gavrilo Princip, a Bosnian-Serb nationalist. This triggered the alliance system and led to declarations of war within weeks." },
  { q:"Which two rival alliance blocs faced each other in WWI?",
    opts:["NATO and the Warsaw Pact","The Triple Entente and the Triple Alliance (Central Powers)","The Allied Powers and the Axis Powers","The Commonwealth and the Ottoman Empire"],
    ans:1, exp:"The Triple Entente (France, Britain, Russia) faced the Triple Alliance / Central Powers (Germany, Austria-Hungary, Italy — though Italy later switched sides). These rigid alliances meant a local conflict quickly became a world war." },
  { q:"What was the 'Schlieffen Plan'?",
    opts:["Britain's naval blockade of Germany","Germany's plan to quickly defeat France through Belgium, then face Russia","Austria-Hungary's plan to invade Serbia","France's defensive strategy along the Maginot Line"],
    ans:1, exp:"The Schlieffen Plan was Germany's military strategy to avoid a two-front war: rapidly knock out France by sweeping through neutral Belgium, then redirect forces east to fight Russia. Invading Belgium brought Britain into the war." },
  { q:"Which of these was a LONG-TERM cause of WWI rather than a short-term trigger?",
    opts:["The assassination of Franz Ferdinand","Austria-Hungary's ultimatum to Serbia","The decades-long European arms race and military build-up","Germany's declaration of war on Russia"],
    ans:2, exp:"The decades-long arms race (especially the Anglo-German naval rivalry) was a long-term cause that built tensions over years. The assassination, ultimatum and declarations of war were all short-term triggers that ignited already-existing tensions." },
];

const PRACTICE = [
  { q:"Name the four MAIN causes of WWI.", hint:"Think of the acronym — one word for each letter.",
    ans:"Militarism, Alliances, Imperialism, Nationalism." },
  { q:"Who was assassinated on 28 June 1914 and where?", hint:"He was the heir to a throne in central Europe.",
    ans:"Archduke Franz Ferdinand of Austria-Hungary was assassinated in Sarajevo, Bosnia." },
  { q:"Why did Britain enter WWI?", hint:"Think about which country Germany had to march through.",
    ans:"Germany invaded neutral Belgium to execute the Schlieffen Plan. Britain had guaranteed Belgian neutrality by treaty, so it declared war on Germany." },
  { q:"What was the 'blank cheque' given by Germany to Austria-Hungary?", hint:"Think about what Germany promised before Austria declared war on Serbia.",
    ans:"Germany gave Austria-Hungary unconditional support ('blank cheque') to take whatever action it chose against Serbia, encouraging the escalation of the conflict." },
  { q:"How did nationalism contribute to the outbreak of WWI?", hint:"Think about Slavic peoples in the Austro-Hungarian Empire.",
    ans:"Nationalism created tensions as ethnic groups (especially Slavs in Austria-Hungary) sought self-determination. Pan-Slavism encouraged Serbian ambitions and threatened the multi-ethnic Austro-Hungarian Empire, fuelling the conditions that led to assassination and war." },
];

const TIMELINE = [
  { date:"28 June 1914",    event:"Archduke Franz Ferdinand assassinated in Sarajevo",        type:"trigger" },
  { date:"28 July 1914",    event:"Austria-Hungary declares war on Serbia",                    type:"escalation" },
  { date:"1 August 1914",   event:"Germany declares war on Russia",                            type:"escalation" },
  { date:"3 August 1914",   event:"Germany declares war on France, invades Belgium",           type:"escalation" },
  { date:"4 August 1914",   event:"Britain declares war on Germany — WWI fully begins",        type:"world" },
  { date:"1914–1918",       event:"Four years of global warfare across Europe and beyond",     type:"war" },
];

const TYPE_COLORS: Record<string,string> = {
  trigger:"bg-red-100 text-red-700 border-red-200",
  escalation:"bg-orange-100 text-orange-700 border-orange-200",
  world:"bg-purple-100 text-purple-700 border-purple-200",
  war:"bg-gray-100 text-gray-700 border-gray-200",
};

export default function WWILesson() {
  const [tab,       setTab]       = useState<"lesson"|"practice"|"quiz">("lesson");
  const [answers,   setAnswers]   = useState<Record<number,number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [revealed,  setRevealed]  = useState<Record<number,boolean>>({});
  const [hints,     setHints]     = useState<Record<number,boolean>>({});

  const score = QUIZ.filter((_,i) => answers[i] === QUIZ[i].ans).length;

  const handleSubmit = () => {
    const r: Record<number,boolean> = {};
    QUIZ.forEach((q,i) => { if (answers[i] !== q.ans) r[i] = true; });
    setRevealed(r); setSubmitted(true);
  };

  const reset = () => {
    setAnswers({}); setRevealed({}); setSubmitted(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/courses" className="hover:text-teal-600">Courses</Link>
        <span>/</span>
        <Link href="/courses/history-world-war-2" className="hover:text-teal-600">History</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Causes of World War I</span>
      </nav>

      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-800 text-white rounded-2xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <span className="text-5xl">🌍</span>
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="text-xs font-bold bg-white/20 px-2.5 py-1 rounded-full">History</span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">Middle School · High School</span>
              <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full">~20 min</span>
            </div>
            <h1 className="text-2xl font-black mb-1">Causes of World War I</h1>
            <p className="text-red-200 text-sm">
              Understand the long-term tensions and short-term triggers that plunged the world into war in 1914.
            </p>
          </div>
        </div>
        {/* Progress tabs */}
        <div className="flex gap-2 mt-5">
          {(["lesson","practice","quiz"] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-xl text-sm font-bold capitalize transition-all
                ${tab===t ? "bg-white text-red-700" : "bg-white/10 text-white hover:bg-white/20"}`}>
              {t === "lesson" ? "📖 Lesson" : t === "practice" ? "✏️ Practice" : "🧠 Quiz"}
            </button>
          ))}
        </div>
      </div>

      {/* ── LESSON TAB ── */}
      {tab === "lesson" && (
        <div className="space-y-6">

          {/* Key summary */}
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5">
            <h2 className="font-black text-amber-900 mb-3">🔑 Key Concept: The MAIN Causes</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { letter:"M", word:"Militarism",   desc:"Nations built up massive armies and navies", color:"bg-red-100 text-red-800 border-red-200" },
                { letter:"A", word:"Alliances",    desc:"Rival treaty blocs locked nations into conflict", color:"bg-orange-100 text-orange-800 border-orange-200" },
                { letter:"I", word:"Imperialism",  desc:"Competition for colonies created rivalries", color:"bg-blue-100 text-blue-800 border-blue-200" },
                { letter:"N", word:"Nationalism",  desc:"Pride and ethnic tensions destabilised empires", color:"bg-green-100 text-green-800 border-green-200" },
              ].map(c => (
                <div key={c.letter} className={`${c.color} border rounded-xl p-3 text-center`}>
                  <p className="text-3xl font-black mb-1">{c.letter}</p>
                  <p className="font-bold text-sm mb-1">{c.word}</p>
                  <p className="text-xs leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lesson content */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-5">
            <h2 className="text-xl font-black text-gray-900">Why Did WWI Break Out?</h2>

            <p className="text-gray-700 leading-relaxed">
              World War I (1914–1918) was one of the deadliest conflicts in human history, killing over 17 million people.
              It did not begin with a single cause — rather, it was the result of decades of tension that finally exploded
              in the summer of 1914. Historians use the acronym <strong>MAIN</strong> to explain the four long-term causes.
            </p>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-black text-gray-900 mb-1">🪖 1. Militarism</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  By the early 1900s, European nations — especially Britain and Germany — were locked in a fierce arms race.
                  Germany dramatically expanded its navy to challenge British naval supremacy. Generals and politicians glorified
                  military strength, and huge conscript armies were seen as signs of national power. This culture of militarism
                  meant that when war came, nations were not just ready — they were eager.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-black text-gray-900 mb-1">🤝 2. Alliances</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Europe was divided into two armed camps. The <strong>Triple Entente</strong> linked France, Russia and Britain.
                  The <strong>Triple Alliance</strong> connected Germany, Austria-Hungary and Italy. These alliances were designed
                  to deter war — but instead turned a local dispute into a continental catastrophe. When Austria-Hungary declared
                  war on Serbia, the alliance system dragged in Russia, then Germany, then France, then Britain within just weeks.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-black text-gray-900 mb-1">🌐 3. Imperialism</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  European powers competed aggressively for colonies in Africa and Asia. Britain controlled a vast empire;
                  Germany, a newer nation, felt it deserved its own "place in the sun." These colonial rivalries created
                  repeated crises — especially over Morocco in 1905 and 1911 — that strained diplomatic relations and deepened
                  mutual suspicions between the great powers.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-black text-gray-900 mb-1">🏴 4. Nationalism</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Intense national pride — and the desire of ethnic groups to have their own independent states — destabilised
                  multi-ethnic empires. In the Balkans, Pan-Slavic nationalism (the idea that Slavic peoples should unite)
                  threatened Austria-Hungary, whose empire included millions of Slavs. Serbian ambitions to unite South Slavs
                  directly challenged Austro-Hungarian authority — creating the powder keg that the assassination of Franz
                  Ferdinand would ignite.
                </p>
              </div>
            </div>
          </div>

          {/* The spark */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">💥 The Spark: June 28, 1914</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              On a sunny Sunday morning in Sarajevo, Bosnia, Archduke Franz Ferdinand — heir to the Austro-Hungarian throne —
              was shot dead by 19-year-old Gavrilo Princip, a Bosnian-Serb nationalist with links to a secret society called
              the Black Hand. His wife Sophie was also killed.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Austria-Hungary blamed Serbia and issued a harsh ultimatum. Serbia accepted most — but not all — conditions.
              Austria-Hungary declared war anyway. Russia began mobilising to defend Serbia. Germany declared war on Russia.
              France was pulled in through its alliance with Russia. Germany invaded Belgium to execute the Schlieffen Plan.
              Britain declared war on Germany because of the Belgian invasion.
            </p>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-sm font-bold text-gray-700 mb-1">💬 Key Quote</p>
              <p className="text-sm text-gray-600 italic">
                "The lights are going out all over Europe; we shall not see them lit again in our lifetime."
              </p>
              <p className="text-xs text-gray-400 mt-1">— Sir Edward Grey, British Foreign Secretary, August 3, 1914</p>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">📅 Timeline to War</h2>
            <div className="space-y-3">
              {TIMELINE.map((t,i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-32">
                    <span className="text-xs font-bold text-gray-500">{t.date}</span>
                  </div>
                  <div className={`flex-1 border rounded-xl px-3 py-2 text-sm font-medium ${TYPE_COLORS[t.type]}`}>
                    {t.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key points */}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-5">
            <h2 className="font-black text-teal-900 mb-3">✅ What to Remember</h2>
            <ul className="space-y-2">
              {[
                "MAIN = Militarism, Alliances, Imperialism, Nationalism — the four long-term causes",
                "The assassination of Franz Ferdinand was the spark, not the cause",
                "The alliance system turned a local dispute into a world war within weeks",
                "The Schlieffen Plan (invading Belgium) brought Britain into the war",
                "WWI lasted from 1914 to 1918, killing over 17 million people",
              ].map((p,i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-teal-800">
                  <span className="text-teal-500 font-bold mt-0.5">✓</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <button onClick={() => setTab("practice")}
            className="w-full bg-red-700 text-white py-3 rounded-xl font-bold hover:bg-red-800 transition-all"
            style={{ boxShadow:"0 4px 0 #7f1d1d" }}>
            Start Practice Questions ✏️
          </button>
        </div>
      )}

      {/* ── PRACTICE TAB ── */}
      {tab === "practice" && (
        <div className="space-y-4">
          <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-2">
            <h2 className="font-black text-gray-900 mb-1">✏️ Practice Questions</h2>
            <p className="text-gray-500 text-sm">Answer in your own words. Use the hint if you need help.</p>
          </div>
          {PRACTICE.map((p,i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
              <p className="font-bold text-gray-900 mb-3">Q{i+1}. {p.q}</p>
              {!hints[i] && (
                <button onClick={() => setHints(h => ({...h,[i]:true}))}
                  className="text-xs text-amber-600 border border-amber-200 bg-amber-50 px-3 py-1.5 rounded-lg font-semibold hover:bg-amber-100 transition-all mb-3">
                  💡 Show Hint
                </button>
              )}
              {hints[i] && (
                <div className="bg-amber-50 border border-amber-100 rounded-xl px-4 py-2 mb-3">
                  <p className="text-xs text-amber-700 font-semibold">Hint: {p.hint}</p>
                </div>
              )}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="text-xs font-bold text-gray-400 mb-1">MODEL ANSWER</p>
                <p className="text-sm text-gray-700 leading-relaxed">{p.ans}</p>
              </div>
            </div>
          ))}
          <button onClick={() => setTab("quiz")}
            className="w-full bg-red-700 text-white py-3 rounded-xl font-bold hover:bg-red-800 transition-all"
            style={{ boxShadow:"0 4px 0 #7f1d1d" }}>
            Take the Quiz 🧠
          </button>
        </div>
      )}

      {/* ── QUIZ TAB ── */}
      {tab === "quiz" && (
        <div className="space-y-4">
          {!submitted ? (
            <>
              <div className="bg-white border border-gray-200 rounded-2xl p-5 mb-2">
                <h2 className="font-black text-gray-900 mb-1">🧠 Quiz — WWI Causes</h2>
                <p className="text-gray-500 text-sm">5 questions · choose the best answer</p>
              </div>
              {QUIZ.map((q,i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <p className="font-bold text-gray-900 mb-3">Q{i+1}. {q.q}</p>
                  <div className="space-y-2">
                    {q.opts.map((opt,j) => (
                      <button key={j} onClick={() => setAnswers(a => ({...a,[i]:j}))}
                        className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium border transition-all
                          ${answers[i]===j ? "bg-red-600 text-white border-red-700" : "bg-gray-50 border-gray-200 text-gray-700 hover:border-red-300 hover:bg-red-50"}`}>
                        <span className="font-bold mr-2">{String.fromCharCode(65+j)}.</span>{opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={handleSubmit}
                disabled={Object.keys(answers).length < QUIZ.length}
                className="w-full bg-red-700 text-white py-3 rounded-xl font-bold hover:bg-red-800 disabled:opacity-50 transition-all"
                style={{ boxShadow:"0 4px 0 #7f1d1d" }}>
                Submit Quiz
              </button>
            </>
          ) : (
            <div className="space-y-4">
              {/* Score card */}
              <div className={`rounded-2xl p-6 text-center ${score>=4?"bg-teal-50 border border-teal-100":score>=3?"bg-amber-50 border border-amber-100":"bg-red-50 border border-red-100"}`}>
                <p className="text-4xl mb-2">{score>=4?"🏆":score>=3?"👍":"📚"}</p>
                <p className="text-3xl font-black text-gray-900">{score}/{QUIZ.length}</p>
                <p className="text-gray-600 mt-1">{score>=4?"Excellent — you know your WWI history!":score>=3?"Good effort — review the sections you missed.":"Revisit the lesson and try again!"}</p>
              </div>
              {/* Review */}
              {QUIZ.map((q,i) => (
                <div key={i} className={`rounded-2xl p-5 border ${answers[i]===q.ans?"bg-teal-50 border-teal-100":"bg-red-50 border-red-100"}`}>
                  <p className="font-bold text-gray-900 mb-2">{answers[i]===q.ans?"✅":"❌"} Q{i+1}. {q.q}</p>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Correct answer: <span className="text-teal-700">{q.opts[q.ans]}</span></p>
                  <p className="text-sm text-gray-600">{q.exp}</p>
                </div>
              ))}
              <div className="flex gap-3">
                <button onClick={reset}
                  className="flex-1 bg-red-700 text-white py-3 rounded-xl font-bold hover:bg-red-800 transition-all">
                  Try Again
                </button>
                <button onClick={() => setTab("lesson")}
                  className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-200 transition-all">
                  Review Lesson
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
