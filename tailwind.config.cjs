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
        "clean_canva": "url(../public/images/background_clean_texture.png)",
        "image_ex1": "url(../public/images/example1.png)",
        "image_ex2": "url(../public/images/example2.png)",
        "image_ex3": "url(../public/images/example3.png)",
        "photo1": "url(../public/images/photo1.jpg)",
        "photo2": "url(../public/images/photo2.jpg)",
        "photo3": "url(../public/images/photo3.jpg)"
      },
    },
  },
  plugins: [],
}