import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary":"#F8DD84",
        "secondary":"#4C9BB9",
        "accent":"#1C5469"
      
      

      },
    },
  },
  plugins: [],
};
export default config;
