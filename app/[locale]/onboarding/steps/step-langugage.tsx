"use client"
import { FloatingElement } from "@/components/onboarding/floating-element"
import { SelectionOption } from "@/components/onboarding/selection-option"
import {
  EnglishIcon,
  FrenchIcon,
  SpanishIcon,
} from "@/components/shadcn/language-icons"
import { usePathname, useRouter } from "@/i18n/navigation"
import { SupportedLanguage } from "@/lib/actions/cookies.action"
import Cookies from "js-cookie"

import { useTranslations } from "next-intl"
import { useEffect, useState } from "react"

const StepLanguage = () => {
  const router = useRouter()
  const pathname = usePathname()
  const [language, setLanguage] = useState<SupportedLanguage>("en")
  const t = useTranslations("Onboarding")
  const tLanguage = useTranslations("Common")

  useEffect(() => {
    const cookieLanguage = Cookies.get("NEXT_LOCALE") as SupportedLanguage
    if (cookieLanguage && cookieLanguage !== language)
      setLanguage(cookieLanguage)
  }, [language])

  const handleLanguageChange = async (newLanguage: SupportedLanguage) => {
    setLanguage(newLanguage)
    Cookies.set("preferred-language", newLanguage, {
      path: "/",
      sameSite: "None",
    })
    router.push(pathname, { locale: newLanguage })
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-3">
          {t("steps.language.choice")}
        </h2>
        <p className="text-muted-foreground">
          {t("steps.language.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <FloatingElement intensity={20}>
          <SelectionOption
            selected={language === "en"}
            onClick={() => handleLanguageChange("en")}
          >
            <div className="flex items-center space-x-4">
              <EnglishIcon selected={language === "en"} />
              <span className="font-medium">{tLanguage("languages.en")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            selected={language === "fr"}
            onClick={() => handleLanguageChange("fr")}
          >
            <div className="flex items-center space-x-4">
              <FrenchIcon selected={language === "fr"} />
              <span className="font-medium">{tLanguage("languages.fr")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            selected={language === "es"}
            onClick={() => handleLanguageChange("es")}
          >
            <div className="flex items-center space-x-4">
              <SpanishIcon selected={language === "es"} />
              <span className="font-medium">{tLanguage("languages.es")}</span>
            </div>
          </SelectionOption>
        </FloatingElement>
      </div>
    </div>
  )
}

export default StepLanguage
