"use client";
import React from "react";
import { useLocale, useTranslations } from "next-intl";
import LeadForm from "../ui/leadform/LeadForm";

export default function HomeLeadSection() {
  const t = useTranslations("service_landing");
  const tLead = useTranslations("lead_form");
  const locale = useLocale();

  return (
    <section
      id="book"
      className="py-16 sm:py-24 scroll-mt-20 overflow-x-hidden"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div data-aos="fade-right">
            <p
              data-aos="flip-left"
              className="font-medium w-fit px-3 text-sm ring-2 ring-black rounded-full"
            >
              {tLead("badge")}
            </p>
            <h2 className="mt-6 text-[34px] sm:text-[52px] font-semibold leading-tight text-[#101828]">
              {t("form_title")}
            </h2>
            <p className="mt-4 text-[16px] sm:text-[18px] text-[#475467] leading-relaxed max-w-lg">
              {t("form_subtitle")}
            </p>
            <ul className="mt-8 flex flex-col gap-3">
              {[
                tLead("trust_response_time"),
                tLead("trust_free"),
                tLead("trust_experts"),
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#4541F1]/10 text-[#4541F1]"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="w-3.5 h-3.5"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[15px] text-[#344054]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div data-aos="fade-left">
            <LeadForm id="leadform-home" />
          </div>
        </div>
      </div>
    </section>
  );
}
