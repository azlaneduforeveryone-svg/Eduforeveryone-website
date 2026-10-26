import { useEffect, useState } from 'react'

/*
  EduForEveryone logo, redrawn as SVG so the people can move.
  People walk up the winding road from the base of the bulb to the open book,
  getting smaller with distance and fading out as they reach the book. Loops forever.
  With prefers-reduced-motion the people stand still, as in the original logo.
*/

// Road from the bottom of the bulb up to the book (people walk along this)
const WALK =
  'M 452 712 C 458 676, 462 640, 480 612 C 506 572, 566 560, 566 520 C 566 480, 452 492, 442 452 C 432 412, 514 420, 532 380 C 546 350, 508 336, 512 306'

const WALKERS = [
  { begin: 0, scale: 1, child: false },
  { begin: 1.9, scale: 1, child: false },
  { begin: 3.8, scale: 0.72, child: true },
  { begin: 5.7, scale: 1, child: false },
  { begin: 7.6, scale: 0.95, child: false },
]
const DUR = 9.5

// Still positions used when motion is reduced (close to the original logo)
const STILL = [
  { x: 418, y: 700, s: 1 },
  { x: 492, y: 668, s: 1 },
  { x: 535, y: 715, s: 0.72 },
  { x: 575, y: 630, s: 0.95 },
  { x: 630, y: 580, s: 0.9 },
]

function Person({ child, animate }: { child: boolean; animate: boolean }) {
  // Drawn with feet at y = 0, about 100 units tall
  return (
    <g>
      <circle cx="0" cy={child ? -66 : -88} r={child ? 9 : 11} />
      <path
        d={
          child
            ? 'M -9 -54 Q 0 -60 9 -54 L 10 -26 L -10 -26 Z'
            : 'M -12 -73 Q 0 -79 12 -73 L 14 -36 L -14 -36 Z'
        }
      />
      <g className={animate ? 'home-leg home-leg-a' : undefined}>
        <path d={child ? 'M -9 -27 L -2 -27 L -1 0 L -9 0 Z' : 'M -12 -37 L -2 -37 L -1 0 L -11 0 Z'} />
      </g>
      <g className={animate ? 'home-leg home-leg-b' : undefined}>
        <path d={child ? 'M 2 -27 L 9 -27 L 9 0 L 1 0 Z' : 'M 2 -37 L 12 -37 L 11 0 L 1 0 Z'} />
      </g>
      <g className={animate ? 'home-leg home-leg-b' : undefined}>
        <path d={child ? 'M -10 -53 L -6 -53 L -11 -34 L -14 -35 Z' : 'M -13 -71 L -8 -71 L -15 -46 L -19 -47 Z'} />
      </g>
      <g className={animate ? 'home-leg home-leg-a' : undefined}>
        <path d={child ? 'M 6 -53 L 10 -53 L 14 -35 L 11 -34 Z' : 'M 8 -71 L 13 -71 L 19 -47 L 15 -46 Z'} />
      </g>
    </g>
  )
}

export default function HeroLogo() {
  const [reduce, setReduce] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!mq) return
    setReduce(mq.matches)
    const on = () => setReduce(mq.matches)
    mq.addEventListener?.('change', on)
    return () => mq.removeEventListener?.('change', on)
  }, [])

  return (
    <div className="home-logo" role="img" aria-label="EduForEveryone logo">
      <svg viewBox="230 70 570 900" aria-hidden="true">
        <defs>
          <linearGradient id="hl-gold" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffcc33" />
            <stop offset="1" stopColor="#f5a623" />
          </linearGradient>
          <linearGradient id="hl-road" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0" stopColor="#3a2257" />
            <stop offset="0.55" stopColor="#8a6a8e" />
            <stop offset="1" stopColor="#f5b52a" />
          </linearGradient>
          <linearGradient id="hl-neck" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f5b52a" />
            <stop offset="1" stopColor="#3a2257" />
          </linearGradient>
        </defs>

        {/* Bulb */}
        <path
          className="home-bulb"
          d="M 383 712 C 362 640, 300 565, 262 472 C 212 350, 252 196, 384 122 C 470 74, 558 74, 646 122 C 778 196, 818 350, 768 472 C 732 560, 676 620, 652 672"
          fill="none"
          stroke="url(#hl-gold)"
          strokeWidth="22"
          strokeLinecap="round"
        />
        <path d="M 652 672 C 636 712, 618 732, 590 744" fill="none" stroke="url(#hl-neck)" strokeWidth="22" strokeLinecap="round" />

        {/* Book */}
        <g className="home-book" fill="none" stroke="url(#hl-gold)" strokeWidth="14" strokeLinejoin="round">
          <path d="M 512 300 C 488 282, 456 276, 430 280 L 430 186 C 456 182, 488 188, 512 206 Z" />
          <path d="M 512 300 C 536 282, 568 276, 594 280 L 594 186 C 568 182, 536 188, 512 206 Z" />
          <path d="M 412 200 L 412 296 C 448 290, 486 296, 512 314 C 538 296, 576 290, 612 296 L 612 200" />
        </g>

        {/* Road */}
        <path d={WALK} fill="none" stroke="url(#hl-road)" strokeWidth="30" strokeLinecap="round" opacity="0.9" />

        {/* People */}
        <g fill="#2b1745">
          {reduce
            ? STILL.map((p, i) => (
                <g key={i} transform={`translate(${p.x} ${p.y}) scale(${p.s * 1.3})`}>
                  <Person child={WALKERS[i].child} animate={false} />
                </g>
              ))
            : WALKERS.map((w, i) => (
                <g key={i} opacity="0">
                  <animateMotion dur={`${DUR}s`} begin={`${-w.begin}s`} repeatCount="indefinite" path={WALK} keyTimes="0;1" keyPoints="0;1" calcMode="linear" />
                  <animate attributeName="opacity" dur={`${DUR}s`} begin={`${-w.begin}s`} repeatCount="indefinite" values="0;1;1;0" keyTimes="0;0.08;0.8;1" />
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="scale"
                      dur={`${DUR}s`}
                      begin={`${-w.begin}s`}
                      repeatCount="indefinite"
                      values={`${w.scale * 1.35};${w.scale * 0.4}`}
                    />
                    <Person child={w.child} animate />
                  </g>
                </g>
              ))}
        </g>

        {/* Base */}
        <g fill="#2b1745">
          <rect x="394" y="752" width="242" height="34" rx="17" />
          <rect x="404" y="802" width="222" height="30" rx="15" />
          <rect x="416" y="848" width="198" height="26" rx="13" />
          <path d="M 440 884 Q 515 962 590 884 Z" />
        </g>
      </svg>
    </div>
  )
}
