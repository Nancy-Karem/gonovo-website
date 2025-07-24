import React from "react";
import Badge from "../common/Badge";
import ServicesCard from "../cards/ServicesCard";
import cardsservicesdata from "@/app/data/services";
import { useTranslations } from "next-intl";

function Ouroffers() {
  const t = useTranslations("our_offers");

  return (
    <section className="pt-0 pb-12 xl:py-12">
      <Badge
        text={t("badge_text")}
        title={t("title")}
        desc={t("description")}
      />
      <div className="max-w-[1216px] gap-4 mx-auto flex items-end justify-center my-10 xl:flex-nowrap flex-wrap">
        {cardsservicesdata.map((item, index) => (
          <ServicesCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Ouroffers;
