/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB', // Bleu moderne
          light: '#3B82F6',
          dark: '#1E40AF',
        },
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#E5E7EB',
          dark: '#6B7280',
        },
        background: '#F9FAFB',
        text: {
          DEFAULT: '#111827',
          light: '#6B7280',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

