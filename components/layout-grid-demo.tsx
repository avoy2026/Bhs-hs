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
    thumbnail: "/images/campus/campus-wide-view.jpeg",
  },
  {
    id: 2,
    className: "col-span-1",
    thumbnail: "/images/events/academic/educational-events.png",
  },
  {
    id: 3,
    className: "col-span-1",
    thumbnail: "/images/banners/home-hero-students.png",
  },
  {
    id: 4,
    className: "md:col-span-2",
    thumbnail: "/images/banners/home-hero-classroom.jpeg",
  },
];
