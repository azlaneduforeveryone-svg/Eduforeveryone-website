"use client";

import { useState, useRef, useEffect } from "react";

interface QuizResultShareModalProps {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  difficulty: string;
  categoryLabel: string;
  lang: "en" | "ur" | "hi";
  isOpen: boolean;
  onClose: () => void;
}

export interface QuizFrameTheme {
  id: string;
  name: string;
  bgGradient: [string, string];
  borderGold: string;
  textColor: string;
  badgeBg: string;
  badgeText: string;
  footerBg: string;
}

export const QUIZ_FRAMES: QuizFrameTheme[] = [
  {
    id: "gold-excellence",
    name: "Gold Excellence 🏆",
    bgGradient: ["#0f172a", "#020617"],
    borderGold: "#f59e0b",
    textColor: "#f8fafc",
    badgeBg: "#f59e0b",
    badgeText: "#020617",
    footerBg: "rgba(2, 6, 23, 0.85)",
  },
  {
    id: "emerald-honor",
    name: "Emerald Honor 🌙",
    bgGradient: ["#064e3b", "#022c22"],
    borderGold: "#fbbf24",
    textColor: "#fef3c7",
    badgeBg: "#059669",
    badgeText: "#ffffff",
    footerBg: "rgba(2, 44, 34, 0.85)",
  },
  {
    id: "imperial-maroon",
    name: "Imperial Maroon 🕌",
    bgGradient: ["#881337", "#4c0519"],
    borderGold: "#fef08a",
    textColor: "#fff1f2",
    badgeBg: "#be123c",
    badgeText: "#ffffff",
    footerBg: "rgba(76, 5, 25, 0.85)",
  },
  {
    id: "sunset-victory",
    name: "Sunset Victory 🌅",
    bgGradient: ["#7c2d12", "#451a03"],
    borderGold: "#f59e0b",
    textColor: "#ffedd5",
    badgeBg: "#ea580c",
    badgeText: "#ffffff",
    footerBg: "rgba(69, 26, 3, 0.85)",
  },
];

export default function QuizResultShareModal({
  score,
  totalQuestions,
  correctAnswers,
  difficulty,
  categoryLabel,
  lang,
  isOpen,
  onClose,
}: QuizResultShareModalProps) {
  const [selectedFrame, setSelectedFrame] = useState<QuizFrameTheme>(QUIZ_FRAMES[0]);
  const [userName, setUserName] = useState<string>("Islamic Knowledge Seeker");
  const [isGenerating, setIsGenerating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const percentage = Math.round((correctAnswers / Math.max(1, totalQuestions)) * 100);
  
  let resultRank = "MashaAllah! Excellent!";
  if (percentage === 100) resultRank = "Subhanallah! Perfect 100%!";
  else if (percentage >= 80) resultRank = "MashaAllah! Distinction!";
  else if (percentage >= 60) resultRank = "JazakAllah! Great Effort!";
  else resultRank = "Keep Learning, InshaaAllah!";

  const hashtags = "#IslamicQuiz #EduForEveryone #Quran #IslamicKnowledge #SubhanAllah #Alhamdulillah";

  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    renderCertificateCanvas();
  }, [isOpen, selectedFrame, userName, score, correctAnswers, totalQuestions, lang]);

  const renderCertificateCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // HD Canvas Dimensions (1080 x 1080)
    const W = 1080;
    const H = 1080;
    canvas.width = W;
    canvas.height = H;

    // 1. Background Gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, selectedFrame.bgGradient[0]);
    grad.addColorStop(1, selectedFrame.bgGradient[1]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // 2. Ornate Double Gold Borders
    const pad = 45;
    ctx.lineWidth = 6;
    ctx.strokeStyle = selectedFrame.borderGold;
    ctx.strokeRect(pad, pad, W - pad * 2, H - pad * 2);

    ctx.lineWidth = 2;
    ctx.strokeStyle = selectedFrame.borderGold + "aa";
    ctx.strokeRect(pad + 14, pad + 14, W - (pad + 14) * 2, H - (pad + 14) * 2);

    // Corner Symbols
    const drawCornerArc = (x: number, y: number) => {
      ctx.fillStyle = selectedFrame.borderGold;
      ctx.beginPath();
      ctx.arc(x, y, 14, 0, Math.PI * 2);
      ctx.fill();
    };
    drawCornerArc(pad + 14, pad + 14);
    drawCornerArc(W - (pad + 14), pad + 14);
    drawCornerArc(pad + 14, H - (pad + 14));
    drawCornerArc(W - (pad + 14), H - (pad + 14));

    // 3. Header Text
    ctx.fillStyle = selectedFrame.borderGold;
    ctx.font = "bold 34px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("☪ CERTIFICATE OF ACHIEVEMENT", W / 2, 135);

    ctx.fillStyle = selectedFrame.textColor;
    ctx.font = "normal 30px 'Amiri', serif";
    ctx.fillText("شهادة إنجاز في الاختبار الإسلامي", W / 2, 185);

    // Separator Line
    ctx.lineWidth = 2;
    ctx.strokeStyle = selectedFrame.borderGold + "88";
    ctx.beginPath();
    ctx.moveTo(W / 2 - 200, 215);
    ctx.lineTo(W / 2 + 200, 215);
    ctx.stroke();

    // 4. Recipient Name
    ctx.fillStyle = selectedFrame.borderGold;
    ctx.font = "italic 24px sans-serif";
    ctx.fillText("This is proudly presented to", W / 2, 275);

    ctx.fillStyle = selectedFrame.textColor;
    ctx.font = "bold 44px sans-serif";
    ctx.fillText(userName, W / 2, 335);

    // 5. Rank Title
    ctx.fillStyle = selectedFrame.borderGold;
    ctx.font = "bold 36px sans-serif";
    ctx.fillText(resultRank, W / 2, 410);

    // 6. Main Score Card Box
    const boxX = 140;
    const boxY = 460;
    const boxW = W - 280;
    const boxH = 260;

    ctx.fillStyle = "rgba(255, 255, 255, 0.07)";
    ctx.strokeStyle = selectedFrame.borderGold + "99";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.roundRect(boxX, boxY, boxW, boxH, 24);
    ctx.fill();
    ctx.stroke();

    // Score Badge
    ctx.fillStyle = selectedFrame.borderGold;
    ctx.font = "bold 68px sans-serif";
    ctx.fillText(`${score} PTS`, W / 2, boxY + 85);

    ctx.fillStyle = selectedFrame.textColor;
    ctx.font = "bold 34px sans-serif";
    ctx.fillText(`${correctAnswers} / ${totalQuestions} Correct (${percentage}%)`, W / 2, boxY + 145);

    // 7. Details Line: Difficulty & Category
    ctx.fillStyle = selectedFrame.borderGold;
    ctx.font = "semibold 26px sans-serif";
    ctx.fillText(`Category: ${categoryLabel}  •  Level: ${difficulty.toUpperCase()}`, W / 2, boxY + 205);

    // 8. Footer Section (Logo & Website Link)
    const footerY = H - 115;
    ctx.fillStyle = selectedFrame.footerBg;
    ctx.fillRect(pad + 14, footerY, W - (pad + 14) * 2, 85);

    ctx.fillStyle = selectedFrame.borderGold;
    ctx.font = "bold 26px sans-serif";
    ctx.textAlign = "left";
    ctx.fillText("☪ EduForEveryone", pad + 50, footerY + 52);

    ctx.fillStyle = selectedFrame.textColor;
    ctx.font = "semibold 24px sans-serif";
    ctx.textAlign = "right";
    ctx.fillText("eduforeveryone.com/quiz/islamic-quiz", W - (pad + 50), footerY + 52);

    // Draw Main Logo
    const logoImg = new Image();
    logoImg.crossOrigin = "anonymous";
    logoImg.src = "/Main_Logo.jpg";
    logoImg.onload = () => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(pad + 26, footerY + 45, 20, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(logoImg, pad + 6, footerY + 25, 40, 40);
      ctx.restore();
    };
  };

  const handleDownloadImage = () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);
    setTimeout(() => {
      const dataUrl = canvasRef.current!.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = `IslamicQuiz-Result-${score}pts.png`;
      link.href = dataUrl;
      link.click();
      setIsGenerating(false);
    }, 200);
  };

  const handleNativeShare = async () => {
    if (!canvasRef.current) return;
    try {
      canvasRef.current.toBlob(async blob => {
        if (!blob) return;
        const file = new File([blob], `IslamicQuiz-Result.png`, { type: "image/png" });
        const shareText = `🏆 I scored ${score} Pts (${correctAnswers}/${totalQuestions} correct - ${percentage}%) on the Islamic Quiz!\n\nTest your Islamic Knowledge at EduForEveryone: https://eduforeveryone.com/quiz/islamic-quiz\n\n${hashtags}`;

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: "My Islamic Quiz Result",
            text: shareText,
            files: [file],
          });
        } else {
          const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
          window.open(waUrl, "_blank");
        }
      });
    } catch (e) {
      console.error("Error sharing quiz result:", e);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🎓</span>
            <div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">Share Islamic Quiz Certificate</h3>
              <p className="text-xs text-gray-500">Includes score, logo, link & hashtags</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 flex-1">

          {/* User Name Input */}
          <div>
            <label className="block text-xs uppercase font-bold text-gray-700 tracking-wider mb-1.5">
              Enter Name for Certificate:
            </label>
            <input
              type="text"
              value={userName}
              onChange={e => setUserName(e.target.value)}
              placeholder="Your Name (e.g. Abdullah)"
              className="w-full text-sm font-bold text-gray-800 bg-gray-50 border border-gray-300 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Theme Picker */}
          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">
              Select Certificate Theme:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {QUIZ_FRAMES.map(frame => (
                <button
                  key={frame.id}
                  onClick={() => setSelectedFrame(frame)}
                  className={`p-2.5 rounded-2xl text-xs font-bold transition-all text-center border flex flex-col items-center gap-1 ${
                    selectedFrame.id === frame.id
                      ? "border-teal-600 ring-2 ring-teal-500 scale-105 shadow-sm"
                      : "border-gray-200 hover:border-teal-300"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${frame.bgGradient[0]}, ${frame.bgGradient[1]})`,
                    color: frame.textColor,
                  }}
                >
                  <span className="truncate">{frame.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Canvas Live Preview */}
          <div className="flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-4 shadow-inner overflow-hidden">
            <p className="text-[11px] text-gray-400 mb-2 font-medium">✨ Live Certificate Card Preview</p>
            <canvas
              ref={canvasRef}
              className="max-w-full h-auto max-h-[420px] rounded-xl shadow-2xl border border-gray-800"
            />
          </div>

          {/* Hashtags & Caption (Outside Frame) */}
          <div className="bg-teal-50/70 border border-teal-100 rounded-2xl p-3 text-center">
            <p className="text-xs font-bold text-teal-800 mb-1">🏷️ Social Media Hashtags (Outside Frame):</p>
            <p className="text-xs text-teal-600 font-mono tracking-wide selection:bg-teal-200">
              {hashtags}
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-5 border-t border-gray-100 bg-gray-50/50 rounded-b-3xl flex flex-wrap items-center justify-between gap-3 sticky bottom-0 bg-white z-10">
          <button
            onClick={onClose}
            className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-200 rounded-xl transition-all"
          >
            Close
          </button>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleNativeShare}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl shadow-sm transition-all flex items-center gap-1.5"
            >
              <span>📲</span> Share Result (WhatsApp)
            </button>

            <button
              onClick={handleDownloadImage}
              disabled={isGenerating}
              className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
            >
              <span>📥</span> {isGenerating ? "Generating..." : "Download Certificate (PNG)"}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
