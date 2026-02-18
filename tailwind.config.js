/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-black': '#000000',
        'pure-white': '#FFFFFF',
      },
      fontFamily: {
        'display': ['Archivo Black', 'sans-serif'],
        'mono': ['Space Mono', 'monospace'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pixel-appear': 'pixelAppear 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        pixelAppear: {
          '0%': { 
            opacity: '0',
            transform: 'translate(var(--x), var(--y)) scale(0.5)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translate(0, 0) scale(1)',
          },
        },
        fadeUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
