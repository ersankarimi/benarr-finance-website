/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"],
        "clash-display": ["ClashDisplay-Variable", "serif"],
      },
      colors: {
        brand: {
          "midnight": {
            950: "#050729",
          },
          "santas-gray": {
            500: "#989AAE",
          },
          "neon-carrot": {
            400: "#ff9736",
          },
          "purple-heart": {
            800: "#5313ca",
          },
          "magnolia": {
            100: "#F3F0F8",
          },
          "athens-gray": {
            100: "#edeef2",
          },
          "aqua": {
            300: "#75F1F1",
          },
          "selago": {
            100: "#eeeffa",
          },
        },
      },
    },
  },
  plugins: [],
}
