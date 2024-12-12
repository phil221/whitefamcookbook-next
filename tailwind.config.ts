import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beige: {
          100: "#fdf5e6",
          200: "#fffaf5",
        },
        primary: "#0a263d",
      },
    },
  },
  plugins: [],
};
export default config;
