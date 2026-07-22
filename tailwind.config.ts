import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      colors: {
        navy: {
          DEFAULT: "#061A3A",
          50: "#EDF3FC",
          100: "#D6E4F7",
          400: "#274B85",
          500: "#0C2D67",
          600: "#0A2352",
          700: "#081D45",
          800: "#0A1F3D",
          900: "#061A3A",
          950: "#040F24",
        },
        azure: {
          DEFAULT: "#0A3F90",
          50: "#EAF6FE",
          100: "#D2ECFD",
          200: "#A8F2FF",
          300: "#75E4FF",
          400: "#24B6F2",
          500: "#2087E4",
          600: "#0A3F90",
          700: "#0C2D67",
        },
        ice: "#F7FCFF",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      boxShadow: {
        premium: "0 20px 60px -15px rgba(6, 26, 58, 0.25)",
        card: "0 8px 30px rgba(10, 40, 90, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
