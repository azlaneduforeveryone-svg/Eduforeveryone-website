"use client";
import { useState } from "react";
import Link from "next/link";

const QUIZ = [
  { q:"Who invented the microscope that led to the discovery of cells?", opts:["Isaac Newton","Robert Hooke","Charles Darwin","Louis Pasteur"], ans:1, exp:"Robert Hooke first observed and named cells in 1665, viewing cork under a microscope." },
  { q:"What is the control centre of the cell called?", opts:["Mitochondria","Cell membrane","Nucleus","Ribosome"], ans:2, exp:"The nucleus contains the cell's DNA and controls all cell activities — it is the cell's command centre." },
  { q:"Which organelle is known as the 'powerhouse of the cell'?", opts:["Nucleus","Mitochondria","Vacuole","Golgi body"], ans:1, exp:"Mitochondria produce ATP (energy) through cellular respiration — earning them the 'powerhouse' nickname." },
  { q:"What is the main difference between plant and animal cells?", opts:["Plant cells have a nucleus","Plant cells have a cell wall and chloroplasts","Animal cells are smaller","Animal cells have mitochondria"], ans:1, exp:"Plant cells have a rigid cell wall, chloroplasts (for photosynthesis) and a large central vacuole — animal cells have none of these." },
  { q:"Which process do plant cells use to make food?", opts:["Respiration","Digestion","Photosynthesis","Osmosis"], ans:2, exp:"Photosynthesis occurs in chloroplasts — plants use sunlight, water and CO₂ to produce glucose and oxygen." },
];

const ORGANELLES = [
  { name:"Nucleus", emoji:"🔵", color:"bg-blue-50 border-blue-200", tc:"text-blue-800", desc:"The control centre. Contains DNA in chromosomes. Controls protein synthesis and cell reproduction.", animal:true, plant:true },
  { name:"Cell Membrane", emoji:"🟡", color:"bg-yellow-50 border-yellow-200", tc:"text-yellow-800", desc:"A flexible lipid bilayer surrounding every cell. Controls what enters and exits the cell (selective permeability).", animal:true, plant:true },
  { name:"Mitochondria", emoji:"🔴", color:"bg-red-50 border-red-200", tc:"text-red-800", desc:"The powerhouse. Converts glucose + oxygen into ATP energy through cellular respiration. The more active a cell, the more mitochondria it has.", animal:true, plant:true },
  { name:"Cell Wall", emoji:"🟤", color:"bg-amber-50 border-amber-200", tc:"text-amber-800", desc:"A rigid layer outside the cell membrane in plant cells. Made of cellulose. Provides structural support and protection.", animal:false, plant:true },
  { name:"Chloroplast", emoji:"🟢", color:"bg-green-50 border-green-200", tc:"text-green-800", desc:"Found only in plant cells. Contains chlorophyll (green pigment). Site of photosynthesis — converts sunlight into food (glucose).", animal:false, plant:true },
  { name:"Vacuole", emoji:"🔷", color:"bg-indigo-50 border-indigo-200", tc:"text-indigo-800", desc:"Storage organelle. Plant cells have one large central vacuole that maintains turgor pressure. Animal cells have many small vacuoles.", animal:true, plant:true },
  { name:"Ribosome", emoji:"⚫", color:"bg-gray-50 border-gray-200", tc:"text-gray-800", desc:"Tiny organelles found in all cells. The site of protein synthesis — they read mRNA instructions to build proteins.", animal:true, plant:true },
  { name:"Golgi Body", emoji:"🟠", color:"bg-orange-50 border-orange-200", tc:"text-orange-800", desc:"The cell's 'post office'. Packages and ships proteins to where they are needed — inside or outside the cell.", animal:true, plant:true },
];

export default function CellsLesson() {
  const [tab,       setTab]       = useState<"lesson"|"organelles"|"quiz">("lesson");
  const [answers,   setAnswers]   = useState<Record<number,number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [filter,    setFilter]    = useState<"all"|"animal"|"plant">("all");

  const score = QUIZ.filter((_,i) => answers[i] === QUIZ[i].ans).length;
  const filtered = ORGANELLES.filter(o => filter==="all" || (filter==="animal" ? o.animal : o.plant));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/courses" className="hover:text-teal-600">Courses</Link>
        <span>/</span>
        <Link href="/courses/science-biology-cells" className="hover:text-teal-600">Cell Biology</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Introduction to Cells</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white rounded-2xl p-8 mb-6">
        <div className="flex items-start gap-4">
          <span className="text-5xl">🔬</span>
          <div>
            <div className="flex gap-2 mb-2 flex-wrap">
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-bold">Intermediate</span>
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">Biology</span>
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">⏱ 20 min</span>
            </div>
            <h1 className="text-3xl font-black mb-1">Introduction to Cells</h1>
            <p className="text-green-200">The building blocks of all living things — structure, organelles and function</p>
          </div>
        </div>
        <div className="mt-5 grid sm:grid-cols-3 gap-3">
          {["Explain why cells are the basic unit of life","Identify key cell organelles and their functions","Compare plant and animal cells"].map(g => (
            <div key={g} className="bg-white/10 rounded-xl p-3 text-sm flex items-start gap-2">
              <span className="text-green-300 flex-shrink-0">✓</span>{g}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {([["lesson","📖 Lesson"],["organelles","🧬 Organelles"],["quiz","🧠 Quiz"]] as const).map(([id,label]) => (
          <button key={id} onClick={() => setTab(id)}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm border transition-all
              ${tab===id?"bg-green-600 text-white border-green-700":"bg-white border-gray-200 text-gray-600 hover:border-green-300"}`}
            style={tab===id?{boxShadow:"0 3px 0 #15803d"}:{}}>
            {label}
          </button>
        ))}
      </div>

      {/* LESSON */}
      {tab === "lesson" && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">🔬 What is a Cell?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>cell</strong> is the smallest unit of life. Every living organism — from a single bacterium to a blue whale — is made of cells. Some organisms, like bacteria and amoeba, consist of just <em>one</em> cell. Humans are made of approximately <strong>37 trillion cells</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              In 1665, scientist <strong>Robert Hooke</strong> looked at a thin slice of cork under a microscope and saw tiny box-like compartments. He called them <em>cells</em> because they reminded him of monks' rooms (cells) in a monastery.
            </p>
            <div className="bg-green-50 border border-green-100 rounded-xl p-4">
              <p className="font-bold text-green-800 mb-2">🔑 The Cell Theory (3 key principles)</p>
              <ol className="space-y-1 text-green-700 text-sm">
                <li><strong>1.</strong> All living things are made of one or more cells</li>
                <li><strong>2.</strong> The cell is the basic unit of life</li>
                <li><strong>3.</strong> All cells come from pre-existing cells</li>
              </ol>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">🌿 Plant vs Animal Cells</h2>
            <p className="text-gray-700 leading-relaxed mb-5">Both plant and animal cells share many features but have important differences:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 font-bold text-gray-700 rounded-l-xl">Feature</th>
                    <th className="px-4 py-3 font-bold text-amber-700">🐾 Animal Cell</th>
                    <th className="px-4 py-3 font-bold text-green-700 rounded-r-xl">🌱 Plant Cell</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    ["Cell wall","❌ No","✅ Yes (cellulose)"],
                    ["Cell membrane","✅ Yes","✅ Yes"],
                    ["Nucleus","✅ Yes","✅ Yes"],
                    ["Mitochondria","✅ Yes","✅ Yes"],
                    ["Chloroplasts","❌ No","✅ Yes (green)"],
                    ["Vacuole","Small/many","Large central one"],
                    ["Shape","Irregular/round","Regular/rectangular"],
                  ].map(([f,a,p]) => (
                    <tr key={f} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{f}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{a}</td>
                      <td className="px-4 py-3 text-center text-gray-600">{p}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">⚡ Why Cells Matter</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { emoji:"🏗️", title:"Structure", desc:"Cells form tissues, organs and organ systems — the building blocks of all life." },
                { emoji:"⚡", title:"Energy", desc:"Cells produce energy through respiration (and photosynthesis in plants)." },
                { emoji:"🔄", title:"Reproduction", desc:"Cells divide to create new cells for growth, repair and reproduction." },
                { emoji:"📡", title:"Communication", desc:"Cells send and receive chemical signals to coordinate body functions." },
              ].map(c => (
                <div key={c.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex gap-3">
                  <span className="text-2xl flex-shrink-0">{c.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm mb-1">{c.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-green-700 font-semibold text-sm">Explore cell organelles in detail!</p>
            <button onClick={() => setTab("organelles")} className="bg-green-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-green-700">
              View Organelles 🧬 →
            </button>
          </div>
        </div>
      )}

      {/* ORGANELLES */}
      {tab === "organelles" && (
        <div className="space-y-4">
          <div className="flex gap-2">
            {(["all","animal","plant"] as const).map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-bold border capitalize transition-all
                  ${filter===f?"bg-green-600 text-white border-green-700":"bg-white text-gray-500 border-gray-200 hover:border-green-300"}`}>
                {f==="all"?"All Organelles":f==="animal"?"🐾 Animal Only":"🌱 Plant Only"}
              </button>
            ))}
          </div>
          {filtered.map(o => (
            <div key={o.name} className={`${o.color} border rounded-2xl p-5`}>
              <div className="flex items-start gap-3">
                <span className="text-3xl flex-shrink-0">{o.emoji}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className={`font-black ${o.tc} text-lg`}>{o.name}</h3>
                    {o.animal && <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-semibold">Animal</span>}
                    {o.plant  && <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-semibold">Plant</span>}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{o.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="bg-green-50 border border-green-100 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-green-700 font-semibold text-sm">Test your knowledge!</p>
            <button onClick={() => setTab("quiz")} className="bg-green-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-green-700">Take the Quiz 🧠 →</button>
          </div>
        </div>
      )}

      {/* QUIZ */}
      {tab === "quiz" && (
        <div className="space-y-5">
          {submitted ? (
            <>
              <div className="bg-green-50 border border-green-100 rounded-2xl p-6 text-center">
                <p className="text-4xl mb-2">{score>=4?"🏆":"📚"}</p>
                <p className="text-4xl font-black text-green-600">{score}/5</p>
                <p className="font-bold text-gray-900 mt-1">{score===5?"Excellent! Cell biology mastered!":score>=3?"Good work! Review missed questions.":"Keep revising — you'll crack it!"}</p>
                <button onClick={() => { setAnswers({}); setSubmitted(false); }} className="mt-4 bg-green-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-green-700">Try Again</button>
              </div>
              {QUIZ.map((q,i) => {
                const correct = answers[i] === q.ans;
                return (
                  <div key={i} className={`rounded-2xl p-4 border ${correct?"bg-green-50 border-green-100":"bg-red-50 border-red-100"}`}>
                    <div className="flex items-start gap-2 mb-2"><span>{correct?"✅":"❌"}</span><p className="font-semibold text-gray-900 text-sm">{q.q}</p></div>
                    {!correct && (
                      <>
                        <p className="text-sm text-red-600 ml-6">Your answer: <strong>{q.opts[answers[i]]}</strong></p>
                        <p className="text-sm text-green-700 ml-6">Correct: <strong>{q.opts[q.ans]}</strong></p>
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
                  <p className="font-bold text-gray-900 mb-4"><span className="text-green-600 mr-2">Q{i+1}.</span>{q.q}</p>
                  <div className="space-y-2">
                    {q.opts.map((opt,j) => (
                      <button key={j} onClick={() => setAnswers(a => ({...a,[i]:j}))}
                        className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-all ${answers[i]===j?"bg-green-600 text-white border-green-700":"bg-gray-50 border-gray-200 text-gray-700 hover:border-green-300"}`}>
                        <span className="font-bold mr-2">{String.fromCharCode(65+j)}.</span>{opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length<5}
                className="w-full py-3.5 rounded-2xl font-bold bg-green-600 text-white hover:bg-green-700 disabled:opacity-40"
                style={Object.keys(answers).length>=5?{boxShadow:"0 4px 0 #15803d"}:{}}>
                {Object.keys(answers).length<5?`Answer all questions (${Object.keys(answers).length}/5)`:"Submit Quiz →"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
