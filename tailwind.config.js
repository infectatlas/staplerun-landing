/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#059669", // emerald-600
          accent: "#14b8a6"   // teal-500
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(16, 185, 129, 0.15)"
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at 50% 0%, rgba(16,185,129,0.25), transparent 60%)"
      }
    }
  },
  plugins: []
};