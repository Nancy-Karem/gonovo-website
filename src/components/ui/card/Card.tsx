import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";
import React from "react";
import { IPelements } from "../infinityscroll/InfinityScroll";
import styles from "../infinityscroll/Infinityscroll.module.css";
import { useLocale, useTranslations } from "next-intl";
function Card({ review }: { review: IPelements }) {
  const locale = useLocale();
  const t = useTranslations("home_Page");
  return (
    <div
      className={styles["scroll-item"]}
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      {review.bgImage && <Image src={review.bgImage} fill alt="image view" />}
      {!review.bgImage && (
        <div className="w-full h-full p-5 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1
              className={`text-xl leading-8 font-semibold text-thirdblack ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t(review.title!)}
            </h1>
            <p
              className={`text-darkGray text-[14px] leading-[22px] ${
                locale === "ar" ? "text-right" : "text-left"
              }`}
            >
              {t(review.desc!)}
            </p>
          </div>
          <div className="flex gap-4">
            {review.logotxt && (
              <p
                className={`text-[21px] font-bold leading-5 text-[#2E2E2E] ${
                  locale === "ar" ? "text-right" : "text-left"
                }`}
              >
                {review.logotxt}
              </p>
            )}
            {review.clientImage && (
              <ImageComponent
                src={`${review.clientImage}`}
                width={review.width!}
                height={review.height!}
                alt="client Image"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
