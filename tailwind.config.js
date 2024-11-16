/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundPosition: {
        'center-x': 'center top',
      },
      colors: {
        'dark-green': '#2e5607',
        'musgo': '#90aba4'
      },
      aspectRatio: {
        '16/35': '16 / 35',
        '16/4': '16 / 4'
      },
    },
  },
  plugins: [],
}