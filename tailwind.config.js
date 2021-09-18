const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkblue: colors.blueGray,
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      // colors: {
      //   dark: '#171924',
      //   darkest: '#222531eb'
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
