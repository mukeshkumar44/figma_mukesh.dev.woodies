module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
      backgroundImage: {
        'grid-indigo-100': 'linear-gradient(to right, #e0e7ff 1px, transparent 1px), linear-gradient(to bottom, #e0e7ff 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-indigo-100': '20px 20px',
      },
      opacity: {
        'grid-opacity-50': '0.5',
      },
    },
  },
  plugins: [],
}
