/** @type {import('tailwindcss').Config} */

module.exports = {
  presets: [require("styles/tailwind.config")],
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
