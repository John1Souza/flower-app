import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#00AFEF",
          500: "#03698E",
          600: "#002937",
        },
        green: {
          400: "#A8CF45",
          500: "#7F9C37",
        },
        blueGreen: {
          400: "#5AC094",
          500: "#3F8365",
        },
        primary: "#00141B",
        secondary: "#00151D",
        accent: "#B6B6B6",
        neutral: "#F5F2F0",
        background: "#F3F4F6",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
