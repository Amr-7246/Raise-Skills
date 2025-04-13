import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hindMysuru: ["Hind Mysuru", "sans-serif"],
        orbitron: ["Orbitron", "sans-serif"],
        yujiMai: ["Yuji Mai", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        //  Custom colors for AI project
        primary: "#4f46e5",    // Indigo-ish tone
        secondary: "#10b981",  // Emerald vibe
        accent: "#f59e0b",     // Amber pop
        darkBg: "#1e293b",     // Deep slate for dark mode
        lightBg: "#f1f5f9",    // Soft slate for light mode
        // Gradient colors
        gradientStart: "#3b82f6", // Blue start
        gradientMid: "#8b5cf6",   // Purple mid
        gradientEnd: "#ec4899",   // Pink end
      },
      backgroundImage: {
        "ai-gradient": "linear-gradient(135deg, var(--tw-gradient-stops))",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwind-scrollbar-hide"),require('@tailwindcss/aspect-ratio'), require("tailwind-scrollbar")],
} satisfies Config;
