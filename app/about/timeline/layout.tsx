import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Timeline & History | Baramohanpur High School",
  description:
    "The story of Baramohanpur High School across the years — from early beginnings to the trusted institution of learning it is today.",
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
