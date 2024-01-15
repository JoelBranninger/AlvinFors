/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './src/pages/**/*.{js,jsx,ts,tsx}',
      './src/components/**/*.{js,jsx,ts,tsx}',
   ],
   theme: {
      extend: {
         colors: {
            themeOrange: '#BC6C25',
            themeWhite: '#DDDDDD',
            themeDark: '#282828',
            themeDarker: '#212121',
            themeLightDark: '#383838',
         },
      },
   },
   plugins: [],
}
