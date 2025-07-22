import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Footer from "@/components/ui/footer/Footer";
import { ContactusContext } from "@/components/context/ContactusContext";
import "aos/dist/aos.css";
import WithAOS from "@/components/withaos/WithAos";
import Head from "next/head";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gonovo Company - Innovative Solutions for Your Business",
  description:
    "Gonovo Company provides cutting-edge solutions to help businesses grow. Explore our services and discover how we can help you achieve your goals.",
  keywords: [
    "Gonovo",
    "business solutions",
    "innovation",
    "technology",
    "growth",
    "services",
    "tech",
    "gonovo",
    "software development companies in Uk",
    "software development company",
    "software development services uk",
  ],
  icons: "/svgs/logo.svg",
  openGraph: {
    title: "Gonovo Company - Innovative Solutions for Your Business",
    description:
      "Gonovo Company provides cutting-edge solutions to help businesses grow. Explore our services and discover how we can help you achieve your goals.",
    url: "https://gonovo.tech/",
    siteName: "Gonovo Company",
    images: [
      {
        url: "/svgs/logo.svg",
        width: 1200,
        height: 630,
        alt: "Gonovo Company - Innovative Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gonovo Company - Innovative Solutions for Your Business",
    description:
      "Gonovo Company provides cutting-edge solutions to help businesses grow. Explore our services and discover how we can help you achieve your goals.",
    images: ["/svgs/logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale });
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextIntlClientProvider messages={messages}>
        <ContactusContext>
          <body className={`${InterFont.variable}`}>
            <WithAOS>
              {children}
              <Footer />
            </WithAOS>
          </body>
        </ContactusContext>
      </NextIntlClientProvider>
    </html>
  );
}
