const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkblue: colors.blueGray
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
  plugins: [],
}
