/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      primary: "#CC2D4A",
      secondary: "#8FA206",
      terciary: "#61AEC9",
    },
    fontFamily: {
      Montserrat: ["Monserrat", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        /* ahora estan en la carpeta src  */
        sanFrancisco: "url('/src/img/sanFrancisco.jpg')",
        sanFranciscoDesktop: "url('/src/img/sanFranciscoDesktop.jpg')",
        yosemite: "url('/src/img/yosemite.jpg')",
        LA: "url('/src/img/LA.jpg')",
        seattle: "url('/src/img/seattle.jpg')",
        new_york: "url('/src/img/new_york.jpg')",
        norway: "url('/src/img/norway.jpg')",
        sydney: "url('/src/img/sydney.jpg')",
        miami: "url('/src/img/miami.jpg')",
        switzerland: "url('/src/img/switzerland.jpg')",
        bali: "url('/src/img/bali.jpg')",
        norway: "url('/src/img/norway.jpg')",
        chicago: "url('/src/img/chicago.jpg')",
        europe: "url('/src/img/europe.jpg')",
        iceland: "url('/src/img/iceland.jpg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
