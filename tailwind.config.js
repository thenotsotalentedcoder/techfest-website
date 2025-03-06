module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-blue': '#00BFFF',
        'tech-purple': '#9D00FF',
        'tech-pink': '#FF00FF',
        'tech-green': '#00FF9D',
        'tech-dark': '#0A0A0A',
        'tech-darker': '#050505',
      },
      fontFamily: {
        'cyber': ['Orbitron', 'sans-serif'],
        'code': ['Fira Code', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #00bfff, 0 0 20px #00bfff' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 15px #00bfff, 0 0 20px #00bfff, 0 0 25px #00bfff, 0 0 30px #00bfff' },
        },
      },
    },
  },
  plugins: [],
}