import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community & Collaboration | Baramohanpur High School",
  description:
    "How Baramohanpur High School works with parents, alumni, villagers and the wider community to make education feel like a shared responsibility.",
};

export default function CollaborationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
