/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#1D4ED8",    // (Ese azul brillante que tienes actualmente)
        muted: "#6B7280",
        // Tienes que meter "techno" AQUÍ ADENTRO:
        techno: {
          dark: '#0F5A59',
          light: '#72BBA4',
        }
      },
    },
  },
  plugins: [],
}