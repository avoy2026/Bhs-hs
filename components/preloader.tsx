"use client";

import { useEffect } from "react";
import { motion } from "motion/react";

type PreloaderProps = {
  onComplete?: () => void;
};

export default function Preloader({ onComplete }: PreloaderProps) {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      onComplete?.();
    }, 4800);

    return () => {
      window.clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.6, ease: "easeInOut" },
      }}
    >
      <div className="flex flex-col items-center justify-center text-center p-4">
        {/* OPENING GIF — Immediate priority rendering */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <img
            src="/preloading/openeing.gif"
            alt="Welcome to Baramohanpur High School"
            className="w-full h-full object-contain"
            loading="eager"
          />
        </div>

        {/* HANDWRITTEN TEXT BELOW GIF */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-handwritten text-3xl md:text-5xl text-[var(--brand-navy)] font-bold tracking-wide"
        >
          Welcome To Our School
        </motion.p>
      </div>
    </motion.div>
  );
}