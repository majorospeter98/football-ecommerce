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
        "redGradient": "#b8241a",
        "lightBrownGradient": "#6b3030",
        "darkBrownGradient": "#2b0000",
        "lighRedGradient": "#FF0000 ",
        "darkRedGradient" :"#990000"
    
      },
      screens: {
        'max-sm': { max: '600px' }, 
        'max-md': { max: '850px' }, 
        
      },
    },
  },
  plugins: [],
}

