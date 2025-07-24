"use client";
import navLinks from "@/app/data/links";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Aside from "../aside/Aside";
import { usePathname } from "next/navigation";
import { useCallusContext } from "@/components/context/ContactusContext";
import { LangugesSwitcher } from "./LangugesSwitcher";
import { useLocale, useTranslations } from "next-intl";

function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("aside_links");
  const { toggleOpen } = useCallusContext();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [open]);
  return (
    <header className="h-[50px] flex justify-between items-center">
      <Link
        href={`/${locale}`}
        className="relative w-[180px] h-[36px] sm:w-[215px] sm:h-[32px] inline-block"
      >
        <Image src="/svgs/logo.svg" alt="logo of website" fill />
      </Link>
      <div>
        <ul className="w-[551px] py-[13px] hidden xl:flex px-[52px] bg-white  justify-between gap-6 rounded-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={`/${locale}/${link.path}`}
                onClick={(e) => {
                  if (link.name === "contact_us") {
                    e.preventDefault();
                    toggleOpen();
                  }
                }}
                className={`font-semibold text-[15px] text-linksColor ${
                  link.path === pathname && pathname !== "/" && "activeLink"
                }`}
              >
                {t(link.name)}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex gap-4 items-center ">
        <div className="hidden sm:flex">
          {pathname === `/${locale}/softwaredevelopment` ? (
            <button
              className="bg-[#4541F1] rounded-full py-[12px] px-[18px] text-[17px] text-white font-medium"
              onClick={toggleOpen}
            >
              + {t("become_a_client")}
            </button>
          ) : (
            <button
              className={`bg-white rounded-full py-[12px] px-[18px] text-[17px] font-medium flex items-center gap-2 ${
                locale === "ar" ? "flex-row-reverse" : ""
              }`}
              onClick={toggleOpen}
            >
              <span className="text-[17px] font-medium">+</span>
              {t("become_a_client")}
            </button>
          )}
        </div>
        <LangugesSwitcher />
        <button onClick={handleToggle} className="relative w-[50px] h-[50px]">
          <Image src="/svgs/burger.svg" alt="burger icon" fill />
        </button>
      </div>

      {open && (
        <Aside handleOpen={handleToggle} handleOpenContact={toggleOpen} />
      )}
    </header>
  );
}

export default Header;
