/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#FBF9F7',
          100: '#F7F3EC',
          200: '#EDE4D3',
          300: '#D9C9A6',
          400: '#C4AA7A',
          500: '#C9A96E',
          600: '#B8954F',
          700: '#9A7A3F',
          800: '#7C6233',
          900: '#5E4927',
          950: '#3A2C18',
        },
        neutral: {
          50: '#FAFAFA',
          75: '#F5F5F5',
          100: '#F0F0F0',
          200: '#E8E8E8',
          300: '#D1D1D1',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        warm: {
          50: '#FDFCFA',
          100: '#FAF8F4',
          200: '#F5F0E8',
          300: '#EDE4D3',
          400: '#E2D3BA',
          500: '#D4BFA0',
          600: '#C4A87A',
          700: '#B08D55',
          800: '#8A6D3D',
          900: '#5C4728',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          primary: '#FAFAFA',
          secondary: '#F5F5F5',
          tertiary: '#F0F0F0',
          muted: '#FAFAFA',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        display: ['var(--font-playfair)', 'serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 12px rgba(0, 0, 0, 0.06)',
        'soft-lg': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'inner-soft': 'inset 0 1px 2px rgba(0, 0, 0, 0.04)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}