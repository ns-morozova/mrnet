import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          flame: "#FF4C00",
          aqua: "#00E4F0",
          lilac: "#B38BCE",
        },
        grey: "#B0B0B0",
        surface: "#0A0A0A",
        stroke: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-grato-grotesk)", "Grato Grotesk", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem", // 1440px
      },
    },
  },
};

export default config;
