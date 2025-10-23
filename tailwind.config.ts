import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#F7F9FC',
          secondary: '#FFFFFF',
          tertiary: '#E9F0FF',
        },
        surface: {
          100: '#FFFFFF',
          200: '#F3F6FF',
          300: '#E7EDFF',
          400: '#D9E3FF',
        },
        text: {
          primary: '#1F2937',
          secondary: '#4B5563',
          muted: '#9CA3AF',
          accent: '#0F172A',
        },
        accent: {
          purple: {
            100: '#EAE4FF',
            200: '#D6CBFE',
            300: '#B9A6FC',
            400: '#9E82F9',
            500: '#855CF6',
          },
        },
        border: {
          default: '#CBD5F5',
          light: '#E2E8F0',
          accent: '#B9A6FC',
        },
        code: {
          background: '#F1F5FE',
          selection: '#C7D2FE',
          comment: '#6B7280',
          keyword: '#4C51BF',
          string: '#D97706',
          function: '#2563EB',
        },
      },
      fontFamily: {
        mono: ['Fira Code', 'JetBrains Mono', 'Consolas', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 1s ease-in-out infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #A855F7' },
          '100%': { boxShadow: '0 0 20px #A855F7, 0 0 30px #A855F7' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'code-pattern':
          'linear-gradient(45deg, transparent 25%, rgba(185, 166, 252, 0.08) 25%, rgba(185, 166, 252, 0.08) 50%, transparent 50%, transparent 75%, rgba(185, 166, 252, 0.08) 75%)',
      },
    },
  },
  plugins: [],
}
export default config
