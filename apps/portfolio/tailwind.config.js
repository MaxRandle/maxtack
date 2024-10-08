/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require("styles/tailwind.config")],
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          100: "var(--base-100)",
          200: "var(--base-200)",
          300: "var(--base-300)",
          400: "var(--base-400)",
          500: "var(--base-500)",
          600: "var(--base-600)",
          700: "var(--base-700)",
          800: "var(--base-800)",
          900: "var(--base-900)",
          1000: "var(--base-1000)",
          1100: "var(--base-1100)",
          1200: "var(--base-1200)",
          1300: "var(--base-1300)",
        },
        primary: {
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          1000: "var(--primary-1000)",
          1100: "var(--primary-1100)",
          1200: "var(--primary-1200)",
          1300: "var(--primary-1300)",
        },
      },
    },
  },
  plugins: [],
};
