/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          reddit: ["'Reddit Sans'", "sans-serif"],
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
  