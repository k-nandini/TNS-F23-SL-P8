/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./templates/**/*.html",
    "./**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: 'default',
    }),
  ],
}