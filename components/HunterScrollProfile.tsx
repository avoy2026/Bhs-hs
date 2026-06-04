"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

const TOTAL_FRAMES = 120;

const getFrameSrc = (index: number) =>
  `/scrolling-effects/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;

const HUNTER_STATS = [
  { label: "Rank",     value: "S-Class" },
  { label: "Level",    value: "∞"       },
  { label: "Dungeons", value: "48"      },
  { label: "Power",    value: "Shadow"  },
] as const;

/**
 * Draw `img` onto `canvas` using "object-fit: cover" logic —
 * the image always fills the entire canvas, cropping symmetrically.
 */
function drawCover(ctx: CanvasRenderingContext2D, img: HTMLImageElement) {
  const cw = ctx.canvas.width;
  const ch = ctx.canvas.height;
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;

  const scale = Math.max(cw / iw, ch / ih);
  const sw = iw * scale;
  const sh = ih * scale;
  const sx = (cw - sw) / 2;
  const sy = (ch - sh) / 2;

  ctx.clearRect(0, 0, cw, ch);
  ctx.drawImage(img, sx, sy, sw, sh);
}

export default function HunterScrollProfile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imagesRef    = useRef<HTMLImageElement[]>([]);
  const [loaded,      setLoaded     ] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  /* ─── Scroll progress (Y-axis only, driven by container height) ─── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 18,
    restDelta: 0.0001,
  });

  const frameIndex    = useTransform(smoothProgress, [0, 1], [1, TOTAL_FRAMES]);
  const statsOpacity  = useTransform(smoothProgress, [0.05, 0.2], [0, 1]);
  const titleY        = useTransform(smoothProgress, [0, 0.15], [40, 0]);
  const titleOpacity  = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const glowOpacity   = useTransform(smoothProgress, [0.1, 0.5, 1], [0, 0.65, 0.35]);
  const hintOpacity   = useTransform(smoothProgress, [0, 0.08], [1, 0]); // ← hoisted here, NOT inside JSX

  /* ─── Preload all frames ─── */
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

  /* ─── Resize canvas to always match the viewport ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      // Repaint the current frame at new size
      const currentFrame = Math.min(
        Math.round(frameIndex.get()) - 1,
        TOTAL_FRAMES - 1
      );
      const img = imagesRef.current[currentFrame];
      if (img?.complete) {
        const ctx = canvas.getContext("2d");
        if (ctx) drawCover(ctx, img);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ─── Paint frame on every scroll tick (cover-scaled) ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    return frameIndex.on("change", (v) => {
      const idx = Math.min(Math.max(Math.round(v) - 1, 0), TOTAL_FRAMES - 1);
      const img = imagesRef.current[idx];
      if (!img?.complete) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      drawCover(ctx, img);
    });
  }, [frameIndex]);

  const loadPercent = Math.round((loadedCount / TOTAL_FRAMES) * 100);

  return (
    /*
     * 600vh tall outer div → the scroll distance.
     * The inner sticky div stays pinned to the top and fills the viewport.
     */
    <div
      ref={containerRef}
      id="hunter-journey"
      className="relative"
      style={{ height: "600vh" }}
    >
      {/* ── Sticky full-screen panel ── */}
      <div className="sticky top-0 h-screen w-screen overflow-hidden bg-black">

        {/* ── Canvas fills the entire viewport, drawn cover-scaled ── */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 select-none"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.5s ease",
          }}
        />

        {/* ── Ambient violet glow (above canvas) ── */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="pointer-events-none absolute inset-0 z-10"
        >
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[60vmin] w-[60vmin] rounded-full bg-violet-800/25 blur-[100px]" />
          <div className="absolute left-1/3 top-1/3 h-[35vmin] w-[35vmin] rounded-full bg-blue-900/15 blur-[80px]" />
        </motion.div>

        {/* ── Loading overlay ── */}
        {!loaded && (
          <div className="absolute inset-0 z-40 flex flex-col items-center justify-center bg-black gap-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-violet-400">
              Initialising System · {loadPercent}%
            </p>
            <div className="w-56 h-[2px] bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-violet-500 rounded-full transition-all duration-75"
                style={{ width: `${loadPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* ── Section eyebrow ── */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-20 text-center pointer-events-none">
          <p className="text-[10px] font-semibold uppercase tracking-[0.45em] text-violet-300/60">
            Hunter Profile · Shadow Monarch
          </p>
        </div>

        {/* ── Hunter name + title (bottom-centre) ── */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="absolute bottom-14 left-0 right-0 z-20 flex flex-col items-center gap-1 pointer-events-none"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white/90 drop-shadow-[0_2px_24px_rgba(139,92,246,0.6)]">
            Sung Jin-Woo
          </h2>
          <p className="text-[10px] uppercase tracking-[0.4em] text-violet-400/80">
            The Shadow Monarch
          </p>
        </motion.div>

        {/* ── Stats (right side, desktop) ── */}
        <motion.div
          style={{ opacity: statsOpacity }}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-5 pointer-events-none"
        >
          {HUNTER_STATS.map(({ label, value }) => (
            <div key={label} className="flex flex-col items-end gap-0.5">
              <span className="text-[9px] font-semibold uppercase tracking-[0.35em] text-violet-400/50">
                {label}
              </span>
              <span className="text-xl font-bold text-white/90 leading-none drop-shadow-lg">
                {value}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Y-axis scroll progress bar (bottom) ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20 h-[2px] bg-zinc-900/60">
          <motion.div
            className="h-full bg-violet-500 origin-left"
            style={{ scaleX: smoothProgress }}
          />
        </div>

        {/* ── Scroll-to-awaken hint (fades on first scroll) ── */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-zinc-500">
            Scroll to awaken
          </span>
          <div className="h-8 w-px bg-gradient-to-b from-violet-500/80 to-transparent animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
}
