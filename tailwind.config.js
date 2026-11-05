/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8F8F6',
        surface: {
          DEFAULT: '#FFFFFF',
          secondary: '#EFEFEB',
          tertiary: '#E8E8E3',
        },
        primary: {
          DEFAULT: '#171717',
          muted: '#3D3D3D',
        },
        secondary: '#686868',
        accent: {
          DEFAULT: '#315CF5',
          hover: '#2447CE',
          light: '#EBF0FE',
          subtle: '#DCE6FC',
        },
        border: {
          DEFAULT: '#E4E4E0',
          subtle: '#EAEAE6',
          strong: '#D0D0CA',
        }
      },
      fontFamily: {
        display: ['Sora', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)',
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'elevated': '0 12px 32px -4px rgba(0, 0, 0, 0.08)',
        'modal': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'accent': '0 4px 14px 0 rgba(49, 92, 245, 0.25)',
      },
      borderRadius: {
        'editorial': '6px',
        'card': '12px',
        'modal': '16px',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.16, 1, 0.3, 1)',
      }
    },
  },
  plugins: [],
}
