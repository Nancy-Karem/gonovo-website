import React from "react";
import styles from "../shape2/shapetwo.module.css";
import secstyle from "../shapshort/shapeshort.module.css";
import Image from "next/image";
import Link from "next/link";
function ShapeShort() {
  return (
    <div
      className={`${styles.main_Shape_cont} ${secstyle.specialHight}`}
      style={{
        backgroundImage: `url(/assets/3.png)`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="clip_cont">
        <h1 className=" sm:ps-4 sm:ms-4 text-[17px] sm:text-[26px] leading-[35px] sm:leading-[40px] py-0 sm:py-2 bg-white">
          <Link
            href="https://scafolding-gamma.vercel.app/"
            className="w-full h-full flex items-center gap-2 relative z-10"
          >
            <div className="relative w-[34px] h-[34px]">
              <Image src="/svgs/portfolio/rightarrow.svg" alt="arrow" fill />
            </div>
            F2F Scaffolding
          </Link>
        </h1>
      </div>
      <div className={`corner_1 ${secstyle.corner_1}`}></div>
      <div className={`corner_2 ${secstyle.corner_2}`}></div>
      <div className="corner_3"></div>
      <h1 className=" bg-white absolute bottom-[-1px] left-[-1px] z-10  rounded-se-[18px] text-lg sm:text-[26px]  leading-[40px] h-8 sm:h-12 sm:pt-2 w-[140px] sm:w-[212px]"></h1>
      <div className={`${styles.corner_4} ${secstyle.corner_4}`}></div>
      <div className={` ${styles.corner_5} ${secstyle.corner_5}`}></div>
    </div>
  );
}

export default ShapeShort;
