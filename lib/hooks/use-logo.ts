import { useTheme } from "next-themes"

export const useLogo = () => {
  const { theme } = useTheme()

  if (!theme || theme === "system") {
    if (typeof window !== "undefined") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "light"
        : "dark"
      return `/static/logo-${systemTheme}.png`
    }
    return "/static/logo-dark.png"
  }

  return `/static/logo-${theme === "dark" ? "light" : "dark"}.png`
}
