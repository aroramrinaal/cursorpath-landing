import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'andika': ['Andika', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        background: 'hsl(210, 100%, 6%)',
        foreground: 'hsl(180, 100%, 90%)',
        primary: 'hsl(200, 100%, 28%)',
        'primary-foreground': 'hsl(180, 100%, 90%)',
        secondary: 'hsl(203, 23%, 30%)',
        'secondary-foreground': 'hsl(180, 100%, 90%)',
        accent: 'hsl(198, 70%, 50%)',
        'accent-foreground': 'hsl(185, 10%, 13%)',
        muted: 'hsl(200, 50%, 30%)',
        'muted-foreground': 'hsl(180, 100%, 90%)',
        card: 'hsl(210, 100%, 12%)',
        'card-foreground': 'hsl(180, 100%, 90%)',
      },
    },
  },
  plugins: [],
};
export default config;