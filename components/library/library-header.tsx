"use client"
import { Book, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { ThemeToggleDropdown } from "@/components/theme-switchers/theme-toggle-dropdown"
import { LanguageDropdown } from "@/components/language-switchers/language-dropdown"

export function LibraryHeader() {
  const { t } = useLanguage()

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <Book className="h-5 w-5" />
            <span className="font-semibold">Bibliothèque</span>
          </Link>
          <div className="hidden md:flex items-center text-muted-foreground">
            <ChevronRight className="h-4 w-4 mx-1" />
            <span className="text-sm">Design System</span>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggleDropdown />
          <LanguageDropdown />
          <Link href="/" className="text-sm font-medium hover:text-primary transition-colors hidden md:block">
            Retour au site
          </Link>
        </div>
      </div>
    </header>
  )
}
