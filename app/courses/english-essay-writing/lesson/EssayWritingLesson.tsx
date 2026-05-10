"use client";
import { useState } from "react";
import Link from "next/link";

const QUIZ = [
  { q:"What are the three main parts of an essay?", opts:["Title, body, conclusion","Introduction, body paragraphs, conclusion","Heading, argument, summary","Hook, evidence, opinion"], ans:1, exp:"Every essay has an introduction (presents the topic and thesis), body paragraphs (develop arguments with evidence), and a conclusion (summarises and closes)." },
  { q:"What is a thesis statement?", opts:["The title of the essay","A summary of all body paragraphs","A clear one or two sentence statement of the essay's main argument","The opening hook sentence"], ans:2, exp:"The thesis statement is the essay's central claim or argument. It tells the reader exactly what position you will argue and usually appears at the end of the introduction." },
  { q:"Which sentence is the best hook for an essay about climate change?", opts:["This essay is about climate change.","Climate change is important.","Every second, humans release over 1,000 tonnes of CO₂ into the atmosphere — enough to fill 400 Olympic swimming pools.","I will discuss climate change in this essay."], ans:2, exp:"A strong hook grabs attention immediately. The statistic is specific, surprising and creates urgency — far more effective than vague opening sentences." },
  { q:"What does the acronym PEEL stand for in essay writing?", opts:["Point, Evidence, Explain, Link","Paragraph, Essay, English, Literature","Purpose, Evidence, Evaluate, Length","Plan, Edit, Expand, List"], ans:0, exp:"PEEL is a paragraph structure: Point (your argument), Evidence (a quote or fact), Explain (how evidence supports your point), Link (connect back to the thesis or to the next point)." },
  { q:"Which transition word best introduces a contrasting idea?", opts:["Furthermore","In addition","However","Therefore"], ans:2, exp:"'However' signals contrast or a counter-argument. 'Furthermore' and 'In addition' add similar ideas, while 'Therefore' introduces a conclusion or consequence." },
];

const ESSAY_PARTS = [
  {
    part:"Introduction", color:"bg-purple-50 border-purple-200", tc:"text-purple-800",
    emoji:"🎯", purpose:"Hook the reader, provide context, state your thesis",
    tips:["Start with a hook — a statistic, quote or bold statement","Give 2-3 sentences of background context","End with a clear thesis statement (your main argument)","Keep it to 10% of total word count"],
    example:`"Every year, 8 million tonnes of plastic enter the world's oceans — enough to circle the Earth 425 times. Ocean pollution has become one of the defining environmental crises of our era, threatening marine ecosystems, human health and global economies. Governments must introduce binding international legislation to reduce single-use plastics immediately."`
  },
  {
    part:"Body Paragraph", color:"bg-blue-50 border-blue-200", tc:"text-blue-800",
    emoji:"📝", purpose:"Develop one argument per paragraph using PEEL structure",
    tips:["One main idea per paragraph","Start with a clear topic sentence (Point)","Include specific evidence — quotes, data, examples","Explain HOW the evidence supports your point","Link back to thesis or transition to next point"],
    example:`"Marine wildlife is severely harmed by plastic pollution. A 2019 study in Marine Pollution Bulletin found that 100% of sea turtles examined had ingested microplastics (Schuyler et al., 2019). This demonstrates that pollution has reached a critical level — even the most isolated ocean environments are contaminated. If governments fail to act, entire species face extinction within decades."`
  },
  {
    part:"Conclusion", color:"bg-green-50 border-green-200", tc:"text-green-800",
    emoji:"🔚", purpose:"Summarise arguments and close the essay memorably",
    tips:["Restate the thesis in new words — do NOT copy it","Briefly summarise each main argument (1 sentence each)","Avoid introducing new ideas","End with a memorable closing statement","10% of total word count"],
    example:`"Ocean pollution threatens the very foundations of marine life and, by extension, human civilisation. As demonstrated, plastic waste devastates biodiversity, contaminates food chains and costs billions annually. Without urgent, coordinated international action, the consequences will be irreversible. The ocean does not belong to one nation — protecting it is the responsibility of every one of us."`
  },
];

export default function EssayWritingLesson() {
  const [tab,       setTab]       = useState<"lesson"|"structure"|"quiz">("lesson");
  const [answers,   setAnswers]   = useState<Record<number,number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [active,    setActive]    = useState(0);

  const score = QUIZ.filter((_,i) => answers[i] === QUIZ[i].ans).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/courses" className="hover:text-purple-600">Courses</Link>
        <span>/</span>
        <Link href="/courses/english-essay-writing" className="hover:text-purple-600">English</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Essay Writing</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-700 text-white rounded-2xl p-8 mb-6">
        <div className="flex items-start gap-4">
          <span className="text-5xl">✍️</span>
          <div>
            <div className="flex gap-2 mb-2 flex-wrap">
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-bold">Intermediate</span>
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">English</span>
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">⏱ 20 min</span>
            </div>
            <h1 className="text-3xl font-black mb-1">Introduction to Essay Writing</h1>
            <p className="text-purple-200">Structure, argument and style — write essays that persuade and impress</p>
          </div>
        </div>
        <div className="mt-5 grid sm:grid-cols-3 gap-3">
          {["Understand the 3-part essay structure","Write a strong thesis statement","Use PEEL to build powerful body paragraphs"].map(g => (
            <div key={g} className="bg-white/10 rounded-xl p-3 text-sm flex items-start gap-2">
              <span className="text-purple-300 flex-shrink-0">✓</span>{g}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {([["lesson","📖 Lesson"],["structure","🏗️ Structure"],["quiz","🧠 Quiz"]] as const).map(([id,label]) => (
          <button key={id} onClick={() => setTab(id)}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm border transition-all
              ${tab===id?"bg-purple-600 text-white border-purple-700":"bg-white border-gray-200 text-gray-600 hover:border-purple-300"}`}
            style={tab===id?{boxShadow:"0 3px 0 #6b21a8"}:{}}>
            {label}
          </button>
        ))}
      </div>

      {/* LESSON */}
      {tab === "lesson" && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">📌 What is an Essay?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              An <strong>essay</strong> is a piece of structured writing that presents and develops an argument or idea. Unlike creative writing, essays follow a clear logical structure and use evidence to support every claim made.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Good essays do three things: they make a <strong>clear argument</strong>, support it with <strong>relevant evidence</strong>, and present it in <strong>precise, formal language</strong>. Whether you're writing for GCSE, A-Level, university or a professional context, the fundamental principles remain the same.
            </p>
            <div className="bg-purple-50 border border-purple-100 rounded-xl p-4">
              <p className="font-bold text-purple-800 mb-2">🔑 The Golden Rule</p>
              <p className="text-purple-700 text-sm">Every sentence in an essay must serve a purpose. If a sentence does not support your thesis, introduce evidence, or link ideas together — cut it out.</p>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">🎯 The Thesis Statement</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The <strong>thesis statement</strong> is the most important sentence in your essay. It states your central argument clearly and specifically. A strong thesis is debatable (not just a fact), specific (not vague) and supportable with evidence.
            </p>
            <div className="space-y-3">
              <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="text-xs font-bold text-red-500 uppercase mb-2">❌ Weak thesis</p>
                <p className="text-sm text-red-800 italic">"Climate change is bad and we should do something about it."</p>
                <p className="text-xs text-red-600 mt-1">Too vague — what specifically should be done? Why? This could describe a million essays.</p>
              </div>
              <div className="bg-green-50 border border-green-100 rounded-xl p-4">
                <p className="text-xs font-bold text-green-500 uppercase mb-2">✅ Strong thesis</p>
                <p className="text-sm text-green-800 italic">"Governments must implement a carbon tax of at least $50 per tonne to meaningfully reduce emissions, fund renewable energy infrastructure, and meet the Paris Agreement targets by 2030."</p>
                <p className="text-xs text-green-600 mt-1">Specific, debatable, and gives a clear roadmap of what the essay will argue.</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">🏗️ PEEL Paragraph Structure</h2>
            <p className="text-gray-700 leading-relaxed mb-5">Each body paragraph should follow the PEEL structure to develop arguments clearly and logically:</p>
            <div className="space-y-3">
              {[
                { letter:"P", word:"Point", color:"bg-purple-100 text-purple-800", desc:"Your paragraph's main argument — a clear topic sentence that supports your thesis." },
                { letter:"E", word:"Evidence", color:"bg-blue-100 text-blue-800", desc:"A quote, statistic, fact or example that supports your point. Always introduce your evidence." },
                { letter:"E", word:"Explain", color:"bg-green-100 text-green-800", desc:"Explain HOW and WHY the evidence proves your point. This is the most important part." },
                { letter:"L", word:"Link", color:"bg-amber-100 text-amber-800", desc:"Connect back to your thesis or transition to the next paragraph's argument." },
              ].map(p => (
                <div key={p.word} className="flex items-start gap-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-lg flex-shrink-0 ${p.color}`}>{p.letter}</div>
                  <div className="flex-1 pt-1">
                    <p className="font-bold text-gray-900 text-sm">{p.word}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">🔗 Useful Transition Words</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { type:"Adding ideas", words:["Furthermore","In addition","Moreover","Additionally","Also"], color:"bg-blue-50 border-blue-100 text-blue-800" },
                { type:"Contrasting", words:["However","Nevertheless","On the other hand","Despite this","In contrast"], color:"bg-red-50 border-red-100 text-red-800" },
                { type:"Concluding", words:["Therefore","Thus","In conclusion","Consequently","As a result"], color:"bg-green-50 border-green-100 text-green-800" },
                { type:"Giving examples", words:["For example","For instance","Such as","To illustrate","Namely"], color:"bg-amber-50 border-amber-100 text-amber-800" },
              ].map(g => (
                <div key={g.type} className={`${g.color} border rounded-xl p-4`}>
                  <p className="font-bold text-sm mb-2">{g.type}</p>
                  <div className="flex flex-wrap gap-1">
                    {g.words.map(w => <span key={w} className="text-xs bg-white/60 rounded-full px-2 py-0.5">{w}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-purple-700 font-semibold text-sm">See the full essay structure with examples!</p>
            <button onClick={() => setTab("structure")} className="bg-purple-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-purple-700">View Structure 🏗️ →</button>
          </div>
        </div>
      )}

      {/* STRUCTURE */}
      {tab === "structure" && (
        <div className="space-y-4">
          <p className="text-sm text-gray-500 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3">Click each section to see a real example with explanation.</p>
          <div className="flex gap-2">
            {ESSAY_PARTS.map((p,i) => (
              <button key={p.part} onClick={() => setActive(i)}
                className={`flex-1 py-3 rounded-xl font-bold text-sm border transition-all ${active===i?"bg-purple-600 text-white border-purple-700":"bg-white text-gray-500 border-gray-200 hover:border-purple-300"}`}>
                {p.emoji} {p.part}
              </button>
            ))}
          </div>
          {ESSAY_PARTS.map((p,i) => active===i && (
            <div key={p.part} className={`${p.color} border rounded-2xl p-6 space-y-4`}>
              <div>
                <h3 className={`text-xl font-black ${p.tc} mb-1`}>{p.emoji} {p.part}</h3>
                <p className="text-gray-600 text-sm font-medium">{p.purpose}</p>
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 uppercase mb-2">Key Tips</p>
                <ul className="space-y-1">
                  {p.tips.map(t => (
                    <li key={t} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-purple-400 flex-shrink-0">→</span>{t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white border border-gray-100 rounded-xl p-4">
                <p className="text-xs font-bold text-gray-400 uppercase mb-2">Example (Ocean Pollution Essay)</p>
                <p className="text-sm text-gray-700 italic leading-relaxed">{p.example}</p>
              </div>
            </div>
          ))}
          <div className="bg-purple-50 border border-purple-100 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-purple-700 font-semibold text-sm">Ready to test your knowledge?</p>
            <button onClick={() => setTab("quiz")} className="bg-purple-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-purple-700">Take the Quiz 🧠 →</button>
          </div>
        </div>
      )}

      {/* QUIZ */}
      {tab === "quiz" && (
        <div className="space-y-5">
          {submitted ? (
            <>
              <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 text-center">
                <p className="text-4xl mb-2">{score>=4?"🏆":"📚"}</p>
                <p className="text-4xl font-black text-purple-600">{score}/5</p>
                <p className="font-bold text-gray-900 mt-1">{score===5?"Excellent! Essay writing mastered!":score>=3?"Good effort! Review missed questions.":"Keep practising — review the lesson!"}</p>
                <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="mt-4 bg-purple-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-purple-700">Try Again</button>
              </div>
              {QUIZ.map((q,i) => {
                const correct = answers[i] === q.ans;
                return (
                  <div key={i} className={`rounded-2xl p-4 border ${correct?"bg-purple-50 border-purple-100":"bg-red-50 border-red-100"}`}>
                    <div className="flex items-start gap-2 mb-2"><span>{correct?"✅":"❌"}</span><p className="font-semibold text-gray-900 text-sm">{q.q}</p></div>
                    {!correct && (
                      <>
                        <p className="text-sm text-red-600 ml-6">Your answer: <strong>{q.opts[answers[i]]}</strong></p>
                        <p className="text-sm text-purple-700 ml-6">Correct: <strong>{q.opts[q.ans]}</strong></p>
                        <div className="ml-6 mt-2 bg-white rounded-xl p-3 border border-red-100"><p className="text-xs font-bold text-gray-500 mb-1">💡 Explanation</p><p className="text-sm text-gray-700">{q.exp}</p></div>
                      </>
                    )}
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500">Answer all 5 questions then click Submit.</p>
              {QUIZ.map((q,i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <p className="font-bold text-gray-900 mb-4"><span className="text-purple-600 mr-2">Q{i+1}.</span>{q.q}</p>
                  <div className="space-y-2">
                    {q.opts.map((opt,j) => (
                      <button key={j} onClick={() => setAnswers(a => ({...a,[i]:j}))}
                        className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${answers[i]===j?"bg-purple-600 text-white border-purple-700":"bg-gray-50 border-gray-200 text-gray-700 hover:border-purple-300"}`}>
                        <span className="font-bold mr-2">{String.fromCharCode(65+j)}.</span>{opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length<5}
                className="w-full py-3.5 rounded-2xl font-bold bg-purple-600 text-white hover:bg-purple-700 disabled:opacity-40"
                style={Object.keys(answers).length>=5?{boxShadow:"0 4px 0 #6b21a8"}:{}}>
                {Object.keys(answers).length<5?`Answer all questions (${Object.keys(answers).length}/5)`:"Submit Quiz →"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
