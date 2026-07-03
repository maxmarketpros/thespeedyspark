// TypeScript mirror of CSS design tokens for use in JS contexts
// The source of truth is globals.css — keep these in sync when rebranding

export const themeTokens = {
  primary: {
    50: "#f0f5fe",
    100: "#dde9fc",
    200: "#c2d7f9",
    300: "#97bcf4",
    400: "#6598ea",
    500: "#3f78dc",
    600: "#3268cb",
    700: "#2a54a8",
    800: "#274689",
    900: "#243c6f",
  },
  secondary: {
    50: "#f0faff",
    100: "#e0f5fe",
    200: "#b9eafd",
    300: "#7ddafc",
    400: "#63cffb",
    500: "#38b5f0",
    600: "#2094d6",
  },
  accent: {
    50: "#fdf4ff",
    100: "#fae5ff",
    200: "#f5cbfe",
    300: "#efa5fb",
    400: "#e070f6",
    500: "#c146ef",
    600: "#a527d3",
    700: "#8a1daf",
  },
  star: "#fbbc04",
  foreground: "#171a26",
  muted: "#6b7280",
  border: "#e5e7eb",
  surface: "#f8fafc",
  background: "#ffffff",
} as const;
