"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import Header from "@/components/ui/header/Header";
import Badge from "@/components/ui/common/Badge";
import LeadForm from "@/components/ui/leadform/LeadForm";
import { ContactButton } from "@/components/common/ContactButton";
import type { ServiceLanding as ServiceLandingType } from "@/app/data/serviceLandings";

const ACCENT: Record<
  "orange" | "blue" | "purple",
  { bg: string; chip: string; bar: string; text: string }
> = {
  orange: {
    bg: "linear-gradient(90deg, #FFE2CF 0%, #FFD0B0 48%, #FFC29A 100%)",
    chip: "bg-[#FF732C]",
    bar: "bg-[#FF732C]",
    text: "text-[#FF732C]",
  },
  blue: {
    bg: "linear-gradient(90deg, #D8D6FF 0%, #BFBDFF 48%, #9E99F6 100%)",
    chip: "bg-[#4541F1]",
    bar: "bg-[#4541F1]",
    text: "text-[#4541F1]",
  },
  purple: {
    bg: "linear-gradient(90deg, #EDE7FF 0%, #D4C9F4 48%, #aca0f8 100%)",
    chip: "bg-[#8F5CE3]",
    bar: "bg-[#8F5CE3]",
    text: "text-[#8F5CE3]",
  },
};

export default function ServiceLanding({
  service,
}: {
  service: ServiceLandingType;
}) {
  const locale = useLocale() as "en" | "ar";
  const t = useTranslations("service_landing");
  const content = service[locale];
  const accent = ACCENT[service.accent];

  const whyItems: Array<keyof typeof whyIconMap> = [
    "dedicated_team",
    "transparent_pricing",
    "proven_track_record",
    "ongoing_support",
  ];

  return (
    <main dir={locale === "ar" ? "rtl" : "ltr"}>
      {/* Hero */}
      <section
        className="rounded-[20px] lg:rounded-[40px] lg:py-8 lg:px-12 px-4 py-8 mx-4 mt-4 sm:mx-4 relative overflow-hidden"
        style={{ background: accent.bg }}
      >
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 pt-8 lg:pt-16 pb-8 lg:pb-12 items-center">
          <div data-aos="fade-right">
            <nav
              className={`flex items-center gap-2 text-sm text-[#475467] mb-5 ${
                locale === "ar" ? "flex-row-reverse justify-end" : ""
              }`}
              aria-label="Breadcrumb"
            >
              <Link
                href={`/${locale}`}
                className="hover:text-[#101828] transition-colors"
              >
                {t("home_link")}
              </Link>
              <span aria-hidden>/</span>
              <Link
                href={`/${locale}/${
                  service.category === "software"
                    ? "softwaredevelopment"
                    : "digitalmarketing"
                }`}
                className="hover:text-[#101828] transition-colors"
              >
                {t("services_overview")}
              </Link>
              <span aria-hidden>/</span>
              <span className="text-[#101828] font-medium">
                {content.eyebrow}
              </span>
            </nav>
            <span
              className={`inline-flex items-center gap-2 ${accent.chip} text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden />
              {t("hero_eyebrow")}
            </span>
            <h1 className="mt-5 text-[38px] sm:text-[54px] lg:text-[60px] leading-[1.05] font-semibold text-[#101828]">
              {content.title}
            </h1>
            <p className="mt-5 text-[17px] sm:text-[19px] text-[#344054] leading-[1.6] max-w-[560px]">
              {content.subtitle}
            </p>
            <div
              className={`mt-8 flex flex-wrap gap-3 ${
                locale === "ar" ? "flex-row-reverse" : ""
              }`}
            >
              <ContactButton
                text={t("cta_banner_button")}
                className="bg-[#FF732C] hover:bg-[#e85f1a] text-white rounded-full py-[14px] px-[22px] text-[16px] font-semibold shadow-lg shadow-[#FF732C]/25 transition-colors"
              />
              <a
                href={`#${ids.form(service.slug)}`}
                className="bg-white hover:bg-[#F9FAFB] text-[#101828] rounded-full py-[14px] px-[22px] text-[16px] font-semibold border border-black/5 shadow-sm transition-colors"
              >
                {t("form_title")}
              </a>
            </div>
            <div className="mt-8 flex items-center gap-5">
              <StatChip value="100+" label={locale === "ar" ? "مشروع" : "Projects"} />
              <div className="w-px h-10 bg-black/10" aria-hidden />
              <StatChip value="97%" label={locale === "ar" ? "رضا العملاء" : "Client satisfaction"} />
              <div className="hidden sm:block w-px h-10 bg-black/10" aria-hidden />
              <StatChip
                value="24h"
                label={locale === "ar" ? "زمن الرد" : "Response time"}
                className="hidden sm:flex"
              />
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[440px] rounded-[20px] overflow-hidden"
          >
            <Image
              src={service.image}
              alt={content.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 600px"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/85 backdrop-blur rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-lg">
              <div className={`${accent.chip} w-11 h-11 rounded-xl flex items-center justify-center shrink-0`}>
                <Image src={service.icon} alt="" width={22} height={22} />
              </div>
              <div>
                <p className="text-[13px] text-[#475467]">{content.eyebrow}</p>
                <p className="text-[15px] text-[#101828] font-semibold">
                  {content.title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + benefits */}
      <section className="max-w-[1216px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Badge
          text={`#${content.eyebrow}#`}
          title={content.title}
          desc={content.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-12">
          <div
            data-aos="fade-up"
            className="rounded-[24px] bg-white border border-black/5 shadow-sm p-7 sm:p-9"
          >
            <p className={`text-xs font-semibold uppercase tracking-wide ${accent.text}`}>
              {t("benefits_title")}
            </p>
            <ul className="mt-5 flex flex-col gap-4">
              {content.benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${accent.chip} text-white shrink-0 mt-0.5`}
                    aria-hidden
                  >
                    <svg viewBox="0 0 20 20" className="w-3.5 h-3.5" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </span>
                  <p className="text-[15px] sm:text-[16px] text-[#344054] leading-relaxed">{b}</p>
                </li>
              ))}
            </ul>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay={100}
            className="rounded-[24px] bg-[#101828] text-white p-7 sm:p-9 relative overflow-hidden"
          >
            <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${accent.bar} opacity-40 blur-2xl`} aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-wide text-white/60 relative">
              {t("features_title")}
            </p>
            <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 relative">
              {content.features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <span
                    className={`w-2 h-2 rounded-full ${accent.chip} shrink-0 mt-2`}
                    aria-hidden
                  />
                  <p className="text-[14px] text-white/85 leading-relaxed">{f}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Why Gonovo */}
      <section className="bg-semipurple py-16 sm:py-24">
        <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
          <div className="text-center">
            <p
              data-aos="flip-left"
              className="font-medium w-fit mx-auto px-3 text-sm ring-2 ring-black rounded-full"
            >
              #Gonovo#
            </p>
            <h2
              data-aos="fade-up"
              className="text-[30px] lg:text-[48px] font-semibold mt-6 text-[#101828]"
            >
              {t("why_gonovo_title")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
            {whyItems.map((key, i) => (
              <div
                key={key}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="rounded-2xl bg-white p-6 flex flex-col gap-3 border border-black/5 shadow-sm"
              >
                <div className={`w-11 h-11 rounded-xl ${accent.chip} text-white flex items-center justify-center`}>
                  {whyIconMap[key]}
                </div>
                <p className="text-[15px] text-[#344054] leading-relaxed">
                  {t(`why_gonovo_items.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="max-w-[1216px] mx-auto px-4 sm:px-6 -mt-12 sm:-mt-16 relative z-10">
        <div
          data-aos="zoom-in"
          className="rounded-[28px] p-8 sm:p-12 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 bg-gradient-to-r from-[#4541F1] to-[#8F5CE3] text-white shadow-2xl shadow-[#4541F1]/25"
        >
          <div className="flex-1">
            <h3 className="text-[26px] sm:text-[34px] font-semibold leading-tight">
              {t("cta_banner_title")}
            </h3>
            <p className="mt-3 text-white/80 text-[15px] sm:text-[17px] max-w-xl">
              {t("cta_banner_subtitle")}
            </p>
          </div>
          <a
            href={`#${ids.form(service.slug)}`}
            className="bg-[#FF732C] hover:bg-[#e85f1a] text-white rounded-full py-[14px] px-[26px] text-[16px] font-semibold shadow-lg shadow-black/20 transition-colors whitespace-nowrap"
          >
            {t("cta_banner_button")}
          </a>
        </div>
      </section>

      {/* On-page lead form */}
      <section
        id={ids.form(service.slug)}
        className="max-w-[1216px] mx-auto px-4 sm:px-6 py-16 sm:py-24 scroll-mt-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 items-start">
          <div data-aos="fade-right">
            <p className={`text-xs font-semibold uppercase tracking-wide ${accent.text}`}>
              {content.eyebrow}
            </p>
            <h3 className="mt-3 text-[30px] sm:text-[44px] font-semibold leading-tight text-[#101828]">
              {t("form_title")}
            </h3>
            <p className="mt-4 text-[16px] sm:text-[17px] text-[#475467] leading-relaxed max-w-lg">
              {t("form_subtitle")}
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <ContactPoint
                label={locale === "ar" ? "البريد الإلكتروني" : "Email"}
                value="info@gonovo.tech"
                href="mailto:info@gonovo.tech"
              />
              <ContactPoint
                label={locale === "ar" ? "واتساب" : "WhatsApp"}
                value="+44 7768 936321"
                href="https://wa.me/447768936321"
              />
            </div>
          </div>
          <div data-aos="fade-left">
            <LeadForm
              defaultService={content.title}
              id={`leadform-${service.slug}`}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

const ids = {
  form: (slug: string) => `book-${slug}`,
};

function StatChip({
  value,
  label,
  className = "",
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      <span className="text-[22px] font-semibold text-[#101828] leading-tight">
        {value}
      </span>
      <span className="text-[12px] text-[#475467]">{label}</span>
    </div>
  );
}

function ContactPoint({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-between gap-4 rounded-xl bg-white border border-black/5 p-4 hover:border-[#4541F1]/30 hover:shadow-md transition-all"
    >
      <div className="flex flex-col">
        <span className="text-[12px] text-[#475467]">{label}</span>
        <span className="text-[15px] font-medium text-[#101828]">{value}</span>
      </div>
      <svg viewBox="0 0 20 20" className="w-4 h-4 text-[#4541F1]" fill="currentColor" aria-hidden>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        />
      </svg>
    </a>
  );
}

const whyIconMap = {
  dedicated_team: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M9 11a4 4 0 100-8 4 4 0 000 8zm6 0a3 3 0 100-6 3 3 0 000 6zm-9 9a6 6 0 1112 0H6zm12 0a4 4 0 00-3.4-3.96A7.98 7.98 0 0118 20h0z" />
    </svg>
  ),
  transparent_pricing: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12 1a11 11 0 100 22 11 11 0 000-22zm1 17h-2v-1.07a4 4 0 01-3-3.86h2a2 2 0 002 2h.6a1.4 1.4 0 00.4-2.73l-2.57-.85A3.4 3.4 0 0111 6.07V5h2v1.07a4 4 0 013 3.86h-2a2 2 0 00-2-2h-.6a1.4 1.4 0 00-.4 2.73l2.57.85A3.4 3.4 0 0113 16.93V18z" />
    </svg>
  ),
  proven_track_record: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12 2l2.6 6.2L21 9l-4.8 4.2L17.7 20 12 16.8 6.3 20l1.5-6.8L3 9l6.4-.8L12 2z" />
    </svg>
  ),
  ongoing_support: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 1010 10h-2a8 8 0 11-8-8V2zm0 4a6 6 0 016 6h-2a4 4 0 00-4-4V6zm6 11v-2a1 1 0 011-1h2v4h-2a1 1 0 01-1-1zM3 13h2a1 1 0 011 1v2a1 1 0 01-1 1H3v-4z" />
    </svg>
  ),
};
