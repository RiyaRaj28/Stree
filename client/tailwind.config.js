/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        neumorphic: "7px 7px 14px #a3a3a3, -7px -7px 14px #ffffff",
      },
    },
  },
  plugins: [],
}

