import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Baramohanpur High School",
  description:
    "Answers to common questions about admissions, academics, student life and contacting the school. Honest information for parents considering Baramohanpur High School.",
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
