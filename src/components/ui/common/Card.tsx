import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

interface IPCard {
  icon: string;
  title: string;
  desc: string;
  slug?: string;
}

function Card({ item, index }: { item: IPCard; index: number }) {
  const t = useTranslations();
  const locale = useLocale();
  const accentText = index === 1 ? "text-white" : "text-[#4541F1]";
  const accentHover = index === 1 ? "hover:text-white/80" : "hover:text-[#2e2ab8]";
  const learnMore = locale === "ar" ? "اعرف المزيد" : "Learn more";
  const arrow = locale === "ar" ? "←" : "→";

  return (
    <div
      data-aos="zoom-out"
      data-aos-delay={index * 50}
      className={`${
        index === 1 ? "bg-semipurple" : ""
      } border border-thingray pt-10 pl-8 pr-10  pb-8 rounded-[40px] md:max-w-[405px] max-w-[94.7%]  mx-auto flex flex-col
       ${index === 1 || index === 4 ? "xl:translate-y-[50px]" : ""} `}
      style={{
        boxShadow: "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814",
      }}
    >
      <ImageComponent src={item.icon} width="84px" height="72px" alt="" />
      <h2
        className={`${
          index === 1 ? "text-white" : " text-linksColor"
        } font-semibold mt-16 mb-4`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {t(item.title)}
      </h2>
      <p
        className={`${index === 1 ? "text-white" : "text-darkGray"} text-sm`}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        {t(item.desc)}
      </p>
      {item.slug && (
        <Link
          href={`/${locale}/services/${item.slug}`}
          className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${accentText} ${accentHover} transition-colors`}
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          {learnMore} <span aria-hidden>{arrow}</span>
        </Link>
      )}
    </div>
  );
}

export default Card;
