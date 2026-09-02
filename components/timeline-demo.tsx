import React from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";

const wrapClass =
  "relative w-full aspect-square md:aspect-video lg:aspect-[4/3] overflow-hidden rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] bg-neutral-100 dark:bg-neutral-900";

const GridImg = ({ src, alt, objectFit = "object-contain" }: { src: string; alt: string; objectFit?: string }) => (
  <div className={wrapClass}>
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 768px) 45vw, 22vw"
      className={`${objectFit} p-1 md:p-2`}
    />
  </div>
);

export default function TimelineDemo() {
  const data = [
    {
      title: "1878 · Foundation & Legacy",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 leading-relaxed">
            Baramohanpur High School was established in 1878 under the inspiration
            of Pandit Ishwar Chandra Vidyasagar and the initiative of Shri Nityananda Dey.
          </p>
          <div className="mb-8">
            {[
              "A shared foundation built with village families' land, money, labour and blessings",
              "150 years of spreading the light of knowledge across the region",
              "Alumni serving India and abroad in respected professions",
              "Freedom fighter Shri Hemchandra Kanungo among our notable former students",
              "Dr. Surja Kanta Mishra, former Health Minister of West Bengal, among distinguished alumni",
            ].map((item, idx) => (
              <div
                key={item}
                className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300 py-0.5"
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
            <GridImg src="/images/03-ABOUT/timeline/iswar-chandra-vidyasagar.webp" alt="Pandit Ishwar Chandra Vidyasagar" />
            <GridImg src="/images/03-ABOUT/timeline/nityananda-dey.webp" alt="Shri Nityananda Dey" />
            <GridImg src="/images/03-ABOUT/heritage/heritage-building.webp" alt="Heritage school building" />
            <GridImg src="/images/03-ABOUT/timeline/school-entrance.webp" alt="School entrance" />
          </div>
        </div>
      ),
    },
    {
      title: "2021–2025 · Modern Growth",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 leading-relaxed">
            Sanjoy Modak took charge as Headmaster on 11th May, 2021, during the
            Covid-19 pandemic. With the collective effort of the school community,
            student strength from Classes V to XII grew from 950 to 1,175.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <GridImg src="/images/03-ABOUT/staff/teachers/leadership/principal.jpeg" alt="Headmaster Sanjoy Modak" />
            <GridImg src="/images/03-ABOUT/timeline/academic-growth.webp" alt="Academic growth and achievements" />
            <GridImg src="/images/05-ACADEMICS/classrooms/classroom-main.jpg" alt="Classroom learning" />
            <GridImg src="/images/07-GALLERY/students/assembly.jpeg" alt="Student assembly" />
          </div>
        </div>
      ),
    },
    {
      title: "2026 – 2027 · 150th Anniversary",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 leading-relaxed">
            The Higher Secondary section offers Arts, Science and Commerce with 25
            subjects, including Artificial Intelligence, Agriculture, Computer
            Application and Education. Commerce was reopened in 2026 after more
            than a decade.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 font-semibold text-[var(--brand-navy)]">
            Baramohanpur High School observes its 150th Anniversary (2027–2028) as a historic year-long festival of education, culture, and alumni reunion.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <GridImg src="/images/03-ABOUT/timeline/science-education.webp" alt="Modern science education" />
            <GridImg src="/images/01-BRANDING/school-logo.png" alt="150th Anniversary Emblem" />
            <GridImg src="/images/01-BRANDING/school-achievements.jpeg" alt="150 Years of Excellence" />
            <GridImg src="/images/06-EVENTS/academic/educational-events.webp" alt="Educational events and celebrations" />
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
