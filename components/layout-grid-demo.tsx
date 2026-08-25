"use client";
import React from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export default function LayoutGridDemo() {
  return (
    <div className="w-full py-16 md:py-20">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonCampus = () => {
  return (
    <div>
      <span className="eyebrow text-white/90 block mb-2">The campus</span>
      <p className="font-display font-semibold md:text-4xl text-2xl text-white leading-tight">
        Where children walk in each morning and leave a little taller.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-white/85">
        Grounds and classrooms that feel familiar, warm and lived-in —
        Baramohanpur High School is a place students remember long after they
        graduate.
      </p>
    </div>
  );
};

const SkeletonLabs = () => {
  return (
    <div>
      <span className="eyebrow text-white/90 block mb-2">Laboratories</span>
      <p className="font-display font-semibold md:text-3xl text-xl text-white leading-tight">
        A science lab where ideas are tested.
      </p>
      <p className="font-normal text-sm my-3 max-w-md text-white/85">
        Practical classroom learning lets students turn textbook
        lessons into real-world understanding.
      </p>
    </div>
  );
};

const SkeletonComputers = () => {
  return (
    <div>
      <span className="eyebrow text-white/90 block mb-2">Computer Centre</span>
      <p className="font-display font-semibold md:text-3xl text-xl text-white leading-tight">
        Digital skills for the world ahead.
      </p>
      <p className="font-normal text-sm my-3 max-w-md text-white/85">
        The computer centre equips every student with the digital literacy they
        will need in higher study and everyday life.
      </p>
    </div>
  );
};

const SkeletonClassrooms = () => {
  return (
    <div>
      <span className="eyebrow text-white/90 block mb-2">In the classroom</span>
      <p className="font-display font-semibold md:text-4xl text-2xl text-white leading-tight">
        Calm rooms, clear instruction, attentive listening.
      </p>
      <p className="font-normal text-base my-4 max-w-lg text-white/85">
        From the youngest classes to the highest standards, each classroom is
        designed to support learning, participation, and quiet reflection.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonCampus />,
    className: "md:col-span-2",
    thumbnail: "/images/campus/campus-wide-view.jpeg",
  },
  {
    id: 2,
    content: <SkeletonLabs />,
    className: "col-span-1",
    thumbnail: "/images/events/academic/educational-events.png",
  },
  {
    id: 3,
    content: <SkeletonComputers />,
    className: "col-span-1",
    thumbnail: "/images/banners/home-hero-students.png",
  },
  {
    id: 4,
    content: <SkeletonClassrooms />,
    className: "md:col-span-2",
    thumbnail: "/images/banners/home-hero-classroom.jpeg",
  },
];
