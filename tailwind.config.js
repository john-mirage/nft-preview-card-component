const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '340px',
      sm: '448px',
    },
    colors: {
      'soft-blue': 'hsl(215, 51%, 70%)',
      'cyan': 'hsl(178, 100%, 50%)',
      'transparent-cyan': 'rgba(0, 255, 247, 0.5)',
      'main': 'hsl(217, 54%, 11%)',
      'card': 'hsl(216, 50%, 16%)',
      'line': 'hsl(215, 32%, 27%)',
      'white': 'hsl(0, 0%, 100%)',
    },
    extend: {
      fontFamily: {
        sans: [
          'Outfit',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      backgroundImage: {
        'view-icon': "url('/src/assets/images/icon-view.svg')",
      },
    },
  },
  plugins: [],
}
