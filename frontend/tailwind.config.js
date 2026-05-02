/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          // DEFAULT: "(var(--primary))",
          DEFAULT: "#0052FF",
          hover: "#0046E0",
          dark: "#003BC7",
        },

        // Background Colors
        bg: {
          primary: "#000000",
          secondary: "#0A0B0D",
          tertiary: "#1E1F25",
          card: "#1C1D22",
          hover: "#2C2D33",
        },

        // Text Colors
        text: {
          primary: "#FFFFFF",
          secondary: "#9FA4AD",
          tertiary: "#6B7280",
          disabled: "#4B5563",
        },

        // Semantic Colors
        success: {
          DEFAULT: "#05B169",
          light: "#16C784",
          bg: "rgba(5, 177, 105, 0.1)",
        },
        error: {
          DEFAULT: "#E03D3D",
          light: "#EA3943",
          bg: "rgba(224, 61, 61, 0.1)",
        },
        warning: "#F5A623",

        // Border Colors
        border: {
          primary: "#2C2D33",
          secondary: "#383A42",
          focus: "#0052FF",
        },

        // Chart Colors
        chart: {
          green: "#16C784",
          red: "#EA3943",
        },
      },

      borderRadius: {
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
      },

      boxShadow: {
        sm: "0 1px 2px rgba(0, 0, 0, 0.3)",
        md: "0 4px 6px rgba(0, 0, 0, 0.4)",
        lg: "0 10px 15px rgba(0, 0, 0, 0.5)",
      },

      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
      },

      fontFamily: {
        display: "var(--font-display)",
        mono: "var(--font-mono)",
        sans: "var(--font-sans)",
        text: "var(--font-text)",
      },
    },
  },
  plugins: [],
};
