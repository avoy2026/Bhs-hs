import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Vision & Mission | Baramohanpur High School",
  description:
    "Our educational philosophy — academic excellence, character building, holistic development, responsible citizenship and future readiness for every child.",
};

export default function VisionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
