import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Baramohanpur High School",
  description:
    "Meet the Headmaster, teachers and leadership of Baramohanpur High School — the patient, dedicated team behind every classroom and every student.",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
