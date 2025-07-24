import React from "react";
import styles from "./mainhero.module.css";
import Header from "../header/Header";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";
import { useTranslations } from "next-intl";

function MainHero() {
  const t = useTranslations("home_Page");
  const advantageData = [
    {
      icon: "/svgs/light.svg",
      text: t("brand_awareness"),
    },
    {
      icon: "/svgs/email.svg",
      text: t("email_marketing"),
    },
    {
      icon: "/svgs/pen.svg",
      text: t("content_creation"),
    },
    {
      icon: "/svgs/search.svg",
      text: t("seo_services"),
    },
  ];
  return (
    <section
      className={`${styles.main_hero_container} rounded-[20px] lg:rounded-[40px] lg:py-8 lg:px-12 px-4 py-8`}
    >
      <Header />
      <div
        className={`${styles.pos_relative} xl:absolute mt-16 xl:mt-0 xl:top-[194px] left-[50%] translate-x-[-50%]`}
      >
        <div
          className={`${styles.point} w-[19px] h-[19px] rounded-full bg-purpleLight`}
        ></div>
        <div
          data-aos="fade-up"
          className="flex items-center gap-3 justify-center"
        >
          <h2 className="font-semibold text-[34px] sm:text-5xl">
            {t("title")}
          </h2>
          <ImageComponent
            src="/svgs/bluearrow.svg"
            width="34px"
            height="34px"
            alt="support arrow"
          />
        </div>
        <h1
          data-aos="fade-up"
          data-aos-delay={200}
          className="flex items-center font-semibold text-[64px] sm:text-[102px] leading-[90px] sm:leading-[123px] gap-3 justify-center"
        >
          {t("gr")}
          <span
            className="w-[105px] h-[45px] sm:w-[126px] sm:h-[54px]  rounded-[26px] flex items-center justify-center sm:mt-[25px]"
            style={{
              background:
                "linear-gradient(90deg, #C8C2E8 0%, #9E99F6 48.7%, #5B5FFC 100%)",
            }}
          >
            <span className="w-[82.5px] h-[26.6px] sm:w-[99px] sm:h-[32px] bg-white rounded-[26px] inline-block"></span>
          </span>
          {t("wth")}
        </h1>
        <div
          data-aos="fade-up"
          data-aos-delay={400}
          className="font-semibold sm:text-[46px] text-[32px] leading-[55.67px] flex items-end gap-1 sm:gap-3 justify-center  mt-[-10px] ms-12 sm:ms-28"
        >
          <ImageComponent
            src="/svgs/circlearrow.svg"
            alt="circle arrow Image"
            width="38.59px"
            height="36.59px"
          />
          {t("of_your_business")}
        </div>
        <p
          data-aos="fade-up"
          data-aos-delay={600}
          className="lg:w-[730px] lg:mx-auto text-center sm:font-medium text-grayLight text-[18px] leading-[26px] mt-4"
        >
          {t("description")}
        </p>
        <div
          className={`${styles.point_bottom} w-[19px] h-[19px] rounded-full bg-yellowLight`}
        ></div>
      </div>
      <div
        className={`${styles.responsive} relative flex mx-auto xl:top-[515px] gap-2 max-w-[1300px]  lg:justify-between  xl:flex-nowrap`}
      >
        <div
          data-aos="zoom-in-out"
          data-aos-delay={700}
          className="flex justify-between relative w-[275px] h-[201px] rounded-ss-[20px] rounded-se-[4px] rounded-ee-[21px] rounded-es-[23px] overflow-hidden"
          style={{
            backgroundImage:
              " linear-gradient(90deg, #8F5CE3 0%, #D9CAF4 55.89%, #E3DEF7 97.41%)",
          }}
          dir="ltr"
        >
          <div className="relative w-[115px] h-[193px]">
            <Image
              // src="/assets/z4.webp"
              src="/assets/z44.webp"
              alt="mobile image"
              width={115}
              height={193}
              className="absolute left-6 top-4"
              unoptimized={true}
              quality={100}
            />
          </div>
          <div className="relative w-[115px] h-[193px]">
            <Image
              src="/assets/z3.webp"
              alt="mobile image"
              width={115}
              height={193}
              className="absolute right-3 bottom-4"
              unoptimized={true}
              quality={100}
            />
          </div>
        </div>
        <div
          data-aos="zoom-in-out"
          data-aos-delay={800}
          className={`${styles.verysmall} flex gap-3`}
        >
          <div
            className="rounded-2xl w-[149px] sm:w-[157px] h-[201px] px-4 py-6 flex flex-col justify-between"
            style={{
              background: "linear-gradient(90deg, #EDE7FF 0%, #F2EEFF 100%)",
            }}
          >
            <p className="text-xl text-linksColor leading-6 h-1/2  border-b border-b-linksColor">
              {t("digital_marketing")}
            </p>
            <p className="text-xl text-linksColor leading-6">
              {t("software_development")}
            </p>
          </div>
          <div
            className="w-[209px] sm:w-[263px] h-[201px] rounded-[19px] relative overflow-hidden"
            style={{
              backgroundImage: "url(/assets/bg-1.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
        <div
          data-aos="zoom-in-out"
          data-aos-delay={900}
          className="w-full sm:w-[593px] md:h-[201px] rounded-[20px] py-[19px] px-5 sm:px-[38px] flex flex-col gap-6 items-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #FFE78C 0%, #FBF3D3 51%, #F7F7F7 100%)",
          }}
        >
          <div className="w-full sm:w-[332px] text-center flex flex-col gap-4">
            <p className="text-base">{t("grow_your_brand")}</p>
            <h1 className="text-[23px] sm:text-[26px] font-semibold leading-[31px]">
              {t("appear_on_the_front_page_of_google")}
            </h1>
          </div>
          {/* advantage */}
          <div className="sm:max-w-full flex-wrap md:flex-nowrap flex justify-between gap-y-8 gap-x-4 md:gap-1 max-w-[270px]">
            {advantageData.map((item, index) => (
              <div
                key={index}
                className="w-[124px] h-[42px] bg-semiblue flex items-center rounded-full gap-[6px] px-[3px]"
              >
                <div
                  className="relative bg-white rounded-full flex items-center justify-center"
                  style={{ width: "38px", height: "38px" }}
                >
                  <Image src={item.icon} alt="icon" width={24} height={24} />
                </div>

                <p className="text-white text-[12px]  w-[60px] leading-[14px] ">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainHero;
