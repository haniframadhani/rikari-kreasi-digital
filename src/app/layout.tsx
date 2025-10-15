import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const getPlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rikari Kreasi Digital",
  description: "Rikari Kreasi Digital",
};

const links = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "partners", label: "Partners" },
  { id: "mission", label: "Vision & Mission" },
  { id: "contact", label: "Contact" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Rikari Kreasi Digital"
        />
      </head>
      <body
        className={`${getPlusJakartaSans.variable} antialiased scroll-smooth`}
      >
        <Navbar links={links} />
        {children}
      </body>
    </html>
  );
}
