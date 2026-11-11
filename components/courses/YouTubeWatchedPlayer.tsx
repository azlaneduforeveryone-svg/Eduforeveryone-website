"use client";

import { useEffect, useRef, useState } from "react";

interface YouTubeWatchedPlayerProps {
  videoId: string;
  alreadyWatched: boolean;
  onWatched90Percent: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement | string,
        options: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (event: { target: YTPlayerInstance }) => void;
            onStateChange?: (event: { data: number; target: YTPlayerInstance }) => void;
          };
        }
      ) => YTPlayerInstance;
      PlayerState?: {
        PLAYING: number;
      };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

interface YTPlayerInstance {
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => number;
  destroy: () => void;
}

export default function YouTubeWatchedPlayer({
  videoId,
  alreadyWatched,
  onWatched90Percent,
}: YouTubeWatchedPlayerProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const watchedSecondsRef = useRef<Set<number>>(new Set());
  const lastTimeRef = useRef<number | null>(null);
  const completedRef = useRef<boolean>(alreadyWatched);
  const [percentWatched, setPercentWatched] = useState<number>(alreadyWatched ? 100 : 0);

  useEffect(() => {
    completedRef.current = alreadyWatched;
    if (alreadyWatched) setPercentWatched(100);
  }, [alreadyWatched]);

  useEffect(() => {
    let player: YTPlayerInstance | null = null;
    let intervalId: ReturnType<typeof setInterval> | null = null;

    const startTracking = (p: YTPlayerInstance) => {
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        try {
          // 1 = YT.PlayerState.PLAYING
          if (p.getPlayerState() !== 1) {
            lastTimeRef.current = null;
            return;
          }
          const current = p.getCurrentTime();
          const duration = p.getDuration();
          if (!duration || duration <= 0) return;

          const prev = lastTimeRef.current;
          // Only count genuine playback (delta <= 2.5 seconds, not skipping ahead)
          if (prev !== null && current >= prev && current - prev <= 2.5) {
            const startSec = Math.floor(prev);
            const endSec = Math.floor(current);
            for (let s = startSec; s <= endSec; s++) {
              watchedSecondsRef.current.add(s);
            }
            const ratio = Math.min(1, watchedSecondsRef.current.size / Math.floor(duration));
            const pct = Math.round(ratio * 100);
            setPercentWatched((old) => Math.max(old, pct));
            if (ratio >= 0.9 && !completedRef.current) {
              completedRef.current = true;
              onWatched90Percent();
            }
          }
          lastTimeRef.current = current;
        } catch {
          // ignore player teardown errors
        }
      }, 1000);
    };

    const initPlayer = () => {
      if (!containerRef.current || !window.YT || !window.YT.Player) return;
      player = new window.YT.Player(containerRef.current, {
        videoId,
        playerVars: {
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onStateChange: (e) => {
            if (e.data === 1) {
              lastTimeRef.current = e.target.getCurrentTime();
              startTracking(e.target);
            } else {
              lastTimeRef.current = null;
            }
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      const existingScript = document.querySelector(
        'script[src="https://www.youtube.com/iframe_api"]'
      );
      if (!existingScript) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        initPlayer();
      };
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
      if (player && typeof player.destroy === "function") {
        try {
          player.destroy();
        } catch {
          // ignore
        }
      }
    };
  }, [videoId, onWatched90Percent]);

  return (
    <div>
      <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-efe-line">
        <div ref={containerRef} className="w-full h-full" />
      </div>
      <div className="mt-2 flex items-center justify-between text-xs text-efe-muted">
        <span>
          {alreadyWatched
            ? "✅ Video watched (90%+ completed)"
            : "Watch at least 90% of the video without skipping ahead to complete Step 1."}
        </span>
        {!alreadyWatched && <span>{percentWatched}% watched</span>}
      </div>
    </div>
  );
}

