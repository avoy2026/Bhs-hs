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

const cards = [
  {
    id: 1,
    className: "md:col-span-2",
    thumbnail: "/images/07-GALLERY/campus/campus-wide.webp",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "/images/06-EVENTS/academic/educational-events.webp",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/images/07-GALLERY/students/assembly.jpeg",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "/images/05-ACADEMICS/classrooms/classroom-main.jpg",
  },
];
