/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'mobile-sm': '320px',

        'mobile-lg': '375px',

        // 'mobile-max': { max: '767px' },

        tablet: '768px',

        // 'tablet-max': { max: '1439px' },
        // 'tablet-only': { min: '768px', max: '1439px' },

        desktop: '1440px',
      },
      colors: {
        'white-background-3': '#fff',
        dark: '#1d1e21',
        'dark-0.1': 'rgba(29, 30, 33, 0.1)',
        'dark-0.4': 'rgba(29, 30, 33, 0.4)',
        purple: '#8059e4',
        'orange-background-2': '#f79042',
        blue: '#70a6e8',

        'red-accent': '#e85050',
        'red-e8': 'rgba(232, 80, 80, 0.1)',

        'green-accent': '#59b17a',
        'green-3f': '#3f945f',
        'green-59': 'rgba(89, 177, 122, 0.1)',
        'green-background': '#e7f1ed',

        'gray-text': '#dcdddf',
        'gray-f7': '#f7f8fa',
        'gray-f9': '#f9f9f9',
      },
    },
  },
  plugins: [],
};
