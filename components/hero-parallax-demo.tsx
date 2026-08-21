"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

const campusImages = [
  "/images/school/school-3.png",
  "/images/classroom/classroom-2.png",
  "/images/poster/events-1.png",
  "/images/school/school-2.png",
  "/images/bhs-logo.jpeg",
];

export const products = [
  {
    title: "Annual Day",
    link: "/events",
    thumbnail: campusImages[0],
  },
  {
    title: "Sports Meet",
    link: "/events",
    thumbnail: campusImages[1],
  },
  {
    title: "Cultural Fest",
    link: "/events",
    thumbnail: campusImages[2],
  },
  {
    title: "Independence Day",
    link: "/events",
    thumbnail: campusImages[3],
  },
  {
    title: "Teachers' Day",
    link: "/events",
    thumbnail: campusImages[4],
  },
  {
    title: "Science Fair",
    link: "/events",
    thumbnail: campusImages[0],
  },
  {
    title: "Republic Day",
    link: "/events",
    thumbnail: campusImages[1],
  },
  {
    title: "Art Exhibition",
    link: "/events",
    thumbnail: campusImages[2],
  },
  {
    title: "Debate Competition",
    link: "/events",
    thumbnail: campusImages[3],
  },
  {
    title: "Prize Distribution",
    link: "/events",
    thumbnail: campusImages[4],
  },
  {
    title: "Parent Meet",
    link: "/events",
    thumbnail: campusImages[0],
  },
  {
    title: "Foundation Day",
    link: "/events",
    thumbnail: campusImages[1],
  },
  {
    title: "Music Night",
    link: "/events",
    thumbnail: campusImages[2],
  },
  {
    title: "Community Service",
    link: "/events",
    thumbnail: campusImages[3],
  },
  {
    title: "Farewell Ceremony",
    link: "/events",
    thumbnail: campusImages[4],
  },
];
