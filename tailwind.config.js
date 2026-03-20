/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "1xl": "1360px",
        "1lg": "950px",
        "2lg": "1080px",
        "3lg": "1140px",
        "1md": "880px",
        "1sm": "720px",
        "2sm": "565px",
        "3sm": "360px",
        "4sm": "520px",
      },
      fontFamily: {
        serif: ['"DM Serif Display"', "Georgia", "serif"],
        sans: ['"Plus Jakarta Sans"', "sans-serif"],
      },
      colors: {
        brand: {
          bg: "#FAFAF8",
          "bg-alt": "#F2F0EB",
          dark: "#0F172A",
          text: "#111111",
          secondary: "#555555",
          muted: "#888888",
          accent: "#E8630A",
          "accent-hover": "#D45508",
          border: "#E5E2DB",
        },
      },
    },
  },
  plugins: [],
};
