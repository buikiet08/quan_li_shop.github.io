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
      'gray': '#D5D6D7',
      'gray-1': '#828282',
      'gray-2': '#626262'
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
