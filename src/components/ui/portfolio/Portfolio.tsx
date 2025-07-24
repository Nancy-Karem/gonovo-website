import React from "react";
import Badge from "../common/Badge";
import ShapeOne from "./shape1/ShapeOne";
import ShapeTwo from "./shape2/ShapeTwo";
import Shapethree from "./shape3/Shapethree";
import styles from "./mainsection.module.css";
import ShapeShort from "./shapshort/ShapeShort";
import { useCallusContext } from "@/components/context/ContactusContext";
import { useTranslations } from "next-intl";
function Portfolio() {
  const { toggleOpen } = useCallusContext();
  const t = useTranslations("home_Page");
  return (
    <section className="py-12" dir="ltr">
      <Badge
        text={t("company_portfolio")}
        title={t("some_of_our_work")}
        desc={t("explore_some_of_the_exciting_projects_we_ve_worked_on")}
      />
      <div data-aos="fade-up" className="flex justify-center gap-4">
        <button
          onClick={toggleOpen}
          className="text-white bg-[#FF732C] rounded-full py-[12px] px-[18px] text-[17px] font-medium"
        >
          {t("become_a_client")}
        </button>

        <button
          onClick={toggleOpen}
          className="ring-1 ring-black rounded-full py-[12px] px-[18px] text-[17px] font-medium"
        >
          {t("contact_us")}
        </button>
      </div>
      <div
        className={`${styles.main_sec_cont} my-10 grid grid-cols-2 gap-x-5 sm:gap-y-10 gap-y-6 max-w-[1307px] mx-auto justify-items-center`}
      >
        {/* work__1 */}
        {/* <div  data-aos="fade-right"> */}
        <ShapeOne
          bgColor="#feff76"
          index={1}
          text="Chef’s Choice"
          link="https://www.chefschoicefruits.com/"
        />
        {/* </div> */}
        {/* work__2 */}
        <ShapeTwo
          bgColor="linear-gradient(96.71deg, #514FFF -1.8%, #6724F5 99.73%)"
          index={2}
          text="Bling Weddings"
          link="https://www.bling-weddings.com/"
        />
        {/* <ShapeTwo bgImage="/assets/3.webp" text="F2F Scaffolding" link="/" /> */}
        <ShapeShort />
        <ShapeOne
          bgColor="linear-gradient(96.71deg, #FED2F2 -1.8%, #9724F5 99.84%)
"
          text="Mobile View"
          link="https://thescaffolding.co.uk/"
          index={3}
        />
        <Shapethree />
        <div data-aos="flip-right" className={styles.main_Shape_cont}></div>
      </div>
    </section>
  );
}

export default Portfolio;
