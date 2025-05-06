import {
  EnglishIcon,
  FrenchIcon,
  SpanishIcon,
} from "@/components/ui/language-icons"
import { usePathname, useRouter } from "@/i18n/navigation"
import { useLanguage } from "@/lib/hooks/use-language-storage"
import { useTranslations } from "next-intl"
import { FloatingElement } from "../elements/floating-element"
import { SelectionOption } from "../elements/selection-option"

export default function StepLanguage() {
  const router = useRouter()
  const pathname = usePathname()
  const { language, setLanguage } = useLanguage()
  const t = useTranslations("Onboarding")
  const tLanguage = useTranslations("Common")

  const handleLanguageChange = async (newLanguage: typeof language) => {
    await setLanguage(newLanguage)
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
