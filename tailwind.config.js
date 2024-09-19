/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        textBlack: "#1F2024",
        lightGray: "#71727A",
        borderGray: "#C5C6CC",
        hrGray: "#D4D6DD",
        alertRed: "#FFE2E5",
        alertLightGray: "#494A50",
        lightBlue: "#EAF2FF",
        blue: "#006FFD",
        blueHover: "#005BCC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        halfPercent: "0.005em",
        onePercent: "0.01em",
      },
    },
  },
  plugins: [],
};
