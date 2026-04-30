import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactusContext } from "@/components/context/ContactusContext";
import { Contact } from "@/components/contactcomp/Contact";

import { getServiceLanding, serviceLandings } from "@/app/data/serviceLandings";

export const dynamicParams = false;

export function generateStaticParams() {
  const locales = ["en", "ar"];
  return locales.flatMap((locale) =>
    serviceLandings.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const service = getServiceLanding(slug);
  if (!service) return {};
  const content = service[locale === "ar" ? "ar" : "en"];
  const path = `/${locale}/services/${slug}`;
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      canonical: `https://gonovo.tech${path}`,
      languages: {
        "en-US": `https://gonovo.tech/en/services/${slug}`,
        "ar-EG": `https://gonovo.tech/ar/services/${slug}`,
      },
    },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://gonovo.tech${path}`,
      siteName: "Gonovo Company",
      images: [service.image, "/svgs/logo.svg"],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.metaTitle,
      description: content.metaDescription,
      images: [service.image],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceLanding(slug);
  if (!service) notFound();

  return (
    <ContactusContext>
      <Contact />
    </ContactusContext>
  );
}
