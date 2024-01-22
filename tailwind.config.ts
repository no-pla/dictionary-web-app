import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      headingL: ["64px", { fontWeight: "700" }],
      headingM: "24px",
      headingS: "20px",
      bodyM: ["18px", "24px"],
      bodyS: "14px",
    },
    backgroundImage: {
      search: 'url("/images/icon-search.svg")',
    },
  },

  plugins: [],
};
export default config;
