module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      '2xl': {'max': '1980px'},

      'xl': {'max': '1279px'},

      'lg': {'max': '1023px'},

      'md': {'max': '767px'},

      'sm': {'max': '600px'},

      'xs': {'max': '400px'},
    },
    extend: {
      backgroundImage: {
        'subheader': "url('/src/img/Header/subheader_bg.jpg')",
      },
      colors: {
        'subheaderColor': '#BA1C91',
        'greenLink': '#25A149',
        'inputGray': '#E5E5E5',
        'lightGreen': '#8DC63F',
        'Gray': '#6C5762',
        'lightGray': '#C4C4C4',
        'red': '#E74011',
      },
    },
    container: {
      center: true,
      padding: '2rem',
    },
  },
  plugins: [],
};
