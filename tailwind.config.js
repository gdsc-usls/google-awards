/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#EEB63F",
        },
        secondary: {
          100: "#D9D9D9",
          200: "#4D4D4D",
          300: "#121212",
          400: "#040404",
        },
      },
      fontFamily: {
        "google-reg": ["Google Sans Regular", "sans-serif"],
        "google-mid": ["Google Sans Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};
