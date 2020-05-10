// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        date: "#9c9c9c",
        parag: "#222",
        codeblock: "#f6f6f6",
        divider: "#dedede",
      },
      spacing: {
        px3: "3px",
        px5: "5px",
        px8: "8px",
        px10: "10px",
        px12: "12px",
        px15: "15px",
        px20: "20px",
        px25: "25px",
        px30: "30px",
        px40: "40px",
        px50: "50px",
        px60: "60px",
        px80: "80px",
        px150: "150px",
        px100: "100px",
      },
      width: {
        "21/25": "84%",
      },
      lineHeight: {
        navul: "1em",
        block: "1.4em",
        title: "1.5em",
        info: "1.6em",
        outer: "1.7em",
        navli: "1.8em",
        para: "1.9em",
      },
      fontFamily: {
        default: ["cardo", "georgia", "serif"],
        helvetica: [
          '"helvetica neue"',
          "helvetica",
          "arial",
          "geneva",
          "sans-serif",
        ],
      },
      fontSize: {
        nav: "0.65rem",
        block: "0.7rem",
        older: "0.8rem",
        hook: "0.85rem",
        strong: "0.95rem",
        head3: "1.1rem",
        index: "1.2rem",
        title: "4.5rem",
        xtitle: "5.75rem",
      },
      margin: {
        "3/50": "6%",
        "2/25": "8%",
      },
      maxWidth: {
        px300: "300px",
        px550: "550px",
        px680: "680px",
        px1500: "1500px",
        px1580: "1580px",
        xxl: "1920px",
      },
      minWidth: {
        px100: "100px",
      },
      letterSpacing: {
        normal: "normal",
        xtight: "-6px",
        stight: "-1px",
        sstirhg: "-0.5px",
      },
      fontWeight: {
        bold: "bold",
      },
      borderColor: {
        divider: "#1a1a1a",
      },
      flexShrink: {
        "3": 3,
      },
      inset: {
        px50: "50px",
      },
    },
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
