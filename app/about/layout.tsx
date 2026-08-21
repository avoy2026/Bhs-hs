import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Baramohanpur High School",
  description:
    "Learn about Baramohanpur High School — our story, values, vision, and the dedicated team of teachers who guide our students with care.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
