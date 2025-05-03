import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { FloatingElement } from "../elements/floating-element"
import { SelectionOption } from "../elements/selection-option"

export const StepTheme = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-3">
          Choose your theme
        </h2>
        <p className="text-muted-foreground">
          Customize the appearance of the portfolio to your liking.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
        <FloatingElement intensity={20}>
          <SelectionOption
            selected={theme === "light"}
            onClick={() => setTheme("light")}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-white/80 shadow-sm">
                <Sun className="h-6 w-6" />
              </div>
              <span className="font-medium">Light</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            selected={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-gray-900/80 shadow-sm">
                <Moon className="h-6 w-6" />
              </div>
              <span className="font-medium">Dark</span>
            </div>
          </SelectionOption>
        </FloatingElement>

        <FloatingElement intensity={20}>
          <SelectionOption
            selected={theme === "system"}
            onClick={() => setTheme("system")}
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="p-3 rounded-full bg-gradient-to-br from-white to-gray-900 shadow-sm">
                <Monitor className="h-6 w-6" />
              </div>
              <span className="font-medium">System</span>
            </div>
          </SelectionOption>
        </FloatingElement>
      </div>
    </div>
  )
}
