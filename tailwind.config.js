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
      }
    }
  },
  plugins: []
};
