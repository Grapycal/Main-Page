/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",,
    ],
  theme: {
    extend: {
      colors:{
        'discord': '#5566E2',
        'purple-button': '#5425b560',
        'purple-button-border': '#49307b',
      }
    },
  },
  plugins: [],
}

