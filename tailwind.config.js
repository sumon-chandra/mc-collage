import { nextui } from '@nextui-org/react'
// const { colors: defaultColors } = require('tailwindcss/defaultTheme')
import { colors as defaultColors } from "tailwindcss/defaultTheme"

/** @type {import('tailwindcss').Config} */

// const colors = {
//   ...defaultColors,
//   ...{
//       "custom-yellow": {
//           "500": "#EDAE0A",
//       },
//   },
// }

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      ...defaultColors,
      ...{
        "primary-color": "#CBFC01"
      },
    },
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui({
    defaultTheme: "dark",
  })]
}