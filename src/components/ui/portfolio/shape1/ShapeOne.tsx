import React from "react";
import styles from "./shapeone.module.css";
import "../../../ui/portfolio/common.css";
import Image from "next/image";
import Link from "next/link";
function ShapeOne({
  bgColor,
  index,
  text,
  link,
}: {
  bgColor: string;
  index?: number;
  text: string;
  link: string;
}) {
  return (
    <div
      style={{ background: `${bgColor}` }}
      className={styles.main_Shape_cont}
      data-aos="flip-left"
    >
      <div className="clip_cont  bg-transparent">
        <h1 className="sm:ps-4 sm:ms-4 text-[17px] sm:text-[26px] leading-[40px] py-2 bg-white">
          <Link
            href={link}
            className="w-full h-full flex items-center gap-2 relative z-10"
          >
            <div className="relative w-[34px] h-[34px]">
              <Image src="/svgs/portfolio/rightarrow.svg" alt="arrow" fill />
            </div>
            {text}
          </Link>
        </h1>
      </div>

      <div className="corner_1"></div>
      <div className="corner_2"></div>
      <div className="corner_3"></div>
      {index === 1 && (
        <div
          className="mt-10 sm:mt-0
   w-[80%] h-full mx-auto flex justify-between"
        >
          <div
            className={`${styles.mob1_res} xl:max-w-[156px] lg:max-w-[126px] sm:max-w-[156px] w-full h-[315px] sm:h-auto relative  ml-[-55px] sm:mt-0 sm:ml-0`}
          >
            <Image src="/svgs/portfolio/1s1.svg" alt="mob1" fill />
          </div>
          <div
            className={`${styles.mob2_res} max-w-[136px] sm:max-w-[106px] w-full  relative sm:mt-10`}
          >
            <Image src="/svgs/portfolio/2s1.svg" alt="mob1" fill />
          </div>
          <div className="hidden sm:block max-w-[106px] w-full  relative mt-10">
            <Image src="/svgs/portfolio/3s1.svg" alt="mob1" fill />
          </div>
        </div>
      )}
      {index === 3 && (
        <div className="w-[92%] h-full mx-auto flex justify-between items-center">
          <div
            className={`${styles.mob2_res} h-[342px] max-w-[164px] lg:max-w-[128px] lg:h-[282px] xl:max-w-[168px] xl:h-[342px] w-full  sm:ml-[30px] relative`}
          >
            <Image src="/svgs/portfolio/1s3.svg" alt="mob1" fill />
          </div>
          <div className="w-full flex h-full relative">
            <div className="max-w-[74px] h-[152px] sm:max-w-[125px]  sm:h-[256px] lg:max-w-[115px] lg:h-[216px] xl:max-w-[125px]  xl:h-[256px] w-full top-[50%] left-[50%] translate-x-[-90%] z-10 translate-y-[-40%] absolute">
              <Image src="/assets/2s3.webp" alt="mob" fill />
            </div>
            <div className="max-w-[74px] h-[152px] sm:max-w-[125px]  sm:h-[256px] lg:max-w-[115px] lg:h-[216px] xl:max-w-[125px]  xl:h-[256px] w-full   top-[50%] left-[50%] translate-x-[-10%] translate-y-[-40%]  absolute">
              <Image src="/assets/3s3.webp" alt="mob" fill />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShapeOne;
