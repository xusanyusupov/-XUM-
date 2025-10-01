/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
      colors: {
        bgColor: '#EEEEEE',
        mainColor: '#FE7F26',
        secondary: '#FFF',
        hLink: '#6B6B6B',
        hLinkHover: '#000',
        heroMenu: '#333333',  
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',    
          sm: '2rem',         
          lg: '4rem',         
          xl: '5rem',         
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1500px',
        }
      },
    }
  },
  plugins: [],
}