module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      // Custom media queries screen size
      screens: {
        xs: '340px',
        tab: '834px',
        pc: '1280px',
      },
      // Custom font family
      fontFamily: {
        sora: ['"Sora"', 'serif'],
      },
      // Custom colors
      colors: {
        'clr-woodsmoke': '#09080F',
        'clr-electric-violet': '#9538e2',
      },
    },
  },
  plugins: [require('daisyui')],

  // Config for daisyUI
  daisyui: {
    themes: ['light'], // only 'light' theme available
    prefix: 'da-', // change prefix for all classes
  },
};
