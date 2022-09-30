/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        pretendard: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '"Apple SD Gothic Neo"',
          '"Noto Sans KR"',
          '"Malgun Gothic"',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          'sans-serif',
        ],
      },
      backgroundImage: {
        'main-bg': "url('../public/images/main_bg.svg')",
        'logo-white': "url('../public/images/logo_gasc_white.svg')",
        'logo-color-1': "url('../public/images/GASC_Logo_color_1.svg')",
        'logo-color-2': "url('../public/images/GASC_Logo_color_2.svg')",
      },
    },
  },
  plugins: [],
};
