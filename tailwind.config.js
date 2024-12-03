/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      colors: {
        customPurple: "#3E31FA",
        mainTextColor:'#0F2145'
      },
    },
  },
  plugins: [],
}

