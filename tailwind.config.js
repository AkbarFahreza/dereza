/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#CE93FF",
        mainColor: "#CE93FF",
        ghostColor: "#373A4C",
        secondaryColor: "#A35DDE",
      },
      fontFamily: {
        bebas: ["Bebas Neue", "cursive"],
        inter: ["Inter", "sans-serif"], // Default font
        kaushan: ["Kaushan Script", "cursive"], // Kaushan Script
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
