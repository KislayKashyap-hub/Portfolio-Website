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
        primary: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        secondary: {
          light: '#f3f4f6',
          dark: '#374151',
        },
        textPrimary: {
          light: '#111827',
          dark: '#f9fafb',
        },
        textSecondary: {
          light: '#4b5563',
          dark: '#9ca3af',
        },
      },
    },
  },
  plugins: [],
}

