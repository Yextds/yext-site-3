module.exports = {
  mode: "jit",  
  purge: [
      './partials/**/*.hbs', 
      './pages/**/*.hbs',
      './templates/**/*.hbs',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {

      textColor: theme => theme('colors'),
    textColor: {
      primary: '#246cff',
      secondary: '#f076a9',
      white: '#fff',
      black: '#000',
      blackLight: '#242424',
    },

    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#246cff',
      'secondary': '#f076a9',
      'white': '#fff',
      'black': '#000',
      'blackLight': '#242424',
     }),

    borderColor: theme => ({
      ...theme('colors'),
      'primary': '#246cff',
      'secondary': '#f076a9',
      'white': '#fff',
      'black': '#000',
      'blackLight': '#242424',
     }),

    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '2.5rem',
      '6xl': '3rem',
      '7xl': '4rem',
      '8xl': '5rem',
    },

    fontFamily: {
      'worksans': ['Work Sans', 'sans-serif'],
    },


    borderRadius: {
      'none': '0',
     'sm': '0.125rem',
     DEFAULT: '0.25rem',
     DEFAULT: '4px',
     'md': '0.375rem',
     'lg': '0.5rem',
     'full': '9999px',
     'large': '12px',
     'custom-radius' : '72px;'
    },
      extend: {
        transitionDuration: {
         '1100': '8s',
        }
      },
    },
    variants: {
      extend: {
        backgroundImage: {
          'header-bg': "url('/images/header-bg.jpg')",
          'mission': "url('/images/mission.jpg')",
         }
      },
    },
    plugins: [],
  }
  