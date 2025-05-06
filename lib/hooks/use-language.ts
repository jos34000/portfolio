"use client"

import {
  SupportedLanguage,
  setLanguageCookie,
} from "@/lib/action/cookies.action"
import { useEffect, useState } from "react"

const STORAGE_KEY = "preferred-language"

export const useLanguage = () => {
  const [language, setLanguage] = useState<SupportedLanguage>("en")

  useEffect(() => {
    const storedLanguage = localStorage.getItem(
      STORAGE_KEY
    ) as SupportedLanguage
    if (storedLanguage) {
      setLanguage(storedLanguage)
    }
  }, [])

  const updateLanguage = async (newLanguage: SupportedLanguage) => {
    localStorage.setItem(STORAGE_KEY, newLanguage)
    setLanguage(newLanguage)
    await setLanguageCookie(newLanguage)
  }

  return {
    language,
    setLanguage: updateLanguage,
  }
}
