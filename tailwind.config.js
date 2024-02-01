/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: true,
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        subCategory: '#f2efe6'
      },
      screens: {
        'xs': '0px',
        'sm': '600px',
        'md': '900px',
        'lg': '1200px',
        'xl': '1536px',
      }
    },
  },
  plugins: [],
}

