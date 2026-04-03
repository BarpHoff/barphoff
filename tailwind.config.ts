import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#994B4B',
          dark: '#7A3C3C',
          light: '#B06060',
        },
        gold: '#D5BE9F',
        taupe: '#AF9879',
        cta: {
          DEFAULT: '#348011',
          light: '#6DC246',
        },
        hero: '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['MozaicGEO', 'var(--font-outfit)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-prata)', 'Georgia', 'serif'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-30px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(30px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)', filter: 'blur(0)' },
        },
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-cta': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 168, 89, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(0, 168, 89, 0)' },
        },
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'fade-in-up': 'fade-in-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-left': 'fade-in-left 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in-right': 'fade-in-right 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'bounce-in': 'bounce-in 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-cta': 'pulse-cta 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
