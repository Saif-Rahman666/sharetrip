/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        aliceblue: {
          "100": "#e8f3ff",
          "200": "#ebf0f5",
        },
        white: "#fff",
        whitesmoke: "#f5f7fa",
        "dark-700": "#5a6573",
        darkslategray: "#1a2b3d",
        "neutral-800-3429": "#3d4957",
        gainsboro: "#d8e1eb",
        "neutral-600-5515": "#77818c",
        antiquewhite: "#ffeedb",
        bisque: "#ffe1c2",
        darkorange: "#f27d00",
        "blue-500": "#1882ff",
        "dark-500": "#9ba6b2",
      },
      spacing: {},
      fontFamily: {
        "text-p4-13-18-475": "Murecho",
        mixed: "Mixed",
      },
      borderRadius: {
        "12xs": "1px",
        lg: "18px",
        xl: "20px",
      },
    },
    fontSize: {
      smi: "13px",
      xs: "12px",
      sm: "14px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
