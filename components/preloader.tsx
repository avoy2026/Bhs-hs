"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const welcomeWords = [
  "Welcome",
  "স্বাগতম",
  "Bienvenue",
  "ようこそ",
];

type PreloaderProps = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const wordTimer = window.setInterval(() => {
      setWordIndex((prev) => (prev + 1) % welcomeWords.length);
    }, 320);

    const timer = window.setTimeout(() => {
      onComplete?.();
    }, 1400);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(wordTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex h-screen w-screen flex-col items-center justify-center bg-[radial-gradient(circle_at_top,_rgba(255,255,255,1),_rgba(248,240,213,0.92)_38%,_rgba(244,236,220,0.96)_100%)]"
      initial={{ opacity: 1, y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
    >
      {/* School Logo */}
      <motion.img
        src="/images/branding/school-logo.png.jpeg"
        alt="Baramohanpur High School"
        className="mb-6 h-24 w-24 rounded-full object-cover ring-4 ring-[var(--brand-gold)]/35 shadow-[0_12px_35px_rgba(201,162,39,0.2)] md:h-32 md:w-32"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      <p className="mb-7 text-[0.7rem] font-semibold tracking-[0.38em] text-[var(--brand-gold)] uppercase md:text-sm">
        Baramohanpur High School
      </p>
      <div className="flex h-24 items-center justify-center overflow-hidden md:h-32">
        <AnimatePresence mode="wait">
          <motion.h1
            key={welcomeWords[wordIndex]}
            className="px-4 text-center text-5xl font-black tracking-tight text-[var(--brand-navy)] sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 18, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -18, scale: 1.06 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
          >
            {welcomeWords[wordIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>
      <motion.div
        className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
