/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#050507',
          50: '#18191f',
          100: '#13141a',
          200: '#0e0f14',
          300: '#090a0e',
          400: '#050507',
        },
        surface: {
          DEFAULT: 'rgba(18, 19, 26, 0.7)',
          card: 'rgba(23, 25, 35, 0.6)',
          elevated: 'rgba(30, 32, 45, 0.75)',
        },
        border: {
          subtle: 'rgba(255, 255, 255, 0.07)',
          glow: 'rgba(255, 255, 255, 0.15)',
        },
        accent: {
          cyan: '#38bdf8',
          emerald: '#34d399',
          violet: '#a78bfa',
          amber: '#fbbf24',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(56, 189, 248, 0.15)',
        'glow-md': '0 0 30px -5px rgba(56, 189, 248, 0.2)',
        'glow-violet': '0 0 30px -5px rgba(167, 139, 250, 0.2)',
        'glass-edge': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('@tailwindcss/typography'),
  ],
}
