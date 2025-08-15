import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import Badge from "../common/Badge";
import Image from "next/image";
import styles from "./aboutstyle.module.css";
// import { useCallusContext } from "@/components/context/ContactusContext";
import { useLocale, useTranslations } from "next-intl";
import { ContactButton } from "@/components/common/ContactButton";
function Aboutcompany() {
  // const { toggleOpen } = useCallusContext();
  const t = useTranslations("home_Page");
  const locale = useLocale();
  return (
    <section className="my-10 overflow-x-hidden" id="about" dir="ltr">
      <Badge
        text={t("about_the_company")}
        title={t("who_we_are")}
        desc={t("description_3")}
        boldText="GONOVO Tech"
        descsize="15px"
      />

      <div className={styles.about_main_Wrapper}>
        <div className={styles.left_side}>
          <div
            data-aos="fade-right"
            data-aos-delay={200}
            className={styles.clip_cont}
          >
            {locale === "en" ? (
              <ImageComponent
                src="/svgs/clip.svg"
                width="595px"
                height="271px"
                alt="image"
              />
            ) : (
              <div className="relative">
                <ImageComponent
                  src="/svgs/large_clip.svg"
                  width="595px"
                  height="271px"
                  alt="image"
                />
                <h1 className="text-black text-6xl font-medium absolute top-2  right-24">
                  {t("creating_great")}
                </h1>
                <h1 className="text-black text-6xl font-medium absolute top-[35%] right-6">
                  {t("experience_seamless")}
                </h1>
                <h1 className="text-black text-6xl font-medium absolute bottom-8 right-16 flex items-center gap-2 flex-row-reverse">
                  <ImageComponent
                    src="/svgs/Gold_Star.svg"
                    width="50px"
                    height="50px"
                    alt="image"
                  />{" "}
                  {t("flow_for_the_user")}
                </h1>
              </div>
            )}
          </div>
          <div className={styles.text}>
            <p
              data-aos="fade-right"
              data-aos-delay={300}
              className={`${locale === "ar" ? "text-right mt-1" : "text-left"}`}
            >
              {t(
                "a_strategic_experience_agency_crafting_brands_websites_products_and_pretty_much_anything_you_can_imagine"
              )}
            </p>
            <p
              data-aos="fade-right"
              data-aos-delay={400}
              className={`${locale === "ar" ? "text-right" : "text-left"}`}
            >
              {t("want_to_grow_your_brand_and_reach_more_eyes")}
            </p>
            <div
              data-aos="fade-right"
              data-aos-delay={500}
              className="flex gap-4 pb-1"
            >
              <ContactButton
                text={t("become_a_client")}
                className="text-white bg-[#FF732C] rounded-full py-[12px] px-[18px] text-[17px] font-medium"
              />
              <ContactButton
                text={t("contact_us")}
                className="ring-1 ring-black rounded-full py-[12px] px-[18px] text-[17px] font-medium"
              />
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay={200}
          className={styles.right_side}
        >
          <div
            style={{
              backgroundImage: "url(/assets/about1.webp)",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className={styles.view2_cont}
          >
            <div
              className={`${styles.sec_clip} hidden bg-white w-[147px] h-[79px] px-[2px] py-1 absolute bottom-10 left-[-40px]`}
              style={{
                clipPath: `path(
    "M0 18.4581C0 9.16241 7.4664 1.59038 16.7612 1.4598L109.545 0.15628C115.529 0.0722038 120.304 5.12697 119.879 11.0969C119.459 17.0101 124.143 22.0386 130.071 22.0386H135.541C139.66 22.0386 143 25.3782 143 29.4979V36.279V44.5879C143 46.6191 142.063 48.5367 140.46 49.7849C139.557 50.4884 138.486 50.9443 137.353 51.1078L136.513 51.2289C131.364 51.9717 127.702 56.6917 128.17 61.8735C128.741 68.1952 123.352 73.5397 117.05 72.7822L115.184 72.5579H104.997L18.0411 77.8931C8.26119 78.4931 0 70.7233 0 60.925V18.4581Z"
  )`,
              }}
            >
              <h1
                className={`text-[11px]  font-medium ${
                  locale === "ar" ? "text-right mr-8" : "text-left"
                }`}
              >
                {t("creating_great")}
              </h1>
              <h1
                className={`text-[11px]  mt-[6px] font-medium ${
                  locale === "ar" ? "text-right mr-2" : "text-left"
                }`}
              >
                {t("experience_seamless")}
              </h1>
              <h1
                className={`text-[11px]  mt-[6px] font-medium relative flex gap-1 items-center ${
                  locale === "ar" ? "flex-row-reverse mr-5" : ""
                }`}
              >
                <ImageComponent
                  src="/svgs/onestar.svg"
                  alt="image star"
                  width="12px"
                  height="12px"
                />{" "}
                {t("flow_for_the_user")}
              </h1>
            </div>
            <div className={styles.blure_box2}>
              <h1 className={`${locale === "ar" ? "text-right" : "text-left"}`}>
                98%
              </h1>
              <p className={`${locale === "ar" ? "text-right" : "text-left"}`}>
                {t("successful_market_plan")}
              </p>
            </div>
          </div>
          <div className={styles.divide_th_part}>
            <div className="flex justify-between items-center">
              <div className={styles.text_third}>
                <div className={styles.line_top}>
                  <span>{t("reach_more_eyes")}</span>
                  <span className={`${styles.responsive} relative w-6 h-6`}>
                    <Image
                      src="/svgs/star.svg"
                      alt="star icon"
                      fill
                      className="hidden sm:block"
                    />
                    <Image
                      src="/svgs/starmob.svg"
                      alt="star icon"
                      fill
                      className="block sm:hidden"
                    />
                  </span>
                </div>
                <p className={styles.line_bottom}>
                  {t("transform_your_business_grow_with_us")}
                </p>
              </div>
              <div
                className={`${styles.target_res} relative w-[134px] h-[103px]`}
              >
                <Image
                  src="/svgs/simplestatic.svg"
                  alt="projects completed"
                  fill
                  className="hidden sm:block"
                />
                <Image
                  src="/svgs/simplestaticsmob.svg"
                  alt="projects completed"
                  fill
                  className="block sm:hidden"
                />
              </div>
            </div>
            <div
              className={styles.third_view}
              style={{
                backgroundImage: "url(/assets/about2.webp)",
                backgroundPosition: "top",
                backgroundSize: "cover",
              }}
            >
              <div className={styles.blur_box1}>
                <p
                  className={`${locale === "ar" ? "text-right" : "text-left"}`}
                >
                  {t(
                    "our_digital_marketing_team_will_help_you_create_the_perfect_user_growth"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Aboutcompany;
