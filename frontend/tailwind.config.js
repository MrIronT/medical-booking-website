/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor:"#0067FF",
        yellowColor:"#0067FF",
        purpleColor:"#0067FF",
        irisBlueColor:"#0067FF",
        headingColor:"#0067FF",
        textColor:"#0067FF",
      },
      boxShadow: {
        panelShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;",
      },
    },
  },
  plugins: [],
};

