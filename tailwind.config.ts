import type { Config } from "tailwindcss";
import Headshot from "./app/ui/hero/Headshot";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'light-text': 'FFFFFF',
      'dark-text': '#01060F',
      'background': '#031026',
      'primary': '#32FFB7',
      'accent': '#5DD0FD',
      'form': '#D2E9EF'
    },
    fontSize: {
      sm: '0.750rem',
      base: '1rem',
      xl: '1.333rem',
      '2xl': '1.777rem',
      '3xl': '2.369rem',
      '4xl': '3.158rem',
      '5xl': '4.210rem'
    },
    fontFamily: {
      heading: 'Nunito',
      body: 'Nunito',
    },

    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "background-glow": "radial-gradient( at bottom right, #32FFB7 -50%, #031026 85%), radial-gradient( at bottom right, #32FFB7 -50%, #031026 100%)"
      },
      height: {
        "hero": '105vh',
        "header": '8vh',
        'nav': '268px',
        'section': '100vh',
        'section2': '1080px',
        'footer': '15vh',
        'contact': '75vh'
      },
      minHeight: {
        'footer': '21vh',
        'contact': '70vh'
      },
      padding: {
        "main": '0px 0px 0px 180px',
        'hero': '8vh 2rem 2rem 2rem'
      },
      margin: {
        "content": '0px 0px 0px 180px',
      },
      minWidth: {
        'headshot': '454px',
        'carousel': '350px'
      },
      maxWidth: {
        'carousel': '515px'
      },
      width: {
        'about-content': '850px'
      }
    },
  },
  plugins: [],
};
export default config;
