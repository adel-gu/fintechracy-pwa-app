/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
      },
    },
    colors: {
      primary: '#594ef1',
      'primary-op': 'rgba(89, 78, 241, 0.13)',
      secondary: '#1a202c',
      accent: '#49d806',
      'modal-bg': 'rgba(0,0,0,0.44)',
      dark: {
        gray: '#bdbdbd',
      },
      white: {
        'gray-1': '#9e9e9e',
        'gray-2': '#9c9c9c',
        'gray-3': '#B4B4B4',
        'gray-4': '#7b7b7b',
        'gray-5': '#f8f8f8',
      },
    },
    fontFamily: {
      inter: ['Inter'],
    },
  },
  plugins: [],
};

// grayy
// 9E9E9E
// 9C9C9C
// B4B4B4
// 7B7B7B
// E9E8FF
