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
      sm: "700px",
      lg: "1114px",
      xl: "1435px",
    },
    extend: {
      colors: {
        teal: "#5AB7B2",
        blue: "#007298",
        lightBlue: "#C6D3E3",
        gray: "#E9EAEE",
        textGray: "#545454",
      },
      backgroundImage: {
        "hero-img": "url('/images/hero-bg.jpg')",
        "new-hero":
          "linear-gradient(180deg, rgba(255,255,255,.20) 0%, rgba(255,255,255,.8) 100%), url('/images/hero-bg.webp')",
      },
    },
  },
  plugins: [],
};
