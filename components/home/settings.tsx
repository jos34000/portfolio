"use client"

import { motion } from "framer-motion"
import { Settings2 } from "lucide-react"
import { useTheme } from "next-themes"

import { LanguageToggle } from "@/components/language/language-toggle"
import { ThemeToggle } from "@/components/themes/theme-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

type SettingsProps = {
  className?: string
}

export const Settings = ({ className }: SettingsProps) => {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const bubbleStyle = isDark ? "bg-white text-black" : "bg-black text-white"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          className={cn(
            "fixed bottom-8 right-8 p-3 size-12 rounded-full shadow-lg transition-colors z-50 hover:opacity-90",
            bubbleStyle,
            className
          )}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <Settings2 className="h-5 w-5" />
          <span className="sr-only">Open settings</span>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="top"
        align="center"
        alignOffset={5}
        sideOffset={5}
        className="flex flex-col items-center gap-2 p-2 min-w-fit bg-transparent border-none shadow-none"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={cn(
            "size-12 flex items-center justify-center backdrop-blur-sm rounded-full shadow-lg",
            bubbleStyle
          )}
        >
          <ThemeToggle orientation="horizontal" direction="left" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={cn(
            "size-12 flex items-center justify-center backdrop-blur-sm rounded-full shadow-lg",
            bubbleStyle
          )}
        >
          <LanguageToggle orientation="horizontal" direction="left" />
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
