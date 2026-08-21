import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | Baramohanpur High School",
  description:
    "Hear from students, parents, teachers and alumni of Baramohanpur High School — honest voices about what this school means to the families who trust it.",
};

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
