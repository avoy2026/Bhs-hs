"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "motion/react";

const TOTAL_FRAMES = 120;

const getFrameSrc = (index: number) =>
  `/scrolling-effects/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

const CINEMATIC_LINES = [
  {
    id: "line-1",
    eyebrow: "Chapter I",
    text: "The weakest hunter\nin a world of monsters.",
    inStart: 0.04, inEnd: 0.12, outStart: 0.22, outEnd: 0.28,
  },
  {
    id: "line-2",
    eyebrow: "Chapter II",
    text: "No mana. No rank.\nNo reason to survive.",
    inStart: 0.28, inEnd: 0.36, outStart: 0.46, outEnd: 0.52,
  },
  {
    id: "line-3",
    eyebrow: "Chapter III",
    text: "Until the System\nchose him.",
    inStart: 0.52, inEnd: 0.60, outStart: 0.70, outEnd: 0.76,
  },
  {
    id: "line-4",
    eyebrow: "Chapter IV",
    text: "Arise.",
    inStart: 0.76, inEnd: 0.84, outStart: 0.94, outEnd: 1.0,
  },
] as const;

/** object-fit: cover math for canvas */
function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  const cw = ctx.canvas.width;
  const ch = ctx.canvas.height;
  const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
  const sw = img.naturalWidth * scale;
  const sh = img.naturalHeight * scale;
  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
}

// ── Cinematic text block ────────────────────────────────────────────────────
function CinematicText({
  eyebrow,
  text,
  opacity,
  y,
}: {
  eyebrow: string;
  text: string;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}) {
  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 z-20 flex flex-col items-start justify-center pointer-events-none px-10 md:px-20 lg:px-32"
    >
      <span className="mb-3 text-[10px] font-semibold uppercase tracking-[0.5em] text-white/40">
        {eyebrow}
      </span>
      <h2
        className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white"
        style={{
          textShadow: "0 2px 40px rgba(0,0,0,0.8)",
          whiteSpace: "pre-line",
        }}
      >
        {text}
      </h2>
    </motion.div>
  );
}

// ── Main component ──────────────────────────────────────────────────────────
export default function HunterScrollProfile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imagesRef    = useRef<HTMLImageElement[]>([]);
  const [loaded,      setLoaded     ] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  // Raw scroll progress — used directly for frame index (no spring lag)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Spring ONLY for overlay text — feels natural on text, not on video frames
  const textProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.0001,
  });

  // Frame index mapped directly from raw scroll (1:1 with finger/wheel)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

  // Text overlays use the smoother spring-based progress
  const hintOpacity  = useTransform(textProgress, [0, 0.06], [1, 0]);

  const line1Opacity = useTransform(textProgress,
    [CINEMATIC_LINES[0].inStart, CINEMATIC_LINES[0].inEnd, CINEMATIC_LINES[0].outStart, CINEMATIC_LINES[0].outEnd],
    [0, 1, 1, 0]);
  const line1Y       = useTransform(textProgress,
    [CINEMATIC_LINES[0].inStart, CINEMATIC_LINES[0].inEnd], [28, 0]);

  const line2Opacity = useTransform(textProgress,
    [CINEMATIC_LINES[1].inStart, CINEMATIC_LINES[1].inEnd, CINEMATIC_LINES[1].outStart, CINEMATIC_LINES[1].outEnd],
    [0, 1, 1, 0]);
  const line2Y       = useTransform(textProgress,
    [CINEMATIC_LINES[1].inStart, CINEMATIC_LINES[1].inEnd], [28, 0]);

  const line3Opacity = useTransform(textProgress,
    [CINEMATIC_LINES[2].inStart, CINEMATIC_LINES[2].inEnd, CINEMATIC_LINES[2].outStart, CINEMATIC_LINES[2].outEnd],
    [0, 1, 1, 0]);
  const line3Y       = useTransform(textProgress,
    [CINEMATIC_LINES[2].inStart, CINEMATIC_LINES[2].inEnd], [28, 0]);

  const line4Opacity = useTransform(textProgress,
    [CINEMATIC_LINES[3].inStart, CINEMATIC_LINES[3].inEnd, CINEMATIC_LINES[3].outStart, CINEMATIC_LINES[3].outEnd],
    [0, 1, 1, 0]);
  const line4Y       = useTransform(textProgress,
    [CINEMATIC_LINES[3].inStart, CINEMATIC_LINES[3].inEnd], [28, 0]);

  // Preload all frames
  useEffect(() => {
    const imgs: HTMLImageElement[] = [];
    let count = 0;
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFrameSrc(i);
      img.onload = () => {
        count++;
        setLoadedCount(count);
        if (count === TOTAL_FRAMES) setLoaded(true);
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;
  }, []);

  // Resize canvas to fill viewport exactly
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  // requestAnimationFrame loop — reads the latest frame index every display frame.
  // This is the Apple-style approach: silky smooth because it never misses a rAF tick.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let lastIdx = -1;
    let rafId: number;

    const tick = () => {
      const raw = frameIndex.get();                                     // 0 → 119 (float)
      const idx = Math.min(Math.max(Math.round(raw), 0), TOTAL_FRAMES - 1);

      if (idx !== lastIdx) {                                            // only repaint on change
        const img = imagesRef.current[idx];
        if (img?.complete) {
          const ctx = canvas.getContext("2d");
          if (ctx) drawCover(ctx, img);
          lastIdx = idx;
        }
      }

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [frameIndex]);

  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    <div
      ref={containerRef}
      id="hunter-journey"
      className="relative"
      style={{ height: "600vh" }}
    >
      {/* Sticky full-screen panel */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-black">

        {/* Canvas — cover-scaled frames, painted via rAF */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 select-none"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black gap-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-white/50">
              Initialising System · {loadPercent}%
            </p>
            <div className="w-56 h-[1px] bg-white/10 overflow-hidden">
              <div
                className="h-full bg-white/60 transition-all duration-75"
                style={{ width: `${loadPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* Cinematic text overlays */}
        <CinematicText eyebrow={CINEMATIC_LINES[0].eyebrow} text={CINEMATIC_LINES[0].text} opacity={line1Opacity} y={line1Y} />
        <CinematicText eyebrow={CINEMATIC_LINES[1].eyebrow} text={CINEMATIC_LINES[1].text} opacity={line2Opacity} y={line2Y} />
        <CinematicText eyebrow={CINEMATIC_LINES[2].eyebrow} text={CINEMATIC_LINES[2].text} opacity={line3Opacity} y={line3Y} />
        <CinematicText eyebrow={CINEMATIC_LINES[3].eyebrow} text={CINEMATIC_LINES[3].text} opacity={line4Opacity} y={line4Y} />

        {/* Section label */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-white/30">
            Hunter Profile · Shadow Monarch
          </p>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[1px] bg-white/10">
          <motion.div
            className="h-full bg-white/50 origin-left"
            style={{ scaleX: scrollYProgress }}
          />
        </div>

        {/* Scroll hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
            Scroll to awaken
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
