module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      height: {
        screen: 'calc(var(--vh) * 100)'
      },
      transitionDelay: {
        '2000': '4000ms'
      },
      spacing: {
        '27': '6.75rem',
        '90': '22.5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
