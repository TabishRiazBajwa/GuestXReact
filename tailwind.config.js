/** @type {import('tailwindcss').Config} */
const { light } = require("@mui/material/styles/createPalette");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    //   // themeColor: "#0F2E60",
    //   // blue: "#1fb6ff",
    //   // purple: "#7e5bef",
    //   // pink: "#ff49db",
    //   // orange: "#ff7849",
    //   // green: "#0DA452",
    //   // yellow: "#ffc82c",
    //   // "gray-dark": "#273444",
    //   // gray: "#8492a6",
    //   // red:'#e53e3e',
    //   // basicGreen: "#0DA452",
    //   // white: "#FFFFFF",
    //   // gray: {
    //   //   300: "#D1D5DB",
    //   //   // ...
    //   //   900: "#1a202c"
    //   // },
    //   // "gray-light": "#d3dce6",
    //   // primary: "#1C935F",
    //   // "primary-light": "#DBF6E5",
    //   // secondary: "#BB760D",
    //   // "secondary-light": "#FFF1D6",
    //   // danger: "#C64742",
    //   // "danger-light": "#FFE4DE",
    //   // rejected: "#73818E",
    //   // "rejected-light": "#EDEFF1",
    //   // black: "#000000",
    //   // white: "#FFFFFF",
    // },
    extend: {
      colors: {
        "custom-blue": "#CCCCCC",
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "custom-blue-4": "rgba(48, 13, 244, 0.08)",
        "sidebar-dark": "rgba(47,13,244, 0.08)",
      }),
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
