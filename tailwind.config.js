/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pinkCustom: "#E91E63",
        indigoCustom: "#3F51B5",
      },
      fontFamily: {
        header: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
