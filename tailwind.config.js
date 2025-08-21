/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00998d',
        button: '#961c1f',
        secondary: '#f2f2f2',
        tertiary: '#006b31', 
        background: '#231f20',
        light: '#ed1c24',
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"], // ✅ Manrope is now the default
      },
      keyframes: {
        // Floating animation for hover-center effect
        floaty: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(5%)" },
        },
        // Your existing scroll animations
        scrollDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0%)" },
        },
        scrollUp: {
          "0%": { transform: "translateY(0%)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
      animation: {
        floaty: "floaty 2s ease-in-out infinite",
        scrollDown: "scrollDown 20s linear infinite",
        scrollUp: "scrollUp 20s linear infinite",
      },
    },
  },
  plugins: [],
};
