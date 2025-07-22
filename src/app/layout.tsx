import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gonovo Company - Innovative Solutions for Your Business",
  description:
    "Gonovo Company provides cutting-edge solutions to help businesses grow. Explore our services and discover how we can help you achieve your goals.",
  icons: "/svgs/logo.svg",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={InterFont.variable}>{children}</body>
    </html>
  );
}
