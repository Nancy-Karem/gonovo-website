import React from "react";
import styles from "./shapetwo.module.css";
import "../../../ui/portfolio/common.css";
import Image from "next/image";
import Link from "next/link";
function ShapeTwo({
  bgColor,
  bgImage,
  index,
  link,
  text,
}: {
  bgColor?: string;
  bgImage?: string;
  index?: number;
  text: string;
  link: string;
}) {
  return (
    <div
      style={{
        ...(bgColor ? { background: bgColor } : {}),
        ...(bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : {}),
      }}
      className={styles.main_Shape_cont}
    >
      <div className="clip_cont">
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
      <h1 className=" bg-white absolute bottom-[-1px] left-[-1px]  rounded-se-[18px] text-[26px] leading-[40px] h-12 pt-2 w-[212px]">
        {index === 2 && (
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-[#5843FC]"
          >
            Contact us
            <div className="relative w-[34px] h-[34px]">
              <Image
                src="/svgs/portfolio/rightarrowpurple.svg"
                alt="arrow"
                fill
              />
            </div>
          </Link>
        )}
      </h1>
      <div className={styles.corner_4}></div>
      <div className={styles.corner_5}></div>
      {index === 2 && (
        <div className="w-[92%] h-full mx-auto flex justify-between">
          <div className="max-w-[138px] w-full mb-11 ml-[30px] relative">
            <Image src="/svgs/portfolio/1s2.svg" alt="mob1" fill />
          </div>
          <div className="max-w-[369px] h-[249px] mt-[100px] w-full  relative">
            <Image src="/assets/2s2.png" alt="tablet1" fill />
          </div>
        </div>
      )}
    </div>
  );
}

export default ShapeTwo;
