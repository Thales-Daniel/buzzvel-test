/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      exo: ["Exo 2", "sans-serif"],
  },
    extend: {
      colors: {
        "light-blue": "#3F8EFC",
        "light-yellow": "#D6DE28",
        "strong-blue": "#161C2D",
        "semi-white": "#F8F8F8",
        "border-gray": "#E2E2E2",
        "black-not-strong": "#343338",
      },
      screens: {
        'mini': {'max':  '450px' },
        '2mini': {'max': '500px'},
         'sm':  {'max': '767px'},
         'md':  {'min': '768px', 'max': '1023px'},
         '2md': {'max': '900px'},
         '2md-min': { 'min': '900px'},
         'lg':  {'min': '1024px'},
        'lg-max':  {'max': '1024px'},
         'xl':  { 'max': '1200px'},
      },
    },

  },
  plugins: [],
}
