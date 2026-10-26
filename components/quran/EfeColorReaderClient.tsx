"use client";

import React, { useState } from "react";
import { EFE_QURAN_RULES, EfeRuleDetail } from "@/lib/quran/efeWaqfTajweedData";

type LanguageCode = "en" | "ur" | "hi";

export default function EfeColorReaderClient() {
  const [lang, setLang] = useState<LanguageCode>("en");
  const [activeRuleKey, setActiveRuleKey] = useState<string>("lazim");

  const currentRule: EfeRuleDetail = EFE_QURAN_RULES[activeRuleKey] || EFE_QURAN_RULES["lazim"];
  const isUrdu = lang === "ur";

  return (
    <div className="efe-quran-wrapper max-w-4xl mx-auto p-6 bg-white border border-gray-200 rounded-xl shadow-sm my-8 font-body">
      {/* Header Section */}
      <div className="efe-quran-header text-center mb-6">
        <h2 className="text-2xl font-display font-bold text-slate-900 mb-2">
          Interactive Color-Coded Quran &amp; Waqf Reader
        </h2>
        <p className="text-sm text-slate-600">
          Click any highlighted Tajweed rule or Waqf sign below to inspect its precise definition across English, Urdu, and Hindi.
        </p>
      </div>

      {/* Control Bar */}
      <div className="efe-control-bar flex flex-wrap justify-between items-center bg-slate-50 p-4 rounded-lg mb-6 border border-slate-200 gap-4">
        <span className="text-sm font-medium text-slate-700">
          <strong>Mode:</strong> Tajweed &amp; Waqf Trilingual Analysis
        </span>
        <div className="efe-lang-selector flex items-center gap-2">
          <label htmlFor="efeLangSelect" className="text-xs font-semibold uppercase tracking-wider text-slate-600">
            Language / زبان / भाषा:
          </label>
          <select
            id="efeLangSelect"
            value={lang}
            onChange={(e) => setLang(e.target.value as LanguageCode)}
            className="px-3 py-1.5 rounded border border-slate-300 font-semibold bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="en">English</option>
            <option value="ur">اردو (Urdu)</option>
            <option value="hi">हिन्दी (Hindi)</option>
          </select>
        </div>
      </div>

      {/* Sample Ayah Display Box */}
      <div className="efe-ayah-display bg-amber-50/50 border border-amber-200/80 rounded-xl p-6 mb-6 text-center">
        <div
          className="efe-arabic-text text-3xl md:text-4xl leading-[2.5] text-slate-900 my-4"
          dir="rtl"
          style={{ fontFamily: "var(--font-arabic), 'Amiri', serif" }}
        >
          الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ{" "}
          <button
            type="button"
            onClick={() => setActiveRuleKey("lazim")}
            className="efe-waqf-sign bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-bold cursor-pointer hover:bg-amber-200 transition-colors inline-block text-xl mx-1"
            title="Waqf Lazim"
          >
            مـ
          </button>{" "}
          الرَّحْمَٰنِ{" "}
          <button
            type="button"
            onClick={() => setActiveRuleKey("madd")}
            className="efe-tajweed-madd bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-bold cursor-pointer hover:bg-emerald-200 transition-colors inline-block mx-1"
            title="Madd Rule"
          >
            الرَّحِيمِ
          </button>{" "}
          مَالِكِ يَوْمِ الدِّينِ{" "}
          <button
            type="button"
            onClick={() => setActiveRuleKey("jaiz")}
            className="efe-waqf-sign bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-bold cursor-pointer hover:bg-amber-200 transition-colors inline-block text-xl mx-1"
            title="Waqf Jaiz"
          >
            ج
          </button>{" "}
          إِيَّاكَ نَعْبُدُ وَإِيَّاكَ{" "}
          <button
            type="button"
            onClick={() => setActiveRuleKey("ikhfa")}
            className="efe-tajweed-ikhfa bg-blue-100 text-blue-900 px-2 py-0.5 rounded font-bold cursor-pointer hover:bg-blue-200 transition-colors inline-block mx-1"
            title="Ikhfa Rule"
          >
            نَسْتَعِينُ
          </button>
        </div>
        <p className="text-xs text-slate-500 mt-2">
          (Click any colored badge or stop sign above to load its detailed trilingual explanation)
        </p>
      </div>

      {/* Dynamic Explanation Panel */}
      <div
        className="efe-explanation-panel bg-slate-50 border-l-4 border-teal-600 p-5 rounded-r-lg shadow-inner min-h-[110px]"
        dir={isUrdu ? "rtl" : "ltr"}
        style={{ textAlign: isUrdu ? "right" : "left" }}
      >
        <h4 className="text-lg font-bold text-teal-900 mb-2">
          {currentRule.title[lang]}
        </h4>
        <p className="text-slate-700 text-sm md:text-base leading-relaxed">
          {currentRule.desc[lang]}
        </p>
      </div>

      {/* Legend Grid */}
      <div className="efe-legend-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 mt-6">
        <button
          type="button"
          onClick={() => setActiveRuleKey("lazim")}
          className="efe-legend-item bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs cursor-pointer hover:bg-teal-50 transition-colors text-left"
        >
          <span className="efe-waqf-sign font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded mr-1 inline-block">مـ</span>
          <strong>Waqf Lāzim</strong>
          <p className="text-slate-500 mt-1">Mandatory Stop</p>
        </button>
        <button
          type="button"
          onClick={() => setActiveRuleKey("jaiz")}
          className="efe-legend-item bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs cursor-pointer hover:bg-teal-50 transition-colors text-left"
        >
          <span className="efe-waqf-sign font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 rounded mr-1 inline-block">ج</span>
          <strong>Waqf Jāʾiz</strong>
          <p className="text-slate-500 mt-1">Permissible Stop</p>
        </button>
        <button
          type="button"
          onClick={() => setActiveRuleKey("madd")}
          className="efe-legend-item bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs cursor-pointer hover:bg-teal-50 transition-colors text-left"
        >
          <span className="efe-tajweed-madd font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded mr-1 inline-block">Madd</span>
          <strong>Elongation</strong>
          <p className="text-slate-500 mt-1">Stretching Vowels</p>
        </button>
        <button
          type="button"
          onClick={() => setActiveRuleKey("ikhfa")}
          className="efe-legend-item bg-slate-50 border border-slate-200 p-3 rounded-lg text-xs cursor-pointer hover:bg-teal-50 transition-colors text-left"
        >
          <span className="efe-tajweed-ikhfa font-bold text-blue-800 bg-blue-100 px-1.5 py-0.5 rounded mr-1 inline-block">Ikhfa</span>
          <strong>Nasal Blend</strong>
          <p className="text-slate-500 mt-1">Hidden Sound</p>
        </button>
      </div>
    </div>
  );
}
