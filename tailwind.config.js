/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        switcher: '0px 2px 6px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};
