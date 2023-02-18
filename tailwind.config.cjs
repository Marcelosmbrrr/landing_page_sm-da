/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "images": "url(../public/images/background.png)",
        "clean_canva": "url(../public/images/background_clean_texture.png)"
      }
    },
  },
  plugins: [],
}