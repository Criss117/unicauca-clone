/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#000066",
        secondary: "#e0e0ff",
        text: {
          primary: "#07184a",
        },
        bg: {
          primary: "#07184a",
          secondary: "#eeebeb",
        },
        accent: {
          primary: "#e0e0ff",
          secondary: "#5056ac",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
