import type {Config} from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        main: "12px",
      },
      colors: {
        // primary: {
        //   100: "rgba(248,21,57,1)",
        // },
        // secondary: {
        //   100: "rgba(252,67,8,1)",
        // },
        font: {
          100: "rgba(62,50,50,1)",
          75: "rgba(62,50,50,0.75)",
          50: "rgba(62,50,50,0.5)",
        },
        gray: "#f5f5f5",
      },
      boxShadow: {
        main: "0px 0px 32px 0px rgba(0,0,0,0.07)",
      },
      width: {
        page: '1200px'
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui(
      {
        layout:{
          radius:{
            medium:'6px'
          }
        }
      }
  )],
}
export default config
