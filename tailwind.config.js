/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        surface: '#f3f6fd',
        'surface-hover': '#e9eefb',
        navy: '#0a1226',
        primary: '#1e4aff',
        secondary: '#059669',
        accent: '#f43f5e',
        muted: '#5a6b85',
        // Additional CSS variables for Entropy component
        'var-background': 'var(--background)',
        'var-foreground': 'var(--foreground)',
        'var-primary': 'var(--text-primary)',
        'var-secondary': 'var(--text-secondary)',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Bricolage Grotesque', 'Outfit', 'sans-serif'],
        // Additional font for Entropy component
        'noto': ['var(--font-noto)'],
      },
      boxShadow: {
        'glass': '0 10px 30px rgba(20, 40, 80, 0.06)',
        'neon-primary': '0 8px 24px rgba(47, 107, 255, 0.28)',
        'neon-secondary': '0 8px 24px rgba(16, 185, 129, 0.25)',
        'neon-accent': '0 8px 24px rgba(244, 63, 94, 0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blob': 'blob 7s infinite',
        // Additional animations for Entropy component
        'bounce-x': 'bounce-x 1.5s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'float-up': 'float-up 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'spotlight': 'spotlight 2s ease-in-out infinite',
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
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        // Additional keyframes for Entropy component
        'bounce-x': {
          '0%, 100%': { transform: 'translateX(-4px)' },
          '50%': { transform: 'translateX(0px)' },
        },
        'glow': {
          '0%, 100%': { opacity: '0.6', filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.5))' },
        },
        'float-up': {
          '0%': { opacity: '0', transform: 'translateY(6px)', filter: 'blur(2px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        'spotlight': {
          '0%, 100%': { opacity: '0' },
          '50%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
