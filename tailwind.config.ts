import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f7f9f8",
          100: "#e8f0ed",
          200: "#d0e2db",
          300: "#b2cec3",
          400: "#8fb8a7",
          500: "#6fa18b",
          600: "#5a8a76",
          700: "#4a7261",
          800: "#3d5e50",
          900: "#324d42",
        },
        accent: {
          50: "#fdfbf7",
          100: "#f9f3e8",
          200: "#f2e5cc",
          300: "#e7d1a8",
          400: "#dcbd84",
          500: "#c9a65a",
          600: "#b39247",
          700: "#94783a",
          800: "#775f2f",
          900: "#5c4924",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f4f0",
          200: "#e7e5e0",
          300: "#d4d1ca",
          400: "#b0aca3",
          500: "#8c8880",
          600: "#6b6761",
          700: "#55524d",
          800: "#3b3936",
          900: "#272624",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;