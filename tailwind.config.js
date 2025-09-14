/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          600: '#2c5282',
          700: '#2a4365',
          800: '#1a365d',
          900: '#1a365d',
        }
      },
      fontFamily: {
        'dancing': ['"Dancing Script"', 'cursive'],
        'playfair': ['"Playfair Display"', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      keyframes: {
        'pulse-slow': {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.5 },
        },
        'pulse-slower': {
          '0%, 100%': { opacity: 0.2 },
          '50%': { opacity: 0.4 },
        }
      },
      animation: {
        'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
        'pulse-slower': 'pulse-slower 6s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}