import React from "react";
import Badge from "../common/Badge";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useTranslations } from "next-intl";

function Oursteps() {
  const t = useTranslations("our_steps");

  return (
    <section className="py-16 overflow-x-hidden" dir="ltr">
      <Badge
        text={t("badge_text")}
        title={t("title")}
        desc={t("description")}
      />
      <div className="mx-auto grid lg:grid-cols-2  xl:grid-cols-1 xl:max-w-[1216px] grid-cols-1 justify-center gap-6">
        <Step1 />
        <Step2 />
        <Step3 />
        <Step4 />
      </div>
    </section>
  );
}

export default Oursteps;
