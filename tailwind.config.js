/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-instrument-sans)', 'sans-serif'],
        heading: ['var(--font-inter-tight)', 'sans-serif'],
      },
      colors: {
        primary: '#000000',
        secondary: '#131315',
        accent: '#28282c',
        border: '#1d1d20',
        'text-gray': '#94969D',
      },
      borderRadius: {
        '4xl': '24px',
        '5xl': '100px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
