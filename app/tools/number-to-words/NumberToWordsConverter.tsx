"use client";

import { useState, useCallback } from "react";

const LANGS = [
  { id: "en", name: "English",  native: "English",  flag: "🇺🇸", dir: "ltr" as const },
  { id: "ar", name: "Arabic",   native: "العربية",  flag: "🇸🇦", dir: "rtl" as const },
  { id: "hi", name: "Hindi",    native: "हिन्दी",   flag: "🇮🇳", dir: "ltr" as const },
  { id: "ur", name: "Urdu",     native: "اردو",     flag: "🇵🇰", dir: "rtl" as const },
  { id: "es", name: "Spanish",  native: "Español",  flag: "🇪🇸", dir: "ltr" as const },
  { id: "fr", name: "French",   native: "Français", flag: "🇫🇷", dir: "ltr" as const },
  { id: "de", name: "German",   native: "Deutsch",  flag: "🇩🇪", dir: "ltr" as const },
  { id: "tr", name: "Turkish",  native: "Türkçe",   flag: "🇹🇷", dir: "ltr" as const },
];

// Currency names translated per language + "only" word per language
const CURRENCY_NAMES: Record<string, Record<string, string>> = {
  USD: { en: "US Dollar",           ar: "دولار أمريكي",    hi: "अमेरिकी डॉलर",  ur: "امریکی ڈالر",    es: "dólar estadounidense", fr: "dollar américain",  de: "US-Dollar",      tr: "ABD Doları"       },
  SAR: { en: "Saudi Riyal",         ar: "ريال سعودي",      hi: "सऊदी रियाल",     ur: "سعودی ریال",     es: "riyal saudí",          fr: "riyal saoudien",    de: "Saudi-Riyal",    tr: "Suudi Riyali"     },
  INR: { en: "Indian Rupee",        ar: "روبية هندية",     hi: "भारतीय रुपया",   ur: "ہندوستانی روپیہ", es: "rupia india",          fr: "roupie indienne",   de: "Indische Rupie", tr: "Hindistan Rupisi" },
  PKR: { en: "Pakistani Rupee",     ar: "روبية باكستانية", hi: "पाकिस्तानी रुपया", ur: "پاکستانی روپیہ", es: "rupia pakistaní",     fr: "roupie pakistanaise", de: "Pakistanische Rupie", tr: "Pakistan Rupisi" },
  EUR: { en: "Euro",                ar: "يورو",            hi: "यूरो",            ur: "یورو",            es: "euro",                 fr: "euro",              de: "Euro",           tr: "Euro"             },
  GBP: { en: "British Pound",       ar: "جنيه إسترليني",  hi: "ब्रिटिश पाउंड",  ur: "برطانوی پاؤنڈ",  es: "libra esterlina",      fr: "livre sterling",    de: "Britisches Pfund", tr: "İngiliz Sterlini" },
  AED: { en: "UAE Dirham",          ar: "درهم إماراتي",   hi: "यूएई दिरहम",     ur: "یو اے ای درہم",  es: "dírham emiratí",       fr: "dirham des EAU",    de: "VAE-Dirham",     tr: "BAE Dirhemi"      },
  EGP: { en: "Egyptian Pound",      ar: "جنيه مصري",      hi: "मिस्री पाउंड",   ur: "مصری پاؤنڈ",     es: "libra egipcia",        fr: "livre égyptienne",  de: "Ägyptisches Pfund", tr: "Mısır Lirası"  },
};

const ONLY: Record<string, string> = {
  en: "only", ar: "فقط", hi: "केवल", ur: "صرف",
  es: "solamente", fr: "seulement", de: "nur", tr: "yalnızca",
};

// ── English ──────────────────────────────────────────────────────────────────
const ones_en = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
const tens_en = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
function toWordsEN(n: number): string {
  if (n === 0) return "zero";
  if (n < 20) return ones_en[n];
  if (n < 100) return tens_en[Math.floor(n/10)] + (n%10 ? " " + ones_en[n%10] : "");
  if (n < 1000) return ones_en[Math.floor(n/100)] + " hundred" + (n%100 ? " " + toWordsEN(n%100) : "");
  if (n < 1_000_000) return toWordsEN(Math.floor(n/1000)) + " thousand" + (n%1000 ? " " + toWordsEN(n%1000) : "");
  if (n < 1_000_000_000) return toWordsEN(Math.floor(n/1_000_000)) + " million" + (n%1_000_000 ? " " + toWordsEN(n%1_000_000) : "");
  return toWordsEN(Math.floor(n/1_000_000_000)) + " billion" + (n%1_000_000_000 ? " " + toWordsEN(n%1_000_000_000) : "");
}

// ── Arabic (FIXED: ones before tens e.g. ثلاثة وعشرون) ──────────────────────
const ones_ar = ["","واحد","اثنان","ثلاثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة","عشرة","أحد عشر","اثنا عشر","ثلاثة عشر","أربعة عشر","خمسة عشر","ستة عشر","سبعة عشر","ثمانية عشر","تسعة عشر"];
const tens_ar = ["","","عشرون","ثلاثون","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون"];
function toWordsAR(n: number): string {
  if (n === 0) return "صفر";
  if (n < 20) return ones_ar[n];
  if (n < 100) {
    const ten = tens_ar[Math.floor(n/10)];
    const one = n % 10;
    return one ? ones_ar[one] + " و" + ten : ten; // ones FIRST then tens
  }
  if (n < 1000) return ones_ar[Math.floor(n/100)] + " مئة" + (n%100 ? " و" + toWordsAR(n%100) : "");
  if (n < 1_000_000) return toWordsAR(Math.floor(n/1000)) + " ألف" + (n%1000 ? " و" + toWordsAR(n%1000) : "");
  if (n < 1_000_000_000) return toWordsAR(Math.floor(n/1_000_000)) + " مليون" + (n%1_000_000 ? " و" + toWordsAR(n%1_000_000) : "");
  return toWordsAR(Math.floor(n/1_000_000_000)) + " مليار" + (n%1_000_000_000 ? " و" + toWordsAR(n%1_000_000_000) : "");
}

// ── Hindi ────────────────────────────────────────────────────────────────────
const ones_hi = ["","एक","दो","तीन","चार","पाँच","छह","सात","आठ","नौ","दस","ग्यारह","बारह","तेरह","चौदह","पंद्रह","सोलह","सत्रह","अठारह","उन्नीस","बीस","इक्कीस","बाईस","तेईस","चौबीस","पच्चीस","छब्बीस","सत्ताईस","अट्ठाईस","उनतीस","तीस","इकतीस","बत्तीस","तैंतीस","चौंतीस","पैंतीस","छत्तीस","सैंतीस","अड़तीस","उनतालीस","चालीस","इकतालीस","बयालीस","तैंतालीस","चौवालीस","पैंतालीस","छियालीस","सैंतालीस","अड़तालीस","उनचास","पचास","इक्यावन","बावन","तिरपन","चौवन","पचपन","छप्पन","सत्तावन","अट्ठावन","उनसठ","साठ","इकसठ","बासठ","तिरसठ","चौंसठ","पैंसठ","छियासठ","सड़सठ","अड़सठ","उनहत्तर","सत्तर","इकहत्तर","बहत्तर","तिहत्तर","चौहत्तर","पचहत्तर","छिहत्तर","सतहत्तर","अठहत्तर","उन्यासी","अस्सी","इक्यासी","बयासी","तिरासी","चौरासी","पचासी","छियासी","सत्तासी","अट्ठासी","नवासी","नब्बे","इक्यानवे","बानवे","तिरानवे","चौरानवे","पचानवे","छियानवे","सत्तानवे","अट्ठानवे","निन्यानवे"];
function toWordsHI(n: number): string {
  if (n === 0) return "शून्य";
  if (n < 100) return ones_hi[n];
  if (n < 1000) return ones_hi[Math.floor(n/100)] + " सौ" + (n%100 ? " " + toWordsHI(n%100) : "");
  if (n < 100_000) return toWordsHI(Math.floor(n/1000)) + " हज़ार" + (n%1000 ? " " + toWordsHI(n%1000) : "");
  if (n < 10_000_000) return toWordsHI(Math.floor(n/100_000)) + " लाख" + (n%100_000 ? " " + toWordsHI(n%100_000) : "");
  if (n < 1_000_000_000) return toWordsHI(Math.floor(n/10_000_000)) + " करोड़" + (n%10_000_000 ? " " + toWordsHI(n%10_000_000) : "");
  return toWordsHI(Math.floor(n/1_000_000_000)) + " अरब" + (n%1_000_000_000 ? " " + toWordsHI(n%1_000_000_000) : "");
}

// ── Urdu ─────────────────────────────────────────────────────────────────────
const ones_ur = ["","ایک","دو","تین","چار","پانچ","چھ","سات","آٹھ","نو","دس","گیارہ","بارہ","تیرہ","چودہ","پندرہ","سولہ","سترہ","اٹھارہ","انیس","بیس","اکیس","بائیس","تئیس","چوبیس","پچیس","چھبیس","ستائیس","اٹھائیس","انتیس","تیس","اکتیس","بتیس","تینتیس","چونتیس","پینتیس","چھتیس","سینتیس","اڑتیس","انتالیس","چالیس","اکتالیس","بیالیس","تینتالیس","چوالیس","پینتالیس","چھیالیس","سینتالیس","اڑتالیس","انچاس","پچاس","اکیاون","باون","ترپن","چون","پچپن","چھپن","ستاون","اٹھاون","انسٹھ","ساٹھ","اکسٹھ","باسٹھ","ترسٹھ","چونسٹھ","پینسٹھ","چھیاسٹھ","سڑسٹھ","اڑسٹھ","انہتر","ستر","اکہتر","بہتر","تہتر","چوہتر","پچہتر","چھہتر","ستتر","اٹھتر","انیاسی","اسی","اکیاسی","بیاسی","تراسی","چوراسی","پچاسی","چھیاسی","ستاسی","اٹھاسی","نواسی","نوے","اکانوے","بانوے","ترانوے","چرانوے","پچانوے","چھیانوے","ستانوے","اٹھانوے","ننانوے"];
function toWordsUR(n: number): string {
  if (n === 0) return "صفر";
  if (n < 100) return ones_ur[n];
  if (n < 1000) return ones_ur[Math.floor(n/100)] + " سو" + (n%100 ? " " + toWordsUR(n%100) : "");
  if (n < 100_000) return toWordsUR(Math.floor(n/1000)) + " ہزار" + (n%1000 ? " " + toWordsUR(n%1000) : "");
  if (n < 10_000_000) return toWordsUR(Math.floor(n/100_000)) + " لاکھ" + (n%100_000 ? " " + toWordsUR(n%100_000) : "");
  return toWordsUR(Math.floor(n/10_000_000)) + " کروڑ" + (n%10_000_000 ? " " + toWordsUR(n%10_000_000) : "");
}

// ── Spanish ──────────────────────────────────────────────────────────────────
const ones_es = ["","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","dieciséis","diecisiete","dieciocho","diecinueve"];
const tens_es = ["","","veinte","treinta","cuarenta","cincuenta","sesenta","setenta","ochenta","noventa"];
function toWordsES(n: number): string {
  if (n === 0) return "cero";
  if (n < 20) return ones_es[n];
  if (n < 30) return n === 20 ? "veinte" : "veinti" + ones_es[n-20];
  if (n < 100) return tens_es[Math.floor(n/10)] + (n%10 ? " y " + ones_es[n%10] : "");
  if (n < 1000) return (n === 100 ? "cien" : "ciento") + (n%100 ? " " + toWordsES(n%100) : "");
  if (n < 1_000_000) return toWordsES(Math.floor(n/1000)) + " mil" + (n%1000 ? " " + toWordsES(n%1000) : "");
  if (n < 1_000_000_000) return toWordsES(Math.floor(n/1_000_000)) + (Math.floor(n/1_000_000)===1?" millón":" millones") + (n%1_000_000?" "+toWordsES(n%1_000_000):"");
  return toWordsES(Math.floor(n/1_000_000_000)) + " mil millones" + (n%1_000_000_000?" "+toWordsES(n%1_000_000_000):"");
}

// ── French ───────────────────────────────────────────────────────────────────
const ones_fr = ["","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix","onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf"];
const tens_fr = ["","","vingt","trente","quarante","cinquante","soixante","soixante","quatre-vingt","quatre-vingt"];
function toWordsFR(n: number): string {
  if (n === 0) return "zéro";
  if (n < 20) return ones_fr[n];
  if (n < 70) return tens_fr[Math.floor(n/10)] + (n%10?(n%10===1&&Math.floor(n/10)<8?" et ":"-")+ones_fr[n%10]:"");
  if (n < 80) return "soixante-" + toWordsFR(n-60);
  if (n < 100) return "quatre-vingt" + (n===80?"s":"-"+toWordsFR(n-80));
  if (n < 1000) return ones_fr[Math.floor(n/100)] + " cent" + (n%100?" "+toWordsFR(n%100):"");
  if (n < 1_000_000) return toWordsFR(Math.floor(n/1000)) + " mille" + (n%1000?" "+toWordsFR(n%1000):"");
  if (n < 1_000_000_000) return toWordsFR(Math.floor(n/1_000_000)) + (Math.floor(n/1_000_000)===1?" million":" millions") + (n%1_000_000?" "+toWordsFR(n%1_000_000):"");
  return toWordsFR(Math.floor(n/1_000_000_000)) + " milliard" + (n%1_000_000_000?" "+toWordsFR(n%1_000_000_000):"");
}

// ── German ───────────────────────────────────────────────────────────────────
const ones_de = ["","ein","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn"];
const tens_de = ["","","zwanzig","dreißig","vierzig","fünfzig","sechzig","siebzig","achtzig","neunzig"];
function toWordsDE(n: number): string {
  if (n === 0) return "null";
  if (n < 20) return ones_de[n];
  if (n < 100) return n%10 ? ones_de[n%10]+"und"+tens_de[Math.floor(n/10)] : tens_de[Math.floor(n/10)];
  if (n < 1000) return ones_de[Math.floor(n/100)]+"hundert"+(n%100?toWordsDE(n%100):"");
  if (n < 1_000_000) return toWordsDE(Math.floor(n/1000))+"tausend"+(n%1000?toWordsDE(n%1000):"");
  if (n < 1_000_000_000) return toWordsDE(Math.floor(n/1_000_000))+(Math.floor(n/1_000_000)===1?" Million":" Millionen")+(n%1_000_000?" "+toWordsDE(n%1_000_000):"");
  return toWordsDE(Math.floor(n/1_000_000_000))+" Milliarde"+(n%1_000_000_000?" "+toWordsDE(n%1_000_000_000):"");
}

// ── Turkish ──────────────────────────────────────────────────────────────────
const ones_tr = ["","bir","iki","üç","dört","beş","altı","yedi","sekiz","dokuz"];
const tens_tr = ["","on","yirmi","otuz","kırk","elli","altmış","yetmiş","seksen","doksan"];
function toWordsTR(n: number): string {
  if (n === 0) return "sıfır";
  if (n < 10) return ones_tr[n];
  if (n < 100) return tens_tr[Math.floor(n/10)] + (n%10?" "+ones_tr[n%10]:"");
  if (n < 1000) return (Math.floor(n/100)===1?"":ones_tr[Math.floor(n/100)])+"yüz"+(n%100?" "+toWordsTR(n%100):"");
  if (n < 1_000_000) return toWordsTR(Math.floor(n/1000))+(Math.floor(n/1000)===1?"":" ")+"bin"+(n%1000?" "+toWordsTR(n%1000):"");
  if (n < 1_000_000_000) return toWordsTR(Math.floor(n/1_000_000))+" milyon"+(n%1_000_000?" "+toWordsTR(n%1_000_000):"");
  return toWordsTR(Math.floor(n/1_000_000_000))+" milyar"+(n%1_000_000_000?" "+toWordsTR(n%1_000_000_000):"");
}

function getWords(langId: string, n: number, currency: string): string {
  let base = "";
  if (langId === "en") base = toWordsEN(n);
  else if (langId === "ar") base = toWordsAR(n);
  else if (langId === "hi") base = toWordsHI(n);
  else if (langId === "ur") base = toWordsUR(n);
  else if (langId === "es") base = toWordsES(n);
  else if (langId === "fr") base = toWordsFR(n);
  else if (langId === "de") base = toWordsDE(n);
  else if (langId === "tr") base = toWordsTR(n);

  if (currency && CURRENCY_NAMES[currency]) {
    const currencyName = CURRENCY_NAMES[currency][langId] || CURRENCY_NAMES[currency]["en"];
    const only = ONLY[langId] || "only";
    // RTL languages: currency name first, then number, then only
    if (langId === "ar" || langId === "ur") {
      base = base + " " + currencyName + " " + only;
    } else {
      base = base + " " + currencyName + " " + only;
    }
  }
  return base;
}

export default function NumberToWordsConverter() {
  const [input, setInput] = useState("");
  const [currency, setCurrency] = useState("");
  const [activeLangs, setActiveLangs] = useState<Set<string>>(new Set(["en", "ar"]));
  const [copied, setCopied] = useState<string | null>(null);

  const num = parseFloat(input);
  const isValid = input !== "" && !isNaN(num) && num >= 0 && num <= 999_999_999_999;

  const toggleLang = useCallback((id: string) => {
    setActiveLangs((prev) => {
      const next = new Set(prev);
      if (next.has(id) && next.size > 1) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const handleCopy = useCallback((text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label className="block text-sm text-gray-500 mb-1.5">Enter a number</label>
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g. 1234567"
            min={0}
            max={999999999999}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-xl font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div className="sm:w-48">
          <label className="block text-sm text-gray-500 mb-1.5">Currency (optional)</label>
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">None</option>
            <option value="USD">USD — Dollar</option>
            <option value="SAR">SAR — Riyal</option>
            <option value="INR">INR — Rupee</option>
            <option value="PKR">PKR — Rupee</option>
            <option value="EUR">EUR — Euro</option>
            <option value="GBP">GBP — Pound</option>
            <option value="AED">AED — Dirham</option>
            <option value="EGP">EGP — Pound</option>
          </select>
        </div>
      </div>

      {/* Language Toggles */}
      <div>
        <p className="text-sm text-gray-500 mb-2">Select languages</p>
        <div className="flex flex-wrap gap-2">
          {LANGS.map((lang) => (
            <button
              key={lang.id}
              onClick={() => toggleLang(lang.id)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                activeLangs.has(lang.id)
                  ? "bg-blue-50 text-blue-700 border-blue-200 font-medium"
                  : "bg-white text-gray-500 border-gray-200 hover:border-gray-300"
              }`}
            >
              {lang.native}
            </button>
          ))}
        </div>
      </div>

      {/* Error */}
      {input !== "" && !isValid && (
        <p className="text-red-500 text-sm">Please enter a number between 0 and 999,999,999,999.</p>
      )}

      {/* Results */}
      {isValid && (
        <div className="space-y-3">
          {LANGS.filter((l) => activeLangs.has(l.id)).map((lang) => {
            const words = getWords(lang.id, Math.floor(num), currency);
            return (
              <div
                key={lang.id}
                className="bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-blue-100 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lang.flag}</span>
                    <span className="text-sm font-semibold text-gray-800">{lang.name}</span>
                    <span className="text-xs text-gray-400">{lang.native}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(words, lang.id)}
                    className="text-xs px-3 py-1 rounded-lg border border-gray-200 text-gray-500 hover:bg-white hover:border-gray-300 transition-all"
                  >
                    {copied === lang.id ? "✓ Copied" : "Copy"}
                  </button>
                </div>
                <p
                  dir={lang.dir}
                  className={`text-base font-medium text-gray-900 leading-relaxed ${
                    lang.dir === "rtl" ? "text-right" : "text-left"
                  }`}
                  style={lang.dir === "rtl" ? { fontFamily: "serif" } : {}}
                >
                  {words}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
