import type { Config } from "tailwindcss";

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
      'primary': '#52FFC2',
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
    fontWeight: {
      normal: '400',
      bold: '700',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "section": '100vh',
        "header": '6vh',
        'nav': '268px'
      },
      padding: {
        "content": '6vh 0px 0px 0px',
        "main": '0px 0px 0px 180px'
      },
      margin: {
        "content": '0px 0px 0px 180px',
        "nav": '-9vh 0px 0px 0px'
      }
    },
  },
  plugins: [],
};
export default config;
