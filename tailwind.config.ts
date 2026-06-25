import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        'custom-orange': '#FF6500',
        'custom-purple': '#8E44AD',
        'custom-blue': '#2980B9',
        'custom-bright-blue': '#3498DB',
        'custom-dark-red': '#875450',
        'custom-red': '#FF4127',
        'custom-peach': '#FAD7A1',
        'custom-gray': '#95A5A6',
        'custom-dark-teal': '#16A085',
        'custom-dark-blue': '#2C3E50',
        'custom-dark-purple': '#8E44AD',
        'custom-dark-red-2': '#C0392B',
        'custom-dark-green': '#27AE60',
      },
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      inter: ["Inter", ...defaultTheme.fontFamily.sans],
      nunito: ["Nunito", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;
