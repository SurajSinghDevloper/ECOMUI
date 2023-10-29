module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Your React components
    './public/index.html', // Your HTML file
  ],
  darkMode: false, // Set to 'media' or 'class' for dark mode support
  theme: {
    extend: {
      fontFamily: {
        custom: ['Montserrat', 'Red Hat Display'], // 'CustomFont' is the font family name
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

