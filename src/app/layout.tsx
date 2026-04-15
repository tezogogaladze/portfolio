import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tezo Gogaladze — Full-stack Mobile and Web Developer",
  description:
    "Full-stack mobile and web developer specializing in Flutter, Firebase, Supabase, and Node.js—building scalable apps, real-time systems, and operational tooling.",
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
