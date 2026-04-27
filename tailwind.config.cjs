/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#040812',
        surface: '#0b1424',
        electric: '#55f3ff',
        cyanblue: '#15c8ff',
        mint: '#44f5cb',
        ink: '#e6f0ff',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Sora"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(85,243,255,0.14), 0 24px 80px rgba(0, 173, 255, 0.18)',
        panel: '0 20px 80px rgba(2, 12, 27, 0.45)',
      },
    },
  },
  plugins: [],
};
