/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'orbitron': ['Orbitron', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin 8s linear infinite reverse',
        'float-vertical': 'floatVertical 3s ease-in-out infinite',
        'float-horizontal': 'floatHorizontal 3s ease-in-out infinite',
      },
      keyframes: {
        floatVertical: {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '50%': { transform: 'translate(-50%, -60%)' },
        },
        floatHorizontal: {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '50%': { transform: 'translate(-60%, -50%)' },
        },
      },
    },
  },
  plugins: [],
}

