"use client";

import { Tabs } from "@/components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Admissions",
      value: "admissions",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B2A4A] to-[#13203a]">
          <p>Open for the new session</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Forms are at the school office. Bring the child, the papers, and a
            little hope — we will help you with the rest, within the dates
            announced each year.
          </p>
          <DummyContent src="/images/img-slider-1.jpeg" />
        </div>
      ),
    },
    {
      title: "Exams",
      value: "exams",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B2A4A] to-[#13203a]">
          <p>How the year is examined</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Half-yearly and annual dates appear here first. Students follow the
            class routine; parents use this board so no one is caught unready.
          </p>
          <DummyContent src="/images/img-slider-2.jpeg" />
        </div>
      ),
    },
    {
      title: "Holidays",
      value: "holidays",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B2A4A] to-[#13203a]">
          <p>When the campus rests</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Official holidays and unexpected closures are posted for families
            first — so a closed gate never comes as a surprise.
          </p>
          <DummyContent src="/images/img-slider-3.jpeg" />
        </div>
      ),
    },
    {
      title: "Results",
      value: "results",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B2A4A] to-[#13203a]">
          <p>When results are ready</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Class and board announcements live here. Collect mark sheets from
            the office when your name is called — and celebrate with quiet
            pride.
          </p>
          <DummyContent src="/images/achievemenets.jpeg" />
        </div>
      ),
    },
    {
      title: "General",
      value: "general",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B2A4A] to-[#13203a]">
          <p>The everyday school</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Uniform, meetings, fees, and the small rules that keep a large
            family in order. If it matters to campus life, it appears here.
          </p>
          <DummyContent src="/images/bhs-logo.jpeg" />
        </div>
      ),
    },
  ];

  return (
    <div className="relative isolate z-10 mx-auto flex h-[28rem] w-full max-w-5xl flex-col items-start justify-start overflow-visible px-4 [perspective:1000px] md:h-[46rem]">
      <Tabs tabs={tabs} contentClassName="mt-16 md:mt-20" />
    </div>
  );
}

const DummyContent = ({ src }: { src: string }) => {
  return (
    <img
      src={src}
      alt="School notice"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[55%] md:h-[72%] absolute bottom-4 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
