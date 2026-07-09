import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#050505",
        surface: "#0D0D0D",
        surface2: "#141414",
        border: "#1F1F1F",
        neon: {
          DEFAULT: "#00FF88",
          dim: "#00CC6E",
          glow: "#00FF8833",
        },
        muted: "#8A8A8A",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-space-grotesk)", "sans-serif"],
        manrope: ["var(--font-manrope)", "sans-serif"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
        "radial-glow":
          "radial-gradient(circle at 50% 50%, #00FF8822 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "48px 48px",
      },
      boxShadow: {
        neon: "0 0 40px -5px #00FF8855",
        "neon-sm": "0 0 20px -5px #00FF8866",
        card: "0 20px 60px -20px rgba(0,0,0,0.6)",
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
