import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export const useLogo = () => {
  const { theme } = useTheme()
  const [logo, setLogo] = useState("/static/logo-dark.png")

  useEffect(() => {
    if (!theme || theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "light"
        : "dark"
      setLogo(`/static/logo-${systemTheme}.png`)
      return
    }
    setLogo(`/static/logo-${theme === "dark" ? "light" : "dark"}.png`)
  }, [theme])

  return logo
}
