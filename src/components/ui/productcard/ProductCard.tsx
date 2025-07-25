import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import { useTranslations } from "next-intl";

interface IPProduct {
  icon: string;
  title: string;
  desc: string;
}

function ProductCard({ item, index }: { item: IPProduct; index: number }) {
  const t = useTranslations("products");

  return (
    <div
      data-aos="zoom-in-out"
      data-aos-delay={index * 50}
      style={
        index !== 4
          ? {
              boxShadow:
                "0px 4px 6px -2px #10182808,0px 12px 16px -4px #10182814",
            }
          : {}
      }
      className={`rounded-2xl border border-thingray px-8 py-10 w-fit max-w-[384px] ${
        index === 1 && "bg-semiyellow"
      }`}
    >
      <div className="flex flex-col gap-14">
        <ImageComponent
          src={item.icon}
          width="84px"
          height="72px"
          alt="heart icon"
        />
        <h1 className="text-base font-semibold text-textbadge">
          {t(item.title)}
        </h1>
      </div>
      <p className="text-sm leading-5 text-darkGray  mt-4">{t(item.desc)}</p>
    </div>
  );
}

export default ProductCard;
