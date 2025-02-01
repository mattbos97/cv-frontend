import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          accent: {
            1: '#F9FAFC',
            2: '#F2F7FC'
          },
          gray: {
            1: '#F9F9F9',
            2: '#F6F6F6'
          }
        },
        interactive: {
          accent: {
            1: '#E7F0FA',
            2: '#D9E9FD',
            3: '#C8DFFB'
          },
          gray: {
            1: '#EDEDED',
            2: '#E5E5E5',
            3: '#DDD'
          }
        },
        border: {
          accent: {
            1: '#B4D2F5',
            2: '#9AC1ED',
            3: '#75AAE5'
          },
          gray: {
            1: '#D5D5D5',
            2: '#CACACA',
            3: '#B7B7B7'
          }
        },
        solid: {
          accent: {
            1: '#0D74CE',
            2: '#0066BF'
          },
          gray: {
            1: '#8A8A8A',
            2: '#7F7F7F'
          }
        },
        text: {
          accent: {
            1: '#0671CB',
            2: '#0D355C'
          },
          gray: {
            1: '#616161',
            2: '#202020'
          }
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
