/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'dana': 'dana',
      'dana-bold': 'dana-bold',
      'dana-medium': 'dana-medium',
      'morabba-bold': 'mo-bold',
      'morabba-medium': 'mo-medium',
      'morabba-light': 'mo-light'
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem'
      }
    }

  },
  plugins: [],
}