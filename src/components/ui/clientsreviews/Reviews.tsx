"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
function Reviews() {
  const items = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  return (
    <section>
      <p className="font-medium w-fit mx-auto px-3 text-sm ring-2 ring-black rounded-full">
        #WHAT PEOPLE SAY ABOUT US#
      </p>
      <h1 className="text-[60px] font-semibold  mt-8 w-fit mx-auto">
        Don’t take our word for it.
      </h1>

      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 0, // Delay between slides in milliseconds
          disableOnInteraction: false, // Keeps autoplay after user interaction
        }}
        speed={3000}
        modules={[Autoplay]}
        style={{
          overflow: "hidden", // Prevent overflow for seamless look
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "200px", // Set slide width
              height: "150px",
              background: "#ccc",
            }}
          >
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Reviews;
