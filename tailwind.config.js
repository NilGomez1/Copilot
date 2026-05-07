/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0f172a',
        'dark-secondary': '#1e293b',
        'dark-tertiary': '#334155',
        'light-bg': '#f8fafc',
        'light-secondary': '#e2e8f0',
      },
      gradients: {
        'purple-blue': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'blue-cyan': 'linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)',
      }
    },
  },
  plugins: [],
}
