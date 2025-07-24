"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export const LangugesSwitcher = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);

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

  // Update document language and direction when language changes
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = currentLang;
      document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
      document.body.lang = currentLang;
      document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
    }
  }, [currentLang]);

  const switchLanguage = (newLang: string) => {
    if (newLang === currentLang) return;

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

    setCurrentLang(newLang);
    setIsOpen(false);
    router.push(newPath);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".language-dropdown")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative language-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          relative inline-flex items-center justify-center w-[70px] h-10 rounded-full transition-all duration-300 ease-in-out bg-white
          shadow-md hover:shadow-lg cursor-pointer gap-1 px-2 border border-gray-200
        `}
        aria-label="Language selector"
      >
        {/* Earth Icon */}
        <svg
          className="w-4 h-4 text-semipurple"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          />
        </svg>

        {/* Current language text */}
        <span
          className="text-sm font-bold text-semipurple"
          lang={currentLang === "ar" ? "ar" : "en"}
        >
          {currentLang === "en" ? "EN" : "AR"}
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[120px] z-50">
          <button
            onClick={() => switchLanguage("en")}
            className={`
              w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2
              ${
                currentLang === "en"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }
            `}
          >
            <span className="text-sm font-medium">English</span>
            {currentLang === "en" && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => switchLanguage("ar")}
            className={`
              w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2
              ${
                currentLang === "ar"
                  ? "bg-blue-50 text-blue-600"
                  : "text-gray-700"
              }
            `}
            style={{ fontFamily: "var(--font-noto-sans-arabic) !important" }}
          >
            <span className="text-sm font-medium">العربية</span>
            {currentLang === "ar" && (
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
      )}
    </div>
  );
};
