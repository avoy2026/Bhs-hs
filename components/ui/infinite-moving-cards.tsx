"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

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

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
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
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
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
