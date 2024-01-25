/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    backgroundImage: { 'checkmark': 'url("/src/assets/images/Checkmark.webp")' },
    fontFamily: {
      poppins: ["Poppins"],
      inter: ["Inter"],
    },
  },
  plugins: [],
};
