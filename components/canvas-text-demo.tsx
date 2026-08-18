"use client";
import { cn } from "@/lib/utils";
import { CanvasText } from "@/components/ui/canvas-text";

export default function CanvasTextDemo() {
  return (
    <section className="relative isolate flex min-h-[22rem] items-center justify-center overflow-hidden bg-white px-8 py-20">
      <h2
        className={cn(
          "group relative mx-auto mt-4 max-w-3xl text-left text-4xl font-bold leading-tight tracking-tight text-balance text-[var(--brand-navy)] sm:text-5xl md:text-6xl md:leading-tight xl:text-7xl",
        )}
      >
        Raise children who learn with{" "}
        <CanvasText
          text="quiet pride"
          backgroundClassName="bg-[var(--brand-navy)]"
          colors={[
            "rgba(201, 162, 39, 1)",
            "rgba(201, 162, 39, 0.9)",
            "rgba(201, 162, 39, 0.8)",
            "rgba(201, 162, 39, 0.7)",
            "rgba(201, 162, 39, 0.6)",
            "rgba(201, 162, 39, 0.5)",
            "rgba(201, 162, 39, 0.4)",
            "rgba(201, 162, 39, 0.3)",
            "rgba(201, 162, 39, 0.2)",
            "rgba(201, 162, 39, 0.1)",
          ]}
          lineGap={4}
          animationDuration={20}
        />
      </h2>
    </section>
  );
}
