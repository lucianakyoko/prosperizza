/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: {
        100: "#000000",
        900: "#000000CC"
      },
      brown: {
        50: '#B2A0A0',
        100: '#8A6B61',
        150: '#B2A0A0',
        200: '#1C1212',
        300: '#746C6C'
      },
      gray: {
        100: '#F6E7E7',
        150: '#EDEDEB',
        850: '#171212',
        900:'#130B0D',
        950:'#080707'
      },
      red: {
        100: '#C8102E',
        200: '#910C22',
      },
      yellow: {
        100: '#F5F31D',
        200: '#F2BB13'
      },
    },
    extend: {
      lineHeight: { 
        'none': '0'
      },
      backgroundImage: {
        cheff: "url(/cheff.png)",
        table: "url(/background.png)",
        pizza: "url(/pizza.png)",
        cheese: "url(/cheese-tomato.png)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
