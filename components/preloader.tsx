"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const narrativeSteps = [
  { word: "Knowledge", subtext: "জ্ঞান · The Light of Learning" },
  { word: "Character", subtext: "চরিত্র · Discipline & Integrity" },
  { word: "Community", subtext: "সমাজ · A 150-Year Heritage" },
  { word: "Baramohanpur High School", subtext: "Estd. 1878 · Shaping Young Minds" },
];

type PreloaderProps = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [yearCount, setYearCount] = useState(1878);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Step progression (Knowledge -> Character -> Community -> School Name)
    const stepInterval = window.setInterval(() => {
      setStepIndex((prev) => {
        if (prev < narrativeSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 550);

    // Dynamic Year Milestone Counter (1878 -> 2028)
    const startYear = 1878;
    const targetYear = 2028;
    const totalDuration = 2200; // ms
    const startTime = performance.now();

    const animateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progressFraction = Math.min(elapsed / totalDuration, 1);
      
      // Easing out cubic
      const eased = 1 - Math.pow(1 - progressFraction, 3);
      const currentYear = Math.round(startYear + (targetYear - startYear) * eased);
      const currentPct = Math.round(progressFraction * 100);

      setYearCount(currentYear);
      setProgress(currentPct);

      if (progressFraction < 1) {
        requestAnimationFrame(animateCounter);
      }
    };

    const animFrame = requestAnimationFrame(animateCounter);

    // Complete timer
    const completeTimer = window.setTimeout(() => {
      onComplete?.();
    }, 2400);

    return () => {
      window.clearInterval(stepInterval);
      window.clearTimeout(completeTimer);
      cancelAnimationFrame(animFrame);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_#162a4d_0%,_#0d192f_50%,_#091222_100%)] text-white"
      initial={{ opacity: 1, y: 0 }}
      exit={{
        y: "-100%",
        opacity: 1,
      }}
      transition={{
        duration: 0.65,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* Floating golden stardust embers */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[var(--brand-gold)]"
            style={{
              width: i % 3 === 0 ? "3px" : "2px",
              height: i % 3 === 0 ? "3px" : "2px",
              left: `${(i * 29 + 13) % 100}%`,
              top: `${(i * 41 + 17) % 100}%`,
            }}
            initial={{
              opacity: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 0.65, 0],
              y: [-10, -50],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3.5 + (i % 4),
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Central Ambient Golden Spotlight */}
      <motion.div
        className="pointer-events-none absolute h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,_rgba(201,162,39,0.18)_0%,_transparent_70%)] blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.08, 0.95] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heritage Badge */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--brand-gold)]/35 bg-[var(--brand-gold)]/10 px-4 py-1.5 text-[0.68rem] font-semibold tracking-[0.28em] text-[var(--brand-gold)] uppercase backdrop-blur-md"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)] animate-pulse" />
        ESTD. 1878 · 150 YEARS OF EXCELLENCE
      </motion.div>

      {/* Central Emblem with Dual Concentric Gold Rings */}
      <motion.div
        className="relative mb-8 flex h-28 w-28 items-center justify-center md:h-36 md:w-36"
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer Rotating Dashed Gold Ring */}
        <motion.div
          className="absolute inset-[-8px] rounded-full border border-dashed border-[var(--brand-gold)]/40"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Conic Glow Ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, var(--brand-gold), transparent 35%, transparent 65%, var(--brand-gold))",
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Inner Backdrop */}
        <div className="absolute inset-[3px] rounded-full bg-[#0d192f] ring-1 ring-[var(--brand-gold)]/30" />

        {/* School Logo */}
        <motion.img
          src="/images/branding/school-logo.png"
          alt="Baramohanpur High School Crest"
          className="relative h-[86%] w-[86%] rounded-full object-cover shadow-[0_15px_35px_rgba(201,162,39,0.35)] ring-1 ring-white/10"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Narrative Words Reveal (Knowledge -> Character -> Community -> Baramohanpur High School) */}
      <div className="flex min-h-[90px] flex-col items-center justify-center px-4 text-center md:min-h-[110px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={narrativeSteps[stepIndex].word}
            initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -14, filter: "blur(3px)" }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
              {stepIndex === narrativeSteps.length - 1 ? (
                <span className="bg-gradient-to-r from-white via-[#fef0c7] to-[var(--brand-gold)] bg-clip-text text-transparent">
                  {narrativeSteps[stepIndex].word}
                </span>
              ) : (
                <span className="text-white/95">
                  {narrativeSteps[stepIndex].word}
                </span>
              )}
            </h1>
            <p className="mt-2 text-xs md:text-sm font-medium tracking-wide text-[var(--brand-gold)]/90">
              {narrativeSteps[stepIndex].subtext}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Milestone Ticker & Progress Bar */}
      <motion.div
        className="mt-8 flex flex-col items-center gap-2.5 w-64 md:w-80"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
      >
        {/* Years & Progress Label */}
        <div className="flex w-full items-center justify-between text-xs font-semibold tracking-wider text-white/70">
          <span className="text-[var(--brand-gold)] font-mono">
            Year {yearCount}
          </span>
          <span className="font-mono text-white/60">
            {progress}%
          </span>
        </div>

        {/* Progress Track */}
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-[var(--brand-gold)] to-[#fde68a]"
            style={{ width: `${progress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}