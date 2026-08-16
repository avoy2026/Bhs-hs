"use client";

import { Tabs } from "@/components/ui/tabs";

export default function TabsDemo() {
  const tabs = [
    {
      title: "Admissions",
      value: "admissions",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-[#1B2A4A] to-[#13203a]">
          <p>Admission Notice</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            New admission forms for the upcoming session are available at the
            school office. Please submit documents within the announced dates.
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
          <p>Examination Schedule</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Half-yearly and annual exam dates will be published here. Students
            should prepare according to the class routine shared by teachers.
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
          <p>Holiday List</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Official holidays and unexpected closures for Boromohonpur High
            School will be updated in this section for parents and students.
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
          <p>Result Updates</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Class and board result announcements will be posted here. Students
            may collect mark sheets from the school office when notified.
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
          <p>General Notices</p>
          <p className="mt-4 text-sm md:text-lg font-normal text-white/80 max-w-xl">
            Uniform rules, meeting dates, fee reminders, and other important
            school information for the Boromohonpur High School community.
          </p>
          <DummyContent src="/images/bhs-logo.jpeg" />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
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
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
