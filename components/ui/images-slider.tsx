"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
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
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

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

  const loadImages = useCallback(() => {
    const loadPromises = images.map((image) => {
      return new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = reject;
      });
    });

    Promise.all(loadPromises)
      .then((loadedImages) => {
        setLoadedImages(loadedImages);
      })
      .catch((error) => console.error("Failed to load images", error));
  }, [images]);

  useEffect(() => {
    loadImages();
  }, [loadImages]);
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
      scale: 1.15,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.645, 0.045, 0.355, 1.0] as const,
      },
    },
    upExit: {
      opacity: 0.6,
      y: "-150%",
      scale: 1.08,
      transition: {
        duration: 1.1,
      },
    },
    downExit: {
      opacity: 0.6,
      y: "150%",
      scale: 1.08,
      transition: {
        duration: 1.1,
      },
    },
  };

  const kenBurnsVariants = {
    animate: {
      scale: [1, 1.12],
      x: [0, -10],
      y: [0, -6],
      transition: {
        scale: {
          duration: 6.5,
          ease: "easeInOut" as const,
        },
        x: {
          duration: 6.5,
          ease: "easeInOut" as const,
        },
        y: {
          duration: 6.5,
          ease: "easeInOut" as const,
        },
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

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
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence>
          <motion.div
            key={currentIndex + "wrap"}
            className="absolute inset-0 h-full w-full"
          >
            <motion.img
              key={currentIndex}
              src={loadedImages[currentIndex]}
              initial="initial"
              animate={["visible", "animate"]}
              exit={direction === "up" ? "upExit" : "downExit"}
              variants={{ ...slideVariants, ...kenBurnsVariants }}
              className="image h-full w-full absolute inset-0 object-cover object-center"
              alt="School campus"
            />
          </motion.div>
        </AnimatePresence>
      )}

      {/* Slide indicator dots */}
      {areImagesLoaded && (
        <div className="absolute bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2">
          {loadedImages.map((_, idx) => {
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
      )}
    </div>
  );
};
