module.exports = {
  mode: 'jit',
  purge: [
    './templates/**/*.{html,twig}'
  ],
  theme: {
    container: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
      },
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '2rem',
        xl: '2rem',
        '2xl': '2rem',
      },
    },
    extend: {
      spacing: {
        '500': '50rem',
        '400': '40rem',
        '300': '30rem',
        '250': '25rem',
        '240': '24rem',
        '230': '23rem',
        '220': '22rem',
        '210': '21rem',
        '200': '20rem',
        '190': '19rem',
        '180': '18rem',
        '170': '17rem',
        '160': '16rem',
        '150': '15rem',
        '140': '14rem',
        '130': '13rem',
        '120': '12rem',
        '110': '11rem',
        '100': '10rem',
        '90': '9rem',
        '80': '8rem',
        '70': '7rem',
        '60': '6rem',
        '50': '5rem',
        '40': '4rem',
        '30': '3rem',
        '25': '2.5rem',
        '20': '2rem',
        '15': '1.5rem',
        '10': '1rem',
        '9': '0.9rem',
        '8': '0.8rem',
        '7': '0.7rem',
        '6': '0.6rem',
        '5': '0.5rem',
        '4': '0.4rem',
        '3': '0.3rem',
        '2': '0.2rem',
        '1': '0.1rem',
        '0': '0rem'
      },
      fontFamily: {
        'serif': "Bodoni Moda, serif",
        'sans': "Poppins, sans-serif",
      },
      fontSize: {
        '8': ['.8rem', { lineHeight: '2.2rem' }],
        '9': ['.9rem', { lineHeight: '2.4rem' }],
        '10': ['1rem', { lineHeight: '2.4rem' }],
        '12': ['1.2rem', { lineHeight: '2.6rem' }],
        '16': ['1.6rem', { lineHeight: '2.8rem' }],
        '18': ['1.8rem', { lineHeight: '3rem' }],
        '20': ['2rem', { lineHeight: '3.5rem' }],
        '22': ['2.2rem', { lineHeight: '3.8rem' }],
        '25': ['2.5rem', { lineHeight: '4.5rem' }],
        '30': ['3rem', { lineHeight: '4.8rem' }],
        '50': ['3.125rem', { lineHeight: '5rem' }],
        '80': ['8rem', { lineHeight: '5rem' }],

      },
      colors: {
        'white': '#FFF',
        'black': '#1E1E1E',
        'black-transparent': 'rgba(0, 0, 0, 0.5)',
        'grey': '#EBE9E7',
        'pink': '#FBF6F6',
        'pink-500': '#EBC3C3',

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: true,
  }
}