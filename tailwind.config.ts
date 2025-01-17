import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/antd/dist/reset.css',
  ],
  theme: {
    extend: {
      screen: {
        'xs': '512px'
      },
      colors: {
        primary: "#382a33",
        secondary: "#ee791d",
        "light-secondary": "#ffe8ca",
        background: "#fcf9f6",
        danger: "#f66",
        text: "#584455",
      },
      fontFamily: {
        eugusto: "var(--eugusto)",
        urbanist: "var(--urbanist)",
        inspiration: "var(--inspiration)",
      }
    },
  },
  plugins: [],
} satisfies Config;
