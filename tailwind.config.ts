import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Josefin Slab", "serif"],
        sans: ["Mulish", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'below-md': {'max': '786px'}, 
        'below-lg': {'max': '1024px'}, 
        'below-xl': {'max': '1280px'}, 
        'exact-1280': '1280px', // Custom breakpoint for exactly 1024px
      },

    },
  },
  variants: {
    extend: {
      scale: ['hover'],
    },
  },
  plugins: [],
} satisfies Config;
