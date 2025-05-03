import {
  EnglishIcon,
  FrenchIcon,
  SpanishIcon,
} from "@/components/ui/language-icons"
import { useState } from "react"
import { FloatingElement } from "../elements/floating-element"
import { SelectionOption } from "../elements/selection-option"

export default function StepLanguage() {
  const [language, setLanguage] = useState("en")
  localStorage.setItem("preferred-language", language)

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-3">
          Choose your language
        </h2>
        <p className="text-muted-foreground">
          Select the language you&apos;d like to use while browsing my
          portfolio.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <FloatingElement intensity={20}>
          <SelectionOption
            selected={language === "en"}
            onClick={() => setLanguage("en")}
          >
            <div className="flex items-center space-x-4">
              <EnglishIcon selected={language === "en"} />
              <span className="font-medium">English</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            selected={language === "fr"}
            onClick={() => setLanguage("fr")}
          >
            <div className="flex items-center space-x-4">
              <FrenchIcon selected={language === "fr"} />
              <span className="font-medium">Français</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            selected={language === "es"}
            onClick={() => setLanguage("es")}
          >
            <div className="flex items-center space-x-4">
              <SpanishIcon selected={language === "es"} />
              <span className="font-medium">Español</span>
            </div>
          </SelectionOption>
        </FloatingElement>
      </div>
    </div>
  )
}
