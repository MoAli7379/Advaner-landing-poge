/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {transitionProperty: {
      'height': 'height',
      'spacing': 'margin, padding',
    }},
  },
  plugins: [require('flowbite/plugin')],
}

