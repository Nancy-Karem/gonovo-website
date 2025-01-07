import ImageComponent from "@/components/imagecomponent/ImageComponent";
import Image from "next/image";
import React from "react";
import { IPelements } from "../infinityscroll/InfinityScroll";
import styles from "../infinityscroll/Infinityscroll.module.css";
function Card({ review }: { review: IPelements }) {
  return (
    <div className={styles["scroll-item"]}>
      {review.bgImage && <Image src={review.bgImage} fill alt="image view" />}
      {!review.bgImage && (
        <div className="w-full h-full p-5 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl leading-8 font-semibold text-thirdblack">
              {review.title}
            </h1>
            <p className="text-darkGray leading-6">{review.desc}</p>
          </div>
          <div className="flex gap-4">
            <ImageComponent
              src={`${review.clientImage}`}
              width="40px"
              height="40px"
              alt="client Image"
              background="#ddd"
              radius="50%"
            />

            <div className="flex flex-col justify-between">
              <h1 className="text-sm font-bold">{review.name}</h1>
              <p className="text-sm">{review.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
