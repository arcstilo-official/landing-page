import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Arcstilo | For those who defend it",
  description:
    "Arcstilo builds sovereign cybersecurity platforms for defence, law enforcement, government and enterprise. Makers of ConsentTrail, India's DPDP compliance platform, and SilentEye, an OSINT investigation platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(inter.variable, inter.className, "antialiased bg-white text-navy-900")}>
        {children}
      </body>
    </html>
  );
}
