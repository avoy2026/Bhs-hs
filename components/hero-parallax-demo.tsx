"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export default function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Annual Day & Cultural Night",
    link: "/events",
    thumbnail: "/images/06-EVENTS/cultural/cultural-programme.webp",
  },
  {
    title: "Inter-House Sports Meet",
    link: "/events",
    thumbnail: "/images/06-EVENTS/sports/sports-day.webp",
  },
  {
    title: "Classroom Learning",
    link: "/academics",
    thumbnail: "/images/05-ACADEMICS/classrooms/classroom-main.jpeg",
  },
  {
    title: "Science Laboratory",
    link: "/academics",
    thumbnail: "/images/05-ACADEMICS/laboratories/science-lab.jpeg",
  },
  {
    title: "School Campus & Grounds",
    link: "/gallery",
    thumbnail: "/images/02-HOMEPAGE/campus/campus-1.webp",
  },
  {
    title: "Morning Assembly",
    link: "/gallery",
    thumbnail: "/images/07-GALLERY/students/assembly.jpeg",
  },
  {
    title: "Educational Exhibitions",
    link: "/events",
    thumbnail: "/images/06-EVENTS/academic/educational-events.webp",
  },
  {
    title: "School Library & Reading",
    link: "/academics",
    thumbnail: "/images/05-ACADEMICS/library/library-main.webp",
  },
  {
    title: "Sports & Physical Education",
    link: "/events",
    thumbnail: "/images/07-GALLERY/sports/sports.webp",
  },
  {
    title: "Classroom Discussions",
    link: "/gallery",
    thumbnail: "/images/07-GALLERY/classrooms/class-1.jpeg",
  },
  {
    title: "Heritage Building",
    link: "/about",
    thumbnail: "/images/03-ABOUT/heritage/heritage-building.webp",
  },
  {
    title: "Community & Parent Gathering",
    link: "/about/collaboration",
    thumbnail: "/images/03-ABOUT/collaboration/community-gathering.webp",
  },
  {
    title: "Main School Building",
    link: "/gallery",
    thumbnail: "/images/02-HOMEPAGE/campus/campus-3.webp",
  },
  {
    title: "Student Life & Companionship",
    link: "/gallery",
    thumbnail: "/images/07-GALLERY/students/student-1.jpeg",
  },
  {
    title: "Campus Entrance & Trees",
    link: "/about",
    thumbnail: "/images/03-ABOUT/timeline/school-entrance.webp",
  },
];
