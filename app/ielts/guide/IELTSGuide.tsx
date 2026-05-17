"use client";
import { useRef } from "react";
import Link from "next/link";

export default function IELTSGuidePage() {
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print styles */}
      <style>{`
        @media print {
          .no-print { display: none !important; }
          .print-area { margin: 0; padding: 20px; }
          body { background: white !important; }
          * { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        }
      `}</style>

      {/* Top bar */}
      <div className="no-print bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/ielts" className="text-sm text-gray-500 hover:text-teal-600">← IELTS Hub</Link>
            <span className="text-gray-300">|</span>
            <span className="text-sm font-semibold text-gray-700">IELTS Complete Study Guide</span>
          </div>
          <button onClick={handlePrint}
            className="flex items-center gap-2 bg-teal-600 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-teal-700 transition-all"
            style={{ boxShadow: "0 3px 0 #0F6E56" }}>
            📥 Download / Print PDF
          </button>
        </div>
      </div>

      {/* Guide content */}
      <div ref={printRef} className="print-area max-w-4xl mx-auto px-4 py-8">

        {/* Cover */}
        <div className="bg-gradient-to-br from-teal-700 to-emerald-600 text-white rounded-2xl p-8 mb-8 text-center">
          <p className="text-5xl mb-4">🎯</p>
          <h1 className="text-3xl font-black mb-2">IELTS Complete Study Guide</h1>
          <p className="text-teal-200 text-base mb-4">
            Everything you need to know — from registration to Band 9
          </p>
          <div className="flex justify-center gap-4 text-sm flex-wrap">
            <span className="bg-white/10 px-3 py-1 rounded-full">Academic & General Training</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">All 4 Skills</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Band Score System</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Free — EduForEveryone.com</span>
          </div>
        </div>

        {/* Section 1: What is IELTS */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 border-b-2 border-teal-500 pb-2 mb-5">
            1. What is IELTS?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The <strong>International English Language Testing System (IELTS)</strong> is the world's most trusted
            English language proficiency test, recognised by over 12,000 organisations across 140+ countries
            including universities, employers, and immigration authorities.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="font-black text-blue-800 mb-2">📘 Academic IELTS</p>
              <p className="text-sm text-blue-700">For university admission and professional registration (Medicine, Nursing, Engineering). Tests academic language for higher education.</p>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-xl p-4">
              <p className="font-black text-teal-800 mb-2">💼 General Training</p>
              <p className="text-sm text-teal-700">For immigration (Canada, Australia, UK PR), work visas, and practical training programmes. Tests real-world language skills.</p>
            </div>
          </div>
        </section>

        {/* Section 2: Exam Format */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 border-b-2 border-teal-500 pb-2 mb-5">
            2. Exam Format — 4 Modules
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="px-4 py-3 text-left rounded-tl-xl">Module</th>
                  <th className="px-4 py-3 text-left">Duration</th>
                  <th className="px-4 py-3 text-left">Questions</th>
                  <th className="px-4 py-3 text-left rounded-tr-xl">Format</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["🎧 Listening", "30 min + 10 min transfer", "40 questions", "4 recordings — conversations & monologues"],
                  ["📖 Reading",   "60 minutes",               "40 questions", "Academic: 3 long texts. General: Shorter practical texts"],
                  ["✍️ Writing",   "60 minutes",               "2 tasks",      "Task 1 (20 min) + Task 2 (40 min) essay"],
                  ["🗣️ Speaking",  "11–14 minutes",            "3 parts",      "Interview: Introduction → Cue Card → Discussion"],
                ].map(([mod, dur, q, fmt], i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-bold border-b border-gray-100">{mod}</td>
                    <td className="px-4 py-3 border-b border-gray-100">{dur}</td>
                    <td className="px-4 py-3 border-b border-gray-100">{q}</td>
                    <td className="px-4 py-3 border-b border-gray-100 text-gray-600">{fmt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800">
            <strong>⏱ Total test time:</strong> ~2 hours 45 minutes (Listening + Reading + Writing taken together; Speaking on a separate day)
          </div>
        </section>

        {/* Section 3: Band Score System */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 border-b-2 border-teal-500 pb-2 mb-5">
            3. Band Score System (0–9)
          </h2>
          <p className="text-gray-700 mb-4 text-sm">
            Each module is scored 0–9. Your <strong>Overall Band Score</strong> is the average of all 4 modules, rounded to the nearest 0.5.
          </p>
          <table className="w-full border-collapse text-sm mb-5">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="px-4 py-2 text-left rounded-tl-xl">Band</th>
                <th className="px-4 py-2 text-left">Level</th>
                <th className="px-4 py-2 text-left rounded-tr-xl">Description</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["9", "Expert",         "bg-emerald-500", "Full operational command — fluent, accurate in all contexts"],
                ["8", "Very Good",      "bg-green-500",   "Strong command with only occasional unsystematic errors"],
                ["7", "Good",           "bg-lime-500",    "Handles complex language well despite occasional mistakes"],
                ["6", "Competent",      "bg-yellow-400",  "Generally effective; understands complex language in familiar situations"],
                ["5", "Modest",         "bg-orange-400",  "Partial command; copes with overall meaning but makes many errors"],
                ["4", "Limited",        "bg-orange-500",  "Basic competence limited to familiar situations"],
                ["3", "Extremely Ltd",  "bg-red-400",     "Only general meaning in very familiar situations"],
              ].map(([b, l, c, d]) => (
                <tr key={b} className="border-b border-gray-100">
                  <td className="px-4 py-2">
                    <span className={`${c} text-white font-black text-sm px-2.5 py-1 rounded-lg`}>{b}</span>
                  </td>
                  <td className="px-4 py-2 font-bold text-gray-900">{l}</td>
                  <td className="px-4 py-2 text-gray-600">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Target scores */}
          <h3 className="font-black text-gray-900 mb-3">🎯 Target Scores by Destination</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["🇨🇦 Canada (Express Entry / SDS)", "6.5+ overall, min 6.0 per module"],
              ["🇬🇧 UK Universities (UG/PG)",      "6.0 (UG) to 7.5 (top PG programmes)"],
              ["🇦🇺 Australia Migration",           "6.0–7.0 depending on visa subclass"],
              ["🏥 Healthcare & Nursing",           "7.0+ in all 4 modules"],
            ].map(([dest, score]) => (
              <div key={dest} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-800">{dest}</span>
                <span className="text-sm font-black text-teal-600 ml-3 text-right">{score}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Marking Criteria */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 border-b-2 border-teal-500 pb-2 mb-5">
            4. Marking Criteria
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <p className="font-black text-gray-900 mb-3">✍️ Writing (25% each)</p>
              <div className="space-y-2">
                {[
                  ["Task Achievement/Response", "Answer every part of the prompt fully"],
                  ["Coherence & Cohesion",       "Logical paragraphing and smooth linking"],
                  ["Lexical Resource",           "Wide, precise vocabulary without repetition"],
                  ["Grammatical Range & Accuracy","Mix of simple and complex sentences"],
                ].map(([c, d]) => (
                  <div key={c} className="flex gap-2 text-sm">
                    <span className="text-teal-500 font-black mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>{c}:</strong> {d}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="font-black text-gray-900 mb-3">🗣️ Speaking (25% each)</p>
              <div className="space-y-2">
                {[
                  ["Fluency & Coherence",       "Speak smoothly without long pauses"],
                  ["Pronunciation",             "Natural intonation, rhythm, word stress"],
                  ["Lexical Resource",          "Right words and collocations naturally"],
                  ["Grammatical Range & Acc.",  "Variety of tenses and structures"],
                ].map(([c, d]) => (
                  <div key={c} className="flex gap-2 text-sm">
                    <span className="text-teal-500 font-black mt-0.5 flex-shrink-0">✓</span>
                    <span><strong>{c}:</strong> {d}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Expert Strategies */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 border-b-2 border-teal-500 pb-2 mb-5">
            5. Expert Preparation Strategies
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              { icon:"🎧", skill:"Listening", tips:[
                "Immerse in British & Australian accents via BBC, ABC podcasts",
                "Predict answers from question context before audio plays",
                "Practise active note-taking during recordings",
                "Don't dwell on missed answers — move on immediately",
              ]},
              { icon:"📖", skill:"Reading", tips:[
                "Skim passage in 30 seconds to understand theme and structure",
                "Scan for keywords from questions — don't read word by word",
                "Aim for 17–18 minutes per passage — strict timing from day 1",
                "Read questions before the passage in True/False/NG tasks",
              ]},
              { icon:"✍️", skill:"Writing", tips:[
                "Memorise structures for argument, discussion, problem-solution",
                "Plan 5 minutes — saves 15 minutes of confusion during writing",
                "Build a vocabulary bank of collocations by topic",
                "Task 2 carries double the marks of Task 1 — prioritise it",
              ]},
              { icon:"🗣️", skill:"Speaking", tips:[
                "Record yourself daily — listen back to catch errors",
                "Use signposting: 'In my opinion…', 'What I mean is…'",
                "Extend answers with reasons and examples — never one word",
                "In Part 2 (cue card), use your 1 minute prep time to plan",
              ]},
            ].map(s => (
              <div key={s.skill} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <p className="font-black text-gray-900 mb-3">{s.icon} {s.skill}</p>
                <ul className="space-y-2">
                  {s.tips.map((t, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700">
                      <span className="text-teal-500 font-bold flex-shrink-0">•</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 6: Study Plans */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 border-b-2 border-teal-500 pb-2 mb-5">
            6. Study Plans
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { days:"30-Day", emoji:"⚡", color:"bg-amber-500", for:"Advanced speakers", plan:[
                "Week 1: Full diagnostic test + identify weak areas",
                "Week 2: Intensive Writing Task 2 — 1 essay per day",
                "Week 3: Reading timed practice + Speaking Part 2 cards",
                "Week 4: 2 full mock tests + review all errors",
              ]},
              { days:"60-Day", emoji:"📈", color:"bg-teal-600", for:"Intermediate learners", plan:[
                "Weeks 1–2: Vocabulary building + grammar review",
                "Weeks 3–4: Listening practice + Reading strategies",
                "Weeks 5–6: Writing Task 1 & 2 with model essays",
                "Week 7–8: Full mock tests + Speaking practice daily",
              ]},
              { days:"90-Day", emoji:"🎯", color:"bg-indigo-600", for:"Beginners (Band 7.5+ target)", plan:[
                "Month 1: English foundations — grammar, vocabulary, accents",
                "Month 2: Skill-by-skill practice with all question types",
                "Month 3: Full mock tests, AI writing feedback, speaking recordings",
              ]},
            ].map(p => (
              <div key={p.days} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className={`${p.color} text-white font-black text-sm px-3 py-1.5 rounded-full inline-block mb-3`}>
                  {p.emoji} {p.days}
                </div>
                <p className="text-xs text-gray-500 mb-3">Best for: {p.for}</p>
                <ul className="space-y-2">
                  {p.plan.map((item, i) => (
                    <li key={i} className="text-xs text-gray-700 flex gap-2">
                      <span className="font-black text-gray-400 flex-shrink-0">{i+1}.</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 7: Quick Reference */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 border-b-2 border-teal-500 pb-2 mb-5">
            7. Quick Reference — Do's and Don'ts
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="font-black text-green-800 mb-3">✅ Do's</p>
              <ul className="space-y-2 text-sm text-green-700">
                {[
                  "Read questions BEFORE the audio in Listening",
                  "Use a variety of vocabulary — avoid word repetition",
                  "Write at least 150 words (Task 1) and 250 words (Task 2)",
                  "In Speaking, extend every answer with reasons/examples",
                  "Check spelling carefully in Listening and Reading",
                  "Plan your Writing before you start — even 5 minutes helps",
                ].map((t, i) => <li key={i} className="flex gap-2"><span>✓</span>{t}</li>)}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="font-black text-red-800 mb-3">❌ Don'ts</p>
              <ul className="space-y-2 text-sm text-red-700">
                {[
                  "Don't memorise and recite prepared speeches in Speaking",
                  "Don't leave any Listening/Reading answer blank — always guess",
                  "Don't spend more than 20 minutes on Writing Task 1",
                  "Don't copy words from the Reading passage into answers",
                  "Don't write contractions in Writing (don't → do not)",
                  "Don't panic if you miss a Listening answer — move on",
                ].map((t, i) => <li key={i} className="flex gap-2"><span>✗</span>{t}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Section 8: Official Resources */}
        <section className="mb-8">
          <h2 className="text-2xl font-black text-gray-900 border-b-2 border-teal-500 pb-2 mb-5">
            8. Official Resources
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              ["🌐 IELTS Official",        "www.ielts.org"],
              ["🇬🇧 British Council",      "www.britishcouncil.org/exam/ielts"],
              ["📘 IDP IELTS",             "www.idp.com/ielts"],
              ["📚 Cambridge English",     "www.cambridgeenglish.org/ielts"],
            ].map(([n, u]) => (
              <div key={n} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-800">{n}</span>
                <span className="text-xs text-teal-600 font-mono">{u}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <div className="bg-teal-600 text-white rounded-2xl p-5 text-center">
          <p className="font-black text-lg mb-1">EduForEveryone.com</p>
          <p className="text-teal-200 text-sm">Free education for everyone — no fees, no barriers</p>
          <p className="text-teal-300 text-xs mt-2">Practice at: eduforeveryone.com/ielts</p>
        </div>
      </div>

      {/* Bottom CTA - no print */}
      <div className="no-print max-w-4xl mx-auto px-4 pb-12 text-center">
        <button onClick={handlePrint}
          className="bg-teal-600 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-teal-700 transition-all mr-4"
          style={{ boxShadow: "0 4px 0 #0F6E56" }}>
          📥 Save as PDF
        </button>
        <Link href="/ielts"
          className="bg-gray-100 text-gray-700 px-8 py-4 rounded-2xl font-bold text-base hover:bg-gray-200 transition-all inline-block">
          ← Back to IELTS Hub
        </Link>
        <p className="text-xs text-gray-400 mt-4">
          In your browser: File → Print → Save as PDF
        </p>
      </div>
    </>
  );
}
