"use client";
import navLinks from "@/app/data/links";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Aside from "../aside/Aside";
import { usePathname } from "next/navigation";
import { useCallusContext } from "@/components/context/ContactusContext";

function Header() {
  const pathname = usePathname();
  const { toggleOpen } = useCallusContext();
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <header className="h-[50px] flex justify-between items-center">
      <Link
        href="/"
        className="relative w-[180px] h-[36px] sm:w-[215px] sm:h-[32px] inline-block"
      >
        <Image src="/svgs/logo.svg" alt="logo of website" fill />
      </Link>
      <div>
        <ul className="w-[651px] py-[13px] hidden xl:flex px-[52px] bg-white  justify-between gap-10 rounded-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`font-semibold text-[15px] text-linksColor ${
                  link.path === pathname && pathname !== "/" && "activeLink"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center ">
        <div className="hidden sm:flex">
          {pathname === "/softwaredevelopment" ? (
            <button
              className="bg-[#4541F1] rounded-full py-[12px] px-[18px] text-[17px] text-white font-medium"
              onClick={toggleOpen}
            >
              + Become a Client
            </button>
          ) : (
            <button
              className="bg-white rounded-full py-[12px] px-[18px] text-[17px] font-medium"
              onClick={toggleOpen}
            >
              + Become a Client
            </button>
          )}
        </div>

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
