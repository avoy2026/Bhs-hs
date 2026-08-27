"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const welcomeWords = [
  "Welcome to",
  "Baramohanpur High School",
];

type PreloaderProps = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wordTimer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % welcomeWords.length);
    }, 320);

    // Purely cosmetic progress counter, synced to the same 1400ms window
    const progressTimer = window.setInterval(() => {
      setProgress((prev) => (prev < 96 ? prev + Math.random() * 14 : prev));
    }, 120);

    const timer = window.setTimeout(() => {
      onComplete?.();
    }, 1400);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(wordTimer);
      window.clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(255,255,255,1),_rgba(248,240,213,0.92)_38%,_rgba(244,236,220,0.96)_100%)]"
      initial={{ opacity: 1, y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* Ambient floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]/40"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 0.6, 0], y: [-10, -40] }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Logo with rotating glow ring */}
      <div className="relative mb-6 flex h-24 w-24 items-center justify-center md:h-32 md:w-32">
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, var(--brand-gold), transparent 30%, transparent 70%, var(--brand-gold))",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-[3px] rounded-full bg-[#faf3e0]"
        />
        <motion.img
          src="/images/branding/school-logo.png.jpeg"
          alt="Baramohanpur High School"
          className="relative h-[88%] w-[88%] rounded-full object-cover shadow-[0_12px_35px_rgba(201,162,39,0.25)]"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        {/* soft pulsing halo */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[var(--brand-gold)]/20 blur-xl"
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.15, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.p
        className="mb-7 text-[0.7rem] font-semibold tracking-[0.38em] text-[var(--brand-gold)] uppercase md:text-sm"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        Baramohanpur High School
      </motion.p>

      <div className="flex h-24 items-center justify-center overflow-hidden md:h-32">
        <AnimatePresence mode="wait">
          <motion.h1
            key={welcomeWords[wordIndex]}
            className="relative px-4 text-center text-5xl font-black tracking-tight text-[var(--brand-navy)] sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 1.06 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {welcomeWords[wordIndex]}
            {/* shimmer sweep */}
            <motion.span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{ mixBlendMode: "overlay" }}
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.3 }}
            />
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Gold divider */}
      <motion.div
        className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Progress bar + percentage */}
      <div className="mt-5 flex w-40 flex-col items-center gap-2 md:w-52">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-[var(--brand-navy)]/10">
          <motion.div
            className="h-full rounded-full bg-[var(--brand-gold)]"
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          />
        </div>
        <motion.span className="text-[0.65rem] font-medium tracking-widest text-[var(--brand-navy)]/50">
          {Math.min(Math.round(progress), 99)}%
        </motion.span>
      </div>
    </motion.div>
  );
}