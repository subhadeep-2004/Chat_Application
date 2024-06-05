import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        customYellow: 'rgba(253, 218, 13, 0.2)',
      },
      backdropBlur: {
        '2px': '2px',
      },
    },
    daisyui: {
      // themes: ["light", "dark", "cupcake"],
    },
  },
  plugins: [daisyui],
}