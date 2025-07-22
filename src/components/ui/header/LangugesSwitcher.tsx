"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const LangugesSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState("en");

  // Get language from cookie or pathname
  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(";").shift();
      return null;
    };

    const savedLang = getCookie("language");
    if (savedLang) {
      setCurrentLang(savedLang);
    } else {
      // Fallback to pathname detection
      const langFromPath = pathname.startsWith("/en") ? "en" : "ar";
      setCurrentLang(langFromPath);
      // Save to cookie
      document.cookie = `language=${langFromPath}; path=/; max-age=31536000`; // 1 year
    }
  }, [pathname]);

  const switchLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";

    // Save to cookie
    document.cookie = `language=${newLang}; path=/; max-age=31536000`; // 1 year

    // Navigate to new path while preserving the rest of the path
    let newPath;
    if (pathname.startsWith("/en/") || pathname.startsWith("/ar/")) {
      // Replace the locale part while keeping the rest of the path
      newPath = pathname.replace(/^\/(en|ar)/, `/${newLang}`);
    } else if (pathname === "/en" || pathname === "/ar") {
      // Handle root locale paths
      newPath = `/${newLang}`;
    } else {
      // If no locale in path, add the new locale
      newPath = `/${newLang}${pathname}`;
    }

    router.push(newPath);
  };

  return (
    <button
      onClick={switchLanguage}
      className={`
        relative inline-flex items-center justify-center w-[70px] h-8 rounded-full transition-all duration-300 ease-in-out bg-gray-300
        shadow-md hover:shadow-lg cursor-pointer
      `}
      aria-label={`Switch to ${currentLang === "en" ? "Arabic" : "English"}`}
    >
      {/* Current language text - positioned opposite to the thumb */}
      <span
        className={`
          absolute text-sm font-bold transition-all duration-300 z-10 text-gray-700
          ${
            currentLang === "en"
              ? " right-2" // Dark text on right when English is active (thumb on left)
              : " left-2" // White text on left when Arabic is active (thumb on right)
          }
        `}
      >
        {currentLang === "en" ? "EN" : "عربي"}
      </span>

      {/* Toggle thumb */}
      <div
        className={`
          absolute w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ease-in-out z-20
          ${
            currentLang === "en"
              ? "left-1" // Left position for English (off state)
              : "right-1" // Right position for Arabic (on state)
          }
        `}
      />
    </button>
  );
};
