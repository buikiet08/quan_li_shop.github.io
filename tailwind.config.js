/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#FFCF52',
      'white': '#FFFFFF',
      'black': '#000000',
      'black-2':'#1A1A22',
      'gray': '#D5D6D7',
      'gray-1': '#828282'
    },
    width: {
      '500': '500px',
      'full': '100%',
    },   
    extend: {
      padding:{
        '10px': '10px',
      },
    },
  },
  plugins: [],
}
