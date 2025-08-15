import type { Metadata } from "next";
import { Inter, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

const NotoSansArabicFont = Noto_Sans_Arabic({
  variable: "--font-noto-sans-arabic",
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Gonovo Company - Innovative Solutions for Your Business",
  description:
    "Gonovo Company provides cutting-edge solutions to help businesses grow. Explore our services and discover how we can help you achieve your goals.",
  keywords: [
    "Gonovo innovative business solutions",
    "custom software development UK",
    "enterprise technology services worldwide",
    "digital transformation consulting",
    "best software development company UK",
    "top tech company for startups",
    "business growth technology solutions",
    "international business software services",
  ],
  metadataBase: new URL("https://gonovo.tech/en"),
  alternates: {
    canonical: "https://gonovo.tech/en",
    languages: {
      "en-US": "https://gonovo.tech/en/",
      "en-GB": "https://gonovo.tech/en/",
      "ar-EG": "https://gonovo.tech/ar/",
    },
  },
  icons: ["/svgs/logo.svg", "/assets/logo.png"],
  openGraph: {
    title: "Gonovo Company - Innovative Solutions for Your Business",
    description:
      "Gonovo Company provides cutting-edge solutions to help businesses grow. Explore our services and discover how we can help you achieve your goals.",
    url: "https://gonovo.tech/en",
    siteName: "Gonovo Company",
    images: ["/svgs/logo.svg", "/assets/logo.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonovo Company - Innovative Solutions for Your Business",
    description:
      "Gonovo Company provides cutting-edge solutions to help businesses grow. Explore our services and discover how we can help you achieve your goals.",
    images: ["/svgs/logo.svg", "/assets/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  verification: {
    google: "eb20f0afa79ab1b5",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${InterFont.variable} ${NotoSansArabicFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
