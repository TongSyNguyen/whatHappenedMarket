/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      kor: ['Noto Sans KR', 'sans-serif'],
      eng: ['Montserrat', 'sans-serif']
    },
    fontSize:{
      1: ['20px', '25px'],
      2: ['35px', '30px'],
      3: ['45px', '60px'],
      4: ['64px', '48px'],
      532: ['50px', '60px'],
      6: ['20px', '35px'],
      7: ['17.5px', '28.5px'],
      8910: ['16px', '30px'],
      111526: ['14px', '30px'],
      12: ['50px', '27px'],
      1319: ['171.5px', '177px'],
      14: ['18px', '35px'],
      16: ['20px', '32px'],
      17: ['30px', '25px'],
      18: ['18px', '30px'],
      20: ['16px', '35px'],
      21: ['59px', '516px'],
      22: ['25px', '60px'],
      23: ['45px', '60px'],
      24: ['30px', '50px'],
      25: ['55px', '57px'],
      27: ['14px', '24px'],
      28: ['20px', '47px'],
      29: ['18px', '20px'],
      30: ['12px', '18px'],
      31: ['14px', '29px'],
    },
    backgroundImage:{
      'intro': "url('img/introduction-bg.png')",
    },
    
  },
  plugins: [],
}
