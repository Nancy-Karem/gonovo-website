"use client";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useCallusContext } from "@/components/context/ContactusContext";

export default function FloatingCTA() {
  const t = useTranslations("floating_cta");
  const locale = useLocale();
  const { toggleOpen, contactModal } = useCallusContext();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 320);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (contactModal) return null;

  const sideClass = locale === "ar" ? "left-4 sm:left-6" : "right-4 sm:right-6";

  return (
    <button
      type="button"
      onClick={toggleOpen}
      aria-label={t("aria_label")}
      className={`group fixed ${sideClass} bottom-24 sm:bottom-6 z-40 inline-flex items-center gap-2 bg-[#FF732C] hover:bg-[#e85f1a] text-white font-semibold rounded-full shadow-2xl shadow-[#FF732C]/40 transition-all duration-300 ease-out px-5 py-3 sm:px-6 sm:py-4 text-[14px] sm:text-[15px] ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <span
        className="relative inline-flex w-2.5 h-2.5"
        aria-hidden
      >
        <span className="absolute inline-flex w-full h-full rounded-full bg-white opacity-80 animate-ping" />
        <span className="relative inline-flex w-2.5 h-2.5 rounded-full bg-white" />
      </span>
      <span className="hidden sm:inline">{t("label")}</span>
      <span className="sm:hidden">{t("label_short")}</span>
      <svg
        viewBox="0 0 20 20"
        className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 ${
          locale === "ar" ? "rotate-180 group-hover:-translate-x-0.5" : ""
        }`}
        fill="currentColor"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        />
      </svg>
    </button>
  );
}
