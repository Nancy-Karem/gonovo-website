import React from "react";
import styles from "./Infinityscroll.module.css";
import Card from "../card/Card";
export interface IPelements {
  title?: string;
  desc?: string;
  clientImage?: string;
  name?: string;
  bio?: string;
  bgImage?: string;
}
function InfinityScroll({
  elements,
  reverse,
}: {
  elements: IPelements[];
  reverse?: boolean;
}) {
  return (
    <div className={styles["scroll-wrapper"]}>
      <div
        className={
          reverse ? styles["scroll-track-right"] : styles["scroll-track-left"]
        }
      >
        {/* Duplicate items to ensure seamless scroll */}
        {elements.map((item, index) => (
          <Card review={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default InfinityScroll;
