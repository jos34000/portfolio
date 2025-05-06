"use client"
import { LibraryFontItem } from "@/components/library/library-font-item"
import { LibrarySectionTitle } from "@/components/library/library-section-title"

interface FontsSectionProps {
  searchQuery: string
  filters: string[]
}

export function FontsSection({ searchQuery, filters }: FontsSectionProps) {
  const fonts = [
    {
      id: "geist",
      name: "Geist",
      description: "Police principale de l'application",
      category: "Sans-serif",
      weights: ["Regular", "Medium", "Bold"],
      cssVariable: "var(--font-sans)",
      cssImport: `@import url('https://fonts.googleapis.com/css2?family=Geist:wght@400;500;700&display=swap');`,
      cssUsage: `font-family: var(--font-sans);`,
    },
    {
      id: "geist-mono",
      name: "Geist Mono",
      description: "Police monospace pour le code",
      category: "Monospace",
      weights: ["Regular", "Medium"],
      cssVariable: "var(--font-mono)",
      cssImport: `@import url('https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500&display=swap');`,
      cssUsage: `font-family: var(--font-mono);`,
    },
    {
      id: "georgia",
      name: "Georgia",
      description: "Police serif pour certains contenus",
      category: "Serif",
      weights: ["Regular", "Bold", "Italic"],
      cssVariable: "var(--font-serif)",
      cssImport: `/* Police système, pas besoin d'import */`,
      cssUsage: `font-family: var(--font-serif);`,
    },
  ]

  const filteredFonts = fonts.filter((font) => {
    const matchesSearch =
      font.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      font.description.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesFilters =
      filters.length === 0 ||
      filters.some(
        (filter) => font.category.toLowerCase() === filter.toLowerCase()
      )

    return matchesSearch && matchesFilters
  })

  return (
    <section className="mb-12">
      <LibrarySectionTitle
        title="Typographie"
        description="Polices de caractères utilisées dans votre application"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFonts.map((font) => (
          <LibraryFontItem
            key={font.id}
            name={font.name}
            description={font.description}
            category={font.category}
            weights={font.weights}
            cssVariable={font.cssVariable}
            cssImport={font.cssImport}
            cssUsage={font.cssUsage}
          />
        ))}
      </div>

      {filteredFonts.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          Aucune police ne correspond à votre recherche.
        </div>
      )}
    </section>
  )
}
