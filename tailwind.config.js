module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      xs: "450px",
      // => @media (min-width: 450px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      maxWidth: {
        "8xl": "1586px",
      },
      colors: {
        primary: "#3bb77e",
        warning: '#fdc040',
        bgSoft: "#3bb77e8f",
        "light-gray": "#7e7e7e",
        "orange-light": "#fdc040",
        'primary-text': '#253d4e',
        'blue-light': '#f4f6fa'

      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp"),  require('@tailwindcss/typography'),
  require("tailwind-scrollbar") ({nocompatible:true})],
  variants:{
    scrollbar: ['rounded']
  }
};
