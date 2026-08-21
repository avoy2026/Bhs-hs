import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquire Now | Baramohanpur High School",
  description:
    "Start your admission enquiry for Baramohanpur High School. Share a few details and our office will guide you through the next honest step.",
};

export default function EnquiryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
