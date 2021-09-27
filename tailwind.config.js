module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'press-start': ['"Press Start 2P"', 'cursive'],
        'roboto': ["Roboto Slab", "cursive"],
        'montserrat': ["Montserrat", "cursive"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
