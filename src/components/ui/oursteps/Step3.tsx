import React from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";

function Step3() {
  const t = useTranslations("our_steps.step3");
  const locale = useLocale();

  const tech = [
    "/svgs/js.svg",
    "/svgs/html.svg",
    "/svgs/css.svg",
    "/svgs/react.svg",
  ];
  const tech2 = [
    "/svgs/go.svg",
    "/svgs/php.svg",
    "/svgs/java.svg",
    "/svgs/c++.svg",
    "/svgs/nodejs.svg",
    "/svgs/csharp.svg",
  ];
  return (
    <div
      data-aos="fade-right"
      className="relative w-fit xl:w-full  bg-semipurple rounded-[31px] h-auto xl:h-[443px]  xl:my-10 flex flex-col mx-auto"
    >
      <div className="z-10 w-[120px] h-[120px] lg:w-[150px] lg:h-[150px] rounded-es-[31px] bg-white right-[-2px] top-[-2px] absolute"></div>
      <div
        style={{ boxShadow: "10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute lg:right-[148px] right-[118px] rounded-se-[31px]"
      ></div>
      <div
        style={{ boxShadow: "10px -10px 0 white" }}
        className="bg-transparent w-12 h-12 absolute right-[0px] lg:top-[148px] top-[118px] rounded-se-[31px]"
      ></div>
      <div className="grid grid-cols-1 gap-8 xl:gap-0 xl:grid-cols-2 lg:px-10 lg:py-20 px-5 py-10 xl:px-20 h-full w-fit xl:w-full  justify-center">
        <div>
          <div className="rounded-[12px] sm:rounded-3xl  bg-white relative w-[67%] sm:w-[70%]  xl:w-[403px] ">
            <div className="w-[40px] h-[60px] lg:w-[85px] lg:h-[100px] rounded-es-[24px] bg-semipurple right-[-2px] top-[-2px] absolute flex items-center justify-center">
              <div className="relative w-[27px] h-[27px] lg:w-[37.5px] lg:h-[33.75px]">
                <Image src="/svgs/steps/angelss.svg" alt="angels code" fill />
              </div>
            </div>
            <div
              style={{ boxShadow: "6px -10px 0 #aca0f8" }}
              className="bg-transparent w-5 h-5 sm:w-12 sm:h-12 absolute lg:right-[83px] right-[38px] rounded-se-[12px]  sm:rounded-se-[24px]"
            ></div>
            <div
              style={{ boxShadow: "10px -10px 0 #aca0f8" }}
              className="bg-transparent w-5 h-5 sm:w-12 sm:h-12 absolute right-[0px] lg:top-[98px] top-[58px] rounded-se-[12px]  sm:rounded-se-[24px]"
            ></div>
            <div className="pt-3 px-4 sm:pt-5 sm:px-7 pb-2 border-b border-[#f2f2f2]">
              <div className="flex gap-1">
                <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#999999]"></span>
                <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#C8C8C8]"></span>
                <span className="w-[6px] h-[6px] sm:w-3 sm:h-3 rounded-full inline-block bg-[#DBDBDB]"></span>
              </div>
              <p
                className="text-[12px] xl:text-sm font-medium mt-3 xl:mt-6"
                dir={locale === "ar" ? "rtl " : "ltr"}
              >
                {t("software_development")}
              </p>
            </div>
            <div className="py-4 px-2 xl:p-10">
              <div className="flex gap-2 mb-2">
                {tech.map((tech, index) => (
                  <div key={index} className="relative w-[30px] h-[30px]">
                    <Image src={tech} alt="logo tech" fill />
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 max-w-28">
                {tech2.map((tech, index) => (
                  <div key={index} className="relative w-[30px] h-[30px]">
                    <Image src={tech} alt="logo tech" fill />
                  </div>
                ))}
              </div>
              <div
                className="absolute -bottom-[50px] -right-[48px] sm:bottom-[-73px]
sm:-right-[60px]"
              >
                <div className="relative w-[100px] h-[95px] sm:w-[143px] sm:h-[196px]">
                  <Image src="/svgs/dotsback.svg" alt="logo tech" fill />
                </div>
              </div>
              <div
                className="absolute -bottom-[60px] -right-[40px]  sm:bottom-[-85px]
sm:-right-[40px]"
              >
                <div className="relative w-[150px] h-[100px] sm:w-[237px] sm:h-[199px]">
                  <Image
                    src="/svgs/steps/stepimage3.svg"
                    alt="image step3"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 sm:mt-5 w-fit ml-auto">
          <p className="ring-2 ring-black w-fit rounded-full xl:px-[14px] xl:py-[2px] text-[12px] px-2 py-[1px] xl:text-sm font-medium">
            {t("step_number")}
          </p>
          <h1
            className="text-[24px] xl:text-3xl font-medium text-[#111111]  mt-3 sm:mt-10 mb-2 sm:mb-4"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {t("title")}
          </h1>
          <p
            className="text-sm xl:text-base text-darkGray leading-[23px] max-w-[460px]"
            dir={locale === "ar" ? "rtl" : "ltr"}
          >
            {t("description")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Step3;
