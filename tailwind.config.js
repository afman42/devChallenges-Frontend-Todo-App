/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "raleway-sans": ["Raleway", "sans-serif"],
        "montserrat-sans": ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
