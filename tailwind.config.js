/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0f',
        surface: '#14141e',
        'surface-hover': '#1e1e2d',
        primary: '#5227FF',
        secondary: '#7cff67',
        accent: '#ff6b6b',
        muted: '#9ca3af',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'neon-primary': '0 0 10px rgba(82, 39, 255, 0.4), 0 0 20px rgba(82, 39, 255, 0.2)',
        'neon-secondary': '0 0 10px rgba(124, 255, 103, 0.4), 0 0 20px rgba(124, 255, 103, 0.2)',
        'neon-accent': '0 0 10px rgba(255, 107, 107, 0.4), 0 0 20px rgba(255, 107, 107, 0.2)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' },
        }
      }
    },
  },
  plugins: [],
}
