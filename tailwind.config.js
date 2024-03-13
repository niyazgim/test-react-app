/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#A020F0",
        "brand-dark--hover": "#A33CD7",
      },
    },
  },
  plugins: [],
}

