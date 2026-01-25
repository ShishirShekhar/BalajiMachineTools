/**
 * Tailwind design tokens and primitives
 * - Brand palette
 * - Spacing scale tweaks
 * - Shadows / radii
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1d4ed8", // blue-700
          primaryLight: "#2563eb", // blue-600
          primaryDark: "#1e3a8a", // blue-900
          accent: "#fbbf24", // amber-400
          accentDark: "#f59e0b", // amber-500
          ink: "#0f172a", // slate-900
          muted: "#475569", // slate-600
          surface: "#0b1224",
        },
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(15, 23, 42, 0.15)",
        soft: "0 8px 16px -10px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
      },
      fontFamily: {
        display: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        body: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      maxWidth: {
        content: "72rem",
      },
    },
  },
  plugins: [],
};
