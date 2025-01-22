"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./contactus.module.css";
import { useCallusContext } from "../context/ContactusContext";
function Contactus() {
  const { toggleOpen } = useCallusContext();
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formState, setFormState] = useState(initialFormState);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };
  console.log(formState);
  return (
    <section
      className={`${styles.main_section} overflow-y-auto fixed inset-0 bg-white z-20 grid grid-cols-1 lg:grid-cols-[1fr_630px] min-h-[100vh]`}
    >
      <div
        className="hidden lg:block"
        style={{
          background:
            "linear-gradient(180deg, #DFE6F7 0%, #E8E4F1 46.19%, #FBDFE6 100%)",
        }}
      ></div>
      <div className="">
        <div className=" relative flex justify-end border-b border-[#F2F4F7]">
          <button
            onClick={toggleOpen}
            className="inline-block relative w-12 h-12 my-2 mx-4"
          >
            <Image src="/svgs/graycloseIcon.svg" alt="" fill />
          </button>
        </div>
        <div className="m-8">
          <h1 className="text-[#101828] text-[30px] font-semibold mb-12">
            Let’s level up your brand, together
          </h1>
          <form className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[14px] text-[#344054] font-medium cursor-pointer"
              >
                Name & Company
              </label>
              <input
                id="name"
                type="text"
                className=" border border-[#D0D5DD] px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]"
                placeholder="Name & Company"
                name="name"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-[14px] text-[#344054] font-medium cursor-pointer"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className=" border border-[#D0D5DD] px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]"
                placeholder="you@company.com"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="phone"
                className="text-[14px] text-[#344054] font-medium cursor-pointer"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className=" border border-[#D0D5DD] px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]"
                placeholder="Enter your phone number"
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="text-[14px] text-[#344054] font-medium cursor-pointer"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-[#D0D5DD] px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]  "
                placeholder="Leave us a message..."
                rows={4}
                onChange={handleChange}
              />
            </div>
            {/* Submit */}
            <input
              // data-aos="fade-up"
              // data-aos-delay="750"
              // data-aos-offset="0"
              type="submit"
              value="Submit your request"
              className="px-5 py-[14px]  bg-btnbg text-white rounded-3xl font-medium cursor-pointer text-[17px] bg-[#4541F1] w-fit ms-auto"
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
