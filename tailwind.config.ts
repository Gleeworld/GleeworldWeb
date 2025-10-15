/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magneta: "#E10075",
        orange: "#FF6B35",
        silver: "#F8F9FA",
        "dark-gray": "#333333",
      },
    },
  },
  plugins: [],
};
