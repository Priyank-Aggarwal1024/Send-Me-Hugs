/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": { min: "480px" },
      "md": { min: "640px" },
      "lg": { min: "768px" },
      "xl": { min: "1024px" },
      "2xl": { min: "1280px" }
    },
    extend: {
      fontFamily: {
        lato: "Lato , sans-serif",
        inter: "Inter , sans-serif",
        popins: "Poppins , sans-serif",
        manrope: "Manrope , sans-serif",
        ibm: "IBM Plex Sans , sans-serif",
      },
      screens: {
        xss: {
          max: "374px",
        },
        xlg: {
          min: '844px',
        }
      },
      backgroundColor: {
        "dark-cyan": "#062832",
      },
      colors: {
        "primary": {
          "500": "rgba(29, 210, 180, 1)"
        }
      }
    },
  },
  plugins: [],
}