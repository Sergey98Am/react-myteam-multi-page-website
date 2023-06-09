/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    fontSize: {
      xs: ["0.813rem" /* 13px */, "1.125rem" /* 18px */],
      sm: [
        "0.938rem" /* 15px */,
        { lineHeight: "1.563rem" /* 25px */, fontWeight: "600" },
      ],
      base: ["16px", "24px"],
      lg: [
        "1.125rem" /* 18px */,
        { lineHeight: "1.75rem" /* 28px */, fontWeight: "600" },
      ],
      xl: [
        "3rem" /* 48px */,
        { lineHeight: "3rem" /* 48px */, fontWeight: "700" },
      ],
      "2xl": [
        "4rem" /* 64px */,
        { lineHeight: "3.5rem" /* 56px */, fontWeight: "700" },
      ],
      "3xl": [
        "6.25rem" /* 100px */,
        { lineHeight: "6.25rem" /* 100px */, fontWeight: "700" },
      ],
    },
    extend: {
      fontFamily: {
        sans: "Livvic",
      },
      colors: {
        primary: {
          "midnight-green": "#014E56",
          "light-coral": "#F67E7E",
          white: "#FFFFFF",
        },
        secondary: {
          "rapture-blue": "#79C8C7",
          "police-blue": "#2C6269",
          "deep-jungle-green": "#004047",
          "sacramento-state-green": "#012F34",
          "dark-green": "#002529",
        },
      },
    },
  },
  plugins: [],
};
