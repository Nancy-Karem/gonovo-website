

"use client";
import Image from "next/image";
import React from "react";
import styles from "./contactus.module.css";
import { useCallusContext } from "../context/ContactusContext";
import { useFormik } from "formik";
import validationSchema from "../validation schema/contactus";
import emailjs from "@emailjs/browser";
function Contactus() {
  const { toggleOpen } = useCallusContext();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_ta6dex9",
          "template_ytb78wz",
          { ...values },

          {
            publicKey: "XdPuBFT_MODIwWQPc",
          }
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            resetForm();
            toggleOpen();
          },
          (error) => {
            console.error("Failed to send email:", error.text);
          }
        );
      // console.log("Form submitted:", values);
    },
  });
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
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
            {/* Name of client */}
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
                className={`${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-[#D0D5DD]"
                } border border-[#D0D5DD] px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]`}
                placeholder="Name & Company"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500">{formik.errors.name}</p>
              )}
            </div>
            {/* email of client */}
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
                className={`${
                  formik.touched.email && formik.errors.email
                    ? "border-red-500"
                    : "border-[#D0D5DD]"
                } border  px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]`}
                placeholder="you@company.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500">{formik.errors.email}</p>
              )}
            </div>
            {/* client Phone */}
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
                className={`${
                  formik.touched.phone && formik.errors.phone
                    ? "border-red-500"
                    : "border-[#D0D5DD]"
                }} border  px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]`}
                placeholder="Enter your phone number"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500">{formik.errors.phone}</p>
              )}
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
                className={`${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : "border-[#D0D5DD]"
                } border border-[#D0D5DD] px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]  `}
                placeholder="Leave us a message..."
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500">{formik.errors.message}</p>
              )}
            </div>
            {/* Submit */}
            <button
              type="submit"
              className="px-5 py-[14px]  bg-btnbg text-white rounded-3xl font-medium cursor-pointer text-[17px] bg-[#4541F1] w-fit ms-auto outline-none"
            >
              Submit your request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
