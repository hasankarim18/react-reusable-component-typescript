/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(30deg, #14b8a6, #a21caf)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
