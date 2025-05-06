"use client"

import {
  SupportedLanguage,
  setLanguageCookie,
} from "@/lib/action/cookies.action"
import { useEffect, useState } from "react"

export const useLanguage = () => {
  const [language, setLanguage] = useState<SupportedLanguage>("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem(
      "preferred-language"
    ) as SupportedLanguage
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const updateLanguage = async (newLanguage: SupportedLanguage) => {
    localStorage.setItem("preferred-language", newLanguage)
    setLanguage(newLanguage)
    await setLanguageCookie(newLanguage)
  }

  return {
    language,
    setLanguage: updateLanguage,
  }
}
