import companies from "@/app/data/companies";
// import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React, { useState, useEffect, useRef } from "react";
import styles from "./partiner.module.css";
import Link from "next/link";
import Image from "next/image";
function Partiners() {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Counter animation
            const duration = 4000; // 2 seconds
            const targetValue = 100;
            const startTime = Date.now();

            const animateCounter = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const currentValue = Math.floor(progress * targetValue);

              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animateCounter);
              }
            };

            animateCounter();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section className="pb-12 pt-16 px-4 sm:p-16  ">
      <div className="flex flex-col gap-8 max-w-[1280px] mx-auto text-center">
        <p
          ref={counterRef}
          data-aos="fade-down"
          className="text-darkGray text-[19px] font-medium"
        >
          Join{" "}
          <span className="text-2xl font-bold text-[var(--semiblue-color)]">
            {count}+
          </span>{" "}
          clients already growing
        </p>
        <p className="text-darkGray max-w-[900px] mx-auto">
          We build brands and beautiful websites and apps for clients who need a
          little help to create something truly special. We do it with love in
          London for clients all around the world and we can do it for you too
        </p>
        <div
          className={`${styles.images_responsive_cont} flex justify-center gap-y-4 gap-x-3  sm:gap-x-4 sm:gap-y-0 flex-wrap items-center max-w-[1024px] mx-auto`}
        >
          {/* {companies.map((item, index) => (
            <Link href={item.link} key={index}>
              <div data-aos="zoom-in-out" data-aos-delay={(index + 1) * 150}>
                <div
                  className="relative hidden sm:block"
                  style={
                    index === 1
                      ? {
                          borderRadius: "50%",
                          overflow: "hidden",
                        }
                      : {}
                  }
                >
                  <ImageComponent
                    src={item.logo}
                    width={item.lgWidth}
                    height={item.lgHeight ? item.lgHeight : "48px"}
                    alt="partener company"
                  />
                </div>
                <div
                  className={`relative block sm:hidden ${
                    index === 1 && "rounded-full overflow-hidden"
                  } `}
                >
                  <ImageComponent
                    src={item.logo}
                    width={item.width}
                    height={item.height ? item.height : "48px"}
                    alt="partener company"
                  />
                </div>
              </div>
            </Link>
          ))} */}
          {companies.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              className={`lg:w-[180px] lg:h-[200px] w-[100px] h-[120px] ${
                index === companies.length - 1 && "!hidden sm:!flex"
              }`}
              style={{
                clipPath:
                  "polygon(50% 0, 100% 20%, 100% 80%, 50% 100%, 0 80%, 0 20%)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                margin: "0 10px",
                padding: "10px",
                background: item.bgColor ? item.bgColor : "#ddd",
              }}
              data-aos="zoom-in-out"
              data-aos-delay={(index + 1) * 150}
            >
              <div>
                <Image
                  src={item.logo}
                  alt="partener company"
                  width={180}
                  height={180}
                  className={`${index === 6 && "ms-1"} ${
                    index === 5 && "scale-[2]"
                  }`}
                />
                {/* <ImageComponent
                  src={item.logo}
                  // width={item.lgWidth}
                  // height={item.lgHeight ? item.lgHeight : "48px"}
                  width={100}
                  height={100}
                  alt="partener company"
                /> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partiners;
