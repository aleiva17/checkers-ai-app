/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { "max": "374px" }
      },
      colors: {
        light: "#fcfaff",
        dark: "#1d202f"
      }
    },
  },
  plugins: [],
}

