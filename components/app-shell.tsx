"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Preloader from "@/components/preloader";
import CelebrationPopup from "@/components/celebration-popup";
import SiteFooter from "@/components/site-footer";
import Navbar from "@/app/navbar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  // Instant initial mount check for first-time opening preloader
  const [showPreloader, setShowPreloader] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("bhs_preloader_done");
    }
    return true;
  });

  const [isNavigating, setIsNavigating] = useState(false);
  const isFirstRender = useRef(true);

  const finishPreloader = useCallback(() => {
    setShowPreloader(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("bhs_preloader_done", "1");
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPreloader ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPreloader]);

  // Page-to-page navigation transition effect with increased duration (1.2s)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (showPreloader) return;

    window.scrollTo(0, 0);
    const showTimer = window.setTimeout(() => setIsNavigating(true), 0);
    const hideTimer = window.setTimeout(() => setIsNavigating(false), 600);

    return () => {
      window.clearTimeout(showTimer);
      window.clearTimeout(hideTimer);
    };
  }, [pathname, showPreloader]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      autoRaf: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  // Section reveal observer with viewport check and fallback guarantee
  useEffect(() => {
    if (showPreloader) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      document.querySelectorAll(".will-reveal").forEach((el) => {
        el.classList.add("is-revealed");
      });
      return;
    }

    let observer: IntersectionObserver | null = null;
    let fallbackTimer: number | null = null;

    const setupTimer = window.setTimeout(() => {
      const targets = [
        ...document.querySelectorAll("main > *"),
        ...document.querySelectorAll("footer"),
      ];

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer?.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px 50px 0px" },
      );

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add("is-revealed");
        } else {
          el.classList.add("will-reveal");
          observer?.observe(el);
        }
      });

      fallbackTimer = window.setTimeout(() => {
        targets.forEach((el) => {
          el.classList.add("is-revealed");
        });
      }, 500);
    }, 60);

    return () => {
      window.clearTimeout(setupTimer);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
      observer?.disconnect();
    };
  }, [pathname, showPreloader]);

  return (
    <>
      {/* 1. FIRST TIME OPENING PRELOADER */}
      <AnimatePresence>
        {showPreloader && (
          <Preloader key="first-preloader" onComplete={finishPreloader} />
        )}
      </AnimatePresence>

      {/* 2. EVERY PAGE TRANSITION PRELOADER (WHITE BACKGROUND, NO TEXT, INCREASED DURATION) */}
      <AnimatePresence>
        {isNavigating && !showPreloader && (
          <motion.div
            key="page-nav-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-[250] flex items-center justify-center bg-white"
          >
            <div className="relative w-52 h-52 md:w-72 md:h-72 flex items-center justify-center">
              <img
                src="/preloading/Every-page.gif"
                alt=""
                className="w-full h-full object-contain"
                loading="eager"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <motion.div
        key={pathname}
        className="flex-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: showPreloader ? 0 : 1 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
      >
        {children}
      </motion.div>

      <SiteFooter />
      <CelebrationPopup visible={!showPreloader} />
    </>
  );
}
