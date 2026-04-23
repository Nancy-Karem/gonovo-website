"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useLocale, useTranslations } from "next-intl";
import { fireLeadFormConversion } from "@/lib/googleAds";

interface LeadFormProps {
  defaultService?: string;
  variant?: "light" | "dark";
  compact?: boolean;
  id?: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be 80 characters or less")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Required"),
  phone: Yup.string()
    .matches(
      /^(\+?\d{1,4}[-.\s]?)?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
      "Invalid phone number format",
    )
    .required("Required"),
  service: Yup.string().required("Required"),
  message: Yup.string().max(1000, "Message must be 1000 characters or less"),
});

export default function LeadForm({
  defaultService = "",
  variant = "light",
  compact = false,
  id = "lead-form",
}: LeadFormProps) {
  const t = useTranslations("lead_form");
  const locale = useLocale();
  const [status, setStatus] = React.useState<"idle" | "success" | "error">(
    "idle",
  );
  const [submitting, setSubmitting] = React.useState(false);

  const serviceKeys = [
    "software_development",
    "digital_marketing",
    "branding_design",
    "consultation",
    "other",
  ];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      service: defaultService,
      message: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      setSubmitting(true);
      setStatus("idle");
      emailjs
        .send(
          "service_ta6dex9",
          "template_ytb78wz",
          {
            ...values,
            message: values.message
              ? `[${values.service}] ${values.message}`
              : `[${values.service}] (no additional message)`,
          },
          { publicKey: "D9Y3Gx-Na5-iUIgIY" },
        )
        .then(() => {
          fireLeadFormConversion();
          resetForm({ values: { ...formik.initialValues } });
          setStatus("success");
        })
        .catch(() => setStatus("error"))
        .finally(() => setSubmitting(false));
    },
  });

  const isDark = variant === "dark";
  const labelClass = `text-[13px] font-medium ${
    isDark ? "text-white/80" : "text-[#344054]"
  }`;
  const inputBase = `border px-4 py-3 text-[15px] rounded-lg outline-none w-full transition-colors focus:ring-2 focus:ring-[#4541F1]/40 focus:border-[#4541F1] ${
    isDark
      ? "bg-white/10 border-white/20 text-white placeholder:text-white/50"
      : "bg-white border-[#D0D5DD] text-[#101828] placeholder:text-[#667085]"
  }`;
  const errClass = "text-red-500 text-xs mt-1";

  const fieldWrap = (hasError: boolean) =>
    `flex flex-col gap-1 ${hasError ? "has-error" : ""}`;

  return (
    <form
      id={id}
      onSubmit={formik.handleSubmit}
      dir={locale === "ar" ? "rtl" : "ltr"}
      noValidate
      className={`w-full ${
        isDark
          ? "bg-[#1B1A3A] text-white"
          : "bg-white text-[#101828]"
      } rounded-[24px] ${
        compact ? "p-6 sm:p-8" : "p-6 sm:p-10"
      } shadow-[0_20px_40px_-20px_rgba(69,65,241,0.25)] border border-black/5`}
    >
      <div className="flex flex-col gap-1 mb-6">
        <h3 className="text-[22px] sm:text-[26px] font-semibold leading-tight">
          {t("title")}
        </h3>
        <p
          className={`text-[14px] sm:text-[15px] ${
            isDark ? "text-white/70" : "text-[#667085]"
          }`}
        >
          {t("subtitle")}
        </p>
      </div>

      {status === "success" ? (
        <div
          role="status"
          className={`rounded-xl p-5 border ${
            isDark
              ? "bg-green-500/10 border-green-400/30 text-green-200"
              : "bg-green-50 border-green-200 text-green-800"
          }`}
        >
          <p className="font-semibold">{t("success_title")}</p>
          <p className="text-sm mt-1">{t("success_message")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className={fieldWrap(!!(formik.touched.name && formik.errors.name))}>
            <label htmlFor={`${id}-name`} className={labelClass}>
              {t("name_label")}
            </label>
            <input
              id={`${id}-name`}
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputBase}
              placeholder={t("name_placeholder")}
              autoComplete="name"
            />
            {formik.touched.name && formik.errors.name && (
              <p className={errClass}>{formik.errors.name}</p>
            )}
          </div>

          <div className={fieldWrap(!!(formik.touched.email && formik.errors.email))}>
            <label htmlFor={`${id}-email`} className={labelClass}>
              {t("email_label")}
            </label>
            <input
              id={`${id}-email`}
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputBase}
              placeholder={t("email_placeholder")}
              autoComplete="email"
            />
            {formik.touched.email && formik.errors.email && (
              <p className={errClass}>{formik.errors.email}</p>
            )}
          </div>

          <div className={fieldWrap(!!(formik.touched.phone && formik.errors.phone))}>
            <label htmlFor={`${id}-phone`} className={labelClass}>
              {t("phone_label")}
            </label>
            <input
              id={`${id}-phone`}
              type="tel"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={inputBase}
              placeholder={t("phone_placeholder")}
              autoComplete="tel"
              dir="ltr"
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className={errClass}>{formik.errors.phone}</p>
            )}
          </div>

          <div className={fieldWrap(!!(formik.touched.service && formik.errors.service))}>
            <label htmlFor={`${id}-service`} className={labelClass}>
              {t("service_label")}
            </label>
            <select
              id={`${id}-service`}
              name="service"
              value={formik.values.service}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`${inputBase} appearance-none cursor-pointer`}
            >
              <option value="" disabled>
                {t("service_placeholder")}
              </option>
              {serviceKeys.map((key) => (
                <option key={key} value={t(`service_options.${key}`)}>
                  {t(`service_options.${key}`)}
                </option>
              ))}
            </select>
            {formik.touched.service && formik.errors.service && (
              <p className={errClass}>{formik.errors.service}</p>
            )}
          </div>

          <div
            className={`${fieldWrap(!!(formik.touched.message && formik.errors.message))} sm:col-span-2`}
          >
            <label htmlFor={`${id}-message`} className={labelClass}>
              {t("message_label")}
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              rows={compact ? 3 : 4}
              className={inputBase}
              placeholder={t("message_placeholder")}
            />
            {formik.touched.message && formik.errors.message && (
              <p className={errClass}>{formik.errors.message}</p>
            )}
          </div>

          <div className="sm:col-span-2 flex flex-col gap-3 mt-2">
            {status === "error" && (
              <p className="text-red-500 text-sm" role="alert">
                {t("error")}
              </p>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 bg-[#FF732C] hover:bg-[#e85f1a] disabled:opacity-60 disabled:cursor-not-allowed text-white rounded-full px-6 py-4 text-[16px] sm:text-[17px] font-semibold shadow-lg shadow-[#FF732C]/20 transition-colors w-full sm:w-auto sm:self-end"
            >
              {submitting ? t("submitting") : t("submit")}
            </button>
            <p
              className={`text-[12px] ${
                isDark ? "text-white/50" : "text-[#667085]"
              }`}
            >
              {t("privacy")}
            </p>
          </div>
        </div>
      )}

      <div
        className={`mt-6 pt-6 border-t ${
          isDark ? "border-white/10" : "border-[#F2F4F7]"
        } grid grid-cols-1 sm:grid-cols-3 gap-3 text-[13px] ${
          isDark ? "text-white/70" : "text-[#475467]"
        }`}
      >
        <TrustItem dark={isDark}>{t("trust_response_time")}</TrustItem>
        <TrustItem dark={isDark}>{t("trust_free")}</TrustItem>
        <TrustItem dark={isDark}>{t("trust_experts")}</TrustItem>
      </div>
    </form>
  );
}

function TrustItem({
  children,
  dark,
}: {
  children: React.ReactNode;
  dark: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-flex items-center justify-center w-5 h-5 rounded-full ${
          dark ? "bg-green-400/20 text-green-300" : "bg-green-100 text-green-700"
        }`}
        aria-hidden
      >
        <svg viewBox="0 0 20 20" className="w-3 h-3" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          />
        </svg>
      </span>
      <span>{children}</span>
    </div>
  );
}
