/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        0: '0fr',
        auto: '1fr'
      },
      gridTemplateRows: {
        0: '0fr',
        auto: '1fr'
      },
      animation: {
        bump: 'bump 0.5s linear'
      },
      keyframes: {
        bump: {
          '0%, 100%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(0.9)' },
          '50%': { transform: 'scale(1.1)' },
          '75%': { transform: 'scale(0.9)' }
        }
      }
    }
  },
  plugins: []
};
