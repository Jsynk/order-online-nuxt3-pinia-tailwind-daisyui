/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#99bd48",
          "primary-focus": "#7c9a38",
          "primary-content": "#fff",

          "secondary": "#009a3e",
          "secondary-focus": "#006729",
          "secondary-content": "#fff",

          "base-100": "#fff",
          "base-200": "#ccc",
          "base-300": "#aaa",
          "base-content": "#000",
        },
      },
    ],
  }
}

