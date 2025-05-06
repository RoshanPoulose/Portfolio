/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
      "./public/index.html"
    ],
    theme: {
      extend: {
        screens: {
          'xxl': '1840px',    // ≥ 1840px
          'hd': '1920px',     // ≥ 1920px
          'ultra': '2560px'   // ≥ 2560px
        }
      }
    },
    plugins: []
  }
  