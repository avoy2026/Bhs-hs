import React from "react";
import { Cover } from "@/components/ui/cover";

export default function CoverDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center bg-neutral-950 px-4 py-24">
      <h1 className="relative z-20 mx-auto mt-6 max-w-7xl py-6 text-center text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-400 md:text-4xl lg:text-6xl">
        Excellence in learning <br /> at{" "}
        <Cover>Boromohonpur</Cover>
      </h1>
      <p className="relative z-20 mt-2 max-w-2xl text-center text-sm text-neutral-400 md:text-base">
        Hover the highlighted word to see the cover effect.
      </p>
    </div>
  );
}
