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
        primary: "#382a33",
        secondary: "#ee791d",
        "light-secondary": "#ffe8ca",
        background: "#fcf9f6",
        text: "#b8a8a8",
      },
    },
  },
  plugins: [],
} satisfies Config;
