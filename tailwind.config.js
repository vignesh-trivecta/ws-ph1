/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
  ],
  safelist: [
    'hover:text-theme-orange',
    'hover:text-theme-blue',
    'bg-theme-orange',
    'bg-theme-blue',
    'text-theme-orange',
    'text-theme-blue',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'theme-orange': '#F37440',
        'theme-blue': '#1B1A47'
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
