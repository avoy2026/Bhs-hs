"use client";

import { cn } from "@/lib/utils";
import React, { useCallback, useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  variant = "light",
}: {
  items: {
    quote: string;
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  variant?: "light" | "dark";
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);
  const getDirection = useCallback(() => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse",
      );
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className={cn(
              "relative w-[350px] max-w-full shrink-0 rounded-2xl border px-8 py-6 md:w-[450px]",
              variant === "light"
                ? "border-[var(--border)] bg-white shadow-[0_12px_40px_-24px_rgb(27_42_74/40%)]"
                : "border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]",
            )}
            key={`${item.name}-${idx}`}
          >
            <blockquote>
              <span
                className={cn(
                  "relative z-20 text-sm leading-[1.6] font-normal",
                  variant === "light"
                    ? "text-[var(--foreground)]"
                    : "text-gray-100",
                )}
              >
                {item.quote}
              </span>
              <div className="relative z-20 mt-6 flex flex-row items-center">
                <span className="flex flex-col gap-1">
                  <span
                    className={cn(
                      "text-sm leading-[1.6] font-semibold",
                      variant === "light"
                        ? "text-[var(--brand-navy)]"
                        : "text-gray-400",
                    )}
                  >
                    {item.name}
                  </span>
                  <span
                    className={cn(
                      "text-sm leading-[1.6] font-normal",
                      variant === "light"
                        ? "text-[var(--muted-foreground)]"
                        : "text-gray-400",
                    )}
                  >
                    {item.title}
                  </span>
                </span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
