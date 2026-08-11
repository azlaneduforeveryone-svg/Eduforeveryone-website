"use client";

import { useState, useRef, useEffect } from "react";
import { DuaItem, LanguageCode } from "@/lib/duasData";
import { HUMAN_RECITERS, getQuranAudioUrl } from "@/lib/quranAudio";
import DuaShareModal from "./DuaShareModal";

interface DuaCardProps {
  dua: DuaItem;
  currentLang: LanguageCode;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  hifzHideArabic?: boolean;
  hifzHideTranslation?: boolean;
  globalReciterId: string;
  onReciterChange: (reciterId: string) => void;
}

export default function DuaCard({
  dua,
  currentLang,
  isFavorite,
  onToggleFavorite,
  hifzHideArabic = false,
  hifzHideTranslation = false,
  globalReciterId,
  onReciterChange,
}: DuaCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1.0);
  const [isLooping, setIsLooping] = useState(false);
  const [showTransliteration, setShowTransliteration] = useState(true);
  const [revealArabic, setRevealArabic] = useState(false);
  const [revealTranslation, setRevealTranslation] = useState(false);
  const [count, setCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Audio URL generation for Quranic human reciter
  const currentAudioUrl = dua.surahInfo
    ? getQuranAudioUrl(dua.surahInfo.surah, dua.surahInfo.ayah, globalReciterId)
    : dua.customAudioUrl || `https://everyayah.com/data/Alafasy_128kbps/002255.mp3`;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  useEffect(() => {
    // Stop audio when Dua or Reciter changes
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [dua.id, globalReciterId]);

  const togglePlayAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      if (dua.audioStartTime && audioRef.current.currentTime < dua.audioStartTime) {
        audioRef.current.currentTime = dua.audioStartTime;
      }
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.error("Audio playback error:", err);
      });
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    if (dua.audioEndTime && audioRef.current.currentTime >= dua.audioEndTime) {
      if (isLooping) {
        audioRef.current.currentTime = dua.audioStartTime || 0;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleAudioEnded = () => {
    if (isLooping && audioRef.current) {
      audioRef.current.currentTime = dua.audioStartTime || 0;
      audioRef.current.play();
    } else {
      setIsPlaying(false);
    }
  };

  const handleIncrementCount = () => {
    setCount(prev => prev + 1);
    if (typeof window !== "undefined" && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(40);
    }
  };

  const handleCopyText = () => {
    const textToCopy = `${dua.title.en} (${dua.source})\n\nArabic:\n${dua.arabic}\n\nTransliteration:\n${dua.transliteration}\n\nTranslation:\n${dua.translations[currentLang] || dua.translations.en}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeTranslation = dua.translations[currentLang] || dua.translations.en || dua.translations.ur || "";
  const isArabicHidden = hifzHideArabic && !revealArabic;
  const isTranslationHidden = hifzHideTranslation && !revealTranslation;

  // Language direction helper
  const isRtlLang = currentLang === "ur";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 p-5 sm:p-7 flex flex-col justify-between relative">
      <audio
        ref={audioRef}
        src={currentAudioUrl}
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleAudioEnded}
        preload="none"
      />

      {/* Card Header: Category & Actions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-200">
              {dua.source}
            </span>
            {dua.repeatTarget > 1 && (
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                Repeat {dua.repeatTarget}x
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onToggleFavorite(dua.id)}
              className={`p-2 rounded-xl transition-all ${
                isFavorite
                  ? "bg-amber-100 text-amber-600 scale-110"
                  : "text-gray-400 hover:text-amber-500 hover:bg-gray-100"
              }`}
              title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </button>

            <button
              onClick={handleCopyText}
              className="p-2 rounded-xl text-gray-400 hover:text-teal-600 hover:bg-teal-50 transition-all"
              title="Copy Dua Text"
            >
              {copied ? (
                <span className="text-xs text-teal-600 font-bold px-1">Copied!</span>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsShareModalOpen(true)}
              className="p-2 rounded-xl bg-amber-50 text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-all flex items-center gap-1 text-xs font-bold border border-amber-200"
              title="Generate & Share Predefined Islamic Frame Card"
            >
              <span>🖼️ Frame</span>
            </button>
          </div>
        </div>

        <DuaShareModal
          dua={dua}
          currentLang={currentLang}
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
        />

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-900 mb-1">
          {currentLang === "ur" ? dua.title.ur : dua.title.en}
        </h3>
        <p className="text-sm text-gray-400 mb-6 font-arabic" dir="rtl" style={{ fontFamily: "'Amiri', serif" }}>
          {dua.title.ar}
        </p>

        {/* Arabic Text Block */}
        <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-5 mb-5 text-right relative overflow-hidden">
          {isArabicHidden ? (
            <div className="text-center py-6">
              <p className="text-gray-400 text-sm mb-3">🙈 Arabic text hidden for memorization practice</p>
              <button
                onClick={() => setRevealArabic(true)}
                className="px-4 py-1.5 bg-emerald-600 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-all shadow-sm"
              >
                Tap to Reveal Arabic
              </button>
            </div>
          ) : (
            <>
              <p
                className="text-2xl sm:text-3xl text-emerald-950 leading-[2.2] tracking-wide font-normal selection:bg-emerald-200"
                style={{ fontFamily: "'Amiri', 'Traditional Arabic', serif" }}
                dir="rtl"
              >
                {dua.arabic}
              </p>
              {hifzHideArabic && revealArabic && (
                <button
                  onClick={() => setRevealArabic(false)}
                  className="mt-3 text-xs text-emerald-700 underline font-medium block ml-auto"
                >
                  Hide again
                </button>
              )}
            </>
          )}
        </div>

        {/* Transliteration */}
        {!isArabicHidden && showTransliteration && (
          <div className="mb-4">
            <p className="text-xs uppercase font-bold tracking-wider text-teal-600 mb-1">Transliteration</p>
            <p className="text-sm italic text-gray-700 bg-gray-50 border border-gray-100 rounded-xl p-3 leading-relaxed">
              &quot;{dua.transliteration}&quot;
            </p>
          </div>
        )}

        {/* Translation Block */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-xs uppercase font-bold tracking-wider text-teal-600">
              Translation ({currentLang.toUpperCase()})
            </p>
            <button
              onClick={() => setShowTransliteration(v => !v)}
              className="text-xs text-gray-400 hover:text-teal-600 transition-colors"
            >
              {showTransliteration ? "Hide Transliteration" : "Show Transliteration"}
            </button>
          </div>

          {isTranslationHidden ? (
            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 text-center">
              <p className="text-gray-400 text-sm mb-2">🙈 Translation hidden for self-test</p>
              <button
                onClick={() => setRevealTranslation(true)}
                className="px-3 py-1 bg-gray-700 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-all"
              >
                Tap to Reveal Meaning
              </button>
            </div>
          ) : (
            <p
              className={`text-base text-gray-800 leading-relaxed font-medium ${
                isRtlLang ? "text-right font-arabic" : "text-left"
              }`}
              dir={isRtlLang ? "rtl" : "ltr"}
            >
              {activeTranslation}
            </p>
          )}
        </div>

        {/* Benefit / Virtue */}
        {dua.benefit && (
          <div className="bg-amber-50/60 border border-amber-100 rounded-xl p-3.5 mb-6 text-xs text-amber-900 flex items-start gap-2">
            <span className="text-base leading-none">💡</span>
            <p className="leading-relaxed">
              <strong>Virtue & Benefit: </strong>
              {currentLang === "ur" ? dua.benefit.ur : dua.benefit.en}
            </p>
          </div>
        )}
      </div>

      {/* Card Footer: Human Audio Controls & Tasbeeh Counter */}
      <div className="pt-4 border-t border-gray-100 space-y-4">

        {/* Audio Player Controls */}
        <div className="bg-gray-50 rounded-2xl p-3 border border-gray-100 flex flex-wrap items-center justify-between gap-3">

          {/* Left: Play/Pause Button + Human Reciter Indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={togglePlayAudio}
              className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white transition-all shadow-sm ${
                isPlaying
                  ? "bg-amber-500 hover:bg-amber-600 animate-pulse"
                  : "bg-teal-600 hover:bg-teal-700"
              }`}
              title={isPlaying ? "Pause Recitation" : "Play Human Voice Recitation"}
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </button>

            <div>
              <p className="text-xs font-bold text-gray-900 flex items-center gap-1">
                🎙️ Real Human Voice
                {isPlaying && <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />}
              </p>
              <select
                value={globalReciterId}
                onChange={e => onReciterChange(e.target.value)}
                className="text-xs bg-white border border-gray-200 rounded-lg px-2 py-1 text-gray-700 font-medium focus:ring-1 focus:ring-teal-500 outline-none"
              >
                {HUMAN_RECITERS.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Right: Audio Speed & Loop Options */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsLooping(v => !v)}
              className={`p-1.5 rounded-lg text-xs font-bold border transition-all ${
                isLooping
                  ? "bg-teal-600 text-white border-teal-600"
                  : "bg-white text-gray-600 border-gray-200 hover:bg-gray-100"
              }`}
              title="Repeat Audio Loop for Memorization"
            >
              🔁 Loop
            </button>

            <div className="flex bg-white rounded-lg border border-gray-200 p-0.5">
              {[0.75, 1.0, 1.25, 1.5].map(speed => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-2 py-0.5 text-[11px] font-bold rounded ${
                    playbackSpeed === speed
                      ? "bg-teal-600 text-white"
                      : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Digital Counter / Tasbeeh Widget */}
        <div className="flex items-center justify-between bg-teal-50/70 border border-teal-100 rounded-2xl p-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">📿</span>
            <div>
              <p className="text-xs text-gray-500 font-medium">Digital Counter</p>
              <p className="text-lg font-bold text-teal-800">
                {count} <span className="text-xs font-normal text-gray-500">/ {dua.repeatTarget}x</span>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleIncrementCount}
              className="px-5 py-2 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white font-bold text-sm rounded-xl shadow-sm transition-all"
            >
              + Count
            </button>
            {count > 0 && (
              <button
                onClick={() => setCount(0)}
                className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                title="Reset Counter"
              >
                ↻
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
