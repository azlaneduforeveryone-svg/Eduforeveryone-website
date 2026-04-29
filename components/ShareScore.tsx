"use client";

interface ShareProps {
  score: number;
  gameName: string;
  gameEmoji: string;
  detail?: string;   // e.g. "8/10 correct" or "streak 5"
  gameUrl: string;
}

export default function ShareScore({ score, gameName, gameEmoji, detail, gameUrl }: ShareProps) {
  const siteUrl = `https://eduforeveryone.com${gameUrl}`;

  const getMessage = () => {
    const lines = [
      `${gameEmoji} ${gameName} — EduForEveryone`,
      `🏆 Score: ${score}`,
      detail ? `📊 ${detail}` : "",
      ``,
      `🎮 Play free at:`,
      siteUrl,
      ``,
      `#EduForEveryone #FreeEducation #LearningIsFun`,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const encoded = encodeURIComponent(getMessage());
  const encodedUrl = encodeURIComponent(siteUrl);
  const encodedText = encodeURIComponent(`${gameEmoji} I scored ${score} on ${gameName}! ${detail ? `(${detail})` : ""} Play free at EduForEveryone 🎓`);

  const platforms = [
    {
      name: "WhatsApp",
      emoji: "💬",
      color: "bg-green-500 hover:bg-green-600",
      url: `https://wa.me/?text=${encoded}`,
    },
    {
      name: "Twitter/X",
      emoji: "🐦",
      color: "bg-gray-900 hover:bg-gray-800",
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
    },
    {
      name: "Facebook",
      emoji: "📘",
      color: "bg-blue-600 hover:bg-blue-700",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`,
    },
    {
      name: "Telegram",
      emoji: "✈️",
      color: "bg-sky-500 hover:bg-sky-600",
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(getMessage());
      // Show brief feedback
      const btn = document.getElementById("copy-btn");
      if (btn) { btn.textContent = "✅ Copied!"; setTimeout(() => { btn.textContent = "📋 Copy"; }, 2000); }
    } catch {
      // Fallback
      const ta = document.createElement("textarea");
      ta.value = getMessage();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
  };

  const nativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: `${gameName} — EduForEveryone`, text: getMessage(), url: siteUrl });
      } catch {}
    }
  };

  return (
    <div className="bg-gradient-to-r from-teal-50 to-indigo-50 border border-teal-100 rounded-2xl p-5">
      {/* Score card */}
      <div className="text-center mb-4">
        <p className="text-3xl mb-1">{gameEmoji}</p>
        <p className="font-black text-gray-900 text-lg">{gameName}</p>
        <p className="text-4xl font-black text-teal-600 my-1">{score}</p>
        {detail && <p className="text-gray-500 text-sm">{detail}</p>}
        <p className="text-xs text-gray-400 mt-1">eduforeveryone.com</p>
      </div>

      {/* Share label */}
      <p className="text-center text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
        🎉 Share your score!
      </p>

      {/* Social buttons */}
      <div className="grid grid-cols-2 gap-2 mb-2">
        {platforms.map(p => (
          <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer"
            className={`${p.color} text-white rounded-xl py-2.5 px-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors`}>
            <span>{p.emoji}</span>
            <span>{p.name}</span>
          </a>
        ))}
      </div>

      {/* Copy + Native share */}
      <div className="flex gap-2">
        <button id="copy-btn" onClick={copyToClipboard}
          className="flex-1 bg-white border border-gray-200 text-gray-700 rounded-xl py-2.5 text-sm font-semibold hover:border-teal-300 transition-colors">
          📋 Copy
        </button>
        {"share" in navigator && (
          <button onClick={nativeShare}
            className="flex-1 bg-white border border-gray-200 text-gray-700 rounded-xl py-2.5 text-sm font-semibold hover:border-teal-300 transition-colors">
            📤 Share
          </button>
        )}
      </div>
    </div>
  );
}