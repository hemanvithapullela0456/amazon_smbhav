/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}",   // Include all JS and JSX files in the src folder
  ],
  theme: {
    extend: {},              // Extend Tailwind's default theme if needed
  },
  plugins: [],               // Add plugins here if required
}
