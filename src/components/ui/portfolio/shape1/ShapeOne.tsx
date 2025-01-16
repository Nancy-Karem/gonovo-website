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
    >
      <div className={styles.clip_cont}>
        <h1 className="ms-8 text-[26px] leading-[40px] py-2">
          <Link
            href={link}
            className="w-full h-full flex items-center gap-2 relative"
          >
            <div className="relative w-[34px] h-[34px]">
              <Image src="/svgs/portfolio/rightarrow.svg" alt="arrow" fill />
            </div>
            {text}
          </Link>
        </h1>
      </div>
      {/* <div className="corner_3"></div> */}

      <div className="corner_1"></div>
      <div className="corner_2"></div>
      {index === 1 && (
        <div className="w-[80%] h-full mx-auto flex justify-between">
          <div className="max-w-[156px] w-full  relative">
            <Image src="/svgs/portfolio/1s1.svg" alt="mob1" fill />
          </div>
          <div className="max-w-[136px] w-full  relative mt-10">
            <Image src="/svgs/portfolio/2s1.svg" alt="mob1" fill />
          </div>
          <div className="max-w-[136px] w-full  relative mt-10">
            <Image src="/svgs/portfolio/3s1.svg" alt="mob1" fill />
          </div>
        </div>
      )}
      {index === 3 && (
        <div className="w-[92%] h-full mx-auto flex justify-between items-center">
          <div className="max-w-[168px] h-[342px] w-full  ml-[30px] relative">
            <Image src="/svgs/portfolio/1s3.svg" alt="mob1" fill />
          </div>
          <div className="w-full flex h-full relative">
            <div className="max-w-[125px]  h-[256px] w-full top-[50%] left-[50%] translate-x-[-90%] z-10 translate-y-[-40%] absolute">
              <Image src="/assets/2s3.png" alt="mob" fill />
            </div>
            <div className="max-w-[125px]  h-[256px] w-full   top-[50%] left-[50%] translate-x-[-10%] translate-y-[-40%]  absolute">
              <Image src="/assets/3s3.png" alt="mob" fill />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShapeOne;
