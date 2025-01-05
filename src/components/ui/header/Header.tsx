import navLinks from "@/app/data/links";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkNavigation from "../link/LinkNavigation";

function Header() {
  return (
    <header className="h-[50px] flex justify-between items-center">
      <Link href="/" className="relative w-[215px] h-[32px] inline-block">
        <Image src="/svgs/logo.svg" alt="logo of website" fill />
      </Link>
      <div>
        <ul className="w-[574px] py-[13px] px-[52px] bg-white flex justify-between gap-3 rounded-full">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className="font-semibold text-[15px] text-linksColor"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <LinkNavigation text="+ Become a Client" link="/" />
        <button className="relative w-[50px] h-[50px]">
          <Image src="/svgs/burger.svg" alt="burger icon" fill />
        </button>
      </div>
    </header>
  );
}

export default Header;
