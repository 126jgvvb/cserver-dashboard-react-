/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "/public/index.html"
  ],
  theme: {
    extend: {
      colors:{
          'myColor':'#625858',
          'subTitle':'#655959'
        }
    },
  },
  plugins: [],
}

