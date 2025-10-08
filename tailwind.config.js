/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      ninHeight: {
        "screen-minus-footer": "calc(100vh - 100px)",
      },
      screens: {
        short: { raw: "(max-height: 700px)" },
        tall: { raw: "(min-height: 800px)" },
      },
    },
  },
  plugins: [],
};
