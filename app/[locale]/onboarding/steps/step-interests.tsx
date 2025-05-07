import { FloatingElement } from "@/components/onboarding/floating-element"
import { SelectionOption } from "@/components/onboarding/selection-option"
import { Code, Layers, Palette, Zap } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"

export default function StepInterests() {
  const t = useTranslations("Onboarding")
  const [interests, setInterests] = useState<string[]>([])
  const toggleInterest = (interest: string) => {
    if (interests.includes(interest)) {
      setInterests(interests.filter((i) => i !== interest))
    } else {
      setInterests([...interests, interest])
    }
  }
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-3">
          {t("steps.interests.choice")}
        </h2>
        <p className="text-muted-foreground">
          {t("steps.interests.description")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {[
          {
            id: "projects",
            name: t("steps.interests.projects"),
            icon: <Code className="h-5 w-5" />,
          },
          {
            id: "skills",
            name: t("steps.interests.skills"),
            icon: <Palette className="h-5 w-5" />,
          },
          {
            id: "experience",
            name: t("steps.interests.experience"),
            icon: <Layers className="h-5 w-5" />,
          },
          {
            id: "blog",
            name: t("steps.interests.blog"),
            icon: <Zap className="h-5 w-5" />,
          },
        ].map((item) => (
          <FloatingElement key={item.id} intensity={30} scale={1.02}>
            <SelectionOption
              selected={interests.includes(item.id)}
              onClick={() => toggleInterest(item.id)}
            >
              <div className="flex items-center space-x-4">
                <div
                  className={`p-2.5 rounded-full ${
                    interests.includes(item.id)
                      ? "bg-primary/20"
                      : "bg-muted/50"
                  }`}
                >
                  {item.icon}
                </div>
                <span className="font-medium">{item.name}</span>
              </div>
            </SelectionOption>
          </FloatingElement>
        ))}
      </div>

      <p className="text-sm text-muted-foreground mt-4">
        {t("steps.interests.lastWords")}
      </p>
    </div>
  )
}
