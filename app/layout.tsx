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
  metadataBase: new URL("https://bhswb.com"),
  title: {
    default: "Baramohanpur High School",
    template: "%s | Baramohanpur High School",
  },
  description:
    "Official website of Baramohanpur High School — Knowledge · Character · Community. An established neighbourhood school preparing students for a life of purpose.",
  keywords: [
    "Baramohanpur High School",
    "Baramohanpur School",
    "High School in Baramohanpur",
    "Best School in Baramohanpur",
    "Education in Baramohanpur",
    "West Bengal Schools"
  ],
  authors: [{ name: "Baramohanpur High School" }],
  creator: "Baramohanpur High School",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://bhswb.com",
    title: "Baramohanpur High School",
    description: "Official website of Baramohanpur High School — Knowledge · Character · Community.",
    siteName: "Baramohanpur High School",
    images: [
      {
        url: "/images/02-HOMEPAGE/hero/hero1.webp",
        width: 1200,
        height: 630,
        alt: "Baramohanpur High School Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Baramohanpur High School",
    description: "Official website of Baramohanpur High School — Knowledge · Character · Community.",
    images: ["/images/02-HOMEPAGE/hero/hero1.webp"],
  },
  verification: {
    google: "Z6udeH7cI24jTKaApQXFWKpa1oD0PXoR-99Ua6jeG8A",
  },
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
