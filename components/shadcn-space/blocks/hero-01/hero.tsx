"use client";

import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageComparisonBasic } from "@/components/ImageComparisionBasic";
import { HERO } from "@/lib/site-data";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList?: AvatarList[];
};

function HeroSection(_props: HeroSectionProps) {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <div className="relative w-full pt-4 md:pt-8 pb-6 md:pb-10 before:absolute before:inset-x-0 before:top-16 before:h-[min(70vw,520px)] before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700">
          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:gap-10">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex w-full flex-col items-center gap-3"
              >
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
                  {HERO.eyebrow}
                </p>
                <ImageComparisonBasic />
              </motion.div>

              <div className="relative flex flex-col items-center gap-4 text-center sm:gap-6">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="text-5xl font-medium leading-tight md:text-7xl lg:text-8xl lg:leading-[1.15]"
                >
                  {HERO.title}{" "}
                  <span
                    className={`${instrumentSerif.className} tracking-tight`}
                  >
                    {HERO.titleAccent}
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="max-w-2xl text-base font-normal text-muted-foreground"
                >
                  {HERO.description}
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center gap-6"
              >
                <Button
                  asChild
                  className="relative h-12 w-fit cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-semibold tracking-widest transition-all duration-500 group hover:ps-14 hover:pe-6"
                >
                  <a href={HERO.ctaHref}>
                    <span className="relative z-10 transition-all duration-500">
                      {HERO.cta}
                    </span>
                    <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </a>
                </Button>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-sm">
                  {HERO.status}
                </p>
                <a
                  href="#hunter-journey"
                  className="text-sm text-muted-foreground transition hover:text-foreground"
                >
                  {HERO.scrollHint}
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
