module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['PT Sans', 'Arial', 'Verdana', 'Helvetica', 'sans-serif'],
      arial: ['Arial'],
      roboto: ['Roboto', 'sans-serif'],
      serif: ['Lora', 'serif'],
      system: ['Georgia', 'Times New Roman', 'Times', 'serif'],
    },
    screens: {
      // => @media (min-width: 360px) { ... }
      mobileS: '360px',
      // => @media (min-width: 480px) { ... }
      mobileM: '480px',
      // => @media (min-width: 640px) { ... }
      mobileL: '640px',
      // => @media (min-width: 768px) { ... }
      tablet: '768px',
      // => @media (min-width: 960px) { ... }
      laptop: '960px',
      // => @media (min-width: 1024px) { ... }
      laptopM: '1024px',
      // => @media (min-width: 1280px) { ... }
      laptopL: '1280px',
      // => @media (min-width: 1440px) { ... }
      desktopL: '1440px',
      // => @media (min-width: 1920px) { ... }
      desktopFullHD: '1920px',
    },
    maxWidth: {
      xs: '20rem', // 320px
      sm: '30rem', // 480px
      md: '44.5rem', // 712px
      lg: '50rem', // 800px
      xl: '60rem', // 960px
      '2xl': '70rem', // 1120px
      '3xl': '80rem', // 1280px
      '4xl': '90rem', // 1440px
      '5xl': '100rem', // 1600px
    },
    fontSize: {
      xxs: '0.625rem', // 10px
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem', // 48px
      '6xl': '4rem', // 64px
    },
    extend: {
      fontFamily: {
        inter: ['Inter, sans-serif'],
      },
      colors: {
        main: {
          primary: '#61C7B5',
          darker: '#3E8CB9',
          lighter: '#87CDE9',
          subtle: '#D6EDF6',
        },
        error: {
          1: '#ED2323',
          2: '#D12B2B',
          3: '#FF5C5C',
          4: '#FF8080',
        },
        warning: {
          1: '#FACC14',
          2: '#E5B800',
          3: '#FDDD48',
          4: '#FDED72',
        },
        info: {
          1: '#3868B0',
          2: '#2C528B',
          3: '#5B8AD0',
          4: '#9DBFF9',
        },
        success: {
          1: '#06C270',
          2: '#05A660',
          3: '#39D98A',
          4: '#57EBA1',
        },
        light: {
          1: '#DDE5E9',
          2: '#EBEBF0',
          3: '#F2F2F5',
          4: '#FAFAFC',
        },
        // font color
        dark: {
          1: '#3A3A3C',
          2: '#6B7588',
          3: '#8F90A6',
          4: '#C7C9D9',
        },
      },
      width: {
        sidebarDashboard: '5.25rem', // 84px
      },
    },
  },
  variants: {
    textColor: ['hover', 'group-hover'],
  },
  plugins: [],
}
