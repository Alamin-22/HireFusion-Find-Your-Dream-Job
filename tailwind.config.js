/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#8befe3",

          "secondary": "#b70b1f",

          "accent": "#f6c7fc",

          "neutral": "#283039",

          "base-100": "#e9eaf1",

          "info": "#1fbfef",

          "success": "#17cf88",

          "warning": "#a9610a",
          "successSoft": "#2adfa6",

          "error": "#f14b4b",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}