import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-1": "#648EFE",
      },
      backgroundImage: {
        "gradient-1": "linear-gradient(to right, #648EFE, #648EFE)", // Adjust if you want a gradient with different colors
      },
    },
  },
  plugins: [],
};
export default config;
