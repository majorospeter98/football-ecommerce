/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      minHeight: {
        "200": "43rem", 
      },
      colors:{
        "orangeGradient": "#ff6a4d",
        "redGradient": "#b8241a"
      },
      screens: {
        'max-sm': { max: '700px' }, // 639px alatt érvényes
        'max-md': { max: '800px' }, // 767px alatt érvényes
        
      },
    },
  },
  plugins: [],
}

