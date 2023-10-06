/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          100: '#131418',
          105: '#26242b',
          200: '#1E1E22',
          300: '#181920',
          400: '#12151A',
          405: 'rgb(18, 21, 26,.5)',
          500: '#20222C',
          600: 'rgba(0,0,0,.5)',
          700: 'rgba(0,0,0,.9)',
          800: 'rgba(19, 20, 24, .8)',
          900: 'rgba(19, 20, 24, .4)',
        },
        brand: {
          green: {
            primary: '#009254',
            hover: '#33A467',
            focused: '#009254',
            pressed: '#006F37',
            shd: '#CAEAD499',
            ttr: '#F4FBF6',
            shade0: '#000000',
            shade10: '#052011',
            shade20: '#003A1B',
            shade40: '#005427',
            shade50: '#00894C',
            shade70: '#64BD87',
            shade80: '#96D4AB',
            shade90: '#CAEAD4',
            shade95: '#E6F5EA',
          },
          red: {
            primary: '#FF2E2E',
            hover: '#FF5C5C',
            focused: '#FF2E2E',
            pressed: '#FF2E2E',
          },
          success: {
            primary: '#06C270',
            hover: '#39D98A',
            focused: '#06C270',
            pressed: '#06C270',
          },
          disabled: '#E1E3E2',
          disabled2: '#C4C7C6',
        },
        red: {
          100: 'rgb(255, 0, 0, .5)',
          105: '#BE123C1A',
          200: '#ff0000',
          205: '#BE123C',
          300: '#cc0000',
          305: '#ff4741',
          306: '#BE123C',
          400: '#990000',
          500: '#660000',
          600: '#330000',
          700: '#000000',
        },
        green: {
          900: '#000000',
          850: '#052011',
          800: '#003A1B',
          750: '#005427',
          700: '#006F37',
          600: '#009254',
          500: '#33A467',
          400: '#009254',
          300: '#00894C',
          200: '#64BD87',
          100: '#96D4AB',
          50: '#CAEAD4',
          30: '#E6F5EA',
          20: '#CAEAD499',
          10: '#F4FBF6',
        },
        white: {
          100: '#fff',
          200: '#f2f2f2',
          300: '#e6e6e6',
          400: '#A8ACAB',
          500: '#cccccc',
          600: '#bfbfbf',
          700: '#b3b3b3',
          600: 'rgba(255,255,255,0.08)',
        },
        slate: {
          50: '#D0D5DD',
          100: '#ccd6f6',
          200: '#8892b0',
          300: '#344054',
        },
        blue: {
          100: '#258dfd',
          105: '#4055e4',
          200: '#4898f0',
          300: '#3F7EEE',
          301: '#59CBE8',
          302: '#102241',
          400: '#0655E2',
          500: '#513cef',
          600: '#5452d379',
          700: '#0142e2',
          705: 'rgba(1, 65, 226, 0.4)',
          800: '#08173f',
        },
        yellow: {
          100: '#fcec66',
          200: '#f9d936',
          300: '#f5c502',
          400: '#f1b200',
          500: '#eeda00',
          600: '#e8c400',
        },
        orange: {
          100: '#ffb400',
          200: '#ff9d00',
          300: '#ff8500',
          400: '#ff6e00',
          500: '#ff5a00',
          600: '#ff4500',
        },
        purple: {
          100: '#a38edb',
          200: '#8f7ecf',
          300: '#7a6fc3',
          400: '#6a60b7',
          500: '#59519c',
          600: '#4b437e',
        },
        pink: {
          100: '#ffa3c9',
          200: '#ff8fb1',
          300: '#ff7799',
          400: '#ff5f81',
          500: '#fc4468',
          600: '#e82a4f',
        },
        gray: {
          100: '#a0a6c9',
          200: '#3f4550',
          300: "#D0D5DD",
          500: "#667085",
          700: "#344054",
        },
      },
      fontFamily: {
        // variable and include fallback fonts from tailwind default theme
        ppReg: ['var(--font-ppReg)'],
        ppB: ['var(--font-ppB)'],
        ppEB: ['var(--font-ppEB)'],
        manropeL: ['var(--font-manropeL)'],
        manropeEL: ['var(--font-manropeEL)'],
        manropeB: ['var(--font-manropeB)'],
        manropeEB: ['var(--font-manropeEB)'],
      },
    }
  },
  plugins: [],
};
