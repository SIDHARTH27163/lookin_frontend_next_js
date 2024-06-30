const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    join(__dirname, '../../../shared-assets/styles/**/*.{css,scss}') 
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto_medium: ['Roboto-medium', 'sans-serif'],
        Roboto_regular: ['Roboto-regular', 'sans-serif'],
        Roboto_light: ['Roboto-light', 'sans-serif'],
        Playwrite:['Playwrite' , 'sans-serif']
      },
    },
  },
  plugins: [],
};
