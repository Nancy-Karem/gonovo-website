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
        <meta name="google-site-verification" content="eb20f0afa79ab1b5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/assets/logo.png" />
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
