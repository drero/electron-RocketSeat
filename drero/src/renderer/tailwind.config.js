const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Inter; sans-serif",
      },
      colors: {
        rotion: {
          50: "#e6eef6",
          100: "#d9e5f2",
          200: "#b0c9e4",
          300: "#0051a8",
          400: "#004997",
          500: "#004186",
          600: "#003d7e",
          700: "#003165",
          800: "#00244c",
          900: "#001c3b",
        },
      },
      keyframes: {
        slideIn: {
          from: { width: 0 },
          to: { width: "var(--radix-collapsible-content-width)" },
        },

        slideOut: {
          from: { width: "var(--radix-collapsible-content-width)" },
          to: { width: 0 },
        },
      },
      animation: {
        slideIn: "slideIn 0.25s",
        slideOut: "slideOut 0.25s",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),

    plugin(({ addUtilities }) => {
      addUtilities({
        ".region-drag": {
          "-webkit-app-region": "drag",
        },
        ".region-no-drag": {
          "-webkit-app-region": "no-drag",
        },
      });
    }),
  ],
};
