module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      height: {
        screen: 'calc(var(--vh) * 100)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
