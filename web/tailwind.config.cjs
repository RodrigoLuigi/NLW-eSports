/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      fontSize: {
        titleClamp: "clamp(2.6rem, 5vw, 3.75rem)",
        titleClamp2: "clamp(1.2rem, 5vw, 1.75rem)"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        galaxy: "url('/background-galaxy.png')",
        'nlw-gradient': "linear-gradient(89.86deg, #9572FC , #43E7AD , #E1D55D )",
        'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      }
    },
  },
  plugins: [],
}
