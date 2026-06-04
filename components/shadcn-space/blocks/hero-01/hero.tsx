"use client";

import { Instrument_Serif } from "next/font/google";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageComparisonBasic } from "@/components/ImageComparisionBasic";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
});

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section id="home" className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <div className="relative w-full pt-4 md:pt-8 pb-6 md:pb-10 before:absolute before:inset-x-0 before:top-16 before:h-[min(70vw,520px)] before:bg-linear-to-r before:from-sky-100 before:via-white before:to-amber-100 before:rounded-full before:blur-3xl before:-z-10 dark:before:from-slate-800 dark:before:via-black dark:before:to-stone-700">
          <div className="container relative z-10 mx-auto px-4 sm:px-6">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 md:gap-10">
              {/* Image comparison — constrained width, explicit height */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative flex w-full justify-center"
              >
                <ImageComparisonBasic />
              </motion.div>

              <div className="relative flex flex-col items-center gap-4 text-center sm:gap-6">
                <motion.h1
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="text-5xl font-medium leading-tight md:text-7xl lg:text-8xl lg:leading-[1.15]"
                >
                  Building bold brands with{" "}
                  <span
                    className={`${instrumentSerif.className} tracking-tight`}
                  >
                    thoughtful design
                  </span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
                  className="max-w-2xl text-base font-normal text-muted-foreground"
                >
                  At shadcn space, we help small startups tackle the world&apos;s
                  biggest challenges with tailored solutions, guiding you from
                  strategy to success in a competitive market.
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                className="flex flex-col items-center justify-center gap-8 md:flex-row"
              >
                <Button className="relative h-12 w-fit cursor-pointer overflow-hidden rounded-full p-1 ps-6 pe-14 text-sm font-medium transition-all duration-500 group hover:ps-14 hover:pe-6">
                  <span className="relative z-10 transition-all duration-500">
                    Get Started
                  </span>
                  <span className="absolute right-1 flex h-10 w-10 items-center justify-center rounded-full bg-background text-foreground transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </Button>
                <div className="flex items-center gap-3 sm:gap-7">
                  <ul className="avatar flex flex-row items-center">
                    {avatarList.map((avatar, index) => (
                      <li key={index} className="-mr-2 z-1 avatar-hover:ml-2">
                        <img
                          src={avatar.image}
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="rounded-full border-2 border-white"
                        />
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <img
                          key={index}
                          src="https://images.shadcnspace.com/assets/svgs/icon-star.svg"
                          alt="star"
                          className="h-4 w-4"
                        />
                      ))}
                    </div>
                    <p className="text-xs font-normal text-muted-foreground sm:text-sm">
                      Trusted by 1000+ clients
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
