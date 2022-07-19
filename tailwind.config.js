/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
//     fontFamily: {
//       display: ["Open Sans", "sans-serif"],
//       body: ["Open Sans", "sans-serif"],
//     },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    
    extend: {
      colors: {
        "main-primary": "#ffb142",
        "main-black": "#151517"
      },
      maxHeight:{
        "786":"786px",
        "595":"595px"
      },
      maxWidth:{
        "80":"20rem",
        "96":"24rem",
        "400":"400px",
        "600":"600px"
      },
      height:{
        "450":"450px"
      }
   
    },
  },
  plugins: [],
}
