/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Sarpanch", "sans-serif"],
        regular: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
