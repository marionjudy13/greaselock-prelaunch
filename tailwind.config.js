/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-opensans)"],
    },
    screens: {
      sm: "750px",
      lg: "1150px",
    },
    extend: {
      colors: {
        blue: "#007298",
        lightBlue: "#C6D3E3",
      },
      backgroundImage: {
        "hero-img": "url('/images/hero-bg-gen1.webp')",
      },
    },
  },
  plugins: [],
};
