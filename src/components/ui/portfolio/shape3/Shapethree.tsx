import React from "react";
import styles from "./shapeth.module.css";
import Image from "next/image";
function Shapethree() {
  return (
    <div className={styles.main_Shape_cont}>
      <div className="w-[130px] h-[105px] rounded-es-[18px] bg-white absolute right-[-1px] top-[-1px]">
        <div className="relative w-[93px] h-[93px] mx-auto">
          <Image src="/svgs/blacksqrarrow.svg" fill alt="black sqr arrow" />
        </div>
      </div>
      <div className={styles.corner_1}></div>
      <div className={styles.corner_2}></div>
      <div className="w-[96%] mr-auto h-full flex items-center">
        <div className="w-[350px] h-[234px] ms-[-30px] mt-[96px] sm:mt-0 sm:h-[350px] sm:w-[500px] lg:w-[370px] lg:h-[250px] xl:w-[500px] sm:ms-[-5px] xl:h-[350px] relative">
          <Image src="/assets/1s4.png" alt="mob" fill />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Shapethree;
