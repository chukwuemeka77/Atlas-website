/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        atlasBlue: "#1E40AF",
        atlasPink: "#EC4899"
      }
    }
  },
  plugins: []
};
