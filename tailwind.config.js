/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      minHeight:{
        '400':'100rem',
      }
    },
  },
  plugins: [],
}

