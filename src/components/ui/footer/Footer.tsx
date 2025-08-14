"use client";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import Link from "next/link";
import { useCallusContext } from "@/components/context/ContactusContext";
import { useTranslations, useLocale } from "next-intl";

function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  const { toggleOpen } = useCallusContext();

  const columns = [
    {
      title: t("navigation"),
      elements: [
        {
          text: t("home"),
          link: `/${locale}`,
        },
        {
          text: t("about_us"),
          link: `/${locale}/#about`,
        },
        {
          text: t("software_dev"),
          link: `/${locale}/softwaredevelopment`,
        },
        {
          text: t("digital_marketing"),
          link: `/${locale}/digitalmarketing`,
        },
        {
          text: t("reviews"),
          link: `/${locale}/#reviews`,
        },
        {
          text: t("contact_us"),
          link: "#",
        },
      ],
    },
    {
      title: t("contact_us_title"),
      elements: [
        {
          text: "info@gonovo.tech",
          link: "mailto:info@gonovo.tech",
        },
        {
          text: "GONOVO LTD, 554 Streatham High Road, London, England, SW16 3QG",
          link: "https://www.google.com/maps/place/554+Streatham+High+Rd,+London+SW16+3QG,+UK/@51.4172097,-0.1316108,17z/data=!4m10!1m2!2m1!1sGONOVO+LTD,+554+Streatham+High+Road,+London,+England,+SW16+3QG!3m6!1s0x48760691b0602a8d:0xabbe3c9e7b33ebdf!8m2!3d51.4172098!4d-0.1267399!15sCj5HT05PVk8gTFRELCA1NTQgU3RyZWF0aGFtIEhpZ2ggUm9hZCwgTG9uZG9uLCBFbmdsYW5kLCBTVzE2IDNRR5IBEWNvbXBvdW5kX2J1aWxkaW5n4AEA!16s%2Fg%2F11cncg_4hs?entry=ttu&g_ep=EgoyMDI1MDEwMi4wIKXMDSoASAFQAw%3D%3D",
        },
      ],
    },
    {
      title: t("follow_us"),
      elements: [
        {
          text: t("linkedin"),
          link: "https://www.linkedin.com/company/gonovo/",
        },
        {
          text: t("instagram"),
          link: "https://www.instagram.com/gonovo.tech",
        },
        {
          text: t("facebook"),
          link: "/",
        },
      ],
    },
  ];

  return (
    <footer
      className="bg-semiblue pt-[100px] pb-7 mt-[-40px] flex flex-col gap-10 sm:gap-16"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <div className="w-[92%] sm:w-[96%] xl:w-[1216px] gap-16 xl:gap-0 m-auto grid grid-cols-1 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col gap-10">
          <ImageComponent
            src="/svgs/logolight.svg"
            width="215px"
            height="32px"
            alt="company logo"
          />
          <h1 className="text-2xl font-semibold text-white">
            {t("love_to_hear")}
          </h1>
          <p className="max-w-[397px] text-thingray">{t("feel_free")}</p>
          <button
            className="bg-white rounded-full py-[12px] px-[18px] text-[17px] font-medium w-fit text-[#2e2f30] outline-none"
            onClick={toggleOpen}
          >
            {t("become_client")}
          </button>
        </div>
        <div className="flex justify-between flex-wrap gap-8">
          {columns.map((list, genindex) => (
            <div key={genindex}>
              <p className="mb-4 text-sm text-semidarkgray">{list.title}</p>

              <ul className="flex flex-col gap-3 sm:gap-4 w-[170px]">
                {list.elements.map((listItem, index) => (
                  <li key={index}>
                    <Link
                      href={listItem?.link}
                      onClick={(e) => {
                        if (listItem.text === t("contact_us")) {
                          e.preventDefault();
                          toggleOpen();
                        }
                      }}
                      className="flex gap-2 text-thingray"
                      target={`${
                        genindex === 2 || genindex === 1 ? "_blank" : "_self"
                      }`}
                    >
                      {listItem.text}
                      {genindex === 2 && (
                        <ImageComponent
                          src="/svgs/arrow.svg"
                          alt="arrow"
                          width="20px"
                          height="20px"
                        />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[96%] xl:w-[1216px] m-auto border-t border-lightborder">
        <h1 className="text-xl font-semibold text-white leading-8 mt-4 mb-2">
          {t("move_faster")}
        </h1>
        <div className="flex justify-between flex-wrap gap-3">
          <p className="text-thingray">{t("save_hours")}</p>
          <p className="text-semidarkgray">{t("copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
