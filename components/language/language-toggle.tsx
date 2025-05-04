"use client"

import { Check, Languages } from "lucide-react"
import { useTranslations } from "next-intl"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type Language = {
  code: string
  label: string
}

type Direction = "top" | "bottom" | "left" | "right"
type Orientation = "vertical" | "horizontal"

type LanguageToggleProps = {
  direction?: Direction
  orientation?: Orientation
}

export const LanguageToggle = ({
  direction = "bottom",
  orientation = "vertical",
}: LanguageToggleProps) => {
  const params = useParams()
  const currentLocale = params.locale as string
  const router = useRouter()
  const t = useTranslations("Common")

  const languages: Language[] = [
    { code: "fr", label: t("languages.fr") },
    { code: "en", label: t("languages.en") },
    { code: "es", label: t("languages.es") },
  ]

  const isVerticalDirection = direction === "top" || direction === "bottom"

  const handleLanguageChange = (code: string) => {
    router.push(`/${code}`)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isVerticalDirection ? "center" : "end"}
        alignOffset={isVerticalDirection ? 0 : -5}
        side={direction}
        className={cn(
          "min-w-[120px]",
          orientation === "horizontal" && "flex flex-row items-center gap-2 p-2"
        )}
      >
        {languages.map((lang) => (
          <div key={lang.code}>
            <DropdownMenuItem
              onClick={() => handleLanguageChange(lang.code)}
              className={cn(
                "flex items-center justify-between px-2 py-2",
                orientation === "horizontal" && "flex-1",
                currentLocale === lang.code && "bg-accent"
              )}
            >
              {lang.label}
              {currentLocale === lang.code && (
                <Check className="h-4 w-4 ml-2" />
              )}
            </DropdownMenuItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
