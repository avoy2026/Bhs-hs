import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import AppShell from "@/components/app-shell";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});



export const metadata: Metadata = {
  title: "Baramohanpur High School",
  description:
    "Official website of Baramohanpur High School — Knowledge · Character · Community.",
  icons: {
    icon: "/images/01-BRANDING/school-logo.png",
    shortcut: "/images/01-BRANDING/school-logo.png",
    apple: "/images/01-BRANDING/school-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
