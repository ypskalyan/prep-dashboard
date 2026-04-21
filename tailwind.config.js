/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
      colors: {
        sidebar: '#0F1117',
        'sidebar-border': '#1E2130',
        accent: '#6C63FF',
        'accent-light': '#EEF0FF',
        'accent-muted': '#8B85FF',
      },
    },
  },
  plugins: [],
}
