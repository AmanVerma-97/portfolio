/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
      // ... other font families
      extend: {
        fontFamily: {
          customFont: ['Nunito', 'sans-serif'],
        },
      },
    },

    extend: {
      backgroundImage: {
        'contact': "url('src/assets/contact.jpg')",
        'error': "url('src/assets/error.jpeg')",
      },
      screens:{
          'custom-lg': '875px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animatecss"),
  ],
}
