/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#FFCF52',
      'white': '#FFFFFF',
      'white-2': '#F2F3F4',
      'black': '#000000',
      'black-2':'#1A1A22',
      'black-3': '#4F4F4F',
      'gray': '#D5D6D7',
      'gray-1': '#828282',
      'gray-2': '#626262',
      'gray-3': '#AFB4B8',
      'yellow': '#EAC363',
      'blue': '#E3EBFB',
      'green': '#D2F1E3'
    },
    width: {
      '500': '500px',
      'full': '100%',
    },   
    extend: {
     spacing:{

     }
    },
  },
  plugins: [],
}
