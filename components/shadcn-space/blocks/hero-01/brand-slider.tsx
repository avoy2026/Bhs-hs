"use client";

import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { motion } from "motion/react";

type BrandSliderProps = {
  tags: readonly string[];
  label: string;
};

function BrandSlider({ tags, label }: BrandSliderProps) {
  return (
    <section id="hunter-journey">
      <div className="py-6 md:py-10">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="relative flex justify-center py-3 text-center md:py-4">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden h-0.5 w-40 bg-linear-to-l from-muted-foreground to-transparent opacity-20 md:block" />
                <p className="px-10 text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground sm:px-2">
                  {label}
                </p>
                <div className="hidden h-0.5 w-40 bg-linear-to-r from-muted-foreground to-transparent opacity-20 md:block" />
              </div>
            </div>
            <div className="py-4">
              <Marquee pauseOnHover className="[--duration:28s] p-0">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="mx-8 text-lg font-medium tracking-wide text-muted-foreground/70 transition-colors hover:text-foreground md:text-xl"
                  >
                    {tag}
                  </span>
                ))}
              </Marquee>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
