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
        util: {
          1: "#db141c",
          2: "#ff6c08",
          3: "#ffb000",
          4: "#00aae5",
          5: "#5a00ba",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
