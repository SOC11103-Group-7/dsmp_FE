/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
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
  plugins: [require('flowbite/plugin')],
};
