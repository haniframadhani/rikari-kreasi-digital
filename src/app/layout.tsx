import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const getPlusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rikari Kreasi Digital",
  description: "Rikari Kreasi Digital",
};

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
      <body className={`${getPlusJakartaSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
