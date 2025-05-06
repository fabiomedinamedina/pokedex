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
      boxShadow: {
        v: "0 5px 0 0 rgba(0, 0, 0, 0.3)",
        'v-extend': "0 8px 0 0 rgba(0, 0, 0, 0.3)"
      },
      colors: {
        normal: {
          DEFAULT: '#DDDDBC',
          dark: '#B2B291',
        },
        fire: {
          DEFAULT: '#FFB99A',
          dark: '#E2997B',
        },
        water: {
          DEFAULT: '#A4CCFF',
          dark: '#7BA9DD',
        },
        electric: {
          DEFAULT: '#FFEB99',
          dark: '#D6C677',
        },
        grass: {
          DEFAULT: '#BCE3A5',
          dark: '#98BC81',
        },
        ice: {
          DEFAULT: '#BDEFED',
          dark: '#96C5C3',
        },
        fighting: {
          DEFAULT: '#FFACA8',
          dark: '#D88A86',
        },
        poison: {
          DEFAULT: '#D9A8D8',
          dark: '#B686B5',
        },
        ground: {
          DEFAULT: '#F2DBA4',
          dark: '#CEB87E',
        },
        flying: {
          DEFAULT: '#D1C4FF',
          dark: '#ADA0D6',
        },
        psychic: {
          DEFAULT: '#FFBDD3',
          dark: '#D69BAF',
        },
        bug: {
          DEFAULT: '#DDEBA5',
          dark: '#B7C383',
        },
        rock: {
          DEFAULT: '#E8D8A1',
          dark: '#C4B682',
        },
        ghost: {
          DEFAULT: '#C1B1DB',
          dark: '#9D8FB7',
        },
        dragon: {
          DEFAULT: '#BEB0FF',
          dark: '#9B8ED6',
        },
        dark: {
          DEFAULT: '#BBA99D',
          dark: '#9A8B80',
        },
        steel: {
          DEFAULT: '#DADAE6',
          dark: '#B7B7C0',
        },
        fairy: {
          DEFAULT: '#F4C2D7',
          dark: '#CEA0B4',
        },
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
