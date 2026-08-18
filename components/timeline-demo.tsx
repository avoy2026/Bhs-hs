import React from "react";
import { Timeline } from "@/components/ui/timeline";

const imgClass =
  "h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60";

export default function TimelineDemo() {
  const data = [
    {
      title: "Today",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Today, Boromohonpur High School is still what it has always been —
            a place where a child is known by name, taught with patience, and
            sent into the world with{" "}
            <span className="font-semibold text-[var(--brand-gold)]">
              backbone and courtesy
            </span>
            .
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/img-slider-1.jpeg"
              alt="Campus view"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/img-slider-2.jpeg"
              alt="Classroom learning"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/img-slider-3.jpeg"
              alt="Student activities"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/achievemenets.jpeg"
              alt="School achievements"
              width={500}
              height={500}
              className={imgClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Growth",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Year after year we have widened the classroom — stronger teaching,
            richer cultural life, and a campus that feels safer and prouder for
            every learner.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            From first-period mathematics to the last cheer on sports day,
            students here grow in{" "}
            <span className="font-semibold text-[var(--brand-navy)]">
              confidence and purpose
            </span>
            .
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/bhs-logo.jpeg"
              alt="School logo"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/img-slider-1.jpeg"
              alt="Campus"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/img-slider-2.jpeg"
              alt="Learning"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/achievemenets.jpeg"
              alt="Achievements"
              width={500}
              height={500}
              className={imgClass}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Highlights",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The chapters that still define us
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Classroom teaching that refuses to hurry a child
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Sports, music, and festivals that belong to everyone
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Prefects, houses, and a culture of self-discipline
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Parents treated as partners, not visitors
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              Quiet pride in every student who wears our name
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/img-slider-3.jpeg"
              alt="School life"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/img-slider-2.jpeg"
              alt="Academics"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/img-slider-1.jpeg"
              alt="Campus"
              width={500}
              height={500}
              className={imgClass}
            />
            <img
              src="/images/achievemenets.jpeg"
              alt="Achievements"
              width={500}
              height={500}
              className={imgClass}
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}
