import companies from "@/app/data/companies";
import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import styles from "./partiner.module.css";
function Partiners() {
  return (
    <section className="pb-12 pt-16 px-4 sm:p-16  ">
      <div className="flex flex-col gap-8 max-w-[1280px] mx-auto text-center">
        <p
          data-aos="fade-down"
          className="text-darkGray text-[19px] font-medium"
        >
          Join 4,000+ clients already growing
        </p>
        <div
          className={`${styles.images_responsive_cont} flex justify-center gap-y-8 gap-x-6  sm:gap-8 flex-wrap items-center`}
        >
          {companies.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-out"
              data-aos-delay={(index + 1) * 150}
            >
              <div className="relative hidden sm:block">
                <ImageComponent
                  src={item.logo}
                  width={item.lgWidth}
                  height={item.lgHeight ? item.lgHeight : "48px"}
                  alt="partener company"
                />
              </div>
              <div className="relative block sm:hidden">
                <ImageComponent
                  src={item.logo}
                  width={item.width}
                  height={item.height ? item.height : "48px"}
                  alt="partener company"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partiners;
