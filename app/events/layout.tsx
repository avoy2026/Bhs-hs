import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "School Events | Baramohanpur High School",
  description:
    "Moments that become memories — explore cultural programmes, sports, annual day, celebrations and all student events at Baramohanpur High School.",
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
