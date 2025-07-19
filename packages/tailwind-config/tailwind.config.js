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
      boxShadow: {
        "glow-sm": "0 0 15px -5px rgba(255, 255, 255, 0.08)",
        "glow-md": "0 0 25px -2px rgba(255, 255, 255, 0.08)",
      },
      backgroundImage: {
        "gradient-rad-1":
          "radial-gradient(var(--tw-gradient-to) -5%, 90%, var(--tw-gradient-from) 102%)",
        "gradient-rad-2":
          "radial-gradient(ellipse farthest-corner at 65% 65%, var(--tw-gradient-to) -5%, 90%, var(--tw-gradient-from) 102%)",
        "gradient-rad-3":
          "radial-gradient(ellipse farthest-corner at 35% 65%, var(--tw-gradient-to) -5%, 90%, var(--tw-gradient-from) 102%)",
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.5rem", lg: "2.5rem" },
        screens: { sm: "100%", md: "48rem", lg: "64rem" },
      },
    },
  },
};
