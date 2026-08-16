"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { DuaItem, LanguageCode } from "@/lib/duasData";

interface DuaShareModalProps {
  dua: DuaItem;
  currentLang: LanguageCode;
  isOpen: boolean;
  onClose: () => void;
}

export interface FrameTheme {
  id: string;
  name: string;
  bgGradient: [string, string];
  borderGold: string;
  textColor: string;
  arabicColor: string;
  transColor: string;
  footerBg: string;
}

export const ISLAMIC_FRAMES: FrameTheme[] = [
  {
    id: "emerald-gold",
    name: "Emerald & Gold 🌙",
    bgGradient: ["#064e3b", "#022c22"],
    borderGold: "#d97706",
    textColor: "#fef3c7",
    arabicColor: "#fbbf24",
    transColor: "#e0e7ff",
    footerBg: "rgba(2, 44, 34, 0.8)",
  },
  {
    id: "royal-navy",
    name: "Royal Navy ⭐️",
    bgGradient: ["#0f172a", "#020617"],
    borderGold: "#f59e0b",
    textColor: "#f8fafc",
    arabicColor: "#fde047",
    transColor: "#cbd5e1",
    footerBg: "rgba(2, 6, 23, 0.8)",
  },
  {
    id: "maroon-luxe",
    name: "Imperial Maroon 🕌",
    bgGradient: ["#881337", "#4c0519"],
    borderGold: "#fbbf24",
    textColor: "#fff1f2",
    arabicColor: "#fef08a",
    transColor: "#fecdd3",
    footerBg: "rgba(76, 5, 25, 0.8)",
  },
  {
    id: "sunset-amber",
    name: "Sunset Amber 🌅",
    bgGradient: ["#7c2d12", "#451a03"],
    borderGold: "#f59e0b",
    textColor: "#ffedd5",
    arabicColor: "#fef08a",
    transColor: "#fed7aa",
    footerBg: "rgba(69, 26, 3, 0.8)",
  },
  {
    id: "light-marble",
    name: "Clean Marble 🕊️",
    bgGradient: ["#fcfbf7", "#f3f0e6"],
    borderGold: "#b45309",
    textColor: "#1c1917",
    arabicColor: "#047857",
    transColor: "#44403c",
    footerBg: "rgba(243, 240, 230, 0.9)",
  },
];

export const ARABIC_FONTS = [
  { id: "Amiri, serif", name: "Amiri Naskh" },
  { id: "'Traditional Arabic', serif", name: "Traditional Arabic" },
  { id: "'Scheherazade New', serif", name: "Scheherazade" },
  { id: "Cairo, sans-serif", name: "Cairo Modern" },
];

export const TRANSLATION_FONTS = [
  { id: "sans-serif", name: "Modern Sans" },
  { id: "Georgia, serif", name: "Classic Serif" },
  { id: "'Playfair Display', serif", name: "Luxury Display" },
  { id: "'Courier New', monospace", name: "Typewriter" },
];

/**
 * Synchronously convert HTMLCanvasElement to a Blob.
 * Preserves the active user-gesture token for navigator.share and synchronous click actions.
 */
function canvasToBlobSync(canvas: HTMLCanvasElement): Blob | null {
  try {
    const dataUrl = canvas.toDataURL("image/png");
    const parts = dataUrl.split(",");
    const byteString = atob(parts[1]);
    const mimeString = parts[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  } catch (err) {
    console.error("canvasToBlobSync error:", err);
    return null;
  }
}

function canvasToFileSync(canvas: HTMLCanvasElement, fileName: string): File | null {
  const blob = canvasToBlobSync(canvas);
  if (!blob) return null;
  try {
    return new File([blob], fileName, { type: "image/png" });
  } catch {
    return null;
  }
}

export default function DuaShareModal({ dua, currentLang, isOpen, onClose }: DuaShareModalProps) {
  const [selectedFrame, setSelectedFrame] = useState<FrameTheme>(ISLAMIC_FRAMES[0]);
  const [arabicFontSize, setArabicFontSize] = useState<number>(44);
  const [translationFontSize, setTranslationFontSize] = useState<number>(24);
  const [selectedArabicFont, setSelectedArabicFont] = useState<string>(ARABIC_FONTS[0].id);
  const [selectedTransFont, setSelectedTransFont] = useState<string>(TRANSLATION_FONTS[0].id);
  const [isGenerating, setIsGenerating] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logoImageRef = useRef<HTMLImageElement | null>(null);

  const activeTranslation = dua.translations[currentLang] || dua.translations.en || dua.translations.ur || "";
  const activeTitle = currentLang === "ur" ? dua.title.ur : dua.title.en;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(current => (current === msg ? null : current));
    }, 4500);
  };

  // Preload logo image once
  useEffect(() => {
    if (typeof window === "undefined") return;
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/Main_Logo.jpg";
    img.onload = () => {
      logoImageRef.current = img;
      if (canvasRef.current && isOpen) {
        renderCanvasCard();
      }
    };
  }, []);

  const renderCanvasCard = useCallback(() => {
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

    // 2. Ornate Outer Gold Border
    const pad = 40;
    ctx.lineWidth = 6;
    ctx.strokeStyle = selectedFrame.borderGold;
    ctx.strokeRect(pad, pad, W - pad * 2, H - pad * 2);

    // Inner Border
    ctx.lineWidth = 2;
    ctx.strokeStyle = selectedFrame.borderGold + "aa";
    ctx.strokeRect(pad + 12, pad + 12, W - (pad + 12) * 2, H - (pad + 12) * 2);

    // Corner Ornaments
    const drawCornerSymbol = (x: number, y: number) => {
      ctx.fillStyle = selectedFrame.borderGold;
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.fill();
    };
    drawCornerSymbol(pad + 12, pad + 12);
    drawCornerSymbol(W - (pad + 12), pad + 12);
    drawCornerSymbol(pad + 12, H - (pad + 12));
    drawCornerSymbol(W - (pad + 12), H - (pad + 12));

    // 3. Measure & Wrap Text Blocks
    const sourceFontSize = 26;

    if ("letterSpacing" in ctx) {
      (ctx as unknown as { letterSpacing: string }).letterSpacing = "1.2px";
    }
    if ("wordSpacing" in ctx) {
      (ctx as unknown as { wordSpacing: string }).wordSpacing = "2px";
    }

    // Title (wrapped to max width W - 260)
    const titleFontSize = 28;
    ctx.font = `bold ${titleFontSize}px ${selectedTransFont}`;
    const titleLines = getWrappedLines(ctx, activeTitle, W - 260);
    const titleLineHeight = 42;

    // Arabic text
    if ("wordSpacing" in ctx) {
      (ctx as unknown as { wordSpacing: string }).wordSpacing = "4px";
    }
    ctx.font = `normal ${arabicFontSize}px ${selectedArabicFont}`;
    const arabicLines = getWrappedLines(ctx, dua.arabic, W - 240);
    const arabicLineHeight = arabicFontSize * 1.85;

    // Transliteration text
    if ("wordSpacing" in ctx) {
      (ctx as unknown as { wordSpacing: string }).wordSpacing = "2px";
    }
    const transFontSize = Math.max(18, translationFontSize - 4);
    ctx.font = `italic ${transFontSize}px ${selectedTransFont}`;
    const transLines = getWrappedLines(ctx, `"${dua.transliteration}"`, W - 240);
    const transLineHeight = transFontSize * 1.45;
    const effectiveTransLines = transLines.slice(0, 3);

    // Translation text
    ctx.font = `medium ${translationFontSize}px ${selectedTransFont}`;
    const transTextLines = getWrappedLines(ctx, activeTranslation, W - 240);
    const transTextLineHeight = translationFontSize * 1.5;

    // Defined Gaps
    const gapSourceToTitle = 36;
    const gapTitleToSeparator = 35;
    const gapSeparatorToArabic = Math.max(75, arabicFontSize * 1.5);
    const gapArabicToTrans = Math.max(50, arabicFontSize * 0.4 + transFontSize);
    const gapTransToTranslation = Math.max(45, transFontSize * 0.4 + translationFontSize);

    // Total content height calculation
    const titleBlockHeight = (titleLines.length - 1) * titleLineHeight;
    const arabicBlockHeight = (arabicLines.length - 1) * arabicLineHeight;
    const transBlockHeight = (effectiveTransLines.length - 1) * transLineHeight;
    const translationBlockHeight = (transTextLines.length - 1) * transTextLineHeight;

    const totalHeightFromStart =
      sourceFontSize +
      gapSourceToTitle +
      titleBlockHeight +
      gapTitleToSeparator +
      gapSeparatorToArabic +
      arabicBlockHeight +
      gapArabicToTrans +
      transBlockHeight +
      gapTransToTranslation +
      translationBlockHeight +
      translationFontSize * 0.5;

    // Vertical Centering within top frame boundary (y=80) and footer boundary (y=960)
    const availableArea = 880;
    const startY = 80 + Math.max(10, (availableArea - totalHeightFromStart) / 2);

    let currentY = startY + sourceFontSize;

    // 4. Draw Header Source
    ctx.fillStyle = selectedFrame.borderGold;
    ctx.font = `bold ${sourceFontSize}px ${selectedTransFont}`;
    ctx.textAlign = "center";
    ctx.fillText("🤲   " + dua.source, W / 2, currentY);

    // 5. Draw Header Title
    currentY += gapSourceToTitle;
    ctx.fillStyle = selectedFrame.textColor;
    ctx.font = `bold ${titleFontSize}px ${selectedTransFont}`;
    titleLines.forEach((line, idx) => {
      ctx.fillText(line, W / 2, currentY + idx * titleLineHeight);
    });
    currentY += (titleLines.length - 1) * titleLineHeight;

    // 6. Separator Line
    currentY += gapTitleToSeparator;
    ctx.lineWidth = 2;
    ctx.strokeStyle = selectedFrame.borderGold + "88";
    ctx.beginPath();
    ctx.moveTo(W / 2 - 160, currentY);
    ctx.lineTo(W / 2 + 160, currentY);
    ctx.stroke();

    // 7. Draw Arabic Text Block
    currentY += gapSeparatorToArabic;
    ctx.fillStyle = selectedFrame.arabicColor;
    ctx.font = `normal ${arabicFontSize}px ${selectedArabicFont}`;
    ctx.textAlign = "center";

    arabicLines.forEach((line, idx) => {
      ctx.fillText(line, W / 2, currentY + idx * arabicLineHeight);
    });
    currentY += (arabicLines.length - 1) * arabicLineHeight;

    // 8. Draw Transliteration Block
    currentY += gapArabicToTrans;
    ctx.fillStyle = selectedFrame.transColor;
    ctx.font = `italic ${transFontSize}px ${selectedTransFont}`;

    effectiveTransLines.forEach((line, idx) => {
      ctx.fillText(line, W / 2, currentY + idx * transLineHeight);
    });
    currentY += (effectiveTransLines.length - 1) * transLineHeight;

    // 9. Draw Translation Block
    currentY += gapTransToTranslation;
    ctx.fillStyle = selectedFrame.textColor;
    ctx.font = `medium ${translationFontSize}px ${selectedTransFont}`;

    const maxFooterY = H - 140;
    for (let i = 0; i < transTextLines.length; i++) {
      const lineY = currentY + i * transTextLineHeight;
      if (lineY > maxFooterY) break;
      ctx.fillText(transTextLines[i], W / 2, lineY);
    }

    // 10. Footer Branding Section
    const footerY = H - 110;
    ctx.fillStyle = selectedFrame.footerBg;
    ctx.fillRect(pad + 12, footerY, W - (pad + 12) * 2, 85);

    ctx.fillStyle = selectedFrame.borderGold;
    ctx.font = `bold 24px ${selectedTransFont}`;
    ctx.textAlign = "left";
    ctx.fillText("☪ EduForEveryone", pad + 45, footerY + 52);

    ctx.fillStyle = selectedFrame.textColor;
    ctx.font = `semibold 22px ${selectedTransFont}`;
    ctx.textAlign = "right";
    ctx.fillText("eduforeveryone.com/duas", W - (pad + 45), footerY + 52);

    // Draw Main Logo Image if cached
    const logoImg = logoImageRef.current;
    if (logoImg && logoImg.complete && logoImg.naturalWidth > 0) {
      try {
        ctx.save();
        ctx.beginPath();
        ctx.arc(pad + 25, footerY + 45, 18, 0, Math.PI * 2);
        ctx.clip();
        ctx.drawImage(logoImg, pad + 7, footerY + 27, 36, 36);
        ctx.restore();
      } catch (drawErr) {
        console.warn("Logo draw error:", drawErr);
      }
    }
  }, [selectedFrame, arabicFontSize, translationFontSize, selectedArabicFont, selectedTransFont, dua, activeTitle, activeTranslation]);

  // Re-render Canvas whenever frame, text sizes, fonts, or dua data changes
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    renderCanvasCard();

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(() => {
        if (canvasRef.current) {
          renderCanvasCard();
        }
      });
    }
  }, [isOpen, renderCanvasCard]);

  const getWrappedLines = (ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] => {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = words[0] || "";

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  };

  /**
   * Triggers download of blob or data URL on any device.
   */
  const triggerBrowserDownload = (blob: Blob | null, fileName: string) => {
    if (blob) {
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.style.display = "none";
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (document.body.contains(link)) document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }, 1500);
    } else if (canvasRef.current) {
      const dataUrl = canvasRef.current.toDataURL("image/png");
      const link = document.createElement("a");
      link.style.display = "none";
      link.href = dataUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      setTimeout(() => {
        if (document.body.contains(link)) document.body.removeChild(link);
      }, 1500);
    }
  };

  /**
   * Mobile-friendly and Desktop-friendly HD Image Download
   */
  const handleDownloadImage = () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);

    try {
      const fileName = `EduForEveryone-Dua-${dua.id}.png`;
      const blob = canvasToBlobSync(canvasRef.current);
      const isIOS = typeof navigator !== "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent || "");

      // On iOS Safari, standard download attribute is ignored. We can use native share "Save Image" or open preview
      if (isIOS && blob && typeof navigator !== "undefined" && navigator.canShare) {
        const file = new File([blob], fileName, { type: "image/png" });
        if (navigator.canShare({ files: [file] })) {
          navigator
            .share({
              files: [file],
              title: activeTitle,
            })
            .then(() => {
              showToast("✅ Image ready! Tap 'Save Image' in options.");
            })
            .catch(err => {
              if (err.name !== "AbortError") {
                openImagePreviewModal();
              }
            });
          setIsGenerating(false);
          return;
        }
      }

      // Standard browser download
      triggerBrowserDownload(blob, fileName);
      showToast("📥 HD Picture downloading...");
    } catch (err) {
      console.error("Download failed:", err);
      openImagePreviewModal();
    } finally {
      setIsGenerating(false);
    }
  };

  /**
   * Share Picture directly to WhatsApp / Native Apps (Mobile & Desktop)
   */
  const handleShareImageToWhatsApp = async () => {
    if (!canvasRef.current) return;
    setIsGenerating(true);

    try {
      const fileName = `EduForEveryone-Dua-${dua.id}.png`;
      const file = canvasToFileSync(canvasRef.current, fileName);
      const blob = canvasToBlobSync(canvasRef.current);

      // 1. Mobile Native Share Sheet (iOS / Android)
      // Sharing file directly sends the picture to WhatsApp / Telegram / Instagram / Camera Roll
      if (file && typeof navigator !== "undefined" && navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          title: activeTitle,
          files: [file],
        });
        showToast("✨ Frame card shared!");
        setIsGenerating(false);
        return;
      }

      // 2. Desktop Web / PC Fallback
      // Web standards do not allow attaching local files via WhatsApp Web URLs.
      // We copy image directly to clipboard, auto-download file, and open WhatsApp Web.
      let copied = false;
      if (blob && typeof navigator !== "undefined" && navigator.clipboard && window.ClipboardItem) {
        try {
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          copied = true;
        } catch (clipErr) {
          console.warn("Clipboard image write not permitted:", clipErr);
        }
      }

      // Download picture for backup
      triggerBrowserDownload(blob, fileName);

      // Open WhatsApp
      const waText = encodeURIComponent(
        `*${activeTitle}*\n\n${dua.arabic}\n\n_${dua.transliteration}_\n\n"${activeTranslation}"\n\nRead & listen on EduForEveryone: https://eduforeveryone.com/duas`
      );
      window.open(`https://api.whatsapp.com/send?text=${waText}`, "_blank");

      if (copied) {
        showToast("📋 Picture copied to clipboard & downloaded! Paste (Ctrl+V) directly in WhatsApp chat.");
      } else {
        showToast("📥 Picture downloaded! Attach it in WhatsApp chat.");
      }
    } catch (e: any) {
      if (e.name !== "AbortError") {
        console.error("Error sharing picture:", e);
        showToast("⚠️ Could not share picture directly. Picture downloaded instead.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  /**
   * Share Text Only to WhatsApp
   */
  const handleShareTextOnly = () => {
    const waText = encodeURIComponent(
      `🤲 *${activeTitle}*\n\n${dua.arabic}\n\n_${dua.transliteration}_\n\n"${activeTranslation}"\n\n📖 Read & listen authentic Duas on EduForEveryone:\nhttps://eduforeveryone.com/duas`
    );
    window.open(`https://api.whatsapp.com/send?text=${waText}`, "_blank");
  };

  /**
   * Copy Text to Clipboard
   */
  const handleCopyText = async () => {
    const text = `🤲 ${activeTitle}\n\n${dua.arabic}\n\n"${dua.transliteration}"\n\n${activeTranslation}\n\nEduForEveryone: https://eduforeveryone.com/duas`;
    try {
      await navigator.clipboard.writeText(text);
      showToast("📋 Dua text copied to clipboard!");
    } catch {
      showToast("⚠️ Could not copy text.");
    }
  };

  /**
   * Opens high-resolution image preview popup (ideal for Mobile tap-and-hold saving)
   */
  const openImagePreviewModal = () => {
    if (!canvasRef.current) return;
    try {
      const dataUrl = canvasRef.current.toDataURL("image/png");
      setPreviewImageUrl(dataUrl);
    } catch (err) {
      console.error("Failed to generate preview data URL:", err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[60] max-w-[90vw] bg-gray-900 text-white text-xs sm:text-sm font-medium px-4 py-3 rounded-2xl shadow-2xl border border-teal-500/40 flex items-center gap-2 animate-bounce">
          <span>🔔</span>
          <span className="leading-snug">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 text-gray-400 hover:text-white">✕</button>
        </div>
      )}

      {/* Main Modal Container */}
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[94vh] overflow-y-auto shadow-2xl border border-gray-100 flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">🖼️</span>
            <div>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">Islamic Frame Card Designer</h3>
              <p className="text-xs text-gray-500">Custom theme, font sizes & direct WhatsApp picture sharing</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all font-bold"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-5 flex-1">

          {/* Theme Frame Picker */}
          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">
              1. Select Islamic Frame Theme:
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {ISLAMIC_FRAMES.map(frame => (
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

          {/* Text Size Controls */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-4">
            <label className="block text-xs uppercase font-bold text-gray-700 tracking-wider">
              2. Adjust Text Sizes:
            </label>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Arabic Size */}
              <div>
                <div className="flex items-center justify-between mb-1 text-xs">
                  <span className="font-bold text-gray-700">Arabic Text Size:</span>
                  <span className="text-teal-700 font-bold">{arabicFontSize}px</span>
                </div>
                <input
                  type="range"
                  min={28}
                  max={64}
                  value={arabicFontSize}
                  onChange={e => setArabicFontSize(Number(e.target.value))}
                  className="w-full accent-teal-600 cursor-pointer"
                />
              </div>

              {/* Translation Size */}
              <div>
                <div className="flex items-center justify-between mb-1 text-xs">
                  <span className="font-bold text-gray-700">Translation Text Size:</span>
                  <span className="text-teal-700 font-bold">{translationFontSize}px</span>
                </div>
                <input
                  type="range"
                  min={16}
                  max={36}
                  value={translationFontSize}
                  onChange={e => setTranslationFontSize(Number(e.target.value))}
                  className="w-full accent-teal-600 cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Font Picker Controls */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-4">
            <label className="block text-xs uppercase font-bold text-gray-700 tracking-wider">
              3. Choose Typography Style:
            </label>

            <div className="grid sm:grid-cols-2 gap-4">
              {/* Arabic Font Selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Arabic Calligraphy Font:</label>
                <select
                  value={selectedArabicFont}
                  onChange={e => setSelectedArabicFont(e.target.value)}
                  className="w-full text-xs font-bold text-gray-800 bg-white border border-gray-300 rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {ARABIC_FONTS.map(f => (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Translation Font Selector */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1.5">Translation Font Style:</label>
                <select
                  value={selectedTransFont}
                  onChange={e => setSelectedTransFont(e.target.value)}
                  className="w-full text-xs font-bold text-gray-800 bg-white border border-gray-300 rounded-xl p-2.5 outline-none focus:ring-2 focus:ring-teal-500"
                >
                  {TRANSLATION_FONTS.map(f => (
                    <option key={f.id} value={f.id}>
                      {f.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Canvas Live Preview */}
          <div className="flex flex-col items-center justify-center bg-gray-900 rounded-2xl p-3 sm:p-4 shadow-inner overflow-hidden relative">
            <div className="w-full flex items-center justify-between text-[11px] text-gray-400 mb-2 font-medium px-1">
              <span>✨ Live High-Resolution Frame Card</span>
              <button
                onClick={openImagePreviewModal}
                className="text-teal-400 hover:text-teal-300 underline font-semibold flex items-center gap-1"
              >
                <span>🔍 Full View / Save</span>
              </button>
            </div>
            
            <canvas
              ref={canvasRef}
              className="max-w-full h-auto max-h-[440px] rounded-xl shadow-2xl border border-gray-800"
            />

            <p className="text-[11px] text-gray-400 mt-2 text-center">
              💡 Tip: On mobile devices, you can tap &apos;Share Picture&apos; or tap &apos;Full View / Save&apos; to save to Photos.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-gray-100 bg-gray-50/70 rounded-b-3xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 sticky bottom-0 bg-white z-10">
          
          {/* Left Action: Close & Text Options */}
          <div className="flex items-center gap-2 order-2 sm:order-1">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-3.5 py-2.5 text-xs font-bold text-gray-600 hover:bg-gray-200 rounded-xl transition-all"
            >
              Close
            </button>
            <button
              onClick={handleCopyText}
              title="Copy Dua text to clipboard"
              className="flex-1 sm:flex-initial px-3 py-2.5 text-xs font-semibold text-gray-700 bg-white hover:bg-gray-100 border border-gray-200 rounded-xl transition-all flex items-center justify-center gap-1"
            >
              <span>📋</span> Copy Text
            </button>
            <button
              onClick={handleShareTextOnly}
              title="Send text-only to WhatsApp"
              className="hidden md:flex px-3 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-xl transition-all items-center gap-1"
            >
              <span>💬</span> Text WhatsApp
            </button>
          </div>

          {/* Right Action: Primary Share & Download Image Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 order-1 sm:order-2">
            
            {/* Share Picture Button (WhatsApp & Mobile Apps) */}
            <button
              onClick={handleShareImageToWhatsApp}
              disabled={isGenerating}
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <span>📲</span> {isGenerating ? "Processing..." : "Share Picture (WhatsApp / Apps)"}
            </button>

            {/* Download HD Image Button */}
            <button
              onClick={handleDownloadImage}
              disabled={isGenerating}
              className="px-4 py-2.5 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white text-xs sm:text-sm font-bold rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5"
            >
              <span>📥</span> {isGenerating ? "Preparing..." : "Download HD Picture (PNG)"}
            </button>

          </div>
        </div>

      </div>

      {/* Mobile Save Image Preview Overlay Modal */}
      {previewImageUrl && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-5 shadow-2xl border border-gray-100 text-center space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b pb-3">
              <h4 className="font-bold text-gray-900 text-sm sm:text-base">📱 Save Islamic Frame Picture</h4>
              <button
                onClick={() => setPreviewImageUrl(null)}
                className="text-gray-400 hover:text-gray-700 font-bold text-lg p-1"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-teal-700 font-semibold bg-teal-50 p-2.5 rounded-xl border border-teal-200">
              👉 <strong>Mobile users:</strong> Press and hold (long tap) the image below, then select <strong>&quot;Save to Photos&quot;</strong> or <strong>&quot;Share&quot;</strong>.
            </p>

            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-gray-900 inline-block max-w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={previewImageUrl}
                alt="Islamic Frame Card Preview"
                className="max-h-[55vh] w-auto mx-auto object-contain"
              />
            </div>

            <div className="flex items-center justify-center gap-2 pt-2">
              <button
                onClick={() => {
                  const blob = canvasToBlobSync(canvasRef.current!);
                  triggerBrowserDownload(blob, `EduForEveryone-Dua-${dua.id}.png`);
                }}
                className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl shadow transition-all flex items-center gap-1"
              >
                <span>📥</span> Download File
              </button>

              <button
                onClick={() => setPreviewImageUrl(null)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-bold rounded-xl transition-all"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
