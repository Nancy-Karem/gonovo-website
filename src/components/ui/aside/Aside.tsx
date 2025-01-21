import ImageComponent from "@/components/imagecomponent/ImageComponent";
import React from "react";
import styles from "./aside.module.css";
import LinkNavigation from "../link/LinkNavigation";
import Link from "next/link";
function Aside({ handleOpen }: { handleOpen: () => void }) {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Us",
      link: "/#about",
    },
    {
      name: "Software Dev",
      link: "/softwaredevelopment",
    },
    {
      name: "Digital marketing",
      link: "/digitalmarketing",
    },
    {
      name: "Reviews",
      link: "/#reviews",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  const socilaLinks = [
    {
      svgsrc: "/svgs/linkedin.svg",
      link: "https://www.linkedin.com/company/gonovo/",
    },
    {
      svgsrc: "/svgs/X.svg",
      link: "/",
    },
    {
      svgsrc: "/svgs/github.svg",
      link: "/",
    },
    {
      svgsrc: "/svgs/dribbble.svg",
      link: "/",
    },
  ];
  const phoneNumber = "01212973305"; // Replace with the actual phone number
  const message = "Hello, I’d like to chat with you!"; // Optional pre-filled message

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
  return (
    <aside>
      <div
        className={`${styles.main_responsive} fixed w-full top-0 left-0 z-50 h-[100vh] bg-white grid grid-cols-[352px_1fr] overflow-hidden`}
      >
        <div
          className={`${styles.left_container} relative p-12 flex flex-col justify-between`}
        >
          <div className={`${styles.bottom_top} absolute`}></div>
          <Link href="/" onClick={handleOpen}>
            <ImageComponent
              src="/svgs/logolight.svg"
              width="229px"
              height="34px"
              alt="company logo"
            />
          </Link>
          <div className="flex flex-col gap-2">
            <ImageComponent
              src="/svgs/stars.svg"
              width="116px"
              height="20px"
              alt="stars"
            />
            <p className="max-w-[243px] text-sm font-semibold text-thingray relative">
              Awesome Design For Awesome Businesses
            </p>
          </div>
        </div>
        <div className="relative py-12 px-4 sm:p-12">
          <div className={`${styles.top_bottom}  absolute`}></div>
          <div
            className={`${styles.links_cont} relative flex flex-col justify-between h-full`}
          >
            <div
              className={`${styles.logo_responsive} flex justify-between items-center`}
            >
              <p className="text-thingray">Navigation</p>
              <Link href="/" onClick={handleOpen}>
                <ImageComponent
                  src="/svgs/logolight.svg"
                  width="229px"
                  height="34px"
                  alt="company logo"
                />
              </Link>
              <div className="flex gap-4">
                <div className={`${styles.btn}`}>
                  <LinkNavigation link="/" text="+ Become a client" />
                </div>
                <button onClick={handleOpen}>
                  <ImageComponent
                    src="/svgs/closeIcon.svg"
                    alt="close icon"
                    width="48px"
                    height="48px"
                  />
                </button>
              </div>
            </div>
            <div
              className={`${styles.res_links} flex flex-col justify-between  h-[584px]`}
            >
              {links.map((item, index) => (
                <Link
                  className="text-[80px] leading-[64px] text-white"
                  key={index}
                  href={item.link}
                  onClick={handleOpen}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div
              className={`${styles.mid_cont} absolute flex gap-10 right-[-20px] bottom-[-20px]`}
            >
              <div>
                <Link
                  href={whatsappLink}
                  target="_blanck"
                  className="flex  items-center"
                >
                  <span className="text-thingray text-[32px]">WhatsApp</span>
                  <ImageComponent
                    src="/svgs/arrow.svg"
                    width="43px"
                    height="43px"
                    alt="arrow"
                  />
                </Link>
                <Link
                  href="mailto:info@gonovo.tech"
                  target="_blanck"
                  className="flex  items-center"
                >
                  <span className="text-thingray text-lg">
                    info@gonovo.tech
                  </span>
                  <ImageComponent
                    src="/svgs/arrow.svg"
                    width="43px"
                    height="43px"
                    alt="arrow"
                  />
                </Link>
              </div>
              <div className={`${styles.row} flex flex-col gap-2`}>
                {socilaLinks.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <ImageComponent
                      src={item.svgsrc}
                      width="44px"
                      height="44px"
                      alt="social media icon"
                    />
                  </Link>
                ))}
              </div>
              <div className={`${styles.last} flex flex-col gap-2`}>
                <ImageComponent
                  src="/svgs/stars.svg"
                  width="116px"
                  height="20px"
                  alt="stars"
                />
                <p className="max-w-[243px] text-sm font-semibold text-thingray relative">
                  Awesome Design For Awesome Businesses
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Aside;
