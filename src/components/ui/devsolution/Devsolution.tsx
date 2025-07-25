import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";
import React from "react";
import styles from "./devstyle.module.css";
import { useTranslations } from "next-intl";

function Devsolution() {
  const t = useTranslations("dev_solution");

  return (
    <section
      className="relative my-16 max-w-[1310px] mx-auto overflow-x-hidden "
      dir="ltr"
    >
      <div className={`${styles.main_sec_grid} grid grid-cols-[1fr_637px]`}>
        <div data-aos="fade-right" className={`${styles.lineOne} flex`}>
          <div
            className={`${styles.inner_line_one} flex justify-between flex-col`}
          >
            <div>
              <h1 className="max-w-[427px] text-[48px] md:text-[64px] font-semibold leading-[58px] md:leading-[77.4px]">
                {t("title")}
              </h1>
              <p className="text-lg md:text-xl mt-8">{t("subtitle")}</p>
            </div>
            <div className="relative w-[321px] mb-10">
              <div className="flex absolute right-10 top-6 items-center gap-1 text-xl">
                {t("design")}
                <ImageComponent
                  src="/svgs/star.svg"
                  width="15px"
                  height="15px"
                  alt="star icon"
                />
              </div>
              <ImageComponent
                src="/svgs/clipsoftdev1.svg"
                width="321px"
                height="225px"
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.leftdev} w-[296px] h-[336px] md:w-[637px] md:h-[610px] relative`}
          style={{ backgroundImage: "url(/svgs/clipsoftdev2.svg)" }}
          data-aos="fade-left"
        >
          <div
            className="flex gap-3 w-fit -rotate-90 absolute bottom-11 md:bottom-[90px] right-[-35px]
    md:right-[-15px]"
          >
            <div className="rotate-90">
              <ImageComponent
                src="/svgs/downarrow.svg"
                height="24px"
                width="24px"
                alt="arrow"
              />
            </div>
            <span className="text-[12px] md:text-sm font-semibold ">
              {t("scroll_down")}
            </span>
          </div>
          <div className="block md:hidden absolute right-8 top-8">
            <div className="bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              {t("grow_badge")}
            </div>
          </div>
          <div className="hidden  absolute top-10 right-12 p-6 rounded-[20px] bg-white w-[251px] md:flex flex-col gap-6 ">
            <div className="flex justify-between items-center">
              <p className="text-[41px] font-semibold leading-7">
                {t("projects_completed")}
              </p>{" "}
              <div className="bg-green-100 text-green-700 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {t("grow_badge")}
              </div>
            </div>
            <p className="font-medium leading-7">{t("projects_description")}</p>
            <ImageComponent
              src="/svgs/goldstars.svg"
              width="116px"
              height="20px"
              alt="stars"
            />
          </div>
          <div className="absolute bottom-6 right-10 md:bottom-20 md:left-36">
            <ul className="border-l-2 pl-2 border-black flex flex-col gap-2 md:gap-5">
              <li className="text-[12px] md:text-lg font-medium leading-4">
                {t("streamlining_efficiency")}
              </li>
              <li>
                <div className="relative md:w-6 md:h-6 sm:w-[14px] h-[14px]">
                  <Image src="/svgs/downarrow.svg" alt="arrow" fill />
                </div>
              </li>
              <li className="text-[12px] md:text-lg font-medium leading-4">
                {t("elevating_standards")}
              </li>
              <li>
                <div className="relative md:w-6 md:h-6 sm:w-[14px] h-[14px]">
                  <Image src="/svgs/downarrow.svg" alt="arrow" fill />
                </div>
              </li>
              <li className="text-[12px] md:text-lg font-medium leading-4">
                {t("ensuring_security")}
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 -left-14 md:left-[-170px]">
            <div className="relative w-[150px] h-[300px] md:w-[280px] md:h-[560px]">
              <Image src="/assets/softmobile.webp" alt="mobile" fill />
            </div>
            <div className="absolute top-[46%] -left-40 md:top-1/2 md:left-[-230px] flex justify-between -rotate-90 h-[24px] w-[288px] md:w-[384px]">
              <p className="">{t("all_rights_reserved")}</p>
              <p className="">{t("year")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Devsolution;
