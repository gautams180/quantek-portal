/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "serif"],
      },
      colors: {
        "custom-pink": "#D70F98",
      },
      keyframes: {
        slideUnderline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        slide: 'slideUnderline 0.3s ease-out forwards'
      },
      backgroundImage: {
        'hero': "url('./src/assets/png/Particle-Image-top.png')",
      },
    },
  },
  plugins: [],
};
