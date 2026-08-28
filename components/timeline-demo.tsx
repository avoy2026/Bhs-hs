import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const wrapClass =
  "relative h-20 w-full overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60";

const GridImg = ({ src, alt }: { src: string; alt: string }) => (
  <div className={wrapClass}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 45vw, 22vw"
      className="object-cover"
    />
  </div>
);

export default function TimelineDemo() {
  const data = [
    {
      title: "2027–2028",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Baramohanpur High School will observe its 150th Anniversary as a
            year-long festival of education, culture and reunion from 2nd January
            2027 to 2nd January 2028. Present and former students, teachers,
            guardians and well-wishers are invited to join this historic celebration.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <GridImg src="/images/campus/campus-wide-view.jpeg" alt="Campus view" />
            <GridImg src="/images/banners/home-hero-classroom.jpeg" alt="Classroom learning" />
            <GridImg src="/images/events/academic/educational-events.png" alt="Student activities" />
            <GridImg src="/images/campus/school-ground.jpeg" alt="School grounds" />
          </div>
        </div>
      ),
    },
    {
      title: "2021–2026",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Sanjoy Modak took charge as Headmaster on 11th May, 2021, during the
            Covid-19 pandemic. With the collective effort of the school community,
            student strength from Classes V to XII grew from 950 to 1,175.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            The Higher Secondary section offers Arts, Science and Commerce with 25
            subjects, including Artificial Intelligence, Agriculture, Computer
            Application and Education. Commerce was reopened in 2026 after more
            than a decade.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <GridImg src="/images/branding/school-logo.png.jpeg" alt="School logo" />
            <GridImg src="/images/campus/campus-wide-view.jpeg" alt="Campus" />
            <GridImg src="/images/banners/home-hero-classroom.jpeg" alt="Learning" />
            <GridImg src="/images/campus/school-ground.jpeg" alt="School grounds" />
          </div>
        </div>
      ),
    },
    {
      title: "1878 · Legacy",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Baramohanpur High School was established in 1878 under the inspiration
            of Pandit Ishwar Chandra Vidyasagar and the initiative of Shri Nityananda Dey.
          </p>
          <div className="mb-8">
            {[
              "A shared foundation built with village families' land, money, labour and blessings",
              "150 years of spreading the light of knowledge",
              "Alumni serving India and abroad in respected professions",
              "Freedom fighter Shri Hemchandra Kanungo among our notable former students",
              "Dr. Surja Kanta Mishra, former Health Minister of West Bengal, among our distinguished alumni",
            ].map((item, idx) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300"
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full ${[
                    "bg-emerald-500",
                    "bg-blue-500",
                    "bg-amber-500",
                    "bg-brand-gold",
                    "bg-rose-500",
                  ][idx]}`}
                />
                {item}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <GridImg src="/images/events/academic/educational-events.png" alt="School life" />
            <GridImg src="/images/banners/home-hero-classroom.jpeg" alt="Academics" />
            <GridImg src="/images/campus/campus-wide-view.jpeg" alt="Campus" />
            <GridImg src="/images/campus/school-ground.jpeg" alt="School grounds" />
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
