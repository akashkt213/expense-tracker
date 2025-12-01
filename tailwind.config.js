/** @type {import('tailwindcss').Config} */

const lightTheme = {
  background: "#0f0f0f",
  text: "#1a1a1a",
  card: "#f4f4f4",
  primary: "#2563eb",
};

const darkTheme = {
  background: "#0f0f0f",
  text: "#fafafa",
  card: "#1a1a1a",
  primary: "#3b82f6",
};

module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        light: lightTheme,
        dark: darkTheme,
      },
    },
  },
  plugins: [],
}