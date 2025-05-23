/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      "4xs": "350px",
      "3xs": "400px",
      "2xs": "450px",
      xs: "500px",
      sm: "640px",
      md: "768px",
      bw: "900px",
      lg: "1024px",
      xl: "1280px",
      1300: "1300px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        napzerRounded: ["var(--font-napzer-rounded)"],
        leagueSpartan: ["var(--font-league-spartan)"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
