/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",   // Azul profundo técnico
        accent: "#1D4ED8",    // Ajusta a tu color de marca
        muted: "#6B7280"
      }
    },
  },
  plugins: [],
}
