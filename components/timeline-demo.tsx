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
            Boromohonpur High School continues to guide students with strong
            academics, discipline, and values that prepare them for life beyond
            school.
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
            Over the years, our school has strengthened teaching quality,
            expanded student activities, and built a supportive environment for
            every learner.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            From classroom excellence to cultural programs and sports, students
            at Boromohonpur High School grow with confidence and purpose.
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
            Milestones that define our school community
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Quality classroom education
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Cultural and sports events
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Student leadership and discipline
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Parent and community partnership
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Pride in every Boromohonpur student
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
