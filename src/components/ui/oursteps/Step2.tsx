import React from "react";
import { useTranslations, useLocale } from "next-intl";

function Step2() {
  const t = useTranslations("our_steps.step2");
  const locale = useLocale();

  return (
    <div
      data-aos="fade-left"
      className="relative w-fit xl:w-full  bg-orangebg rounded-[31px] h-auto xl:h-[443px] xl:my-10 flex flex-col mx-auto"
    >
      <div className="w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-ee-[31px] bg-white left-[-2px] top-[-2px] absolute"></div>
      <div
        style={{ boxShadow: "-10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute left-[118px] lg:left-[148px] rounded-ss-[31px]"
      ></div>
      <div
        style={{ boxShadow: "-10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute top-[118px] lg:top-[148px]  rounded-ss-[31px]"
      ></div>
      <div className="grid grid-cols-1  ml-auto xl:gap-20 xl:grid-cols-[1fr_378px] xl:p-20  xl:px-16 h-full w-full  xl:justify-items-center justify-items-end lg:px-10 lg:py-20 px-5 py-10 ">
        <div className="mt-5 w-fit ml-auto xl:order-0 order-1">
          <p className="ring-2 text-[12px] px-2 py-[1px] text-white ring-white w-fit rounded-full xl:px-[14px] xl:py-[2px] xl:text-sm font-medium ">
            {t("step_number")}
          </p>
          <h1
            className="text-[24px] xl:text-3xl font-medium text-white mt-3 sm:mt-10 mb-2 sm:mb-4"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {t("title")}
          </h1>
          <p
            className="text-sm xl:text-base text-white leading-[23px] max-w-[460px]"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {t("description")}
          </p>
        </div>
        <div
          className="w-[65%] h-auto sm:h-[176px] xl:h-auto xl:w-[378px] rounded-[12px] sm:rounded-3xl  bg-white relative order-0 xl:order-1"
          dir={locale === "ar" ? "rtl" : "ltr"}
        >
          <div className="pt-3 px-4 sm:pt-5 sm:px-7 pb-2 border-b border-[#f2f2f2]">
            <div className="flex gap-1">
              <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#999999]"></span>
              <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#C8C8C8]"></span>
              <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#DBDBDB]"></span>
            </div>
            <p className="text-[12px] xl:text-[22px] leading-5 font-medium mt-2 xl:mt-6">
              {t("design_phase")}
            </p>
          </div>
          <div className="px-2 pt-7 b sm:px-4 sm:pt-10 pb-2 xl:px-10 xl:pt-24 xl:pb-4">
            <div className=" flex flex-wrap gap-3">
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121]">
                {t("wireframes")}
              </p>
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121] ml-[-23px] origin-right rotate-[20deg]">
                {t("user_flow")}
              </p>
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121] ml-[-7px]">
                {t("prototype")}
              </p>
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121]">
                {t("design_system")}
              </p>
              <p className="text-[9px] px-2 py-1 xl:text-sm text-white xl:px-4 xl:py-2 rounded-full bg-[#212121]">
                {t("user_journey")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
