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
        // VS Code Dark Stone Theme Colors
        background: {
          primary: '#1E1E1E',     // Main background
          secondary: '#252526',   // Secondary background
          tertiary: '#2D2D30',    // Elevated surfaces
        },
        surface: {
          100: '#3E3E42',         // Lighter surface
          200: '#37373D',         // Medium surface
          300: '#2D2D30',         // Default surface
          400: '#252526',         // Darker surface
        },
        text: {
          primary: '#CCCCCC',     // Primary text
          secondary: '#9D9D9D',   // Secondary text
          muted: '#6A6A6A',       // Muted text
          accent: '#F8F8F2',      // Near white for emphasis
        },
        accent: {
          purple: {
            100: '#D8B4FE',       // Light purple
            200: '#C084FC',       // Medium light purple
            300: '#A855F7',       // Main purple
            400: '#9333EA',       // Darker purple
            500: '#7C3AED',       // Deep purple
          },
        },
        border: {
          default: '#3E3E42',     // Default border
          light: '#6A6A6A',       // Lighter border
          accent: '#A855F7',      // Purple accent border
        },
        code: {
          background: '#1E1E1E',
          selection: '#264F78',
          comment: '#6A9955',
          keyword: '#569CD6',
          string: '#CE9178',
          function: '#DCDCAA',
        }
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
        'glow': 'glow 2s ease-in-out infinite alternate',
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
        'code-pattern': 'linear-gradient(45deg, transparent 25%, rgba(168, 85, 247, 0.1) 25%, rgba(168, 85, 247, 0.1) 50%, transparent 50%, transparent 75%, rgba(168, 85, 247, 0.1) 75%)',
      },
    },
  },
  plugins: [],
}
export default config