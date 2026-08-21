import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Baramohanpur High School",
  description:
    "Reach Baramohanpur High School — office address, phone, email, working hours, and a direct message form for parents, visitors, and enquiries.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
