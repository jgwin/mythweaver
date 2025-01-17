module.exports = {
  content: [
    "./index.html",
    "./src/App.vue",
    "./src/components/**/*.{js,vue}",
    "./src/views/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
        gilroy: ["Gilroy", "sans-serif"],
      },
      colors: {
        surface: "#171717",
        gradient:
          "linear-gradient(to right, rgba(64, 170, 241, 0.8), rgba(217, 117, 244, 0.8))",
      },
      screens: {
        "3xl": "1921px",
        // => @media (min-width: 1921px) { ... }
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
