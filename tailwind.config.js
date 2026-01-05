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
        // Appit brand colors extracted from the sample
        'appit-black': '#000000',
        'appit-bg': '#000000',
        'appit-card': 'rgb(9, 9, 10)',
        'appit-border': 'rgb(29, 29, 32)',
        'appit-border-light': 'rgb(40, 40, 44)',
        'appit-surface': 'rgb(24, 24, 26)',
        'appit-surface-dark': 'rgb(19, 19, 21)',
        'appit-gray': 'rgb(148, 150, 157)',
        'appit-gray-dark': 'rgb(98, 100, 108)',
        'appit-white': 'rgb(255, 255, 255)',
        'appit-accent': 'rgb(50, 191, 93)',
        'appit-purple': 'rgb(138, 43, 226)',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'inter-tight': ['Inter Tight', 'sans-serif'],
        'instrument': ['Instrument Sans', 'sans-serif'],
      },
      borderRadius: {
        '10': '10px',
        '12': '12px',
        '14': '14px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '30': '30px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(60px) scale(0.8)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
