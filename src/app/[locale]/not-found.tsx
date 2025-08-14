"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function LocaleNotFound() {
  const locale = useLocale();

  const isArabic = locale === "ar";

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/svgs/logo.svg"
            alt="Gonovo Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        {/* 404 Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="text-6xl font-bold text-gray-800 mb-4">404</div>
          <h1 className="text-2xl font-semibold text-gray-700 mb-3">
            {isArabic ? "الصفحة غير موجودة" : "Page Not Found"}
          </h1>
          <p className="text-gray-500 mb-6 leading-relaxed">
            {isArabic
              ? "عذراً! الصفحة التي تبحث عنها غير موجودة. قد تكون قد تم نقلها أو حذفها، أو قد تكون قد أدخلت عنوان URL خاطئ."
              : "Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL."}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={`/${locale}`}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isArabic ? "العودة للرئيسية" : "Go Home"}
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {isArabic ? "العودة للخلف" : "Go Back"}
            </button>
          </div>
        </div>

        {/* Additional Help */}
        <div className="text-sm text-gray-500">
          <p>
            {isArabic ? "تحتاج مساعدة؟ " : "Need help? "}
            <Link href={`/${locale}`} className="text-blue-600 hover:underline">
              {isArabic ? "تواصل مع فريق الدعم" : "Contact our support team"}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
