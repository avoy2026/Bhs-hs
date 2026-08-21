import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Gallery | Baramohanpur High School",
  description:
    "Browse photos of Baramohanpur High School — campus, classrooms, students, cultural events, sports, achievements and teachers. Explore visual stories from inside the school.",
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
