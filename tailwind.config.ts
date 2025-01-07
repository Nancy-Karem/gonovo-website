import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        linksColor: "var(--headlinks-color)",
        purpleLight: "var(--lightpurple-color)",
        grayLight: "var(--lightgray-color)",
        yellowLight: "var(--lightyellow-color)",
        semiblue: "var(--semiblue-color)",
        darkGray: "var(--darkgray-color)",
        secondaryblack: "var(--secondaryblack-color)",
        bgdrop: "var(--bgdrop-color)",
        ringLight: "var(--ringlight-color)",
        offwight: "var(--offwhite-color)",
        lightblack: "var(--lightblack-color)",
        semipurple: "var(--semilightpurple-color)",
        darkring: "var(--darkring-color)",
        dotlight: "var(--dotlight-color)",
        thingray: "var(--thingray-color)",
        thirdblack: "var(--thirdblack-color)",
        lightborder: "var(--lightgrayborder-color)",
        semidarkgray: "var(--semidarkgray-color)",
      },
    },
  },
  plugins: [],
} satisfies Config;
