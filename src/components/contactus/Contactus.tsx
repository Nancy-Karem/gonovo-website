"use client";
import Image from "next/image";
import React from "react";
import styles from "./contactus.module.css";
import { useCallusContext } from "../context/ContactusContext";
import { useFormik } from "formik";
import validationSchema from "../validation schema/contactus";
import emailjs from "@emailjs/browser";
import { useTranslations, useLocale } from "next-intl";
import { fireLeadFormConversion } from "@/lib/googleAds";

function Contactus() {
  const { toggleOpen } = useCallusContext();
  const t = useTranslations("contact_form");
  const tServiceLanding = useTranslations("service_landing");
  const tLead = useTranslations("lead_form");
  const locale = useLocale();
  const [submitError, setSubmitError] = React.useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setSubmitError(null);
      setIsSubmitting(true);
      emailjs
        .send(
          "service_ta6dex9",
          "template_ytb78wz",
          { ...values },

          {
            publicKey: "D9Y3Gx-Na5-iUIgIY",
          },
        )
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          fireLeadFormConversion();
          resetForm();
          toggleOpen();
        })
        .catch((error) => {
          console.error("Failed to send email:", error.text);
          setSubmitError(t("submit_error"));
        })
        .finally(() => setIsSubmitting(false));
    },
  });
  return (
    <section
      className={`${styles.main_section} overflow-y-auto fixed inset-0 bg-white z-20 grid grid-cols-1 lg:grid-cols-[1fr_630px] min-h-[100vh]`}
    >
      <div
        className="hidden lg:flex lg:flex-col h-full"
        style={{
          background:
            "linear-gradient(180deg, #DFE6F7 0%, #E8E4F1 46.19%, #FBDFE6 100%)",
        }}
      >
        <div
          data-aos="fade-right"
          className="h-full min-h-[100vh] p-8 xl:px-14 xl:py-12 flex flex-col justify-between gap-10"
        >
          <div>
            <p className="font-medium w-fit px-3 py-1.5 text-sm ring-2 ring-black/80 rounded-full bg-white/50">
              {tLead("badge")}
            </p>
            <h2 className="mt-6 text-[36px] xl:text-[52px] font-semibold leading-tight text-[#101828] max-w-xl">
              {tServiceLanding("form_title")}
            </h2>
            <p className="mt-4 text-[16px] xl:text-[18px] text-[#475467] leading-relaxed max-w-lg">
              {tServiceLanding("form_subtitle")}
            </p>
            <ul className="mt-8 flex flex-col gap-4">
              {[
                tLead("trust_response_time"),
                tLead("trust_free"),
                tLead("trust_experts"),
                "Clear communication from start to finish",
                "Structured process with measurable outcomes",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span
                    className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#4541F1]/10 text-[#4541F1]"
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 20 20"
                      className="w-4 h-4"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      />
                    </svg>
                  </span>
                  <span className="text-[16px] text-[#344054]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-white/70 bg-white/55 backdrop-blur-sm p-5 shadow-[0_8px_30px_rgba(16,24,40,0.08)] max-w-xl">
            <p className="text-[#101828] text-base font-semibold">
              Let&apos;s build something meaningful.
            </p>
            <p className="text-[#475467] text-sm mt-2 leading-relaxed">
              Share your goals in the form and our team will get back with a
              focused plan tailored to your business.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className=" relative flex justify-end border-b border-[#F2F4F7]">
          <button
            onClick={toggleOpen}
            className="inline-block relative w-12 h-12 my-2 mx-4"
          >
            <Image src="/svgs/graycloseIcon.svg" alt="" fill />
          </button>
        </div>
        <div className="m-8" dir={locale === "ar" ? "rtl" : "ltr"}>
          <h1 className="text-[#101828] text-[30px] font-semibold mb-12">
            {t("title")}
          </h1>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8">
            {/* Name of client */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-[14px] text-[#344054] font-medium cursor-pointer"
              >
                {t("name_label")}
              </label>
              <input
                id="name"
                type="text"
                className={`${
                  formik.touched.name && formik.errors.name
                    ? "border-red-500"
                    : "border-[#D0D5DD]"
                } border border-[#D0D5DD] px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]`}
                placeholder={t("name_placeholder")}
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
                {t("email_label")}
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
                placeholder={t("email_placeholder")}
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
                {t("phone_label")}
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
                placeholder={t("phone_placeholder")}
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
                {t("message_label")}
              </label>
              <textarea
                id="message"
                name="message"
                className={`${
                  formik.touched.message && formik.errors.message
                    ? "border-red-500"
                    : "border-[#D0D5DD]"
                } border border-[#D0D5DD] px-[14px] py-[14px] text-lg rounded-lg outline-none text-[#667085]  `}
                placeholder={t("message_placeholder")}
                rows={4}
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.message && formik.errors.message && (
                <p className="text-red-500">{formik.errors.message}</p>
              )}
            </div>
            {submitError && (
              <p className="text-red-500 text-sm" role="alert">
                {submitError}
              </p>
            )}
            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-5 py-[14px]  bg-btnbg text-white rounded-3xl font-medium cursor-pointer text-[17px] bg-[#4541F1] w-fit ms-auto outline-none disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t("submitting") : t("submit_button")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contactus;
