const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    plugin(function ({ addVariant, addUtilities }) {
      addVariant("custom-dark", [
        "@media (prefers-color-scheme: dark)",
        ".dark &",
      ]);
      addUtilities({
        ".inset-center": {
          "@apply top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2":
            {},
        },
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        success: {
          100: "var(--success-100)",
          200: "var(--success-200)",
          300: "var(--success-300)",
          400: "var(--success-400)",
          500: "var(--success-500)",
          600: "var(--success-600)",
          700: "var(--success-700)",
          800: "var(--success-800)",
          900: "var(--success-900)",
          1000: "var(--success-1000)",
          1100: "var(--success-1100)",
          1200: "var(--success-1200)",
          1300: "var(--success-1300)",
        },
        info: {
          100: "var(--info-100)",
          200: "var(--info-200)",
          300: "var(--info-300)",
          400: "var(--info-400)",
          500: "var(--info-500)",
          600: "var(--info-600)",
          700: "var(--info-700)",
          800: "var(--info-800)",
          900: "var(--info-900)",
          1000: "var(--info-1000)",
          1100: "var(--info-1100)",
          1200: "var(--info-1200)",
          1300: "var(--info-1300)",
        },
        warning: {
          100: "var(--warning-100)",
          200: "var(--warning-200)",
          300: "var(--warning-300)",
          400: "var(--warning-400)",
          500: "var(--warning-500)",
          600: "var(--warning-600)",
          700: "var(--warning-700)",
          800: "var(--warning-800)",
          900: "var(--warning-900)",
          1000: "var(--warning-1000)",
          1100: "var(--warning-1100)",
          1200: "var(--warning-1200)",
          1300: "var(--warning-1300)",
        },
        danger: {
          100: "var(--danger-100)",
          200: "var(--danger-200)",
          300: "var(--danger-300)",
          400: "var(--danger-400)",
          500: "var(--danger-500)",
          600: "var(--danger-600)",
          700: "var(--danger-700)",
          800: "var(--danger-800)",
          900: "var(--danger-900)",
          1000: "var(--danger-1000)",
          1100: "var(--danger-1100)",
          1200: "var(--danger-1200)",
          1300: "var(--danger-1300)",
        },
      },
      boxShadow: {
        "glow-sm": "0 0 15px -5px rgba(255, 255, 255, 0.08)",
        "glow-md": "0 0 25px -2px rgba(255, 255, 255, 0.08)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1.5rem",
          lg: "2.5rem",
        },
        screens: {
          sm: "100%",
          md: "48rem",
          lg: "64rem",
        },
      },
    },
  },
};
