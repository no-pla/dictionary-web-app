import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2s ease-in-out infinite",
      },
    },
    fontSize: {
      headingL: ["64px", { fontWeight: "700" }],
      headingM: ["24px", { fontWeight: "700" }],
      headingS: "20px",
      bodyM: ["18px", "24px"],
      bodyS: "14px",
    },
    backgroundImage: {
      search: 'url("/images/icon-search.svg")',
    },
    boxShadow: {
      fontShadow: "0 5px 30px 0 rgba(0, 0, 0, 0.1)",
      fontShadowDark: "0 5px 30px 0 #A445ED",
    },
    screens: {
      lg: { max: "1440px" },
      md: { max: "768px" },
      sm: { max: "375px" },
      fold: { max: "320px" },
    },
  },

  plugins: [],
};
export default config;

//
