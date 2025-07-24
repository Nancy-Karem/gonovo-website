import React from "react";
import Badge from "../common/Badge";
import smartsolution from "@/app/data/smartsolution";
import Card from "../common/Card";
import { useTranslations } from "next-intl";

function Smartsolutions() {
  const t = useTranslations("smart_solutions");

  return (
    <section className="pt-12 pb-24 relative z-10 bg-white rounded-ee-[40px] rounded-es-[40px] overflow-x-hidden">
      <Badge
        text={t("badge_text")}
        title={t("title")}
        desc={t("description")}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:max-w-[1280px] md:max-w-[96%]  xl:grid-cols-3  gap-6 mx-auto max-w-[405px] mt-12">
        {smartsolution.map((item, index) => (
          <Card item={item} key={index} index={index} />
        ))}
      </div>
    </section>
  );
}

export default Smartsolutions;
