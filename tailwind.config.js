/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js , ts , jsx , tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        'custom': '2px 2px 5px rgba(0, 0, 0, 0.3)',
        'none': 'none',
        'sm': '2px 5px 1px rgba(200, 200, 200, 0.5)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.5)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.5)',
        'xl': '0 6px 12px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [

  ],
}