"use client"

import { motion } from "framer-motion"
import { Settings2 } from "lucide-react"
import { useTheme } from "next-themes"

import { LanguageToggle } from "@/components/language/language-toggle"
import { buttonVariants } from "@/components/shadcn/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu"
import { ThemeToggle } from "@/components/themes/theme-toggle"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

type SettingsProps = {
  className?: string
}

export const Settings = ({ className }: SettingsProps) => {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = resolvedTheme === "dark"
  const bubbleStyle = isDark
    ? "bg-white text-black hover:bg-white/90"
    : "bg-black text-white hover:bg-black/90"

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          className={cn(
            "fixed bottom-8 right-8 p-3 size-12 rounded-full shadow-lg transition-colors z-50",
            bubbleStyle,
            className
          )}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
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
          transition={{ duration: 0.1 }}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-12 rounded-full shadow-lg backdrop-blur-sm",
            bubbleStyle
          )}
        >
          <ThemeToggle orientation="horizontal" direction="left" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-12 rounded-full shadow-lg backdrop-blur-sm",
            bubbleStyle
          )}
        >
          <LanguageToggle orientation="horizontal" direction="left" />
        </motion.div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
