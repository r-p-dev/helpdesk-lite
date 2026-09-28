/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#1D2433",
        line: "#DDE3EC",
        canvas: "#F3F5F9",
        signal: "#2F5BEA",
        amber: "#C77700",
        done: "#1E7F55",
      },
      fontFamily: { sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
