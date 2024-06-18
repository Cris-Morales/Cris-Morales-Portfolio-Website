import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        "section": '100vh',
        "header": '6vh'
      },
      padding: {
        "content": '6vh 0px 0px 0px',
        "main": '0px 0px 0px 180px'
      },
      margin: {
        "hero": '6vh 0px 0px 0px'
      }
    },
  },
  plugins: [],
};
export default config;
