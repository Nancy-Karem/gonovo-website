import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { useLocale } from "next-intl";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const NotoSansArabicFont = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
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
  const locale = useLocale();
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className={`${InterFont.variable} ${NotoSansArabicFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
