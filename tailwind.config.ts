import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shopping-cart/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pokemons/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow:{
        v: "0 5px 0 0 rgba(0, 0, 0, 0.3)",
        'v-extend': "0 8px 0 0 rgba(0, 0, 0, 0.3)"
      },
      colors: {
        bluefm: "#0A2E36",
        greefm: "#5FF196",
        yellow: {
          normal: "#F6C657",
          dark: "#DDB14B",
        },
        red: {
          light: "#FF5D57",
          normal: "#EF3E38",
          dark: "#B00B00",
        }
      }
    }
  },
  plugins: [],
};
export default config;
