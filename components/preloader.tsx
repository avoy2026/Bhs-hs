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
      setWordIndex((prev) => Math.min(prev + 1, welcomeWords.length - 1));
    }, 1500);

    const progressTimer = window.setInterval(() => {
      setProgress((prev) => {
        if (prev < 96) {
          return Math.min(prev + Math.random() * 3.5, 96);
        }
        return prev;
      });
    }, 100);

    const timer = window.setTimeout(() => {
      onComplete?.();
    }, 3800);

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
      exit={{
        y: "-100%",
        opacity: 1,
      }}
      transition={{
        duration: 0.45,
        ease: [0.76, 0, 0.24, 1],
      }}
    >
      {/* Ambient floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 14 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-[var(--brand-gold)]/30"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
            }}
            initial={{
              opacity: 0,
              y: 0,
              scale: 0.7,
            }}
            animate={{
              opacity: [0, 0.45, 0],
              y: [-10, -40],
              scale: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 4 + (i % 4),
              repeat: Infinity,
              delay: i * 0.25,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Soft background glow */}
      <motion.div
        className="pointer-events-none absolute h-[420px] w-[420px] rounded-full bg-[var(--brand-gold)]/10 blur-3xl"
        initial={{
          opacity: 0,
          scale: 0.75,
        }}
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [0.9, 1.08, 0.9],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Logo with rotating glow ring */}
      <motion.div
        className="relative mb-7 flex h-24 w-24 items-center justify-center md:h-32 md:w-32"
        initial={{
          opacity: 0,
          scale: 0.75,
          y: 12,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {/* Rotating gold ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, var(--brand-gold), transparent 30%, transparent 70%, var(--brand-gold))",
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Inner background */}
        <motion.div
          className="absolute inset-[3px] rounded-full bg-[#faf3e0]"
          animate={{
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* School logo */}
        <motion.img
          src="/images/branding/school-logo.png.jpeg"
          alt="Baramohanpur High School"
          className="relative h-[88%] w-[88%] rounded-full object-cover shadow-[0_12px_35px_rgba(201,162,39,0.25)]"
          animate={{
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 3.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Soft pulsing halo */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[var(--brand-gold)]/15 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.35, 0.12, 0.35],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* School Name */}
      <motion.p
        className="mb-8 text-center text-[0.65rem] font-semibold uppercase tracking-[0.38em] text-[var(--brand-gold)] md:text-sm"
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
          delay: 0.45,
          ease: "easeOut",
        }}
      >
        Baramohanpur High School
      </motion.p>

      {/* Main Welcome Text */}
      <div className="flex min-h-[110px] items-center justify-center overflow-hidden px-4 md:min-h-[140px]">
        <AnimatePresence mode="wait">
          <motion.h1
            key={welcomeWords[wordIndex]}
            className="relative max-w-[95vw] text-center text-4xl font-black leading-tight tracking-tight text-[var(--brand-navy)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.96,
              filter: "blur(6px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            exit={{
              opacity: 0,
              y: -24,
              scale: 1.015,
              filter: "blur(4px)",
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {welcomeWords[wordIndex]}

            {/* Gentle shimmer */}
            <motion.span
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/45 to-transparent"
              style={{
                mixBlendMode: "overlay",
              }}
              initial={{
                x: "-130%",
              }}
              animate={{
                x: "130%",
              }}
              transition={{
                duration: 1.8,
                delay: 0.5,
                ease: "easeInOut",
              }}
            />
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Gold divider */}
      <motion.div
        className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent"
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        animate={{
          scaleX: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Progress bar + percentage */}
      <motion.div
        className="mt-5 flex w-40 flex-col items-center gap-2 md:w-52"
        initial={{
          opacity: 0,
          y: 8,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.8,
        }}
      >
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-[var(--brand-navy)]/10">
          <motion.div
            className="h-full rounded-full bg-[var(--brand-gold)]"
            animate={{
              width: `${Math.min(progress, 100)}%`,
            }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
            }}
          />
        </div>

        <motion.span
          className="text-[0.65rem] font-medium tracking-widest text-[var(--brand-navy)]/50"
          animate={{
            opacity: [0.5, 0.75, 0.5],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Math.min(Math.round(progress), 99)}%
        </motion.span>
      </motion.div>
    </motion.div>
  );
}