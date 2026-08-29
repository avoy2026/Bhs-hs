"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: ReturnType<typeof setInterval> | undefined;
    if (autoplay) {
      interval = setInterval(() => {
        handleNext();
      }, 6500);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = {
    initial: {
      scale: 1.04,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    upExit: {
      opacity: 0,
      scale: 1.02,
      transition: {
        duration: 0.8,
      },
    },
    downExit: {
      opacity: 0,
      scale: 1.02,
      transition: {
        duration: 0.8,
      },
    },
  };

  const kenBurnsVariants = {
    animate: {
      scale: [1, 1.03],
      transition: {
        scale: {
          duration: 7,
          ease: "easeInOut" as const,
        },
      },
    },
  };

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {/* Always render children and overlay immediately — no waiting for images */}
      {children}
      {overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      <AnimatePresence>
        <motion.div
          key={currentIndex + "wrap"}
          className="absolute inset-0 h-full w-full"
        >
          <motion.div
            key={currentIndex}
            initial="initial"
            animate={["visible", "animate"]}
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={{ ...slideVariants, ...kenBurnsVariants }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={images[currentIndex]}
              alt="School campus"
              fill
              className="object-cover object-[center_35%]"
              // Only the very first hero image gets priority; others load lazily
              priority={currentIndex === 0}
              sizes="100vw"
              quality={82}
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Preload next image in background without blocking */}
      {images[currentIndex + 1] && (
        <link
          rel="prefetch"
          href={images[currentIndex + 1]}
          as="image"
        />
      )}

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
        {images.map((_, idx) => {
          const active = idx === currentIndex;
          return (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                active
                  ? "w-8 bg-[var(--brand-gold)]"
                  : "w-1.5 bg-white/45 hover:bg-white/70"
              )}
            />
          );
        })}
      </div>
    </div>
  );
};
