"use client";
import { useState } from "react";
import Link from "next/link";

const QUIZ = [
  { q:"What is the numerator in ¾?", opts:["4","3","7","1"], ans:1, exp:"The numerator is the TOP number. In ¾, the top number is 3." },
  { q:"A pizza is cut into 8 slices. You eat 3. What fraction did you eat?", opts:["8/3","5/8","3/8","3/5"], ans:2, exp:"You ate 3 out of 8 slices → 3/8." },
  { q:"Which is an improper fraction?", opts:["2/5","1/3","7/4","3/7"], ans:2, exp:"7/4 is improper because the numerator (7) is bigger than the denominator (4)." },
  { q:"Convert 2½ to an improper fraction.", opts:["4/2","5/2","3/2","7/2"], ans:1, exp:"2½ = (2×2 + 1)/2 = 5/2." },
  { q:"Which fraction equals ½?", opts:["2/3","3/4","4/8","3/5"], ans:2, exp:"4/8 ÷ 4 = 1/2. Both are equivalent fractions." },
];

export default function FractionsLesson() {
  const [tab,      setTab]      = useState<"lesson"|"practice"|"quiz">("lesson");
  const [answers,  setAnswers]  = useState<Record<number,number>>({});
  const [submitted,setSubmitted]= useState(false);
  const [revealed, setRevealed] = useState<Record<number,boolean>>({});

  const score = QUIZ.filter((_,i) => answers[i] === QUIZ[i].ans).length;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
        <Link href="/courses" className="hover:text-teal-600">Courses</Link>
        <span>/</span>
        <Link href="/courses/mathematics" className="hover:text-teal-600">Mathematics</Link>
        <span>/</span>
        <span className="text-gray-700 font-medium">Introduction to Fractions</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-2xl p-8 mb-6">
        <div className="flex items-start gap-4">
          <span className="text-5xl">½</span>
          <div>
            <div className="flex gap-2 mb-2 flex-wrap">
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full font-bold">Elementary</span>
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">Mathematics</span>
              <span className="text-xs bg-white/20 px-2.5 py-1 rounded-full">⏱ 15 min</span>
            </div>
            <h1 className="text-3xl font-black mb-1">Introduction to Fractions</h1>
            <p className="text-teal-200">Understanding parts of a whole — numerator, denominator and types of fractions</p>
          </div>
        </div>
        {/* Learning goals */}
        <div className="mt-5 grid sm:grid-cols-3 gap-3">
          {["Understand what a fraction represents","Identify numerator and denominator","Recognise proper, improper and mixed fractions"].map(g => (
            <div key={g} className="bg-white/10 rounded-xl p-3 text-sm flex items-start gap-2">
              <span className="text-teal-300 flex-shrink-0">✓</span>{g}
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        {([["lesson","📖 Lesson"],["practice","✏️ Practice"],["quiz","🧠 Quiz"]] as const).map(([id,label]) => (
          <button key={id} onClick={() => setTab(id)}
            className={`px-5 py-2.5 rounded-xl font-bold text-sm border transition-all
              ${tab===id ? "bg-teal-600 text-white border-teal-700" : "bg-white border-gray-200 text-gray-600 hover:border-teal-300"}`}
            style={tab===id?{boxShadow:"0 3px 0 #0F6E56"}:{}}>
            {label}
          </button>
        ))}
      </div>

      {/* ── LESSON TAB ── */}
      {tab === "lesson" && (
        <div className="space-y-6">
          {/* Section 1 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">📌 What is a Fraction?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              A <strong>fraction</strong> represents a part of a whole. Imagine you have a chocolate bar divided into 6 equal pieces. If you eat 2 pieces, you have eaten <strong>2/6</strong> of the chocolate bar — two out of six equal parts.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Fractions appear everywhere in daily life: half a cup of flour in a recipe (½), a quarter past the hour on a clock (¼), or three quarters of a football match played (¾).
            </p>
            <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
              <p className="font-bold text-teal-800 mb-2">🔑 Key Idea</p>
              <p className="text-teal-700 text-sm">A fraction always describes a relationship between a <em>part</em> and a <em>whole</em>. The whole must be divided into <strong>equal</strong> parts — unequal parts do not form proper fractions.</p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">🔢 Parts of a Fraction</h2>
            <p className="text-gray-700 leading-relaxed mb-5">Every fraction has two numbers separated by a horizontal line called the <strong>vinculum</strong>:</p>

            {/* Visual */}
            <div className="flex justify-center mb-6">
              <div className="text-center">
                <div className="bg-amber-100 border-2 border-amber-300 rounded-xl px-8 py-3 text-4xl font-black text-amber-700 mb-1">3</div>
                <div className="text-gray-400 text-lg font-bold">───</div>
                <div className="bg-teal-100 border-2 border-teal-300 rounded-xl px-8 py-3 text-4xl font-black text-teal-700 mt-1">4</div>
                <div className="mt-3 flex gap-8 text-sm font-semibold">
                  <span className="text-amber-600">↑ Numerator</span>
                  <span className="text-teal-600">↑ Denominator</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
                <p className="font-black text-amber-800 mb-1">Numerator (Top)</p>
                <p className="text-amber-700 text-sm leading-relaxed">Tells you <strong>how many parts you have</strong>. In ¾, the numerator is 3 — you have 3 parts.</p>
              </div>
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-4">
                <p className="font-black text-teal-800 mb-1">Denominator (Bottom)</p>
                <p className="text-teal-700 text-sm leading-relaxed">Tells you <strong>how many equal parts the whole is divided into</strong>. In ¾, the denominator is 4 — the whole has 4 equal parts.</p>
              </div>
            </div>

            <div className="mt-4 bg-red-50 border border-red-100 rounded-xl p-4">
              <p className="font-bold text-red-800 mb-1">⚠️ Important Rule</p>
              <p className="text-red-700 text-sm">The denominator can <strong>never be zero</strong>. You cannot divide something into zero parts — it is mathematically undefined.</p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">📊 Types of Fractions</h2>
            <div className="space-y-4">
              {[
                { type:"Proper Fraction", color:"bg-blue-50 border-blue-100", tc:"text-blue-800", example:"²⁄₅", desc:"The numerator is SMALLER than the denominator. The value is less than 1.", more:"Examples: ½, ⅓, ²⁄₇, ⁵⁄₉" },
                { type:"Improper Fraction", color:"bg-purple-50 border-purple-100", tc:"text-purple-800", example:"⁷⁄₄", desc:"The numerator is LARGER than or equal to the denominator. The value is 1 or more.", more:"Examples: ⁵⁄₃, ⁸⁄₈, ¹¹⁄₄" },
                { type:"Mixed Number", color:"bg-orange-50 border-orange-100", tc:"text-orange-800", example:"1¾", desc:"A whole number combined with a proper fraction. Always equal to an improper fraction.", more:"1¾ = ⁷⁄₄ because (1×4+3)/4 = 7/4" },
              ].map(t => (
                <div key={t.type} className={`${t.color} border rounded-xl p-4 flex gap-4 items-start`}>
                  <div className="text-3xl font-black w-16 text-center flex-shrink-0">{t.example}</div>
                  <div>
                    <p className={`font-black ${t.tc} mb-1`}>{t.type}</p>
                    <p className="text-gray-700 text-sm mb-1">{t.desc}</p>
                    <p className="text-gray-500 text-xs">{t.more}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6">
            <h2 className="text-xl font-black text-gray-900 mb-4">🌍 Fractions in Real Life</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { emoji:"🍕", scene:"Pizza", eg:"You eat 3 slices of an 8-slice pizza → you ate ⅜" },
                { emoji:"🕐", scene:"Clocks", eg:"Quarter past = ¼ of the hour (15 out of 60 minutes)" },
                { emoji:"🍳", scene:"Cooking", eg:"Recipes use ½ cup, ¾ teaspoon, ⅓ tablespoon" },
                { emoji:"⚽", scene:"Sport", eg:"Half-time = the match is ½ complete" },
                { emoji:"💰", scene:"Money", eg:"50p is ½ of £1. 25p is ¼ of £1" },
                { emoji:"📏", scene:"Measurement", eg:"½ metre, ¼ kilometre, ⅓ of a litre" },
              ].map(r => (
                <div key={r.scene} className="flex items-start gap-3 bg-gray-50 rounded-xl p-3 border border-gray-100">
                  <span className="text-2xl flex-shrink-0">{r.emoji}</span>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.scene}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">{r.eg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Points */}
          <div className="bg-teal-50 border border-teal-200 rounded-2xl p-5">
            <h3 className="font-black text-teal-900 mb-3">🔑 Key Points to Remember</h3>
            <ul className="space-y-2">
              {[
                "A fraction = part ÷ whole (the whole must be divided into EQUAL parts)",
                "Numerator = top number (how many parts you have)",
                "Denominator = bottom number (how many equal parts in total) — NEVER zero",
                "Proper fraction: numerator < denominator (value < 1)",
                "Improper fraction: numerator ≥ denominator (value ≥ 1)",
                "Mixed number = whole number + proper fraction (e.g. 2½)",
              ].map(p => (
                <li key={p} className="flex items-start gap-2 text-sm text-teal-800">
                  <span className="text-teal-500 flex-shrink-0 mt-0.5">✓</span>{p}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-indigo-700 font-semibold text-sm">Ready to practise what you've learned?</p>
            <button onClick={() => setTab("practice")} className="bg-indigo-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-indigo-700">
              Practice Now ✏️ →
            </button>
          </div>
        </div>
      )}

      {/* ── PRACTICE TAB ── */}
      {tab === "practice" && (
        <div className="space-y-5">
          <p className="text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3">
            ✏️ Try each problem yourself before revealing the answer!
          </p>
          {[
            { q:"What fraction of this shape is shaded if 5 out of 8 equal parts are shaded?", hint:"Shaded parts go on top, total parts go on bottom", ans:"5/8", sol:"5 parts shaded out of 8 equal parts total → ⁵⁄₈" },
            { q:"Write ¾ in words.", hint:"Numerator gives 'three', denominator gives 'quarters'", ans:"Three quarters", sol:"3 (three) out of 4 equal parts (quarters) → three quarters" },
            { q:"Is ⁹⁄₇ a proper or improper fraction?", hint:"Compare the numerator and denominator", ans:"Improper — numerator 9 > denominator 7", sol:"Since 9 > 7, the fraction is improper. Its value is greater than 1." },
            { q:"Convert 3½ to an improper fraction.", hint:"Multiply the whole number by the denominator, then add the numerator", ans:"7/2", sol:"3 × 2 = 6, then 6 + 1 = 7. So 3½ = ⁷⁄₂" },
            { q:"A chocolate bar has 12 equal squares. Sam eats 4. Write the fraction eaten and simplify it.", hint:"Simplify by dividing both numbers by their HCF (highest common factor)", ans:"4/12 = 1/3", sol:"Sam ate 4 out of 12. HCF of 4 and 12 is 4. So 4÷4 / 12÷4 = ¹⁄₃" },
          ].map((ex, i) => {
            const show = revealed[i];
            return (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
                <div className="flex items-start gap-3 mb-4">
                  <span className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">{i+1}</span>
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{ex.q}</p>
                    <p className="text-xs text-gray-500 bg-gray-50 rounded-lg px-3 py-1.5 inline-block">💡 Hint: {ex.hint}</p>
                  </div>
                </div>
                <button onClick={() => setRevealed(r => ({...r,[i]:!r[i]}))}
                  className={`w-full py-2.5 rounded-xl text-sm font-bold border transition-all ${show?"bg-teal-600 text-white border-teal-700":"bg-white border-gray-200 text-gray-600 hover:border-teal-300"}`}>
                  {show ? "Hide Answer ↑" : "Show Answer ↓"}
                </button>
                {show && (
                  <div className="mt-3 space-y-2">
                    <div className="bg-teal-50 border border-teal-100 rounded-xl p-3">
                      <p className="text-xs font-bold text-teal-600 uppercase mb-1">Answer</p>
                      <p className="font-bold text-teal-800">{ex.ans}</p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-xl p-3">
                      <p className="text-xs font-bold text-gray-500 uppercase mb-1">Solution</p>
                      <p className="text-sm text-gray-700">{ex.sol}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="bg-teal-50 border border-teal-100 rounded-2xl p-4 flex items-center justify-between">
            <p className="text-teal-700 font-semibold text-sm">Ready to test yourself?</p>
            <button onClick={() => setTab("quiz")} className="bg-teal-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-teal-700">Take the Quiz 🧠 →</button>
          </div>
        </div>
      )}

      {/* ── QUIZ TAB ── */}
      {tab === "quiz" && (
        <div className="space-y-5">
          {submitted ? (
            <>
              <div className={`rounded-2xl p-6 text-center ${score>=4?"bg-teal-50 border border-teal-100":score>=3?"bg-amber-50 border border-amber-100":"bg-red-50 border border-red-100"}`}>
                <p className="text-4xl mb-2">{score===5?"🏆":score>=3?"👍":"📚"}</p>
                <p className="text-4xl font-black text-teal-600">{score}/5</p>
                <p className="font-bold text-gray-900 mt-1">{score===5?"Perfect! You've mastered fractions!":score>=3?"Good effort! Review the missed questions.":"Keep practising — you'll get there!"}</p>
                <button onClick={() => { setAnswers({}); setSubmitted(false); }}
                  className="mt-4 bg-teal-600 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-teal-700">
                  Try Again
                </button>
              </div>
              <div className="space-y-4">
                {QUIZ.map((q,i) => {
                  const correct = answers[i] === q.ans;
                  return (
                    <div key={i} className={`rounded-2xl p-4 border ${correct?"bg-teal-50 border-teal-100":"bg-red-50 border-red-100"}`}>
                      <div className="flex items-start gap-2 mb-2">
                        <span>{correct?"✅":"❌"}</span>
                        <p className="font-semibold text-gray-900 text-sm">{q.q}</p>
                      </div>
                      {!correct && (
                        <>
                          <p className="text-sm text-red-600 ml-6">Your answer: <strong>{q.opts[answers[i]]}</strong></p>
                          <p className="text-sm text-teal-700 ml-6">Correct: <strong>{q.opts[q.ans]}</strong></p>
                          <div className="ml-6 mt-2 bg-white rounded-xl p-3 border border-red-100">
                            <p className="text-xs font-bold text-gray-500 mb-1">💡 Explanation</p>
                            <p className="text-sm text-gray-700">{q.exp}</p>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-gray-500">Answer all 5 questions then click Submit.</p>
              {QUIZ.map((q,i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <p className="font-bold text-gray-900 mb-4"><span className="text-teal-600 mr-2">Q{i+1}.</span>{q.q}</p>
                  <div className="space-y-2">
                    {q.opts.map((opt,j) => (
                      <button key={j} onClick={() => setAnswers(a => ({...a,[i]:j}))}
                        className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-all
                          ${answers[i]===j?"bg-teal-600 text-white border-teal-700":"bg-gray-50 border-gray-200 text-gray-700 hover:border-teal-300 hover:bg-teal-50"}`}>
                        <span className="font-bold mr-2">{String.fromCharCode(65+j)}.</span>{opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
              <button onClick={() => setSubmitted(true)} disabled={Object.keys(answers).length < 5}
                className="w-full py-3.5 rounded-2xl font-bold text-base transition-all bg-teal-600 text-white hover:bg-teal-700 disabled:opacity-40 disabled:cursor-not-allowed"
                style={Object.keys(answers).length>=5?{boxShadow:"0 4px 0 #0F6E56"}:{}}>
                {Object.keys(answers).length < 5 ? `Answer all questions (${Object.keys(answers).length}/5)` : "Submit Quiz →"}
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
