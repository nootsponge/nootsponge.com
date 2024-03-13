/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: [
    "bg-discord",
    "bg-telegram",
    "bg-twitch",
    "bg-mastodon",
    "bg-steam",
    "bg-black",
  ],
  theme: {
    fontFamily: {
      mono: ['"Monaspace Neon"', ...defaultTheme.fontFamily.mono],
    },
    extend: {
      colors: {
        discord: "#5865F2",
        telegram: "#3FAEE8",
        twitch: "#9146FF",
        mastodon: "#6364FF",
        steam: "#171a21",
        gold: "#e7da48",
      },
      backgroundImage: {
        "circle-gradient":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
