/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'molengo': ['Molengo', 'sans-serif'],
        'alkatra': ['Alkatra', 'cursive'],
        'fasthand': ['Fasthand', 'cursive'],
        'handdrawn': ['Delicious Handrawn', 'cursive'],
        'tillana': ['Tillana', 'cursive'],
        'serifjp': ['Noto Serif JP', 'serif'],
        'EBG': ['EB Garamond', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto Condensed', 'sans-serif'],
        'IBM': ['IBM Plex Sans', 'sans-serif'],
      },
    },
  },



  plugins: [require("daisyui"), "flowbite/plugin"],

}

