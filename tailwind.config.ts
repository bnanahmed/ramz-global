import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8500A",
        "primary-dark": "#C44008",
        "primary-light": "#FF6B2B",
        dark: "#0A0A0A",
        "dark-2": "#111111",
        "dark-3": "#1A1A1A",
        "dark-4": "#222222",
      },
      fontFamily: {
        arabic: ["Cairo", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(135deg, #E8500A 0%, #C44008 100%)",
        "gradient-dark":
          "linear-gradient(135deg, #0A0A0A 0%, #111111 50%, #0D0D0D 100%)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        "loading-bar": "loadingBar 1.5s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        shimmer: {
          from: { left: "-100%" },
          to: { left: "200%" },
        },
        loadingBar: {
          "0%": { width: "0%", marginLeft: "0" },
          "50%": { width: "70%", marginLeft: "0" },
          "100%": { width: "0%", marginLeft: "100%" },
        },
      },
      screens: {
        xs: "475px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        orange: "0 0 30px rgba(232, 80, 10, 0.35)",
        "orange-intense":
          "0 0 60px rgba(232, 80, 10, 0.6), 0 0 120px rgba(232, 80, 10, 0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
