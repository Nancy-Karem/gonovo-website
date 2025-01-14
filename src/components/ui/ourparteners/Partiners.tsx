import companies from "@/app/data/companies";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import styles from "./partiner.module.css";
function Partiners() {
  return (
    <section className="pb8 pt-16 px-4 sm:p-16 ">
      <div className="flex flex-col gap-8 max-w-[1280px] mx-auto text-center">
        <p className="text-darkGray font-medium">
          Join 4,000+ clients already growing
        </p>
        <div
          className={`${styles.images_responsive_cont} justify-center gap-y-8 gap-x-6  sm:gap-8 flex-wrap items-center md:flex hidden`}
        >
          {companies.map((item, index) => (
            <ImageComponent
              key={index}
              src={item.logo}
              width={item.width}
              height={item.height ? item.height : "48px"}
              alt="partener company"
            />
          ))}
        </div>
        <div
          className={`${styles.images_responsive_cont} justify-center gap-y-8 gap-x-6  sm:gap-8 flex-wrap items-center flex md:hidden`}
        >
          {companies.map((item, index) => (
            <ImageComponent
              key={index}
              src={item.logo}
              width={item.smWidth ? item.smWidth : item.width}
              height={item.smheight ? item.smheight : "48px"}
              alt="partener company"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partiners;
