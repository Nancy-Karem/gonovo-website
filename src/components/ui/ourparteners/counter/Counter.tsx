"use client";
import { useTranslations } from "next-intl";
import React, { useEffect, useRef, useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLParagraphElement>(null);
  const t = useTranslations("home_Page");
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
    <div>
      {" "}
      <p
        ref={counterRef}
        data-aos="fade-down"
        className="text-darkGray text-[19px] font-medium"
      >
        {t("join")}
        <span className="text-2xl mx-4 font-bold text-[var(--semiblue-color)]">
          {count}+
        </span>
        {t("clients")}
      </p>
    </div>
  );
};
