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
    }, 2800);

    return () => {
      window.clearTimeout(timer);
      window.clearInterval(wordTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex h-screen w-screen flex-col items-center justify-center bg-white"
      initial={{ opacity: 1, y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
    >
      <p className="mb-6 text-[0.65rem] font-semibold tracking-[0.35em] text-[var(--brand-gold)] uppercase md:text-xs">
        Boromohonpur High School
      </p>
      <div className="flex h-20 items-center justify-center overflow-hidden md:h-28">
        <AnimatePresence mode="wait">
          <motion.h1
            key={welcomeWords[wordIndex]}
            className="px-4 text-center text-4xl font-bold text-blue-900 md:text-6xl"
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
        className="mt-8 h-px w-16 bg-[var(--brand-gold)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </motion.div>
  );
}
