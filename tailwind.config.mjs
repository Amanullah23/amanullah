/** @type {import ('tailwindcss').Config}*/
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: "#fcf4ff",
        darkHover: "#2a004a",
        darkTheme: "#11001F",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
        boko:["var(--font-bokoer)"]
      },
      boxShadow: {
        black: "0 4px 6px rgba(0,0,0,0.5)",
        white: "0 4px 6px rgba(255,255,255,0.5)",
      },
    },
  },
  darkMode: 'selector',
  plugins: [],
};
