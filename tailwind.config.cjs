/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        coffee: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#e7d3cc',
          300: '#d6ad9c',
          400: '#ca8a67',
          500: '#c16e39',
          600: '#b45a2a',
          700: '#954a23',
          800: '#793e1f',
          900: '#63341b',
        }
      }
    },
  },
  plugins: [],
}