import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex Morgan — Senior Frontend Engineer",
  description:
    "Alex Morgan is a senior frontend engineer who builds pixel-perfect, accessible, and performant interfaces for the web.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="relative bg-background text-foreground font-sans leading-relaxed">
        {children}
      </body>
    </html>
  );
}
