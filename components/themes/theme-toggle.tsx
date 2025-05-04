"use client"

import { Check, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import { useTranslations } from "next-intl"

type Direction = "top" | "bottom" | "left" | "right"
type Orientation = "vertical" | "horizontal"

type ThemeToggleProps = {
  direction?: Direction
  orientation?: Orientation
}

export const ThemeToggle = ({
  direction = "bottom",
  orientation = "vertical",
}: ThemeToggleProps) => {
  const { theme, setTheme } = useTheme()
  const t = useTranslations("Common")

  const isVerticalDirection = direction === "top" || direction === "bottom"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isVerticalDirection ? "center" : "end"}
        alignOffset={isVerticalDirection ? 0 : -5}
        side={direction}
        className={cn(
          "min-w-[120px] h-full",
          orientation === "horizontal" && "flex flex-row items-center gap-2 p-2"
        )}
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            "flex items-center justify-between px-2 py-2",
            orientation === "horizontal" && "flex-1",
            theme === "light" && "bg-accent"
          )}
        >
          {t("themes.light")}
          {theme === "light" && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            "flex items-center justify-between px-2 py-2",
            orientation === "horizontal" && "flex-1",
            theme === "dark" && "bg-accent"
          )}
        >
          {t("themes.dark")}
          {theme === "dark" && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            "flex items-center justify-between px-2 py-2",
            orientation === "horizontal" && "flex-1",
            theme === "system" && "bg-accent"
          )}
        >
          {t("themes.system")}
          {theme === "system" && <Check className="h-4 w-4 ml-2" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
