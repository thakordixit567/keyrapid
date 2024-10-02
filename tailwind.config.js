
const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {animation: {
      text: 'text 5s ease infinite',
    },},
    keyframes :{
      text: {
        '0%, 100%': {
          'background-size': '200% 200%',
          'background-position': 'left center',
        },
        '50%': {
          'background-size': '200% 200%',
          'background-position': 'right center',
        },
      },
    },
    fontFamily: {
      'Primary' : ['Comfortaa'],
      'Textfont' : ['Kanit'],
    }
  },
  plugins: [
    flowbite.plugin(),
  ],
  
}
