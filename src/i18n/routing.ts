import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  localePrefix: "always",
  locales: ["en", "ar"],
  defaultLocale: "en",
  pathnames: {
    "/": "/",
    "/pathnames": {
      // ar: "/pathnames-ar",
      // en: "/pathnames",
    },
  },
});
