/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'box':'#D8D9C9',
      }
      
    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
