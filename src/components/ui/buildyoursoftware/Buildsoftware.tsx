import Image from "next/image";
import React from "react";
import { useCallusContext } from "@/components/context/ContactusContext";
import styles from "./build.module.css";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
function Buildsoftware() {
  const locale = useLocale();
  const t = useTranslations("home_Page");
  const skills = [
    "JavaScript",
    "React",
    "Bootstrap",
    "Python",
    "node js",
    "Kotlin",
    "Spring",
  ];
  const data = [
    {
      title: t("healthcare_software_development"),
      image: "/assets/1.webp",
    },
    {
      title: t("banking_software_development"),
      image: "/assets/cards.webp",
    },
    {
      title: t("real_estate_app_development"),
      image: "/assets/2.webp",
    },
  ];
  const { toggleOpen } = useCallusContext();
  return (
    <section className="py-4 md:py-16 overflow-x-hidden">
      <div className="bg-semipurple py-16">
        <div
          className={`max-w-[full] mx-9 lg:max-w-[829px] lg:m-auto flex flex-col gap-5 ${
            locale === "ar" ? "items-center" : ""
          }`}
        >
          <h1
            data-aos="fade-down"
            className={`text-[30px] lg:text-[60px] leading-[38px] lg:leading-[72px] sm:flex  justify-center font-semibold lg:justify-between items-center block text-center ${
              locale === "ar"
                ? "text-right flex-row-reverse w-fit"
                : "text-left"
            }`}
          >
            {t("lets_build_your_software")}
            <span className="relative w-[30px]  h-[30px] lg:w-[58px] lg:h-[58px] inline-block">
              <Image
                src="/svgs/angels.svg"
                fill
                alt="tools icon"
                className="mt-1 lg:mt-0"
              />
            </span>
          </h1>
          <p
            data-aos="fade-up"
            className="text-lightblack leading-[28px] font-medium text-center"
          >
            {t("g_provides_a_complete_end_to_end_solution_for_your_needs")}
          </p>
        </div>
        <div className="max-w-full mx-9 md:max-w-[766px]  md:mx-auto flex  justify-center lg:justify-between mt-6 gap-4 flex-wrap">
          {skills.map((item, index) => (
            <p
              key={index}
              data-aos="flip-left"
              data-aos-delay={index * 150}
              className="ring-darkring px-3 py-1 ring-[1.5px] text-darkring  rounded-full"
            >
              {item}
            </p>
          ))}
        </div>
        <div
          className={`${styles.margin_Top1s} w-[92%] mx-auto lg:w-[87%] lg:ml-[8%] lg:mr-[5%] grid grid-cols-1 xl:grid-cols-2 mt-16  items-center justify-items-center`}
        >
          <div data-aos="fade-right" className="relative w-full  md:w-[auto]">
            <div
              style={{ backdropFilter: "blur(24px)" }}
              className={`${styles.responsive_grid_scale} w-[337px] h-[277px] sm:top-[50px] mx-auto md:w-[566px] md:h-[381px] bg-offwight rounded-[20px] overflow-hidden p-6 flex gap-2 ring-1 ring-ringLight`}
            >
              <p className="h-[13px] w-[13px] rounded-full bg-white"></p>
              <p className="h-[13px] w-[13px] rounded-full bg-dotlight"></p>
              <p className="h-[13px] w-[13px] rounded-full bg-ringLight"></p>
            </div>

            <div className=" grid grid-cols-3 gap-2 md:gap-3 top-16 absolute md:top-[68px] md:left-[-70px] md:translate-x-0 left-[50%] translate-x-[-50%] w-max">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`relative h-[184px] w-[126px] md:w-[221px] md:h-[290px] rounded-xl  overflow-hidden ${
                    index === 1 && "ring-1 ring-offwight"
                  }`}
                >
                  <Image
                    src={item.image}
                    fill
                    alt="view"
                    className={`md:hidden ${
                      index === 2 && "object-[50%_72%] object-cover"
                    } ${index === 1 && styles.midImage}`}
                  />
                  <Image
                    src={item.image}
                    width={221}
                    height={290}
                    alt="view"
                    style={{
                      height: index === 1 ? "180px" : "290px",
                      objectFit: index === 1 ? "fill" : "cover",
                      width: index === 1 ? "90%" : "100%",
                      margin: index === 1 ? "4px auto 0px" : "0",
                    }}
                    className={`object-cover  ${
                      index === 2 && "object-[50%_58%]"
                    } hidden md:block`}
                  />

                  <div
                    className="ring-1 ring-ringLight rounded-lg p-3 w-[90%] md:w-[201px] absolute left-[50%]   translate-x-[-50%] bottom-3 bg-bgdrop"
                    style={{ backdropFilter: "blur(24px)" }}
                  >
                    <p className="text-white text-[12px] md:text-lg">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            data-aos="fade-left"
            className={`${styles.margin_Top2s} flex gap-5 mt-10 flex-col  md:ms-20 justify-end`}
          >
            <h1 className="text-lg md:text-3xl font-semibold">
              {t("our_software_development_services")}
            </h1>
            <p className="leading-[28px] text-lightblack">
              {t(
                "we_offer_bespoke_software_development_services_that_are_customized_to_your_exact_requirements"
              )}
            </p>
            <div className="flex gap-7 mt-4">
              <button
                onClick={toggleOpen}
                className="text-white bg-[#FF732C] rounded-full py-[12px] px-[18px] text-[17px] font-medium"
              >
                {t("become_a_client")}
              </button>
              <button
                onClick={toggleOpen}
                className="text-black bg-[#FFF] rounded-full py-[12px] px-[18px] text-[17px] font-medium"
              >
                {t("contact_us")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Buildsoftware;
