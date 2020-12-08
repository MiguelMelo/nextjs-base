module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'cm-gray': '#222222',
        'cm-yellow': '#f3b854',
        'cm-light-gray': '#333333',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
