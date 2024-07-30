/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx, ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "375px",
      sm: "425px",
      // => @media (min-width: 426px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "976px",
      // => @media (min-width: 976px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2xl": "1025px",
      // => @media (min-width: 1536px) { ... }

      "3xl": "1440px",
      // => @media (min-width: 1536px) { ... }

      "4xl": "2560px",
      // => @media (min-width: 2560px) { ... }
    },
  },
  plugins: [],
};
