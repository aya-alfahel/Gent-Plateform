/**
 * Gent brand palette — aligned with public pages (home, auth, navigation).
 * Light: sage greens. Dark: slate + cyan accents.
 */
export const dashboardColors = {
  light: {
    canvas: "#a8c88a",
    canvasGradient:
      "linear-gradient(to bottom right, #bed19e, #a8c88a, #9bc07a)",
    surface: "rgba(255, 255, 255, 0.88)",
    elevated: "rgba(255, 255, 255, 0.95)",
    border: "rgba(90, 120, 99, 0.35)",
    borderMuted: "rgba(90, 120, 99, 0.2)",
    text: "#2d3e2d",
    textSecondary: "rgba(45, 62, 45, 0.85)",
    textMuted: "rgba(45, 62, 45, 0.6)",
    accent: "#5A7863",
    accentHover: "#4a6853",
    accentMuted: "rgba(90, 120, 99, 0.12)",
    accentGradient: "linear-gradient(to right, #5A7863, #4a6853)",
    success: "#5A7863",
    successBg: "#5A7863",
    successHover: "#4a6853",
    successText: "#ffffff",
    sidebarActive: "rgba(255, 255, 255, 0.55)",
    sidebarHover: "rgba(255, 255, 255, 0.35)",
    inputBg: "rgba(255, 255, 255, 0.65)",
    topBarBg: "rgba(255, 255, 255, 0.45)",
    avatarGradient: "linear-gradient(135deg, #5A7863 0%, #4a6853 100%)",
    shadow: "0 8px 24px rgba(45, 62, 45, 0.12)",
    iconAccent: "#5A7863",
  },
  dark: {
    canvas: "#151b28",
    canvasGradient:
      "linear-gradient(to bottom right, #0f1419, #1a1f2e, #151b28)",
    surface: "rgba(26, 31, 46, 0.92)",
    elevated: "rgba(15, 20, 25, 0.95)",
    border: "rgba(255, 255, 255, 0.12)",
    borderMuted: "rgba(255, 255, 255, 0.08)",
    text: "#ffffff",
    textSecondary: "rgba(255, 255, 255, 0.85)",
    textMuted: "rgba(255, 255, 255, 0.55)",
    accent: "#7dd3fc",
    accentHover: "#06b6d4",
    accentMuted: "rgba(125, 211, 252, 0.15)",
    accentGradient: "linear-gradient(to right, #7dd3fc, #06b6d4)",
    success: "#7dd3fc",
    successBg: "#7dd3fc",
    successHover: "#06b6d4",
    successText: "#0f1419",
    sidebarActive: "rgba(255, 255, 255, 0.1)",
    sidebarHover: "rgba(255, 255, 255, 0.06)",
    inputBg: "rgba(255, 255, 255, 0.08)",
    topBarBg: "rgba(26, 31, 46, 0.65)",
    avatarGradient: "linear-gradient(135deg, #7dd3fc 0%, #06b6d4 100%)",
    shadow: "0 8px 24px rgba(0, 0, 0, 0.35)",
    iconAccent: "#7dd3fc",
  },
} as const;

export function getDashboardTheme(isDark: boolean) {
  return isDark ? dashboardColors.dark : dashboardColors.light;
}
