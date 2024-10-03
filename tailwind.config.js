/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*/** {html,js,ts,tsx}",
    "./src/component/*/** js",
    "./src/img/*/** {svg,png,jpg}",
    "./public/index.html",
    "./public/asset/* ttf",
  ],
  theme: {
    extend: {
      animation: {
        bgshift: "bgshift 200s linear infinite",
        starshine: "starshine 10s linear infinite",
        starshine_rev: "starshine_rev 8s linear infinite",
        fadeIn: "fadeIn 5s linear",
        fadeOut: "fadeOut 2s linear",
      },
      
      backgroundImage: (theme) => ({
        "gradient-radial-blue": "radial-gradient(#0000ff, #00004d)",
        "gradient-conic-blue": "conic-gradient(#0000ff, #00004d, #0000e6, #4d4dff)",
        starfield: 'url("./img/starfield/starfield.png")',
        "squatch-blackhole": 'url("./img/squatch/sasquatch-blackhole.png")',
        "blackhole": 'url("./img/blackhole/blackhole.png")',
      }),
      colors: {},
      cursor:{ 
        pointer : 'url("./img/nav/pointer.png"), pointer', 
        eyeball: 'url("./img/nav/cursor.png"), default',
      },
      fontFamily: {
        "aquafina-script": ["aquafina-script", "cursive", "sans"],
        "TNR": ["Times New Roman", "serif"],
        "franklin-gothic": ["franklin gothic", "mono"],
        jetbrains: ["jetbrains", "mono"],
        "jetbrains-italic": ["jetbrains-italic", "italic"],
      },
      gradientColorStops: (theme) => theme("colors"),
      keyframes: {
        bgshift: {
          "0%, 100%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
        },
        fadeIn: {
          "0%" : {
            "opacity" : 0,
          },
          "75%" :{
            "opacity" : 0.75,
          },
          "100%": {
            "opacity" : 1,
          },
        },
        fadeOut:{
          "0%" : {
            "opacity" : 1,
          },
          "75%" :{
            "opacity" : 0.25,
          },
          "100%": {
            "opacity" : 0,
          },
        },
        starshine: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        starshine_rev: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
    letterSpacing: {
      tightest: "-.11em",
    },
  },
  plugins: [],
};
