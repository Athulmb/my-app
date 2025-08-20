/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00998d',
        button: '#009072',
        secondary: '#fdfcf0',
        tertiary: '#006b31', 
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"], // ✅ Manrope is now the default
      },
      keyframes: {
        scrollDown: {
          '0%': { transform: 'translateY(-50%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        scrollUp: {
          '0%': { transform: 'translateY(0%)' },
          '100%': { transform: 'translateY(-50%)' },
        },
      },
      animation: {
        scrollDown: 'scrollDown 20s linear infinite',
        scrollUp: 'scrollUp 20s linear infinite',
      },
    },
  },
  plugins: [],
}
