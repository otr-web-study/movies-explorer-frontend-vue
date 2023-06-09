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
        'modal-container': '0 0 25px rgba(0, 0, 0, .15)',
      },
      keyframes: {
        'preloader-inside-white': {
          '0%': {
            '-webkit-transform': 'scale(0, 0)',
            '-moz-transform': 'scale(0, 0)',
            '-ms-transform': 'scale(0, 0)',
            '-o-transform': 'scale(0, 0)',
            transform: 'scale(0, 0)',
          },
          '100%': {
            '-webkit-transform': 'scale(1, 1)',
            '-moz-transform': 'scale(1, 1)',
            '-ms-transform': 'scale(1, 1)',
            '-o-transform': 'scale(1, 1)',
            transform: 'scale(1, 1)',
          },
        },
        'preloader-inside-red': {
          '0%, 30%': {
            '-webkit-transform': 'scale(0, 0)',
            '-moz-transform': 'scale(0, 0)',
            '-ms-transform': 'scale(0, 0)',
            '-o-transform': 'scale(0, 0)',
            transform: 'scale(0, 0)',
          },
          '100%': {
            '-webkit-transform': 'scale(1, 1)',
            '-moz-transform': 'scale(1, 1)',
            '-ms-transform': 'scale(1, 1)',
            '-o-transform': 'scale(1, 1)',
            transform: 'scale(1, 1)',
          },
        },
      },
      animation: {
        'preloader-inside-white': 'preloader-inside-white 1s ease-in-out infinite',
        'preloader-inside-red': 'preloader-inside-red 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
