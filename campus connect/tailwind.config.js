/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        campus: {
          primary: '#0056b3', // University Blue
          secondary: '#ffc107', // Accent Yellow
        }
      }
    },
  },
  plugins: [],
}