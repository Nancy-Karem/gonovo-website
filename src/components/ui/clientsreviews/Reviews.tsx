import React from "react";
import InfinityScroll from "../infinityscroll/InfinityScroll";
import reviews from "@/app/data/reviews";
import { useLocale, useTranslations } from "next-intl";
const Reviews = () => {
  const t = useTranslations("home_Page");
  const locale = useLocale();
  return (
    <section
      id="reviews"
      className="scroll-container relative pb-16 bg-white rounded-ee-[40px] rounded-es-[40px]"
      dir="ltr"
    >
      <p
        data-aos="fade-down"
        className="font-medium w-fit mx-auto px-3 text-sm ring-2 ring-black rounded-full my-6"
      >
        {t("what_people_say_about_us")}
      </p>
      <div
        className="w-fit mx-auto pb-2 overflow-hidden"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <p
          data-aos="fade-right"
          className={`w-fit text-[30px] md:text-[60px] text-semiblue font-medium  mb-2 ${
            locale === "ar" ? "mr-0" : "ms-28"
          }`}
        >
          {t("friends")}
        </p>
        <h1
          data-aos="fade-left"
          className="w-full text-[30px] md:text-[60px] font-semibold leading-14"
        >
          {locale === "en" ? t("our") : ""}
          <span className="relative">
            <span className="h-[3.5px] w-[96%] absolute bg-semiblue top-[52%] left-[50%] translate-x-[-50%]"></span>{" "}
            {locale === "ar" ? t("our") : t("clients")}{" "}
          </span>
          {t("are_our_why")}
        </h1>
      </div>

      <div className="mt-8 md:mt-16 flex flex-col gap-6 ">
        <InfinityScroll elements={reviews.line1} />
        <InfinityScroll elements={reviews.line2} reverse={true} />
      </div>
    </section>
  );
};

export default Reviews;
